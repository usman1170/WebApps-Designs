export const CustomersTestimonials = () => {
    return (
        <section className="relative px-5 pb-24 pt-16 lg:pb-32 lg:pt-24 text-center">
            <h2 className="mb-20 text-[2.8rem] font-extrabold leading-[1.05] tracking-tight text-[#12131a] md:text-[3.5rem] lg:text-[4rem]">
                Hear From Our<br />Happy Customers
            </h2>

            <div className="mx-auto max-w-[1140px] grid items-center gap-16 text-left lg:grid-cols-[1fr_1.1fr] lg:gap-24">
                <div className="relative flex justify-center pb-8 lg:pb-0">
                    <div className="absolute -left-10 top-16 text-[8rem] text-blue-100/50 font-serif leading-none select-none">"</div>
                    <div className="absolute -right-6 bottom-4 text-[8rem] text-blue-100/50 font-serif leading-none select-none">"</div>
                    
                    <div className="grid grid-cols-3 grid-rows-4 gap-3 md:gap-4 relative w-full max-w-[380px] h-[480px]">
                        <div className="col-start-1 row-start-1 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-2 row-start-1 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-3 row-start-1 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        
                        <div className="col-start-1 row-start-2 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-2 col-span-2 row-start-2 row-span-2 overflow-hidden rounded-[2rem] shadow-xl ring-8 ring-white z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=600" 
                                alt="Julian Benegas" 
                                className="h-full w-full object-cover bg-blue-200"
                            />
                        </div>
                        
                        <div className="col-start-1 row-start-3 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-1 row-start-4 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-2 row-start-4 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                        <div className="col-start-3 row-start-4 rounded-3xl bg-white shadow-sm border border-gray-100/50 bg-gradient-to-br from-gray-50 to-white"></div>
                    </div>
                </div>

                <div className="relative z-10 pl-4 lg:pl-0">
                    <p className="relative z-10 text-[1.4rem] font-medium leading-[1.65] text-[#3a3b47] lg:text-[1.65rem]">
                        “Empowering businesses with intelligent automation to save time,
                        scale faster, and make smarter decisions.”
                    </p>
                    <p className="mt-8 text-[1.1rem] text-[#8b8f9f]">
                        Julian Benegas, BaseHub
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12131a] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f5ff] text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
