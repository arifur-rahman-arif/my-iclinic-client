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
        <div className="flex flex-wrap gap-8 sm:gap-12 items-center justify-center">
            {treatmentList.map((treatment, index) => (
                <button
                    key={index}
                    className="bg-darkBlue flex items-center justify-center gap-4 rounded-primary p-6"
                    onClick={() => activateTreatmentCalculator({ activeIndex: index })}
                >
                    {treatment.active ? (
                        <Image
                            src="/images/icons/icon-check-white.svg"
                            width={26}
                            height={26}
                            alt=""
                            className="md:w-[2.6rem] w-8 h-8 md:h-[2.6rem] translate-y-[0.1rem]"
                        />
                    ) : (
                        <Image
                            src="/images/icons/icon-circle-white.svg"
                            width={26}
                            height={26}
                            alt=""
                            className="md:w-[2.6rem] w-8 h-8 md:h-[2.6rem] opacity-70"
                        />
                    )}
                    <span
                        className={`md:text-[2rem] md:leading-[2.8rem] text-white font-mulishBold capitalize transition-all duration-500 ${
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
