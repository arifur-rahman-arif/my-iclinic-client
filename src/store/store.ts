import { alertSlice, navbarSlice } from '@/features/index';

import { downloadFormApi } from '@/services/downloadForm';
import { requestCallbackApi } from '@/services/requestCallback';
import { reviewsApi } from '@/services/reviews';
import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

/**
 * Redux make store function to create the store
 * @returns any
 */
export const makeStore = () => {
    return configureStore({
        reducer: {
            navbar: navbarSlice,
            alert: alertSlice,
            // API Reducer's
            [downloadFormApi.reducerPath]: downloadFormApi.reducer,
            [requestCallbackApi.reducerPath]: requestCallbackApi.reducer,
            [reviewsApi.reducerPath]: reviewsApi.reducer
        },
        middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                reviewsApi.middleware,
                downloadFormApi.middleware,
                requestCallbackApi.middleware
            )
    });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export default store;
