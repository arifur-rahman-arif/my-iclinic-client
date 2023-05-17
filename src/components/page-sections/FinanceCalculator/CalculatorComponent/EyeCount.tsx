import { RadioButton } from '@/components/Inputs/RadioButton';
import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { Dispatch, SetStateAction, useContext } from 'react';
import styles from './EyeCount.module.scss';

interface EyeCountProps {
    index: number;
}

export const EyeCount = ({ index }: EyeCountProps) => {
    const ctx: CalculatorContext = useContext(AppCtx);

    const slug = ctx.treatmentList[index].name
        .trim() // Remove leading and trailing space
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Convert spaces to dashes
        .toLowerCase(); // Convert to lowercase

    return (
        <div className="mt-12 grid w-full gap-12 md:mt-24">
            <div className="grid w-full gap-12">
                <div className="flex items-center justify-center gap-10">
                    <span className="h-[0.1rem] max-w-[14.7rem] flex-grow bg-[#C5CED2]"></span>
                    <span className="text-[1.6rem] leading-[2.4rem] text-[#35444B]">One eye or both eyes?</span>
                    <span className="h-[0.1rem] max-w-[14.7rem] flex-grow bg-[#C5CED2]"></span>
                </div>
            </div>

            <div className={`${styles.styles} flex flex-wrap items-center justify-center gap-8 sm:gap-12`}>
                <RadioButton
                    label="One Eye"
                    id={`one-eye-${index}`}
                    value={ctx.treatmentList[index].eyeCount}
                    name={`eye-count-${index}`}
                    checked={ctx.treatmentList[index].eyeCount === 1}
                    onChange={() => {
                        ctx.setEyeCount(index, 1);
                    }}
                    className={`rounded-primary px-8 py-8 ${
                        ctx.treatmentList[index].eyeCount === 1 ? 'bg-brand' : 'bg-white shadow-shadow1'
                    }`}
                    labelClassName={`${ctx.treatmentList[index].eyeCount === 1 ? 'text-white' : 'text-heading'}`}
                />

                <RadioButton
                    label="Both Eyes"
                    id={`both-eyes-${index}`}
                    value={ctx.treatmentList[index].eyeCount}
                    name={`eye-count-${index}`}
                    checked={ctx.treatmentList[index].eyeCount === 2}
                    onChange={() => {
                        ctx.setEyeCount(index, 2);
                    }}
                    className={`rounded-primary px-8 py-8 ${
                        ctx.treatmentList[index].eyeCount === 2 ? 'bg-brand' : 'bg-white shadow-shadow1'
                    }`}
                    labelClassName={`${ctx.treatmentList[index].eyeCount === 2 ? 'text-white' : 'text-heading'}`}
                />
            </div>
        </div>
    );
};
