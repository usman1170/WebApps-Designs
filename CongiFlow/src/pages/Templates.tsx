import { useState } from 'react';
import { Search, Filter, Sparkles, LayoutTemplate, Monitor, Smartphone, Globe, ArrowRight, Eye, Play, Plus, Zap } from 'lucide-react';

const CATEGORIES = ['All', 'Dashboards', 'E-commerce', 'Landing Pages', 'Portfolios', 'Web Apps'];

const TEMPLATES = [
  {
    id: 1,
    title: 'Orbit Analytics',
    category: 'Dashboards',
    description: 'A comprehensive analytics dashboard with complex charting and data grids.',
    users: '12.4k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 2,
    title: 'Storefront Pro',
    category: 'E-commerce',
    description: 'Modern storefront with conversion-optimized product pages and cart flows.',
    users: '8.2k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 3,
    title: 'SaaS Launchpad',
    category: 'Landing Pages',
    description: 'High-converting landing page with pricing tables and social proof sections.',
    users: '15.1k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 4,
    title: 'Creator Folio',
    category: 'Portfolios',
    description: 'Minimalist portfolio template for designers, writers, and artists.',
    users: '4.5k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    type: 'mobile'
  },
  {
    id: 5,
    title: 'Fintech Hub',
    category: 'Web Apps',
    description: 'Secure, modern interface for banking and financial applications.',
    users: '6.7k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4bcafe2?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 6,
    title: 'Neo Market',
    category: 'E-commerce',
    description: 'Dark-mode first marketplace template with integrated crypto features.',
    users: '3.1k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 7,
    title: 'DevSpace Docs',
    category: 'Web Apps',
    description: 'Clean and searchable documentation template built for engineering teams.',
    users: '9.3k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 8,
    title: 'Startup Pitch',
    category: 'Landing Pages',
    description: 'Dynamic storytelling layout to showcase your next big idea to investors.',
    users: '11.2k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 9,
    title: 'Crypto Pulse',
    category: 'Dashboards',
    description: 'Real-time dashboard for cryptocurrency trading and wallet monitoring.',
    users: '5.8k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 10,
    title: 'Photography Grid',
    category: 'Portfolios',
    description: 'Masonry grid layout designed specifically for high-res photography.',
    users: '2.1k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 11,
    title: 'SaaS Metrics',
    category: 'Dashboards',
    description: 'Track MRR, churn, and user growth with beautifully customized chart overlays.',
    users: '7.4k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80',
    type: 'desktop'
  },
  {
    id: 12,
    title: 'Agency Flow',
    category: 'Landing Pages',
    description: 'A bold, typography-driven template designed for creative digital agencies.',
    users: '4.8k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 13,
    title: 'TaskMaster',
    category: 'Web Apps',
    description: 'A complete Kanban board and task management interface with drag-and-drop.',
    users: '18.9k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 14,
    title: 'Retail Store',
    category: 'E-commerce',
    description: 'Clean retail e-commerce template featuring a dynamic lookbook section.',
    users: '6.5k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    type: 'mobile'
  },
  {
    id: 15,
    title: 'Design System',
    category: 'Web Apps',
    description: 'A foundational component library and layout system for scaling enterprise apps.',
    users: '24.1k',
    isPro: true,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  },
  {
    id: 16,
    title: 'Personal Blog',
    category: 'Portfolios',
    description: 'Elegant typography and distraction-free reading environments for writers.',
    users: '9.8k',
    isPro: false,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    type: 'responsive'
  }
];

export default function Templates() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesTab = activeTab === 'All' || t.category === activeTab;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-8 pb-32 max-w-[1600px] mx-auto relative z-10 transition-colors duration-300">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-semibold mb-2 text-[#1c1c1c] dark:text-white transition-colors duration-300 flex items-center gap-3">
            <LayoutTemplate className="w-8 h-8 text-brand" />
            Template Gallery
          </h1>
          <p className="text-xl font-medium tracking-tight text-gray-500 dark:text-white/60 transition-colors duration-300">
            Start your next project with beautiful, responsive templates.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative group w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400 dark:text-white/40 group-focus-within:text-brand transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-surface dark:bg-[#1B0B03] border border-gray-200 dark:border-white/10 rounded-2xl text-[13px] text-[#1c1c1c] dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:ring-2 focus:ring-brand/20 dark:focus:ring-brand/40 focus:border-brand dark:focus:border-brand transition-all outline-none shadow-sm"
              placeholder="Search templates..."
            />
          </div>
          <button className="h-[42px] px-4 rounded-2xl bg-surface dark:bg-[#1B0B03] border border-gray-200 dark:border-white/10 text-[13px] font-bold text-gray-600 dark:text-white/80 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all shadow-sm shrink-0">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
              activeTab === category 
                ? 'bg-[#1c1c1c] dark:bg-white text-white dark:text-[#130600] shadow-md' 
                : 'bg-surface dark:bg-[#1B0B03] text-gray-600 dark:text-white/70 border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Create Blank Card */}
        <div className="group rounded-[2rem] bg-surface dark:bg-[#1B0B03] border border-gray-200 border-dashed dark:border-white/20 overflow-hidden hover:border-brand dark:hover:border-brand transition-all duration-500 cursor-pointer flex flex-col items-center justify-center h-[380px] hover:shadow-[0_8px_30px_rgba(255,83,0,0.1)] relative">
           <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand text-gray-400 dark:text-white/40 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
             <Plus className="w-8 h-8" />
           </div>
           <h3 className="text-[16px] font-bold text-[#1c1c1c] dark:text-white relative z-10">Start from Scratch</h3>
           <p className="text-[12px] text-gray-500 dark:text-white/50 mt-2 text-center max-w-[70%] relative z-10">
             Build your own unique workflow with a blank canvas.
           </p>
        </div>

        {/* Template Cards */}
        {filteredTemplates.map(template => (
          <div key={template.id} className="group rounded-[2rem] bg-surface dark:bg-[#1B0B03] border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/30 dark:hover:border-brand/40 transition-all duration-500 flex flex-col h-[380px]">
            {/* CSS-based Preview Window */}
            <div className={`h-[200px] relative overflow-hidden p-4 transition-colors duration-500 bg-gray-50 dark:bg-[#130600]`}>
               
               {/* Network Image */}
               <img src={template.image} alt={template.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1B0B03]/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px] z-20">
                 <button className="w-10 h-10 rounded-full bg-white/20 text-white font-bold text-xs hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors scale-90 group-hover:scale-100 delay-75 duration-300">
                   <Eye className="w-4 h-4" />
                 </button>
                 <button className="h-10 px-5 rounded-full bg-brand text-white font-bold text-[13px] hover:bg-brand/90 flex items-center gap-2 transition-transform shadow-[0_4px_15px_rgba(255,83,0,0.4)] scale-90 group-hover:scale-100 delay-100 duration-300 hover:scale-[1.05]">
                   Use <ArrowRight className="w-3.5 h-3.5" />
                 </button>
               </div>
               
               {/* Pro Badge */}
               {template.isPro && (
                 <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded border border-white/20 shadow-sm z-10 flex items-center gap-1">
                   <Zap className="w-3 h-3 fill-white" /> Pro
                 </div>
               )}
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-[15px] text-[#1c1c1c] dark:text-white transition-colors">{template.title}</h3>
                <div className="flex gap-1 text-gray-400 dark:text-white/40">
                  {template.type === 'desktop' && <Monitor className="w-3.5 h-3.5" />}
                  {template.type === 'mobile' && <Smartphone className="w-3.5 h-3.5" />}
                  {template.type === 'responsive' && <Globe className="w-3.5 h-3.5" />}
                </div>
              </div>
              
              <p className="text-[12px] text-gray-500 dark:text-white/60 leading-relaxed mb-4 flex-1 transition-colors">
                {template.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
                <span className="text-[11px] font-bold text-gray-400 dark:text-white/40 uppercase tracking-wider transition-colors">
                  {template.category}
                </span>
                <span className="text-[11px] font-bold text-[#1c1c1c] dark:text-white flex items-center gap-1 transition-colors">
                  <Play className="w-3 h-3 text-brand" /> {template.users} uses
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
