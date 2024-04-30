import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { getElementTopPosition } from '@/utils/miscellaneous';
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
            className={twMerge(
                `flex w-full max-w-[22.1rem] cursor-pointer items-center justify-center gap-6 rounded-[0.5rem] border-2 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500`,
                `${
                    ctx.ages[index].disabled && !ctx.ages[index].active
                        ? 'cursor-not-allowed border-brand opacity-50'
                        : 'border-white'
                } ${ctx.ages[index].active ? '!border-brand bg-brand' : 'bg-transparent'}`
            )}
            onClick={() => {
                if (ctx.ageSelected) ctx.resetAllRouteSteps();

                let nextActiveIndex;

                if (age === 'Under 20') {
                    nextActiveIndex = ctx.routes[0].yesNode;
                    ctx.setQuestions(null);
                    ctx.setProgress(100);
                } else {
                    nextActiveIndex = ctx.routes[0].noNode;
                    ctx.addQuestionToQueue({
                        question: 'What is your age',
                        answer: age,
                        questionIndex: '0'
                    });
                }

                ctx.setActiveAge(index);
                ctx.navigateToStep(nextActiveIndex as number);

                const windowSize = window.innerWidth;

                if (windowSize < 769) {
                    window.scrollTo(
                        0,
                        getElementTopPosition(document.querySelector('#answer-panel') as HTMLElement) - 150
                    );
                }
            }}
        >
            {ctx.ages[index].active && <AiOutlineCheck className="h-9 w-9 fill-white" />}
            {age}
        </button>
    );
});

export default QuestionBox;
