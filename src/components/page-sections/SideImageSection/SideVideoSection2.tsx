import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { BookConsultation } from '@/page-sections/index';
import { ImageType2 } from '@/types';
import gsap from 'gsap';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';

// Const VideoPlayer = dynamic(() => import('@/components/page-sections/section-parts/VideoPlayer'));

interface SideVideoSection2Interface {
    title: ReactNode;
    descriptions: ReactNode[];
    button1ClassName?: string;
    button2ClassName?: string;
    textColor?: string;
    sloganTextColor?: string;
    bgColor?: string;
    button2Icon?: JSX.Element;
    containerDefaultClassName?: string;
    containerClassName?: string;
    sectionImage?: ImageType2;
    sectionImageLarge?: ImageType2;
    hoverIcon?: ReactNode;
}

/**
 * Page section that contains text column and video column
 *
 * @returns {*}  {JSX.Element}
 */
const SideVideoSection2 = ({
    title,
    descriptions,
    button1ClassName,
    button2ClassName,
    textColor,
    sloganTextColor,
    bgColor,
    button2Icon,
    containerDefaultClassName,
    containerClassName,
    sectionImage,
    sectionImageLarge,
    hoverIcon
}: SideVideoSection2Interface): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<HTMLDivElement | null>(null);
    const sectionOnScreen = useOnScreen({ ref: sectionRef, triggerPosition: -200 });
    // Const sectionOnScreenBottom = useOnScreen({ ref: sectionRef, triggerPosition: 300 });

    useEffect(() => {
        if (!animationRef.current || !sectionOnScreen.onEnter) return;

        gsap.to(animationRef.current, {
            width: '100%',
            duration: 3
        });
    }, [sectionOnScreen]);

    return (
        <Section className="relative overflow-hidden py-16 md:py-32" ref={sectionRef}>
            <div ref={animationRef} className={`absolute top-0 left-0 -z-[1] h-full w-0 bg-[#0C4969]`}></div>
            <Container
                className={`${
                    containerDefaultClassName || 'grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-24'
                } ${containerClassName}`}
            >
                <H2Variant1 className={`normal-case md:col-span-2 md:max-w-[79rem] ${textColor}`}>{title}</H2Variant1>
                <div className="grid gap-12 md:max-w-[48.7rem]">
                    {descriptions.map((desc, index) => (
                        <p key={index} className={`${textColor}`}>
                            {HTMLReactParser(desc as string)}
                        </p>
                    ))}

                    <div className={`flex flex-wrap items-center justify-start gap-6`}>
                        {/* Modal */}
                        <BookConsultation
                            modalElement={
                                <>
                                    <iframe
                                        src="https://calendly.com/myiclinic/free_visioncorrection_consultation"
                                        width={600}
                                        height={700}
                                        className="w-full md:min-h-[70rem]"
                                    ></iframe>
                                </>
                            }
                            maxWidth="70rem"
                            buttonClassName={`group/consultation transition-all border-2 border-white duration-500 hover:bg-white grid cursor-pointer px-8 py-6 place-items-center gap-5 bg-heading2 grid-flow-col rounded-primary`}
                        >
                            <button className="" aria-label="Book a free screening test">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                    />
                                    <path
                                        d="M13.334 1.66699V5.00033"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                    />
                                    <path
                                        d="M6.66602 1.66699V5.00033"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                    />
                                    <path
                                        d="M2.5 8.33301H17.5"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                    />
                                </svg>

                                <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                                    Book a free screening test
                                </span>
                            </button>
                        </BookConsultation>

                        {/* Phone number */}
                        <Link
                            href="tel:0208 445 8877"
                            className={`group/phone grid cursor-pointer grid-flow-col place-items-center gap-5 rounded-primary  px-8 py-6 transition-all duration-500 hover:bg-heading2 ${button2ClassName}`}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                                    stroke="#fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/phone:opacity-60"
                                />
                            </svg>

                            <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/phone:opacity-60">
                                0208 445 8877
                            </span>
                        </Link>
                    </div>
                    <span
                        className={`max-w-[32.7rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading2 md:text-left ${sloganTextColor}`}
                    >
                        A better quality of life is just around the corner!
                    </span>
                </div>
                {/* <div className="">
                    {sectionOnScreenBottom && <VideoPlayer videoUrl="/videos/video-1.mp4" videoPoster="WUkLbxQYWME" />}
                </div> */}
                {sectionImage && (
                    <div className="md:hidden">
                        <Image
                            src={sectionImage.url}
                            alt=""
                            width={sectionImage.width}
                            height={sectionImage.height}
                            className="translate-x-[13rem] object-contain"
                        />
                    </div>
                )}
                {sectionImageLarge && (
                    <div className="hidden md:block">
                        <Image
                            src={sectionImageLarge.url}
                            alt=""
                            width={sectionImageLarge.width}
                            height={sectionImageLarge.height}
                            className="absolute top-2/4 right-0 max-h-[35rem] -translate-y-2/4 translate-x-[7.5rem] object-contain"
                        />
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default SideVideoSection2;
