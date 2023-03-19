import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

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
        <div className="grid content-start gap-x-12 gap-y-6 rounded-primary p-6 shadow-md transition-all duration-500 hover:shadow-shadow1">
            <span className="mb-2 font-latoBold text-[2.4rem] leading-[3.2rem]">Articles Categories:</span>

            {categories.length ? (
                <>
                    {categories.map((category, index) => (
                        <Link
                            href={`/articles?category=${category.slug}`}
                            className="group/category flex items-center justify-start gap-8"
                            key={index}
                        >
                            <FiArrowRight className="h-8 w-8 transition-all duration-500 group-hover/category:translate-x-4" />
                            <span className="font-mulishBold text-[1.6rem] capitalize leading-[2.2rem]">
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
