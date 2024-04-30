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
        <div className="grid content-start gap-12 border border-[#EAECF0] p-6 transition-all duration-500 md:rounded-radius2 md:px-12 md:py-16 md:hover:shadow-shadow1">
            <span className="font-latoBold text-[1.8rem] leading-[2.8rem] text-heading">Recent articles:</span>
            <span className="-mt-10 h-4 w-24 rounded-[1.6rem] bg-[#FF7F00]"></span>

            {articles.length ? (
                <div className="flex flex-wrap gap-12">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/articles/${article.slug}`}
                            className="group/card grid w-full max-w-[40rem] grid-cols-[10rem_1fr] gap-6 rounded-primary shadow-md transition-all duration-500 hover:shadow-shadow1 md:grid-cols-[auto_1fr] md:p-0 md:shadow-none md:hover:shadow-none"
                        >
                            <div className="overflow-hidden rounded-bl-radius2 rounded-tl-radius2 md:h-[6.4rem] md:w-[6.4rem] md:rounded-radius2">
                                <Image
                                    src={article.image.src || '/images/section-images/placeholder-image.webp'}
                                    width={90}
                                    height={90}
                                    alt=""
                                    className="h-full w-full object-cover transition-all duration-500 group-hover/card:scale-110 md:rounded-radius2"
                                />
                            </div>
                            <div className="grid content-center gap-4 py-4 pr-8 md:!p-0">
                                <span className="line-clamp-1 transition-all duration-500 group-hover/card:text-brand group-hover/card:opacity-50">
                                    {article.title}
                                </span>
                                <div className="flex items-center justify-start gap-2 font-mulishLight">
                                    <span className="text-[1.4rem] italic leading-8 transition-all duration-500 group-hover/card:text-brand group-hover/card:opacity-50">
                                        By
                                    </span>{' '}
                                    <span className="block font-mulishBold text-[1.4rem] leading-8 transition-all duration-500 group-hover/card:text-brand group-hover/card:opacity-50">
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
