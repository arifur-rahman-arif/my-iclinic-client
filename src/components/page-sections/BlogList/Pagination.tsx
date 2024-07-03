import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PaginationInterface {
    totalPage: number;
    currentPage: number;
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
const Pagination = ({ totalPage, currentPage, defaultClassName, className }: PaginationInterface): JSX.Element => {
    /**
     * Go to the previous page of post
     */
    // const handlePreviousPage = () => {
    //     if (currentPage === 1) return;
    //     setCurrentPage((currentPage -= 1));
    //     // Typeof setPostInView === 'function' && setPostInView();
    // };

    // /**
    //  * Go to the next page of post
    //  */
    // const handleNextPage = () => {
    //     if (currentPage === totalPage) return;
    //     setCurrentPage((currentPage += 1));
    //     // Typeof setPostInView === 'function' && setPostInView();
    // };

    const router = useRouter();

    /**
     * Get the page path url
     * @returns {string}
     */
    const getRouterUrl = (): string => {
        const path = router.asPath;

        if (path === '/articles') {
            return path.replace(/\/\d+$/, '') + '/page';
        }
        return path.replace(/\/\d+$/, '');
    };

    let previousPageUrl = currentPage === 1 ? '/articles/' : `${getRouterUrl()}/${currentPage - 1}`;

    if (currentPage === 2) {
        previousPageUrl = '/articles';
    }

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
                <Link
                    title={`Page ${currentPage - 1}`}
                    href={previousPageUrl}
                    className="rounded-full p-4 transition-all duration-500 hover:scale-125 hover:bg-brandLight"
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="h-[1.8rem] w-[1.8rem] rotate-180"
                    />
                </Link>
            )}

            <div className="flex items-center justify-center gap-2">
                <span className="font-mulishBold leading-8">{currentPage}</span>
                <span className="font-mulishBold leading-8">/</span>
                <span className="font-mulishBold leading-8">{totalPage}</span>
            </div>

            {currentPage === totalPage ? (
                <div className="h-1 w-[5.2rem] bg-secondary"></div>
            ) : (
                <Link
                    title={`Page ${currentPage + 1}`}
                    href={`${getRouterUrl()}/${currentPage + 1}`}
                    className="rounded-full p-4 transition-all duration-500 hover:scale-125 hover:bg-brandLight"
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="h-[1.8rem] w-[1.8rem]"
                    />
                </Link>
            )}
        </div>
    );
};

export default Pagination;
