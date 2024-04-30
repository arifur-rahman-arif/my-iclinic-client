import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { useContext } from 'react';
import styles from '../styles/PanelReveal.module.scss';

interface UnderAgeStepProps {
    node: number;
}

/**
 * Renders the UnderAgeStep component.
 *
 * The UnderAgeStep component displays a message for individuals who are under the age of 21 and are not suitable candidates for laser eye treatment. It provides information about why individuals under 21 should not undergo the treatment and encourages them to wait until they reach the age of 21 to have their prescription stabilized for long-term vision correction.
 *
 * @returns {JSX.Element} The rendered UnderAgeStep component.
 */
const UnderAgeStep = ({ node }: UnderAgeStepProps): JSX.Element => {
    const ctx = useContext(Context);

    return (
        <div className={`${styles.styles} grid h-full w-full place-items-center px-8`}>
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="md:leading-16 font-latoBold text-white md:text-[3rem] md:leading-[3.6rem]">
                    Suitability Questionnaire
                </span>

                <div className="grid max-w-[57.2rem] gap-6">
                    <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">Sorry !</span>

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

                <button
                    className="justify-self-end rounded-[0.5rem] border border-[#0099FF] bg-[#0099FF] px-16 py-4 font-mulishBold text-white transition-all duration-500 hover:bg-transparent hover:text-[#0099FF] md:px-20 md:py-5 md:text-[1.8rem] md:leading-[2.8rem]"
                    onClick={() => {
                        // ctx.setCompletedStep((ctx.completedStep += 1));
                        ctx.navigateToStep(ctx.routes[node].nextNode as number);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UnderAgeStep;
