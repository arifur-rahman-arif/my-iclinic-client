import { BreadCrumb } from '@/components/Breadcrumb';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getCategories, getPageData, getPosts, getPostsPerPageValue } from '@/lib';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { BlogList } from '@/page-sections/index';
import { WpPageResponseInterface } from '@/types';
import process from 'process';

interface BlogPageProps {
    posts: {
        posts: GeneralBlogInterface[];
        totalPosts: number;
    };
    categories: BlogCategoriesInterface[];
    postsPerPageValue: number;
    currentPage: number;
    seo: any;
    yoastJson: any;
}

/**
 * Blog page
 *
 * * Url: /blog
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Category({
    posts,
    categories,
    postsPerPageValue,
    currentPage,
    seo,
    yoastJson
}: BlogPageProps): JSX.Element {
    return (
        <Page title="Articles" description="List of all blogs" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb className="md:!flex" />

            {posts?.posts?.length > 0 ? (
                <BlogList
                    blogList={posts?.posts}
                    totalPostsCount={posts?.totalPosts}
                    categoryList={categories}
                    postsPerPageValue={postsPerPageValue}
                    currentPage={currentPage}
                />
            ) : (
                <Section>
                    <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                        <div className="col-span-2 flex flex-wrap items-center justify-between gap-12">
                            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
                                <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                                <h1 className="w-full font-latoBold normal-case text-heading md:max-w-[55rem]">
                                    Latest articles
                                </h1>
                            </div>
                        </div>

                        <span className="col-span-2 justify-self-center rounded-primary bg-brandLight p-8 font-mulishBold text-[2rem] shadow-shadow1">
                            No articles published yet
                        </span>
                    </Container>
                </Section>
            )}
        </Page>
    );
}

/**
 * Fetch all the post slug and defines static page paths
 *
 */
// export async function getStaticPaths() {
//     const categories: BlogCategoriesInterface[] = await getCategories();
//
//     const paths = categories.map((category) => ({ params: { slug: category.slug } }));
//
//     return {
//         paths,
//         fallback: false
//     };
// }

// eslint-disable-next-line valid-jsdoc
/**
 * Fetch the data from WordPress database
 *
 * @params ctx {any}
 * @returns any
 */
export async function getServerSideProps(ctx: any) {
    try {
        // For static generated pages of category
        // const { params } = ctx; // Destructure params from context
        // const category = params.slug; // Extract the slug from params

        // For server side generated pages of category
        const category = ctx.query.slug; // Extract the slug from params

        const posts: Array<GeneralBlogInterface> = await getPosts(1, category);
        const categories: BlogCategoriesInterface[] = await getCategories();
        const postsPerPageValue: number = await getPostsPerPageValue();

        const data: WpPageResponseInterface<any> = await getPageData({
            url: `${process.env.WP_REST_URL}/categories?slug=${category}&_fields=yoast_head,yoast_head_json`
        });

        return {
            props: {
                posts,
                categories,
                postsPerPageValue,
                currentPage: 1,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            }
            // revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
