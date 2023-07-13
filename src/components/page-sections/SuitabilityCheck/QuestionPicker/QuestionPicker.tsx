import Tooltip from '@/components/Tooltip/Tooltip';
import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { useContext } from 'react';
import QuestionBox from './QuestionBox';

/**
 * Question picker component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionPicker = () => {
    const ctx = useContext(Context);

    return (
        <div className="grid place-items-center content-start gap-12 bg-heading2 p-12 md:gap-24 md:p-24 md:px-24">
            {/* <ProgressMenu percentage={ctx.progress} /> */}
            <Tooltip
                text={
                    <span className="whitespace-nowrap py-2 px-6 font-mulishBold text-[1.4rem] text-white line-clamp-1">
                        Reset all steps & start again
                    </span>
                }
                className="!rounded-[1rem] border-b border-white !bg-heading2"
                arrowClassName="border-b-white"
            >
                <button
                    className="group/reset flex w-full cursor-pointer items-center justify-center gap-6 rounded-primary border-2 px-8 py-4 font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-white transition-all duration-500 hover:border-brand hover:bg-brand"
                    onClick={ctx.resetAllRouteSteps}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        className="h-8 w-8 transition-all duration-500 group-hover/reset:rotate-180"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
                        ></path>
                    </svg>
                    Reset steps
                </button>
            </Tooltip>

            <span className="text font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                What is your age?
            </span>

            <div className="grid w-full place-items-center gap-8">
                {ctx.ages?.map((age, index) => (
                    <QuestionBox key={index} {...{ index, age: age.age }} />
                ))}
            </div>
        </div>
    );
};

export default QuestionPicker;
