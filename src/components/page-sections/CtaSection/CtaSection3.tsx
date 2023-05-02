import { H2Variant1 } from '@/components/Headings';
import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Cta section for blog post
 * @returns {JSX.Element}
 * @constructor
 */
const CtaSection3 = (): JSX.Element => {
    return (
        <div className="blog-cta relative mt-6 grid grid-cols-1 overflow-hidden rounded-primary bg-[#004574] md:mt-[4.5rem] md:md:grid-cols-[1fr_6rem_auto] lg:grid-cols-[auto_6rem_1fr]">
            <Image
                src="/images/section-images/blog-cta-consultation.png"
                alt=""
                width={387}
                height={352}
                className="h-full w-full -translate-x-1 object-cover md:col-span-2 md:col-start-1 md:row-start-1 md:min-w-[35rem] lg:min-w-[38.8rem]"
            />

            <div className="relative z-[1] grid place-items-center gap-12 p-12 md:col-span-2 md:col-start-2 md:row-start-1 md:place-items-center md:gap-24 md:p-24">
                <H2Variant1 className="max-w-[36.9rem] normal-case !text-white">
                    Find out more by Speaking to our team
                </H2Variant1>

                <div className="mt-12 grid max-w-[46.8rem] gap-8 md:ml-12 md:mt-[4.5rem]">
                    <BookConsultation
                        buttonClassName={`group/consultation transition-all border-2 border-white bg-white duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 rounded-primary`}
                    >
                        <button className="" aria-label="Request a callback">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                    stroke="#051821"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M13.334 1.66699V5.00033"
                                    stroke="#051821"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M6.66602 1.66699V5.00033"
                                    stroke="#051821"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M2.5 8.33301H17.5"
                                    stroke="#051821"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                            </svg>

                            <span
                                className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading transition-all duration-500 group-hover/consultation:text-white`}
                            >
                                Request a callback
                            </span>
                        </button>
                    </BookConsultation>

                    <Link href="tel:0208 445 8877" className="flex items-center justify-center gap-4">
                        <Image src="/images/icons/icon-phone-white.svg" alt="" width={20} height={20} />
                        <span className="font-latoBold text-[1.6rem] leading-[2.4rem] text-white">0208 445 8877</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CtaSection3;
