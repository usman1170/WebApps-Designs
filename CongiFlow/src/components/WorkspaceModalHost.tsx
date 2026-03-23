import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Crown,
  FolderKanban,
  Sparkles,
  X,
} from 'lucide-react';
import { useWorkspaceModal } from '../lib/workspace-modal';

const upgradeFeatures = [
  'Unlimited AI workflow suggestions',
  'Private team spaces and advanced permissions',
  'High-priority support with custom onboarding',
];

const taskColumns = ['Backlog', 'In Progress', 'Review', 'Done'];
const taskPriorities = ['Low', 'Medium', 'High'];

export default function WorkspaceModalHost() {
  const { activeModal, closeModal } = useWorkspaceModal();
  const [taskColumn, setTaskColumn] = useState('In Progress');
  const [taskPriority, setTaskPriority] = useState('High');

  useEffect(() => {
    if (!activeModal) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, closeModal]);

  if (!activeModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        aria-label="Close popup"
        className="workspace-modal-overlay"
        onClick={closeModal}
      />

      <div className="workspace-modal-shell w-full max-w-[980px]">
        {activeModal === 'upgrade' ? (
          <UpgradeModal onClose={closeModal} />
        ) : (
          <TaskModal
            onClose={closeModal}
            taskColumn={taskColumn}
            taskPriority={taskPriority}
            setTaskColumn={setTaskColumn}
            setTaskPriority={setTaskPriority}
          />
        )}
      </div>
    </div>
  );
}

function UpgradeModal({ onClose }: { onClose: () => void }) {
  return (
    <section className="workspace-modal-card overflow-hidden rounded-[2.25rem] border border-white/50 bg-[#fff8f4]/95 text-[#1a1c1e] shadow-[0_40px_120px_rgba(255,88,24,0.22)] dark:border-white/10 dark:bg-[#180803]/95 dark:text-white">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden p-7 sm:p-9">
          <div className="absolute inset-x-8 top-0 h-40 rounded-full bg-[radial-gradient(circle,_rgba(255,111,0,0.28),_transparent_68%)] blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a1c1e] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white dark:bg-white/10">
                <Crown className="h-4 w-4 text-brand" />
                PRO ACCESS
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-[#1a1c1e] transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-[1.05] sm:text-[3.25rem]">
              Move your workspace into
              <span className="block bg-gradient-to-r from-[#ff5b14] via-[#ff8a00] to-[#ff5b14] bg-clip-text text-transparent">
                premium momentum.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#667085] dark:text-white/60">
              Unlock a cleaner operating system for your team with AI copilots, deeper reporting,
              and private project control designed around the same motion-heavy dashboard style.
            </p>

            <div className="mt-8 grid gap-3">
              {upgradeFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/65 px-4 py-3 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,88,24,0.28)] transition hover:translate-y-[-1px] hover:bg-[#f24f00]">
                Start PRO trial
              </button>
              <button className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#1a1c1e] transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                Compare plans
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden bg-[#120200] p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,132,0,0.55),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(255,78,0,0.45),transparent_32%),linear-gradient(145deg,#220500_0%,#090100_100%)]" />
          <div className="absolute inset-0 opacity-70 mix-blend-screen blur-3xl bg-[conic-gradient(from_180deg_at_60%_45%,rgba(255,215,0,0.35),rgba(255,96,0,0.05),rgba(255,96,0,0.48),rgba(255,215,0,0.18))]" />

          <div className="relative flex h-full flex-col justify-between">
            <div className="self-end rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80 backdrop-blur-xl">
              LIVE BENEFITS
            </div>

            <div className="mx-auto w-full max-w-[320px] rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Execution lift</p>
                  <p className="mt-3 text-5xl font-semibold leading-none">3.2x</p>
                </div>
                <Sparkles className="h-5 w-5 text-[#ff9d57]" />
              </div>

              <div className="mt-6 space-y-4">
                <MetricBar label="Automation coverage" value="87%" width="87%" />
                <MetricBar label="Delivery visibility" value="94%" width="94%" />
                <MetricBar label="Focus time reclaimed" value="31h" width="72%" />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 text-white/90 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">Upgrade package</p>
                  <p className="mt-2 text-2xl font-semibold">$24<span className="text-sm text-white/55">/seat</span></p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium">
                  First 14 days free
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/65">
                <span>Advanced reports, AI assistants, private spaces</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TaskModal({
  onClose,
  taskColumn,
  taskPriority,
  setTaskColumn,
  setTaskPriority,
}: {
  onClose: () => void;
  taskColumn: string;
  taskPriority: string;
  setTaskColumn: (value: string) => void;
  setTaskPriority: (value: string) => void;
}) {
  return (
    <section className="workspace-modal-card overflow-hidden rounded-[2.25rem] border border-white/60 bg-[#fffaf7]/95 text-[#1a1c1e] shadow-[0_40px_120px_rgba(255,88,24,0.18)] dark:border-white/10 dark:bg-[#1a0802]/95 dark:text-white">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden border-b border-black/5 p-7 sm:p-8 lg:border-b-0 lg:border-r dark:border-white/10">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-orange-300/25 blur-3xl pointer-events-none dark:bg-brand/15" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a1c1e] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white dark:bg-white/10">
                <FolderKanban className="h-4 w-4 text-brand" />
                QUICK TASK
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-[#1a1c1e] transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h2 className="text-3xl font-semibold leading-tight sm:text-[3rem]">
              Add the next
              <span className="block text-brand">high-signal task.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#667085] dark:text-white/60">
              Frame the work, drop it into the right lane, and keep the rest of the board moving
              with the same soft glass treatment used across the workspace.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_24px_60px_rgba(255,111,0,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-[#98a2b3] dark:text-white/40">
                <span>Suggested setup</span>
                <span>Today</span>
              </div>

              <div className="mt-4 rounded-[1.6rem] bg-[#1a1c1e] p-5 text-white dark:bg-[#130600]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Task pulse</p>
                    <p className="mt-2 text-2xl font-semibold">Finalize onboarding checklist</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[#ffb284]">Product</span>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/75">Ops</span>
                  <span className="rounded-full bg-brand px-3 py-1.5 text-white">High priority</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Owner" className="h-9 w-9 rounded-full border-2 border-[#1a1c1e] object-cover dark:border-[#130600]" />
                    <img src="https://i.pravatar.cc/150?img=14" alt="Owner" className="h-9 w-9 rounded-full border-2 border-[#1a1c1e] object-cover dark:border-[#130600]" />
                    <img src="https://i.pravatar.cc/150?img=23" alt="Owner" className="h-9 w-9 rounded-full border-2 border-[#1a1c1e] object-cover dark:border-[#130600]" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Est. impact</p>
                    <p className="mt-1 text-sm font-semibold">+17% review speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-8">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#98a2b3] dark:text-white/40">
                Task name
              </span>
              <input
                defaultValue="Finalize onboarding checklist"
                className="w-full rounded-[1.4rem] border border-black/5 bg-white/85 px-5 py-4 text-sm font-medium outline-none transition focus:border-brand/35 focus:ring-2 focus:ring-brand/10 dark:border-white/10 dark:bg-white/5"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#98a2b3] dark:text-white/40">
                Brief
              </span>
              <textarea
                rows={4}
                defaultValue="Tighten the last three onboarding steps, confirm owner notes, and prep the review handoff for design + product."
                className="w-full resize-none rounded-[1.4rem] border border-black/5 bg-white/85 px-5 py-4 text-sm leading-7 outline-none transition focus:border-brand/35 focus:ring-2 focus:ring-brand/10 dark:border-white/10 dark:bg-white/5"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#98a2b3] dark:text-white/40">
                  Column
                </span>
                <div className="flex flex-wrap gap-2">
                  {taskColumns.map((column) => (
                    <button
                      key={column}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        taskColumn === column
                          ? 'bg-[#1a1c1e] text-white shadow-[0_12px_30px_rgba(26,28,30,0.16)] dark:bg-brand'
                          : 'border border-black/8 bg-white/80 text-[#475467] hover:border-brand/20 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/70'
                      }`}
                      onClick={() => setTaskColumn(column)}
                      type="button"
                    >
                      {column}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#98a2b3] dark:text-white/40">
                  Priority
                </span>
                <div className="flex flex-wrap gap-2">
                  {taskPriorities.map((priority) => (
                    <button
                      key={priority}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        taskPriority === priority
                          ? 'bg-brand text-white shadow-[0_18px_40px_rgba(255,88,24,0.22)]'
                          : 'border border-black/8 bg-white/80 text-[#475467] hover:border-brand/20 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-white/70'
                      }`}
                      onClick={() => setTaskPriority(priority)}
                      type="button"
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-black/5 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#98a2b3] dark:text-white/40">
                    Selected lane
                  </p>
                  <p className="mt-2 text-lg font-semibold">{taskColumn}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#98a2b3] dark:text-white/40">
                    Priority
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand">{taskPriority}</p>
                </div>
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/150?img=41" alt="Assignee" className="h-10 w-10 rounded-full border-2 border-[#fffaf7] object-cover dark:border-[#1a0802]" />
                  <img src="https://i.pravatar.cc/150?img=51" alt="Assignee" className="h-10 w-10 rounded-full border-2 border-[#fffaf7] object-cover dark:border-[#1a0802]" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#fffaf7] bg-[#1a1c1e] text-xs font-semibold text-white dark:border-[#1a0802]">
                    +2
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                className="rounded-full border border-black/8 bg-white/80 px-5 py-3 text-sm font-semibold text-[#475467] transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10"
                onClick={onClose}
                type="button"
              >
                Cancel
              </button>

              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-full border border-black/8 bg-white/80 px-5 py-3 text-sm font-semibold text-[#1a1c1e] transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
                  type="button"
                >
                  Save draft
                </button>
                <button
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,88,24,0.24)] transition hover:translate-y-[-1px] hover:bg-[#f24f00]"
                  type="button"
                >
                  Create task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-semibold text-white">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ffb347]" style={{ width }} />
      </div>
    </div>
  );
}
