import { Context } from '@/page-sections/SuggestionEngine/Context';
import Image from 'next/image';
import { useContext } from 'react';

interface EyePrescriptionProps {
    questionText: string;
    node: number;
}

const EyePrescription = ({ questionText, node }: EyePrescriptionProps) => {
    const ctx = useContext(Context);
    /**
     * Handles the eye button click event.
     *
     * @param {('Left Eye' | 'Right Eye')} type - The type of eye button clicked (either 'Left Eye' or 'Right Eye').
     */
    const handleEyeButtonClick = (type: 'Left Eye' | 'Right Eye') => {
        ctx.addQuestionToQueue({
            question: questionText,
            answer: type,
            questionIndex: `${node}`
        });

        const nextNode = ctx.routes[node].nextNode;

        if (!nextNode) return;

        ctx.setCompletedStep((ctx.completedStep += 1));

        ctx.setPreviousNode(node, nextNode);

        ctx.navigateToStep(nextNode);
    };

    return (
        <div className="flex flex-wrap items-center justify-start gap-6">
            <button
                className="flex items-center justify-center rounded-primary border-2 border-heading2 bg-heading2 py-5 pl-20 pr-8 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white md:gap-16"
                onClick={() => handleEyeButtonClick('Left Eye')}
            >
                Left Eye
                <Image src="/images/icons/icon-half-left-eye.svg" alt="" width={54} height={45} />
            </button>

            <button
                className="flex items-center justify-center rounded-primary border-2 border-[#0186B0] bg-[#0186B0] py-5 px-20 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-white md:gap-4"
                onClick={() => handleEyeButtonClick('Right Eye')}
            >
                Right Eye
                <Image src="/images/icons/icon-half-right-eye.svg" alt="" width={54} height={45} />
            </button>
        </div>
    );
};

export default EyePrescription;
