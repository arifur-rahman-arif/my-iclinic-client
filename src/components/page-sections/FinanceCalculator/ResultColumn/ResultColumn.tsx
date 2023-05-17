import { Controller } from '@/page-sections/FinanceCalculator/Controller';
import { MonthlyPayment } from '@/page-sections/FinanceCalculator/ResultColumn/MonthlyPayment';
import { getElementTopPosition } from '@/utils/miscellaneous';
import { useContext } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AppCtx } from '../Context';

interface ResultColumnProps {
    index: number;
}
const ResultColumn = ({ index }: ResultColumnProps) => {
    const ctx = useContext(AppCtx);

    return (
        <div className="grid content-start gap-6">
            <MonthlyPayment index={index} />

            {/*  Number of instalment */}
            <div className="grid content-start gap-12 rounded-primary bg-brand p-12 md:gap-24 xl:gap-32 xl:p-24">
                <p className="max-w-[36.4rem] text-center font-latoBold text-[2rem] leading-[2.4rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                    Select your monthly payment period
                </p>

                <Controller
                    title="Number of instalments"
                    minValue={ctx.treatmentList[index].minInstallment}
                    maxValue={ctx.treatmentList[index].maxInstallment}
                    value={ctx.treatmentList[index].defaultInstallment}
                    defaultValue={10}
                    onValueChange={(e) => ctx.setInstallment(index, e.target.value)}
                    valueLabelFormat={`${ctx.treatmentList[index].defaultInstallment} month`}
                    appendValueText=" month"
                    id="installment-month"
                    inputLabel="How many installment"
                />
            </div>

            <div className="grid gap-4">
                <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">Terms & Conditions:</span>
                <p className="text-[1.6rem] leading-[2.4rem]">
                    Please consider: approval for{' '}
                    <span className="font-mulishExtraBold text-[1.6rem] uppercase text-[#FE8083]">0% ARP</span>{' '}
                    representative finance is{' '}
                    <span className="font-mulishExtraBold text-[1.6rem] uppercase text-[#FE8083]">
                        subject to status.
                    </span>
                </p>
                <p className="text-[1.6rem] leading-[2.4rem]">
                    All finance plans must be approved at least{' '}
                    <span className="font-mulishExtraBold text-[1.6rem] uppercase text-[#FE8083]">
                        14 days prior to the treatment.
                    </span>
                </p>

                <button
                    onClick={() => {
                        window.scrollTo(
                            0,
                            getElementTopPosition(document.querySelector('#average-spend-large') as HTMLElement) - 250
                        );
                    }}
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-primary bg-brand py-4 px-4 sm:flex-row md:gap-4 xl:gap-6"
                >
                    <span className="font-mulishBold text-white xl:text-[1.8rem] xl:leading-[2.8rem]">
                        Learn how much you save over{' '}
                    </span>
                    <span>
                        <span className="text-3rem font-mulishExtraBold leading-[3.6rem] text-white xl:text-[4rem] xl:leading-[4.8rem]">
                            30
                        </span>
                        <span className="font-mulishBold leading-[3.6rem] text-white xl:text-[4rem] xl:leading-[4.8rem]">
                            {' '}
                            Years
                        </span>
                    </span>

                    <AiOutlineArrowDown className="h-[2.4rem] w-[2.4rem] fill-white" />
                </button>
            </div>
        </div>
    );
};

export default ResultColumn;
