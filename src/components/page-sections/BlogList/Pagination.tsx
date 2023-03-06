import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface PaginationInterface {
    totalPage: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setPostInView?: () => void;
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
    setPostInView,
    defaultClassName,
    className
}: PaginationInterface): JSX.Element => {
    /**
     * Go to the previous page of post
     */
    const handlePreviousPage = () => {
        if (currentPage === 1) return;
        setCurrentPage((currentPage -= 1));
        typeof setPostInView === 'function' && setPostInView();
    };

    /**
     * Go to the next page of post
     */
    const handleNextPage = () => {
        if (currentPage === totalPage) return;
        setCurrentPage((currentPage += 1));
        typeof setPostInView === 'function' && setPostInView();
    };

    return (
        <div
            className={`${
                defaultClassName || 'flex items-center gap-12 sm:gap-24 justify-between col-span-2 justify-self-end'
            } ${className}`}
        >
            {/* <div className="h-1 w-[5.2rem] bg-secondary"></div> */}
            {currentPage === 1 ? (
                <div className="h-1 w-[5.2rem] bg-secondary"></div>
            ) : (
                <button
                    className="transition-all duration-500 hover:bg-brandLight p-4 rounded-full hover:scale-125"
                    onClick={handlePreviousPage}
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="w-[1.8rem] h-[1.8rem] rotate-180"
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
                    className="transition-all duration-500 hover:bg-brandLight p-4 rounded-full hover:scale-125"
                    onClick={handleNextPage}
                >
                    <Image
                        src="/images/icons/icon-angle-right.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="w-[1.8rem] h-[1.8rem]"
                    />
                </button>
            )}
        </div>
    );
};

export default Pagination;
