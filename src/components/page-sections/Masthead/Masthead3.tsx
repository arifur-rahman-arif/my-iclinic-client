import { useReviewHook } from '@/hooks';
import MastheadImageSmall from '@/masthead/masthead-home-small.png';
// import { BookConsultation } from '@/page-sections/index';
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
        <div className="relative grid min-h-[74rem] content-start md:min-h-max md:grid-cols-2 md:gap-12 lg:gap-20 xl:grid-cols-[auto_1fr] xl:gap-32">
            <Image
                src={MastheadImageSmall}
                alt=""
                className="absolute inset-0 -z-[1] h-full w-full object-cover md:hidden"
                fill
                priority
            />

            <Image
                src="/images/masthead/masthead-home-bg.png"
                alt=""
                className="absolute inset-0 -z-[1] hidden h-full w-full md:block"
                fill
                priority
            />

            <Image
                src={image}
                width={810}
                height={600}
                unoptimized
                priority={true}
                alt=""
                className="col-start-2 row-span-2 row-start-2 hidden self-stretch object-cover md:block md:justify-self-end xl:row-start-1 xl:self-end xl:justify-self-end xl:object-center"
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
                className="sitemap-link group/link mt-12 grid w-full max-w-[55.5rem] grid-cols-[auto_1fr] content-start gap-1 rounded-tr-[6rem] bg-[#003E79] py-10 px-8 pr-16 md:row-span-2 md:self-end lg:pl-12 xl:col-span-2 xl:col-start-1 xl:row-span-1 xl:row-start-2 xl:self-end xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] 2xl:max-w-[80rem]"
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

export interface ReviewsProps {
    trustpilot: {
        total: string;
        average: string;
    };
}

/**
 * Reviews is a component that displays reviews and ratings from different sources such as Trust Pilot and Google.
 *
 * @returns {JSX.Element} The rendered Reviews component.
 */
export const Reviews = (): JSX.Element => {
    const { data, isLoading } = useReviewHook();

    return (
        <div className="relative z-[2] mx-8 mt-24 grid w-full max-w-[22.7rem] place-items-center gap-7 overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-shadow1 md:mx-0 md:max-w-[36.1rem] md:self-end lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start xl:mt-[10rem] xl:justify-self-start xl:px-0 xl:pt-24 xl:pb-0">
            <div className="flex flex-wrap items-end justify-start gap-10 md:justify-center">
                {/* Review 1 */}
                <Link
                    href="https://www.trustpilot.com/review/my-iclinic.co.uk"
                    title="Trustpilot all reviews"
                    target="_blank"
                    className="grid grid-cols-1 place-items-center gap-4 rounded-[0.5rem] md:w-full md:max-w-[19.8rem] md:py-4 md:shadow-shadow1 xl:gap-2"
                >
                    <span className="grid place-items-start">
                        <Image
                            src="/images/icons/icon-trustpilot-stars.svg"
                            alt=""
                            width={77}
                            height={14}
                            quality={70}
                        />
                    </span>
                    {isLoading ? (
                        <Image src="/images/icons/icon-loader.svg" alt="Loading..." width={24} height={24} />
                    ) : (
                        <>
                            <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading xl:block">
                                Trust Pilot
                            </span>
                            <span className="flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                {data?.trustpilot?.average || '4.9'} | {data?.trustpilot?.total || '340'}{' '}
                                <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                                    reviews
                                </span>
                            </span>
                        </>
                    )}
                </Link>

                {/* Review 2 */}
                <Link
                    href="https://www.google.com/search?q=my-iclinic+reviews&rlz=1C1UEAD_enBD1046BD1046&oq=my-iclinic+reviews&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIGCAEQIxgnMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NjQ0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x487619c2c545175b:0x38f89f9a0ceedc3f,1"
                    target="_blank"
                    title="All google reviews"
                    className="grid grid-cols-[auto_1fr] items-center justify-start gap-2 md:w-full md:max-w-[19.8rem] md:grid-cols-[auto_auto] md:justify-center md:gap-0 md:py-4 md:shadow-shadow1 "
                >
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                        Google
                    </span>
                    <span className="col-span-2 flex items-center justify-center gap-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        4.9 | 93{' '}
                        <span className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading md:block">
                            reviews
                        </span>
                    </span>
                </Link>
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

                {/* <BookConsultation
                    buttonClassName=""
                    modalElement={
                        <>
                            <iframe
                                src=""
                                width={600}
                                height={700}
                                className="w-full md:min-h-[70rem]"
                            ></iframe>
                        </>
                    }
                    maxWidth="70rem"
                >
                </BookConsultation> */}
                <Link
                    href="https://connect.pabau.com/bookings.php?compid=11842"
                    target="_blank"
                    className="mt-4 flex items-center justify-center rounded-[0.5rem] border-2 border-solid border-[#003E79] bg-[#003E79] py-3 px-5 font-mulishBold text-white transition-all duration-500 hover:bg-transparent hover:text-[#003E79] xl:w-full xl:rounded-none xl:border-b-0 xl:border-l-0 xl:border-r-0 xl:py-6"
                    title="FREE Consultation"
                >
                    Book a Consultation
                </Link>
            </div>
        </div>
    );
};

export default Masthead3;
