import { LayoutDashboard, Users, CalendarCheck, CreditCard, PieChart, Settings, LifeBuoy, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'directory', label: 'Directory', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
    { id: 'payroll', label: 'Payroll', icon: CreditCard },
    { id: 'performance', label: 'Performance', icon: PieChart },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'support', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col p-4 z-40 border-r border-[#FFD08A]/30">
      <div className="px-4 py-8 mb-4">
        <h1 className="font-headline font-black text-primary text-2xl tracking-tighter italic">Workforce</h1>
        <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.3em] mt-1">Admin Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as View)}
              className={cn(
                "w-full flex items-center gap-3 px-5 py-4 rounded-[1.5rem] transition-all duration-300 group",
                isActive 
                  ? "bg-primary text-white shadow-xl shadow-primary/20 font-bold scale-[1.02]" 
                  : "text-on-surface-variant hover:text-primary hover:bg-white font-bold"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-white" : "text-on-surface-variant/40 group-hover:text-primary")} />
              <span className="font-headline text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-[#FFD08A]/30 space-y-4">
        <button className="w-full bg-gradient-to-tr from-[#FF8B3D] to-[#FFCF4D] text-white font-black py-4 px-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-[0.95] transition-all">
          <Plus size={20} strokeWidth={3} />
          <span className="font-headline text-xs uppercase tracking-widest">New Hire</span>
        </button>

        <div className="space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest/50 transition-all font-semibold"
              >
                <Icon size={20} className="text-on-surface-variant/60" />
                <span className="font-headline text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
