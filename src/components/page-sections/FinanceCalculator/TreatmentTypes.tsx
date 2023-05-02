import { Button } from '@/components/Buttons';
import { Dispatch, SetStateAction } from 'react';
import { TreatmentInterface } from './Treatment';

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
        <div className="grid max-w-[93rem] justify-center gap-6 md:flex md:items-center md:justify-self-center">
            {treatmentList.map((treatment, index) => (
                <Button
                    key={index}
                    className={`flex-1 !uppercase ${
                        treatment.active ?
                            '!bg-[#063147] !text-white' :
                            '!bg-transparent !text-[#063147] hover:!bg-[#063147] hover:!text-white'
                    }`}
                    onClick={() => activateTreatmentCalculator({ activeIndex: index })}
                    text={treatment.name}
                    type="button"
                />
            ))}
        </div>
    );
};

export default TreatmentTypes;
