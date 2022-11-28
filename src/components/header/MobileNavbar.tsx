import { AppState } from '@/app/store';
import { Anchor, anchorPosition, NavbarInterface, toggleNavbar } from '@/features/navbar/navbarSlice';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

const Drawer = dynamic(() => import('@mui/material/Drawer'));

/**
 * Mobile navbar component
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = (): ReactElement => {
    const { navbarPositionState } = useSelector((state: AppState) => state.navbar as NavbarInterface);

    // eslint-disable-next-line valid-jsdoc
    /**
     * Toggle the navigation state to close it or open it
     *
     * @param {Anchor} anchor
     * @param {boolean} open
     * @returns {(event: (KeyboardEvent | MouseEvent)) => void}
     */
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        toggleNavbar(!navbarPositionState[anchorPosition]);
    };

    return (
        <Drawer
            anchor={anchorPosition}
            open={navbarPositionState[anchorPosition]}
            onClose={toggleDrawer(anchorPosition, false)}
            className="xl:hidden"
        >
            <h3>hello</h3>
        </Drawer>
    );
};

export default MobileNavbar;
