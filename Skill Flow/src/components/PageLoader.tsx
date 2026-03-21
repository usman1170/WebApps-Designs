import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../lib/ThemeProvider';

interface PageLoaderProps {
    visible: boolean;
}

export const PageLoader = ({ visible }: PageLoaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const isFirstRun = useRef(true);
    
    // Get the current resolved theme
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const container = containerRef.current;
        const bg = bgRef.current;
        const logo = logoRef.current;
        if (!container || !bg || !logo) return;

        if (visible) {
            // "Slide in" from bottom (curtain effect covering screen)
            gsap.set(container, { display: 'flex' });

            if (isFirstRun.current) {
                // Initial load, no bottom swoop - just appear
                gsap.set(bg, { yPercent: 0, borderRadius: '0px' });
                gsap.set(logo, { scale: 1, opacity: 1, y: 0 });
                isFirstRun.current = false;
            } else {
                // Navigate load, swoop up from bottom and become a full screen block
                gsap.fromTo(
                    bg,
                    { yPercent: 100, borderTopLeftRadius: '40vh', borderTopRightRadius: '40vh' },
                    { yPercent: 0, borderTopLeftRadius: '0px', borderTopRightRadius: '0px', duration: 0.65, ease: 'power4.inOut' }
                );

                // Quick bounce logo inside
                gsap.fromTo(
                    logo,
                    { opacity: 0, scale: 0.3, y: 60 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)', delay: 0.25 }
                );
            }
        } else {
            // "Slide out" to top (curtain lifting to reveal new page)
            if (!isFirstRun.current) {
                gsap.to(logo, { opacity: 0, scale: 0.8, y: -40, duration: 0.3, ease: 'power3.in' });
            }

            gsap.to(bg, {
                yPercent: -100,
                borderBottomLeftRadius: '40vh',
                borderBottomRightRadius: '40vh',
                duration: 0.7,
                ease: 'power4.inOut',
                delay: isFirstRun.current ? 0.4 : 0.15,
                onComplete: () => {
                    gsap.set(container, { display: 'none' });
                    gsap.set(bg, { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' });
                }
            });

            isFirstRun.current = false;
        }
    }, [visible]);

    return (
        <div
            ref={containerRef}
            style={{ display: 'none' }}
            className="pointer-events-none fixed inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* The shifting background curtain - dynamic color */}
            <div
                ref={bgRef}
                className={`absolute inset-0 will-change-transform flex items-center justify-center ${
                    isDark 
                        ? 'bg-[#0a0a0c] shadow-[0_20px_100px_rgba(0,0,0,0.8)]' 
                        : 'bg-[#f4f7ff] shadow-[0_20px_100px_rgba(180,200,240,0.4)]'
                }`}
            >
                {/* Visual texture for the curtain */}
                {isDark ? (
                    <>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,111,255,0.06),transparent)]" />
                        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(74,141,255,0.08)] blur-[80px]" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(235,240,255,0.2))]" />
                        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[80px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,140,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px] opacity-70" />
                    </>
                )}

                {/* The logo in the middle of the transition */}
                <div ref={logoRef} className="relative z-10 flex flex-col items-center gap-5">
                    <div className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] ${
                        isDark 
                            ? 'shadow-[0_18px_40px_rgba(47,111,255,0.35)]' 
                            : 'shadow-[0_20px_45px_rgba(47,111,255,0.25)]'
                    }`}>
                        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                            <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.18" />
                            <path d="M12 20C12 15.58 15.58 12 20 12C22.48 12 24.72 13.04 26.3 14.72L20 20V28C15.58 28 12 24.42 12 20Z" fill="white" />
                            <path d="M20 12C24.42 12 28 15.58 28 20C28 22.48 26.96 24.72 25.28 26.3L20 20H12C12 15.58 15.58 12 20 12Z" fill="white" fillOpacity="0.55" />
                        </svg>
                        {/* Glow ring */}
                        <div className={`absolute inset-[-6px] rounded-[28px] border ${
                            isDark ? 'border-[rgba(74,141,255,0.35)]' : 'border-[rgba(74,141,255,0.2)]'
                        }`} />
                    </div>
                </div>
            </div>
        </div>
    );
};
