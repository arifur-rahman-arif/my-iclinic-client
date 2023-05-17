import { AppCtx } from '@/page-sections/FinanceCalculator/Context';
import { useContext } from 'react';

interface MonthlyPaymentProps {
    index: number;
}
export const MonthlyPayment = ({ index }: MonthlyPaymentProps) => {
    const ctx = useContext(AppCtx);

    return (
        <div className="grid w-full gap-16 rounded-primary bg-brand py-8 px-8 shadow-shadow1 md:py-16 md:px-12 lg:self-start">
            <div className="grid content-start gap-14 justify-self-center">
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
        </div>
    );
};
