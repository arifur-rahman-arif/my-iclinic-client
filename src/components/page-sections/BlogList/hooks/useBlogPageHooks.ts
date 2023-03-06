import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface BlogPageHooksInterface {
    postsPerPageValue?: number;
    blogList: GeneralBlogInterface[];
}

interface BlogPageHooksReturnInterface {
    postPerPage: number;
    setBlogs: Dispatch<SetStateAction<GeneralBlogInterface[]>>;
    totalPage: number;
    setTotalPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPosts: GeneralBlogInterface[];
    setCurrentPosts: Dispatch<SetStateAction<GeneralBlogInterface[]>>;
    setPostsList: ({ blogs }: { blogs?: GeneralBlogInterface[] }) => void;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

/**
 * Blog list page functionality hooks & functions
 *
 * @param {number | undefined} postsPerPageValue
 * @param {GeneralBlogInterface[]} blogList
 * @returns {BlogPageHooksReturnInterface}
 */
const useBlogPageHooks = ({ postsPerPageValue, blogList }: BlogPageHooksInterface): BlogPageHooksReturnInterface => {
    const router = useRouter();
    const postPerPage = postsPerPageValue || 9;
    // Temporary blogs for setting the current posts
    const [blogs, setBlogs] = useState<GeneralBlogInterface[]>(blogList);
    const [totalPage, setTotalPage] = useState<number>(Math.ceil(blogList.length / postPerPage));
    const [currentPage, setCurrentPage] = useState<number>(1);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const [currentPosts, setCurrentPosts] = useState<GeneralBlogInterface[]>(
        blogList.slice(indexOfFirstPost, indexOfLastPost)
    );

    // The search state for the blog list page
    const [searchValue, setSearchValue] = useState<string>('');

    // When the current page changes set the posts from blogs variable accordingly
    useEffect(() => {
        setPostsList({ blogs });
    }, [currentPage]);

    /**
     * Set the post content based on give post array
     * @param {GeneralBlogInterface[]} blogs
     *
     * @returns void
     */
    const setPostsList = ({ blogs }: { blogs?: GeneralBlogInterface[] }): void => {
        if (!blogs || blogs.length === 0) return setCurrentPosts([]);

        setCurrentPosts(blogs.slice(indexOfFirstPost, indexOfLastPost));
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [router.asPath]);

    return {
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
    };
};

export default useBlogPageHooks;
