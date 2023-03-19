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
        <div className="grid min-h-[45rem] grid-rows-[auto_28rem] gap-12 md:grid-cols-[47rem_1fr] md:grid-rows-none">
            <div className="relative z-[10] grid content-start self-center">
                <h2>
                    <strong>{title}</strong>
                </h2>
                <span className="mt-8 font-mulishBold text-[2rem] leading-[2.8rem] md:mt-12">{subtitle}</span>
                {description ? <p className="mt-6">{description}</p> : null}
                {extraElements}
            </div>
            <div className="">
                <Image
                    src={image}
                    alt=""
                    width={587}
                    height={435}
                    className="absolute right-0 max-h-[27rem] max-w-[37rem] translate-x-28 object-contain md:top-2/4 md:max-h-[43.5rem] md:max-w-[58.7rem] md:-translate-y-2/4"
                />
            </div>
        </div>
    );
};

export default Slide;
