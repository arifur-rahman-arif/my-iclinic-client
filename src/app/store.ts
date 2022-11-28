import navbarSlice from '@/features/navbar/navbarSlice';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Redux make store function to create the store
 * @returns any
 */
export const makeStore = () => {
    return configureStore({
        reducer: {
            navbar: navbarSlice
        }
    });
};

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
export default store;
