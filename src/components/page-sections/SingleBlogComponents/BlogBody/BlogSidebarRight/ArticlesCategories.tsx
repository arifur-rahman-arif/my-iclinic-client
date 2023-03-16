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
        <div className="shadow-md transition-all duration-500 hover:shadow-shadow1 rounded-primary grid gap-x-12 gap-y-6 p-6 content-start">
            <span className="text-[2.4rem] leading-[3.2rem] font-latoBold mb-2">Articles Categories:</span>

            {categories.length ? (
                <>
                    {categories.map((category, index) => (
                        <Link
                            href={`/articles?category=${category.slug}`}
                            className="flex items-center justify-start gap-8 group/category"
                            key={index}
                        >
                            <FiArrowRight className="w-8 h-8 group-hover/category:translate-x-4 transition-all duration-500" />
                            <span className="text-[1.6rem] leading-[2.2rem] font-mulishBold capitalize">
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
