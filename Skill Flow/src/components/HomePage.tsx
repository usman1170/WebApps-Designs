import { AboutUsSection } from './AboutUsSection';
import { CoreFeaturesSection } from './CoreFeaturesSection';
import { ExposeWeaknessSection } from './ExposeWeaknessSection';
import { FinalCtaSection } from './FinalCtaSection';
import { HeroCopy } from './HeroCopy';
import { HeroHeader } from './HeroHeader';
import { HeroVisual } from './HeroVisual';
import { LogoRow } from './LogoRow';
import { SiteFooter } from './SiteFooter';
import { SpotSolveSection } from './SpotSolveSection';

export const HomePage = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#12131a]">
            <section className="relative overflow-hidden px-4 pb-16 pt-7 sm:px-5 lg:px-4">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#dff1ff_0%,#eef4fd_24%,#f6f5fb_62%,#f7f8fc_100%)]" />
                    <div className="absolute left-[-12%] top-[0%] h-[38rem] w-[38rem] animate-ambient-float rounded-full bg-[#bfe3ff]/88 blur-[105px]" />
                    <div className="absolute right-[-7%] top-[-4%] h-[34rem] w-[34rem] animate-ambient-float-delayed rounded-full bg-[#c9ecff]/82 blur-[105px]" />
                    <div className="absolute left-[2%] top-[46%] h-[34rem] w-[26rem] animate-ambient-orbit rounded-full bg-[#ffb8a8]/70 blur-[108px]" />
                    <div className="absolute right-[10%] top-[10%] h-[28rem] w-[32rem] animate-ambient-float rounded-full bg-[#9fe2ff]/44 blur-[112px]" />
                    <div className="absolute inset-x-0 top-[8%] h-[28rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.20)_50%,transparent_78%)]" />
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
