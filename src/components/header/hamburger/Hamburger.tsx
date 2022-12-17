import { NavbarInterface, anchorPosition, toggleNavbar } from '@/features/navbar/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@/store';

/**
 * Hamburger component
 *
 * @returns {*}
 */
const Hamburger = () => {
    const { navbarPositionState } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const dispatch = useDispatch();

    /**
     *  Toggle the mobile navigation menu
     */
    const handleClick = () => {
        dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
    };

    return (
        <div
            onClick={handleClick}
            className={`flex w-[3.3rem] cursor-pointer flex-col items-end justify-start gap-[0.5rem] justify-self-end transition-all duration-500 xl:hidden`}
        >
            <span className="h-[0.2rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-10 rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-10 rounded-primary bg-secondary transition-all duration-500"></span>
        </div>
    );
};

export default Hamburger;
