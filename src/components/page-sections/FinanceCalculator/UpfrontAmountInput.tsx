import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface UpfrontAmountInputInterface {
    upfrontAmount: number | null;
    className: string;
    setUpfrontPercentage: Dispatch<SetStateAction<number>>;
    totalPayment: number;
    upfrontMinPercentage: number;
    upfrontMaxPercentage: number;
}

/**
 * Upfront input component
 *
 * @param {number | null} upfrontAmount
 * @param {string} className
 * @param {Dispatch<SetStateAction<number>>} setUpfrontPercentage
 * @param {number} totalPayment
 * @param {number} upfrontMinPercentage
 * @param {number} upfrontMaxPercentage
 * @returns {JSX.Element}
 * @constructor
 */
const UpfrontAmountInput = ({
    upfrontAmount,
    className,
    setUpfrontPercentage,
    totalPayment,
    upfrontMinPercentage,
    upfrontMaxPercentage
}: UpfrontAmountInputInterface): JSX.Element => {
    const [inputValue, setInputValue] = useState<number | null>(upfrontAmount);
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const [invalidAmount, setInvalidAmount] = useState<boolean>(false);

    const [percentage, setPercentage] = useState<number>();

    useEffect(() => {
        if (inputFocused) return;

        setInvalidAmount(false);
        setInputValue(upfrontAmount);
    }, [upfrontAmount]);

    /**
     * Calculate the percentage of given upfront/deposit amount of total payment of the surgery amount
     *
     * @param {number} total
     * @param {number} given
     * @returns {number}
     */
    const calculatePercentage = (total: number, given: number) => {
        // Calculate the percentage
        let percentage = (given / total) * 100;
        // Round the percentage to two decimal places
        percentage = Math.round(percentage * 100) / 100;
        // Return the percentage
        return percentage;
    };

    return (
        <div className="relative grid place-items-center gap-3">
            <input
                type="number"
                id="upfront-payment"
                className={className}
                value={inputValue || ''}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onChange={(e) => {
                    const currentValue = Number(e.target.value);
                    setInputValue(currentValue);
                    const tempPercentage = calculatePercentage(totalPayment, currentValue);
                    setPercentage(tempPercentage);

                    if (tempPercentage < upfrontMinPercentage || tempPercentage > upfrontMaxPercentage) {
                        setInvalidAmount(true);
                        return;
                    }

                    setInvalidAmount(false);
                    setUpfrontPercentage(tempPercentage);
                }}
            />
            {invalidAmount && percentage && (
                <>
                    {percentage < upfrontMinPercentage ? (
                        <span className="w-full text-center font-mulishBold text-[1.4rem] leading-[1.4rem] text-red-500 line-clamp-1 xl:absolute xl:bottom-0 xl:translate-y-8">
                            Sorry, minimum deposit of £{(upfrontMinPercentage / 100) * totalPayment} is required for
                            this treatment
                        </span>
                    ) : (
                        <span className="w-full text-center font-mulishBold text-[1.4rem] leading-[1.4rem] text-red-500 line-clamp-1 xl:absolute xl:bottom-0 xl:translate-y-8">
                            Sorry, maximum deposit of £{(upfrontMaxPercentage / 100) * totalPayment} is allowed
                        </span>
                    )}
                </>
            )}
        </div>
    );
};

export default UpfrontAmountInput;
