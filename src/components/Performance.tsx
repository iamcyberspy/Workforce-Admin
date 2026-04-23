import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, Star, Award, Target, Zap, 
  Users, BarChart as BarChartIcon, PieChart as PieChartIcon,
  ChevronRight, ArrowUpRight, Trophy, Gift, Calendar, UserPlus, X, Heart
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, 
  AreaChart, Area, Cell, PieChart, Pie
} from 'recharts';
import { MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';
import { useState } from 'react';

const MOCK_AWARDS = [
  { id: '1', name: 'Innovator of the Month', date: 'Oct 2023', recipient: 'Alex Rivera', description: 'Exceptional application of AI-driven automation in strategic planning.', icon: Zap, color: 'text-primary' },
  { id: '2', name: 'Leadership Excellence', date: 'Sep 2023', recipient: 'Sarah Chen', description: 'Guiding the cross-functional squad through a critical pivot with 100% retention.', icon: Star, color: 'text-amber-500' },
  { id: '3', name: 'Customer Obsession', date: 'Aug 2023', recipient: 'Marcus Miller', description: 'Redefining client support cycles with a 40% reduction in response latency.', icon: Heart, color: 'text-red-500' },
];

const INDIVIDUAL_PERFORMANCE = [
  { subject: 'Technical', A: 120, fullMark: 150 },
  { subject: 'Leadership', A: 98, fullMark: 150 },
  { subject: 'Communication', A: 86, fullMark: 150 },
  { subject: 'Reliability', A: 99, fullMark: 150 },
  { subject: 'Innovation', A: 85, fullMark: 150 },
  { subject: 'Collaboration', A: 110, fullMark: 150 },
];

const TEAM_VELOCITY = [
  { month: 'Jan', velocity: 45, quality: 88 },
  { month: 'Feb', velocity: 52, quality: 92 },
  { month: 'Mar', velocity: 48, quality: 90 },
  { month: 'Apr', velocity: 61, quality: 94 },
  { month: 'May', velocity: 55, quality: 91 },
  { month: 'Jun', velocity: 67, quality: 96 },
];

const TOP_PERFORMERS_DATA = [
  { name: 'Eng', value: 400 },
  { name: 'Design', value: 300 },
  { name: 'Market', value: 300 },
  { name: 'Sales', value: 200 },
];

const COLORS = ['#FF8B3D', '#FCA311', '#FFD08A', '#FFFBEB'];

export function Performance() {
  const [isNominateModalOpen, setIsNominateModalOpen] = useState(false);
  const [nominee, setNominee] = useState('');
  const [awardType, setAwardType] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 pb-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h2 className="font-headline text-4xl font-black text-[#432C0B] tracking-tight">Performance Matrix</h2>
          <p className="text-[#D6A15E] font-bold text-sm tracking-wide">Synthesizing human capital efficiency and operational velocity.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-2 border-[#FFD08A] text-[#D6A15E] px-6 py-3 rounded-full flex items-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-[#FFF4D1] transition-all shadow-sm">
            <Trophy size={18} strokeWidth={3} />
            Leaderboard
          </button>
          <button className="bg-gradient-to-tr from-[#FF8B3D] to-[#FCA311] text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl shadow-primary/30 active:scale-[0.95] transition-all font-black text-xs uppercase tracking-widest">
            <Zap size={18} strokeWidth={3} />
            Optimization AI
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-[#FFD08A] flex flex-col justify-between group">
           <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] flex items-center justify-center text-primary">
                 <Target size={24} strokeWidth={3} />
              </div>
              <ArrowUpRight size={20} className="text-[#D6A15E] opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           <div>
              <p className="text-[#D6A15E] font-black text-[10px] uppercase tracking-widest mb-1">KPI Completion</p>
              <h4 className="text-3xl font-headline font-black text-[#432C0B]">94.2%</h4>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-[#FFD08A] flex flex-col justify-between group">
           <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                 <Award size={24} strokeWidth={3} />
              </div>
              <ArrowUpRight size={20} className="text-[#D6A15E] opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           <div>
              <p className="text-[#D6A15E] font-black text-[10px] uppercase tracking-widest mb-1">Avg Rating</p>
              <h4 className="text-3xl font-headline font-black text-[#432C0B]">4.8/5.0</h4>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-[#FFD08A] flex flex-col justify-between group">
           <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500">
                 <Users size={24} strokeWidth={3} />
              </div>
              <ArrowUpRight size={20} className="text-[#D6A15E] opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           <div>
              <p className="text-[#D6A15E] font-black text-[10px] uppercase tracking-widest mb-1">Team Retention</p>
              <h4 className="text-3xl font-headline font-black text-[#432C0B]">98.1%</h4>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-[#FFD08A] flex flex-col justify-between group">
           <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <TrendingUp size={24} strokeWidth={3} />
              </div>
              <ArrowUpRight size={20} className="text-[#D6A15E] opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           <div>
              <p className="text-[#D6A15E] font-black text-[10px] uppercase tracking-widest mb-1">Sprint Velocity</p>
              <h4 className="text-3xl font-headline font-black text-[#432C0B]">+12.4%</h4>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Team Velocity Over Time */}
         <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-30">
            <h3 className="text-2xl font-black text-[#432C0B] mb-8 flex items-center gap-3">
               <TrendingUp size={24} className="text-primary" strokeWidth={3} />
               Delivery Velocity & Quality
            </h3>
            <div className="h-[350px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={TEAM_VELOCITY}>
                    <defs>
                      <linearGradient id="colorVel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF8B3D" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF8B3D" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#FFD08A" strokeOpacity={0.2} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#D6A15E', fontSize: 12, fontWeight: 900 }} />
                    <Tooltip contentStyle={{ borderRadius: '1rem', border: '2px solid #FFD08A', fontWeight: 900 }} />
                    <Area type="monotone" dataKey="velocity" stroke="#FF8B3D" strokeWidth={5} fillOpacity={1} fill="url(#colorVel)" />
                    <Line type="monotone" dataKey="quality" stroke="#FCA311" strokeWidth={4} dot={{ r: 6, fill: '#FCA311' }} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Talent Benchmark */}
         <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-30">
            <h3 className="text-2xl font-black text-[#432C0B] mb-8 flex items-center gap-3">
               <Award size={24} className="text-tertiary" strokeWidth={3} />
               Global Talent Benchmark
            </h3>
            <div className="h-[350px] w-full flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={INDIVIDUAL_PERFORMANCE}>
                    <PolarGrid stroke="#FFD08A" strokeOpacity={0.5} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#D6A15E', fontSize: 11, fontWeight: 900 }} />
                    <PolarRadiusAxis hide />
                    <Radar
                      name="Elite Standard"
                      dataKey="A"
                      stroke="#FF8B3D"
                      fill="#FF8B3D"
                      fillOpacity={0.6}
                      strokeWidth={3}
                    />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-8 bg-white p-10 rounded-[3.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-30 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-black text-[#432C0B]">High-Performance Units</h3>
               <button className="text-primary font-black text-sm uppercase tracking-widest hover:underline decoration-4 underline-offset-8">Rankings</button>
            </div>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PERFORMANCE_DATA} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#432C0B', fontWeight: 900, fontSize: 12 }} width={100} />
                    <Tooltip cursor={{ fill: '#FFFBEB' }} contentStyle={{ borderRadius: '1rem', border: '2px solid #FFD08A' }} />
                    <Bar dataKey="completion" fill="#FF8B3D" radius={[0, 20, 20, 0]} barSize={24} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="lg:col-span-4 bg-white p-10 rounded-[3.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-30">
            <h3 className="text-2xl font-black text-[#432C0B] mb-8">Role Distribution</h3>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={TOP_PERFORMERS_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {TOP_PERFORMERS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '1rem', border: '2px solid #FFD08A' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      <section className="space-y-8">
        <div className="flex items-center justify-between px-2">
           <div className="space-y-1">
              <h3 className="text-3xl font-black text-[#432C0B] tracking-tight">Recognition & Awards</h3>
              <p className="text-[#D6A15E] font-bold text-xs uppercase tracking-widest">Celebrating high-impact contributions and strategic excellence</p>
           </div>
           <button 
             onClick={() => setIsNominateModalOpen(true)}
             className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all font-black text-xs uppercase tracking-widest"
           >
              <UserPlus size={18} strokeWidth={3} />
              Nominate
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {MOCK_AWARDS.map((award) => (
             <div key={award.id} className="bg-white p-8 rounded-[3.5rem] shadow-xl border-2 border-[#FFD08A] border-opacity-30 relative overflow-hidden group hover:border-primary transition-all duration-500">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#FFFBEB] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                   <div className="flex justify-between items-start mb-6">
                      <div className={cn("w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center", award.color)}>
                         <award.icon size={28} strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest bg-[#FFF4D1] px-4 py-1.5 rounded-full border border-[#FFD08A]/30">
                         {award.date}
                      </span>
                   </div>
                   <h4 className="text-xl font-black text-[#432C0B] mb-1 group-hover:text-primary transition-colors">{award.name}</h4>
                   <p className="text-[#D6A15E] font-bold text-xs uppercase tracking-widest mb-4 italic">Recipient: {award.recipient}</p>
                   <p className="text-sm text-[#432C0B]/60 font-medium leading-relaxed flex-1">{award.description}</p>
                   <div className="mt-8 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile <ChevronRight size={14} strokeWidth={3} />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Nomination Modal */}
      <AnimatePresence>
        {isNominateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNominateModalOpen(false)}
              className="absolute inset-0 bg-[#432C0B]/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[4rem] shadow-2xl border-4 border-[#FFD08A] overflow-hidden"
            >
              <div className="p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black text-[#432C0B] tracking-tight">Nominate Peer</h3>
                    <p className="text-[#D6A15E] font-bold text-sm tracking-wide">Elevating institutional standard-bearers.</p>
                  </div>
                  <button 
                    onClick={() => setIsNominateModalOpen(false)}
                    className="p-3 bg-[#FFFBEB] text-[#D6A15E] rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <X size={24} strokeWidth={3} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest ml-4">Select Personnel</label>
                    <select 
                      value={nominee}
                      onChange={(e) => setNominee(e.target.value)}
                      className="w-full bg-[#FFFBEB] border-2 border-[#FFD08A] border-opacity-30 rounded-2xl px-6 py-4 font-bold text-[#432C0B] focus:ring-0 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select a contributor...</option>
                      {MOCK_EMPLOYEES.map(emp => (
                        <option key={emp.id} value={emp.name}>{emp.name} — {emp.role}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest ml-4">Award Category</label>
                    <select 
                      value={awardType}
                      onChange={(e) => setAwardType(e.target.value)}
                      className="w-full bg-[#FFFBEB] border-2 border-[#FFD08A] border-opacity-30 rounded-2xl px-6 py-4 font-bold text-[#432C0B] focus:ring-0 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select an award...</option>
                      <option value="innovation">Innovator of the Month</option>
                      <option value="leadership">Leadership Excellence</option>
                      <option value="customer">Customer Obsession</option>
                      <option value="culture">Culture Architect</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-[#D6A15E] uppercase tracking-widest ml-4">Reason for Nomination</label>
                    <textarea 
                      placeholder="Detail their strategic impact..."
                      className="w-full bg-[#FFFBEB] border-2 border-[#FFD08A] border-opacity-30 rounded-[2rem] px-6 py-4 font-bold text-[#432C0B] focus:ring-0 focus:border-primary outline-none transition-all h-32 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  onClick={() => setIsNominateModalOpen(false)}
                  className="w-full bg-gradient-to-tr from-[#FF8B3D] to-[#FCA311] text-white py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all"
                >
                  Submit Nomination
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const PERFORMANCE_DATA = [
  { name: 'Engineering', completion: 92 },
  { name: 'Design', completion: 88 },
  { name: 'Marketing', completion: 84 },
  { name: 'HR', completion: 95 },
  { name: 'Legal', completion: 78 },
];
