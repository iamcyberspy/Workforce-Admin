import { motion } from 'motion/react';
import { Clock, Calendar, CheckCircle2, XCircle, AlertCircle, Search, ChevronLeft, ChevronRight, Filter, Download } from 'lucide-react';
import { MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';
import { useState } from 'react';

export function Attendance() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for attendance
  const attendanceData = MOCK_EMPLOYEES.map(emp => {
    const statuses = ['on-time', 'late', 'absent', 'on-leave'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    let checkIn = '09:00 AM';
    let checkOut = '06:00 PM';
    
    if (randomStatus === 'late') {
       checkIn = '09:45 AM';
    } else if (randomStatus === 'absent' || randomStatus === 'on-leave') {
       checkIn = '--:--';
       checkOut = '--:--';
    }

    return {
      ...emp,
      status: randomStatus,
      checkIn,
      checkOut,
      date: 'Oct 23, 2023'
    };
  });

  const filteredAttendance = attendanceData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Present', value: '84%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Late Arrival', value: '12%', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Absent', value: '4%', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-10 pb-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h2 className="font-headline text-4xl font-black text-[#432C0B] tracking-tight">Time & Attendance</h2>
          <p className="text-[#D6A15E] font-bold text-sm tracking-wide">Monitoring real-time operational availability across the unit.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-2 border-[#FFD08A] text-[#D6A15E] px-6 py-3 rounded-full flex items-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-[#FFF4D1] transition-all shadow-sm">
            <Download size={18} strokeWidth={3} />
            Export Logs
          </button>
          <button className="bg-gradient-to-tr from-[#FF8B3D] to-[#FCA311] text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl shadow-primary/30 active:scale-[0.95] transition-all font-black text-xs uppercase tracking-widest">
            <Calendar size={18} strokeWidth={3} />
            Weekly View
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-[#FFD08A] flex items-center gap-6">
            <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-inner", stat.bg)}>
              <stat.icon size={32} className={stat.color} />
            </div>
            <div>
              <h3 className="text-[#D6A15E] font-black text-[10px] uppercase tracking-[0.2em] mb-1">{stat.label}</h3>
              <p className="text-4xl font-headline font-black text-[#432C0B] tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-white rounded-[3rem] shadow-xl border-2 border-[#FFD08A] border-opacity-50 overflow-hidden">
        <div className="p-10 border-b border-[#FFD08A]/20 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#FFFBEB]/50">
          <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="relative flex-1 md:w-80">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFD08A]" size={20} strokeWidth={3} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search personnel logs..."
                  className="w-full pl-14 pr-6 py-4 bg-white border-2 border-[#FFD08A] rounded-2xl text-sm font-bold text-[#432C0B] focus:ring-0 focus:border-primary transition-all shadow-sm"
                />
             </div>
             <button className="p-4 bg-white border-2 border-[#FFD08A] rounded-2xl text-[#D6A15E] hover:text-primary transition-all shadow-sm">
                <Filter size={20} strokeWidth={3} />
             </button>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border-2 border-[#FFD08A] shadow-sm">
             <button className="text-[#D6A15E] hover:text-primary"><ChevronLeft size={20} strokeWidth={3} /></button>
             <span className="text-xs font-black text-[#432C0B] uppercase tracking-widest min-w-[120px] text-center">October 23, 2023</span>
             <button className="text-[#D6A15E] hover:text-primary"><ChevronRight size={20} strokeWidth={3} /></button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#FFF4D1]/30">
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">Personnel</th>
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">Status</th>
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">In</th>
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">Out</th>
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">Total Hours</th>
                <th className="px-10 py-6 text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FFD08A]/10">
              {filteredAttendance.map((row) => (
                <tr key={row.id} className="group hover:bg-[#FFFBEB]/50 transition-colors">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-md">
                        <img src={row.avatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-black text-[#432C0B] text-sm group-hover:text-primary transition-colors">{row.name}</p>
                        <p className="text-[10px] font-bold text-[#D6A15E] uppercase tracking-widest mt-1">{row.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                      row.status === 'on-time' ? "bg-green-50 text-green-600 border-green-200" :
                      row.status === 'late' ? "bg-amber-50 text-amber-600 border-amber-200" :
                      row.status === 'on-leave' ? "bg-blue-50 text-blue-600 border-blue-200" :
                      "bg-red-50 text-red-600 border-red-200"
                    )}>
                      {row.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-sm font-black text-[#432C0B] font-mono">{row.checkIn}</td>
                  <td className="px-10 py-6 text-sm font-black text-[#432C0B] font-mono">{row.checkOut}</td>
                  <td className="px-10 py-6 text-sm font-black text-[#432C0B]">
                    {row.status === 'on-time' || row.status === 'late' ? '8.5h' : '0h'}
                  </td>
                  <td className="px-10 py-6">
                    <button className="p-3 bg-[#FFF5E1] text-primary rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                      <Calendar size={16} strokeWidth={3} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-10 border-t border-[#FFD08A]/20 bg-[#FFFBEB]/30 flex justify-between items-center">
           <p className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest">End of Daily Logs • 23.10.2023</p>
           <button className="text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:underline decoration-4 underline-offset-8">View Master Log</button>
        </div>
      </div>
    </motion.div>
  );
}
