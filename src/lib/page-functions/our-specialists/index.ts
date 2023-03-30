import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import { getPageData } from '@/lib';
import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';

export interface SpecialistPostsInterface extends ConsultantCardInterface {
    slug: string;
}

/**
 * Get all the posts from WordPress database
 */
export const getSpecialistsPost = async (): Promise<SpecialistPostsInterface[]> => {
    const postsApiResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/specialist?_fields=title,slug,featured_media,acf&per_page=50&orderby=date&order=asc`
    });

    if (postsApiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + postsApiResponse.statusText);
    }

    const posts: Array<{
        title: {
            rendered: string;
        };
        featured_media: number;
        slug: string;
        acf: {
            specialist_data: {
                degree: string;
                title: string;
            };
        };
    }> = await postsApiResponse.json();

    const postPromises = posts.map(async (post) => {
        const imageUrlApiResponse: Response = await getData({
            url: `${process.env.WP_REST_URL}/media/${post.featured_media}?_fields=source_url`
        });

        const imageUrl: any = await imageUrlApiResponse.json();

        return {
            name: post?.title?.rendered || '',
            image: imageUrl?.source_url || '',
            degree: post.acf.specialist_data.degree || '',
            title: post.acf.specialist_data.title || '',
            url: `/our-specialists/${post.slug}`,
            slug: post.slug
        };
    });

    return Promise.all(postPromises as unknown as SpecialistPostsInterface[]);
};

/**
 * Get single specialists post
 *
 * @param {string} slug
 * @returns {Promise<SpecialistPostsInterface[]>}
 */
export const getSpecialistPost = async (slug: string): Promise<any> => {
    const data: WpPageResponseInterface<any> = await getPageData({
        url: `${process.env.WP_REST_URL}/specialist?slug=${slug}&_fields=title,content,featured_media,acf,yoast_head,yoast_head_json`
    });

    const imageUrlApiResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/media/${data.featured_media}?_fields=source_url`
    });

    const imageUrl: any = await imageUrlApiResponse.json();

    return {
        name: data?.title?.rendered || '',
        image: imageUrl?.source_url || '',
        degree: data.acf.specialist_data.degree || '',
        title: data.acf.specialist_data.title || '',
        content: data.content?.rendered || '',
        yoast_head: data.yoast_head || '',
        yoast_head_json: data.yoast_head_json || ''
    };
};
