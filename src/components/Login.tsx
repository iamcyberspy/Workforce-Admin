import { motion } from 'motion/react';
import { User, Lock, Eye, Check, ArrowRight, Globe, Layers } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex items-center justify-center p-6 relative overflow-hidden font-sans text-[#432C0B]">
      {/* Decorative Vibrant Orbs */}
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[70%] rounded-full bg-[#FF8B3D] opacity-10 blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[60%] rounded-full bg-[#4CC9F0] opacity-10 blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-[1200px] grid md:grid-cols-2 bg-white rounded-[3rem] overflow-hidden shadow-[0_64px_128px_-24px_rgba(67,44,11,0.15)] border-4 border-[#FFD08A] relative z-10"
      >
        {/* Brand Side - Vibrant Gradient */}
        <div className="relative hidden md:flex flex-col justify-between p-20 bg-gradient-to-br from-[#FF8B3D] to-[#FCA311] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-[1.5rem] flex items-center justify-center shadow-xl">
                <Layers className="text-[#FF8B3D] fill-current" size={28} />
              </div>
              <span className="font-headline font-black text-3xl tracking-tighter text-white">Workforce.</span>
            </div>
          </div>

          <div className="relative z-10 space-y-10">
            <h1 className="font-headline text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              High <br/>Energy <br/>Admin <br/><span className="text-[#FFEEB8]">Suite.</span>
            </h1>
            <p className="text-white/80 font-bold text-xl max-w-sm leading-relaxed tracking-tight">
              A vibrant ecosystem for tracking global talent and operational performance.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg bg-[#FFD08A]">
                    <div className="w-full h-full bg-white/20"></div>
                  </div>
                ))}
             </div>
             <span className="text-white font-black text-xs uppercase tracking-widest">+1.2k Active Users</span>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-16 md:p-24 flex flex-col justify-center bg-white">
          <div className="space-y-6 mb-16">
            <span className="bg-[#FFF5E1] text-[#FF8B3D] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block border-2 border-[#FFD08A]">Access Portal</span>
            <h2 className="font-headline text-5xl font-black text-[#432C0B] tracking-tighter">Welcome Back!</h2>
            <p className="text-[#D6A15E] font-bold text-lg">Enter your terminal credentials to continue.</p>
          </div>

          <form 
            className="space-y-10" 
            onSubmit={(e) => { e.preventDefault(); onLogin(); }}
          >
            <div className="space-y-3 group">
              <label className="block text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em] ml-2">Commander ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <User size={20} className="text-[#FFD08A] group-focus-within:text-[#FF8B3D] transition-colors" strokeWidth={3} />
                </div>
                <input 
                  type="email" 
                  defaultValue="marcus.thorne@enterprise.com"
                  className="block w-full pl-16 pr-6 py-5 bg-[#FFFBEB] border-4 border-transparent rounded-[2rem] text-[#432C0B] font-black placeholder:text-[#FFD08A] focus:ring-0 focus:bg-white focus:border-[#FF8B3D] shadow-sm transition-all text-lg" 
                  placeholder="ID / Email"
                />
              </div>
            </div>

            <div className="space-y-3 group">
              <div className="flex justify-between items-center px-2">
                <label className="block text-[11px] font-black text-[#D6A15E] uppercase tracking-[0.2em]">Secure Code</label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Lock size={20} className="text-[#FFD08A] group-focus-within:text-[#FF8B3D] transition-colors" strokeWidth={3} />
                </div>
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="block w-full pl-16 pr-16 py-5 bg-[#FFFBEB] border-4 border-transparent rounded-[2rem] text-[#432C0B] font-black placeholder:text-[#FFD08A] focus:ring-0 focus:bg-white focus:border-[#FF8B3D] shadow-sm transition-all text-lg" 
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-4">
                <button 
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={cn(
                    "w-8 h-8 rounded-xl border-4 flex items-center justify-center transition-all duration-300",
                    rememberMe ? "bg-[#FF8B3D] border-[#FF8B3D]" : "border-[#FFD08A]"
                  )}
                >
                  {rememberMe && <Check size={18} className="text-white" strokeWidth={4} />}
                </button>
                <span className="text-sm font-black text-[#432C0B] uppercase tracking-widest opacity-60">Remember Session</span>
              </div>
              <a href="#" className="text-xs font-black text-[#FF8B3D] uppercase tracking-widest hover:underline decoration-4 underline-offset-8 transition-all">Forgot?</a>
            </div>

            <button 
              type="submit"
              className="w-full py-6 px-8 bg-[#FF8B3D] text-white font-black rounded-full shadow-[0_24px_48px_-12px_rgba(255,139,61,0.5)] hover:shadow-[0_24px_48px_-12px_rgba(255,139,61,0.7)] active:scale-[0.95] transition-all flex items-center justify-center gap-4 group tracking-[0.2em] text-sm"
            >
              IGNITE DASHBOARD
              <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" strokeWidth={3} />
            </button>
          </form>
        </div>
      </motion.div>

      {/* Global Status Bar */}
      <div className="fixed bottom-10 flex items-center gap-8 bg-white border-4 border-[#FFD08A] px-10 py-4 rounded-full shadow-2xl z-50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#FF8B3D] animate-ping opacity-75"></div>
          <span className="text-[11px] font-black text-[#432C0B] uppercase tracking-[0.3em]">Core Online</span>
        </div>
        <div className="h-4 w-1 bg-[#FFD08A] rounded-full"></div>
        <div className="flex items-center gap-3">
          <Globe size={18} className="text-[#4CC9F0]" />
          <span className="text-[11px] font-black text-[#432C0B] uppercase tracking-[0.3em]">NRT Latency: 12ms</span>
        </div>
      </div>
    </div>
  );
}
