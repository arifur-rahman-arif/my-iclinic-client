import { RadioButton2 } from '@/components/Inputs/RadioButton';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import Image from 'next/image';
import { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface WhyGlassesAndContactLensesProps {
    node: number;
    questionText: string;
}

/**
 * Component
 *
 * @param {number} node
 * @param {string} questionText
 * @returns {JSX.Element}
 * @constructor
 */
const WhyGlassesAndContactLenses = ({ node, questionText }: WhyGlassesAndContactLensesProps): JSX.Element => {
    const ctx = useContext(Context);

    interface HandlerOnChangeProps {
        index: number;
        value: string;
    }

    /**
     * Handles the onChange event for a specific input element.
     *
     * @param {Object} options - The options object containing the index and value.
     * @param {number} options.index - The index of the element being changed.
     * @param {string} options.value - The new value of the element.
     *
     * @returns {void}
     */
    const handleOnChange = ({ index, value }: HandlerOnChangeProps) => {
        ctx.setWhyGlassesAndLenses((prevState) => {
            return prevState.map((state, i) => {
                return {
                    ...state,
                    active: index === i
                };
            });
        });

        ctx.addQuestionToQueue({
            question: questionText,
            answer: value,
            questionIndex: `${node}`
        });
    };

    /**
     * Handles navigation click based on the provided type.
     * @param {('yes' | 'no')} type - The type of the navigation click ('yes' or 'no').
     * @returns {void}
     */
    const handleNavigationClick = (type: 'yes' | 'no') => {
        let nextNode;

        if (type === 'yes') {
            nextNode = ctx.routes[node].nextNode;
            ctx.setCompletedStep((ctx.completedStep += 1));
        } else {
            nextNode = ctx.routes[node].prevNode;
            ctx.setCompletedStep((ctx.completedStep -= 1));
        }

        if (!nextNode) return;

        if (type === 'no') {
            ctx.setEyePrescription((prevState) => {
                return {
                    ...prevState,
                    unsure: false
                };
            });
        }

        ctx.setPreviousNode(node, nextNode);

        ctx.navigateToStep(nextNode);
    };

    return (
        <>
            <div className="grid w-full content-start gap-8">
                {ctx.whyGlassesAndLenses.map((currentOption, index) => (
                    <div
                        key={index}
                        className="flex flex-wrap items-center justify-center gap-12 rounded-primary border border-white p-12 md:justify-between"
                    >
                        <RadioButton2
                            id={`why-contact-lenses-${index}`}
                            name="why-contact-lenses"
                            value={currentOption.label}
                            checked={currentOption.active}
                            label={currentOption.label}
                            onChange={(e) =>
                                handleOnChange({
                                    index,
                                    value: e.target.value
                                })
                            }
                        />

                        <div className="flex items-center justify-center gap-12">
                            {index === 0 && (
                                <>
                                    <Image src="/images/section-images/writing.png" alt="" width={56} height={75} />
                                    <Image src="/images/section-images/reading.png" alt="" width={63} height={58} />
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <Image src="/images/section-images/computer.png" alt="" width={73} height={64} />
                                    <Image src="/images/section-images/tv.png" alt="" width={43} height={72} />
                                </>
                            )}
                            {index === 2 && (
                                <>
                                    <Image
                                        src="/images/section-images/reading-signs.png"
                                        alt=""
                                        width={68}
                                        height={95}
                                    />
                                    <Image src="/images/section-images/driving.png" alt="" width={54} height={71} />
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full items-center justify-between gap-12">
                <button
                    className="flex cursor-pointer items-center justify-start gap-6 font-mulishBold text-[1.4rem] capitalize leading-8 text-[#CDCFD0]"
                    onClick={() => handleNavigationClick('no')}
                >
                    <BiArrowBack className="h-10 w-10 fill-[#C5CED2]" />
                    Previous Question
                </button>

                <button
                    className="justify-self-end rounded-primary border-2 border-heading2 bg-heading2 py-4 px-16 font-mulishBold text-white transition-all duration-500 hover:border-white hover:bg-transparent md:py-5 md:px-20 md:text-[1.8rem] md:leading-[2.8rem]"
                    onClick={() => handleNavigationClick('yes')}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default WhyGlassesAndContactLenses;
