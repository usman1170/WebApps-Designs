import { useState, useEffect } from 'react';
import { Search, Calendar, Moon, Sun, Bell, Menu } from 'lucide-react';

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="h-[72px] px-4 md:px-8 flex items-center justify-between border-b border-[#E5E7EB] dark:border-white/5 bg-surface dark:bg-transparent transition-colors duration-300 relative z-10">
      {/* Search & Menu */}
      <div className="flex items-center flex-1 max-w-xl gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-text-muted dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative group flex-1 hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-muted dark:text-white/40" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl text-sm text-text-main dark:text-white placeholder-text-muted dark:placeholder-white/40 focus:ring-2 focus:ring-brand/20 dark:focus:ring-brand/40 focus:bg-white dark:focus:bg-[#1f0900] transition-all outline-none"
            placeholder="Preparation of technical specifications..."
          />
        </div>
        
        {/* Mobile Search Icon Only */}
        <button className="sm:hidden p-2 text-text-muted dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        <div className="hidden md:flex items-center gap-2 bg-gray-50 dark:bg-white/5 rounded-2xl p-1 border dark:border-white/5 transition-colors">
          <div className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-text-main dark:text-white/90">
            <Calendar className="w-4 h-4 text-text-muted dark:text-white/50" />
            Monthly
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1 text-text-muted dark:text-white/50">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <button onClick={toggleDark} className="w-10 h-10 rounded-full flex items-center justify-center text-text-main dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border dark:border-white/5">
          {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
        </button>

        <button className="w-10 h-10 rounded-full flex items-center justify-center text-text-main dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border dark:border-white/5 relative">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-brand rounded-full border-2 border-surface dark:border-[#0b0100]"></span>
        </button>

        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-white/10 shadow-sm ml-1 shrink-0 transition-colors">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
}
