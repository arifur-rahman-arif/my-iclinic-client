import { getData } from '@/utils/apiHelpers';

/**
 * Get all the posts from WordPress database
 */
export const getLatestPosts = async (): Promise<any> => {
    const postsApiResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/posts?_fields=title,slug,date,featured_media`
    });

    if (postsApiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + postsApiResponse.statusText);
    }

    const posts: Array<{
        date: string;
        slug: string;
        title: {
            rendered: string;
        };
        featured_media: number;
    }> = await postsApiResponse.json();

    const postPromises = posts.map(async (post) => {
        const imageUrlApiResponse: Response = await getData({
            url: `${process.env.WP_REST_URL}/media/${post.featured_media}?_fields=source_url`
        });

        const imageUrl: any = await imageUrlApiResponse.json();

        return {
            title: post?.title?.rendered || '',
            image: imageUrl?.source_url || '',
            backgroundImage: '',
            postingDate: post?.date || '',
            url: `/articles/${post?.slug || ''}`
        };
    });

    return Promise.all(postPromises);
};
