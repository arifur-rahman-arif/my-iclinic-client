import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai';
import styles from './styles/PanelReveal.module.scss';

const SuitabilityQuestionnaire = (): JSX.Element => {
    return (
        <div className={`${styles.styles} grid h-full w-full place-items-center`}>
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="flex items-center justify-center gap-3 text-[#CDCFD0]">
                    <AiOutlineClockCircle className="h-8 w-8 fill-white"/>
                    Completion time : <strong className="text-white">2min</strong>
                </span>
                <span className="md:leading-16 font-latoBold text-white md:text-[3.6rem]">
                    Suitability Questionnaire
                </span>
                
                <div className="grid grid-cols-[auto_1fr] items-center gap-y-12 gap-x-8">
                    <AiOutlineArrowLeft className="h-12 w-12 fill-white"/>
                    <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">Your age group</span>
                    <span className="col-span-full text-white">Please select your age group to start</span>
                </div>
            </div>
        </div>
    );
};

export default SuitabilityQuestionnaire;
