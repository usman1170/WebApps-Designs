import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar as CalendarIcon, Clock, RefreshCw, Plus } from 'lucide-react';
import { useWorkspaceModal } from '../lib/workspace-modal';

export default function Dashboard() {
  const { openModal } = useWorkspaceModal();

  return (
    <div className="p-8 pb-32 max-w-[1600px] mx-auto relative z-10 transition-colors duration-300">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold mb-2 text-[#1c1c1c] dark:text-white transition-colors duration-300">
            <span className="text-gray-400 dark:text-white/60 font-normal mr-2">Hi,</span> 
            Oliver!
          </h1>
          <p className="text-2xl font-medium tracking-tight text-[#1c1c1c] dark:text-white/90 transition-colors duration-300">Let's customize your workspace!</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-4 mr-4">
            <div className="text-right">
              <p className="text-[10px] text-gray-400 dark:text-white/50 font-bold uppercase tracking-wider mb-1">Online Team</p>
              <div className="flex items-center justify-end -space-x-1.5 isolate">
                <img src="https://i.pravatar.cc/150?img=11" className="w-7 h-7 rounded-full border-2 border-[#fcfcfd] dark:border-[#130600] object-cover relative z-30 transition-colors duration-300" />
                <img src="https://i.pravatar.cc/150?img=41" className="w-7 h-7 rounded-full border-2 border-[#fcfcfd] dark:border-[#130600] object-cover relative z-20 transition-colors duration-300" />
                <img src="https://i.pravatar.cc/150?img=32" className="w-7 h-7 rounded-full border-2 border-[#fcfcfd] dark:border-[#130600] object-cover relative z-10 transition-colors duration-300" />
                <div className="w-7 h-7 rounded-full border-2 border-[#fcfcfd] dark:border-[#130600] bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[9px] font-bold text-[#1c1c1c] dark:text-white relative z-0 transition-colors duration-300">+4</div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-gray-200 dark:bg-white/5 mx-1 transition-colors duration-300"></div>
            
            <div className="text-right px-2">
              <p className="text-[10px] text-gray-400 dark:text-white/50 font-bold uppercase tracking-wider mb-0.5">Time Saved</p>
              <p className="text-xl font-bold text-[#1c1c1c] dark:text-white leading-none transition-colors duration-300">84<span className="text-sm text-brand ml-[1px]">h</span></p>
            </div>
          </div>
          
          <button className="h-10 px-4 rounded-full bg-surface dark:bg-[#1B0B03] border border-gray-200 dark:border-white/5 text-[13px] font-bold text-gray-600 dark:text-white/80 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all shadow-sm">
            <CalendarIcon className="w-4 h-4 text-gray-400 dark:text-white/40" />
            <span>Today</span>
          </button>
          
          <button
            className="h-10 px-5 rounded-[20px] bg-brand text-white text-[13px] font-bold flex items-center gap-2 hover:bg-brand/90 transition-all shadow-[0_4px_12px_rgba(255,83,0,0.25)]"
            onClick={() => openModal('task')}
            type="button"
          >
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {/* ROW 1: Updates, Productivity, Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. Updates Widget */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col h-[320px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="font-semibold text-xs tracking-wide">Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[11px] font-semibold px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                <button className="w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            <div className="mt-2">
              <div className="text-[2.5rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight transition-colors">1,892</div>
              <p className="text-[11px] text-gray-400 dark:text-white/50 mt-1 transition-colors">Total updates for the project</p>
            </div>
            
            {/* Bar chart + glassy overlay */}
            <div className="mt-auto relative h-[130px] w-full pt-4">
              {/* Bars row */}
              <div className="flex items-end gap-1.5 h-full w-full">
                {/* Large striped bar */}
                <div
                  className="flex-[2] h-[90%] rounded-t-2xl overflow-hidden relative"
                  style={{
                    backgroundColor: 'rgba(255,83,0,0.12)',
                    border: '1.5px solid rgba(255,83,0,0.45)'
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,83,0,0.35) 4px, rgba(255,83,0,0.35) 8px)'
                    }}
                  />
                </div>

                {/* Solid brand bar */}
                <div className="w-10 h-full bg-brand rounded-t-2xl shrink-0" />

                {/* Small striped bar */}
                <div
                  className="w-14 h-[42%] rounded-t-2xl overflow-hidden relative shrink-0"
                  style={{
                    backgroundColor: 'rgba(255,83,0,0.10)',
                    border: '1.5px solid rgba(255,83,0,0.40)'
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,83,0,0.30) 3px, rgba(255,83,0,0.30) 6px)'
                    }}
                  />
                </div>
              </div>

              {/* Pure Glassmorphic Overlay Tooltip — floats over the bars */}
              <div
                className="absolute left-[6%] bottom-[44%] z-20 px-4 py-2.5 rounded-2xl shadow-xl"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  background: 'rgba(255,255,255,0.55)',
                  border: '1px solid rgba(255,255,255,0.75)',
                  boxShadow: '0 8px 32px rgba(255,83,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
                  <span className="text-[10px] font-bold text-gray-600">Development</span>
                </div>
                <div className="text-[22px] font-extrabold text-brand leading-none tracking-tight">1,302</div>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-gray-900 dark:text-white/90 font-bold px-1 mt-1">
              <span>90%</span>
              <div className="flex gap-6 mr-1">
                <span>6%</span>
                <span>4%</span>
              </div>
            </div>
          </div>

          {/* 2. Productivity Widget */}
          <div className="rounded-[2rem] shadow-2xl h-[320px] relative overflow-hidden flex flex-col justify-center items-center text-center group bg-[#110100] cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,83,0,0.5)] border border-transparent hover:border-brand/30 transition-all duration-500">
            {/* Complex 3D Abstract Glow Background */}
            <div className="absolute inset-0 opacity-100 pointer-events-none" 
              style={{
                background: 'radial-gradient(circle at 75% 30%, #ff5e00 0%, transparent 50%), radial-gradient(circle at 10% 80%, #ff8800 0%, transparent 40%)',
                filter: 'blur(30px)'
              }}>
            </div>
            
            {/* Deep Black Holes for 3D Swirl Effect */}
            <div className="absolute inset-[-10%] opacity-90 pointer-events-none"
               style={{
                 background: 'radial-gradient(ellipse at 30% 40%, #000 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, #050000 0%, transparent 55%)',
                 filter: 'blur(25px)'
               }}>
            </div>
            
            {/* Hot Bright Highlights */}
            <div className="absolute inset-0 opacity-60 mix-blend-color-dodge pointer-events-none"
               style={{
                 background: 'radial-gradient(circle at 40% 15%, #ffcc00 0%, transparent 45%), radial-gradient(circle at 65% 90%, #ffaa00 0%, transparent 35%)',
                 filter: 'blur(30px)'
               }}>
            </div>
            
            {/* Delicate 3D curve overlay */}
            <div className="absolute inset-[-20%] opacity-40 mix-blend-overlay pointer-events-none"
               style={{
                 background: 'conic-gradient(from 120deg at 50% 50%, #ffaa00 0deg, transparent 60deg, #ff5e00 120deg, transparent 180deg)'
               }}>
            </div>

            {/* Pure Glassy Card */}
            <div className="relative z-10 w-[260px] md:w-[280px] p-6 rounded-3xl transition-transform duration-500 group-hover:scale-105"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255, 0.12), rgba(255,255,255, 0.02))',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)',
                   border: '0.5px solid rgba(255, 255, 255, 0.4)',
                   borderBottomColor: 'rgba(255, 255, 255, 0.05)',
                   borderRightColor: 'rgba(255, 255, 255, 0.05)',
                   boxShadow: '0 25px 50px -12px rgba(0,0,0, 0.8), inset 0 1px 0 rgba(255,255,255, 0.2)'
                 }}>
              <h3 className="font-bold text-[18px] md:text-[20px] text-white tracking-tight mb-[14px] leading-tight drop-shadow-md">
                Maximize human<br/>productivity
              </h3>
              <p className="text-[10px] md:text-[11px] text-white/80 leading-[1.6] font-medium drop-shadow-sm">
                Replace all your software.<br/>Every app, AI agent, and<br/>human in one place.
              </p>
            </div>
          </div>

          {/* 3. Calendar Agenda Widget */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col h-[320px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <button className="w-8 h-8 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 transition-colors">
                <ArrowDownRight className="w-4 h-4 rotate-45" />
              </button>
              <h3 className="font-bold text-sm text-[#1c1c1c] dark:text-white">February 2026</h3>
              <button className="w-8 h-8 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 flex items-center justify-center text-gray-500 dark:text-white/60 transition-colors">
                <ArrowDownRight className="w-4 h-4 -rotate-[135deg]" />
              </button>
            </div>

            <div className="flex justify-between mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  <span className="text-[9px] text-gray-400 dark:text-white/40 font-bold tracking-wide">{day}</span>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full font-bold text-xs transition-colors cursor-pointer ${
                    i === 3 
                      ? 'bg-brand text-white shadow-md shadow-brand/30 scale-110' 
                      : 'text-[#1c1c1c] dark:text-white/90 hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}>
                    {16 + i}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 space-y-4 overflow-hidden">
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-[12px] text-[#1c1c1c] dark:text-white group-hover:text-brand dark:group-hover:text-brand transition-colors">Business Analysis</h4>
                  <button className="text-gray-400 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"><MoreHorizontal className="w-3 h-3" /></button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/150?img=11" className="w-5 h-5 rounded-full border-2 border-white dark:border-[#1B0B03] object-cover" alt="User 1" />
                    <img src="https://i.pravatar.cc/150?img=12" className="w-5 h-5 rounded-full border-2 border-white dark:border-[#1B0B03] object-cover" alt="User 2" />
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 dark:text-white/50 font-bold">
                    <Clock className="w-2.5 h-2.5" /> 09:30 AM
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer pt-2 border-t border-gray-50 dark:border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-[12px] text-[#1c1c1c] dark:text-white group-hover:text-brand dark:group-hover:text-brand transition-colors">Preparation of MVP</h4>
                  <button className="text-gray-400 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"><MoreHorizontal className="w-3 h-3" /></button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/150?img=13" className="w-5 h-5 rounded-full border-2 border-white dark:border-[#1B0B03] object-cover" alt="User 3" />
                    <img src="https://i.pravatar.cc/150?img=14" className="w-5 h-5 rounded-full border-2 border-white dark:border-[#1B0B03] object-cover" alt="User 4" />
                    <img src="https://i.pravatar.cc/150?img=15" className="w-5 h-5 rounded-full border-2 border-white dark:border-[#1B0B03] object-cover" alt="User 5" />
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 dark:text-white/50 font-bold">
                    <Clock className="w-2.5 h-2.5" /> 07:15 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 4 Cards Grid & Weekly Workload */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Section 1: 2x2 Grid of 4 Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Iterations Widget */}
            <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between h-[150px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[11px] tracking-wide">Iterations</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="text-[10px] font-semibold px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                  <button className="w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[2rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight mb-1 transition-colors">282</div>
                <p className="text-[10px] font-bold text-brand flex items-center gap-1">
                  +38.12% <span className="text-gray-400 dark:text-white/50 font-medium">from previous</span>
                </p>
              </div>
            </div>

            {/* KPI Widget */}
            <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between h-[150px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[11px] tracking-wide">KPI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="text-[10px] font-semibold px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                  <button className="w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[2rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight mb-1 transition-colors">3.78</div>
                <p className="text-[10px] font-bold text-gray-600 dark:text-white/80 flex items-center gap-1 transition-colors">
                  -5.6% <span className="text-gray-400 dark:text-white/50 font-medium tracking-tight">from previous</span>
                </p>
              </div>
            </div>

            {/* Meetings Widget */}
            <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between h-[150px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[11px] tracking-wide">Meetings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="text-[10px] font-semibold px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                  <button className="w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[2rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight mb-1 transition-colors">4.8h</div>
                <p className="text-[10px] font-bold text-brand flex items-center gap-1">
                  +28.3% <span className="text-gray-400 dark:text-white/50 font-medium">from previous</span>
                </p>
              </div>
            </div>

            {/* Finished Widget */}
            <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-5 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between h-[150px] group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[11px] tracking-wide">Finished</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="text-[10px] font-semibold px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                  <button className="w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-[2rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight mb-1 transition-colors">94%</div>
                <p className="text-[10px] font-bold text-brand flex items-center gap-1">
                  +3.1% <span className="text-gray-400 dark:text-white/50 font-medium">from previous</span>
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Weekly Workload */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col h-[324px] transition-colors duration-300">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span className="font-semibold text-[11px] tracking-wide">Weekly Workload</span>
                </div>
                
                {/* Legend */}
                <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold text-gray-500 dark:text-white/50 pl-4 border-l border-gray-200 dark:border-white/10 transition-colors">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FFDED4] dark:bg-[#FFDED4]/20"></span> Low</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF8A65] dark:bg-[#FF8A65]/70"></span> Medium</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand"></span> High</div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1c1c1c] dark:bg-[#130600] border dark:border-white/10"></span> Fully Occupied</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-[11px] font-semibold px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">View all</button>
                <button className="w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Heatmap Layout */}
            <div className="flex gap-4 flex-1 items-end">
              {/* Y Axis Labels */}
              <div className="flex flex-col justify-between h-[180px] text-[10px] text-gray-400 dark:text-white/40 font-bold tracking-wider pb-6 transition-colors">
                <div>FEB</div>
                <div>FTI</div>
                <div>FKG</div>
                <div>FKH</div>
                <div>FKS</div>
              </div>
              
              {/* Heatmap Grid */}
              <div className="flex-1 h-[180px] flex flex-col justify-between relative overflow-x-auto">
                {[...Array(5)].map((_, rIdx) => (
                  <div key={rIdx} className="flex gap-1.5 min-w-[500px] h-[28px]">
                    {[...Array(18)].map((_, cIdx) => {
                      let bgClass = "bg-[#FFDED4]/30 border border-[#FFDED4]/60 dark:bg-white/5 dark:border-transparent"; 
                      let isStriped = true;

                      if (cIdx >= 3 && cIdx <= 14) {
                        const isHigh = 
                          (rIdx === 1 && (cIdx >= 6 && cIdx <= 8)) ||
                          (rIdx === 2 && (cIdx >= 5 && cIdx <= 10)) ||
                          (rIdx === 3 && (cIdx >= 4 && cIdx <= 12)) ||
                          (rIdx === 4 && (cIdx >= 6 && cIdx <= 11));
                        
                        if (isHigh) {
                          bgClass = "bg-brand shadow-sm";
                          isStriped = false;
                        } else if ((rIdx + cIdx) % 3 === 0) {
                          bgClass = "bg-[#FFDED4] dark:bg-brand/30 dark:border-transparent";
                          isStriped = false;
                        }
                        
                        if (rIdx === 1 && cIdx === 9) bgClass = "bg-[#1c1c1c] dark:bg-[#130600] border dark:border-white/10"; // dark block
                      }

                      return (
                        <div key={cIdx} className={`h-full flex-1 rounded text-[0px] ${bgClass} transition-transform hover:scale-105 cursor-pointer isolate relative overflow-hidden`}>
                          {isStriped && (
                            <div className="absolute inset-0 opacity-[0.2] text-brand" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)' }}></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* X Axis Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-800 dark:text-white/80 font-bold tracking-wider pt-1 min-w-[500px] transition-colors">
                  {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4].map((num, i) => (
                    <div key={i} className="flex-1 text-center">{num}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- NEW SECTIONS BELOW --- */}
        
        {/* ROW 3: Performance & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Analytics */}
          <div className="lg:col-span-2 bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col h-[340px] transition-colors duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="font-semibold text-[11px] tracking-wide">Performance Analytics</span>
              </div>
              <button className="text-[11px] font-semibold px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                View full report
              </button>
            </div>
            
            <div className="flex items-end gap-4 mb-4 relative z-10">
              <div className="text-[3rem] leading-none font-bold text-[#1c1c1c] dark:text-white tracking-tight transition-colors">$84,290</div>
              <p className="text-[12px] font-bold text-brand flex items-center gap-1 mb-1.5">
                +14.5% <span className="text-gray-400 dark:text-white/50 font-medium">this month</span>
              </p>
            </div>

            {/* Glowing Chart Placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-brand drop-shadow-[0_10px_15px_rgba(255,83,0,0.5)]">
                <path d="M0,50 L0,35 C10,35 15,20 25,25 C35,30 40,10 50,15 C60,20 65,35 75,30 C85,25 90,5 100,5 L100,50 Z" 
                      fill="url(#gradient-chart)" 
                      opacity="0.8" />
                <path d="M0,35 C10,35 15,20 25,25 C35,30 40,10 50,15 C60,20 65,35 75,30 C85,25 90,5 100,5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Grid Lines for aesthetics */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col h-[340px] transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-semibold text-[11px] tracking-wide">Recent Activity</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                <MoreHorizontal className="w-3 h-3" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {[
                { name: 'Sarah Jenkins', action: 'completed milestone', target: 'Phase 1 MVP', time: '2m ago', img: 41 },
                { name: 'Alex Rivera', action: 'uploaded design limits', target: 'Figma', time: '1h ago', img: 32 },
                { name: 'Dave Harper', action: 'commented on', target: 'PR #102', time: '3h ago', img: 12 },
                { name: 'Emily Chen', action: 'deployed to', target: 'Production', time: '5h ago', img: 45 }
              ].map((activity, idx) => (
                <div key={idx} className="flex gap-3 group cursor-pointer">
                  <div className="relative pt-1 shrink-0">
                    <img src={`https://i.pravatar.cc/150?img=${activity.img}`} className="w-8 h-8 rounded-full border border-gray-100 dark:border-white/10 object-cover" alt={activity.name} />
                    {idx < 3 && <div className="absolute top-9 left-1/2 -translate-x-1/2 w-0.5 h-7 bg-gray-100 dark:bg-white/5 group-hover:bg-brand/20 transition-colors"></div>}
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#1c1c1c] dark:text-white transition-colors">{activity.name}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-white/60 leading-tight mt-0.5">
                      {activity.action} <span className="font-bold text-gray-800 dark:text-white/80 group-hover:text-brand transition-colors">{activity.target}</span>
                    </p>
                    <span className="text-[9px] text-gray-400 dark:text-white/40 font-bold block mt-0.5">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 4: System Resources & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Internal Server Load */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center text-center h-[200px] transition-colors duration-300 relative group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-brand/5 dark:bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative w-20 h-20 mb-3">
               <svg viewBox="0 0 36 36" className="w-full h-full text-brand drop-shadow-[0_2px_4px_rgba(255,83,0,0.3)]">
                 <path className="text-gray-50 dark:text-white/5" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 <path className="text-brand transition-all duration-1000 ease-out group-hover:text-brand/80" strokeDasharray="78, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[#1c1c1c] dark:text-white">78%</div>
             </div>
             <h4 className="font-bold text-[13px] text-[#1c1c1c] dark:text-white">Server Load</h4>
             <p className="text-[10px] text-gray-400 dark:text-white/50">Optimal performance</p>
          </div>

          {/* Cloud Storage */}
          <div className="bg-surface dark:bg-[#1B0B03] rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-center h-[200px] transition-colors duration-300 group cursor-pointer hover:border-brand/30 dark:hover:border-brand/40">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-brand">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[13px] text-[#1c1c1c] dark:text-white">Cloud Storage</h4>
                  <p className="text-[10px] text-gray-400 dark:text-white/50">842 GB used</p>
                </div>
             </div>
             <div>
               <div className="flex justify-between text-[11px] font-bold text-[#1c1c1c] dark:text-white mb-2">
                 <span>84% Full</span>
                 <span className="text-gray-400 dark:text-white/50">1TB</span>
               </div>
               <div className="w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-brand rounded-full relative w-[84%]">
                   <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)' }}></div>
                 </div>
               </div>
             </div>
          </div>

          {/* AI Productivity Prompt */}
          <div className="lg:col-span-2 rounded-[2rem] shadow-xl h-[200px] relative overflow-hidden flex flex-col justify-center p-6 text-left group bg-[#110100] transition-colors">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-brand/30 transition-colors duration-500"></div>
            
            <h3 className="font-bold text-[18px] text-white tracking-tight mb-2 relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Ask CongiFlow AI...
            </h3>
            <p className="text-[11px] text-white/50 font-medium mb-6 relative z-10 max-w-[80%]">
              Generate reports, schedule meetings, or query your database using natural language.
            </p>
            
            <div className="relative z-10 flex gap-2 w-full max-w-sm">
              <input 
                type="text" 
                placeholder="e.g. Summarize yesterday's team commits..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-brand/50 focus:bg-white/10 transition-all font-medium"
              />
              <button className="w-10 h-10 shrink-0 bg-brand text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-brand/30">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
