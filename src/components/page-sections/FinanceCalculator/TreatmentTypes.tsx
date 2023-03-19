import { TreatmentInterface } from './Treatment';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface TreatmentTypesPropsInterface {
    treatmentList: TreatmentInterface[];
    setTreatmentList: Dispatch<SetStateAction<TreatmentInterface[]>>;
}

/**
 * Treatment types
 *
 * @param {[]} treatmentList
 * @param {Dispatch<SetStateAction<TreatmentInterface[]>>} setTreatmentList
 * @returns {JSX.Element}
 * @constructor
 */
const TreatmentTypes = ({ treatmentList, setTreatmentList }: TreatmentTypesPropsInterface): JSX.Element => {
    /**
     * Treatment calculator tab activation function
     *
     * @param {number} activeIndex
     */
    const activateTreatmentCalculator = ({ activeIndex }: { activeIndex: number }) => {
        setTreatmentList((currentTreatmentList) => {
            return currentTreatmentList.map((treatment, index) => {
                treatment.active = index === activeIndex;
                return treatment;
            });
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {treatmentList.map((treatment, index) => (
                <button
                    key={index}
                    className="flex items-center justify-center gap-4 rounded-primary bg-darkBlue p-6"
                    onClick={() => activateTreatmentCalculator({ activeIndex: index })}
                >
                    {treatment.active ? (
                        <Image
                            src="/images/icons/icon-check-white.svg"
                            width={26}
                            height={26}
                            alt=""
                            className="h-8 w-8 translate-y-[0.1rem] md:h-[2.6rem] md:w-[2.6rem]"
                        />
                    ) : (
                        <Image
                            src="/images/icons/icon-circle-white.svg"
                            width={26}
                            height={26}
                            alt=""
                            className="h-8 w-8 opacity-70 md:h-[2.6rem] md:w-[2.6rem]"
                        />
                    )}
                    <span
                        className={`font-mulishBold capitalize text-white transition-all duration-500 md:text-[2rem] md:leading-[2.8rem] ${
                            !treatment.active && 'opacity-70'
                        }`}
                    >
                        {treatment.name}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default TreatmentTypes;
