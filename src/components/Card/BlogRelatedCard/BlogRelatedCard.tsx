import { BlogAuthor, BlogCategories, BlogMeta } from '@/components/Card/BlogCard2';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import Image from 'next/image';
import Link from 'next/link';

interface BlogRelatedCardInterface extends Omit<GeneralBlogInterface, 'description'> {}

/**
 * Blog related card component
 *
 * @param {ImageType} image
 * @param {ImageType | undefined} author
 * @param {string} title
 * @param {BlogCategoriesInterface[] | undefined} categories
 * @param {number} views
 * @param {string} readTime
 * @param {string | undefined} slug
 * @returns {JSX.Element}
 * @constructor
 */
const BlogRelatedCard = ({
    image,
    author,
    title,
    categories,
    views,
    readTime,
    slug,
    publishedDate
}: BlogRelatedCardInterface): JSX.Element => {
    return (
        <Link
            href={`/articles/${slug}` || '#'}
            className="group/card grid min-h-[20rem] items-start gap-10 overflow-hidden rounded-radius2 border border-solid border-[#EAECF0] transition-all duration-500 hover:border-brand hover:shadow-shadow1 sm:grid-cols-2 md:grid-cols-[15rem_1fr] md:gap-6  lg:gap-10"
        >
            <div className="h-full w-full min-w-[14.3rem] cursor-pointer overflow-hidden">
                <Image
                    src={image.src || '/images/section-images/placeholder-image.png'}
                    width={image.width || 401}
                    height={image.height || 197}
                    alt=""
                    className="h-full w-full object-cover transition-all duration-[0.45s] group-hover/card:scale-105"
                />
            </div>
            <div className="grid content-start gap-6 px-8 pb-10 pr-6 sm:pl-0 sm:pt-8">
                <BlogAuthor author={author} excludeLink={true} />

                <span className="line-clamp-1 font-mulishBold text-[2rem] leading-[2.4rem]">{title}</span>

                {categories?.length && (
                    <BlogCategories categories={categories} className="!mt-0" categoriesLength={1} />
                )}

                <BlogMeta readTime={readTime} views={views} publishedDate={publishedDate} className="!mt-0" />
            </div>
        </Link>
    );
};

export default BlogRelatedCard;
