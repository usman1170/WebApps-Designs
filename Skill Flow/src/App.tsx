import { useEffect, useState } from 'react';

import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';
import { HomePage } from './components/HomePage';
import { PricingPage } from './components/PricingPage';
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
