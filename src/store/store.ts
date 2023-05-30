import { alertSlice } from '@/features/index';
import { abandonedCallbackApi } from '@/services/abandoned-cb';
import { businessFormApi } from '@/services/businessInfo';

import { downloadFormApi } from '@/services/downloadForm';
import { navMenuApi } from '@/services/navMenuData';
import { requestCallbackApi } from '@/services/requestCallback';
import { reviewsApi } from '@/services/reviews';
import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/**
 * Redux make store function to create the store
 * @returns any
 */
export const makeStore = () => {
    return configureStore({
        reducer: {
            alert: alertSlice,
            // API Reducer's
            [downloadFormApi.reducerPath]: downloadFormApi.reducer,
            [requestCallbackApi.reducerPath]: requestCallbackApi.reducer,
            [abandonedCallbackApi.reducerPath]: abandonedCallbackApi.reducer,
            [reviewsApi.reducerPath]: reviewsApi.reducer,
            [navMenuApi.reducerPath]: navMenuApi.reducer,
            [businessFormApi.reducerPath]: businessFormApi.reducer
        },
        middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                reviewsApi.middleware,
                downloadFormApi.middleware,
                requestCallbackApi.middleware,
                abandonedCallbackApi.middleware,
                navMenuApi.middleware,
                businessFormApi.middleware
            )
    });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppState = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export default store;
