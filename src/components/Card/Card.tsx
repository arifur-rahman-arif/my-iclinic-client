import { BulletList } from '@/components/page-sections';
import IconArrow from '@/icons/icon-angle-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

export interface CardInterface {
    image: string;
    title: ReactNode;
    pillText: string;
    cardList: ReactNode[];
    cardLink: string;
}

/**
 * Card component
 *
 * @param {string} image
 * @param {string} title
 * @param {string} pillText
 * @param {React.ReactNode[]} cardList
 * @param {string} cardLink
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ image, title, pillText, cardList, cardLink }: CardInterface): JSX.Element => {
    return (
        <Link
            href={cardLink}
            title={title?.toString() || ''}
            className="group/card grid h-full max-w-[37rem] grid-rows-[auto_auto_1fr] content-start items-start gap-6 overflow-hidden rounded-primary pb-6 shadow-md md:max-w-none"
        >
            <div className="flex items-center justify-between px-4 pt-[1.2rem]">
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading">{title}</span>
                <span className="self-start justify-self-end rounded-primary bg-[#0C4969] py-[0.4rem] px-[0.8rem] font-mulishExtraBold text-[1.4rem] uppercase leading-[2rem] text-white ">
                    {pillText}
                </span>
            </div>

            <div className="max-w-full overflow-hidden p-[1.2rem] transition-all duration-500 group-hover/card:m-[1.2rem] group-hover/card:rounded-primary group-hover/card:p-0">
                <Image
                    src={image}
                    alt=""
                    width={346}
                    height={176}
                    className="w-full overflow-hidden rounded-primary transition-all duration-[0.45s] will-change-auto group-hover/card:scale-105"
                />
            </div>
            <div className="mt-6 grid h-full items-start gap-10 px-6 pb-8">
                <BulletList
                    className="!ml-6 !gap-2"
                    list={cardList}
                    listItemClassName="md:text-[1.6rem] md:leading-[2.4rem] font-mulishMedium !text-[#35444B]"
                    bulletPoint={
                        <Image
                            src={IconArrow}
                            alt=""
                            className="h-[1rem] w-[1rem] translate-y-3 md:h-[1.1rem] md:w-[1.1rem] md:translate-y-[0.8rem]"
                        />
                    }
                />
                <span className="group/link flex items-center justify-center gap-3 self-end justify-self-end">
                    <span className="font-mulishBold text-[1.2rem] leading-[1.9rem] text-heading">Learn More</span>
                    <BiRightArrowAlt className="h-[1.6rem] w-[1.6rem] fill-heading transition-all duration-300 group-hover/link:translate-x-2" />
                </span>
            </div>
        </Link>
    );
};

export default Card;
