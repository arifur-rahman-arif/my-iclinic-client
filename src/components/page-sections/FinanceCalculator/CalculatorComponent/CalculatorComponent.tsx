import { EyeCount } from '@/page-sections/FinanceCalculator/CalculatorComponent/EyeCount';
import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import PercentageCheckBox from '@/page-sections/FinanceCalculator/PercentageCheckBox';
import TreatmentTypes from '@/page-sections/FinanceCalculator/TreatmentTypes';
import { useContext } from 'react';

interface CalculatorComponentProps {
    index: number;
}

/**
 * The calculator component
 *
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const CalculatorComponent = ({ index }: CalculatorComponentProps) => {
    const ctx: CalculatorContext = useContext(AppCtx);

    return (
        <div className="grid place-items-center content-start overflow-hidden rounded-primary bg-white px-4 pb-12 shadow-shadow1 xs:px-8 sm:px-12">
            <div className="flex w-[calc(100%_+_6rem)] flex-wrap items-center justify-center gap-4 justify-self-center px-8 py-14 shadow-md md:gap-12">
                <span className="font-latoBold text-heading sm:text-[2rem] sm:leading-[2.4rem] md:text-[2.4rem] md:leading-[3.2rem]">
                    Finance options
                </span>
                <span className="h-[2.4rem] w-[0.2rem] bg-[#C5CED2]"></span>
                <span className="font-latoBold text-heading sm:text-[2rem] sm:leading-[2.4rem] md:text-[2.4rem] md:leading-[3.2rem]">
                    {ctx.treatmentList[index].group_name}
                </span>
            </div>

            <p className="mt-12 font-mulishMedium text-[1.6rem] leading-[2.4rem] text-[#35444B] md:mt-24">
                {ctx.treatmentList[index].group_name == 'Laser eye surgery' &&
                    'Choose which surgery you are looking to get'}
                {ctx.treatmentList[index].group_name == 'Cataract' &&
                    'You are checking cataract surgery finance option '}
                {ctx.treatmentList[index].group_name == 'ICL Surgery' && 'You are checking ICL surgery finance option'}
            </p>

            <TreatmentTypes />

            <EyeCount {...{ index }} />

            <PercentageCheckBox {...{ index }} />
        </div>
    );
};

export default CalculatorComponent;
