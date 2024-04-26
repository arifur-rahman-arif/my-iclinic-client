import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import BlogRelatedCard from '@/components/Card/BlogRelatedCard/BlogRelatedCard';
import useBlogPageHooks from '@/page-sections/BlogList/hooks/useBlogPageHooks';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface RelatedPostsInterface {
    posts: Omit<GeneralBlogInterface, 'description'>[];
}

/**
 * Related posts component
 * @returns {JSX.Element}
 * @constructor
 */
const RelatedPosts = ({ posts }: RelatedPostsInterface): JSX.Element => {
    const { totalPage, currentPage, setCurrentPage, currentPosts } = useBlogPageHooks({
        blogList: posts as GeneralBlogInterface[],
        postsPerPageValue: 3
    });

    return (
        <div className="col-span-full mt-12 grid gap-12 md:mt-24 md:gap-24">
            <div className="grid gap-6">
                <strong className="text-[2rem] normal-case leading-[2.8rem] text-heading">You may also like</strong>
                <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
            </div>

            <div className="grid grid-cols-1 justify-items-start gap-12 sm:grid-cols-[repeat(auto-fit,_minmax(36.6rem,_1fr))]">
                {currentPosts.length > 0
                    ? currentPosts.map((post: GeneralBlogInterface, index) => <BlogRelatedCard key={index} {...post} />)
                    : null}

                {currentPosts.length && totalPage !== 1 ? (
                    <Pagination
                        totalPage={totalPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        className="col-span-full"
                    />
                ) : null}
            </div>
        </div>
    );
};

interface PaginationInterface {
    totalPage: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    defaultClassName?: string;
    className?: string;
}

/**
 * Pagination component of blog archive
 *
 * @param {number} totalPost
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = ({
    totalPage,
    currentPage,
    setCurrentPage,
    defaultClassName,
    className
}: PaginationInterface): JSX.Element => {
    /**
     * Go to the previous page of post
     */
    const handlePreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage((currentPage -= 1));
        // Typeof setPostInView === 'function' && setPostInView();
    };

    /**
     * Go to the next page of post
     */
    const handleNextPage = () => {
        if (currentPage === totalPage) return;
        setCurrentPage((currentPage += 1));
        // Typeof setPostInView === 'function' && setPostInView();
    };

    return (
        <div
            className={`${
                defaultClassName || 'col-span-2 flex items-center justify-between gap-12 justify-self-end sm:gap-24'
            } ${className}`}
        >
            {/* <div className="h-1 w-[5.2rem] bg-secondary"></div> */}
            {currentPage === 1 ? (
                <div className="h-1 w-[5.2rem] bg-secondary"></div>
            ) : (
                <button
                    className="rounded-full p-4 transition-all duration-500 hover:scale-125 hover:bg-brandLight"
                    onClick={handlePreviousPage}
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="h-[1.8rem] w-[1.8rem] rotate-180"
                    />
                </button>
            )}

            <div className="flex items-center justify-center gap-2">
                <span className="font-mulishBold leading-8">{currentPage}</span>
                <span className="font-mulishBold leading-8">/</span>
                <span className="font-mulishBold leading-8">{totalPage}</span>
            </div>

            {currentPage === totalPage ? (
                <div className="h-1 w-[5.2rem] bg-secondary"></div>
            ) : (
                <button
                    className="rounded-full p-4 transition-all duration-500 hover:scale-125 hover:bg-brandLight"
                    onClick={handleNextPage}
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="h-[1.8rem] w-[1.8rem]"
                    />
                </button>
            )}
        </div>
    );
};

export default RelatedPosts;
