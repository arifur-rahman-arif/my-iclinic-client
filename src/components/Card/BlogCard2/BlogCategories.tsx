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
            <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                    <div key={index}>
                        {categoriesLength && categoriesLength !== categories.length ? (
                            <>
                                {index < categoriesLength && (
                                    <div className="flex items-center justify-start gap-2">
                                        <span
                                            className="text-[1.4rem] leading-8 font-mulishBold capitalize"
                                            key={index}
                                        >
                                            {category.name}
                                            {index !== categories?.length - 1 && ','}
                                        </span>
                                        <span className="text-[1rem] leading-4 sm:text-[1.4rem] sm:leading-[1.2rem]">
                                            ...{categories.length - categoriesLength} more
                                        </span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <span className="text-[1.4rem] leading-8 font-mulishBold capitalize" key={index}>
                                {category.name}
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
