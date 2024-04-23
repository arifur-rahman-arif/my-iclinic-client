import { BreadCrumb } from '@/components/Breadcrumb';
import { useReviewHook } from '@/hooks';
import IconCheck from '@/icons/icon-check-dark.svg';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { twMerge } from 'tailwind-merge';
import { MastheadInterface } from './Masthead';
import styles from './styles/Heading.module.scss';

interface BannerInterface extends Omit<MastheadInterface, 'imageSmall' | 'imageMedium' | 'imageLarge'> {
    excludeReviews?: boolean;
    breadcrumbClassName?: string;
    breadcrumbLinkClassName?: string;
    breadcrumbIconClassName?: string;
    activeLinkClass?: string;
    excludePinImage?: boolean;
}

/**
 * Banner component for the masthead
 *
 * @returns {*}  {JSX.Element}
 */
const Banner = ({
    h1Title,
    h2Title,
    priceText,
    priceTextExtra,
    bannerWidth,
    excludePriceComponent,
    list,
    bannerExtraComponents,
    googleReviews,
    trustPilotReviews,
    suitabilityButton,
    bannerClassName,
    excludeReviews,
    breadcrumbClassName,
    breadcrumbLinkClassName,
    breadcrumbIconClassName,
    activeLinkClass,
    excludePinImage
}: BannerInterface): JSX.Element => {
    const priceRef = useRef<HTMLSpanElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!priceRef.current) return;

        gsap.to(priceRef.current, {
            duration: 2,
            width: 'auto'
        });
    }, []);

    const { data, isLoading } = useReviewHook();

    return (
        <div
            className={twMerge(
                `masthead-banner grid grid-cols-1 items-start justify-start gap-12 rounded-primary bg-white px-8 md:mt-0 md:p-12 lg:gap-24 xl:pb-24 ${bannerWidth} md:grid-cols-[auto_1fr]`,
                bannerClassName
            )}
            ref={bannerRef}
        >
            <BreadCrumb
                linkClassName={breadcrumbLinkClassName}
                className={twMerge('hidden md:col-span-full md:!flex', breadcrumbClassName)}
                activeLinkClass={activeLinkClass}
                pathClassName={breadcrumbIconClassName}
            />

            {/* Headings */}
            <div className={`grid w-full max-w-[70rem] grid-cols-1 gap-6 md:col-span-2 md:gap-12 ${styles.styles}`}>
                {h1Title}
                {h2Title && h2Title}

                {!excludePinImage && (
                    <Image
                        src="/images/icons/icon-pin-grey.svg"
                        quality={2}
                        width={331}
                        height={2}
                        alt=""
                        className=""
                    />
                )}
            </div>

            {/* Reviews */}
            {!excludeReviews && (
                <div className="flex flex-wrap items-end justify-start gap-8 md:col-start-2 md:row-start-3 md:justify-end md:self-center">
                    {/* Review 1 */}
                    <Link
                        href="https://www.google.com/search?q=my-iclinic+reviews&rlz=1C1UEAD_enBD1046BD1046&oq=my-iclinic+reviews&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIGCAEQIxgnMggIAhAAGBYYHjIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NjQ0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x487619c2c545175b:0x38f89f9a0ceedc3f,1"
                        target="_blank"
                        title="All google reviews"
                        className="grid grid-cols-[auto_1fr] items-center justify-start gap-2"
                    >
                        <span className="grid place-items-center">
                            <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                        </span>
                        <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                            Google
                        </span>
                        <span className="col-span-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                            {googleReviews || '4.9 | 73 reviews'}
                        </span>
                    </Link>
                    {/* Review 2 */}
                    <Link
                        target="_blank"
                        href="https://www.trustpilot.com/review/my-iclinic.co.uk"
                        title="Trustpilot all reviews"
                        className="grid grid-cols-1 items-center justify-start gap-2"
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
                        <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                            Trustpilot
                        </span>
                        {isLoading ? (
                            <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                Loading...
                            </span>
                        ) : (
                            <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                                {data?.trustpilot?.average || '4.9'} | {data?.trustpilot?.total || '340'} reviews
                            </span>
                        )}
                    </Link>
                </div>
            )}

            {/* Price */}
            {!excludePriceComponent && !bannerExtraComponents && (
                <div className="grid grid-cols-[auto_1fr] justify-items-start gap-4 md:self-center">
                    <span
                        className={`block h-full w-2 bg-heading2 ${priceTextExtra ? 'row-span-2' : 'row-span-1'}`}
                    ></span>
                    <span
                        className="line-clamp-2 w-0 font-latoBold text-[1.8rem] uppercase leading-[2.4rem] text-heading2 xs:whitespace-nowrap md:text-[2.4rem] md:leading-[2.4rem]"
                        ref={priceRef}
                    >
                        {priceText || '£2,400 per eye'}
                    </span>
                    {priceTextExtra || ''}
                </div>
            )}
            {/* Banner list */}
            {list && (
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                    {list.map((item, index) => (
                        <div className="flex items-center justify-start gap-4" key={index}>
                            <Image src={IconCheck} alt="" />
                            <span className="font-mulishBold text-[2rem] leading-[2.8rem]">{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {bannerExtraComponents && bannerExtraComponents}
            {suitabilityButton ? <div className="col-span-full">{suitabilityButton}</div> : null}
        </div>
    );
};

export default Banner;
