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
import { BlogList, TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { getCategories, getPosts, getPostsPerPageValue } from '@/lib';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';

interface BlogPagePropsInterface {
    posts: GeneralBlogInterface[];
    categories: BlogCategoriesInterface[];
    postsPerPageValue: number;
}

/**
 * Blog page
 *
 * * Url: /blog
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Blogs({ posts, categories, postsPerPageValue }: BlogPagePropsInterface): JSX.Element {
    return (
        <Page title="Blogs" description="List of all blogs">
            <BreadCrumb />
            {posts?.length > 0 ? (
                <BlogList blogList={posts} categoryList={categories} postsPerPageValue={postsPerPageValue} />
            ) : (
                <Section>
                    <Container className="grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-2">
                        <div className="flex items-center flex-wrap justify-between gap-12 col-span-2">
                            <TextColumn
                                h3LightHeading={
                                    <>
                                        <strong className="font-latoExtraBold">Latest</strong>{' '}
                                        <span className="font-latoLight normal-case">articles</span>
                                    </>
                                }
                            />
                        </div>

                        <span className="bg-brandLight rounded-primary p-8 shadow-shadow1 text-[2rem] font-mulishBold justify-self-center col-span-2">
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

        return {
            props: {
                posts,
                categories,
                postsPerPageValue
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
