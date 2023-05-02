import UpfrontAmountInput from '@/page-sections/FinanceCalculator/UpfrontAmountInput';
import { Dispatch, SetStateAction } from 'react';
import { Controller } from './Controller';
import InstallmentInput from './InstallmentInput';

interface UpfrontPaymentInterface {
    title: string;
    minValue: number;
    maxValue: number;
    value: number;
    defaultValue: number;
    onValueChange: Dispatch<SetStateAction<number>>;
    valueLabelFormat?: string;
    appendValueText: string;
    id: string;
    inputLabel: string;
    upfrontAmount?: number;
    totalPayment?: number;
}

/**
 * Treat calculator input controls component
 *
 * @param {string} title
 * @param {number} minValue
 * @param {number} maxValue
 * @param {number} defaultValue
 * @param {Dispatch<SetStateAction<number>>} onValueChange
 * @param {number} value
 * @param {string | undefined} valueLabelFormat
 * @param {string} appendValueText
 * @param {string} id
 * @param {string} inputLabel
 * @param {number | undefined} upfrontAmount
 * @param {number | undefined} totalPayment
 * @returns {JSX.Element}
 * @constructor
 */
const SurgeryController = ({
    title,
    minValue,
    maxValue,
    defaultValue,
    onValueChange,
    value,
    valueLabelFormat,
    appendValueText,
    id,
    inputLabel,
    upfrontAmount,
    totalPayment
}: UpfrontPaymentInterface) => {
    const inputClassName =
        'rounded-primary font-mulishBold py-4 px-6 max-w-[15.7rem] text-center text-heading border-2 border-heading focus-visible:!outline-[none]';

    return (
        <div className="grid md:gap-28">
            <div className="hidden w-full place-items-center gap-6 justify-self-center md:grid">
                <span className="font-mulishExtraBold text-[1.8rem] uppercase leading-[2.4rem] text-heading">
                    {title}
                </span>

                {/* <span className="col-span-full mt-8 font-mulishMedium text-[1.4rem] leading-[1.4rem] md:mt-12"> */}
                {/*     {inputLabel}{' '} */}
                {/*     <span className="font-mulishBold text-[1.6rem] leading-[1.6rem]"> */}
                {/*         ({id === 'upfront-payment' ? '£' : 'months'}) */}
                {/*     </span> */}
                {/* </span> */}

                <div className="grid w-full gap-6">
                    {id === 'upfront-payment' ? (
                        <UpfrontAmountInput
                            upfrontAmount={upfrontAmount || null}
                            className={inputClassName}
                            totalPayment={totalPayment || 0}
                            setUpfrontPercentage={onValueChange}
                            upfrontMaxPercentage={maxValue}
                            upfrontMinPercentage={minValue}
                        />
                    ) : (
                        <InstallmentInput
                            id={id}
                            className={inputClassName}
                            minInstallment={minValue}
                            maxInstallment={maxValue}
                            installment={value}
                            setInstallment={onValueChange}
                        />
                    )}
                </div>
            </div>

            <Controller
                title={title}
                appendValueText={appendValueText}
                minValue={minValue}
                maxValue={maxValue}
                value={value}
                defaultValue={defaultValue}
                onValueChange={onValueChange}
                valueLabelFormat={valueLabelFormat}
                id={id}
            />
        </div>
    );
};

export default SurgeryController;
