import { useState, useEffect, useRef } from 'react';
import { Search, Calendar, Moon, Sun, Bell, Menu, CheckCheck } from 'lucide-react';

interface TopbarProps {
  onMenuClick?: () => void;
}

type NotificationItem = {
  id: number;
  title: string;
  detail: string;
  time: string;
  unread: boolean;
};

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'Sprint review moved forward',
    detail: 'Dann shifted the review to 09:30 AM and tagged product + design.',
    time: 'Just now',
    unread: true,
  },
  {
    id: 2,
    title: 'Checklist approved',
    detail: 'Michelle marked the onboarding checklist ready for final review.',
    time: '12 min ago',
    unread: true,
  },
  {
    id: 3,
    title: 'New AI summary ready',
    detail: 'Momentum AI prepared a delivery snapshot for this week.',
    time: '1 hour ago',
    unread: false,
  },
];

export default function Topbar({ onMenuClick }: TopbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!notificationsRef.current?.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const unreadCount = notifications.filter((item) => item.unread).length;

  const markAllAsRead = () => {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false })));
  };

  return (
    <header className="h-[72px] px-4 md:px-8 flex items-center justify-between border-b border-[#E5E7EB] dark:border-white/5 bg-surface dark:bg-transparent transition-colors duration-300 relative z-40">
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

        <div className="relative" ref={notificationsRef}>
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center text-text-main dark:text-white bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border dark:border-white/5 relative ${
              isNotificationsOpen ? 'ring-2 ring-brand/20 dark:ring-brand/30' : ''
            }`}
            onClick={() => setIsNotificationsOpen((current) => !current)}
            type="button"
          >
            <Bell className="w-[18px] h-[18px]" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2.5 min-w-2 h-2 px-1 bg-brand rounded-full border-2 border-surface dark:border-[#0b0100]"></span>
            )}
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 top-[calc(100%+12px)] z-[80] w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/95 shadow-[0_30px_80px_rgba(26,28,30,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#1B0B03]/95">
              <div className="border-b border-gray-100 px-5 py-4 dark:border-white/10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-text-main dark:text-white">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand dark:bg-brand/15">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-text-muted dark:text-white/45">
                      Workspace updates, reviews, and AI activity.
                    </p>
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-2 text-[11px] font-bold text-text-main transition-colors hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-brand/40 dark:hover:text-white"
                    onClick={markAllAsRead}
                    type="button"
                  >
                    <CheckCheck className="h-3.5 w-3.5" />
                    Mark all as read
                  </button>
                </div>
              </div>

              <div className="max-h-[380px] overflow-y-auto p-3">
                <div className="space-y-2">
                  {notifications.map((item) => (
                    <button
                      key={item.id}
                      className="w-full rounded-[1.25rem] border border-transparent bg-gray-50/80 p-4 text-left transition-all hover:border-brand/15 hover:bg-white dark:bg-white/5 dark:hover:border-brand/20 dark:hover:bg-white/10"
                      type="button"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/15">
                          <Bell className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold text-text-main dark:text-white">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2">
                              {item.unread && <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />}
                              <span className="whitespace-nowrap text-[11px] font-medium text-text-muted dark:text-white/45">
                                {item.time}
                              </span>
                            </div>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-text-muted dark:text-white/55">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-white/10 shadow-sm ml-1 shrink-0 transition-colors">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
}
