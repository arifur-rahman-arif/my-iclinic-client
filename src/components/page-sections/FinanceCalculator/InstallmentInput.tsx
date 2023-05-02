import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface InstallmentInputInterface {
    id: string;
    className: string;
    minInstallment: number;
    maxInstallment: number;
    installment: number;
    setInstallment: Dispatch<SetStateAction<number>>;
}

/**
 * Installment input
 *
 * @param {string} id
 * @param {string} className
 * @param {number} maxInstallment
 * @param {number} minInstallment
 * @param {number} installment
 * @param {Dispatch<SetStateAction<number>>} setInstallment
 * @returns {JSX.Element}
 * @constructor
 */
const InstallmentInput = ({
    id,
    className,
    maxInstallment,
    minInstallment,
    installment,
    setInstallment
}: InstallmentInputInterface) => {
    const [inputValue, setInputValue] = useState<number | null>(installment);
    const [invalidInput, setInvalidInput] = useState<boolean>(false);
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    useEffect(() => {
        if (inputFocused) return;

        setInvalidInput(false);
        setInputValue(installment);
    }, [installment]);

    const [installmentInput, setInstallmentInput] = useState<number>();

    return (
        <div className="relative grid place-items-center gap-3">
            <input
                type="number"
                id={id}
                className={className}
                value={inputValue || ''}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onChange={(e) => {
                    const currentValue = Number(e.target.value);
                    setInstallmentInput(currentValue);

                    setInputValue(currentValue || null);

                    if (currentValue < minInstallment || currentValue > maxInstallment) {
                        setInvalidInput(true);
                        return;
                    }

                    setInvalidInput(false);
                    setInstallment(currentValue);
                }}
            />

            {invalidInput && installmentInput ? (
                <>
                    {installmentInput < minInstallment ? (
                        <span className="whitespace-nowrap font-mulishBold text-[1.4rem] leading-[1.4rem] text-red-500 xl:absolute xl:bottom-0 xl:translate-y-8">
                            Sorry, minimum of {minInstallment} month's instalment is required
                        </span>
                    ) : (
                        <span className="whitespace-nowrap font-mulishBold text-[1.4rem] leading-[1.4rem] text-red-500 xl:absolute xl:bottom-0 xl:translate-y-8">
                            Sorry, maximum of {maxInstallment} month's instalment is allowed
                        </span>
                    )}
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default InstallmentInput;
