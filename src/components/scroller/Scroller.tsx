import 'simplebar-react/dist/simplebar.min.css';

import { ReactNode } from 'react';
import SimpleBar from 'simplebar-react';

interface ScrollerInterface {
    maxWidth?: string;
    maxHeight?: string;
    children: ReactNode;
}

/**
 * Scroller component to have inner section scroll
 *
 * @param {ScrollerInterface} { maxWidth = '100%', maxHeight = '100%', children }
 * @returns {*}  {JSX.Element}
 */
const Scroller = ({ maxWidth = '100%', maxHeight = '100%', children }: ScrollerInterface): JSX.Element => {
    return (
        <>
            <SimpleBar
                style={{ maxHeight: maxHeight, maxWidth: maxWidth, width: '100%', height: '100%' }}
                clickOnTrack={false}
                timeout={500}
            >
                {children}
            </SimpleBar>
        </>
    );
};

export default Scroller;
