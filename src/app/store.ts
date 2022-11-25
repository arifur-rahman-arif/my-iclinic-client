import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/features/cart/cartSlice';

/**
 * Redux make store function to create the store
 * @returns any
 */
export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartSlice
        }
    });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export default store;
