import { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, MapPin, ChevronRight, Search, ChevronLeft, Star, Verified, Clock, Filter } from 'lucide-react';
import { MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';
import { Employee } from '../types';

interface DirectoryProps {
  onSelectEmployee: (emp: Employee) => void;
}

export function Directory({ onSelectEmployee }: DirectoryProps) {
  const [activeDept, setActiveDept] = useState('All Teams');
  const [statusFilter, setStatusFilter] = useState('All Status');
  
  const categories = ['All Teams', 'Engineering', 'Design', 'Marketing', 'Human Resources', 'Legal'];
  const statuses = ['All Status', 'Active', 'Away', 'On Leave'];

  const filteredEmployees = MOCK_EMPLOYEES.filter(emp => {
    const deptMatch = activeDept === 'All Teams' || emp.department === activeDept;
    
    // Determine status - default to 'Active' if not specified
    const empStatus = emp.status || 'Active';
    const statusMatch = statusFilter === 'All Status' || empStatus === statusFilter;
    
    return deptMatch && statusMatch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <h2 className="font-headline text-4xl font-black text-[#432C0B] tracking-tight">Personnel Directory</h2>
            <p className="text-[#D6A15E] font-bold text-sm tracking-wide">Orchestrating {filteredEmployees.length} global contributors with vibrant efficiency.</p>
          </div>
          <button className="bg-gradient-to-tr from-[#FF8B3D] to-[#FCA311] text-white px-10 py-4 rounded-full flex items-center gap-3 shadow-2xl shadow-primary/30 active:scale-[0.95] transition-all font-black text-sm uppercase tracking-widest leading-none">
            <UserPlus size={20} strokeWidth={3} />
            Onboard Member
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-3 border-r-2 border-[#FFD08A]/30 pr-4 mr-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveDept(cat)}
                className={cn(
                  "px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2",
                  activeDept === cat ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-white border-2 border-[#FFD08A] text-[#D6A15E] hover:bg-[#FF8B3D] hover:text-white"
                )}
              >
                {cat} 
                {cat === 'All Teams' && <span className={cn("px-3 py-1 rounded-full text-[10px] font-black leading-none", activeDept === 'All Teams' ? "bg-white/20" : "bg-[#FFF5E1]")}>1.2k</span>}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-white border-2 border-[#FFD08A] px-6 py-2.5 rounded-full shadow-sm">
            <div className="flex items-center gap-2 border-r border-[#FFD08A] pr-4">
              <span className="text-[10px] text-[#D6A15E] font-black uppercase tracking-widest">Status:</span>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent border-none text-xs font-black text-primary focus:ring-0 cursor-pointer p-0 appearance-none uppercase tracking-widest"
              >
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#D6A15E] font-black uppercase tracking-widest">Sort:</span>
              <select className="bg-transparent border-none text-xs font-black text-primary focus:ring-0 cursor-pointer p-0 appearance-none uppercase tracking-widest">
                <option>Alphabetical</option>
                <option>Join Date</option>
                <option>Tier</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredEmployees.map((emp) => (
          <div 
            key={emp.id} 
            onClick={() => onSelectEmployee(emp)}
            className="group bg-white rounded-[2.5rem] overflow-hidden hover:shadow-[0_32px_64px_-12px_rgba(255,139,61,0.2)] transition-all duration-700 flex flex-col border-2 border-[#FFD08A] border-opacity-50 cursor-pointer"
          >
            <div className="h-28 bg-[#FFF4D1] relative overflow-hidden group-hover:h-32 transition-all duration-700">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-[#FF8B3D] to-transparent"></div>
            </div>
            <div className="px-8 pb-8 -mt-14 flex-1 flex flex-col items-center relative z-10">
              <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700 group-hover:-translate-y-2">
                <img src={emp.avatar} className="w-full h-full object-cover" alt={emp.name} />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-headline text-xl font-black text-[#432C0B] leading-tight group-hover:text-primary transition-colors">{emp.name}</h3>
                <p className="text-[#D6A15E] font-black text-[10px] uppercase tracking-[0.2em] mt-2">{emp.role}</p>
              </div>
              
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {emp.tags?.map((tag, i) => (
                  <span key={i} className="bg-[#FFF5E1] text-[#D6A15E] text-[9px] px-3 py-1.5 rounded-xl font-black uppercase tracking-widest border border-[#FFD08A]/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 w-full pt-8 border-t border-[#FFD08A]/20 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[#D6A15E]">
                  {emp.location ? (
                    <>
                      <MapPin size={16} strokeWidth={2.5} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{emp.location}</span>
                    </>
                  ) : emp.isTopPerformer ? (
                    <div className="flex items-center gap-1.5 text-primary">
                      <Star size={16} strokeWidth={2.5} className="fill-current" />
                      <span className="text-[10px] font-black uppercase tracking-widest">MVP</span>
                    </div>
                  ) : emp.status === 'Away' ? (
                    <div className="flex items-center gap-1.5 text-tertiary">
                      <Clock size={16} strokeWidth={2.5} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Idle</span>
                    </div>
                  ) : emp.status === 'On Leave' ? (
                    <div className="flex items-center gap-1.5 text-[#D6A15E]">
                      <Filter size={16} strokeWidth={2.5} />
                      <span className="text-[10px] font-black uppercase tracking-widest">On Leave</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[#D6A15E]">
                      <Verified size={16} strokeWidth={2.5} />
                      <span className="text-[10px] font-black uppercase tracking-widest">High Profile</span>
                    </div>
                  )}
                </div>
                <button className="bg-[#FFF5E1] w-10 h-10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="border-4 border-dashed border-[#FFD08A]/40 rounded-[2.5rem] flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-white hover:border-primary/40 transition-all hover:shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#FFF5E1] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary transition-all group-hover:text-white border-2 border-[#FFD08A]/20">
            <UserPlus size={32} strokeWidth={3} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D6A15E] group-hover:text-primary transition-colors">Expand Unit</p>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-outline-variant/10 pt-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 leading-none">Showing 1 to 6 of 1,248 employees</p>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant/40 hover:text-primary transition-colors">
            <ChevronLeft size={18} />
          </button>
          {[1, 2, 3].map((n) => (
            <button 
              key={n} 
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl text-xs font-black transition-all",
                n === 1 ? "bg-primary-container text-on-primary shadow-lg shadow-primary/20" : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest"
              )}
            >
              {n}
            </button>
          ))}
          <span className="text-on-surface-variant/40 px-1 font-bold text-sm">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest text-xs font-black">208</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant/40 hover:text-primary transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
