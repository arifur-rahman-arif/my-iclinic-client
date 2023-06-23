import { handleAlert } from '@/features/alert/alertSlice';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import Checkbox from 'src/components/Inputs/Checkbox';

interface SingleChoiceQuestionsProps {
    node: number;
}

interface Options {
    active: boolean;
    label: string;
    targetNode: number;
}

/**
 * A component that renders a set of single choice questions.
 *
 * @component
 * @param {Object} node - The node object containing information about the current question.
 * @returns {JSX.Element} - The rendered component.
 */
const SingleChoiceQuestions = ({ node }: SingleChoiceQuestionsProps) => {
    const ctx = useContext(Context);
    const dispatch = useDispatch();

    interface HandlerOnChangeProps {
        index: number;
        value: string;
        targetNode: number;
    }

    /**
     * Function to handle the onChange event for a given input field.
     * It updates the options and routes in the context based on the provided parameters.
     * It also adds a question to the queue in the context.
     *
     * @param {HandlerOnChangeProps} props - The properties containing the index, value, and targetNode.
     * @returns {void}
     */
    const handleOnChange = ({ index, value, targetNode }: HandlerOnChangeProps) => {
        ctx.setOptions((prevState) => {
            const newState = prevState.map((option, i) => {
                if (index === i) {
                    return { ...option, active: !option.active };
                } else {
                    return option;
                }
            });

            ctx.addQuestionToQueue({
                question: 'Do any of the following apply to you',
                answer: getActiveOptions(newState),
                questionIndex: `${node}`
            });

            ctx.setRoutes((prevRoutes) => {
                prevRoutes[node].nextNode = newState[0].active ? 20 : 21;
                return prevRoutes;
            });

            return newState;
        });
    };

    /**
     * Retrieves the labels of active options from the given array of options.
     *
     * @param {Options[]} options - An array of options.
     * @returns {string} - The labels of active options, separated by commas.
     */
    const getActiveOptions = (options: Options[]): string => {
        if (!options) return '';

        const activeLabels = options?.filter((option) => option.active)?.map((option) => option.label);
        return activeLabels.join(', ');
    };

    /**
     * Checks if any item in the options array has active value equal to true.
     *
     * @returns {boolean} True if any item is active, false otherwise.
     */
    const checkIfAnyItemIsActive = () => {
        for (const option of ctx.options) {
            if (option.active) {
                return true;
            }
        }
        return false;
    };

    /**
     * Handles the click event for the next button.
     * If no item is active, displays an error alert.
     * Otherwise, updates the completed step and navigates to the next node.
     */
    const handleNextClick = () => {
        if (!checkIfAnyItemIsActive()) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please select one of the following options'
                })
            );

            return;
        }

        ctx.setCompletedStep((ctx.completedStep += 1));
        ctx.navigateToStep(ctx.routes[node].nextNode as number);
    };

    return (
        <>
            <div className="grid w-full content-start gap-8 md:gap-6">
                {ctx.options.map((option, index) => (
                    <Checkbox
                        key={index}
                        id={`options-${index}`}
                        name="options"
                        value={option.label}
                        checked={option.active}
                        label={option.label}
                        labelClassName="text-white"
                        onChange={(e) =>
                            handleOnChange({
                                index,
                                value: e.target.value,
                                targetNode: option.targetNode
                            })
                        }
                    />
                ))}
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-12">
                <button
                    className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                    onClick={() => {
                        ctx.navigateToStep(ctx.routes[node].prevNode as number);

                        ctx.setOptions((prevState) => {
                            return prevState.map((option) => {
                                return { ...option, active: false };
                            });
                        });
                    }}
                >
                    <BiArrowBack className="h-10 w-10 fill-[#C5CED2]" />
                    Previous Question
                </button>

                <button
                    className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-4 px-16 font-mulishBold text-white transition-all duration-500 hover:border-white hover:bg-transparent md:py-5 md:px-20 md:text-[1.8rem] md:leading-[2.8rem]"
                    onClick={handleNextClick}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default SingleChoiceQuestions;
