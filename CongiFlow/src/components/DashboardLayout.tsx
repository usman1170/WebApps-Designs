import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#fcfcfd] dark:bg-[#130600] relative overflow-hidden text-text-main dark:text-white font-sans transition-colors duration-300">
      {/* Background Blurry Blobs */}
      <div className="absolute top-0 left-1/2 w-[1000px] h-[800px] bg-[#FFDED4]/60 dark:bg-brand/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0 transition-colors duration-500"></div>
      <div className="absolute top-[20%] left-1/2 w-[600px] h-[600px] bg-orange-200/40 dark:bg-brand/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none z-0 transition-colors duration-500"></div>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar container */}
      <div className={`fixed inset-y-0 left-0 z-30 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar className="w-64" />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
