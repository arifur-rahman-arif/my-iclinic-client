const Question1 = (): JSX.Element => {
    return (
        <div className="grid h-full w-full place-items-center">
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="md:leading-16 font-latoBold text-white md:text-[3.6rem]">
                    Suitability Questionnaire
                </span>

                <div className="grid max-w-[57.2rem] gap-12">
                    <div className="grid grid-cols-[auto_1fr] gap-2">
                        <span className="leading-16 font-latoExtraBold text-[4rem] text-[#4E6C7C] md:text-[4.8rem] md:leading-[4.8rem]">
                            Q1
                        </span>
                        <span className="h-[0.1rem] max-w-[21.4rem] -translate-y-2 self-end bg-[#4E6C7C]"></span>
                    </div>

                    <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        Have you had laser eye surgery before?
                    </span>
                </div>

                <div className="flex flex-wrap items-center justify-start gap-6">
                    <button className="rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                        Yes
                    </button>

                    <button className="rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question1;
