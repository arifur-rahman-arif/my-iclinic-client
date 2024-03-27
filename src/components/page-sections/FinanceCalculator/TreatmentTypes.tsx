import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { useContext } from 'react';
import styles from './styles/Treatments.module.scss';

/**
 * Treatment types
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TreatmentTypes = (): JSX.Element => {
    const ctx: CalculatorContext = useContext(AppCtx);

    /**
     * Treatment calculator tab activation function
     *
     * @param {number} activeIndex
     */
    const activateTreatmentCalculator = ({ activeIndex }: { activeIndex: number }) => {
        ctx.setTreatmentList((currentTreatmentList) => {
            return currentTreatmentList.map((treatment, index) => {
                treatment.active = index === activeIndex;
                return treatment;
            });
        });
    };

    return (
        <div
            className={`mt-12 flex flex-col items-center justify-start gap-8 rounded-[0.5rem] sm:flex-row sm:gap-0 md:justify-center md:overflow-hidden md:shadow-shadow1 ${styles.styles}`}
        >
            {ctx.treatmentList?.map((treatment, index) => (
                <button
                    key={index}
                    className={`relative grid place-items-center whitespace-nowrap px-8 font-mulishExtraBold text-[1.6rem] leading-[1.8rem] shadow-shadow1 transition-all duration-500 md:shadow-none ${
                        treatment.active ? 'bg-[#0099FF] text-white' : 'text-heading'
                    } ${ctx.treatmentList.length <= 1 ? 'py-6 cursor-auto' : 'py-10 cursor-pointer'}`}
                    onClick={() => activateTreatmentCalculator({ activeIndex: index })}
                >
                    {treatment.name}
                </button>
            ))}
        </div>
    );
};

export default TreatmentTypes;
