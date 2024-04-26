import { Button2 } from '@/components/Buttons';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

export interface ConsultantCardInterface {
    image: string;
    name: string;
    degree: string;
    title: string;
    url?: string;
    imageClass?: string;
    className?: string;
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
const ConsultantCard = ({
    image,
    name,
    degree,
    title,
    url,
    className,
    imageClass
}: ConsultantCardInterface): JSX.Element => {
    return (
        <div
            className={twMerge(
                'group/card grid w-full overflow-hidden rounded-radius2 border border-solid border-[#EAECF0] bg-white pb-12 transition-all duration-500 hover:shadow-shadow1',
                className
            )}
        >
            {url ? (
                <Link href={url || ''} className="block max-h-[24.5rem] overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={370}
                        height={245}
                        quality={100}
                        className="w-full rounded-tl-radius2 rounded-tr-radius2 transition-all duration-500 group-hover/card:scale-110"
                    />
                </Link>
            ) : (
                <div className="block max-h-[24.5rem] overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={370}
                        height={245}
                        quality={100}
                        className={twMerge(
                            'w-full overflow-hidden rounded-tl-radius2 rounded-tr-radius2 transition-all duration-500 group-hover/card:scale-110',
                            imageClass
                        )}
                    />
                </div>
            )}

            <div className="mt-6 grid px-10">
                <h3 className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading">{name}</h3>
                <span className="mt-4 h-4 w-[6.3rem] rounded-primary bg-[#FF7F00]"></span>
                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#404A4D]">
                    {degree}
                </span>
                <span className="mt-6 font-mulishBold text-[1.4rem] uppercase leading-[2.4rem] text-[#893277]">
                    {title}
                </span>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 px-10 xs:justify-between md:mt-24">
                <BookConsultation buttonClassName="normal-case !p-4">
                    <Button2 type="button" text="Request a callback" iconPosition="left" />
                </BookConsultation>
                {url && (
                    <Link title="Learn more" href={url} className="group/link flex items-center justify-center gap-4">
                        <span className="font-latoBold text-[1.4rem] leading-[1.9rem] text-heading">Learn More</span>
                        <AiOutlineArrowRight className="h-[1.8rem] w-[1.8rem] translate-y-[0.1rem] fill-heading transition-all duration-300 group-hover/link:translate-x-2" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ConsultantCard;
