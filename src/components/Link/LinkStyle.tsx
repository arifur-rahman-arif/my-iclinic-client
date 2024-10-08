import { LinkText } from '@/components/Link';
import { MouseEvent, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkStyleInterface {
    url?: string;
    children: ReactNode;
    excludeAnimation?: boolean;
    className?: string;
    onClick?: (e: MouseEvent) => void;
    title?: string;
}

/**
 * Link style component
 *
 * @param {LinkStyleInterface} { url = '#', text }
 * @returns {*}  {JSX.Element}
 */
const LinkStyle = ({ url, children, excludeAnimation, className, onClick, title }: LinkStyleInterface): JSX.Element => {
    return (
        <LinkText
            href={url || '#'}
            indicatorColor="bg-[#09F]"
            className={twMerge('font-mulishBold font-extrabold text-[#09F]', className)}
            excludeAnimation={excludeAnimation}
            onClick={onClick}
            title={title}
        >
            {children}
        </LinkText>
    );
};

export default LinkStyle;
