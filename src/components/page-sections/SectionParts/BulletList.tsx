import { BulletPoint } from '@/components/page-sections';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BulletListInterface {
    list: ReactNode[];
    defaultClassName?: string;
    className?: string;
    bold?: boolean;
    listItemClassName?: string;
    listClassName?: string;
    bulletPoint?: ReactNode;
    bulletClass?: string;
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
    defaultClassName = 'grid gap-6',
    className,
    listItemClassName,
    listClassName,
    bulletPoint,
    bulletClass
}: BulletListInterface): JSX.Element => {
    return (
        <ul className={twMerge(defaultClassName, className)}>
            {list.map((item, index) => (
                <li className={`grid grid-cols-[auto_1fr] gap-4 ${listClassName}`} key={index}>
                    {bulletPoint ? bulletPoint : <BulletPoint className={bulletClass} />}
                    {bold ? (
                        <div className={listItemClassName}>
                            <strong className={listItemClassName}>{item}</strong>
                        </div>
                    ) : (
                        <>
                            {typeof item === 'string' ? (
                                <div className={listItemClassName} dangerouslySetInnerHTML={{ __html: item }}></div>
                            ) : (
                                <div className={listItemClassName}>{item}</div>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
