import { BookConsultation } from '@/components/page-sections';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

interface CtaInterface {
    defaultClassName?: string;
    className?: string;
    buttonClassName?: string;
}

/**
 * Cta section part
 *
 * @returns {*}  {JSX.Element}
 */
const Cta = ({
    defaultClassName = 'grid gap-4 justify-self-center',
    className,
    buttonClassName
}: CtaInterface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className || ''}`}>
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-telephone-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <a href="tel:0208 445 8877">
                    <span className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]">
                        (+44) 0208 445 8877
                    </span>
                </a>
            </div>
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-chat.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <button
                    className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]"
                    onClick={openFreshdeskChat}
                >
                    Chat with us
                </button>
            </div>
            <div className="mt-4 grid place-items-start">
                <BookConsultation
                    buttonClassName={`group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary`}
                >
                    <button className="" aria-label="Book a consultation">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                        <span
                            className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2`}
                        >
                            Book a consultation
                        </span>
                    </button>
                </BookConsultation>
            </div>
        </div>
    );
};

export default Cta;
