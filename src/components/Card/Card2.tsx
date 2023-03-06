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
        <div className="rounded-[3.5rem] border-vio grid grid-cols-1 mx-auto content-start gap-16 max-w-[26rem] w-full px-8 py-16 relative h-full">
            <div className="absolute top-0 right-0 p-5 -translate-y-[1.3rem] translate-x-[1.3rem] bg-white z-[4]">
                <Image src={bannerImage} alt="" />
            </div>

            <div className={`rounded-[3.5rem] border-[0.3rem] ${borderColor} absolute inset-0 z-[1]`}></div>
            {/* <div className="absolute inset-2/4 -translate-y-2/4 -translate-x-2/4 w-[200%] h-[200%] rounded-[3.5rem] z-[2] transition-all bg-red-500"></div> */}

            <span className="font-latoBold uppercase text-[2rem] leading-[2.8rem] relative z-[4]">{title}</span>
            <div className="flex flex-col items-center justify-start gap-4 relative z-[4]">
                {cardList.map((list, index) => (
                    <div className="flex items-start justify-start gap-4">
                        <Image src={listIcon} alt="" className="translate-y-2" />
                        <span className="font-medium text-[1.6rem] leading-8">{list}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card2;
