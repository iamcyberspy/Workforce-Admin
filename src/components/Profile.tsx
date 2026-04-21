import { motion } from 'motion/react';
import { 
  Mail, Phone, MapPin, Edit3, MoreHorizontal, 
  ChevronRight, ArrowLeft, MessageSquare, Info, Star 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Employee } from '../types';

interface ProfileProps {
  employee: Employee;
  onBack: () => void;
}

export function Profile({ employee, onBack }: ProfileProps) {
  const careerJourney = [
    { 
      date: 'Present Day', 
      title: 'Senior Portfolio Lead', 
      description: 'Leading the enterprise-wide transition to decentralized workforce models. Managing $200M OPEX across three continents.',
      tags: ['Strategy', 'Ops'],
      current: true
    },
    { 
      date: 'Jan 2021 — Dec 2022', 
      title: 'Regional Logistics Director', 
      description: 'Spearheaded the \'Unity Project\' which unified reporting structures for North American and EMEA regions.',
    },
    { 
      date: 'Oct 2018 — Jan 2021', 
      title: 'Ops Manager', 
      description: 'Joined the organization as a senior hire to optimize the internal HR pipeline during hyper-growth.',
    }
  ];

  const teamMembers = [
    { name: 'Julian Vane', role: 'Ops Director, EMEA', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAJA2ilUznh16PUUculJNPPf_q3bO-8_5bdkM03ATvZroa8b7jG_ddwa0VmznNwl-7M3TFc_4V6M1Qv7AchtfdpiHonwF20jo2w8fiZY2ua8eRf5SFkhCQ9ar_rISU9Zsyvq3b8E3494rnoMPA7p4Nc1eidu4DUNN4rRr7nFOAIrb35qPXPq0T8UnsLz68Ic1aQazjqZTi1l6jVIEOAz8Ae6qkqncAwNThTbNjcz07L3zihNDwIViAKt3dS2xznXlZUpVt5e44rs8' },
    { name: 'Sarah Jenkins', role: 'Data Strategy', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJKdjNp70dWXQJomPQ2x9Zj0xpUn-EI_tnn-rZ00OKs9ybQWcMBgakfhD4nNh0d3_SFq4-em16QBUReAaQcDCty_uikX8vCE6JBcU87XhM611GneL-uIbO-1If_Fh4SupW3md5R8eqMLwen624d6YQozDy5ZnZjn6wHBB40W9AQi2mPeKqGSX72JBo5e8lsMvV9QguAb4G0hZf7AsyqHfSyVWihT6XX0TOttxt2ukW7qD_qGp5fHv9dZDEeAZH_o__FeHFFfA9c2s' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 pb-20"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-3 text-[#D6A15E] hover:text-primary transition-all font-black text-[11px] uppercase tracking-[0.3em] group mb-6"
      >
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#FFD08A] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowLeft size={16} strokeWidth={3} />
        </div>
        Back to Resources
      </button>

      <section className="relative">
        <div className="h-64 w-full rounded-[3rem] bg-gradient-to-br from-[#FF8B3D] to-[#FCA311] overflow-hidden relative shadow-2xl border-4 border-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-end gap-10 px-16 -mt-24 relative z-10">
          <div className="relative group">
            <div className="w-56 h-56 rounded-[3rem] overflow-hidden border-8 border-surface shadow-2xl transition-transform duration-500 group-hover:scale-105">
               <img src={employee.avatar} className="w-full h-full object-cover" alt={employee.name} />
            </div>
            <button className="absolute bottom-4 right-4 bg-primary p-4 rounded-2xl text-white shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all border-4 border-white">
              <Edit3 size={20} strokeWidth={3} />
            </button>
          </div>
          
          <div className="mb-8 flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-5 py-2 bg-white text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm border border-[#FFD08A]/30">Elite Tier</span>
              <span className="px-5 py-2 bg-[#72EFDD] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">Operational</span>
            </div>
            <h1 className="text-7xl font-headline font-black text-[#432C0B] tracking-tighter leading-none">{employee.name}</h1>
            <p className="text-2xl font-headline text-[#D6A15E] font-bold mt-3">{employee.role}</p>
          </div>
          
          <div className="mb-8 flex gap-4">
            <button className="px-10 py-5 bg-[#FF8B3D] text-white rounded-full shadow-2xl shadow-primary/40 font-black text-sm tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
              <MessageSquare size={20} strokeWidth={3} />
              CONTACT
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-50">
            <h3 className="font-headline font-black text-[#432C0B] text-2xl tracking-tight mb-10">Secure Communications</h3>
            <div className="space-y-10">
              <ContactItem icon={Mail} label="Primary Contact" value={employee.email || 'N/A'} />
              <ContactItem icon={Phone} label="External Line" value={employee.phone || 'N/A'} />
              <ContactItem icon={MapPin} label="Physical Node" value={employee.workstation || 'N/A'} />
            </div>
          </div>

          <div className="bg-[#FFF4D1] p-10 rounded-[2.5rem] space-y-8 border-2 border-[#FFD08A]/30">
            <h3 className="font-headline font-black text-[#432C0B] text-2xl tracking-tight">System Identity</h3>
            <div className="space-y-6">
              <InfoRow label="UID" value={employee.id} isMono />
              <InfoRow label="Activation" value={employee.startDate || 'N/A'} />
              <InfoRow label="Contract" value={employee.employmentType || 'N/A'} noBorder />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border-2 border-[#FFD08A] border-opacity-50">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h3 className="font-headline font-black text-[#432C0B] text-4xl tracking-tight">Growth Trajectory</h3>
                <p className="text-[#D6A15E] text-sm font-bold uppercase tracking-widest mt-2">Historical milestones of impact</p>
              </div>
              <div className="w-20 h-20 rounded-full border-8 border-[#FFF5E1] flex items-center justify-center">
                 <span className="text-primary font-black text-xs">5.4Y</span>
              </div>
            </div>
            
            <div className="relative pl-12 border-l-4 border-[#FFF5E1] space-y-20 ml-6">
              {careerJourney.map((milestone, i) => (
                <div key={i} className="relative">
                  <div className={cn(
                    "absolute -left-[62px] top-2 w-10 h-10 rounded-full border-6 border-white shadow-xl flex items-center justify-center",
                    milestone.current ? "bg-primary scale-125" : "bg-[#FFD08A]"
                  )}>
                    {milestone.current && <Star size={14} className="text-white fill-current" />}
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-[#FFF5E1] px-4 py-2 rounded-xl border border-[#FFD08A]/30">
                      {milestone.date}
                    </span>
                    <h4 className="text-3xl font-headline font-black text-[#432C0B]">{milestone.title}</h4>
                    <p className="text-[#432C0B]/70 font-medium leading-relaxed text-lg max-w-2xl">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-16 h-16 rounded-[1.5rem] bg-[#FFF5E1] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border-2 border-[#FFD08A]/20">
        <Icon size={28} strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-black text-[#432C0B]">{value}</p>
      </div>
    </div>
  );
}

function InfoRow({ label, value, noBorder, isMono }: { label: string, value: string, noBorder?: boolean, isMono?: boolean }) {
  return (
    <div className={cn(
      "flex justify-between items-center py-5",
      !noBorder && "border-b-2 border-[#FFD08A]/20"
    )}>
      <span className="text-xs font-black text-[#D6A15E] uppercase tracking-widest">{label}</span>
      <span className={cn(
        "text-base font-black text-[#432C0B]",
        isMono && "font-mono bg-white px-3 py-1 rounded-lg border border-[#FFD08A]/40"
      )}>{value}</span>
    </div>
  );
}
