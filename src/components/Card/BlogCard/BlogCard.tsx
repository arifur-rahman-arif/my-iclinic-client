import { getTheMonthName } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export interface BlogCardInterface {
    image: string;
    backgroundImage?: string;
    postingDate?: Date;
    title: string;
    url: string;
}

/**
 * Blog card component
 *
 * @param {string} image
 * @param {string} backgroundImage
 * @param {Date | undefined} postingDate
 * @param {string} title
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
const BlogCard = ({ image, backgroundImage, postingDate, title, url }: BlogCardInterface) => {
    const date = new Date(postingDate || '');
    return (
        <div className="group/card grid w-full max-w-[26.9rem] grid-cols-1 overflow-hidden rounded-primary shadow-shadow2 transition-all duration-500 hover:shadow-shadow1">
            <Link href={url || ''} className="h-[14.8rem] w-full overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    width={269}
                    height={148}
                    className="h-full w-full overflow-hidden rounded-tl-primary rounded-tr-primary object-cover transition-all duration-[0.45s] will-change-auto group-hover/card:scale-105"
                />
            </Link>
            <div className="relative grid content-start px-12 pt-6 pb-12">
                <Image
                    src={backgroundImage || '/images/section-images/myopia-control-card-bg.png'}
                    alt=""
                    width={101}
                    height={266}
                    className="absolute top-0 left-2/4 -z-[1] w-[26.6rem] -translate-x-2/4 -translate-y-[30%] object-cover"
                />
                <span className="font-mulishBold text-[1.2rem] uppercase leading-[1.8rem]">
                    Posted: {date?.getDate()}-{getTheMonthName(date?.getMonth())}-{date?.getFullYear()}
                </span>
                <span className="mt-6 block w-full max-w-[20.9rem] font-mulishBold text-[1.8rem] leading-[2.8rem] line-clamp-2">
                    {HTMLReactParser(title || '')}
                </span>
                <Link
                    title="Learn more"
                    href={url || '#'}
                    className="group/link mt-12 flex items-center gap-4 self-start"
                >
                    <span className="font-latoBold text-[1.4rem] leading-[2rem] text-blue">Learn More</span>
                    <AiOutlineArrowRight className="h-[1.6rem] w-[1.6rem] translate-y-[0.1rem] fill-blue transition-all duration-300 group-hover/link:translate-x-2" />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
