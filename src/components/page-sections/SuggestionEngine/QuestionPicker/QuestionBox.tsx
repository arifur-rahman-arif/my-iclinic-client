import { AiOutlineCheck } from 'react-icons/ai';

interface QuestionBoxProps {
    text: string;
    disabled?: boolean;
    selected?: boolean;
}

/**
 * Question button box
 *
 * @param {string} text
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionBox = ({ text, disabled, selected }: QuestionBoxProps): JSX.Element => {
    return (
        <button
            className={`flex w-full max-w-[22.1rem] cursor-pointer items-center justify-center gap-6 rounded-primary border-2 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white ${
                disabled ? 'border-heading opacity-50' : 'border-white'
            } ${selected ? '!border-brand bg-brand' : 'bg-transparent'}`}
        >
            {selected && <AiOutlineCheck className="h-9 w-9 fill-white" />}
            {text}
        </button>
    );
};

export default QuestionBox;
