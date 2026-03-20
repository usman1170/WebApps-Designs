import { CustomersChallenges } from '../features/customers/CustomersChallenges';
import { CustomersHero } from '../features/customers/CustomersHero';
import { CustomersImpact } from '../features/customers/CustomersImpact';
import { CustomersTestimonials } from '../features/customers/CustomersTestimonials';
import { CustomersTransformation } from '../features/customers/CustomersTransformation';
import { HeroHeader } from '../components/HeroHeader';
import { SiteFooter } from '../components/SiteFooter';
import { useEffect } from 'react';

export const CustomersPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#fafbfe] text-[#12131a]">
            {/* Global background elements */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-x-0 -top-[20%] h-[100rem] bg-[radial-gradient(ellipse_at_top,rgba(238,245,255,0.8),transparent_70%)]" />
                <div className="absolute left-[-10%] top-[10%] h-[40rem] w-[40rem] animate-ambient-float rounded-full bg-[#bfe3ff]/30 blur-[120px]" />
                <div className="absolute right-[-5%] top-[60%] h-[35rem] w-[35rem] animate-ambient-float-delayed rounded-full bg-[#f0ecff]/60 blur-[120px]" />
            </div>

            <section className="relative z-10 px-4 pt-7 sm:px-5 lg:px-4">
                <div className="relative mx-auto max-w-[1540px]">
                    <HeroHeader activePath="/customers" />
                </div>
            </section>

            <div className="relative z-10 w-full overflow-hidden">
                <CustomersHero />
                <CustomersChallenges />
                <CustomersTransformation />
                <CustomersImpact />
                <CustomersTestimonials />
            </div>

            <SiteFooter />
        </main>
    );
};
