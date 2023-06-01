import { Context } from '@/page-sections/SuggestionEngine/Context';
import { memo, useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

interface QuestionBoxProps {
    age: string;
    index: number;
}

const QuestionBox = memo(({ age, index }: QuestionBoxProps): JSX.Element => {
    const ctx = useContext(Context);
    
    return (
        <button
            className={twMerge(`flex w-full max-w-[22.1rem] transition-all duration-500 cursor-pointer items-center justify-center gap-6 rounded-primary border-2 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white`, `${
                ctx.ages[index].disabled && !ctx.ages[index].active ? 'border-brand opacity-50 cursor-not-allowed' : 'border-white'
            } ${ctx.ages[index].active ? '!border-brand bg-brand' : 'bg-transparent'}`)}
            onClick={() => {
                if (ctx.ageSelected) return;
                
                let nextActiveIndex;
                
                if (age === 'Under 20') {
                    nextActiveIndex = ctx.routes[0].yesNode;
                    ctx.setQuestions(null);
                    ctx.setProgress(100);
                } else {
                    ctx.setCompletedStep(1);
                    nextActiveIndex = ctx.routes[0].noNode;
                    ctx.addQuestionToQueue({
                        question: 'What is your age?',
                        answer: age,
                        questionIndex: '0'
                    });
                }
                
                ctx.setActiveAge(index);
                ctx.navigateToStep(nextActiveIndex as number);
            }}
        >
            {ctx.ages[index].active && <AiOutlineCheck className="h-9 w-9 fill-white"/>}
            {age}
        </button>
    );
});

export default QuestionBox;
