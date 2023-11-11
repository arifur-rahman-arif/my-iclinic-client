import { Button2 } from '@/components/Buttons';
import { ImageType3 } from '@/types';
import smallBg from '@/section-images/icl-small-bg.png';
import largeBg from '@/section-images/icl-masthead-bg.png';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { twMerge } from 'tailwind-merge';
import styles from './styles/Icl.module.scss';

interface MastheadICLProps {
    title: string;
    largeImage: ImageType3;
    smallImage: ImageType3;
    priceText: string;
    financeText: string;
    reviewsText: {
        google: string;
        trustpilot: string;
    };
    cardList: Array<{
        icon: Partial<ImageType3>;
        title: string;
        description: string;
        className?: string;
    }>;
}


/**
 * MastheadICL Component
 *
 * This component represents the masthead for a specific product or service. It includes a title,
 * background images, pricing and financing information, customer reviews, and a list of key features
 * represented as cards.
 *
 * @interface MastheadICLProps
 * @property {string} title - The title of the masthead.
 * @property {ImageType} largeImage - The large image associated with the masthead.
 * @property {ImageType} smallImage - The small image associated with the masthead.
 * @property {string} priceText - The text representing pricing information.
 * @property {string} financeText - The text representing financing information.
 * @property {Object} reviewsText - An object containing review text for Google and Trustpilot.
 * @property {Array} cardList - An array of cards, each containing an icon, title, and description.
 *
 * @component
 * @param {MastheadICLProps} props - The properties passed to the MastheadICL component.
 * @returns {JSX.Element} - The MastheadICL component JSX representation.
 */
const MastheadICL = ({
                         title,
                         largeImage,
                         smallImage,
                         priceText,
                         financeText,
                         reviewsText,
                         cardList
                     }: MastheadICLProps): JSX.Element => {
    return (
        <div className="relative grid overflow-hidden">
            <Image src={largeBg} alt="" className="absolute inset-0 -z-[1] hidden h-full w-full xl:block"/>

            <div className="relative grid xl:-ml-24 xl:justify-self-center">
                <Image
                    src={largeImage}
                    alt=""
                    className="absolute left-0 bottom-0 -z-[1] hidden -translate-x-1/2 xl:block"
                    priority={true}
                />

                <div className="relative grid md:grid-cols-2 lg:max-h-[60rem] lg:grid-cols-[1fr_auto]">
                    <div className="relative h-full bg-[#005DAF] xl:bg-transparent">
                        <Image
                            src={largeImage}
                            alt=""
                            className="hidden h-full w-full object-cover md:block md:object-[left_center] lg:ml-auto lg:w-auto lg:object-contain xl:hidden"
                        />
                    </div>

                    <div className="relative grid content-start gap-12 px-8 py-12 md:px-12 md:pb-20">
                        <Image
                            src={smallBg}
                            alt=""
                            className="absolute inset-0 -z-[1] h-full w-full md:object-cover xl:hidden"
                        />

                        <h1
                            className="max-w-[55.4rem] font-latoExtraBold text-[3.6rem] uppercase leading-[4rem] text-white lg:text-[4.8rem] lg:leading-[4.8rem] [&>span]:text-[3.6rem] [&>span]:text-[#FFB800] lg:[&>span]:text-[4.8rem] lg:[&>span]:leading-[4.8rem]"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h1>
                        <Button2
                            type="anchor"
                            text="FREE suitability check"
                            link="/suitability-check"
                            title="FREE suitability check"
                            className="sitemap-link justify-self-start border-[#94CAFF] bg-[#94CAFF] text-center text-[#003E79] hover:border-white"
                        />

                        <div className="-mt-6 grid gap-2 md:mt-12">
                            <span
                                className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
                                {priceText}
                            </span>
                            <span
                                className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#00BFFF] md:text-[2.4rem] md:leading-[3.2rem]">
                                {financeText}
                            </span>
                        </div>
                        <Reviews {...reviewsText} />
                    </div>
                </div>

                <div
                    className={`grid grid-cols-2 md:grid-cols-3 xl:max-w-[116rem] xl:justify-self-center ${styles.styles}`}>
                    <div className="bg-[#005DAF] md:hidden">
                        <Image {...smallImage} className="h-full w-full object-cover"/>
                    </div>
                    <>
                        {cardList.map((card, index) => (
                            <div
                                key={index}
                                className={twMerge(
                                    'grid xl:translate-y-full card content-start justify-items-center gap-2 bg-[#94CAFF] py-12 px-4 md:p-12',
                                    card.className
                                )}
                            >
                                <Image
                                    alt=""
                                    width={71}
                                    height={71}
                                    {...(card.icon as any)}
                                    className="max-h-[3.6rem] max-w-[3.6rem] md:max-h-max md:max-w-max"
                                />
                                <span className="font-mulishBold text-[#003E79]">{card.title}</span>
                                <p className="max-w-[26rem] text-center text-[#003E79]">{card.description}</p>
                            </div>
                        ))}
                    </>
                </div>
            </div>
        </div>
    );
};

interface ReviewsProps {
    google: string;
    trustpilot: string;
}

/**
 * Reviews Component
 *
 * This component displays customer reviews from Trustpilot and Google. It includes the respective
 * review counts and associated icons for each platform.
 *
 * @interface ReviewsProps
 * @property {string} google - The number of Google reviews.
 * @property {string} trustpilot - The number of Trustpilot reviews.
 *
 * @component
 * @param {ReviewsProps} props - The properties passed to the Reviews component.
 * @returns {JSX.Element} - The Reviews component JSX representation.
 */
const Reviews = ({ google, trustpilot }: ReviewsProps): JSX.Element => {
    return (
        <div
            className="flex flex-wrap justify-start gap-4 justify-self-start md:-mt-6 md:justify-items-stretch lg:grid lg:grid-cols-[20rem_20rem]">
            {/* Review 1 */}
            <div
                className="grid grid-cols-1 place-items-center gap-4 rounded-[0.5rem] bg-white p-4 md:w-full md:max-w-[19.8rem] md:py-4 md:shadow-shadow1 xl:gap-2">
                <span className="grid place-items-start">
                    <Image src="/images/icons/icon-trustpilot-stars.svg" alt="" width={77} height={14} quality={70}/>
                </span>
                <span
                    className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading xl:block">
                    Trust Pilot
                </span>
                <span
                    className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    {trustpilot}{' '}
                    <span
                        className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        reviews
                    </span>
                </span>
            </div>

            {/* Review 2 */}
            <div
                className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 rounded-[0.5rem] bg-white p-4 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-center md:gap-0 md:py-4 md:shadow-shadow1 ">
                <span className="grid place-items-center">
                    <FcGoogle className="h-[2rem] w-[2rem]"/>
                </span>
                <span
                    className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                    Google
                </span>
                <span
                    className="col-span-2 flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                    {google}{' '}
                    <span
                        className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        reviews
                    </span>
                </span>
            </div>
        </div>
    );
};

export default MastheadICL;
