import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { TreatmentInterface } from './Treatment';
import styles from './Treatments.module.scss';

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
        <div className={`max-w-full overflow-x-auto pb-6 md:pb-0 ${styles.styles}`}>
            <div className="flex min-w-min items-center justify-start overflow-hidden rounded-primary pt-12 md:justify-center">
                {treatmentList.map((treatment, index) => (
                    <button
                        key={index}
                        className={`relative grid place-items-center whitespace-nowrap px-10 py-8 font-mulishBold text-[1.6rem] leading-[1.8rem] transition-all duration-500 ${
                            treatment.active ? 'bg-brand text-white' : 'bg-[#F0F1F1]'
                        }`}
                        onClick={() => activateTreatmentCalculator({ activeIndex: index })}
                    >
                        {treatment.active && (
                            <span className="absolute top-0 left-1/2 grid h-14 w-14 -translate-y-2/3 -translate-x-1/2 place-content-center rounded-full border border-white bg-brand">
                                <Image src="/images/icons/icon-check-white.svg" alt="" width={16} height={11} />
                            </span>
                        )}

                        {treatment.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TreatmentTypes;
