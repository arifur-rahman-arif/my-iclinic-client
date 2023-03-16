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
            className="grid pr-4 sm:pr-8 sm:h-[18rem] grid-cols-[auto_1fr] gap-10 border-b-4 hover:border-brand items-start max-w-[36.6rem] rounded-primary shadow-shadow3 transition-all duration-500 hover:shadow-shadow1 group/card overflow-hidden"
        >
            <div className="overflow-hidden cursor-pointer max-w-[14.3rem] h-full">
                <Image
                    src={image.src}
                    width={image.width || 401}
                    height={image.height || 197}
                    alt=""
                    className="group-hover/card:scale-105 transition-all object-cover duration-[0.45s] h-full"
                />
            </div>
            <div className="grid gap-6 py-6 content-start">
                <BlogAuthor author={author} />

                <span className="text-[2rem] leading-[2.4rem] font-mulishBold overflow-ellipsis overflow-hidden whitespace-nowrap">
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
