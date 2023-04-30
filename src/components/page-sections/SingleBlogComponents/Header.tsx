import { BlogCategories } from '@/components/Card/BlogCard2';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { ImageType } from '@/types';
import Image from 'next/image';

interface HeaderInterface {
    image: ImageType;
    title: string;
    author?: {
        logo?: ImageType;
        name: string;
    };
    readTime: string;
    views: number;
    categories: BlogCategoriesInterface[];
}

// eslint-disable-next-line valid-jsdoc
/**
 * Blog header component
 *
 * @param {ImageType} image
 * @param {string} title
 * @param {{logo?: ImageType, name: string} | undefined} author
 * @param {string} readTime
 * @param {number} views
 * @param {BlogCategoriesInterface[]} categories
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({ image, title, author, readTime, views, categories }: HeaderInterface): JSX.Element => {
    return (
        <Section>
            <Container className="grid">
                <div className="group/header max-h-[43.8rem] overflow-hidden rounded-primary">
                    <Image
                        {...image}
                        alt={title}
                        quality={100}
                        priority={true}
                        className="max-h-[43.8rem] rounded-primary object-cover transition-all duration-[0.45s] group-hover/header:scale-105"
                    />
                </div>

                {/*  Title  */}
                <div className="mt-12 md:ml-32 md:mt-24 md:max-w-[calc(100%_-_8rem)]">
                    {title && (
                        <h1 className="max-w-[64rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] text-heading md:text-[3.6rem] md:leading-[4rem]">
                            {title}
                        </h1>
                    )}

                    <Image src="/images/icons/icon-pin-yellow.svg" width={154} height={2} alt="" className="mt-12" />

                    {categories?.length && <BlogCategories categories={categories} className="!mt-12  w-full" />}

                    <div className="mt-8 flex flex-col items-center justify-between gap-12 md:flex-row">
                        {/* Blog meta data */}
                        <div className="flex items-center justify-start gap-6">
                            <div className="flex items-center justify-start gap-4">
                                <Image
                                    src={author?.logo || '/images/logos/iclinic-rounded.png'}
                                    width={author?.logo?.width || 32}
                                    height={author?.logo?.height || 32}
                                    alt=""
                                    className="overflow-hidden rounded-full object-cover"
                                />
                                <span className="font-mulishBold text-[1.4rem] leading-8">
                                    {author?.name || 'My Iclinic'}
                                </span>
                            </div>
                            |{/* Post read time */}
                            <div
                                className="flex items-center justify-start gap-4"
                                title={`Reading Time: ${readTime || null}`}
                            >
                                <Image
                                    src="/images/icons/icon-clock-outline-dark.svg"
                                    width={18}
                                    height={18}
                                    alt=""
                                    className="mt-1"
                                />
                                <span className="font-mulishBold text-[1.4rem] leading-8">{readTime}</span>
                            </div>
                            |{/* Post views */}
                            <div className="flex items-center justify-start gap-4" title={`Total View: ${views || 0}`}>
                                <Image
                                    src="/images/icons/icon-eye-outline-dark.svg"
                                    width={18}
                                    height={18}
                                    alt=""
                                    className="mt-1"
                                />
                                <span className="font-mulishBold text-[1.4rem] leading-8">{views || 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Header;
