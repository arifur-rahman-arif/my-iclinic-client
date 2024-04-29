import { BreadCrumb } from '@/components/Breadcrumb';
import { useReviewHook } from '@/hooks';
import Link from 'next/link';
import SuitabilityLink from './SuitabilityLink';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';

interface Masthead2Props {
    title: string;
    subTitle: string;
    image?: string;
    googleReviews?: string;
    trustPilotReviews?: string;
}

/**
 * Masthead component
 *
 * @param {string} title
 * @param {string} subTitle
 * @param {string | undefined} image
 * @param {string | undefined} googleReviews
 * @param {string | undefined} trustPilotReviews
 * @returns {JSX.Element}
 * @constructor
 */
const Masthead2 = ({ title, subTitle, image, googleReviews, trustPilotReviews }: Masthead2Props): JSX.Element => {
    const { data, isLoading } = useReviewHook();

    return (
        <div className="mt-8">
            <div
                className="grid gap-16 px-8 md:grid-cols-2 lg:gap-12 xl:ml-[calc(calc(100%_-_var(--container-width))_/_2)] xl:grid-cols-[auto_1fr] xl:px-0">
                <div className="grid items-start gap-6 lg:gap-12">
                    <BreadCrumb className="mt-0 !px-0 md:flex"/>
                    <h1 className="max-w-[43.7rem] !font-latoBold md:!font-latoExtraBold">
                        {title || 'North London\'s Eye Hospital'}
                    </h1>

                    <div className="grid grid-flow-col justify-start gap-2 md:place-items-center xl:self-start">
                        <Image src="/images/icons/icon-right-double.svg" alt="Right Icon" width={24} height={24}/>
                        <h2 className="font-latoBold text-[2rem] normal-case leading-[2.8rem] text-[#384043]">
                            {subTitle || 'Premium eye care for all the family'}
                        </h2>
                    </div>

                    {/* Reviews */}
                    <div className="flex flex-wrap items-end justify-start gap-8">
                        {/* Review 1 */}
                        <Link
                            href="https://www.google.com/search?q=my-iclinic+reviews&rlz=1C1UEAD_enBD1046BD1046&oq=my-iclinic+reviews&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIGCAEQIxgnMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NjQ0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x487619c2c545175b:0x38f89f9a0ceedc3f,1"
                            target="_blank"
                            title="All google reviews"
                            className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                            <span className="grid place-items-center">
                                <FcGoogle className="h-[2.4rem] w-[2.4rem]"/>
                            </span>
                            <span
                                className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                Google
                            </span>
                            <span
                                className="col-span-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                {googleReviews || '4.8 | 35 reviews'}
                            </span>
                        </Link>
                        {/* Review 2 */}
                        <Link
                            href="https://www.trustpilot.com/review/my-iclinic.co.uk" title="Trustpilot all reviews"
                            target="_blank"
                            className="grid grid-cols-1 items-center justify-start gap-4 xl:gap-2">
                            <span className="grid place-items-start">
                                <Image
                                    src="/images/icons/icon-trustpilot-stars.svg"
                                    alt=""
                                    width={77}
                                    height={14}
                                    quality={70}
                                />
                            </span>

                            {isLoading ?
                                <Image src="/images/icons/icon-loader.svg" alt="Loading..." width={24} height={24}/> :
                                <>
                                    <span
                                        className="hidden font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading xl:block">
                                        Trustpilot
                                    </span>
                                    <span
                                        className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                        {data?.trustpilot?.average || '4.9'} | {data?.trustpilot?.total || '340'}{' '}reviews
                                    </span>
                                </>
                            }
                        </Link>
                    </div>

                    <SuitabilityLink/>
                </div>

                <div
                    className="grid gap-4 xs:grid-cols-[minmax(23rem,_1fr)_1fr] md:max-h-[58.2rem] lg:gap-6 xl:grid-rows-[1fr_auto] xl:gap-10">
                    <p className="grid rounded-primary border border-[#E6E7E8] p-4 font-latoMedium text-[1.8rem] leading-[2.8rem] tracking-wide text-[#061014E5] opacity-90 shadow-sm xl:place-items-center xl:p-10 xl:text-[3rem] xl:leading-[3.6rem]">
                        The average contact lens wearer uses over 20,000 litres of water, 82kg of plastic and spends 670
                        hours inserting and removing their contacts. Their vision correction would take 26 seconds and
                        last a lifetime
                    </p>
                    <Image
                        src={image || '/images/masthead/masthead-home.webp'}
                        alt="North London's Eye Hospital"
                        width={392}
                        height={582}
                        priority={true}
                        className="h-full max-h-[30rem] w-full rounded-primary object-cover xs:max-h-full xl:row-span-2 xl:rounded-tr-none xl:rounded-br-none"
                    />
                    <div
                        className="grid grid-flow-col gap-2 rounded-primary bg-brandLight p-6 xs:col-span-full xl:col-span-1 xl:self-start xl:p-14">
                        <Image
                            src="/images/icons/icon-right-double.svg"
                            alt="Right Icon"
                            className="mt-1"
                            width={24}
                            height={24}
                        />
                        <p className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#51585B]">
                            Over{' '}
                            <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-[#FFB800]">
                                100,000 successful
                            </span>{' '}
                            cataract operations have been performed by the My iClinic surgeons.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masthead2;
