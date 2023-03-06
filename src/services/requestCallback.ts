import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const requestCallbackApi = createApi({
    reducerPath: 'requestCallbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }),
    endpoints: (builder: any) => ({
        requestCallbackSubmit: builder.mutation({
            query: (body: any) => {
                return {
                    url: `/request-callback`,
                    method: 'POST',
                    body
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRequestCallbackSubmitMutation } = requestCallbackApi;
