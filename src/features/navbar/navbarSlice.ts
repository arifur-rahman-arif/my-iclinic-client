import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarPosition {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const anchorPosition: Anchor = 'left';

// Interface SubmenuStateInterface {
//    path: string;
//    open: boolean;
// }

export interface NavbarInterface {
    subMenuState: {
        [key: string]: any;
    };
    navbarPositionState: NavbarPosition;
}

const initialState: NavbarInterface = {
    subMenuState: {
        '/dashboard/products': false,
        '/dashboard/coupons': false
    },
    navbarPositionState: {
        top: false,
        left: true,
        bottom: false,
        right: false
    }
};

const navbarSlice = createSlice({
    name: 'navbarSlice',
    initialState,
    reducers: {
        toggleNavbar: (state: NavbarInterface, action: PayloadAction<boolean>) => {
            state.navbarPositionState[anchorPosition] = action.payload;
        }
    }
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
