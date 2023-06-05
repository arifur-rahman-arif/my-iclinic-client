import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const suggestionRequestApi = createApi({
    reducerPath: 'suggestionRequestApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }),
    endpoints: (builder: any) => ({
        submitSuggestion: builder.mutation({
            query: (body: any) => {
                return {
                    url: `/suggestion-request`,
                    method: 'POST',
                    body
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSubmitSuggestionMutation } = suggestionRequestApi;
