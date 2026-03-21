import { useEffect, useState } from 'react';

import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { CustomersPage } from './pages/CustomersPage';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { PageLoader } from './components/PageLoader';
import { SiteRouterProvider, SitePath, useSiteRouter } from './lib/site-router';

const AppContent = () => {
    const { pathname } = useSiteRouter();
    const [displayPath, setDisplayPath] = useState<SitePath>(pathname);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (pathname === displayPath) return;

        // Start transition curtain
        setLoading(true);

        // Swap the page *while* the curtain covers the screen
        const swapTimer = window.setTimeout(() => {
            setDisplayPath(pathname);
        }, 500);

        // Tell the loader to slide away and reveal new page
        const hideTimer = window.setTimeout(() => {
            setLoading(false);
        }, 550);

        return () => {
            window.clearTimeout(swapTimer);
            window.clearTimeout(hideTimer);
        };
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    let page = <HomePage />;
    if (displayPath === '/about') page = <AboutPage />;
    if (displayPath === '/pricing') page = <PricingPage />;
    if (displayPath === '/blog') page = <BlogPage />;
    if (displayPath === '/customers') page = <CustomersPage />;

    return (
        <div className="relative min-h-screen w-full bg-[#f4f7ff] dark:bg-[#0a0a0c] overflow-hidden">
            <PageLoader visible={loading} />
            <div
                className="origin-top transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
                style={{
                    transform: loading ? 'scale(0.96) translateY(12px)' : 'scale(1) translateY(0)',
                    opacity: loading ? 0.4 : 1,
                    filter: loading ? 'blur(4px)' : 'none',
                    borderRadius: loading ? '24px' : '0px',
                    overflow: 'hidden',
                }}
            >
                <div className="bg-white dark:bg-[#0a0a0c] min-h-screen w-full text-[#111218] dark:text-white transition-colors duration-500">
                    {page}
                </div>
            </div>
        </div>
    );
};

const App = () => (
    <SiteRouterProvider>
        <AppContent />
    </SiteRouterProvider>
);

export default App;
