/**
 * Stop component until wordpress setup is done
 *
 * @returns {JSX.Element}
 */
// const noComponent = () => {
//     return <></>;
// };
//
// export default noComponent;

import { BreadCrumb } from '@/components/Breadcrumb';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getCategories, getPageData, getPosts, getPostsPerPageValue } from '@/lib';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { BlogList } from '@/page-sections/index';
import { WpPageResponseInterface } from '@/types';

interface BlogPageProps {
    posts: GeneralBlogInterface[];
    categories: BlogCategoriesInterface[];
    postsPerPageValue: number;
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
export default function Blogs({ posts, categories, postsPerPageValue, seo, yoastJson }: BlogPageProps): JSX.Element {
    return (
        <Page title="Articles" description="List of all blogs" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb className="md:!flex" />

            {posts?.length > 0 ? (
                <BlogList blogList={posts} categoryList={categories} postsPerPageValue={postsPerPageValue} />
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
 * Fetch the data from WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const posts: Array<GeneralBlogInterface> = await getPosts();
        const categories: BlogCategoriesInterface[] = await getCategories();
        const postsPerPageValue: number = await getPostsPerPageValue();

        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'articles' });

        return {
            props: {
                posts,
                categories,
                postsPerPageValue,
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
