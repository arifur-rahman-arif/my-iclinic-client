import { RadioButton } from '@/components/Inputs/RadioButton';
import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { AlertMessagesI } from '@/page-sections/icl-components/FinanceCalculatorSection/FinanceCalculator';
import { Dispatch, SetStateAction, useContext } from 'react';

interface PercentageCheckBoxProps {
    index: number;
    setShowAlert: Dispatch<SetStateAction<boolean>>;
    setAlertMessages: Dispatch<SetStateAction<AlertMessagesI[]>>;
}

/**
 * Percentage range checkbox component
 *
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const PercentageCheckBox = ({ index, setShowAlert, setAlertMessages }: PercentageCheckBoxProps) => {
    const ctx: CalculatorContext = useContext(AppCtx);

    /**
     * Calculates an array of evenly distributed percentage values between a minimum and maximum percentage.
     *
     * @param {number} min The minimum percentage value.
     * @param {number} max The maximum percentage value.
     * @returns {number[]} An array of 6 percentage values evenly distributed between the minimum and maximum.
     */
    const getPercentageRange = (min: number, max: number): number[] => {
        const range = max - min;
        const step = range / 5;
        const percentages = [];

        for (let i = 0; i <= 5; i++) {
            const percentage = min + step * i;
            percentages.push(percentage);
        }

        return percentages;
    };

    const slug = ctx?.treatmentList[index]?.name
        .trim() // Remove leading and trailing space
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Convert spaces to dashes
        .toLowerCase(); // Convert to lowercase

    return (
        <div className="grid content-start gap-12 px-8 py-12">
            <div className="grid gap-6">
                <strong className="text-[2rem] leading-[2.8rem] text-heading">Deposit</strong>
                <span className="text-[1.6rem] leading-[2.4rem] text-[#35444B]">
                    How much would you like to pay up-front
                </span>
            </div>

            <div className="mx-auto grid max-w-[40rem] grid-cols-2 gap-10 xs:grid-cols-3 xs:gap-12 md:gap-x-24 md:gap-y-12">
                {getPercentageRange(ctx.treatmentList[index].minUpfront, ctx.treatmentList[index].maxUpfront)?.map(
                    (percentage, i) => (
                        <RadioButton
                            key={i}
                            label={`${percentage}%`}
                            id={`${slug}-${i}`}
                            value={percentage}
                            name={`${slug}-percentage`}
                            checked={percentage === ctx?.treatmentList[index]?.defaultUpfront}
                            rounded={false}
                            onChange={(e) => {
                                const newPercentage = Number(e.target.value);
                                ctx.setUpfrontPercentage(index, newPercentage);
                                setShowAlert(true);

                                // Update the alertMessages state based on the selected percentage
                                setAlertMessages((prevState) => {
                                    return prevState.map((messageObj) => {
                                        if (messageObj.key === newPercentage) {
                                            return {
                                                ...messageObj,
                                                active: true
                                            };
                                        } else {
                                            return {
                                                ...messageObj,
                                                active: false
                                            };
                                        }
                                    });
                                });
                            }}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default PercentageCheckBox;
