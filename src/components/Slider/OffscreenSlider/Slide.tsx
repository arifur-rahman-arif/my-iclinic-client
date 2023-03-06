import Image from 'next/image';
import { ReactNode } from 'react';

export interface SlideInterface {
    title: string;
    subtitle: string;
    description?: ReactNode;
    extraElements?: ReactNode;
    image: string;
}

/**
 * Slides of the sliders
 *
 * @param {string} title
 * @param {string} subtitle
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} description
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} extraElements
 * @param {string} image
 * @returns {JSX.Element}
 * @constructor
 */
const Slide = ({ title, subtitle, description, extraElements, image }: SlideInterface): JSX.Element => {
    return (
        <div className="grid grid-rows-[auto_28rem] md:grid-rows-none md:grid-cols-[47rem_1fr] min-h-[45rem] gap-12">
            <div className="grid content-start self-center relative z-[10]">
                <h2>
                    <strong>{title}</strong>
                </h2>
                <span className="text-[2rem] leading-[2.8rem] font-mulishBold mt-8 md:mt-12">{subtitle}</span>
                {description ? <p className="mt-6">{description}</p> : null}
                {extraElements}
            </div>
            <div className="">
                <Image
                    src={image}
                    alt=""
                    width={587}
                    height={435}
                    className="max-w-[37rem] max-h-[27rem] md:max-w-[58.7rem] md:max-h-[43.5rem] object-contain absolute right-0 md:top-2/4 md:-translate-y-2/4 translate-x-28"
                />
            </div>
        </div>
    );
};

export default Slide;
