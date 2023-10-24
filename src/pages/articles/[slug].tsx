import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { getCategories, getPageData, getPost } from '@/lib';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { BlogBody, Header } from '@/page-sections/SingleBlogComponents';
import { PostInterface, WpPageResponseInterface } from '@/types';
import usePostView from 'src/hooks/usePostView';

interface SinglePostProps {
    post: PostInterface;
    categories: BlogCategoriesInterface[];
    seo: any;
    yoastJson: any;
}

/**
 * Single blog page
 *
 * * Url: /blog
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SinglePost({ post, categories, seo, yoastJson }: SinglePostProps): JSX.Element {
    usePostView({ postID: post.ID });

    return (
        <Page title={post.title} description={post.title} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb className="md:!flex" />
            <Header
                image={{
                    src: post.image.src || '/images/section-images/placeholder-image.png',
                    width: 1235,
                    height: 438
                }}
                title={post.title || ''}
                readTime={post.readTime}
                views={post.views}
                categories={post.categories || []}
                author={post.author}
                publishedDate={post.publishedDate}
            />

            <BlogBody post={post} categories={categories} />
        </Page>
    );
}

// /**
//  * Fetch all the post slug and defines static page paths
//  *
//  * @returns {Promise<{props: {posts: any}}>}
//  */
// export async function getStaticPaths() {
//     const posts: Array<GeneralBlogInterface> = await getPosts();
//
//     // Map the slugs to the format required by `getStaticPaths`
//     const paths = posts.map((post) => ({ params: { slug: post.slug } }));
//
//     return {
//         paths,
//         fallback: false
//     };
// }
//
// interface SinglePageParamsInterface extends ParsedUrlQuery {
//     slug: string;
// }

/**
 * Fetch the data from WordPress database
 *
 * @param {any} ctx
 * @returns {Promise<{props: {}}>}
 */
export async function getServerSideProps(ctx: any): Promise<{ props: {} }> {
    try {
        const slug = ctx.query.slug;
        const post: PostInterface = await getPost(slug || '');

        const categories: BlogCategoriesInterface[] = await getCategories();

        const data: WpPageResponseInterface<any> = await getPageData({
            slug: ctx?.params?.slug,
            url: `${process.env.WP_REST_URL}/posts?slug=${ctx?.params?.slug}&_fields=yoast_head,yoast_head_json`
        });

        return {
            props: {
                post,
                categories,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            }
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
