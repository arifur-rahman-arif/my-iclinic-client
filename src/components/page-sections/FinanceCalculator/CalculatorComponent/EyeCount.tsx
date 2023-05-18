import { RadioButton } from '@/components/Inputs/RadioButton';
import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { useContext } from 'react';
import styles from './EyeCount.module.scss';

interface EyeCountProps {
    index: number;
}
/**
 * Renders a component that allows the user to select the number of eyes for a specific treatment.
 * The component displays two radio buttons for selecting either one eye or both eyes.
 *
 * @param {object} props - The component properties.
 * @param {number} props.index - The index of the treatment in the treatment list.
 * @returns {JSX.Element} The rendered component.
 */
export const EyeCount = ({ index }: EyeCountProps) => {
    const ctx: CalculatorContext = useContext(AppCtx);

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
