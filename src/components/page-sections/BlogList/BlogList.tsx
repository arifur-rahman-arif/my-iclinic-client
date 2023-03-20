import { BlogCard2 } from '@/components/Card';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { Container } from '@/components/Container';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import Filters, { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { useBlogPageHooks } from '@/page-sections/BlogList/index';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import BlogSearch from './BlogSearch';
import Pagination from './Pagination';

export interface BlogListInterface {
    blogList: GeneralBlogInterface[];
    categoryList: BlogCategoriesInterface[];
    postsPerPageValue: number;
}

const defaultFilters: BlogCategoriesInterface[] = [
    {
        name: 'All',
        slug: 'all',
        active: true
    },
    {
        name: 'Vision correction',
        slug: 'vision-correction'
    },
    {
        name: 'Cataract',
        slug: 'cataract'
    },
    {
        name: 'Children vision correction',
        slug: 'children-vision-correction'
    },
    {
        name: 'Eye health',
        slug: 'eye-health'
    }
];

/**
 * Blog list component for blog archive page
 *
 * @param {GeneralBlogInterface[]} blogList
 * @param {BlogCategoriesInterface[]} categoryList
 * @param {number} postsPerPageValue
 * @returns {JSX.Element}
 * @constructor
 */
const BlogList = ({ blogList, categoryList, postsPerPageValue }: BlogListInterface): JSX.Element => {
    const router = useRouter();
    const selectedCategorySlug = router.query.category;

    const {
        postPerPage,
        setBlogs,
        totalPage,
        setTotalPage,
        currentPage,
        setCurrentPage,
        currentPosts,
        setCurrentPosts,
        setPostsList,
        searchValue,
        setSearchValue
    } = useBlogPageHooks({
        blogList,
        postsPerPageValue
    });

    const [filters, setFilters] = useState<BlogCategoriesInterface[]>(
        [
            {
                name: 'All',
                slug: 'all',
                active: true
            },
            ...categoryList
        ] || defaultFilters
    );
    const containerRef = useRef<HTMLDivElement | null>(null);

    /**
     * Filter the posts based on the current filter slug
     *
     * @param {string} slug
     * @param {number} index
     */
    const filterPost = ({ slug }: { slug: string }): void => {
        if (slug === 'all') {
            setBlogs(blogList);
            setCurrentPosts(blogList);
            setTotalPage(Math.ceil(blogList.length / postPerPage));
            setPostsList({ blogs: blogList });
            return;
        }

        const filteredPosts: GeneralBlogInterface[] = blogList.filter((blog) => {
            return blog.categories?.some((category) => category.slug === slug);
        });

        // When the filter state is changed than set the blogs state posts according to that filter
        setBlogs(filteredPosts);
        setTotalPage(Math.ceil(filteredPosts.length / postPerPage));
        setPostsList({ blogs: filteredPosts });
    };

    // /**
    //  * Set the blog posts section in user view whenever blog list changes
    //  */
    // const setPostInView = () => {
    //     if (!containerRef.current) return;
    //
    //     setTimeout(() => {
    //         window.scrollTo(0, getElementTopPosition(containerRef.current as HTMLElement) - 100);
    //     }, 50);
    // };

    /**
     * Filter the blog list by search term
     *
     * @param {GeneralBlogInterface[] | []} filteredBlogs
     */
    const filterBlogsBySearch = (filteredBlogs: GeneralBlogInterface[] | []) => {
        // Set the categories filter to all whenever user search for something
        setFilters((currentFilters) => {
            return currentFilters.map((filter, index) => {
                if (index === 0) {
                    return { ...filter, active: true };
                }
                return { ...filter, active: false };
            });
        });

        if (filteredBlogs.length < 1) {
            setTotalPage(0);
            setPostsList({ blogs: [] });
            setCurrentPosts([]);

            return;
        }

        setTotalPage(Math.ceil(filteredBlogs.length / postPerPage));
        setPostsList({ blogs: filteredBlogs });
    };

    useEffect(() => {
        if (!selectedCategorySlug) return;

        setFilters((currentFilters) => {
            return currentFilters.map((filter) => {
                filter.active = filter.slug === selectedCategorySlug;
                return filter;
            });
        });

        filterPost({ slug: selectedCategorySlug as string });
    }, [selectedCategorySlug]);

    return (
        <Section>
            <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24" ref={containerRef}>
                {/* Section title & search box */}
                <div className="col-span-2 flex flex-wrap items-center justify-between gap-12">
                    <TextColumn
                        h3LightHeading={
                            <>
                                <strong className="font-latoExtraBold">Latest</strong>{' '}
                                <span className="font-latoLight normal-case">articles</span>
                            </>
                        }
                    />

                    <BlogSearch
                        blogList={blogList}
                        categoryList={categoryList}
                        filterBlogsBySearch={filterBlogsBySearch}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>

                {/* filters */}
                <Filters
                    filterList={filters}
                    setFilters={setFilters}
                    setCurrentPage={setCurrentPage}
                    filterPost={filterPost}
                    setSearchValue={setSearchValue}
                />

                {/*  Blogs  */}
                <div className="col-span-2 grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-[repeat(auto-fit,_minmax(40rem,_1fr))] md:gap-y-20">
                    {currentPosts.length ? (
                        currentPosts.map((list, index) => <BlogCard2 key={index} {...list} />)
                    ) : (
                        <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
                            <span className="col-span-2 justify-self-center rounded-primary bg-brandLight p-8 font-mulishBold text-[2rem] shadow-shadow1">
                                No articles available
                            </span>
                        </Container>
                    )}
                </div>

                {/*  Pagination  */}
                {currentPosts.length && totalPage !== 1 ? (
                    <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                ) : null}
            </Container>
        </Section>
    );
};

export default BlogList;
