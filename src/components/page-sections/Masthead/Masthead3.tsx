import MastheadImageSmall from '@/masthead/masthead-home-small.png';
import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

interface Masthead3Props {
    title: string;
    subTitle: string;
    image: string;
}

/**
 * Masthead3 is a component that displays a dynamic masthead section with a background image, title, subtitle, and content.
 *
 * @param {string} title - The main title or heading for the masthead.
 * @param {string} subTitle - The subtitle or additional information for the masthead.
 * @param {string} image - The image source URL for the masthead.
 * @returns {JSX.Element} The rendered Masthead3 component.
 */
const Masthead3 = ({ title, subTitle, image }: Masthead3Props): JSX.Element => {
    return (
        <div className="relative grid min-h-[74rem] content-start md:min-h-max md:grid-cols-2">
            <Image
                src={MastheadImageSmall}
                alt=""
                className="absolute inset-0 -z-[1] h-full w-full object-cover md:hidden"
                fill
            />

            <Image
                src="/images/masthead/masthead-home-bg.png"
                alt=""
                className="absolute inset-0 -z-[1] hidden h-full w-full md:block"
                fill
            />

            <Image
                src={image}
                width={989}
                height={735}
                quality={100}
                priority={true}
                alt=""
                className="col-start-2 row-span-2 row-start-1 hidden self-stretch object-cover object-[-25rem_center] md:block lg:object-[-12rem_center] xl:justify-self-end xl:object-center"
            />

            <div className="grid content-start px-8 pt-12 md:pt-24 lg:pl-12 xl:pt-40 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <h1 className="max-w-[31.6rem] text-[3.6rem] uppercase leading-[4rem] text-white md:max-w-[49rem] md:text-[4.8rem] md:leading-[4.8rem]">
                    {title}
                </h1>
                <div className="mt-6 flex items-center justify-start gap-4">
                    <Image
                        src="/images/section-images/5-blue-dots.png"
                        alt=""
                        width={66}
                        height={15}
                        className="hidden sm:block"
                    />
                    <Image
                        src="/images/section-images/3-blue-dots.png"
                        alt=""
                        width={32}
                        height={15}
                        className="sm:hidden"
                    />
                    <h2 className="font-mulishBold !text-[1.6rem] uppercase !leading-[2.4rem] text-[#D1E8FE]">
                        {subTitle}
                    </h2>
                </div>
                <div className="mt-12 grid gap-2">
                    <strong className="font-latoBold text-[2rem] leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
                        Did you know?
                    </strong>

                    <p className="max-w-[39.7rem] text-[#D1E8FE]">
                        The average contact lens wearer uses over{' '}
                        <span className="font-mulishBold text-white">20,000 litres</span> of water,{' '}
                        <span className="font-mulishBold text-white">82kg of plastic</span> and spends 670 hours
                        inserting and removing their contacts. Their vision correction would take 26 seconds and last a
                        lifetime.
                    </p>
                </div>
            </div>

            <Reviews />

            <Link
                href="/suitability-check"
                title="Free suitability check"
                className="sitemap-link group/link mt-12 grid w-full max-w-[55.5rem] grid-cols-[auto_1fr] content-start gap-1 rounded-tr-[6rem] bg-[#003E79] py-10 px-8 pr-16 lg:pl-12 xl:col-span-2 xl:col-start-1 xl:row-start-2 xl:self-end xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] 2xl:max-w-[80rem]"
            >
                <span className="flex items-center justify-start gap-4">
                    <span className="h-[1.2rem] w-[1.2rem] rounded-full bg-[#00BFFF]"></span>
                    <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-[#00BFFF]">
                        Free suitability check
                    </span>
                </span>
                <span className="leading-8 text-[#E1F1FF] xl:hidden">Suitable for laser eye surgery?</span>
                <span className="hidden max-w-[25rem] leading-8 text-[#E1F1FF] xl:block">
                    Would you like to know if you are suitable for laser eye surgery?
                </span>

                <Image
                    src="/images/icons/icons-arrow-blue-bg.svg"
                    alt=""
                    width={78}
                    height={78}
                    className="col-start-2 row-span-2 row-start-1 max-h-[5.2rem] max-w-[5.2rem] justify-self-end transition-all duration-500 group-hover/link:translate-x-4 md:max-h-full md:max-w-full"
                />
            </Link>
        </div>
    );
};

/**
 * Reviews is a component that displays reviews and ratings from different sources such as Trust Pilot and Google.
 *
 * @returns {JSX.Element} The rendered Reviews component.
 */
const Reviews = (): JSX.Element => {
    return (
        <div className="relative z-[2] mx-8 mt-24 grid w-full max-w-[22.7rem] place-items-center gap-7 overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-shadow1 md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[36.1rem] md:self-end lg:self-center xl:justify-self-center xl:px-0 xl:pt-24 xl:pb-0">
            <div className="flex flex-wrap items-end justify-start gap-10 md:justify-center">
                {/* Review 1 */}
                <div className="grid grid-cols-1 place-items-center gap-4 rounded-[0.5rem] md:w-full md:max-w-[19.8rem] md:py-4 md:shadow-shadow1 xl:gap-2">
                    <span className="grid place-items-start">
                        <Image
                            src="/images/icons/icon-trustpilot-stars.svg"
                            alt=""
                            width={77}
                            height={14}
                            quality={70}
                        />
                    </span>
                    <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading xl:block">
                        Trust Pilot
                    </span>
                    <span className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        4.8 | 315{' '}
                        <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                            reviews
                        </span>
                    </span>
                </div>

                {/* Review 2 */}
                <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-center md:gap-0 md:py-4 md:shadow-shadow1 ">
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        Google
                    </span>
                    <span className="col-span-2 flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        4.8 | 35{' '}
                        <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                            reviews
                        </span>
                    </span>
                </div>
            </div>

            <p className="font-mulishBold text-[1.4rem] leading-8 text-heading md:text-[1.6rem] md:leading-[2.4rem] xl:mt-7 xl:max-w-[30rem] xl:justify-self-center xl:px-8">
                Over{' '}
                <span className="font-mulishBold text-[1.4rem] leading-8 text-[#893277] md:text-[1.6rem] md:leading-[2.4rem]">
                    100,000 successful
                </span>{' '}
                cataract operations have been performed by the My iClinic surgeons.
            </p>

            <div className="mt-4 grid place-items-center gap-2 xl:w-full xl:place-items-stretch">
                <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-[#893277] xl:justify-self-center xl:text-[2rem] xl:leading-[2.8rem]">
                    0% Finance available
                </span>

                <BookConsultation
                    buttonClassName="text-white mt-4 font-mulishBold xl:w-full rounded-[0.5rem] xl:rounded-none bg-[#003E79] py-3 px-5 xl:py-6 transition-all duration-500 hover:bg-transparent hover:text-[#003E79] border-2 xl:border-b-0 xl:border-l-0 xl:border-r-0 border-solid border-[#003E79]"
                    modalElement={
                        <>
                            <iframe
                                src="https://connect.pabau.com/bookings.php?compid=11842"
                                width={600}
                                height={700}
                                className="w-full md:min-h-[70rem]"
                            ></iframe>
                        </>
                    }
                    maxWidth="70rem"
                >
                    <button>FREE Consultation</button>
                </BookConsultation>
            </div>
        </div>
    );
};

export default Masthead3;
