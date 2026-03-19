import { Brand } from './Brand';
import { SiteLink } from './SiteLink';

const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Customers' },
];

export const HeroHeader = ({ activePath = '/' }: { activePath?: '/' | '/about' | '/pricing' | '/blog' }) => {
    return (
        <header className="relative z-10 mx-auto mt-2 grid min-h-[72px] w-full max-w-[1480px] grid-cols-1 items-center gap-5 rounded-[22px] border border-white/80 bg-white/55 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:gap-8 lg:px-3 lg:py-0 lg:pl-3 lg:pr-4">
            <Brand />

            <nav
                className="flex flex-wrap items-center gap-5 text-[0.97rem] font-medium text-[#666d7f] lg:justify-center lg:gap-9"
                aria-label="Primary navigation"
            >
                {navItems.map((item) => (
                    item.to ? (
                        <SiteLink
                            key={item.label}
                            to={item.to}
                            className={`transition-colors duration-200 hover:text-[#17181f] ${
                                activePath === item.to
                                    ? 'font-bold text-[#17181f] underline decoration-[1.5px] underline-offset-[8px]'
                                    : ''
                            }`}
                        >
                            {item.label}
                        </SiteLink>
                    ) : (
                        <span
                            key={item.label}
                            className="cursor-default transition-colors duration-200 hover:text-[#17181f]"
                        >
                            {item.label}
                        </span>
                    )
                ))}
            </nav>

            <div className="flex w-full items-center gap-3 lg:w-auto">
                <button
                    type="button"
                    className="flex-1 rounded-2xl bg-[#eef4fb]/90 px-6 py-3 text-[0.95rem] font-bold text-[#1a1d26] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_26px_rgba(161,180,214,0.18)] lg:flex-none"
                >
                    Log In
                </button>
                <button
                    type="button"
                    className="flex-1 rounded-2xl bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] px-6 py-3 text-[0.95rem] font-bold text-white shadow-[0_14px_28px_rgba(47,111,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(47,111,255,0.28)] lg:flex-none"
                >
                    Get Started
                </button>
            </div>
        </header>
    );
};
