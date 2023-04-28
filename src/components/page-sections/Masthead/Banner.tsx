import { BreadCrumb } from '@/components/Breadcrumb';
import IconCheck from '@/icons/icon-check-dark.svg';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MastheadInterface } from './Masthead';
import styles from './styles/Heading.module.scss';

interface BannerInterface extends Omit<MastheadInterface, 'imageSmall' | 'imageMedium' | 'imageLarge'> {}

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
    trustPilotReviews
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

    return (
        <div
            className={`masthead-banner grid grid-cols-1 items-start justify-start gap-12 rounded-primary bg-white px-8 md:mt-0 md:p-12 lg:gap-24 xl:pb-24 ${bannerWidth} md:grid-cols-[auto_1fr]`}
            ref={bannerRef}
        >
            <BreadCrumb className="hidden md:col-span-full md:!flex" />

            {/* Headings */}
            <div className="grid w-full grid-cols-1 gap-6 md:col-span-2 md:gap-12">
                <div className={`${styles.styles}`}>{h1Title}</div>
                {h2Title && h2Title}

                <Image src="/images/icons/icon-pin-grey.svg" quality={2} width={331} height={2} alt="" className="" />
            </div>

            {/* Reviews */}
            <div className="flex flex-wrap items-center justify-start gap-8 md:col-start-2 md:row-start-3 md:justify-end md:self-center">
                {/* Review 1 */}
                <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        Google
                    </span>
                    <span className="col-span-2 font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        {googleReviews || '4.8 | 35 reviews'}
                    </span>
                </div>
                {/* Review 2 */}
                <div className="grid grid-cols-1 items-center justify-start gap-2">
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
                        Trust Pilot
                    </span>
                    <span className="font-mulishExtraBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem] text-heading">
                        {trustPilotReviews || '4.8 | 315 reviews'}
                    </span>
                </div>
            </div>

            {/* Price */}
            {!excludePriceComponent && !bannerExtraComponents && (
                <div className="grid grid-cols-[auto_1fr] justify-items-start gap-4 md:self-center">
                    <span
                        className={`block h-full w-2 bg-heading2 ${priceTextExtra ? 'row-span-2' : 'row-span-1'}`}
                    ></span>
                    <span
                        className="w-0 font-latoBold text-[1.8rem] uppercase leading-[2.4rem] text-heading2 line-clamp-2 xs:whitespace-nowrap md:text-[2.4rem] md:leading-[2.4rem]"
                        ref={priceRef}
                    >
                        {priceText || '£2,400 per eye'}
                    </span>
                    {priceTextExtra || ''}
                </div>
            )}
            {/* Banner list */}
            {list && (
                <div className="grid grid-cols-2 gap-y-2 gap-x-12">
                    {list.map((item, index) => (
                        <div className="flex items-center justify-start gap-4" key={index}>
                            <Image src={IconCheck} alt="" />
                            <span className="font-mulishBold text-[2rem] leading-[2.8rem]">{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {bannerExtraComponents && bannerExtraComponents}
        </div>
    );
};

export default Banner;
