import { ImageType } from '@/types';
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
        <div className="grid content-start gap-14 p-6 transition-all duration-500 md:rounded-primary md:shadow-md md:hover:shadow-shadow1">
            <span className="mb-2 font-latoBold text-[2.4rem] leading-[3.2rem]">Recent Articles:</span>

            {articles.length ? (
                <div className="flex flex-wrap gap-12">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/articles/${article.slug}`}
                            className="grid w-full max-w-[40rem] grid-cols-[auto_1fr] gap-10 rounded-primary shadow-md transition-all duration-500 hover:shadow-shadow1 md:p-0 md:shadow-none md:hover:shadow-none"
                        >
                            <div className="overflow-hidden rounded-tl-primary rounded-bl-primary md:h-[7.8rem] md:w-[9.1rem] md:rounded-primary">
                                <Image
                                    src={article.image.src || '/images/section-images/placeholder-image.png'}
                                    width={91}
                                    height={78}
                                    alt=""
                                    className="h-full w-full object-cover md:rounded-primary"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 py-4 pr-8 md:!p-0">
                                <span className="block overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-500 hover:text-blue ">
                                    {article.title}
                                </span>
                                <div className="font-mulishLight">
                                    <span className="text-[1.4rem] italic leading-8">By</span>{' '}
                                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-mulishBold text-[1.4rem] leading-8">
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
