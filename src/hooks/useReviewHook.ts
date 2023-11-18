import useSWR from 'swr';

/**
 * Get the trustpilot and google reviews
 * @returns {{isLoading: boolean, data: any}}
 */
const useReviewHook = () => {
    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const getReviews = async (url: string): Promise<any> => {
        const res = await fetch(url);
        return await res.json();
    };

    const { data, isLoading } = useSWR(
        `/api/social-reviews`,
        getReviews
    );

    return { data, isLoading };
};

export default useReviewHook;
