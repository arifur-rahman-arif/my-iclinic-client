import { HorizontalSliderInterface } from '@/components/slider/horizontal-slider/HorizontalSlider';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `/api` }), // Uncomment for brokenness repro ur welcome :)
    endpoints: (builder) => ({
        getReviews: builder.query<{ data: { data: HorizontalSliderInterface[] } }, string>({
            query: (args) => `reviews/${args}`
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReviewsQuery } = reviewsApi;
