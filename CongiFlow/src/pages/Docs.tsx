import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CircleHelp,
  Clock3,
  Command,
  FileText,
  Filter,
  Flame,
  Layers3,
  Search,
  Sparkles,
  Star,
  TrendingUp
} from 'lucide-react';

type DocItem = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  status: string;
  excerpt: string;
  sections: string[];
  bullets: string[];
  views: string;
  updated: string;
};

const categories = ['All', 'Getting Started', 'Workspace', 'Automation', 'API', 'Guides'];

const docs: DocItem[] = [
  {
    id: 'quickstart',
    title: 'Quickstart for New Teams',
    category: 'Getting Started',
    readTime: '6 min',
    status: 'Popular',
    excerpt: 'Set up your workspace, define your first flows, and align owners before launch.',
    sections: ['Workspace setup', 'Role access', 'Flow templates', 'Launch checklist'],
    bullets: [
      'Create spaces for squads, operations, and shared delivery streams.',
      'Pin templates so teams start from consistent structures instead of blank pages.',
      'Define owners and automation rules before inviting collaborators.',
      'Use launch checklists to keep handoff quality predictable.'
    ],
    views: '18.2k',
    updated: '2h ago'
  },
  {
    id: 'blocks',
    title: 'Building Reusable Workspace Blocks',
    category: 'Workspace',
    readTime: '8 min',
    status: 'New',
    excerpt: 'Turn recurring task groups, reviews, and dashboards into reusable building blocks.',
    sections: ['Patterns', 'Properties', 'Variants', 'Permissions'],
    bullets: [
      'Group recurring work into shared modules with stable property names.',
      'Expose only the controls users actually need during execution.',
      'Ship variants for product, marketing, and client delivery without duplicating logic.',
      'Lock structural edits while leaving operational fields editable.'
    ],
    views: '9.4k',
    updated: 'Today'
  },
  {
    id: 'automation',
    title: 'Automation Triggers and Smart Routing',
    category: 'Automation',
    readTime: '10 min',
    status: 'Trending',
    excerpt: 'Route requests, approvals, and follow-ups automatically using context-aware triggers.',
    sections: ['Trigger design', 'Conditions', 'Fallback rules', 'Monitoring'],
    bullets: [
      'Prefer event-driven triggers over manual status policing.',
      'Use layered conditions to separate urgent work from standard throughput.',
      'Attach fallback owners so exceptions never land in a dead queue.',
      'Track trigger health with failure and latency thresholds.'
    ],
    views: '14.7k',
    updated: '5h ago'
  },
  {
    id: 'api',
    title: 'API Authentication and Webhook Delivery',
    category: 'API',
    readTime: '12 min',
    status: 'Stable',
    excerpt: 'Secure external integrations with rotating secrets, signed payloads, and retry-safe handlers.',
    sections: ['Auth tokens', 'Webhook signing', 'Retries', 'Observability'],
    bullets: [
      'Scope tokens by environment and integration purpose.',
      'Verify webhook signatures before processing payload data.',
      'Design idempotent handlers to tolerate duplicate deliveries.',
      'Log request correlation IDs for traceable support workflows.'
    ],
    views: '11.1k',
    updated: 'Yesterday'
  },
  {
    id: 'playbooks',
    title: 'Operational Playbooks for High-Volume Teams',
    category: 'Guides',
    readTime: '9 min',
    status: 'Featured',
    excerpt: 'Standardize review loops, approvals, and escalation paths without slowing the team down.',
    sections: ['Escalations', 'Review loops', 'Capacity rules', 'Reporting'],
    bullets: [
      'Define escalation thresholds tied to customer or business impact.',
      'Keep review loops explicit so work does not bounce indefinitely.',
      'Set capacity bands that trigger staffing or automation changes.',
      'Publish weekly reporting snapshots to maintain operational trust.'
    ],
    views: '7.9k',
    updated: '1d ago'
  }
];

const highlights = [
  { label: 'Articles', value: '56', icon: BookOpen },
  { label: 'Live readers', value: '1.3k', icon: Flame },
  { label: 'Avg. completion', value: '92%', icon: TrendingUp }
];

const quickLinks = [
  'How permissions work',
  'Designing approvals',
  'Template publishing flow',
  'Release notes for March'
];

export default function Docs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [activeDocId, setActiveDocId] = useState(docs[0].id);
  const filteredDocs = useMemo(() => {
    return docs.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const text = `${item.title} ${item.excerpt} ${item.sections.join(' ')}`.toLowerCase();
      return matchesCategory && text.includes(query.toLowerCase());
    });
  }, [activeCategory, query]);

  const activeDoc = filteredDocs.find((item) => item.id === activeDocId) ?? filteredDocs[0] ?? docs[0];

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-6 md:px-8 md:py-8 pb-24 relative z-10 transition-colors duration-300">
      <div className="mb-8 rounded-[2.5rem] border border-gray-100 bg-white/75 p-6 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-[#1B0B03]/85 md:p-8">
        <div className="absolute inset-x-0 top-0 h-40 rounded-t-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,83,0,0.18),_transparent_62%)] pointer-events-none" />
        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-[12px] font-bold text-brand dark:bg-brand/15">
              <Sparkles className="h-4 w-4" />
              Momentum knowledge base
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#1c1c1c] dark:text-white md:text-5xl">
              Docs that feel native to the workspace
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-gray-500 dark:text-white/60 md:text-lg md:leading-8">
              Searchable guides, live playbooks, and product references designed to move as fast as the rest of the app.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:min-w-[420px]">
            {highlights.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-[1.75rem] border border-gray-100 bg-white/80 p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_40px_-24px_rgba(255,83,0,0.45)] dark:border-white/5 dark:bg-white/5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-50 text-gray-500 transition-colors duration-300 group-hover:bg-brand group-hover:text-white dark:bg-white/5 dark:text-white/70">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-[#1c1c1c] dark:text-white">{value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1A1C1E] text-white shadow-lg shadow-black/5 dark:bg-[#782300]'
                  : 'border border-gray-200 bg-white/80 text-gray-600 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:border-brand/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-80 group">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-brand dark:text-white/40" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search docs, API, workflows..."
              className="w-full rounded-2xl border border-gray-200 bg-white/80 py-3 pl-11 pr-4 text-[13px] text-[#1c1c1c] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
            />
          </div>
          <button className="inline-flex h-[46px] items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/80 px-4 text-[13px] font-bold text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:border-brand/40 dark:hover:text-white">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredDocs.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveDocId(item.id)}
                className={`group relative overflow-hidden rounded-[2rem] border p-5 text-left transition-all duration-500 ${
                  item.id === activeDoc.id
                    ? 'border-brand/20 bg-gradient-to-br from-brand/[0.12] via-white to-white shadow-[0_20px_50px_-35px_rgba(255,83,0,0.55)] dark:from-brand/15 dark:via-[#1B0B03] dark:to-[#130600]'
                    : 'border-gray-100 bg-white/80 shadow-sm hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_40px_-28px_rgba(255,83,0,0.45)] dark:border-white/5 dark:bg-[#1B0B03]'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,83,0,0.18),_transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#1A1C1E] px-3 py-1.5 text-[11px] font-bold text-white dark:bg-white/10">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{item.status}</span>
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-[#1c1c1c] transition-colors duration-300 group-hover:text-brand dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-white/60">{item.excerpt}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.sections.map((section) => (
                      <span
                        key={section}
                        className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[11px] font-bold text-gray-500 transition-all duration-300 group-hover:border-brand/25 group-hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/50"
                      >
                        {section}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/5">
                    <div className="flex items-center gap-4 text-[12px] font-medium text-gray-400 dark:text-white/45">
                      <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{item.readTime}</span>
                      <span>{item.views} reads</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1c1c1c] transition-transform duration-300 group-hover:translate-x-0.5 dark:text-white">
                      Open
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white/80 p-5 shadow-sm dark:border-white/5 dark:bg-[#1B0B03] md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">Reader flow</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1c1c1c] dark:text-white">What teams open most</h3>
              </div>
              <div className="rounded-full bg-brand/10 px-4 py-2 text-[12px] font-bold text-brand dark:bg-brand/15">Live</div>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {quickLinks.map((link, index) => (
                <div
                  key={link}
                  className="group rounded-[1.5rem] border border-gray-100 bg-gradient-to-b from-white to-[#fff8f4] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 dark:border-white/5 dark:from-white/5 dark:to-transparent"
                >
                  <div className="mb-8 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-700 group-hover:w-full"
                      style={{ width: `${58 + index * 9}%` }}
                    />
                  </div>
                  <div className="text-sm font-semibold leading-6 text-[#1c1c1c] dark:text-white">{link}</div>
                  <div className="mt-3 text-[12px] text-gray-400 dark:text-white/45">{12 + index * 5}% of weekly traffic</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white/85 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_22px_50px_-34px_rgba(255,83,0,0.5)] dark:border-white/5 dark:bg-[#1B0B03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,83,0,0.18),_transparent_38%)] opacity-80" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1C1E] px-4 py-2 text-[12px] font-bold text-white dark:bg-white/10">
                  <FileText className="h-4 w-4" />
                  Previewing now
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-[11px] font-bold text-brand dark:bg-brand/15">
                  <Command className="h-3.5 w-3.5" />
                  Cmd + K ready
                </div>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#1c1c1c] dark:text-white">{activeDoc.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-white/60">{activeDoc.excerpt}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] font-medium text-gray-400 dark:text-white/45">
                <span className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">Updated {activeDoc.updated}</span>
                <span className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">{activeDoc.readTime} read</span>
                <span className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">{activeDoc.views} views</span>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/60 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">Key takeaways</h3>
                  <Star className="h-4 w-4 text-brand" />
                </div>
                <div className="space-y-3">
                  {activeDoc.bullets.map((bullet, index) => (
                    <div
                      key={bullet}
                      className="group/item flex items-start gap-3 rounded-2xl border border-gray-100 bg-white/80 p-3 transition-all duration-300 hover:border-brand/20 hover:bg-[#fff7f2] dark:border-white/5 dark:bg-black/10 dark:hover:bg-brand/10"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-[#1c1c1c] dark:text-white/85">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            <div className="rounded-[2rem] border border-gray-100 bg-white/80 p-6 shadow-sm dark:border-white/5 dark:bg-[#1B0B03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/15">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1c1c1c] dark:text-white">Page structure</h3>
                  <p className="text-[12px] font-medium text-gray-400 dark:text-white/45">Fast scanning with anchored sections</p>
                </div>
              </div>
              <div className="space-y-2">
                {activeDoc.sections.map((section, index) => (
                  <button
                    key={section}
                    className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-[#1c1c1c] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:text-brand dark:border-white/5 dark:bg-white/5 dark:text-white/85"
                  >
                    <span>{section}</span>
                    <span className="text-[11px] text-gray-400 dark:text-white/35">0{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white/80 p-6 shadow-sm dark:border-white/5 dark:bg-[#1B0B03]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1C1E] text-white dark:bg-white/10">
                  <CircleHelp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1c1c1c] dark:text-white">Help shortcuts</h3>
                  <p className="text-[12px] font-medium text-gray-400 dark:text-white/45">Common paths people open next</p>
                </div>
              </div>
              <div className="space-y-3">
                {['Open support channel', 'Browse API changelog', 'Compare template versions'].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 px-4 py-3 transition-all duration-300 hover:border-brand/25 hover:bg-[#fff7f2] dark:border-white/5 dark:bg-white/5 dark:hover:bg-brand/10"
                  >
                    <span className="text-sm font-semibold text-[#1c1c1c] dark:text-white/85">{item}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand dark:text-white/35" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
