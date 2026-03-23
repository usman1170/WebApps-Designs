import { 
  Home, 
  LayoutTemplate, 
  Package, 
  FileText, 
  MessageSquare, 
  ListTodo, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useWorkspaceModal } from '../lib/workspace-modal';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const { openModal } = useWorkspaceModal();

  return (
    <aside className={`bg-surface dark:bg-transparent h-full flex flex-col border-r border-[#E5E7EB] dark:border-white/5 pt-6 pb-6 overflow-y-auto transition-colors duration-300 ${className}`}>
      {/* Logo */}
      <div className="px-6 flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xl relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* simple mesh effect for logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none text-text-main dark:text-white transition-colors duration-300">Momentum</h1>
          <p className="text-xs text-text-muted dark:text-white/50 mt-1 transition-colors duration-300">Team's workspace</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-8">
        {/* General */}
        <div>
          <h3 className="text-[10px] font-bold text-text-muted dark:text-white/40 uppercase tracking-wider mb-3 px-2 transition-colors duration-300">GENERAL</h3>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Home className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                    Dashboard
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/templates"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <LayoutTemplate className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                    Templates
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products"
                className={({ isActive }) => 
                  `flex items-center justify-between px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Package className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                      Products
                    </div>
                    <span className={`text-xs ${isActive ? 'text-white/80' : 'text-text-muted dark:text-white/50'}`}>13</span>
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/docs"
                className={({ isActive }) => 
                  `flex items-center justify-between px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <FileText className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                      Docs
                    </div>
                    <span className={`text-xs ${isActive ? 'text-white/80' : 'text-text-muted dark:text-white/50'}`}>56</span>
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/messages"
                className={({ isActive }) => 
                  `flex items-center justify-between px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <MessageSquare className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                      Messages
                    </div>
                    <span className={`text-xs ${isActive ? 'text-white/80' : 'text-text-muted dark:text-white/50'}`}>4</span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-[10px] font-bold text-text-muted dark:text-white/40 uppercase tracking-wider mb-3 px-2 transition-colors duration-300">MORE</h3>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/todo-lists"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <ListTodo className={`w-[18px] h-[18px] ${isActive ? '' : 'text-text-muted dark:text-white/50'}`} />
                    To do lists
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/ai-assistant"
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-sm transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#1A1C1E] dark:bg-[#782300] text-white' 
                      : 'text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Sparkles className={`w-[18px] h-[18px] ${isActive ? '' : 'text-brand'}`} />
                    AI Assistants
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Interactions */}
        <div>
          <h3 className="text-[10px] font-bold text-text-muted dark:text-white/40 uppercase tracking-wider mb-3 px-2 transition-colors duration-300">INTERACTIONS</h3>
          <ul className="space-y-2">
            {[
              { name: 'Dann Petty', initials: 'DP', color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
              { name: 'Flux Academy', initials: 'FA', color: 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' },
              { name: 'Michelle Choi', initials: 'MC', color: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' },
            ].map((user) => (
              <li key={user.name}>
                <a href="#" className="flex items-center gap-3 px-3 py-1.5 text-text-main dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl font-medium text-sm transition-colors duration-300">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${user.color}`}>
                    {user.initials}
                  </div>
                  {user.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-text-muted dark:text-white/50 hover:text-text-main dark:hover:text-white font-medium text-sm mt-1 transition-colors duration-300">
                <ChevronDown className="w-4 h-4" />
                Show more (14)
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Upgrade Button */}
      <div className="px-6 mt-auto pt-6">
        <button
          className="w-full bg-brand hover:bg-brand-dark text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold text-sm transition-colors shadow-[0_4px_14px_rgba(255,87,34,0.39)]"
          onClick={() => openModal('upgrade')}
          type="button"
        >
          <span className="opacity-80">🏆</span> Upgrade to PRO
        </button>
      </div>
    </aside>
  );
}
