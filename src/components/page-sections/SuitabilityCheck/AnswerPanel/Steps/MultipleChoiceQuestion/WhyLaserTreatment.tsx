import Checkbox from '@/components/Inputs/Checkbox';
import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from '../../styles/PanelReveal.module.scss';

interface MultipleChoiceQuestionProps {
    questionNumber: number;
    questionText: string;
    node: number;
}

/**
 * Component
 *
 * @param {number} questionNumber
 * @param {string} questionText
 * @param {number} node
 * @returns {JSX.Element}
 * @constructor
 */
const WhyLaserTreatment = ({ questionNumber, questionText, node }: MultipleChoiceQuestionProps): JSX.Element => {
    const ctx = useContext(Context);

    /**
     * Handles click events for the component.
     * If ages are not selected yet, disables all ages except the current one and updates the ages in the context.
     * Increments the completed step in the context.
     * Determines the next node based on the provided type and updates the previous node in the context.
     * Navigate to the next step in the context.
     * Add the question and answer to the queue in the context.
     *
     * @returns {void}
     */
    const handleClick = () => {
        ctx.setCompletedStep((ctx.completedStep += 1));

        const nextNode = ctx.routes[node].nextNode;

        if (!nextNode) return;

        ctx.setPreviousNode(node, nextNode);

        ctx.navigateToStep(nextNode);

        ctx.addQuestionToQueue({
            question: questionText,
            answer: getActiveOptions(),
            questionIndex: `${node}`
        });
    };

    /**
     * Retrieves active options from the `whyLaserTreatment` array and returns their labels as a comma-separated string.
     * @returns {string} - Comma-separated string of active option labels.
     */
    const getActiveOptions = (): string => {
        const activeOptions = ctx.whyLaserTreatment.filter((option) => option.active);
        const activeLabels = activeOptions.map((option) => option.label);
        return activeLabels.join(', ');
    };

    /**
     * Handles the onChange event for the currentIndex parameter.
     *
     * @param {number} currentIndex - The index of the current option being changed.
     * @returns {void}
     */
    const handleOnChange = (currentIndex: number) => {
        const updatedOptions = ctx.whyLaserTreatment.map((option, index) => {
            if (currentIndex === index) {
                return { ...option, active: !option.active };
            } else {
                return option;
            }
        });

        // Update the options in the state or context
        // For example, if options are stored in component state, you can use useState hook:
        ctx.setWhyLaserTreatment(updatedOptions);
    };

    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="md:leading-16 font-latoBold text-white md:text-[3.6rem]">
                    Suitability Questionnaire
                </span>

                <div className="grid max-w-[57.2rem] gap-12">
                    <div className="grid grid-cols-[auto_1fr] gap-2">
                        <span className="question-number leading-16 font-latoExtraBold text-[4rem] text-[#4E6C7C] md:text-[4.8rem] md:leading-[4.8rem]">
                            Q{questionNumber}
                        </span>
                        <span className="h-[0.1rem] max-w-[21.4rem] -translate-y-2 self-end bg-[#4E6C7C]"></span>
                    </div>

                    <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">{questionText}?</span>

                    <div className="grid content-start justify-start gap-12 ">
                        {ctx.whyLaserTreatment.map((option, i) => (
                            <Checkbox
                                key={i}
                                label={option.label}
                                onChange={() => handleOnChange(i)}
                                value={option.value}
                                checked={option.active}
                                id={option.value}
                                name={option.label}
                                labelClassName="text-white font-mulishBold"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex w-full flex-wrap items-center justify-between gap-12">
                    <button
                        className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                        onClick={() => {
                            ctx.navigateToStep(ctx.routes[node].prevNode as number);
                            ctx.setCompletedStep((ctx.completedStep -= 1));
                        }}
                    >
                        <BiArrowBack className="h-10 w-10 fill-[#C5CED2]" />
                        Previous Question
                    </button>

                    <button
                        className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-4 px-16 font-mulishBold text-white transition-all duration-500 hover:border-white hover:bg-transparent md:py-5 md:px-20 md:text-[1.8rem] md:leading-[2.8rem]"
                        onClick={handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyLaserTreatment;
