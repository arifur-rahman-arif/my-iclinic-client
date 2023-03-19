import { BulletList } from '@/components/page-sections';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import IconArrow from '@/icons/icon-arrow-right.svg';

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
        <div className="group/card grid h-full max-w-[37rem] grid-rows-[auto_auto_1fr] content-start items-start gap-6 overflow-hidden rounded-primary pb-6 shadow-md md:max-w-none">
            <div className="flex items-center justify-between px-4 pt-[1.2rem]">
                <span className="font-latoBold text-[2.4rem] leading-[3.2rem]">{title}</span>
                <span className="self-start justify-self-end rounded-primary bg-brandLight py-[0.4rem] px-[0.8rem] font-mulishExtraBold text-[1.4rem] uppercase leading-[2rem] ">
                    {pillText}
                </span>
            </div>

            <div className="max-w-full overflow-hidden bg-brandLight p-[1.2rem] transition-all duration-500 group-hover/card:m-[1.2rem] group-hover/card:rounded-primary group-hover/card:p-0">
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
                    listItemClassName="md:text-[1.7rem] font-mulishMedium"
                    bulletPoint={
                        <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                    }
                />
                <Link
                    title="Learn more"
                    href={cardLink}
                    className="group/link flex items-center justify-center gap-4 self-end justify-self-end"
                >
                    <span className="font-latoBold text-[1.4rem] leading-[1.9rem] text-heading2">Learn More</span>
                    <AiOutlineArrowRight className="h-[2.4rem] w-[2.4rem] fill-heading2 transition-all duration-300 group-hover/link:translate-x-2" />
                </Link>
            </div>
        </div>
    );
};

export default Card;
