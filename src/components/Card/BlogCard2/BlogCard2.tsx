import BlogMeta from './BlogMeta';
import BlogAuthor from './BlogAuthor';
import BlogCategories from './BlogCategories';
import { H3Variant3 } from '@/components/Headings';
import { LinkText } from '@/components/Link';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { ImageType } from '@/types';
import { trimText } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';

export interface GeneralBlogInterface {
    image: ImageType;
    author?: {
        logo?: ImageType;
        name: string;
    };
    title: string;
    categories?: BlogCategoriesInterface[];
    description: string;
    views: number;
    readTime: string;
    slug?: string;
    ID?: number;
}

/**
 * Blogs page card
 *
 * @param {ImageType} image
 * @param {ImageType | undefined} author
 * @param {string} title
 * @param {BlogCategoriesInterface[] | undefined} categories
 * @param {string} description
 * @param {number} views
 * @param {string} readTime
 * @param {string | undefined} slug
 * @returns {JSX.Element}
 * @constructor
 */
const BlogCard2 = ({
    image,
    author,
    title,
    categories,
    description,
    views,
    readTime,
    slug
}: GeneralBlogInterface): JSX.Element => {
    return (
        <div className="group/card grid max-w-[40rem] items-start overflow-hidden rounded-primary border-b-4 pb-12 shadow-shadow3 transition-all duration-500 hover:border-brand hover:shadow-shadow1">
            <Link href={`/articles/${slug}` || '#'} className="max-h-[19.7rem] cursor-pointer overflow-hidden">
                <Image
                    src={image.src || '/images/section-images/placeholder-image.png'}
                    width={image.width || 401}
                    height={image.height || 197}
                    alt=""
                    className="w-full object-cover transition-all duration-[0.45s] group-hover/card:scale-105"
                />
            </Link>

            <div className="px-10 pt-12">
                <BlogAuthor author={author} />

                <Link href={`/articles/${slug}` || '#'} className="mt-8 block" title={title}>
                    <H3Variant3>{trimText(title, 30)}</H3Variant3>
                </Link>

                {categories?.length && <BlogCategories categories={categories} />}

                <p className="mt-12">
                    {HTMLReactParser(trimText(description || '', 100))}
                    &nbsp;&nbsp;
                    <LinkText
                        href={`/articles/${slug}` || '#'}
                        indicatorColor="bg-blue"
                        className="font-mulishBold !text-[1.4rem] font-extrabold text-blue"
                    >
                        Read More
                    </LinkText>
                </p>

                <BlogMeta views={views} readTime={readTime} />
            </div>
        </div>
    );
};

export default BlogCard2;
