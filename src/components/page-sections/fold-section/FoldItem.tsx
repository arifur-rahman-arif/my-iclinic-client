import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/container';
import styles from './styles/FoldItem.module.scss';
import gsap from 'gsap';
import { useDeviceSize } from '@/hooks';

export interface FoldItemInterface {
    price: string;
    priceText: string;
    priceDescription: string;
    priceDescBoldText?: string;
    firstTopLeftRounded?: boolean;
    lastBottomLeftRounded?: boolean;
}

/**
 * FoldItem component
 *
 * @param {FoldItemInterface} { price, priceText, priceDescription, priceDescBoldText }
 * @returns {*}
 */
const FoldItem = ({
    price,
    priceText,
    priceDescription,
    priceDescBoldText,
    firstTopLeftRounded,
    lastBottomLeftRounded
}: FoldItemInterface) => {
    const foldedElement = useRef<HTMLDivElement>(null);
    const originalElement = useRef<HTMLDivElement>(null);
    const deviceSize = useDeviceSize();

    useEffect(() => {
        if (!foldedElement.current || deviceSize === '') return;

        gsap.to(foldedElement.current, {
            transform: 'rotateY(0deg)',
            left: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: foldedElement.current,
                start: deviceSize === 'large' ? 'top 70%' : 'top center',
                onEnter: () => {
                    originalElement.current && originalElement.current.classList.add('original-element-active');
                }
            }
        });
    }, [deviceSize]);

    return (
        <>
            <div className={`${styles.styles} relative`}>
                {/* Original element */}
                <div
                    ref={originalElement}
                    className={`original-element flex w-full flex-col items-start justify-start gap-6 px-16 py-[10rem] md:px-32 lg:max-h-[32.5rem] lg:max-w-[56rem] ${
                        firstTopLeftRounded && 'bg-darkBlue lg:rounded-tl-primary '
                    } ${lastBottomLeftRounded && 'bg-midDarkBlue lg:rounded-bl-primary'} `}
                >
                    <span className="font-latoBold text-[3.2rem] leading-[3.6rem] text-yellow md:text-[4.8rem] md:leading-[4.8rem]">
                        {price}
                    </span>
                    <span className="w-full max-w-[34rem] font-latoBold text-[3.2rem] leading-[3.6rem] text-white">
                        {priceText}
                    </span>
                </div>
                {/* Clone element to have fold animation */}
                <div
                    ref={foldedElement}
                    className={`clone-element absolute top-0 left-0 flex w-full flex-col items-start justify-start gap-6 px-16 py-[10rem] md:px-32 lg:max-h-[32.5rem] lg:max-w-[56rem] ${
                        firstTopLeftRounded && 'bg-darkBlue lg:rounded-tl-primary '
                    } ${lastBottomLeftRounded && 'bg-midDarkBlue lg:rounded-bl-primary'} `}
                >
                    <span className="font-latoBold text-[3.2rem] leading-[3.6rem] text-yellow md:text-[4.8rem] md:leading-[4.8rem]">
                        {price}
                    </span>
                    <span className="w-full max-w-[34rem] font-latoBold text-[3.2rem] leading-[3.6rem] text-white">
                        {priceText}
                    </span>
                </div>
            </div>
            <Container className="flex flex-col items-start justify-start gap-6 md:justify-center">
                <Image
                    src="/images/icons/icon-pin-yellow.svg"
                    quality={10}
                    width={150}
                    height={2}
                    alt=""
                    className=""
                />
                <p className="w-full max-w-[50rem] font-latoLight text-[2.8rem] leading-[3.2rem] md:text-[3.2rem] md:leading-[3.6rem]">
                    {priceDescription}
                    {priceDescBoldText ? (
                        <strong className="font-latoBold text-[2.8rem] leading-[3.2rem] text-yellow md:text-[3.2rem] md:leading-[3.6rem]">
                            {' '}
                            100% FREE.
                        </strong>
                    ) : (
                        <></>
                    )}
                </p>
            </Container>
        </>
    );
};

export default FoldItem;
