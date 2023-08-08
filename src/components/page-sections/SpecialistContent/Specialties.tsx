import styles from '@/page-sections/SuitabilityCheck/AnswerPanel/styles/PanelReveal.module.scss';
import Image from 'next/image';

export interface SpecialistData {
    name: string;
    specialities: string[];
}

interface SpecialtiesProps {
    specialties: SpecialistData[];
}

/**
 * Specialties component
 *
 * @param {SpecialistData[]} specialties
 * @returns {JSX.Element}
 * @constructor
 */
const Specialties = ({ specialties }: SpecialtiesProps): JSX.Element => {
    return (
        <div className={`${styles.styles} grid gap-12 md:px-12`}>
            {specialties &&
                specialties.map((specialty, index) => (
                    <div className="grid gap-6" key={index}>
                        <span className="block font-mulishBold text-[2rem] leading-[2.8rem]">
                            {specialty.name || ''}
                        </span>

                        {specialty.specialities.length ? (
                            <ul className="ml-8 grid gap-3">
                                {specialty?.specialities?.map((item, i) => (
                                    <li className="grid grid-cols-[auto_1fr] items-start gap-3" key={i}>
                                        <Image
                                            src="/images/icons/icon-arrow-right.svg"
                                            alt="Arrow"
                                            width={10}
                                            height={10}
                                            className="mt-2.5 h-5 w-5"
                                        />
                                        <span className="text-[#384043]">{item || ''}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                ))}
        </div>
    );
};

export default Specialties;
