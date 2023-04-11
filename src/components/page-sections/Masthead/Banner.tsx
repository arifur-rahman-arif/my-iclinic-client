import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/Heading.module.scss';
import { MastheadInterface } from './Masthead';
import gsap from 'gsap';
import IconCheck from '@/icons/icon-check-dark.svg';

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
    const [startH2Animation, setStartH2Animation] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setStartH2Animation(true);
        }, 1000);

        setTimeout(() => {
            if (!priceRef.current) return;

            gsap.to(priceRef.current, {
                duration: 2,
                width: 'auto'
            });
        }, 2000);
    }, []);

    return (
        <div
            className={`masthead-banner mt-24 grid grid-cols-1 items-start justify-start gap-12 rounded-primary bg-white p-12 md:mt-0 ${bannerWidth} md:grid-cols-[auto_1fr]`}
            ref={bannerRef}
        >
            {/* Reviews */}
            <div className="flex flex-wrap items-center justify-start gap-8 md:col-start-2 md:row-start-2 md:justify-end md:self-center">
                {/* Review 1 */}
                <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="font-mulishBold text-[1.4rem] font-extrabold uppercase leading-[1.4rem]">
                        Google
                    </span>
                    <span className="col-span-2 font-mulishBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem]">
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
                    <span className="font-mulishBold text-[1.4rem] font-extrabold uppercase leading-[1.4rem]">
                        Trust Pilot
                    </span>
                    <span className="font-mulishBold text-[1.2rem] font-extrabold uppercase leading-[1.2rem]">
                        {trustPilotReviews || '4.8 | 315 reviews'}
                    </span>
                </div>
            </div>
            {/* Headings */}
            <div className="grid w-full grid-cols-1 gap-6 md:col-span-2 md:gap-12">
                <div className={`${styles.styles}`}>{h1Title}</div>
                {h2Title && <div className={`${startH2Animation ? styles.styles : ''}`}>{h2Title}</div>}

                <Image
                    src="/images/icons/icon-pin-yellow.svg"
                    quality={10}
                    width={150}
                    height={2}
                    alt=""
                    className=""
                />
            </div>
            {/* Price */}
            {!excludePriceComponent && !bannerExtraComponents && (
                <div className="grid grid-cols-[auto_1fr] justify-items-start gap-4 md:self-center">
                    <span
                        className={`block h-full w-2 bg-heading2 ${priceTextExtra ? 'row-span-2' : 'row-span-1'}`}
                    ></span>
                    <span
                        className="w-0 overflow-hidden whitespace-nowrap font-latoBold text-[2rem] uppercase leading-[2.4rem] text-heading2 line-clamp-2 md:text-[2.4rem] md:leading-[2.4rem]"
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
