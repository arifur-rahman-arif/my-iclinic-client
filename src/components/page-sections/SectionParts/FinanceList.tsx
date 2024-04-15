import { BulletPoint } from '@/components/page-sections';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FinanceListInterface {
    list: ReactNode[];
    itemClass?: string;
    className?: string;
}

/**
 * Finance list component
 *
 * @returns {*}  {JSX.Element}
 */
const FinanceList = ({ list, itemClass, className }: FinanceListInterface): JSX.Element => {
    return (
        <ul className={twMerge('grid w-full gap-6', className)}>
            {list.map((item, index) => (
                <li className="flex items-start justify-start gap-6" key={index}>
                    <BulletPoint />
                    <span className={`${twMerge('font-mulishBold normal-case text-heading', itemClass)}`}>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default FinanceList;
