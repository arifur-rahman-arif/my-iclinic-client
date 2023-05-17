import { EyeCount } from '@/page-sections/FinanceCalculator/CalculatorComponent/EyeCount';
import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import useFinanceHook from '@/page-sections/FinanceCalculator/hooks/useFinanceHook';
import PercentageCheckBox from '@/page-sections/FinanceCalculator/PercentageCheckBox';
import TreatmentTypes from '@/page-sections/FinanceCalculator/TreatmentTypes';
import Image from 'next/image';
import { useContext } from 'react';

interface CalculatorComponentProps {
    index: number;
}

const CalculatorComponent = ({ index }: CalculatorComponentProps) => {
    const ctx: CalculatorContext = useContext(AppCtx);

    return (
        <div className="grid place-items-center overflow-hidden rounded-primary bg-white px-4 pb-12 shadow-shadow1 xs:px-8 sm:px-12">
            <div className="flex w-[calc(100%_+_6rem)] flex-wrap items-center justify-center gap-4 justify-self-center px-8 py-14 shadow-md md:gap-12">
                <span className="font-latoBold text-heading sm:text-[2rem] sm:leading-[2.4rem] md:text-[2.4rem] md:leading-[3.2rem]">
                    Finance options
                </span>
                <span className="h-[2.4rem] w-[0.2rem] bg-[#C5CED2]"></span>
                <span className="font-latoBold text-heading sm:text-[2rem] sm:leading-[2.4rem] md:text-[2.4rem] md:leading-[3.2rem]">
                    Laser eye surgery
                </span>
            </div>

            <p className="mt-12 font-mulishMedium text-[1.6rem] leading-[2.4rem] text-[#35444B] md:mt-24">
                Choose which surgery you are looking to get
            </p>

            <TreatmentTypes />

            <EyeCount {...{ index }} />

            <PercentageCheckBox {...{ index }} />
        </div>
    );
};

export default CalculatorComponent;
