import { LinkText } from '@/components/Link';
import { MouseEvent, ReactNode } from 'react';

interface LinkStyleInterface {
    url?: string;
    children: ReactNode;
    excludeAnimation?: boolean;
    className?: string;
    onClick?: (e: MouseEvent) => void;
}

/**
 * Link style component
 *
 * @param {LinkStyleInterface} { url = '#', text }
 * @returns {*}  {JSX.Element}
 */
const LinkStyle = ({ url, children, excludeAnimation, className, onClick }: LinkStyleInterface): JSX.Element => {
    return (
        <LinkText
            href={url || '#'}
            indicatorColor="bg-blue"
            className={`font-mulishBold font-extrabold text-blue ${className}`}
            excludeAnimation={excludeAnimation}
            onClick={onClick}
        >
            {children}
        </LinkText>
    );
};

export default LinkStyle;
