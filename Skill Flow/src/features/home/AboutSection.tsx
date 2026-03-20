const checklistItems = [
    'Optimize performance through insights',
    'Simplify team training processes',
    'Track learning in real-time',
    'Connect tools, stay synced',
    'Empower teams with knowledge',
];

const groupAvatars = [
    'https://i.pravatar.cc/64?img=11',
    'https://i.pravatar.cc/64?img=21',
    'https://i.pravatar.cc/64?img=31',
    'https://i.pravatar.cc/64?img=41',
];

export const AboutSection = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-[#f9f8fd] px-0 pb-28 pt-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,248,253,0.99),rgba(249,248,253,0.99))]" />
                <div className="absolute left-[24%] top-[40%] h-[14rem] w-[14rem] rounded-full bg-[#e8f1ff]/18 blur-[110px]" />
                <div className="absolute right-[20%] top-[28%] h-[12rem] w-[12rem] rounded-full bg-[#ffe8e0]/10 blur-[110px]" />
            </div>

            <div className="relative mx-auto max-w-[1480px]">
                <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8">
                    <div className="relative mx-auto h-[470px] w-full max-w-[620px]">
                        <div className="absolute left-[145px] top-[92px] h-[214px] w-[314px] rounded-[28px] bg-[linear-gradient(180deg,rgba(236,243,255,0.82),rgba(233,241,255,0.62))]" />
                        <div className="absolute left-[175px] top-[146px] h-[164px] w-[314px] rounded-[26px] bg-[linear-gradient(180deg,rgba(238,244,255,0.72),rgba(233,240,255,0.5))]" />

                        <article className="absolute left-[8px] top-[160px] w-[292px] rounded-[24px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] px-5 py-5 shadow-[0_18px_38px_rgba(171,186,220,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[1.1rem] font-bold tracking-[-0.04em] text-[#14151b]">
                                    Flora Group
                                </h3>
                                <span className="text-[1.2rem] font-bold leading-none text-[#25262d]">...</span>
                            </div>

                            <div className="mt-7 flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    {groupAvatars.map((avatar, index) => (
                                        <img
                                            key={avatar}
                                            src={avatar}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className={`${
                                                index === 0 ? 'ml-0' : '-ml-[8px]'
                                            } h-9 w-9 rounded-full border-[2.5px] border-white object-cover shadow-[0_8px_18px_rgba(130,144,180,0.14)]`}
                                        />
                                    ))}
                                    <span className="-ml-[8px] inline-flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-white bg-[#06070b] text-[1.25rem] font-medium leading-none text-white">
                                        +
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="rounded-[12px] bg-[#e8eefc] px-6 py-[10px] text-[0.9rem] font-semibold text-[#15161b] underline underline-offset-2 transition-colors hover:bg-[#dfe8fb]"
                                >
                                    Join Group
                                </button>
                            </div>
                        </article>

                        <article className="absolute left-[270px] top-[40px] w-[248px] rounded-[24px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] px-5 py-5 shadow-[0_18px_38px_rgba(171,186,220,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[1.02rem] font-bold tracking-[-0.04em] text-[#14151b]">
                                    Created Group
                                </h3>
                                <span className="text-[1.2rem] font-bold leading-none text-[#25262d]">...</span>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <span className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#111218]">
                                    <span className="text-[2.1rem] font-bold">42.00+</span>
                                </span>
                                <span className="pb-1 text-[0.9rem] font-semibold text-[#9dd79e]">10%+</span>
                            </div>
                        </article>

                        <article className="absolute left-[184px] top-[304px] w-[376px] rounded-[24px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] px-4 py-4 shadow-[0_18px_38px_rgba(171,186,220,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[0.98rem] font-bold tracking-[-0.04em] text-[#14151b]">
                                    Recent Activity Feed
                                </h3>
                                <span className="text-[1.1rem] font-bold leading-none text-[#25262d]">...</span>
                            </div>

                            <div className="mt-4 grid grid-cols-[1.15fr_0.95fr_1.25fr_1.5fr] gap-x-3 gap-y-3 text-[0.54rem] text-[#9da2b0]">
                                <span>Team Member</span>
                                <span>Activity</span>
                                <span>Training Module</span>
                                <span>Date Completed</span>

                                <span className="text-[#23252c]">Sarah John</span>
                                <span className="text-[#23252c]">Completed</span>
                                <span className="text-[#23252c]">Onboarding 101</span>
                                <span className="text-[#23252c]">Aug 5, 2025 · 10:34 AM</span>

                                <span className="text-[#23252c]">Daniel Lee</span>
                                <span className="text-[#23252c]">Started</span>
                                <span className="text-[#23252c]">Compliance Basics</span>
                                <span className="text-[#23252c]">Aug 5, 2025 · 9:24 AM</span>

                                <span className="text-[#23252c]">Maria Rodri</span>
                                <span className="text-[#23252c]">Viewed</span>
                                <span className="text-[#23252c]">Product Training · Level 2</span>
                                <span className="text-[#23252c]">Aug 4, 2025 · 4:12 PM</span>
                            </div>
                        </article>
                    </div>

                    <div className="max-w-[620px] lg:pl-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)]">
                            <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                            <span>About us</span>
                        </div>

                        <h2 className="mt-5 text-[2.9rem] font-extrabold leading-[0.98] tracking-[-0.08em] text-[#101117] sm:text-[4rem]">
                            Your Partner in Performance Growth
                        </h2>

                        <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.65] text-[#8f94a3] sm:text-[1.08rem]">
                            Skillflow streamlines team training, making onboarding and knowledge
                            sharing faster, clearer, and more impactful.
                        </p>

                        <ul className="mt-7 space-y-[14px]">
                            {checklistItems.map((item) => (
                                <li key={item} className="flex items-center gap-4 text-[1rem] text-[#7f8493] sm:text-[1.08rem]">
                                    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#6fa8ff] text-[0.7rem] font-bold text-[#3d83ff]">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="mt-8 rounded-[14px] bg-[#e8eefc] px-6 py-[11px] text-[0.96rem] font-semibold text-[#17181f] underline underline-offset-2 transition-colors hover:bg-[#dde7fb]"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
