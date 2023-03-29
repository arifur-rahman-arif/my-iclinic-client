import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const businessFormApi = createApi({
    reducerPath: 'businessFormApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }),
    endpoints: (builder: any) => ({
        businessInfoSubmit: builder.mutation({
            query: (body: any) => {
                return {
                    url: `/business-form`,
                    method: 'POST',
                    body
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useBusinessInfoSubmitMutation } = businessFormApi;
