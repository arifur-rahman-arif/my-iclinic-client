import { Container } from '@/components/container';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export interface PriceSectionInterface {
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
 * @param {PriceSectionInterface} { price, priceText, priceDescription, priceDescBoldText }
 * @returns {*}
 */
const FoldItem = ({
    price,
    priceText,
    priceDescription,
    priceDescBoldText,
    firstTopLeftRounded,
    lastBottomLeftRounded
}: PriceSectionInterface): JSX.Element => {
    const containerElement = useRef<HTMLDivElement | null>(null);
    const cardElement = useRef<HTMLDivElement | null>(null);
    const priceElement = useRef<HTMLSpanElement | null>(null);
    const priceTextElement = useRef<HTMLSpanElement | null>(null);
    const descTextElement = useRef<HTMLParagraphElement | null>(null);

    const pinRef = useRef<any>(null);

    useEffect(() => {
        if (!containerElement.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                start: 'top 70%',
                trigger: containerElement.current
            }
        });

        tl.to(cardElement.current, {
            autoAlpha: 1,
            duration: 1.5
        })
            .to(
                priceElement.current,
                {
                    autoAlpha: 1,
                    duration: 1,
                    translateY: 0
                },
                '-=1'
            )
            .to(
                priceTextElement.current,
                {
                    autoAlpha: 1,
                    duration: 1,
                    translateY: 0
                },
                '-=1'
            )
            .to(
                pinRef.current,
                {
                    duration: 1.5,
                    width: '15rem'
                },
                '-=1'
            )
            .to(
                descTextElement.current,
                {
                    autoAlpha: 1,
                    duration: 1,
                    translateY: 0
                },
                '-=0.5'
            );
    }, []);

    return (
        <>
            {/* Original element */}
            <div
                className={`flex w-full flex-col items-start justify-start gap-6 px-16 py-[10rem] opacity-0 md:px-32 lg:max-h-[32.5rem] lg:max-w-[56rem] ${
                    firstTopLeftRounded && 'bg-darkBlue lg:rounded-tl-primary'
                } ${lastBottomLeftRounded && 'bg-midDarkBlue lg:rounded-bl-primary'}`}
                ref={cardElement}
            >
                <span
                    ref={priceElement}
                    className="translate-y-2/4 font-latoBold text-[3.2rem] leading-[3.6rem] text-yellow opacity-0 md:text-[4.8rem] md:leading-[4.8rem]"
                >
                    {price}
                </span>
                <span
                    ref={priceTextElement}
                    className="card-text w-full max-w-[34rem] translate-y-2/4 font-latoBold text-[3.2rem] leading-[3.6rem] text-white opacity-0"
                >
                    {priceText}
                </span>
            </div>
            <Container
                className="flex flex-col items-start justify-start gap-6 md:justify-center"
                ref={containerElement}
            >
                <div className="h-4 w-0" ref={pinRef}>
                    <Image
                        src="/images/icons/icon-pin-yellow.svg"
                        quality={10}
                        width={150}
                        height={2}
                        alt=""
                        className="h-4 w-[15rem]"
                    />
                </div>
                <p
                    className="w-full max-w-[50rem] translate-y-4 font-latoLight text-[2.8rem] leading-[3.2rem] opacity-0 md:text-[3.2rem] md:leading-[3.6rem]"
                    ref={descTextElement}
                >
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
