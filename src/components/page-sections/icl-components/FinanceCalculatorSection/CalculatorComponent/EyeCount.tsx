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
        <div className="grid w-full place-items-center gap-6 rounded-tr-radius2 rounded-tr-radius2 border border-[#EAECF0] p-8 lg:max-w-[36.4rem]">
            <div className={`${styles.styles} flex flex-wrap items-center justify-center gap-8 sm:gap-12`}>
                <button
                    title="One Eye"
                    onClick={() => {
                        ctx.setEyeCount(index, 1);
                    }}
                    className={`rounded-[0.5rem] px-10 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] transition-all duration-500 ${
                        ctx.treatmentList[index].eyeCount === 1 ? 'bg-[#003E79] text-white' : 'bg-[#005DAF4D]'
                    }`}
                >
                    One eye
                </button>

                <button
                    title="Both Eyes"
                    onClick={() => {
                        ctx.setEyeCount(index, 2);
                    }}
                    className={`rounded-[0.5rem] px-10 py-4 font-mulishBold text-[1.8rem] leading-[2.8rem] transition-all duration-500 ${
                        ctx.treatmentList[index].eyeCount === 2 ? 'bg-[#003E79] text-white' : 'bg-[#005DAF4D]'
                    }`}
                >
                    Both Eyes
                </button>
            </div>
        </div>
    );
};
