import { AboutUsSection } from '../features/home/AboutUsSection';
import { CoreFeaturesSection } from '../features/home/CoreFeaturesSection';
import { ExposeWeaknessSection } from '../features/home/ExposeWeaknessSection';
import { FinalCtaSection } from '../features/home/FinalCtaSection';
import { HeroCopy } from '../features/home/HeroCopy';
import { HeroHeader } from '../components/HeroHeader';
import { HeroVisual } from '../features/home/HeroVisual';
import { LogoRow } from '../features/home/LogoRow';
import { SiteFooter } from '../components/SiteFooter';
import { SpotSolveSection } from '../features/home/SpotSolveSection';

export const HomePage = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#12131a]">
            <section className="relative overflow-hidden px-4 pb-16 pt-7 sm:px-5 lg:px-4">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Base off-white/blue solid gradient to anchor */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#eef5ff_0%,#f5f8ff_50%,#fcfdff_100%)]" />

                    {/* Top Left Sky Blue Glow */}
                    <div className="absolute -left-[10%] -top-[10%] h-[45.45rem] w-[45.45rem] animate-ambient-float rounded-full bg-[#6db3ff]/45 blur-[130px]" />

                    {/* Top Right Purple Glow */}
                    <div className="absolute -right-[5%] -top-[15%] h-[46rem] w-[48rem] animate-ambient-float-delayed rounded-full bg-[#d09dff]/35 blur-[130px]" />

                    {/* Middle Cyan Glow spanning across the right area */}
                    <div className="absolute right-[5%] top-[10%] h-[40rem] w-[45rem] animate-ambient-float rounded-full bg-[#8deaea]/35 blur-[140px]" />

                    {/* Bottom Left Vibrant Peach/Coral Glow */}
                    <div className="absolute -left-[12%] top-[35%] h-[55rem] w-[55rem] animate-ambient-orbit rounded-full bg-[#ff7a59]/60 blur-[140px]" />

                    {/* Central white burst to keep text ultra readable */}
                    <div className="absolute left-[5%] top-[10%] h-[40rem] w-[60rem] rounded-full bg-white opacity-60 blur-[120px]" />
                </div>

                <div className="relative mx-auto max-w-[1540px]">
                    <HeroHeader activePath="/" />

                    <div className="relative mt-6 overflow-hidden bg-transparent px-3 pb-28 pt-6 sm:px-4 lg:min-h-[810px] lg:px-6 lg:pb-32 lg:pt-10">
                        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                            <HeroCopy />
                            <HeroVisual />
                        </div>

                        <LogoRow />
                    </div>
                </div>
            </section>

            <CoreFeaturesSection />
            <SpotSolveSection />
            <AboutUsSection />
            <ExposeWeaknessSection />
            <FinalCtaSection />
            <SiteFooter />
        </main>
    );
};
