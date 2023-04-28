import { BulletPoint } from '@/components/page-sections';
import { ReactNode } from 'react';

interface BulletListInterface {
    list: ReactNode[];
    defaultClassName?: string;
    className?: string;
    bold?: boolean;
    listItemClassName?: string;
    listClassName?: string;
    bulletPoint?: ReactNode;
}

/**
 * Bullet list component
 *
 * @param {BulletListInterface} { list }
 * @returns {*}  {JSX.Element}
 */
const BulletList = ({
    list,
    bold = false,
    defaultClassName = 'ml-8 grid gap-6 sm:ml-12',
    className,
    listItemClassName,
    listClassName,
    bulletPoint
}: BulletListInterface): JSX.Element => {
    return (
        <ul className={`${defaultClassName} ${className}`}>
            {list.map((item, index) => (
                <li className={`grid grid-cols-[auto_1fr] gap-4 ${listClassName}`} key={index}>
                    {bulletPoint ? bulletPoint : <BulletPoint />}
                    {bold ? (
                        <div className={listItemClassName}>
                            <strong className={listItemClassName}>{item}</strong>
                        </div>
                    ) : (
                        <div className={listItemClassName}>{item}</div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
