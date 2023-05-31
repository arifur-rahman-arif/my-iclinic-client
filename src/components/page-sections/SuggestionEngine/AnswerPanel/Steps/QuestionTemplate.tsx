import Image from 'next/image';
import SingleChoiceQuestions from './SingleChoiceQuestions';
import { memo } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from '../styles/PanelReveal.module.scss';

interface QuestionTemplateProps {
    questionNumber: number;
    questionText: string;
    showBackButton?: boolean;
    includeAnswerButton?: boolean;
    showNextButton?: boolean;
    includeEyeButton?: boolean;
    includeRadioBoxes?: boolean;
}

const QuestionTemplate = memo(
    ({
        questionNumber,
        questionText,
        showBackButton,
        includeAnswerButton = true,
        showNextButton,
        includeEyeButton,
        includeRadioBoxes
    }: QuestionTemplateProps): JSX.Element => {
        return (
            <div
                className={`${styles.styles} grid h-full w-full place-items-center px-12 md:px-24 xl:px-40 py-12 md:py-24`}>
                <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                    <span className="md:leading-16 font-latoBold text-white md:text-[3.6rem]">
                        Suitability Questionnaire
                    </span>
                    
                    <div className="grid max-w-[57.2rem] gap-12">
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                            <span
                                className="leading-16 font-latoExtraBold text-[4rem] text-[#4E6C7C] md:text-[4.8rem] md:leading-[4.8rem]">
                                Q{questionNumber}
                            </span>
                            <span className="h-[0.1rem] max-w-[21.4rem] -translate-y-2 self-end bg-[#4E6C7C]"></span>
                        </div>
                        
                        <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">{questionText}</span>
                    </div>
                    
                    {includeRadioBoxes ? <SingleChoiceQuestions/> : null}
                    
                    <div className="grid w-full gap-12">
                        {includeAnswerButton && (
                            <div className="flex flex-wrap items-center justify-start gap-6">
                                <button
                                    className="rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                                    Yes
                                </button>
                                <button
                                    className="rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                                    No
                                </button>
                            </div>
                        )}
                        
                        {includeEyeButton && (
                            <div className="flex flex-wrap items-center justify-start gap-6">
                                <button
                                    className="rounded-primary border-2 border-heading2 bg-heading2 py-5 pl-20 pr-8 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white flex items-center justify-center md:gap-16">
                                    Left Eye
                                    
                                    <Image src="/images/icons/icon-half-left-eye.svg" alt="" width={54} height={45}/>
                                </button>
                                
                                <button
                                    className="rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white flex items-center justify-center md:gap-4">
                                    Right Eye
                                    
                                    <Image src="/images/icons/icon-half-right-eye.svg" alt="" width={54} height={45}/>
                                </button>
                            </div>
                        )}
                        
                        {showBackButton && (
                            <span
                                className="flex items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]">
                                <BiArrowBack className="h-10 w-10 fill-[#C5CED2]"/>
                                Previous Question
                            </span>
                        )}
                        
                        {showNextButton && (
                            <button
                                className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

export default QuestionTemplate;
