const featureCards = [
    {
        title: 'Start Creating',
        description:
            'Avoid the clutter. Skillflow empowers you to create intelligent, efficient training that keeps your entire team in sync.',
        icon: '✣',
    },
    {
        title: 'Smart Sync',
        description:
            'Import knowledge from tools and links. Skillflow syncs everything automatically with always-updated content agents.',
        icon: '↻',
        featured: true,
    },
    {
        title: 'Instant Share',
        description:
            'Publishing is instant. Routing logic sends training exactly where it’s needed, no manual sorting required.',
        icon: '↗',
    },
];

export const CoreFeaturesSection = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-[#f9f8fd] px-4 pb-28 pt-20 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,248,253,0.96),rgba(249,248,253,0.98))]" />
                <div className="absolute left-1/2 top-[16%] h-[18rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#eef5ff]/28 blur-[95px]" />
                <div className="absolute left-[24%] top-[58%] h-[12rem] w-[12rem] rounded-full bg-[#ffe3dc]/12 blur-[110px]" />
                <div className="absolute right-[22%] top-[57%] h-[12rem] w-[12rem] rounded-full bg-[#dfecff]/14 blur-[96px]" />
            </div>

            <div className="relative mx-auto max-w-[1120px]">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)]">
                        <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                        <span>Core Features Section</span>
                    </div>

                    <h2 className="mt-6 text-[2.6rem] font-extrabold leading-[1] tracking-[-0.07em] text-[#111218] sm:text-[3.4rem]">
                        Clarity Speed Results.
                    </h2>

                    <p className="mx-auto mt-5 max-w-[720px] text-[1rem] leading-[1.7] text-[#9194a4] sm:text-[1.08rem]">
                        Skillflow streamlines training-create, launch, and track content in
                        minutes.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
                    {featureCards.map((card) => (
                        <article
                            key={card.title}
                            className={`group relative overflow-hidden rounded-[30px] border border-white/85 text-center shadow-[0_18px_42px_rgba(160,176,214,0.10)] backdrop-blur-[18px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(160,176,214,0.16)] ${
                                card.featured
                                    ? 'min-h-[380px] px-7 pb-8 pt-8 ring-1 ring-white/75 before:absolute before:inset-[10px] before:rounded-[24px] before:border before:border-white/75 before:content-[""] bg-[linear-gradient(180deg,rgba(246,246,255,0.94),rgba(236,244,255,0.92))]'
                                    : ''
                            } ${
                                !card.featured
                                    ? 'min-h-[346px] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(252,253,255,0.9))] px-7 pb-8 pt-8'
                                    : ''
                            }`}
                        >
                            <div
                                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                                    card.featured
                                        ? 'bg-[radial-gradient(circle_at_24%_88%,rgba(255,206,198,0.26),transparent_30%),radial-gradient(circle_at_76%_16%,rgba(190,230,255,0.42),transparent_36%)]'
                                        : 'bg-[radial-gradient(circle_at_50%_10%,rgba(193,229,255,0.14),transparent_36%)]'
                                }`}
                            />

                            {card.featured ? (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_92%,rgba(255,212,205,0.26),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(196,233,255,0.46),transparent_38%),linear-gradient(180deg,rgba(245,245,255,0.76),rgba(232,241,255,0.62))]" />
                            ) : (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_8%,rgba(206,232,255,0.16),transparent_32%)]" />
                            )}

                            <div className="relative z-10 mx-auto flex w-fit flex-col items-center">
                                <div className="relative mb-9 mt-2 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#deebff_0%,#d2e3ff_100%)] text-[1.55rem] font-bold text-[#3e7fff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                    <div className="absolute inset-[-12px] rounded-full bg-[radial-gradient(circle,rgba(103,149,255,0.18)_1.3px,transparent_1.3px)] bg-[length:8px_8px] opacity-45" />
                                    <span className="relative z-10">{card.icon}</span>
                                </div>

                                <h3 className="text-[1.05rem] font-extrabold tracking-[-0.04em] text-[#121319] sm:text-[1.12rem]">
                                    {card.title}
                                </h3>

                                <p className="mt-7 max-w-[290px] text-[0.98rem] leading-[1.75] text-[#9699a7]">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
