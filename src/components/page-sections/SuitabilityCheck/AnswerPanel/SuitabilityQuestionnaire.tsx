import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai';
import styles from './styles/PanelReveal.module.scss';

/**
 * Renders the Suitability Questionnaire component.
 *
 * The Suitability Questionnaire component displays a questionnaire interface with information about completion time and age group selection. It is used to gather user input regarding their age group.
 *
 * @returns {JSX.Element} The rendered Suitability Questionnaire component.
 */
const SuitabilityQuestionnaire = (): JSX.Element => {
    return (
        <div className={`${styles.styles} grid h-full w-full place-items-center`}>
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="initial-step flex items-center justify-center gap-3 text-[#CDCFD0]">
                    <AiOutlineClockCircle className="h-8 w-8 fill-white" />
                    Completion time : <strong className="text-[1.6rem] leading-8 text-[#FFD400]">2min</strong>
                </span>
                <span className="font-latoBold text-white md:text-[3rem] md:leading-[3.6rem]">
                    Suitability Questionnaire
                </span>

                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-12">
                    <AiOutlineArrowLeft className="h-8 w-8 fill-white" />
                    <span className="font-latoBold text-white">Your age group</span>
                    <span className="col-span-full text-white">Please select your age group to start</span>
                </div>
            </div>
        </div>
    );
};

export default SuitabilityQuestionnaire;
