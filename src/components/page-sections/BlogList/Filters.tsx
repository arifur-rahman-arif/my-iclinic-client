import { Dispatch, SetStateAction } from 'react';

export interface BlogCategoriesInterface {
    name: string;
    slug: string;
    active?: boolean;
}

interface FilterInterface {
    filterList: BlogCategoriesInterface[];
    setFilters: Dispatch<SetStateAction<BlogCategoriesInterface[]>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    filterPost: ({ slug }: { slug: string }) => void;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

// eslint-disable-next-line require-jsdoc
const Filters = ({
    filterList,
    setFilters,
    setCurrentPage,
    filterPost,
    setSearchValue
}: FilterInterface): JSX.Element => {
    /**
     * Filter the posts based on the current filter slug
     *
     * @param {string} slug
     * @param {number} index
     */
    const handleFilter = ({ slug, index }: { slug: string; index: number }): void => {
        setSearchValue('');
        // When a filter is clicked set the current page to 1 always
        setCurrentPage(1);

        // Set the clicked filter as active and rest of the filters are inactive
        setFilters((currentFilters) => {
            const tempFilters = currentFilters;

            tempFilters.forEach((filters, filterIndex) => {
                filters.active = index === filterIndex;
            });

            return tempFilters;
        });

        filterPost({ slug });
    };

    return (
        <div className="col-span-2 flex-wrap justify-self-center flex gap-8 md:gap-12 items-center justify-center">
            {filterList.map((filter, index) => (
                <button
                    className={`cursor-pointer font-mulishBold transition-all duration-500 hover:text-brand capitalize ${
                        filter.active && 'text-brand'
                    }`}
                    key={index}
                    onClick={() => handleFilter({ slug: filter.slug, index })}
                >
                    {filter.name}
                </button>
            ))}
        </div>
    );
};

export default Filters;
