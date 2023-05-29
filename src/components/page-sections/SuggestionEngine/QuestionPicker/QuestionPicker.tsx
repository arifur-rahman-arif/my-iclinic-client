import QuestionBox from './QuestionBox';
import ProgressMenu from './ProgressMenu';

/**
 * Question picker component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionPicker = () => {
    return (
        <div className="grid place-items-center gap-12 bg-heading2 p-12 md:p-24 md:px-24">
            <ProgressMenu percentage={30} />

            <span className="text font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                What is your age?
            </span>

            <div className="grid gap-8">
                <QuestionBox text="Under 20" />
                <QuestionBox text="20-39" />
                <QuestionBox text="40-50" />
                <QuestionBox text="50-60" />
                <QuestionBox text="60+" />
            </div>
        </div>
    );
};

export default QuestionPicker;
