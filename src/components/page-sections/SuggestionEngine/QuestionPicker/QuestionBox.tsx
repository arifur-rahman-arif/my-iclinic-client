import { Context } from '@/page-sections/SuggestionEngine/Context';
import { memo, useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

interface QuestionBoxProps {
    age: string;
    index: number;
}

const QuestionBox = memo(({ age, index }: QuestionBoxProps): JSX.Element => {
    const ctx = useContext(Context);
    
    return (
        <button
            className={`flex w-full max-w-[22.1rem] transition-all duration-500 cursor-pointer items-center justify-center gap-6 rounded-primary border-2 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white ${
                ctx.ages[index].disabled ? 'border-brand opacity-50' : 'border-white'
            } ${ctx.ages[index].active ? '!border-brand bg-brand' : 'bg-transparent'}`}
            onClick={() => {
                ctx.setActiveAge(index);
                ctx.setAgeSelected(true);
                ctx.setShowUnderAgeStep(index === 0);
                ctx.addQuestionToQueue('What is your age?', age);
                ctx.setShowSurgeryQuestion(age !== 'Under 20');
                
                if (age === 'Under 20') {
                    ctx.setProgress(100);
                } else {
                    ctx.setProgress(20);
                }
            }}
        >
            {ctx.ages[index].active && <AiOutlineCheck className="h-9 w-9 fill-white"/>}
            {age}
        </button>
    );
});

export default QuestionBox;
