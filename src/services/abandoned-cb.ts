import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const abandonedCallbackApi = createApi({
    reducerPath: 'abandonedCallbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }),
    endpoints: (builder: any) => ({
        abandonedCallback: builder.mutation({
            query: (body: any) => {
                return {
                    url: `/abandoned-callback`,
                    method: 'POST',
                    body
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAbandonedCallbackMutation } = abandonedCallbackApi;
