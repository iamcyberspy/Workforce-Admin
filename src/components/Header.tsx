import { Search, Bell, HelpCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-xl flex items-center justify-between px-8 py-5 border-b border-[#FFD08A]/30">
      <div className="flex items-center gap-12">
        <span className="font-headline font-black text-primary text-2xl tracking-tighter">Executive Lens</span>
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-primary" />
          </span>
          <input 
            className="w-full bg-white border-2 border-[#FFD08A] rounded-full px-12 py-3 focus:outline-none focus:border-primary placeholder-on-surface-variant/40 text-sm font-bold transition-all text-on-surface shadow-sm" 
            placeholder="Search resources, employees..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#FFD08A] text-primary hover:bg-primary hover:text-white transition-all">
            < Bell size={22} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#FFD08A] text-primary hover:bg-primary hover:text-white transition-all">
            <HelpCircle size={22} />
          </button>
        </div>

        <div className="h-8 w-px bg-[#FFD08A]/40 mx-2"></div>

        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-black text-on-surface leading-none">Marcus Thorne</p>
            <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-1 opacity-60">System Admin</p>
          </div>
          <div className="w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-[#FFD08A] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-gradient-to-tr from-[#FF8B3D] to-[#FFCF4D]"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
