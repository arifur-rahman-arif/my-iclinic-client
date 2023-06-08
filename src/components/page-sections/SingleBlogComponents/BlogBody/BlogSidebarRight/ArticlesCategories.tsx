import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import Link from 'next/link';

interface ArticlesCategoriesInterface {
    categories: BlogCategoriesInterface[];
}

/**
 * Post categories component
 *
 * @param {BlogCategoriesInterface[]} categories
 * @returns {JSX.Element}
 * @constructor
 */
const ArticlesCategories = ({ categories }: ArticlesCategoriesInterface): JSX.Element => {
    return (
        <div className="grid content-start gap-x-12 gap-y-6 rounded-primary p-6 shadow-md transition-all duration-500 hover:shadow-shadow1 md:py-16 md:px-12">
            <span className="mb-2 font-latoBold text-[2.4rem] leading-[3.2rem]">Articles Categories:</span>

            {categories.length ? (
                <>
                    {categories.map((category, index) => (
                        <Link
                            href={`/articles?category=${category.slug}`}
                            className="group/category flex items-center justify-start gap-3"
                            key={index}
                        >
                            <span className="h-[1.2rem] w-[1.2rem] rounded-full border-2 border-[#384043] transition-all duration-500 group-hover/category:bg-brand group-hover/category:opacity-50"></span>
                            <span className="font-mulishBold text-[1.6rem] capitalize leading-[2.2rem] transition-all duration-500 group-hover/category:text-brand group-hover/category:opacity-50">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </>
            ) : null}
        </div>
    );
};

export default ArticlesCategories;
