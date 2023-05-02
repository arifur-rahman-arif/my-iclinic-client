import { Button2 } from '@/components/Buttons';
import { H4Variant1 } from '@/components/Headings';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export interface ConsultantCardInterface {
    image: string;
    name: string;
    degree: string;
    title: string;
    url: string;
}

/**
 * Consultant people's card component
 *
 * @param {string} image
 * @param {string} name
 * @param {string} degree
 * @param {string} title
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultantCard = ({ image, name, degree, title, url }: ConsultantCardInterface): JSX.Element => {
    return (
        <div className="group/card grid w-full overflow-hidden rounded-primary bg-white pb-6 shadow-md transition-all duration-500 hover:shadow-shadow1">
            <Link href={url || ''} className="block max-h-[24.5rem] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={370}
                    height={245}
                    quality={100}
                    className="w-full rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                />
            </Link>

            <div className="mt-6 grid px-6">
                <H4Variant1>{name}</H4Variant1>
                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                    {degree}
                </span>
                <span className="mt-6 font-mulishBold text-[1.6rem] leading-[2.4rem]">{title}</span>
            </div>
            <div className="mt-[4.5rem] flex flex-wrap items-center justify-center gap-8 px-8 xs:justify-between">
                <BookConsultation buttonClassName="normal-case">
                    <Button2 type="button" text="Request a callback" iconPosition="left" />
                </BookConsultation>
                <Link title="Learn more" href={url} className="group/link flex items-center justify-center gap-4">
                    <span className="font-latoBold text-[1.4rem] leading-[1.9rem] text-heading2">Learn More</span>
                    <AiOutlineArrowRight className="h-[2.4rem] w-[2.4rem] fill-heading2 transition-all duration-300 group-hover/link:translate-x-2" />
                </Link>
            </div>
        </div>
    );
};

export default ConsultantCard;
