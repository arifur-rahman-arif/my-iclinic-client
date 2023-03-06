import { LinkText } from '@/components/Link';
import { ReactNode } from 'react';

interface LinkStyleInterface {
    url?: string;
    children: ReactNode;
    excludeAnimation?: boolean;
}

/**
 * Link style component
 *
 * @param {LinkStyleInterface} { url = '#', text }
 * @returns {*}  {JSX.Element}
 */
const LinkStyle = ({ url, children, excludeAnimation }: LinkStyleInterface): JSX.Element => {
    return (
        <LinkText
            href={url || '#'}
            indicatorColor="bg-blue"
            className="font-mulishBold font-extrabold text-blue"
            excludeAnimation={excludeAnimation}
        >
            {children}
        </LinkText>
    );
};

export default LinkStyle;
