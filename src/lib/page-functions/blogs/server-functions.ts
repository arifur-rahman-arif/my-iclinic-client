// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { WPSettings } from '@/types';
import { getData } from '@/utils/apiHelpers';
import PostInterface from 'src/types/api/single-post';

/**
 * Get all the posts from WordPress database
 */
export const getPosts = async (): Promise<GeneralBlogInterface[]> => {
    const apiResponse: Response = await getData({
        url: `${process.env.CUSTOM_REST_URL}/get-posts`
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
    }

    const { data } = await apiResponse.json();
    return data.data;
};

/**
 * Get all the post categories from WordPress database
 */
export const getCategories = async (): Promise<BlogCategoriesInterface[]> => {
    const categoriesResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/categories?_fields=name,slug,count&per_page=100`
    });

    if (categoriesResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress Post categories. Error text: ' + categoriesResponse.statusText);
    }

    const categories: Array<{ name: string; slug: string; count: number }> = await categoriesResponse.json();

    return categories.filter((category) => category.count > 0);

    // return categories.map((category: any) => {
    //     return {
    //         name: category?.name,
    //         slug: category.slug
    //     };
    // });
};

/**
 * Get the 'posts_per_page' value from WordPress database
 *
 * @returns {Promise<number>}
 */
export const getPostsPerPageValue = async (): Promise<number> => {
    const settingsResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/settings`
    });

    if (settingsResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress Post categories. Error text: ' + settingsResponse.statusText);
    }

    const settings: WPSettings = await settingsResponse.json();

    return settings.posts_per_page;
};

/**
 * Get the post data by it slug name
 *
 * @param {string} slug
 * @returns {Promise<WpPageResponseInterface[]>}
 */
export const getPost = async (slug: string): Promise<PostInterface> => {
    const postResponse: Response = await getData({
        url: `${process.env.CUSTOM_REST_URL}/get-post?slug=${slug}`
    });

    if (postResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + postResponse.statusText);
    }

    const { data } = await postResponse.json();

    return data.data;
};
