export const FinalCtaSection = () => {
    return (
        <section className="relative z-10 bg-[#f9f8fd] px-0 pb-0 pt-12 sm:px-1 lg:px-1">
            <div className="mx-auto max-w-[1440px]">
                <div className="overflow-hidden rounded-[40px] border border-white/70 bg-[radial-gradient(circle_at_14%_88%,rgba(255,188,174,0.9),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(143,220,255,0.96),transparent_32%),radial-gradient(circle_at_50%_8%,rgba(222,242,255,0.56),transparent_26%),radial-gradient(circle_at_68%_62%,rgba(202,235,255,0.34),transparent_30%),linear-gradient(180deg,rgba(247,248,255,0.98),rgba(229,243,253,0.94))] px-6 py-16 text-center shadow-[0_22px_54px_rgba(176,191,223,0.12)] sm:px-10 sm:py-20">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/88 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)]">
                        <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                        <span>Teams That Perform</span>
                    </div>

                    <h2 className="mx-auto mt-6 max-w-[760px] text-[2.55rem] font-extrabold leading-[1.02] tracking-[-0.08em] text-[#111218] sm:text-[3.7rem]">
                        AI Training Built for Real Workflows
                    </h2>

                    <p className="mx-auto mt-6 max-w-[640px] text-[1rem] leading-[1.65] text-[#8f94a3] sm:text-[1.08rem]">
                        Empower your team with AI-driven training, faster onboarding, and smarter
                        knowledge sharing at scale.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            className="rounded-2xl bg-white px-7 py-[13px] text-[0.96rem] font-semibold text-[#17181f] shadow-[0_16px_32px_rgba(180,192,220,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(180,192,220,0.22)]"
                        >
                            Get Started For Free
                        </button>
                        <button
                            type="button"
                            className="rounded-2xl bg-[#151418] px-7 py-[13px] text-[0.96rem] font-semibold text-white shadow-[0_16px_32px_rgba(23,20,24,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(23,20,24,0.24)]"
                        >
                            Get Started For Free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
