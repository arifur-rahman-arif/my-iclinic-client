import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';

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
    defaultClassName = 'flex items-start justify-start gap-2 mt-6',
    className,
    categoriesLength
}: BlogCategoriesPropsInterface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className}`}>
            {/* <Image src="/images/icons/icon-pin-yellow-small.svg" width={36} height={2} alt="" className="mt-3" /> */}
            {/* <span className="font-mulishBold text-[1.4rem] leading-8 text-heading">Category:</span> */}

            <div className="flex gap-2">
                {categories.map((category, index) => (
                    <div key={index} className="">
                        {/* If a blog has more than one category than show them with more text */}
                        {categoriesLength && categoriesLength !== categories.length ? (
                            <>
                                {index < categoriesLength && (
                                    <div className="mt-[0.1rem] line-clamp-1 grid content-start justify-start gap-2">
                                        <span
                                            className="px- line-clamp-1 flex bg-[#FF7F00] font-latoExtraBold text-[1.2rem] uppercase leading-8 text-white"
                                            key={index}
                                        >
                                            {category.name}
                                        </span>
                                        <span className="font-mulishBold text-[1.2rem] leading-4 sm:leading-[1.2rem]">
                                            ...{categories.length - categoriesLength} more
                                        </span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <span
                                className="flex max-w-full font-latoExtraBold text-[1.2rem] uppercase leading-[1.2rem]"
                                key={index}
                            >
                                <span className="line-clamp-1 rounded-[10rem] bg-[#FF7F00] px-[0.8rem] py-[0.4rem] font-latoExtraBold text-[1.2rem] uppercase leading-[1.2rem] text-white">
                                    {category.name}
                                </span>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCategories;
