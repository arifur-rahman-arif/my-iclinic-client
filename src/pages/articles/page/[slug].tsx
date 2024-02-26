import { BreadCrumb } from '@/components/Breadcrumb';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getCategories, getPageData, getPosts, getPostsPerPageValue } from '@/lib';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { BlogList } from '@/page-sections/index';
import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';

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
export default function Articles({
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
                            <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-10">
                                <span className="h-full w-[0.5rem] bg-yellow"></span>
                                <h1 className="w-full normal-case md:max-w-[55rem]">
                                    <strong className="font-latoExtraBold">Latest</strong>{' '}
                                    <span className="font-latoLight normal-case">articles</span>
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
export async function getStaticPaths() {
    const apiResponse = await getData({
        url: `${process.env.WP_REST_URL}/posts?per_page=1&_fields=id`
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
    }

    const postsPerPageValue = await getPostsPerPageValue();

    const { headers } = apiResponse;

    const headerObject = Object.fromEntries(headers.entries());

    const totalPosts = headerObject['x-wp-total'];
    const totalPage = Math.ceil(Number(totalPosts) / postsPerPageValue);

    const paths = [];
    for (let i = 1; i <= totalPage; i++) {
        paths.push({ params: { slug: i.toString() } });
    }

    return {
        paths,
        fallback: false
    };
}

// eslint-disable-next-line valid-jsdoc
/**
 * Fetch the data from WordPress database
 *
 * @params ctx {any}
 * @returns any
 */
export async function getStaticProps(ctx: any) {
    try {
        const { params } = ctx; // Destructure params from context
        const { slug } = params; // Extract the slug from params

        const posts: Array<GeneralBlogInterface> = await getPosts(slug);
        const categories: BlogCategoriesInterface[] = await getCategories();
        const postsPerPageValue: number = await getPostsPerPageValue();

        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'articles' });

        return {
            props: {
                posts,
                categories,
                postsPerPageValue,
                currentPage: slug,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
