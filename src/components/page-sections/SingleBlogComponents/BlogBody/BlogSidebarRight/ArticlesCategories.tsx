import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="grid content-start gap-12 rounded-radius2 border border-[#EAECF0] p-6 transition-all duration-500 hover:shadow-shadow1 md:px-12 md:py-16">
            <span className="font-latoBold text-[1.8rem] leading-[2.8rem] text-heading">Articles categories:</span>
            <span className="-mt-10 h-4 w-24 rounded-[1.6rem] bg-[#FF7F00]"></span>

            {categories.length ? (
                <>
                    {categories.map((category, index) => (
                        <Link
                            href={`/articles/category/${category.slug}`}
                            className="group/category -mt-6 flex items-center justify-start gap-3"
                            key={index}
                        >
                            <Image src="/images/icons/icon-dotted-arrow.svg" width={20} height={20} alt="" />
                            <span className="capitalize transition-all duration-500 group-hover/category:text-brand group-hover/category:opacity-50">
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
