import { BlogCard2 } from '@/components/Card';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Filters, { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { useRef } from 'react';
import { useSnapshot } from 'valtio';
import BlogSearch, { store } from './BlogSearch';
import Pagination from './Pagination';

export interface BlogListInterface {
    blogList: GeneralBlogInterface[];
    categoryList: BlogCategoriesInterface[];
    postsPerPageValue: number;
    totalPostsCount: number;
    currentPage: number;
}

/**
 * Blog list component for blog archive page
 *
 * @param {GeneralBlogInterface[]} blogList
 * @param {BlogCategoriesInterface[]} categoryList
 * @param {number} postsPerPageValue
 * @param {number} totalPostsCount
 * @param {number} currentPage
 * @returns {JSX.Element}
 * @constructor
 */
const BlogList = ({
    blogList,
    categoryList,
    postsPerPageValue,
    totalPostsCount,
    currentPage
}: BlogListInterface): JSX.Element => {
    const totalPage = Math.ceil(totalPostsCount / postsPerPageValue);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const snap = useSnapshot(store) as typeof store;

    return (
        <Section>
            <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24" ref={containerRef}>
                {/* Section title & search box */}
                <div className="col-span-2 flex flex-wrap items-center justify-between gap-12">
                    <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
                        <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                        <h1 className="w-full font-latoBold normal-case text-heading md:max-w-[55rem]">
                            Latest articles
                        </h1>
                    </div>

                    <BlogSearch />
                </div>

                {/* filters */}
                <Filters
                    categories={[
                        {
                            name: 'All',
                            slug: 'all',
                            active: true
                        },
                        ...categoryList
                    ]}
                />

                {/* Renders blog content or loading indicator based on state. */}
                {/* If loading, displays a loading indicator. Otherwise, displays blog content or a message if no articles are available. */}
                {/* Additionally, renders pagination if applicable. */}
                {snap.isMutating ? (
                    <div className="col-span-2 grid place-items-center">
                        <ComponentLoader className="" />
                    </div>
                ) : (
                    <>
                        {/*  Blogs  */}
                        <div className="col-span-2 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(40rem,_1fr))]">
                            {snap?.articles?.length ? (
                                snap?.articles.map((list, index) => <BlogCard2 key={index} {...list} />)
                            ) : (
                                <>
                                    {snap.searchValue ? (
                                        <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                                            <span className="col-span-2 justify-self-center rounded-primary bg-brandLight p-8 font-mulishBold text-[2rem] shadow-shadow1">
                                                No articles available
                                            </span>
                                        </Container>
                                    ) : (
                                        <>
                                            {blogList.length ? (
                                                blogList.map((list, index) => <BlogCard2 key={index} {...list} />)
                                            ) : (
                                                <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                                                    <span className="col-span-2 justify-self-center rounded-primary bg-brandLight p-8 font-mulishBold text-[2rem] shadow-shadow1">
                                                        No articles available
                                                    </span>
                                                </Container>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>

                        {/*  Pagination  */}
                        {!snap?.articles?.length && !snap.searchValue ? (
                            // Display pagination if applicable
                            <>
                                {blogList.length && totalPage !== 1 ? (
                                    <Pagination totalPage={totalPage} currentPage={Number(currentPage)} />
                                ) : null}
                            </>
                        ) : null}
                    </>
                )}
            </Container>
        </Section>
    );
};

export default BlogList;
