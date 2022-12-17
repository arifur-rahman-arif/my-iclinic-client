import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const requestCallbackApi = createApi({
    reducerPath: 'requestCallbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_REST_URL}` }),
    endpoints: (builder) => ({
        requestCallbackSubmit: builder.mutation({
            query: (body) => {
                return {
                    url: `/request-callback`,
                    method: 'POST',
                    body,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WP_JWT_TOKEN}`
                    }
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRequestCallbackSubmitMutation } = requestCallbackApi;
