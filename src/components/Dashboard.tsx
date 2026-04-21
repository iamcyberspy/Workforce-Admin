import { motion } from 'motion/react';
import { Users, LayoutGrid, Briefcase, History, Star, ArrowRight, UserPlus, Plus } from 'lucide-react';
import { MOCK_ACTIVITIES, MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';

export function Dashboard() {
  const stats = [
    { label: 'Total Employees', value: '1,284', trend: '+4%', icon: Users, color: 'bg-white text-primary border border-[#FFD08A]' },
    { label: 'Departments', value: '24', trend: 'Stable', icon: LayoutGrid, color: 'bg-white text-tertiary border border-[#FFD08A]' },
    { label: 'Open Positions', value: '12', trend: 'Urgent', icon: Briefcase, color: 'bg-white text-primary border border-[#FFD08A]' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <section className="relative h-[320px] bg-gradient-to-r from-[#FF8B3D] to-[#FCA311] rounded-[2.5rem] shadow-2xl relative overflow-hidden flex items-center p-12 group">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[rgba(255,255,255,0.1)] rounded-l-[150px] flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-700">
           <div className="w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 space-y-6 max-w-xl">
          <span className="bg-white/20 backdrop-blur-md text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] inline-block">Welcome Back, Unit Commander</span>
          <h2 className="font-headline text-6xl font-black text-white leading-[0.9] tracking-tighter">
            สวัสดีตอนเช้า <br/>
            <span className="text-[#FFEEB8]">ผู้ช่วยบริหาร</span>
          </h2>
          <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-transform">
            Review Activity
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-[#FFD08A] hover:shadow-xl transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <div className={cn("w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:rotate-6", stat.color)}>
                  <Icon size={28} />
                </div>
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                  stat.trend === '+4%' ? "bg-green-50 text-green-600" : 
                  stat.trend === 'Urgent' ? "bg-error-container text-error" : "bg-[#FFF4D1] text-[#D6A15E]"
                )}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-[#D6A15E] font-black text-[10px] uppercase tracking-[0.2em] mb-1">{stat.label}</h3>
              <p className="text-4xl font-headline font-black text-[#432C0B] tracking-tight">{stat.value}</p>
            </div>
          );
        })}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-black text-[#432C0B]">Recent Activities</h3>
            <button className="text-primary font-black text-sm uppercase tracking-widest hover:underline decoration-4 underline-offset-8">View Archive</button>
          </div>
          <div className="space-y-4">
            {MOCK_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="bg-white p-6 rounded-[2rem] shadow-md border border-[#FFD08A] flex gap-6 hover:translate-x-2 transition-all cursor-pointer group">
                <div className={cn(
                  "w-16 h-16 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 transition-all",
                  activity.type === 'payroll' ? "bg-[#FF8B3D]/10 text-primary" :
                  activity.type === 'anniversary' ? "bg-[#72EFDD]/10 text-[#00B0FF]" : "bg-[#4CC9F0]/10 text-[#4CC9F0]"
                )}>
                  <Star size={24} className={cn(activity.type === 'anniversary' && "fill-current")} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-black text-[#432C0B] leading-none group-hover:text-primary transition-colors">{activity.title}</p>
                    <span className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest bg-[#FFF4D1] px-3 py-1 rounded-full">{activity.time}</span>
                  </div>
                  <p className="text-sm text-[#432C0B]/60 font-medium leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-4 space-y-6">
          <h3 className="text-2xl font-black text-[#432C0B]">Honored This Week</h3>
          <div className="space-y-4">
            {MOCK_EMPLOYEES.slice(0, 3).map((emp) => (
              <div key={emp.id} className="bg-white p-5 rounded-[2rem] shadow-md border border-[#FFD08A] hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-[#FFD08A]/10 group-hover:ring-primary/20 transition-all">
                      <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                   </div>
                  <div>
                    <h4 className="font-black text-[#432C0B] text-base leading-none group-hover:text-primary transition-colors">{emp.name}</h4>
                    <p className="text-[11px] font-bold text-[#D6A15E] uppercase tracking-widest mt-1.5">{emp.role}</p>
                    <div className="mt-3">
                      <span className="text-[9px] bg-[#FFF4D1] text-[#D6A15E] px-3 py-1 rounded-lg font-black uppercase tracking-widest">
                        {emp.department}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full h-32 border-2 border-dashed border-[#FFD08A] rounded-[2rem] text-[#D6A15E] hover:text-primary hover:border-primary hover:bg-white transition-all flex flex-col items-center justify-center gap-2 group">
              <Plus size={32} className="group-hover:rotate-90 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add New Honoree</span>
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
