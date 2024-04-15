import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ReactNode } from 'react';
import iconHeadphone from '@/icons/icon-headphone-blue.svg';
import Image from 'next/image';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import { BookConsultation } from '@/components/page-sections';
import { twMerge } from 'tailwind-merge';

interface CtaSectionInterface {
    subtitle?: string;
    title?: string;
    buttonClassName?: string;
    description?: ReactNode;
    sectionClassName?: string;
}

/**
 * CTA section
 *
 * @returns {*}  {JSX.Element}
 */
const CtaSection = ({
    subtitle,
    title,
    buttonClassName,
    description,
    sectionClassName
}: CtaSectionInterface): JSX.Element => {
    // const bgOverlayElement = useRef<HTMLDivElement | null>(null);
    // const deviceSize = useDeviceSize();
    // const containerElement = useRef<HTMLDivElement | null>(null);
    // const { onEnter } = useOnScreen({ ref: containerElement, triggerPosition: '80%' });
    // useEffect(() => {
    //     bgOverlayElement.current &&
    //         onEnter &&
    //         gsap.to(bgOverlayElement.current, {
    //             width: '100%',
    //             duration: 4
    //         });
    // }, [deviceSize, onEnter]);

    return (
        <Section className={twMerge('relative bg-[#003E79] py-12 md:py-24', sectionClassName)}>
            <Container className="grid place-items-center content-center gap-4">
                {/* Grid item 1 */}
                <Image src={iconHeadphone} alt="" />
                <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white">{subtitle}</span>
                <h2 className="font-latoExtraBold normal-case text-white md:text-[4.8rem] md:leading-[4.8rem]">
                    {title}
                </h2>

                <div className="mt-12 flex items-center justify-start gap-4">
                    <Image
                        src="/images/icons/icon-phone-white.svg"
                        alt=""
                        quality={70}
                        width={20}
                        height={20}
                        className="h-8 w-8"
                    />
                    <a href="tel:0208 445 8877">
                        <span className="relative block cursor-pointer font-latoBold text-[2rem] leading-[2.4rem] text-white">
                            (+44) 0208 445 8877
                        </span>
                    </a>
                </div>

                <div className="flex items-center justify-start gap-4">
                    <Image src="/images/icons/icon-chat.svg" alt="" width={24} height={24} />
                    <button
                        className="relative block -translate-y-1 cursor-pointer font-latoBold text-[2rem] leading-[2.4rem] text-white"
                        onClick={openFreshdeskChat}
                    >
                        Chat with us
                    </button>
                </div>

                <div className="mt-2 grid place-items-start">
                    <BookConsultation
                        buttonClassName={twMerge(
                            'group/consultation transition-all border-2 border-[#0099FF] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-[#0099FF] rounded-[0.5rem]',
                            buttonClassName
                        )}
                    >
                        <button className="" aria-label="Book a consultation">
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
                                    className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]"
                                />
                                <path
                                    d="M13.334 1.66699V5.00033"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]"
                                />
                                <path
                                    d="M6.66602 1.66699V5.00033"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]"
                                />
                                <path
                                    d="M2.5 8.33301H17.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]"
                                />
                            </svg>

                            <span
                                className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-[#0099FF]`}
                            >
                                Book a consultation
                            </span>
                        </button>
                    </BookConsultation>
                </div>
            </Container>
        </Section>
    );
};

export default CtaSection;
