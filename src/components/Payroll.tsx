import { motion } from 'motion/react';
import { 
  CreditCard, DollarSign, TrendingUp, History, 
  CheckCircle2, AlertCircle, Download, FileText, 
  ChevronRight, Search, Filter, Calendar
} from 'lucide-react';
import { MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';
import { useState } from 'react';

export function Payroll() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock payroll data derived from employees
  const payrollData = MOCK_EMPLOYEES.map(emp => {
    // Generate some mock financial data
    const baseSalary = 4500 + (Math.random() * 8000);
    const bonus = Math.random() > 0.7 ? baseSalary * 0.1 : 0;
    const tax = baseSalary * 0.22;
    const netPay = baseSalary + bonus - tax;

    return {
      ...emp,
      salary: baseSalary,
      bonus,
      deductions: tax,
      net: netPay,
      status: Math.random() > 0.2 ? 'Processed' : 'Pending',
      lastPaid: 'Oct 01, 2023'
    };
  });

  const filteredPayroll = payrollData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Monthly Disbursement', value: '$1.42M', delta: '+2.4%', icon: DollarSign, color: 'text-primary', bg: 'bg-[#FFFBEB]' },
    { label: 'Pending Approvals', value: '08', delta: 'Urgent', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Average Growth', value: '4.2%', delta: 'Steady', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h2 className="font-headline text-4xl font-black text-[#432C0B] tracking-tight">Financial Treasury</h2>
          <p className="text-[#D6A15E] font-bold text-sm tracking-wide">Managing global compensation and fiscal distribution cycles.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-2 border-[#FFD08A] text-[#D6A15E] px-6 py-3 rounded-full flex items-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-[#FFF4D1] transition-all shadow-sm">
            <FileText size={18} strokeWidth={3} />
            Tax Declarations
          </button>
          <button className="bg-gradient-to-tr from-[#FF8B3D] to-[#FCA311] text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl shadow-primary/30 active:scale-[0.95] transition-all font-black text-xs uppercase tracking-widest">
            <CreditCard size={18} strokeWidth={3} />
            Process Batch
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-[#FFD08A] border-opacity-40 group hover:border-primary transition-all duration-500 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
             <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex justify-between items-start">
                  <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-lg", stat.bg)}>
                    <stat.icon size={28} className={stat.color} strokeWidth={3} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border",
                    stat.delta === 'Urgent' ? "bg-red-50 text-red-600 border-red-100" : "bg-[#FFF4D1] text-[#D6A15E] border-[#FFD08A]/30"
                  )}>
                    {stat.delta}
                  </span>
                </div>
                <div>
                   <h3 className="text-[#D6A15E] font-black text-[10px] uppercase tracking-[0.2em] mb-2">{stat.label}</h3>
                   <p className="text-5xl font-headline font-black text-[#432C0B] tracking-tighter">{stat.value}</p>
                </div>
             </div>
          </div>
        ))}
      </section>

      <div className="bg-white rounded-[3.5rem] shadow-2xl border-4 border-[#FFD08A] border-opacity-30 overflow-hidden">
        <div className="p-12 border-b border-[#FFD08A]/10 flex flex-col md:flex-row justify-between items-center gap-10 bg-gradient-to-br from-white to-[#FFFBEB]">
           <div className="space-y-2">
             <h3 className="text-3xl font-black text-[#432C0B] tracking-tight text-center md:text-left">Personnel Salaries</h3>
             <p className="text-[#D6A15E] font-bold text-xs uppercase tracking-widest text-center md:text-left">Cycle: October 2023 • Disbursement Phase</p>
           </div>
           
           <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="relative flex-1 md:w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#FFD08A]" size={22} strokeWidth={3} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ID / Name / Department..."
                  className="w-full pl-16 pr-8 py-5 bg-white border-4 border-[#FFD08A] border-opacity-20 rounded-[2rem] text-sm font-bold text-[#432C0B] focus:ring-0 focus:border-primary transition-all shadow-inner"
                />
             </div>
             <button className="p-5 bg-white border-4 border-[#FFD08A] border-opacity-20 rounded-[1.5rem] text-[#D6A15E] hover:text-primary transition-all shadow-md active:scale-95">
                <Filter size={24} strokeWidth={3} />
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#FFF4D1]/20">
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Contributor</th>
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Gross Salary</th>
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Bonus/Adjust.</th>
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Deductions</th>
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Net Payout</th>
                <th className="px-12 py-8 text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y-4 divide-[#FFFBEB]">
              {filteredPayroll.map((row) => (
                <tr key={row.id} className="group hover:bg-[#FFFBEB]/40 transition-all duration-300">
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-[1.2rem] overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                        <img src={row.avatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-black text-[#432C0B] text-base leading-none group-hover:text-primary transition-colors">{row.name}</p>
                        <p className="text-[10px] font-bold text-[#D6A15E] uppercase tracking-[0.2em] mt-2">{row.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-8 font-black text-[#432C0B] text-sm font-mono tracking-tight text-opacity-80">
                    ${row.salary.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-12 py-8">
                    <span className={cn(
                      "text-xs font-black font-mono",
                      row.bonus > 0 ? "text-green-600" : "text-[#D6A15E] opacity-40"
                    )}>
                      {row.bonus > 0 ? `+$${row.bonus.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                    </span>
                  </td>
                  <td className="px-12 py-8 font-black text-red-500/60 text-sm font-mono tracking-tight">
                    -${row.deductions.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-12 py-8">
                    <p className="text-lg font-black text-primary tracking-tighter">
                      ${row.net.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </p>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-3">
                      {row.status === 'Processed' ? (
                        <CheckCircle2 size={18} className="text-green-500" strokeWidth={3} />
                      ) : (
                        <Clock size={18} className="text-amber-500 animate-pulse" strokeWidth={3} />
                      )}
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        row.status === 'Processed' ? "text-green-600" : "text-amber-600"
                      )}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-12 bg-[#FFFBEB] border-t-4 border-[#FFD08A] border-opacity-20 flex justify-between items-center">
           <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-[#FFD08A]"></div>
                ))}
              </div>
              <p className="text-[11px] font-black text-[#432C0B] uppercase tracking-[0.2em] opacity-60">Verified by 3 Treasury Leads</p>
           </div>
           <button className="bg-[#FF8B3D] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-[#FF8B3D]/40 transition-all flex items-center gap-3 active:scale-95">
             <Download size={20} strokeWidth={3} />
             Download Summary
           </button>
        </div>
      </div>
    </motion.div>
  );
}

function Clock({ size, className, strokeWidth }: { size: number, className?: string, strokeWidth?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth || 2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
