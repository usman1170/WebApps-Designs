import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Filter,
  ListTodo,
  Plus,
  Search,
  Sparkles,
  Target,
  Users2
} from 'lucide-react';

type TaskStatus = 'Backlog' | 'In Progress' | 'Review' | 'Done';
type TaskPriority = 'Low' | 'Medium' | 'High';

type Task = {
  id: string;
  title: string;
  owner: string;
  due: string;
  priority: TaskPriority;
  status: TaskStatus;
  tags: string[];
  completed: boolean;
};

const filters = ['All', 'Today', 'Upcoming', 'Completed'];
const columns: TaskStatus[] = ['Backlog', 'In Progress', 'Review', 'Done'];

const initialTasks: Task[] = [
  {
    id: 't1',
    title: 'Finalize onboarding checklist',
    owner: 'Dann',
    due: 'Today',
    priority: 'High',
    status: 'In Progress',
    tags: ['Product', 'Ops'],
    completed: false
  },
  {
    id: 't2',
    title: 'Review docs page interactions',
    owner: 'Michelle',
    due: 'Today',
    priority: 'Medium',
    status: 'Review',
    tags: ['Design'],
    completed: false
  },
  {
    id: 't3',
    title: 'Prepare API sync notes',
    owner: 'Alex',
    due: 'Tomorrow',
    priority: 'Low',
    status: 'Backlog',
    tags: ['API'],
    completed: false
  },
  {
    id: 't4',
    title: 'Ship workflow template v2',
    owner: 'Flux',
    due: 'Thu',
    priority: 'High',
    status: 'In Progress',
    tags: ['Templates'],
    completed: false
  },
  {
    id: 't5',
    title: 'Audit empty states across app',
    owner: 'Oliver',
    due: 'Fri',
    priority: 'Medium',
    status: 'Backlog',
    tags: ['UI'],
    completed: false
  },
  {
    id: 't6',
    title: 'Close sprint planning notes',
    owner: 'Dann',
    due: 'Done',
    priority: 'Low',
    status: 'Done',
    tags: ['Planning'],
    completed: true
  }
];

function priorityClasses(priority: TaskPriority) {
  if (priority === 'High') return 'bg-brand/10 text-brand dark:bg-brand/15';
  if (priority === 'Medium') return 'bg-[#1A1C1E]/8 text-[#1A1C1E] dark:bg-white/10 dark:text-white/80';
  return 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400';
}

export default function TodoLists() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const text = `${task.title} ${task.owner} ${task.tags.join(' ')}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Today' && task.due === 'Today' && !task.completed) ||
        (activeFilter === 'Upcoming' && task.due !== 'Today' && !task.completed) ||
        (activeFilter === 'Completed' && task.completed);
      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, search, tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);
  const todayCount = tasks.filter((task) => task.due === 'Today' && !task.completed).length;
  const inFlightCount = tasks.filter((task) => task.status === 'In Progress' || task.status === 'Review').length;

  const toggleTask = (taskId: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              status: task.completed ? 'In Progress' : 'Done',
              due: task.completed ? 'Today' : 'Done'
            }
          : task
      )
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-6 md:px-8 md:py-8 pb-24 relative z-10 transition-colors duration-300">
      <div className="mb-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2.5rem] border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-[#1B0B03]/85 md:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-[12px] font-bold text-brand dark:bg-brand/15">
            <Sparkles className="h-4 w-4" />
            Team execution board
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1c1c1c] dark:text-white md:text-5xl">
            To do lists with live momentum
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-gray-500 dark:text-white/60 md:text-lg md:leading-8">
            Track work across backlog, delivery, and review with the same motion language and visual rhythm as the rest of the workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_34px_-18px_rgba(255,83,0,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand/90">
              <Plus className="h-4 w-4" />
              New task
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/80 px-5 py-3 text-[13px] font-bold text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/75">
              <CalendarDays className="h-4 w-4" />
              This week
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
          {[
            { label: 'Completed', value: `${progress}%`, icon: CheckCircle2 },
            { label: 'Due today', value: `${todayCount}`, icon: Clock3 },
            { label: 'In motion', value: `${inFlightCount}`, icon: Target }
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group rounded-[2rem] border border-gray-100 bg-white/80 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_20px_40px_-28px_rgba(255,83,0,0.45)] dark:border-white/5 dark:bg-[#1B0B03]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-50 text-gray-500 transition-all duration-300 group-hover:bg-brand group-hover:text-white dark:bg-white/5 dark:text-white/70">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-[#1c1c1c] dark:text-white">{value}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#1A1C1E] text-white shadow-lg shadow-black/5 dark:bg-[#782300]'
                  : 'border border-gray-200 bg-white/80 text-gray-600 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:border-brand/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-80 group">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-brand dark:text-white/40" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tasks, owners, tags..."
              className="w-full rounded-2xl border border-gray-200 bg-white/80 py-3 pl-11 pr-4 text-[13px] text-[#1c1c1c] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
            />
          </div>
          <button className="inline-flex h-[46px] items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/80 px-4 text-[13px] font-bold text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:border-brand/40 dark:hover:text-white">
            <Filter className="h-4 w-4" />
            Sort & filter
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
          {columns.map((column) => {
            const columnTasks = filteredTasks.filter((task) => task.status === column);
            return (
              <div
                key={column}
                className="rounded-[2rem] border border-gray-100 bg-white/80 p-4 shadow-sm dark:border-white/5 dark:bg-[#1B0B03]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5 text-[12px] font-bold text-[#1c1c1c] dark:bg-white/5 dark:text-white/85">
                    <ListTodo className="h-4 w-4 text-brand" />
                    {column}
                  </div>
                  <div className="h-8 min-w-8 rounded-full bg-brand/10 px-2 text-[11px] font-bold text-brand flex items-center justify-center dark:bg-brand/15">
                    {columnTasks.length}
                  </div>
                </div>

                <div className="space-y-3">
                  {columnTasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className="group w-full rounded-[1.6rem] border border-gray-100 bg-gradient-to-b from-white to-[#fff8f4] p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_35px_-24px_rgba(255,83,0,0.45)] dark:border-white/5 dark:from-white/5 dark:to-transparent"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-brand">
                            {task.completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold leading-6 text-[#1c1c1c] dark:text-white">
                              {task.title}
                            </div>
                            <div className="mt-1 text-[12px] text-gray-400 dark:text-white/45">
                              {task.owner} · {task.due}
                            </div>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand dark:text-white/25" />
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${priorityClasses(task.priority)}`}>
                          {task.priority}
                        </span>
                        {task.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-[11px] font-bold text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                        <div
                          className="h-full rounded-full bg-brand transition-all duration-700 group-hover:w-full"
                          style={{ width: task.completed ? '100%' : task.priority === 'High' ? '76%' : task.priority === 'Medium' ? '54%' : '32%' }}
                        />
                      </div>
                    </button>
                  ))}

                  {columnTasks.length === 0 && (
                    <div className="rounded-[1.6rem] border border-dashed border-gray-200 bg-white/50 px-4 py-8 text-center text-[13px] font-medium text-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/35">
                      No tasks in this lane
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white/85 p-6 shadow-sm dark:border-white/5 dark:bg-[#1B0B03]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">Team pulse</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1c1c1c] dark:text-white">Delivery health</h2>
              </div>
              <div className="rounded-full bg-brand/10 px-4 py-2 text-[12px] font-bold text-brand dark:bg-brand/15">Live</div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Execution rate', value: progress },
                { label: 'Review queue', value: Math.min(100, inFlightCount * 18) },
                { label: 'Today coverage', value: Math.min(100, todayCount * 28) }
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-gray-100 bg-white/70 p-4 dark:border-white/5 dark:bg-white/5">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-[#1c1c1c] dark:text-white">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                    <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white/85 p-6 shadow-sm dark:border-white/5 dark:bg-[#1B0B03]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1C1E] text-white dark:bg-white/10">
                <Users2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1c1c1c] dark:text-white">Active owners</h2>
                <p className="text-[12px] font-medium text-gray-400 dark:text-white/45">Current workload split</p>
              </div>
            </div>
            <div className="space-y-3">
              {['Dann', 'Michelle', 'Alex', 'Flux'].map((owner, index) => (
                <div
                  key={owner}
                  className="group flex items-center justify-between rounded-[1.4rem] border border-gray-100 bg-white/70 px-4 py-3 transition-all duration-300 hover:border-brand/25 hover:bg-[#fff7f2] dark:border-white/5 dark:bg-white/5 dark:hover:bg-brand/10"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#1c1c1c] dark:text-white">{owner}</div>
                    <div className="text-[12px] text-gray-400 dark:text-white/45">{2 + index} active tasks</div>
                  </div>
                  <div className="text-[12px] font-bold text-brand">{78 - index * 11}% focus</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
