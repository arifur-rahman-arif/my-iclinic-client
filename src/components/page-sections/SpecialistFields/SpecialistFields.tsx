import IconArrow from '@/icons/icon-arrow-right.svg';
import { BulletList } from '@/page-sections/index';
import Image from 'next/image';
import { ReactNode } from 'react';

interface SpecialistFieldsInterface {
    title: string;
    fieldList?: ReactNode[];
}

/**
 * Specialists fields component
 *
 * @param {string} title
 * @param {React.ReactNode[]} fieldList
 * @returns {JSX.Element}
 * @constructor
 */
const SpecialistFields = ({ title, fieldList }: SpecialistFieldsInterface): JSX.Element => {
    return (
        <div className="ml-6">
            <span className="text-[2rem] leading-[2.8rem] font-mulishBold block">{title}</span>
            {fieldList && (
                <BulletList
                    className="!gap-2 mt-6 !ml-8"
                    list={fieldList}
                    listItemClassName="md:text-[1.7rem] font-mulishMedium"
                    bulletPoint={
                        <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                    }
                />
            )}
        </div>
    );
};

export default SpecialistFields;
