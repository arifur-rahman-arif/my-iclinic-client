import { getTheMonthName } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export interface BlogCardInterface {
    image: string;
    backgroundImage: string;
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
    return (
        <div
            className="grid grid-cols-1 group/card shadow-shadow2 transition-all overflow-hidden duration-500 hover:shadow-shadow1 rounded-primary max-w-[26.9rem] w-full">
            <div className="h-[14.8rem] w-full overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    width={269}
                    height={148}
                    className="rounded-tl-primary rounded-tr-primary w-full h-full transition-all object-cover duration-[0.45s] will-change-auto group-hover/card:scale-105 overflow-hidden"
                />
            </div>
            <div className="grid content-start pt-6 px-12 pb-12 relative">
                <Image
                    src={backgroundImage}
                    alt=""
                    width={101}
                    height={266}
                    className="absolute top-0 left-2/4 -translate-x-2/4 object-cover w-[26.6rem] -z-[1] -translate-y-[30%]"
                />
                <span className="text-[1.2rem] leading-[1.8rem] font-mulishBold uppercase">
                    Posted: {postingDate?.getDate()}-{getTheMonthName(postingDate?.getMonth())}-
                    {postingDate?.getFullYear()}
                </span>
                <span className="block w-full max-w-[20.9rem] text-[1.8rem] leading-[2.8rem] font-mulishBold mt-6">
                    {title}
                </span>
                <Link
                    title="Learn more"
                    href={url || '#'}
                    className="flex items-center self-start mt-12 gap-4 group/link"
                >
                    <span className="text-blue font-latoBold text-[1.4rem] leading-[2rem]">Learn More</span>
                    <AiOutlineArrowRight
                        className="w-[2.4rem] h-[2.4rem] fill-blue transition-all duration-300 group-hover/link:translate-x-2"/>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
