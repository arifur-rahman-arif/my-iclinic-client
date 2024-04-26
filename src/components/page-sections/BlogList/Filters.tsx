import { store } from '@/page-sections/BlogList/BlogSearch';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export interface BlogCategoriesInterface {
    name: string;
    slug: string;
    active?: boolean;
}

interface FilterInterface {
    categories: BlogCategoriesInterface[];
}

// eslint-disable-next-line require-jsdoc
const Filters = ({ categories }: FilterInterface): JSX.Element => {
    const filterRef = useRef<HTMLDivElement | null>(null);
    // const [lastX, setLastX] = useState<number>(0);
    const [isLeftDisabled, setIsLeftDisabled] = useState<boolean>(true);
    const [isRightDisabled, setIsRightDisabled] = useState<boolean>(false);

    /**
     * Move the menu to horizontal way when user cursor moves over the submenu
     *
     * @param {number} deltaX
     */
    const handleMouseMove = (deltaX: number) => {
        const { current } = filterRef;

        if (!current) return;

        const scrollLeft = current.scrollLeft + deltaX;

        setIsLeftDisabled(scrollLeft <= 0);
        setIsRightDisabled(scrollLeft >= current.scrollWidth - current.clientWidth);

        current.scrollLeft = scrollLeft;
    };

    /**
     * Move the filter container to the right
     */
    const handleMoveRight = () => {
        const { current } = filterRef;

        if (!current) return;

        const deltaX = current.offsetWidth / 3;

        handleMouseMove(deltaX);
    };

    /**
     * Move the filter container to the left
     */
    const handleMoveLeft = () => {
        const { current } = filterRef;

        if (!current) return;

        const deltaX = -current.offsetWidth / 3;

        handleMouseMove(deltaX);
    };

    // Check if the buttons should be disabled on mount and when the categories changes
    useEffect(() => {
        const { current } = filterRef;

        if (!current) return;

        setIsLeftDisabled(true);
        setIsRightDisabled(current.scrollWidth <= current.clientWidth);
    }, [categories]);

    // /**
    //  * Filter the posts based on the current filter slug
    //  *
    //  * @param {string} slug
    //  * @param {number} index
    //  */
    // const handleFilter = ({ slug, index }: { slug: string; index: number }): void => {
    //     setSearchValue('');
    //     // When a filter is clicked set the current page to 1 always
    //     setCurrentPage(1);
    //
    //     // Set the clicked filter as active and rest of the filters are inactive
    //     setFilters((currentFilters) => {
    //         const tempFilters = currentFilters;
    //
    //         tempFilters.forEach((filters, filterIndex) => {
    //             filters.active = index === filterIndex;
    //         });
    //
    //         return tempFilters;
    //     });
    //
    //     filterPost({ slug });
    // };

    const router = useRouter();
    const category = router.query?.slug || '';

    return (
        <div className="col-span-2 flex items-center justify-center gap-4 sm:gap-6">
            <button
                className={`rounded-full p-2 transition-all duration-500 hover:scale-125 hover:bg-brandLight sm:p-4 ${
                    isLeftDisabled && 'cursor-not-allowed hover:!bg-red-300 sm:opacity-30'
                }`}
                onClick={handleMoveLeft}
                disabled={isLeftDisabled}
            >
                <Image
                    src="/images/icons/icon-angle-right.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="h-12 w-12 rotate-180 sm:h-6 sm:w-6"
                />
            </button>

            <div
                className="blog-filters overflow-x-auto md:overflow-x-hidden"
                ref={filterRef}
                // onMouseMove={(event) => {
                //     event.preventDefault();
                //     const { clientX } = event;
                //     const deltaX = (clientX - lastX) / 3;
                //
                //     setLastX(clientX);
                //
                //     handleMouseMove(deltaX);
                // }}
            >
                <div className="relative flex min-w-max items-center justify-center gap-8 justify-self-center py-2 md:gap-12 md:py-0">
                    {categories.map((filter, index) => (
                        <Link
                            title={filter.name}
                            href={filter.slug === 'all' ? '/articles' : `/articles/category/${filter.slug}`}
                            className={`cursor-pointer border-b-2 border-transparent font-mulishBold text-[1.8rem] capitalize leading-[2.8rem] text-heading transition-all duration-500 hover:text-brand ${
                                category === filter.slug && '!border-brand'
                            } ${
                                (router.asPath === '/articles' || router.asPath === '/articles/page/1') &&
                                filter.slug === 'all' &&
                                '!border-brand'
                            }`}
                            key={index}
                            onClick={() => {
                                store.searchValue = '';
                                store.articles = [];
                            }}
                        >
                            {filter.name}
                        </Link>
                    ))}
                </div>
            </div>

            <button
                className={`rounded-full p-2 transition-all duration-500 hover:scale-125 hover:bg-brandLight sm:p-4 ${
                    isRightDisabled && 'cursor-not-allowed opacity-30 hover:!bg-red-300'
                }`}
                onClick={handleMoveRight}
                disabled={isRightDisabled}
            >
                <Image
                    src="/images/icons/icon-angle-right.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="h-12 w-12 sm:h-6 sm:w-6"
                />
            </button>
        </div>
    );
};

export default Filters;
