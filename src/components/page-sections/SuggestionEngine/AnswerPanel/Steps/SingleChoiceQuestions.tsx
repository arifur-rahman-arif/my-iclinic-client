import RadioButton2 from '@/components/Inputs/RadioButton/RadioButton2';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface SingleChoiceQuestionsProps {
    node: number;
}

const SingleChoiceQuestions = ({ node }: SingleChoiceQuestionsProps) => {
    const ctx = useContext(Context);
    
    console.log(node);
    
    interface HandlerOnChangeProps {
        index: number;
        value: string;
        targetNode: number;
    }
    
    const handleOnChange = ({ index, value, targetNode }: HandlerOnChangeProps) => {
        ctx.setOptions((prevState) => {
            return prevState.map((state, i) => {
                return {
                    ...state,
                    active: index === i
                };
            });
        });
        
        ctx.setRoutes((prevState) => {
            prevState[node].nextNode = targetNode;
            return prevState;
        });
        
        ctx.addQuestionToQueue({
            question: 'Do any of the following apply to you',
            answer: value,
            questionIndex: `${node}`
        });
    };
    
    return (
        <>
            <div className="grid w-full content-start gap-6">
                {ctx.options.map((option, index) => (
                    <RadioButton2
                        key={index}
                        id={`options-${index}`}
                        name="options"
                        value={option.label}
                        checked={option.active}
                        label={option.label}
                        onChange={(e) => handleOnChange({
                            index,
                            value: e.target.value,
                            targetNode: option.targetNode
                        })}
                    />
                ))}
            </div>
            
            <div className="flex items-center justify-between w-full gap-12">
                <button
                    className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                    onClick={() => {
                        ctx.navigateToStep(ctx.routes[node].prevNode as number);
                        ctx.setCompletedStep(ctx.completedStep += 1);
                    }}
                >
                    <BiArrowBack className="h-10 w-10 fill-[#C5CED2]"/>
                    Previous Question
                </button>
                
                <button
                    className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent"
                    onClick={() => {
                        ctx.setCompletedStep(ctx.completedStep -= 1);
                        ctx.navigateToStep(ctx.routes[node].nextNode as number);
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default SingleChoiceQuestions;
