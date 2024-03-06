import { getData } from '@/utils/apiHelpers';
import { getServerSideSitemapLegacy } from 'next-sitemap';

/**
 * Get the articles post
 *
 * @param {any} ctx
 * @returns {Promise<Response>}
 */
export const getServerSideProps = async (ctx: any) => {
    const apiResponse: Response = await getData({
        url: `${process.env.CUSTOM_REST_URL}/get-posts?page=1&request-reference=sitemap`
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
    }

    const data = await apiResponse.json();
    const posts = data.data.data;

    const fields = posts?.map((post: { slug: any }) => ({
        loc: `${process.env.SITE_URL}/articles/${post.slug}`,
        lastmod: new Date().toISOString()
    }));

    return getServerSideSitemapLegacy(ctx, fields);
};

// eslint-disable-next-line require-jsdoc
export default function Sitemap() {}
