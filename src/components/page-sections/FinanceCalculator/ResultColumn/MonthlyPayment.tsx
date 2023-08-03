import { AppCtx } from '@/page-sections/FinanceCalculator/Context';
import { useContext } from 'react';

interface MonthlyPaymentProps {
    index: number;
}

/**
 * Renders the monthly payment component.
 *
 * @param {MonthlyPaymentProps} props - The properties for the MonthlyPayment component.
 * @param {number} props.index - The index value.
 * @returns {JSX.Element} The rendered MonthlyPayment component.
 */
export const MonthlyPayment = ({ index }: MonthlyPaymentProps) => {
    const ctx = useContext(AppCtx);

    const treatmentCost = ctx.treatmentList[index].cost * ctx.treatmentList[index].eyeCount;

    return (
        <div className="grid w-full gap-16 rounded-primary bg-brand py-8 px-8 shadow-shadow1 md:py-16 md:px-12 lg:self-start">
            <div className="grid content-start gap-y-16 gap-x-14 justify-self-center">
                <p className="max-w-[36.4rem] text-center font-latoBold text-[2rem] leading-[2.4rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                    Your monthly payment
                </p>
                <div className="grid place-items-center gap-4 justify-self-center">
                    <span className="font-latoExtraBold text-[4.8rem] leading-[4.8rem] text-white">
                        £{ctx.getMonthlyPaymentValue(index)}
                    </span>
                    <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem] text-white">
                        Per eye | Per month
                    </span>
                </div>
            </div>
            <hr className="mx-auto w-full max-w-md border border-[#003C55]" />
            <div className="grid justify-center justify-items-center gap-8 pb-12 md:grid-cols-[auto_auto]">
                <div className="flex w-72 flex-col items-center rounded-primary border border-white px-10 py-7 text-center">
                    <p className="font-mulishBold text-[2rem] capitalize leading-[2.8rem] text-white">Surgery cost</p>
                    <p className="mt-9 mb-3 font-mulishBold text-[2rem] leading-[2.8rem] text-white">
                        £{treatmentCost}
                    </p>
                    <p className="font-mulishBold uppercase text-white">
                        {ctx.treatmentList[index].eyeCount === 1 ? 'One eye' : 'Both eyes'}
                    </p>
                </div>

                <div className="flex w-72 flex-col items-center rounded-primary border border-white px-10 py-7 text-center">
                    <p className="font-mulishBold text-[2rem] capitalize leading-[2.8rem] text-white">Deposit</p>
                    <p className="mt-9 font-mulishBold text-[2rem] leading-[2.8rem] text-white">
                        £{(treatmentCost * ctx.treatmentList[index].defaultUpfront) / 100}
                    </p>
                </div>
            </div>
        </div>
    );
};
