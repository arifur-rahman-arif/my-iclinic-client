import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const downloadFormApi = createApi({
    reducerPath: 'downloadFormApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_REST_URL}` }),
    // BaseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/` }),
    endpoints: (builder) => ({
        downloadFormSubmission: builder.mutation({
            query: (body) => {
                return {
                    url: `/submit-download-form`,
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
export const { useDownloadFormSubmissionMutation } = downloadFormApi;
