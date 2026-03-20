const cardShellBase =
    'absolute cursor-pointer transition-all duration-500 hover:z-20 hover:-translate-y-3 hover:scale-[1.045] active:-translate-y-1';

const cardBase =
    'rounded-[20px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.93),rgba(248,251,255,0.86))] shadow-[0_14px_34px_rgba(117,132,167,0.14)] backdrop-blur-[22px] transition-all duration-500 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,252,255,0.92))] hover:shadow-[0_30px_70px_rgba(117,132,167,0.28)] hover:border-white';

const tinyAvatars = [
    'from-[#f4cf9f] to-[#d9a666]',
    'from-[#f1a474] to-[#c7723d]',
    'from-[#e9a186] to-[#d97b61]',
];

export const HeroVisual = () => {
    return (
        <div
            className="relative min-h-[520px] origin-top scale-[0.72] sm:scale-[0.82] lg:min-h-[550px] lg:scale-100"
            aria-hidden="true"
        >
            <div className="animate-visual-panel absolute left-[138px] top-[108px] h-[318px] w-[417px] rounded-[26px] bg-[linear-gradient(180deg,rgba(235,247,255,0.88),rgba(228,241,255,0.62))] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_18px_36px_rgba(183,201,232,0.16),0_0_0_1px_rgba(235,245,255,0.22)] backdrop-blur-[24px]" />
            <div className="animate-visual-panel-delayed absolute left-[268px] top-[140px] h-[304px] w-[308px] rounded-[24px] bg-[linear-gradient(180deg,rgba(234,246,255,0.72),rgba(228,240,255,0.42))] shadow-[inset_0_1px_0_rgba(255,255,255,0.46)] backdrop-blur-[20px]" />
            <div className="animate-visual-panel-soft absolute left-[330px] top-[266px] h-[186px] w-[242px] rounded-[20px] bg-[linear-gradient(180deg,rgba(236,247,255,0.5),rgba(232,243,255,0.3))] backdrop-blur-[14px]" />

            <article className={`${cardShellBase} left-[112px] top-[117px] w-[160px]`}>
                <div className={`${cardBase} animate-card-burst-1 p-[14px_14px_16px]`}>
                    <div className="flex items-center gap-2.5">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#121212] text-[0.72rem] text-white">
                            ✿
                        </div>
                        <div>
                            <div className="text-[0.95rem] font-extrabold tracking-[-0.03em]">Flora Group</div>
                            <div className="text-[0.61rem] font-semibold text-[#9c9fb0]">
                                Last Edited 12:34PM
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center">
                            {tinyAvatars.map((gradient, index) => (
                                <span
                                    key={gradient}
                                    className={`${index === 0 ? 'ml-0' : '-ml-[5px]'
                                        } inline-flex h-[18px] w-[18px] rounded-full border border-white bg-gradient-to-b ${gradient}`}
                                />
                            ))}
                            <span className="-ml-[5px] inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white bg-[#f2ecff] text-[0.5rem] font-bold text-[#8f74d9]">
                                12+
                            </span>
                        </div>
                        <div className="text-[0.72rem] font-bold text-[#73798c]">54%</div>
                    </div>

                    <div className="mt-[10px] h-[3px] w-[54px] rounded-full bg-[#111111]" />
                </div>
            </article>

            <article className={`${cardShellBase} right-[42px] top-[76px] w-[232px]`}>
                <div className={`${cardBase} animate-card-burst-2 p-[13px_16px_14px]`}>
                    <div className="text-[0.95rem] font-extrabold tracking-[-0.03em]">Filter</div>

                    <div className="mt-[10px] flex min-h-[26px] items-center rounded-[9px] border border-[#adbddb] bg-white/90 px-[10px] text-[0.62rem] font-semibold text-[#afb3c0]">
                        <span className="mr-[5px] text-[0.9rem] text-[#23242a]">⌕</span>
                        <span>Show Meseles And Mark</span>
                    </div>

                    <div className="relative my-2 text-center text-[0.7rem] text-[#cacddb] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[41%] before:bg-[#dadee8] after:absolute after:right-0 after:top-1/2 after:h-px after:w-[41%] after:bg-[#dadee8]">
                        Or
                    </div>

                    <div className="text-[0.69rem] font-bold text-[#555b6b]">Tag:</div>

                    <div className="my-2 flex gap-2">
                        <span className="inline-flex min-h-[22px] items-center rounded-full bg-[#e4f0ff] px-[10px] text-[0.63rem] font-bold text-[#6194ea]">
                            Sales ×
                        </span>
                        <span className="inline-flex min-h-[22px] items-center rounded-full bg-[#f0e4ff] px-[10px] text-[0.63rem] font-bold text-[#b07fe8]">
                            Grups ×
                        </span>
                    </div>

                    <div className="min-h-[26px] rounded-[9px] border border-[#adbddb] bg-white/90" />

                    <div className="mt-2 rounded-full border border-[#e4e8f1] bg-[#f4f8ff] px-[10px] py-[6px] text-[0.59rem] font-bold text-[#76a0f4]">
                        and&nbsp;&nbsp;&nbsp;Grups : Southwest Sales Te...
                    </div>

                    <div className="mt-3 flex gap-[10px]">
                        <button
                            type="button"
                            className="rounded-[10px] bg-[#f4f1f1] px-4 py-[7px] text-[0.7rem] font-bold text-[#373942] transition-colors hover:bg-[#ece8e8]"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="rounded-[10px] bg-[#0f0f13] px-4 py-[7px] text-[0.7rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </article>

            <article className={`${cardShellBase} left-[150px] top-[255px] w-[178px]`}>
                <div className={`${cardBase} animate-card-burst-3 flex items-center gap-[10px] p-3`}>
                    <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1c1d23] text-[0.64rem] text-white">
                        ▶
                    </div>
                    <div>
                        <div className="text-[0.67rem] font-extrabold tracking-[-0.02em]">
                            Creating Landing Pag...
                        </div>
                        <div className="text-[0.61rem] font-semibold text-[#9c9fb0]">Guitar Tuner</div>
                    </div>
                    <div className="ml-auto text-[0.72rem] text-[#f8a94d]">★</div>
                </div>
            </article>

            <article className={`${cardShellBase} left-[96px] top-[350px] w-[262px]`}>
                <div className={`${cardBase} animate-card-burst-4 p-[16px_16px_14px]`}>
                    <div className="flex items-center justify-between">
                        <div className="text-[0.95rem] font-extrabold tracking-[-0.03em]">Team</div>
                        <div className="rounded-full bg-[#effcf0] px-[11px] py-1 text-[0.67rem] font-extrabold text-[#85cc91]">
                            • Connected
                        </div>
                    </div>

                    <p className="my-[11px] text-[0.81rem] leading-[1.55] text-[#a1a5b4]">
                        Sync Team Pages And Databases With Your Skillflow Workspace
                    </p>

                    <div className="flex gap-[10px]">
                        <button
                            type="button"
                            className="flex-1 rounded-[10px] bg-[#f4f1f1] px-4 py-[7px] text-[0.7rem] font-bold text-[#373942] transition-colors hover:bg-[#ece8e8]"
                        >
                            Manage
                        </button>
                        <button
                            type="button"
                            className="flex-1 rounded-[10px] bg-[#fff1f0] px-4 py-[7px] text-[0.7rem] font-bold text-[#ef8e82] transition-colors hover:bg-[#ffe7e5]"
                        >
                            Disconnect
                        </button>
                    </div>
                </div>
            </article>

            <article className={`${cardShellBase} right-[-10px] top-[382px] w-[181px]`}>
                <div className={`${cardBase} animate-card-burst-5 p-[12px_12px_13px]`}>
                    <div className="flex items-center text-[0.76rem] font-extrabold text-[#20222a]">
                        <span>Today&apos;s Tasks</span>
                        <span className="ml-[6px] inline-flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#f6e8ff] text-[0.62rem] text-[#b384e8]">
                            3
                        </span>
                        <span className="ml-auto tracking-[0.08em] text-[#50525c]">•••</span>
                    </div>

                    <div className="mt-3 flex items-center gap-[10px] rounded-xl bg-[#f4f6fc] p-[9px]">
                        <div className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#1c1d23] text-[0.7rem] text-white">
                            Ⅱ
                        </div>
                        <div>
                            <div className="text-[0.67rem] font-extrabold leading-tight tracking-[-0.02em]">
                                Color Palette Selection
                            </div>
                            <div className="text-[0.61rem] font-semibold text-[#9c9fb0]">
                                OverlyX Gamers App
                            </div>
                        </div>
                        <span className="ml-auto text-[0.72rem] text-[#f8a94d]">★</span>
                    </div>
                </div>
            </article>
        </div>
    );
};
