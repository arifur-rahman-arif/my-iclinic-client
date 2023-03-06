import { Button } from '@/components/Button';
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
        <div className="grid w-full bg-white shadow-md rounded-primary overflow-hidden pb-6 group/card transition-all duration-500 hover:shadow-shadow1">
            <div className="max-h-[24.5rem] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={370}
                    height={245}
                    quality={100}
                    className="rounded-tl-primary rounded-tr-primary group-hover/card:scale-110 transition-all duration-500 w-full"
                />
            </div>

            <div className="grid mt-6 px-6">
                <H4Variant1>{name}</H4Variant1>
                <span className="text-[1.4rem] leading-[2rem] font-mulishBold text-[#51585B] mt-2 uppercase">
                    {degree}
                </span>
                <span className="mt-6 font-mulishBold text-[1.6rem] leading-[2.4rem]">{title}</span>
            </div>
            <div className="flex items-center justify-between px-6 mt-[4.5rem]">
                <BookConsultation buttonClassName="normal-case">
                    <Button type="button" text="Book a consultation" iconPosition="left" />
                </BookConsultation>
                <Link title="Learn more" href={url} className="flex items-center justify-center gap-4 group/link">
                    <span className="text-heading2 font-latoBold text-[1.4rem] leading-[1.9rem]">Learn More</span>
                    <AiOutlineArrowRight className="w-[2.4rem] h-[2.4rem] fill-heading2 transition-all duration-300 group-hover/link:translate-x-2" />
                </Link>
            </div>
        </div>
    );
};

export default ConsultantCard;
