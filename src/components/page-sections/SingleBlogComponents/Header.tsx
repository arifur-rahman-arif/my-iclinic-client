import { BlogCategories } from '@/components/Card/BlogCard2';
import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
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
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({ image, title, author, readTime, views, categories }: HeaderInterface): JSX.Element => {
    return (
        <Section>
            <Container className="grid">
                <div className="max-h-[43.8rem] overflow-hidden group/header rounded-primary">
                    <Image
                        {...image}
                        alt={title}
                        quality={100}
                        className="group-hover/header:scale-105 transition-all object-cover duration-[0.45s] rounded-primary object-cover max-h-[43.8rem]"
                    />
                </div>

                {/*  Title  */}
                <div className="md:max-w-[calc(100%_-_8rem)] md:ml-32 mt-12 md:mt-24">
                    {title && <H2Variant1 className="normal-case max-w-[64rem]">{title}</H2Variant1>}

                    <Image src="/images/icons/icon-pin-yellow.svg" width={154} height={2} alt="" className="mt-12" />

                    {categories?.length && <BlogCategories categories={categories} className="!mt-12  w-full" />}

                    <div className="flex items-center justify-between flex-col md:flex-row gap-12 mt-8">
                        {/* Blog meta data */}
                        <div className="flex items-center justify-start gap-6">
                            <div className="flex items-center justify-start gap-4">
                                <Image
                                    src={author?.logo || '/images/logos/iclinic-rounded.png'}
                                    width={author?.logo?.width || 32}
                                    height={author?.logo?.height || 32}
                                    alt=""
                                    className="rounded-full overflow-hidden object-cover"
                                />
                                <span className="text-[1.4rem] leading-8 font-mulishBold">
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
                                <span className="text-[1.4rem] leading-8 font-mulishBold">{readTime}</span>
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
                                <span className="text-[1.4rem] leading-8 font-mulishBold">{views || 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Header;
