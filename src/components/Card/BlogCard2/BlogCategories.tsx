import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import Image from 'next/image';

interface BlogCategoriesPropsInterface {
    categories: BlogCategoriesInterface[];
    defaultClassName?: string;
    className?: string;
    categoriesLength?: number;
}

/**
 * Blog categories component for blog card
 *
 * @param {BlogCategoriesInterface[]} categories
 * @param {string | undefined} defaultClassName
 * @param {string | undefined} className
 * @param {number} categoriesLength
 * @returns {JSX.Element}
 * @constructor
 */
const BlogCategories = ({
    categories,
    defaultClassName = 'flex items-start justify-start gap-6 mt-6',
    className,
    categoriesLength
}: BlogCategoriesPropsInterface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className}`}>
            <Image src="/images/icons/icon-pin-yellow-small.svg" width={36} height={2} alt="" className="mt-3" />
            <div className="flex gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {categories.map((category, index) => (
                    <div key={index} className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {/* If a blog has more than one category than show them with more text */}
                        {categoriesLength && categoriesLength !== categories.length ? (
                            <>
                                {index < categoriesLength && (
                                    <div className="flex flex-wrap items-center justify-start gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                        <span
                                            className="flex overflow-hidden text-ellipsis whitespace-nowrap font-mulishBold text-[1.4rem] capitalize leading-8"
                                            key={index}
                                        >
                                            {category.name}
                                        </span>
                                        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[1rem] leading-4 sm:text-[1.4rem] sm:leading-[1.2rem]">
                                            ...{categories.length - categoriesLength} more
                                        </span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <span
                                className="flex max-w-full font-mulishBold text-[1.4rem] capitalize leading-8"
                                key={index}
                            >
                                <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-mulishBold text-[1.4rem] capitalize leading-8">
                                    {category.name}
                                </span>
                                {index !== categories?.length - 1 && ','}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCategories;
