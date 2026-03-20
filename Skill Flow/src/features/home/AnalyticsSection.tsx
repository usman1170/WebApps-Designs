const graphPoints =
    'M 18 144 C 34 126, 38 112, 54 114 C 66 115, 72 92, 88 96 C 102 100, 108 122, 124 117 C 136 113, 141 133, 154 128 C 167 123, 170 90, 186 104 C 196 112, 206 87, 219 100 C 233 113, 248 88, 270 100 C 285 109, 296 85, 309 102 C 320 117, 338 96, 351 100 C 364 104, 373 53, 392 64 C 408 73, 392 138, 422 145 C 448 151, 471 144, 473 118 C 475 84, 505 120, 526 105 C 545 92, 548 55, 572 70 C 586 79, 598 52, 620 61 C 642 72, 650 90, 675 95 C 697 100, 716 79, 732 84 C 744 88, 752 112, 772 100 C 790 89, 807 110, 827 106 C 848 101, 866 111, 884 104';

const filterPreview = [
    { label: 'Sales ×', tone: 'bg-[#e5f0ff] text-[#6b9bf0]' },
    { label: 'Grups ×', tone: 'bg-[#f2e5ff] text-[#a97ae8]' },
];

const focusAvatars = [
    'https://i.pravatar.cc/72?img=15',
    'https://i.pravatar.cc/72?img=25',
    'https://i.pravatar.cc/72?img=35',
    'https://i.pravatar.cc/72?img=45',
];

export const AnalyticsSection = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-[#f9f8fd] px-0 pb-28 pt-8 sm:px-1 lg:px-1">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,248,253,0.98),rgba(249,248,253,0.98))]" />
                <div className="absolute left-1/2 top-[18%] h-[16rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#eff6ff]/24 blur-[95px]" />
            </div>

            <div className="relative mx-auto max-w-[1400px]">
                <div className="mx-auto max-w-[760px] text-center">
                    <h2 className="text-[2.7rem] font-extrabold leading-[1] tracking-[-0.07em] text-[#111218] sm:text-[3.55rem]">
                        Spot Solve Instantly
                    </h2>

                    <p className="mx-auto mt-6 max-w-[760px] text-[1rem] leading-[1.65] text-[#979cab] sm:text-[1.08rem]">
                        Measure comprehension accurately using built-in analytics and real-time
                        performance tracking.
                    </p>
                </div>

                <div className="mt-14 rounded-[30px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,252,255,0.92))] p-7 shadow-[0_18px_44px_rgba(173,186,218,0.10)] backdrop-blur-[18px]">
                    <div className="mb-6 flex items-center justify-between gap-3">
                        <h3 className="text-[1.08rem] font-extrabold tracking-[-0.04em] text-[#15161d] sm:text-[1.18rem]">
                            Company Activity
                        </h3>

                        <div className="flex items-center gap-2 text-[0.95rem] font-medium text-[#30343d]">
                            <span className="h-3.5 w-3.5 rounded-full bg-[#3a82ff]" />
                            <span>Guides</span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(248,250,255,0.18))] px-3 pb-3 pt-2">
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[42px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(227,238,255,0.3))]" />

                        <div className="grid grid-cols-[52px_1fr] gap-x-3">
                            <div className="pt-10 text-right text-[0.78rem] font-medium text-[#a2a7b3] sm:text-[0.88rem]">
                                <div className="h-[52px]">200</div>
                                <div className="h-[52px]">150</div>
                                <div className="h-[52px]">100</div>
                                <div className="h-[52px]">50</div>
                                <div className="h-[44px]">0</div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-x-0 top-[36px] h-px bg-[#eef0f5]" />
                                <div className="absolute inset-x-0 top-[88px] h-px bg-[#eef0f5]" />
                                <div className="absolute inset-x-0 top-[140px] h-px bg-[#eef0f5]" />
                                <div className="absolute inset-x-0 top-[192px] h-px bg-[#eef0f5]" />
                                <div className="absolute inset-x-0 top-[244px] h-px bg-[#eef0f5]" />

                                <svg
                                    viewBox="0 0 900 290"
                                    className="relative z-10 h-[290px] w-full overflow-visible"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient id="activityFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(64,136,255,0.20)" />
                                            <stop offset="100%" stopColor="rgba(64,136,255,0.01)" />
                                        </linearGradient>
                                    </defs>

                                    <path
                                        d={`${graphPoints} L 884 248 L 18 248 Z`}
                                        fill="url(#activityFill)"
                                        className="animate-chart-fade"
                                    />
                                    <path
                                        d={graphPoints}
                                        fill="none"
                                        stroke="#3d83ff"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        className="animate-chart-line"
                                        pathLength="1"
                                    />

                                    <g className="animate-chart-marker">
                                        <circle cx="648" cy="82" r="5" fill="#3d83ff" />
                                        <circle cx="648" cy="82" r="16" fill="rgba(61,131,255,0.10)" />
                                    </g>
                                </svg>

                                <div className="absolute left-[61.8%] top-[40px] rounded-[7px] bg-[#111111] px-3 py-[6px] text-[0.78rem] font-semibold text-white shadow-[0_12px_20px_rgba(17,17,17,0.16)]">
                                    150
                                    <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#111111]" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 grid grid-cols-[52px_1fr] gap-x-3">
                            <div />
                            <div className="grid grid-cols-6 text-[0.82rem] font-medium text-[#b0b4bf] sm:text-[0.9rem]">
                                <span>Jun 25</span>
                                <span>Jul 05</span>
                                <span>Jul 15</span>
                                <span>Jul 25</span>
                                <span>Aug 04</span>
                                <span className="text-right">Aug 14</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_0.95fr]">
                    <article className="group rounded-[28px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,252,255,0.92))] px-7 py-8 shadow-[0_18px_44px_rgba(173,186,218,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(173,186,218,0.16)]">
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_220px]">
                            <div className="max-w-[280px]">
                                <h3 className="text-[1.28rem] font-extrabold leading-[1.18] tracking-[-0.05em] text-[#111218]">
                                    Filter In Natural Language
                                </h3>
                                <p className="mt-5 text-[1rem] leading-[1.55] text-[#9a9ead]">
                                    Generate learning reports by asking, not clicking
                                </p>
                            </div>

                            <div className="rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(246,249,255,0.84))] p-4 shadow-[0_14px_34px_rgba(177,192,225,0.16)] transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="text-[0.9rem] font-bold text-[#1a1b21]">Filter</div>
                                <div className="mt-3 flex min-h-[24px] items-center rounded-[8px] border border-[#a9bee7] bg-white/90 px-3 text-[0.56rem] font-semibold text-[#aeb3c1]">
                                    <span className="mr-1.5 text-[0.8rem] text-[#1f2027]">⌕</span>
                                    Show Meseles And Mark
                                </div>
                                <div className="relative my-2 text-center text-[0.6rem] text-[#c7ccdb] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[39%] before:bg-[#dadee8] after:absolute after:right-0 after:top-1/2 after:h-px after:w-[39%] after:bg-[#dadee8]">
                                    Or
                                </div>
                                <div className="text-[0.58rem] font-bold text-[#555b6b]">Tag:</div>
                                <div className="mt-2 flex gap-2">
                                    {filterPreview.map((pill) => (
                                        <span
                                            key={pill.label}
                                            className={`inline-flex min-h-[20px] items-center rounded-full px-[9px] text-[0.55rem] font-bold ${pill.tone}`}
                                        >
                                            {pill.label}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-2 min-h-[22px] rounded-[8px] border border-[#d4dbea] bg-white/90" />
                                <div className="mt-2 rounded-full border border-[#e2e7f1] bg-[#f4f8ff] px-[10px] py-[5px] text-[0.52rem] font-bold text-[#76a0f4]">
                                    Grups : Southwest Sales Te...
                                </div>
                                <div className="mt-3 flex gap-2">
                                    <button
                                        type="button"
                                        className="rounded-[9px] bg-[#f4f1f1] px-4 py-[6px] text-[0.58rem] font-bold text-[#373942]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-[9px] bg-[#0f0f13] px-4 py-[6px] text-[0.58rem] font-bold text-white"
                                    >
                                        Apply Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="group rounded-[28px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,252,255,0.92))] px-7 py-8 shadow-[0_18px_44px_rgba(173,186,218,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(173,186,218,0.16)]">
                        <div className="mb-8 flex flex-col items-center">
                            <div className="relative w-fit">
                                <div className="rounded-[16px] border border-dashed border-[#b9cff5] px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        {focusAvatars.map((avatar) => (
                                            <img
                                                key={avatar}
                                                src={avatar}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                                className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-[0_8px_18px_rgba(126,145,188,0.16)]"
                                            />
                                        ))}
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[1.6rem] leading-none text-[#111218]">
                                            +
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-3 opacity-35">
                                    {focusAvatars.map((avatar) => (
                                        <img
                                            key={`${avatar}-ghost`}
                                            src={avatar}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className="h-8 w-8 rounded-full object-cover grayscale"
                                        />
                                    ))}
                                    <div className="h-8 w-8 rounded-full bg-[#eceef6]" />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-[340px]">
                            <h3 className="text-[1.32rem] font-extrabold leading-[1.15] tracking-[-0.05em] text-[#111218]">
                                Focus On What You Need
                            </h3>
                            <p className="mt-4 text-[1rem] leading-[1.6] text-[#9a9ead]">
                                Access comprehensive company reports or explore detailed insights
                                for targeted teams.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
