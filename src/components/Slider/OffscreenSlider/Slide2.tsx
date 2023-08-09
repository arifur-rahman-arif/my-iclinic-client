// import { ReactNode } from 'react';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface SlideInterface {
    title: string;
    description: ReactNode;
    image: string;
    largeImage: string;
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
const Slide2 = ({ title, description, image, largeImage }: SlideInterface): JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-24 pb-[13rem] md:grid-cols-2 md:content-start md:items-start md:pb-0 xl:grid-cols-[auto_1fr] xl:pb-16 2xl:pb-0">
            <Image src={image} alt="" width={428} height={353} className="max-h-[35.3rem] md:hidden" />
            <Image
                src={largeImage}
                alt=""
                width={696}
                height={600}
                className="hidden h-full md:block xl:max-h-[60rem]"
            />

            <div className="grid gap-12 px-12 md:max-w-[60rem] md:content-start md:pb-12 md:pt-32">
                <h2 className="font-latoLight text-[4.8rem] capitalize leading-[4.8rem] text-white">{title}</h2>

                {description || ''}
            </div>
        </div>
    );
};

export default Slide2;
