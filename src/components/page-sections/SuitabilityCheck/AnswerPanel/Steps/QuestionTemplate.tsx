import WhyGlassesAndContactLenses from '@/page-sections/SuitabilityCheck/AnswerPanel/Steps/WhyGlassesAndContactLenses';
import EyePrescription from './EyePrescription';
import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { memo, useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styles from '../styles/PanelReveal.module.scss';
import SingleChoiceQuestions from './SingleChoiceQuestions';

interface QuestionTemplateProps {
    questionNumber: number;
    questionText: string;
    showBackButton?: boolean;
    includeAnswerButton?: boolean;
    includeEyeButton?: boolean;
    includeRadioBoxes?: boolean;
    whyGlassesAndContactLenses?: boolean;
    node: number;
}

/**
 * A memoized component for rendering a question template.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {number} props.questionNumber - The number of the question.
 * @param {string} props.questionText - The text of the question.
 * @param {boolean} props.showBackButton - Whether to show the back button.
 * @param {boolean} [props.includeAnswerButton=true] - Whether to include the answer buttons.
 * @param {boolean} props.includeEyeButton - Whether to include the eye buttons.
 * @param {boolean} props.includeRadioBoxes - Whether to include radio boxes.
 * @param {string} props.node - The node identifier.
 * @returns {JSX.Element} - The rendered question template.
 */
const QuestionTemplate = memo(
    ({
        questionNumber,
        questionText,
        showBackButton,
        includeAnswerButton = true,
        includeEyeButton,
        includeRadioBoxes,
        whyGlassesAndContactLenses,
        node
    }: QuestionTemplateProps): JSX.Element => {
        const ctx = useContext(Context);

        /**
         * Handles click events for the component.
         * If ages are not selected yet, disables all ages except the current one and updates the ages in the context.
         * Increments the completed step in the context.
         * Determines the next node based on the provided type and updates the previous node in the context.
         * Navigate to the next step in the context.
         * Add the question and answer to the queue in the context.
         *
         * @param {string} type - The type of click event ('yes' or 'no').
         * @returns {void}
         */
        const handleClick = (type: 'yes' | 'no') => {
            // // If ages are not selected yet
            if (!ctx.ageSelected) {
                /**
                 * Disable all the ages except the current one
                 * Updates the ages in the context by setting the 'disabled' property based on the 'active' property of each age.
                 * The update is performed using the functional setState pattern, where the previous state is passed as an argument to the updater function.
                 *
                 * @param {function} prevState - A function that receives the previous state as an argument and returns the updated state.
                 * @returns {Array} - An array of updated age objects, where the 'disabled' property is set to the opposite value of 'active'.
                 */
                // ctx.setAges((prevState) => {
                //     return prevState.map((state, index) => {
                //         return {
                //             ...state,
                //             disabled: !state.active
                //         };
                //     });
                // });
                ctx.setAgeSelected(true);
            }

            ctx.setCompletedStep((ctx.completedStep += 1));

            let nextNode;

            if (type === 'yes') {
                nextNode = ctx.routes[node].yesNode;
            } else {
                nextNode = ctx.routes[node].noNode;
            }

            if (!nextNode) return;

            ctx.setPreviousNode(node, nextNode);

            ctx.navigateToStep(nextNode);

            ctx.addQuestionToQueue({
                question: questionText,
                answer: type,
                questionIndex: `${node}`
            });
        };

        return (
            <div
                className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
            >
                <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                    <span className="font-latoBold text-white md:text-[3rem] md:leading-[3.6rem]">
                        Suitability Questionnaire
                    </span>

                    <div className="grid max-w-[57.2rem] gap-12">
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                            <span className="question-number leading-16 font-latoExtraBold text-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                                Q{questionNumber}
                            </span>
                            <span className="h-[0.1rem] max-w-[21.4rem] -translate-y-2 self-end bg-white"></span>
                        </div>

                        <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">{questionText}?</span>
                    </div>

                    {includeRadioBoxes ? <SingleChoiceQuestions node={node} /> : null}
                    {whyGlassesAndContactLenses ? (
                        <WhyGlassesAndContactLenses questionText={questionText} node={node} />
                    ) : null}

                    {includeAnswerButton && (
                        <div className="flex flex-wrap items-center justify-start gap-6">
                            <button
                                onClick={() => handleClick('yes')}
                                className="rounded-[0.5rem] border border-[#0099FF] bg-[#0099FF] px-20 py-5 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:bg-transparent hover:text-[#0099FF]"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleClick('no')}
                                className="rounded-[0.5rem] border border-white bg-transparent px-20 py-5 font-mulishBold text-[1.8rem] leading-[2.8rem] text-white transition-all duration-500 hover:border-[#0099FF] hover:bg-transparent hover:text-[#0099FF]"
                            >
                                No
                            </button>
                        </div>
                    )}

                    {includeEyeButton && <EyePrescription {...{ node, questionText }} />}

                    {showBackButton && (
                        <button
                            className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                            onClick={() => {
                                ctx.setCompletedStep((ctx.completedStep -= 1));
                                ctx.navigateToStep(ctx.routes[node].prevNode as number);
                            }}
                        >
                            <BiArrowBack className="h-10 w-10 fill-[#C5CED2]" />
                            Previous Question
                        </button>
                    )}
                </div>
            </div>
        );
    }
);

export default QuestionTemplate;
