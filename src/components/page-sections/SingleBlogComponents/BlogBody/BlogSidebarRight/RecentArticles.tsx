import { ImageType } from '@/types';
import { trimText } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';

export interface RecentArticlesInterface {
    image: ImageType;
    author: {
        logo?: ImageType;
        name: string;
    };
    title: string;
    slug: string;
    ID?: number;
}

interface RecentArticlesPropsInterface {
    articles: RecentArticlesInterface[];
}

/**
 * Recent articles component
 *
 * @param {RecentArticlesInterface[]} articles
 * @returns {JSX.Element}
 * @constructor
 */
const RecentArticles = ({ articles }: RecentArticlesPropsInterface): JSX.Element => {
    return (
        <div className="md:shadow-md transition-all duration-500 md:hover:shadow-shadow1 md:rounded-primary grid gap-14 p-6 content-start">
            <span className="text-[2.4rem] leading-[3.2rem] font-latoBold mb-2">Recent Articles:</span>

            {articles.length ? (
                <div className="flex flex-wrap gap-12">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/blogs/${article.slug}`}
                            className="grid grid-cols-[auto_1fr] gap-10 shadow-md md:shadow-none transition-all duration-500 hover:shadow-shadow1 md:hover:shadow-none rounded-primary md:p-0"
                        >
                            <div className="md:w-[9.1rem] md:h-[7.8rem] overflow-hidden rounded-primary">
                                <Image
                                    src={article.image.src || '/images/section-images/placeholder-image.png'}
                                    width={91}
                                    height={78}
                                    alt=""
                                    className="md:rounded-primary h-full w-full object-cover"
                                />
                            </div>
                            <div className="grid gap-4 grid-cols-1 pr-8 py-4 md:!p-0">
                                <span className="transition-all duration-500 hover:text-blue">
                                    {trimText(article.title, 30)}
                                </span>
                                <div className="font-mulishLight">
                                    <span className="italic text-[1.4rem] leading-8">By</span>{' '}
                                    <span className="text-[1.4rem] leading-8 font-mulishBold">
                                        {article.author.name}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default RecentArticles;
