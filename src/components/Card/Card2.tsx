import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface Card2Interface {
    title: ReactNode;
    cardList: string[];
    borderColor: string;
    bannerImage: StaticImageData;
    listIcon: StaticImageData;
}

/**
 * Card component
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} title
 * @param {React.ReactNode[]} cardList
 * @param {string} borderColor
 * @param {StaticImageData} bannerImage
 * @param {StaticImageData} listIcon
 * @returns {JSX.Element}
 * @constructor
 */
const Card2 = ({ title, cardList, borderColor, bannerImage, listIcon }: Card2Interface): JSX.Element => {
    return (
        <div className="border-vio relative mx-auto grid h-full w-full max-w-[26rem] grid-cols-1 content-start gap-16 rounded-[3.5rem] px-8 py-16">
            <div className="absolute top-0 right-0 z-[4] -translate-y-[1.3rem] translate-x-[1.3rem] bg-white p-5">
                <Image src={bannerImage} alt="" />
            </div>

            <div className={`rounded-[3.5rem] border-[0.3rem] ${borderColor} absolute inset-0 z-[1]`}></div>
            {/* <div className="absolute inset-2/4 -translate-y-2/4 -translate-x-2/4 w-[200%] h-[200%] rounded-[3.5rem] z-[2] transition-all bg-red-500"></div> */}

            <span className="relative z-[4] font-latoBold text-[2rem] uppercase leading-[2.8rem]">{title}</span>
            <div className="relative z-[4] flex flex-col items-center justify-start gap-4">
                {cardList.map((list, index) => (
                    <div className="flex items-start justify-start gap-4">
                        <Image src={listIcon} alt="" className="translate-y-2" />
                        <span className="text-[1.6rem] font-medium leading-8">{list}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card2;
