const topCards = [
    {
        title: 'Instant Support',
        description: 'Quick answers to employee inquiries enhance clarity.',
        variant: 'chat',
    },
    {
        title: 'Self-Maintaining',
        description: 'Intelligence updates dynamically in real time as info changes',
        variant: 'core',
    },
    {
        title: 'Cross-Platform',
        description: 'Answers blend seamlessly and efficiently from multiple sources',
        variant: 'sync',
    },
];

const lowerCards = [
    {
        title: 'Integrations',
        description:
            'Easily sync your training content and ask questions directly from the apps your team already uses.',
        icon: '⟲',
    },
    {
        title: 'User Groups',
        description:
            'Effortlessly connect people, content, and data in one place to streamline collaboration and training.',
        icon: '◉',
    },
    {
        title: 'Certifications',
        description:
            'Automatically issue certifications to employees as soon as their training has been successfully completed.',
        icon: '◎',
    },
    {
        title: 'Course Library',
        description:
            'Explore vital knowledge, training, and content resources at any time with absolute ease and efficiency.',
        icon: '▣',
    },
    {
        title: 'Directory Sync',
        description:
            'Automate essential administrative tasks seamlessly by integrating with your HRIS workflow systems.',
        icon: '▤',
    },
    {
        title: 'Knowledge Base',
        description:
            'Create and maintain a dynamic living wiki easily, without relying on any other tools.',
        icon: '⌘',
    },
];

const PreviewBlock = ({ variant }: { variant: string }) => {
    if (variant === 'chat') {
        return (
            <div className="relative mx-auto mb-10 h-[126px] w-[184px]">
                <div className="absolute left-0 top-0 w-[124px] rounded-[12px] border border-white/80 bg-white/95 p-3 shadow-[0_10px_24px_rgba(172,187,220,0.16)]">
                    <div className="mb-2 flex items-center justify-between text-[0.48rem] font-bold text-[#25262d]">
                        <span>Chats</span>
                        <span className="rounded-full bg-[#f3e6ff] px-1.5 py-0.5 text-[#b882ea]">3</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-[10px] bg-[#f7f9ff] px-2 py-2">
                        <img
                            src="https://i.pravatar.cc/56?img=18"
                            alt=""
                            className="h-5 w-5 rounded-full object-cover"
                        />
                        <div className="text-[0.46rem] leading-[1.35] text-[#868b9c]">
                            <div className="font-semibold text-[#4a4e59]">How Should I Build</div>
                            <div>This Feature To M...</div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[126px] rounded-[12px] border border-white/80 bg-white/95 p-3 shadow-[0_10px_24px_rgba(172,187,220,0.14)]">
                    <div className="text-[0.46rem] leading-[1.35] text-[#8d92a2]">
                        <div>Your First Step Is</div>
                        <div>Ensuring All Controls Listed</div>
                        <div>In Your Internal Security Dos...</div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'sync') {
        return (
            <div className="relative mx-auto mb-10 h-[126px] w-[198px]">
                <div className="absolute right-0 top-2 w-[174px] rounded-[12px] border border-white/80 bg-white/95 p-3 shadow-[0_10px_24px_rgba(172,187,220,0.16)]">
                    <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff3f0] text-[0.66rem] font-bold text-[#ef654d]">
                            G
                        </div>
                        <div className="text-[0.48rem] leading-[1.35] text-[#8a8f9e]">
                            <div className="font-semibold text-[#434752]">Employee Handbook Has Synced</div>
                            <div>Last Update 2 Days Ago</div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-4 w-[174px] rounded-[12px] border border-white/80 bg-white/95 p-3 shadow-[0_10px_24px_rgba(172,187,220,0.14)]">
                    <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef4ff] text-[0.66rem] font-bold text-[#3f82ff]">
                            A
                        </div>
                        <div className="text-[0.48rem] leading-[1.35] text-[#8a8f9e]">
                            <div className="font-semibold text-[#434752]">Employee Handbook Has Synced</div>
                            <div>Last Update 12 Days Ago</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative mx-auto mb-10 flex h-[126px] w-[126px] items-center justify-center">
            <div className="absolute inset-[8px] rounded-full bg-[radial-gradient(circle,rgba(104,149,255,0.16)_1.2px,transparent_1.2px)] bg-[length:8px_8px] opacity-60" />
            <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#dce9ff_0%,#d0e1ff_100%)] text-[1.4rem] text-[#3f7eff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                ✣
            </div>
        </div>
    );
};

export const PerformanceWeaknessSection = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-[#f9f8fd] px-0 pb-24 pt-14 sm:px-1 lg:px-1">
            <div className="relative mx-auto max-w-[1360px]">
                <div className="mx-auto max-w-[760px] text-center">
                    <h2 className="text-[2.65rem] font-extrabold leading-[1] tracking-[-0.07em] text-[#111218] sm:text-[3.35rem]">
                        Expose Performance Weaknesses
                    </h2>
                    <p className="mx-auto mt-6 max-w-[720px] text-[1rem] leading-[1.65] text-[#969aa8] sm:text-[1.08rem]">
                        Track employee progress instantly using smart dashboards and industry-grade
                        learning analytics tools.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
                    {topCards.map((card) => (
                        <article
                            key={card.title}
                            className="min-h-[348px] rounded-[28px] border border-[#e6edf9] bg-[linear-gradient(180deg,rgba(253,254,255,0.96),rgba(248,251,255,0.92))] px-9 pb-9 pt-9 shadow-[0_14px_34px_rgba(169,183,217,0.08)]"
                        >
                            <PreviewBlock variant={card.variant} />
                            <h3 className="text-[1.04rem] font-extrabold tracking-[-0.04em] text-[#111218] sm:text-[1.12rem]">
                                {card.title}
                            </h3>
                            <p className="mt-4 max-w-[250px] text-[0.98rem] leading-[1.65] text-[#969aa8]">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-20 max-w-[760px]">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)]">
                        <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                        <span>Core Features Section</span>
                    </div>
                    <h2 className="mt-6 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.07em] text-[#111218] sm:text-[3.15rem]">
                        Reimagining Core Features for Modern Training Success
                    </h2>
                    <p className="mt-5 max-w-[720px] text-[1rem] leading-[1.65] text-[#969aa8] sm:text-[1.08rem]">
                        Everything you expect from learning tools, rebuilt to be simple, powerful,
                        and fast.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {lowerCards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-[24px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,252,255,0.92))] px-6 pb-8 pt-7 shadow-[0_16px_38px_rgba(173,186,218,0.08)]"
                        >
                            <div className="mb-8 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#f4f7ff_0%,#edf3ff_100%)] text-[1.15rem] text-[#3d83ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                {card.icon}
                            </div>
                            <h3 className="text-[1.04rem] font-extrabold tracking-[-0.04em] text-[#111218] sm:text-[1.12rem]">
                                {card.title}
                            </h3>
                            <p className="mt-4 text-[0.98rem] leading-[1.68] text-[#969aa8]">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
