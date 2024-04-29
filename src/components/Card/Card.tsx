import { BulletList } from '@/components/page-sections';
import IconArrow from '@/icons/icon-dotted-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface CardInterface {
    image: string;
    title: ReactNode;
    pillText?: string;
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
            className="group/card grid w-full max-w-[40.3rem] grid-cols-2 overflow-hidden rounded-[0.8rem] border border-solid border-[#EAECF0] p-8 shadow-sm transition-all duration-500 hover:shadow-shadow1 xs:p-12"
        >
            <Image
                src={image}
                alt=""
                width={162}
                height={162}
                className="h-[14rem] w-[14rem] overflow-hidden rounded-full object-cover transition-all duration-500 will-change-auto xs:h-[16.2rem] xs:w-[16.2rem]"
            />

            <div className="grid place-items-center gap-2 self-center justify-self-center">
                <span className="font-mulishBold uppercase text-heading">Suitable for</span>
                {pillText ? (
                    <span className="w-full rounded-primary bg-[#FF7F00] px-[0.8rem] py-[0.4rem] text-center font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-white">
                        {pillText}
                    </span>
                ) : null}
            </div>

            <span className="col-span-2 mt-4 font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">{title}</span>

            <span className="col-span-2 mt-4 h-[0.1rem] w-28 bg-[#99A8B7] transition-all duration-1000 group-hover/card:w-full"></span>

            <BulletList
                className="col-span-2 mt-12 !gap-2 sm:ml-0"
                list={cardList}
                listItemClassName="md:text-[1.6rem] md:leading-[2.4rem] font-mulishMedium !text-[#293C4E]"
                bulletPoint={<Image src={IconArrow} alt="" className="h-[1.4rem] w-[2.03rem] translate-y-2" />}
            />

            <span className="col-span-2 mt-16 self-end justify-self-end rounded-[0.5rem] border-2 border-solid border-[#003E79] bg-[#003E79] px-5 py-3 font-mulishBold text-[1.4rem] leading-8 text-white transition-all duration-500 hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent hover:bg-transparent hover:text-[#003E79]">
                Learn more
            </span>
        </Link>
    );
};

export default Card;
