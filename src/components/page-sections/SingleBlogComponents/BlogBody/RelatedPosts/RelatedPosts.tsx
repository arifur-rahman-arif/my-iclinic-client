import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import BlogRelatedCard from '@/components/Card/BlogRelatedCard/BlogRelatedCard';
import useBlogPageHooks from '@/page-sections/BlogList/hooks/useBlogPageHooks';
import Pagination from '@/page-sections/BlogList/Pagination';
import Image from 'next/image';

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
            <div className="grid gap-12">
                <h2>
                    <strong className="normal-case">You may also like</strong>
                </h2>
                <Image src="/images/icons/icon-pin-yellow.svg" width={198} height={2} alt="" />
            </div>

            <div className="grid grid-cols-1 justify-items-start gap-12 sm:grid-cols-[repeat(auto-fit,_minmax(36.6rem,_1fr))]">
                {currentPosts.length > 0 ?
                    currentPosts.map((post, index) => <BlogRelatedCard key={index} {...post} />) :
                    null}

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

export default RelatedPosts;
