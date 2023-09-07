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

    //    const treatmentCost = ctx.treatmentList[index].cost * ctx.treatmentList[index].eyeCount;

    return (
        <div className="grid w-full gap-16 rounded-primary lg:self-start">
            <div className="grid content-start gap-y-16 gap-x-14 justify-self-center md:content-between md:gap-24 xl:gap-40">
                <p className="max-w-[36.4rem] text-center font-latoBold text-[2rem] leading-[2.4rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                    Your monthly payment
                </p>
                <div className="grid place-items-center gap-4 justify-self-center">
                    <span className="font-latoBold text-[3.6rem] leading-[4rem] text-heading">
                        £{ctx.getMonthlyPaymentValue(index)}
                    </span>
                    <span className="text-[1.8rem] uppercase leading-[2.8rem] text-heading">Per eye | Per month</span>
                </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-12 justify-self-center lg:grid-cols-[auto_auto]"> */}
            {/*    <div className="flex flex-col items-center rounded-primary border border-[#EAECF0] py-4 px-8 text-center"> */}
            {/*        <p className="font-mulishBold text-[1.8rem] capitalize leading-[2.8rem] text-heading"> */}
            {/*            Surgery cost */}
            {/*        </p> */}
            {/*        <p className="mt-9 mb-3 font-mulishBold text-[2rem] leading-[2.8rem] text-heading"> */}
            {/*            £{treatmentCost} */}
            {/*        </p> */}
            {/*        <p className="font-mulishBold uppercase text-heading"> */}
            {/*            {ctx.treatmentList[index].eyeCount === 1 ? 'One eye' : 'Both eyes'} */}
            {/*        </p> */}
            {/*    </div> */}

            {/*    <div className="flex flex-col items-center rounded-primary border border-[#EAECF0] py-4 px-8 text-center"> */}
            {/*        <p className="font-mulishBold text-[1.8rem] capitalize leading-[2.8rem] text-heading">Deposit</p> */}
            {/*        <p className="mt-9 font-mulishBold text-[2rem] leading-[2.8rem] text-heading"> */}
            {/*            £{(treatmentCost * ctx.treatmentList[index].defaultUpfront) / 100} */}
            {/*        </p> */}
            {/*    </div> */}
            {/* </div> */}
        </div>
    );
};
