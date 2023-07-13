import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { prependSign } from '@/utils/miscellaneous';
import { useContext, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Checkbox from 'src/components/Inputs/Checkbox';
import Select from '@/page-sections/SuitabilityCheck/AnswerPanel/Steps/EyePrescription/Select';
import styles from '../../styles/PanelReveal.module.scss';
import Sphere from './Sphere';

interface EyePrescriptionProps {
    node: number;
}

type Eye = 'leftEye' | 'rightEye';

/**
 * Eye Prescription
 *
 * @param {number} node
 * @returns {JSX.Element}
 * @constructor
 */
const EyePrescription = ({ node }: EyePrescriptionProps) => {
    const ctx = useContext(Context);

    /**
     * Handles navigation clicks based on the provided type.
     *
     * @param {('yes' | 'no')} type - The type of navigation ('yes' or 'no').
     */
    const handleNavigationClick = (type: 'yes' | 'no') => {
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

        if (type == 'yes') addEyePrescriptionQuestion();
    };

    /**
     * Generates an array of numbers representing the values of a cylinder.
     * The numbers start from 0 and decrease by 0.25 until reaching -10.
     *
     * @returns {number[]} An array of numbers representing the values of a cylinder.
     */
    const cylNumbers = (): number[] => {
        const numbers: number[] = [];

        for (let i = 0; i >= -10; i -= 0.25) {
            numbers.push(i);
        }

        return numbers;
    };

    /**
     * Generates an array of numbers representing axis values.
     * The numbers start from 0 and increment by 10 up to 180.
     *
     * @returns {number[]} An array of numbers representing axis values.
     */
    const axisNumbers = (): number[] => {
        const numbers: number[] = [];

        for (let i = 0; i <= 180; i += 10) {
            numbers.push(i);
        }

        return numbers;
    };

    /**
     * Generates an array of axis numbers.
     * The function creates an array of numbers ranging from 0 to 180 (inclusive),
     * with an increment of 10 between each number.
     *
     * @returns {number[]} The array of axis numbers.
     */
    const ADDNumbers = (): number[] => {
        const numbers: number[] = [];

        for (let i = 0.75; i <= 3; i += 0.25) {
            numbers.push(i);
        }

        return numbers;
    };

    /**
     * Handles the selection of a value for a specific eye and prescription type.
     *
     * @param {number} value - The selected value for the prescription.
     * @param {Eye} eye - The eye for which the prescription is being updated.
     * @param {string} type - The type of prescription being updated ('cyl', 'axis', or 'add').
     */
    const handleSelect = (value: number, eye: Eye, type: 'cyl' | 'axis' | 'add') => {
        ctx.setEyePrescription((prevState) => {
            const currentState = {
                ...prevState,
                [type]: {
                    ...prevState[type],
                    [eye]: value
                }
            };
            ctx.isSuitableForICL(currentState, node);

            return currentState;
        });
    };

    /**
     * Adding the prescription to the questions
     */
    const addEyePrescriptionQuestion = () => {
        let answer = '';

        if (ctx.eyePrescription.unsure) {
            answer = 'User in unsure of his/her eye prescription';
        } else {
            answer = `
                <b>SPHERE</b>: Left eye ${prependSign(ctx.eyePrescription.sphere.leftEye) || 'N/A'}, Right eye ${
                prependSign(ctx.eyePrescription.sphere.rightEye) || 'N/A'
            }
                <br/>
                <br/>
                <b>CYL</b>: Left eye ${ctx.eyePrescription.cyl.leftEye || 'N/A'}, Right eye ${
                ctx.eyePrescription.cyl.rightEye || 'N/A'
            }
                <br/>
                <br/>
                <b>AXIS</b>: Left eye ${ctx.eyePrescription.axis.leftEye || 'N/A'}, Right eye ${
                ctx.eyePrescription.axis.rightEye || 'N/A'
            }
                <br/>
                <br/>
                <b>ADD</b>: Left eye ${prependSign(ctx.eyePrescription.add.leftEye) || 'N/A'}, Right eye ${
                prependSign(ctx.eyePrescription.add.rightEye) || 'N/A'
            }
                <br/>
                <br/>
            `;
        }

        ctx.addQuestionToQueue({
            question: 'Eye Prescription',
            answer,
            questionIndex: `${node}`
        });
    };

    useEffect(() => {
        if (!ctx.eyePrescription.unsure) return;

        setTimeout(() => {
            addEyePrescriptionQuestion();
            handleNavigationClick('no');
        }, 800);
    }, [ctx.eyePrescription.unsure]);

    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid h-full w-full place-items-center content-center gap-12 md:gap-24">
                <div className="grid max-w-[57.2rem] content-start gap-12 md:gap-24">
                    <Sphere node={node} />

                    <div className="grid gap-12 md:gap-8">
                        <Select
                            label="CYL"
                            onSelect={(...rest) => handleSelect(...rest, 'cyl')}
                            options={cylNumbers()}
                            leftValue={ctx.eyePrescription.cyl.leftEye}
                            rightValue={ctx.eyePrescription.cyl.rightEye}
                        />
                        {(ctx.eyePrescription.cyl.leftEye || ctx.eyePrescription.cyl.rightEye) && (
                            <Select
                                label="AXIS"
                                onSelect={(...rest) => handleSelect(...rest, 'axis')}
                                options={axisNumbers()}
                                leftValue={ctx.eyePrescription.axis.leftEye}
                                rightValue={ctx.eyePrescription.axis.rightEye}
                            />
                        )}

                        <p className="text-[1.6rem] leading-[2.4rem] text-white">
                            Around 50% of glasses wearers have a slight deformation of eye lens. This is called
                            astigmatism.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        <Select
                            label="ADD"
                            onSelect={(...rest) => handleSelect(...rest, 'add')}
                            options={ADDNumbers()}
                            leftValue={ctx.eyePrescription.add.leftEye}
                            rightValue={ctx.eyePrescription.add.rightEye}
                            showSign
                        />

                        <p className="text-[1.6rem] leading-[2.4rem] text-white">
                            You should have this in your prescription if you are aged 45 ore older. ADD used for
                            multifocal glasses (Progressives, Bifocal and trifocal).
                        </p>
                    </div>

                    <Checkbox
                        label="I am unsure of my prescription"
                        onChange={() =>
                            ctx.setEyePrescription((prevState) => {
                                return {
                                    ...prevState,
                                    unsure: true
                                };
                            })
                        }
                        value="unsure"
                        checked={ctx.eyePrescription.unsure}
                        id="unsurity"
                        name="unsurity"
                        labelClassName="text-white font-mulishBold"
                    />
                </div>

                <div className="flex w-full max-w-[57.2rem] items-center justify-between gap-12">
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
                        onClick={() => handleNavigationClick('yes')}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EyePrescription;
