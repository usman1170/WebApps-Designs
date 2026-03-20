export const CustomersHero = () => {
    return (
        <section className="relative px-5 pt-20 pb-16 text-center lg:pt-28">
            <div className="mx-auto flex flex-col items-center">
                <div className="mb-6 flex items-center gap-2 rounded-full bg-[#ffede6] px-4 py-1.5 text-[0.95rem] font-semibold text-[#f95738]">
                    <span>📢</span>
                    <span>Customers</span>
                </div>
                <h1 className="max-w-[800px] text-[3.2rem] font-extrabold leading-[1.05] tracking-tight text-[#12131a] sm:text-[4rem] lg:text-[4.5rem]">
                    Trusted by Teams Everywhere
                </h1>
                <p className="mt-8 max-w-[700px] text-[1.1rem] text-[#6b7280] leading-relaxed">
                    Skillflow empowers teams worldwide to streamline training, boost
                    engagement, and achieve results faster.
                </p>

                <div className="relative mt-16 w-full max-w-[1240px] overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000" 
                        alt="Customers meeting" 
                        className="h-[400px] w-full object-cover lg:h-[650px] brightness-95"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-white/60 bg-white/20 pl-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:border-white/80">
                            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
