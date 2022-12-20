import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { annotate } from 'rough-notation';
/**
 * Banner component for the masthead
 *
 * @returns {*}  {JSX.Element}
 */
const Banner = (): JSX.Element => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        h1Ref.current &&
            tl
                .to(h1Ref.current, {
                    transform: 'scale(1)',
                    duration: 3,
                    transition: 'cubic-bezier(0.11, 0, 0.5, 0)'
                })
                .to(
                    '.h1-inner-span',
                    {
                        filter: 'blur(0px)',
                        stagger: {
                            amount: 0.7
                        },
                        duration: 3,
                        opacity: 1,
                        transition: 'cubic-bezier(0.11, 0, 0.5, 0)'
                    },
                    '-=2.5'
                )
                .to(
                    h2Ref.current,
                    {
                        transform: 'scale(1)',
                        duration: 3,
                        transition: 'cubic-bezier(0.11, 0, 0.5, 0)'
                    },
                    '-=2.5'
                )
                .to(
                    '.h2-inner-span',
                    {
                        filter: 'blur(0px)',
                        scale: 1,
                        stagger: {
                            amount: 0.7
                        },
                        duration: 3,
                        opacity: 1,
                        transition: 'cubic-bezier(0.11, 0, 0.5, 0)'
                    },
                    '-=2'
                );

        setTimeout(() => {
            if (!priceRef.current) return;
            const annotation = annotate(priceRef.current, {
                type: 'highlight',
                color: '#ffb800',
                animationDuration: 1800
            });
            annotation.show();
        }, 4000);
    }, []);

    return (
        <div className="grid w-full grid-cols-1 items-start justify-start gap-12 rounded-primary bg-white p-12 md:max-w-[60.5rem] md:grid-cols-[auto_1fr]">
            {/* Reviews */}
            <div className="flex flex-wrap items-center justify-start gap-8 md:col-start-2 md:row-start-2 md:justify-end">
                {/* Review 1 */}
                <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
                    <span className="grid place-items-center">
                        <FcGoogle className="h-[2.4rem] w-[2.4rem]" />
                    </span>
                    <span className="font-mulishBold text-[1.4rem] font-extrabold uppercase leading-[1.4rem]">
                        Google
                    </span>
                    <span className="col-span-2 font-mulishBold font-extrabold uppercase">4.8 | 35 review</span>
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
                    <span className="font-mulishBold font-extrabold uppercase">4.8 | 315 review</span>
                </div>
            </div>
            {/* Headings */}
            <div className="grid w-full max-w-[46.3rem] grid-cols-1 gap-6 md:col-span-2 md:gap-12">
                <h1 ref={h1Ref} className={`scale-[0.8] will-change-transform`}>
                    <span className="h1-inner-span inline-block opacity-0 blur-sm">Presbyond</span>{' '}
                    <span className="h1-inner-span inline-block opacity-0 blur-sm">Laser</span>
                    <br />
                    <span className="h1-inner-span inline-block opacity-0 blur-sm">Treatment</span>{' '}
                    <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                </h1>
                <h2 className={`scale-90 whitespace-pre-line text-left`} ref={h2Ref}>
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        Correct
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        your
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        vision
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        and
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        say
                    </span>
                    <br />
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        Goodbye
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        Goodbye
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        reading
                    </span>{' '}
                    <span className="h2-inner-span normal-case text-heading2 opacity-0 blur-sm will-change-transform">
                        glasses
                    </span>
                </h2>
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
            <div className="flex items-center justify-start gap-4 md:self-center">
                <span className="block h-[2.4rem] w-2 bg-heading2"></span>
                <span
                    className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2 md:text-[2.4rem] md:uppercase md:leading-[2.4rem]"
                    ref={priceRef}
                >
                    £2,400 per eye
                </span>
            </div>
        </div>
    );
};

export default Banner;
