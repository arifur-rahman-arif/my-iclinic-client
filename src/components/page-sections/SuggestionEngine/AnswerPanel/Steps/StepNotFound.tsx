const StepNotFound = (): JSX.Element => {
    return (
        <div className="grid h-full w-full place-items-center">
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="md:leading-16 font-latoBold text-white md:text-[3.6rem]">
                    Suitability Questionnaire
                </span>

                <div className="grid max-w-[57.2rem] gap-6">
                    <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">Sorry !</span>

                    <p className="text-[1.6rem] text-white">
                        Sorry, our eye specialists do not advise anybody under the age of 21 to have laser eye
                        treatment. This is because our eyes are still changing until we are 21, after then your
                        prescription is stable for treatment for long term vision correction.
                        <br />
                        <br />
                        If you do receive laser treatment before your prescription is stable, you would need glasses a
                        few years after which can be worse for your eye health. We will be very happy to review your
                        prescription and suitability for our laser treatment options once you are 21 years of age.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepNotFound;
