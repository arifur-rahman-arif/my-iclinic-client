import { BulletPoint } from '@/components/page-sections';
import { ReactNode } from 'react';

interface FinanceListInterface {
    list: ReactNode[];
}

/**
 * Finance list component
 *
 * @returns {*}  {JSX.Element}
 */
const FinanceList = ({ list }: FinanceListInterface): JSX.Element => {
    return (
        <ul className="grid w-full gap-6 md:max-w-[43rem]">
            {list.map((item, index) => (
                <li className="flex items-start justify-start gap-6" key={index}>
                    <BulletPoint />
                    <h5 className="normal-case">{item}</h5>
                </li>
            ))}
        </ul>
    );
};

export default FinanceList;
