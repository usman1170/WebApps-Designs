import { useEffect, useState } from 'react';

import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { CustomersPage } from './pages/CustomersPage';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { SiteRouterProvider, SitePath, useSiteRouter } from './lib/site-router';

const AppContent = () => {
    const { pathname } = useSiteRouter();
    const [displayPath, setDisplayPath] = useState<SitePath>(pathname);
    const [transitionState, setTransitionState] = useState<'idle' | 'out' | 'in'>('idle');

    useEffect(() => {
        if (pathname === displayPath) {
            return;
        }

        setTransitionState('out');

        const swapTimer = window.setTimeout(() => {
            setDisplayPath(pathname);
            setTransitionState('in');
        }, 180);

        const settleTimer = window.setTimeout(() => {
            setTransitionState('idle');
        }, 560);

        return () => {
            window.clearTimeout(swapTimer);
            window.clearTimeout(settleTimer);
        };
    }, [displayPath, pathname]);

    let page = <HomePage />;

    if (displayPath === '/about') {
        page = <AboutPage />;
    }

    if (displayPath === '/pricing') {
        page = <PricingPage />;
    }

    if (displayPath === '/blog') {
        page = <BlogPage />;
    }

    if (displayPath === '/customers') {
        page = <CustomersPage />;
    }

    return (
        <div
            className={`page-transition-shell ${transitionState === 'out'
                ? 'page-transition-out'
                : transitionState === 'in'
                    ? 'page-transition-in'
                    : ''
                }`}
        >
            {page}
        </div>
    );
};

const App = () => {
    return (
        <SiteRouterProvider>
            <AppContent />
        </SiteRouterProvider>
    );
};

export default App;
