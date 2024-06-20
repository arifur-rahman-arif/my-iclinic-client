import { Controller } from '@/page-sections/FinanceCalculator/Controller';
import { MonthlyPayment } from '@/page-sections/FinanceCalculator/ResultColumn/MonthlyPayment';
import { getElementTopPosition } from '@/utils/miscellaneous';
import { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AppCtx } from '../Context';

interface ResultColumnProps {
    index: number;
}

/**
 * ResultColumn component
 *
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const ResultColumn = ({ index }: ResultColumnProps) => {
    const ctx = useContext(AppCtx);
    const treatmentType = ctx.treatmentList[index].group_name;

    let marks: any = false;

    if (treatmentType == 'Cataract' || treatmentType == 'ICL Surgery') {
        marks = [{ value: 6 }, { value: 9 }, { value: 10 }];
    }

    if (treatmentType == 'Laser eye surgery') {
        marks = [{ value: 6 }, { value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }];
    }

    return (
        <div className="no-search-index grid content-start gap-6">
            <MonthlyPayment index={index} />

            {/*  Number of instalment */}
            <div className="grid content-start gap-12 rounded-[0.5rem] bg-[#003E79] p-12 md:gap-24 xl:gap-32 xl:p-24">
                <p className="mx-auto max-w-[36.4rem] text-center font-latoBold text-[2rem] leading-[2.4rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                    Select your monthly payment period
                </p>

                <Controller
                    title="Number of instalments"
                    minValue={ctx.treatmentList[index].minInstallment}
                    maxValue={ctx.treatmentList[index].maxInstallment}
                    value={ctx.treatmentList[index].defaultInstallment}
                    defaultValue={ctx.treatmentList[index].defaultInstallment}
                    onValueChange={(e) => ctx.setInstallment(index, e.target.value)}
                    valueLabelFormat={`${ctx.treatmentList[index].defaultInstallment} month`}
                    appendValueText=" month"
                    id="installment-month"
                    marks={marks}
                />
            </div>

            <div className="mt-6 grid gap-4">
                <button
                    onClick={() => {
                        window.scrollTo(
                            0,
                            getElementTopPosition(document.querySelector('#average-spend-large') as HTMLElement) - 250
                        );
                    }}
                    className="flex cursor-pointer items-center space-x-6 rounded-primary p-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={49} height={48} fill="none">
                        <g fill="#061014" fillOpacity={0.9}>
                            <path d="M3.7 0h20a3.2 3.2 0 0 1 3.2 3.2v20h-1.6v-20a1.6 1.6 0 0 0-1.6-1.6h-20a1.6 1.6 0 0 0-1.6 1.6v28a1.6 1.6 0 0 0 1.6 1.6h12v1.6h-12a3.2 3.2 0 0 1-3.2-3.2v-28A3.2 3.2 0 0 1 3.7 0Z" />
                            <path d="M13.3 26.4h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 1 0 0-1.6h-.8a.8.8 0 1 0 0 1.6Zm7.2-9.6h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 0 0 0-1.6h-.8a.8.8 0 1 0 0 1.6ZM13.3 20h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 1 0 0-1.6h-.8a.8.8 0 1 0 0 1.6Zm7.2-9.6h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 0 0 0-1.6h-.8a.8.8 0 1 0 0 1.6Zm-7.2-3.2h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 1 0 0-1.6h-.8a.8.8 0 1 0 0 1.6Zm-7.2-3.2h.8a2.4 2.4 0 1 1 0 4.8h-.8a2.4 2.4 0 1 1 0-4.8Zm0 3.2h.8a.8.8 0 0 0 0-1.6h-.8a.8.8 0 0 0 0 1.6ZM4.5 3.2h18.4a.8.8 0 0 1 .8.8v7.2a.8.8 0 0 1-.8.8H4.5a.8.8 0 0 1-.8-.8V4a.8.8 0 0 1 .8-.8Zm.8 7.2h16.8V4.8H5.3v5.6Zm.8 9.6h.8a2.4 2.4 0 0 1 2.4 2.4v6.4a2.4 2.4 0 0 1-2.4 2.4h-.8a2.4 2.4 0 0 1-2.4-2.4v-6.4A2.4 2.4 0 0 1 6.1 20Zm-.8 8.8a.8.8 0 0 0 .8.8h.8a.8.8 0 0 0 .8-.8v-6.4a.8.8 0 0 0-.8-.8h-.8a.8.8 0 0 0-.8.8v6.4Z" />
                            <path d="M8.5 7.2H6.9v1.6h1.6V7.2Zm3.2 0h-1.6v1.6h1.6V7.2Zm3.2 0h-1.6v1.6h1.6V7.2Zm2.4 27.6h.02a10.405 10.405 0 0 1 10.38-10h8c.324 0 .646.018.968.052A5.6 5.6 0 0 1 41.3 22.4a.8.8 0 0 1 .8.8v3.814A10.415 10.415 0 0 1 45.585 32H47.7a.8.8 0 0 1 .8.8v6.4a.8.8 0 0 1-.8.8h-2.782a10.349 10.349 0 0 1-3.617 3.954V47.2a.8.8 0 0 1-.8.8h-4.8a.8.8 0 0 1-.8-.8v-1.6h-6.4v1.6a.8.8 0 0 1-.8.8h-4.8a.8.8 0 0 1-.8-.8v-3.246a10.437 10.437 0 0 1-4.8-8.754c0-.09.01-.177.013-.267 0-.045-.014-.087-.014-.133Zm5.6-1.2v1.2a2.8 2.8 0 0 1-2.8 2.8 2.759 2.759 0 0 1-.904-.16 8.85 8.85 0 0 0 4.104 5.373.8.8 0 0 1 .4.692V46.4h3.2v-1.6a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8v1.6h3.2v-2.895a.8.8 0 0 1 .4-.692 8.777 8.777 0 0 0 3.593-3.948.8.8 0 0 1 .727-.465h2.48v-4.8h-1.915a.8.8 0 0 1-.774-.6 8.81 8.81 0 0 0-3.378-4.938.8.8 0 0 1-.332-.649V24.08a4.002 4.002 0 0 0-2.72 2.011.8.8 0 0 1-.817.41A8.817 8.817 0 0 0 35.7 26.4h-8a8.8 8.8 0 0 0-8.786 8.534A1.2 1.2 0 0 0 21.3 34.8v-1.2h1.6Z" />
                            <path d="M38.901 30.4a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Zm0 3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm-4-4.8h-6.4v1.6h6.4v-1.6Zm-2.4-17.6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 6.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm9.6-11.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 6.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM31.714 3.867a.8.8 0 0 1 .655-.656A3.095 3.095 0 0 0 34.912.67a.8.8 0 0 1 1.578 0 3.094 3.094 0 0 0 2.543 2.542.8.8 0 0 1 0 1.578A3.094 3.094 0 0 0 36.49 7.33a.8.8 0 0 1-1.578 0A3.095 3.095 0 0 0 32.37 4.79a.8.8 0 0 1-.655-.922ZM35.7 5.142c.312-.444.699-.83 1.142-1.142a4.696 4.696 0 0 1-1.142-1.142c-.312.444-.698.83-1.142 1.142.444.312.83.698 1.142 1.142Z" />
                        </g>
                    </svg>
                    <hr className="h-[75%] w-[1px] border border-black" />
                    <div className="grid gap-2">
                        <span className="text-left">Learn how much you save over </span>
                        <span className="flex items-center gap-4">
                            <span className="font-mulishBold text-[3rem] leading-[3.6rem]">30 Years</span>
                            <AiOutlineArrowRight className="h-[2.4rem] w-[2.4rem] fill-black" />
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ResultColumn;
