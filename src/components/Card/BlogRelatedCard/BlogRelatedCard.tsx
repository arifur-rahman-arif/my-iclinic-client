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
    slug
}: BlogRelatedCardInterface): JSX.Element => {
    return (
        <Link
            href={`/articles/${slug}` || '#'}
            className="group/card grid max-w-[36.6rem] grid-cols-[auto_1fr] items-start gap-10 overflow-hidden rounded-primary border-b-4 pr-4 shadow-shadow3 transition-all duration-500 hover:border-brand hover:shadow-shadow1 sm:h-[18rem] sm:pr-8"
        >
            <div className="h-full min-w-[14.3rem] max-w-[14.3rem] cursor-pointer overflow-hidden">
                <Image
                    src={image.src || '/images/section-images/placeholder-image.png'}
                    width={image.width || 401}
                    height={image.height || 197}
                    alt=""
                    className="h-full object-cover transition-all duration-[0.45s] group-hover/card:scale-105"
                />
            </div>
            <div className="grid content-start gap-6 py-6">
                <BlogAuthor author={author} />

                <span className="overflow-hidden overflow-ellipsis whitespace-nowrap font-mulishBold text-[2rem] leading-[2.4rem]">
                    {title}
                </span>

                {categories?.length && (
                    <BlogCategories categories={categories} className="!mt-0" categoriesLength={1} />
                )}

                <BlogMeta views={views} readTime={readTime} className="!mt-0" />
            </div>
        </Link>
    );
};

export default BlogRelatedCard;
