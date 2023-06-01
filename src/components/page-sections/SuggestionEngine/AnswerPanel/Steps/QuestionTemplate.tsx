import { Context } from '@/page-sections/SuggestionEngine/Context';
import Image from 'next/image';
import SingleChoiceQuestions from './SingleChoiceQuestions';
import { memo, useContext, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from '../styles/PanelReveal.module.scss';

interface QuestionTemplateProps {
    questionNumber: number;
    questionText: string;
    showBackButton?: boolean;
    includeAnswerButton?: boolean;
    includeEyeButton?: boolean;
    includeRadioBoxes?: boolean;
    node: number;
}

const QuestionTemplate = memo(
    ({
        questionNumber,
        questionText,
        showBackButton,
        includeAnswerButton = true,
        includeEyeButton,
        includeRadioBoxes,
        node
    }: QuestionTemplateProps): JSX.Element => {
        const ctx = useContext(Context);
        
        const handleClick = (type: 'yes' | 'no') => {
            
            // If ages are not selected yet
            if (!ctx.ageSelected) {
                /**
                 * Disable all the ages except the current one
                 * Updates the ages in the context by setting the 'disabled' property based on the 'active' property of each age.
                 * The update is performed using the functional setState pattern, where the previous state is passed as an argument to the updater function.
                 *
                 * @param {function} prevState - A function that receives the previous state as an argument and returns the updated state.
                 * @returns {Array} - An array of updated age objects, where the 'disabled' property is set to the opposite value of 'active'.
                 */
                ctx.setAges((prevState) => {
                    return prevState.map((state, index) => {
                        return {
                            ...state,
                            disabled: !state.active
                        };
                    });
                });
                
                ctx.setAgeSelected(true);
            }
            
            ctx.setCompletedStep(ctx.completedStep += 1);
            
            let nextNode;
            
            if (type === 'yes') {
                nextNode = ctx.routes[node].yesNode;
            } else {
                nextNode = ctx.routes[node].noNode;
            }
            
            if (!nextNode) return;
            
            ctx.setPreviousNode(node, nextNode);
            
            ctx.navigateToStep(nextNode);
            
            ctx.addQuestionToQueue({
                question: questionText,
                answer: type,
                questionIndex: `${node}`
            });
        };
        
        const handleEyeButtonClick = (type: 'Left Eye' | 'Right Eye') => {
            ctx.addQuestionToQueue({
                question: questionText,
                answer: type,
                questionIndex: `${node}`
            });
            
            ctx.setCompletedStep(ctx.completedStep += 1);
            
            const nextNode = ctx.routes[node].nextNode;
            
            if (!nextNode) return;
            
            ctx.setPreviousNode(node, nextNode);
            
            ctx.navigateToStep(nextNode);
        };
        
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
                    
                    {includeRadioBoxes ? <SingleChoiceQuestions node={node}/> : null}
                    
                    {includeAnswerButton && (
                        <div className="flex flex-wrap items-center justify-start gap-6">
                            <button
                                onClick={() => handleClick('yes')}
                                className="rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                                Yes
                            </button>
                            <button
                                onClick={() => handleClick('no')}
                                className="rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent">
                                No
                            </button>
                        </div>
                    )}
                    
                    {includeEyeButton && (
                        <div className="flex flex-wrap items-center justify-start gap-6">
                            <button
                                className="rounded-primary border-2 border-heading2 bg-heading2 py-5 pl-20 pr-8 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white flex items-center justify-center md:gap-16"
                                onClick={() => handleEyeButtonClick('Left Eye')}
                            >
                                Left Eye
                                
                                <Image src="/images/icons/icon-half-left-eye.svg" alt="" width={54} height={45}/>
                            </button>
                            
                            <button
                                className="rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white flex items-center justify-center md:gap-4"
                                onClick={() => handleEyeButtonClick('Right Eye')}
                            >
                                Right Eye
                                
                                <Image src="/images/icons/icon-half-right-eye.svg" alt="" width={54} height={45}/>
                            </button>
                        </div>
                    )}
                    
                    {showBackButton && (
                        <button
                            className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                            onClick={() => {
                                ctx.setCompletedStep(ctx.completedStep -= 1);
                                ctx.navigateToStep(ctx.routes[node].prevNode as number);
                            }}
                        >
                            <BiArrowBack className="h-10 w-10 fill-[#C5CED2]"/>
                            Previous Question
                        </button>
                    )}
                </div>
            </div>
        );
    }
);

export default QuestionTemplate;
