import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { getPosts } from '@/lib';
import { getServerSideSitemapLegacy } from 'next-sitemap';

/**
 * Get the articles post
 *
 * @param {any} ctx
 * @returns {Promise<Response>}
 */
export const getServerSideProps = async (ctx: any) => {
    const posts: Array<GeneralBlogInterface> = await getPosts();

    console.log(posts);

    const fields = posts?.map((post) => ({
        loc: `${process.env.SITE_URL}/articles/${post.slug}`,
        lastmod: new Date().toISOString()
    }));

    return getServerSideSitemapLegacy(ctx, fields);
};

// eslint-disable-next-line require-jsdoc
export default function Sitemap() {}
