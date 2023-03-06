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
        <div className="grid gap-6 shadow-md rounded-primary overflow-hidden max-w-[37rem] md:max-w-none pb-6 h-full content-start grid-rows-[auto_auto_1fr] group/card items-start">
            <div className="px-4 pt-[1.2rem] flex items-center justify-between">
                <span className="font-latoBold text-[2.4rem] leading-[3.2rem]">{title}</span>
                <span className="text-[1.4rem] self-start justify-self-end leading-[2rem] font-mulishExtraBold uppercase bg-brandLight py-[0.4rem] px-[0.8rem] rounded-primary ">
                    {pillText}
                </span>
            </div>

            <div className="bg-brandLight p-[1.2rem] group-hover/card:p-0 group-hover/card:m-[1.2rem] group-hover/card:rounded-primary transition-all duration-500 overflow-hidden max-w-full">
                <Image
                    src={image}
                    alt=""
                    width={346}
                    height={176}
                    className="rounded-primary w-full transition-all duration-[0.45s] will-change-auto group-hover/card:scale-105 overflow-hidden"
                />
            </div>
            <div className="grid gap-10 px-6 items-start mt-6 h-full pb-8">
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
                    className="flex items-center justify-center gap-4 justify-self-end self-end group/link"
                >
                    <span className="text-heading2 font-latoBold text-[1.4rem] leading-[1.9rem]">Learn More</span>
                    <AiOutlineArrowRight className="w-[2.4rem] h-[2.4rem] fill-heading2 transition-all duration-300 group-hover/link:translate-x-2" />
                </Link>
            </div>
        </div>
    );
};

export default Card;
