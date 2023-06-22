import { RadioButton2 } from '@/components/Inputs/RadioButton';
import QuestionTemplateProps from '@/page-sections/SuggestionEngine/AnswerPanel/Steps/QuestionTemplate';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

type Option = {
    label: string, value: string; active: boolean
}

interface Data {
    name: string;
    options: Option[];
}

interface SingleChoiceQuestionProps {
    node: number,
    option: Data
    questionText: string
}

const SingleChoiceQuestion = ({ node, option, questionText }: SingleChoiceQuestionProps) => {
    const ctx = useContext(Context);
    const [options, setOptions] = useState<Option[]>(option.options);
    
    interface HandlerOnChangeProps {
        index: number;
        value: string;
    }
    
    const handleOnChange = ({ index, value }: HandlerOnChangeProps) => {
        setOptions((prevState) => {
            return prevState.map((state, i) => {
                return {
                    ...state,
                    active: index === i
                };
            });
        });
        
        ctx.addQuestionToQueue({
            question: questionText,
            answer: value,
            questionIndex: `${node}`
        });
    };
    
    return (
        <>
            <div className="grid w-full content-start gap-6">
                {options.map((currentOption, index) => (
                    <RadioButton2
                        key={index}
                        id={`${option.name}-${index}`}
                        name={option.name}
                        value={currentOption.label}
                        checked={currentOption.active}
                        label={currentOption.label}
                        onChange={(e) => handleOnChange({
                            index,
                            value: e.target.value
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

export default SingleChoiceQuestion;
