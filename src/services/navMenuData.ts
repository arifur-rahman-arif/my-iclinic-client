// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const navMenuApi = createApi({
    reducerPath: 'navMenuApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }), // Uncomment for brokenness repro ur welcome :)
    endpoints: (builder) => ({
        getMenuData: builder.query({
            // @ts-ignore
            query: () => `/nav-menu`
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMenuDataQuery } = navMenuApi;
