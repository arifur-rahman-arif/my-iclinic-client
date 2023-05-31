import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext } from 'react';
import QuestionBox from './QuestionBox';
import ProgressMenu from './ProgressMenu';

/**
 * Question picker component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionPicker = () => {
    const ctx = useContext(Context);
    
    return (
        <div className="grid place-items-center gap-12 bg-heading2 p-12 md:p-24 md:px-24">
            <ProgressMenu percentage={ctx.progress}/>
            
            <span
                className="text font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                What is your age?
            </span>
            
            <div className="grid w-full gap-8">
                {ctx.ages?.map((age, index) => <QuestionBox key={index} {...{ index, age: age.age }} />)}
            </div>
        </div>
    );
};

export default QuestionPicker;
