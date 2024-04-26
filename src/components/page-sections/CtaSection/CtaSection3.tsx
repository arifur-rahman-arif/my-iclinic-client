import { H2Variant1 } from '@/components/Headings';
import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import Link from 'next/link';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import cta3Image from '@/section-images/cta-3.png';

/**
 * Cta section for blog post
 * @returns {JSX.Element}
 * @constructor
 */
const CtaSection3 = (): JSX.Element => {
    return (
        <div className="blog-cta relative mt-6 grid grid-cols-1 gap-12 overflow-hidden rounded-radius2 bg-brand px-8 py-12 sm:px-12 md:mt-[4.5rem] md:grid-cols-[1fr_auto] lg:gap-0 lg:px-24 lg:pr-0">
            <div className="relative z-[1] grid gap-12 md:gap-24">
                <H2Variant1 className="max-w-[34rem] normal-case !text-white">
                    Find out more by Speaking to our team
                </H2Variant1>

                <div className="grid max-w-[46.8rem] justify-items-start gap-6">
                    <Link href="tel:0208 445 8877" className="flex items-center justify-center gap-4">
                        <Image
                            src="/images/icons/icon-phone-white.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="h-8 !w-8"
                        />
                        <span className="whitespace-nowrap font-latoBold text-[1.6rem] leading-[2.4rem] !text-white !underline-offset-4">
                            0208 445 8877
                        </span>
                    </Link>

                    <button onClick={openFreshdeskChat} className="flex items-center gap-4 font-latoBold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Chat with us
                    </button>

                    <BookConsultation buttonClassName="bg-[#0099FF] border-[#0099FF] hover:text-[#0099FF]">
                        <Button2 type="button" text="Book a consultation" title="Book a consultation" />
                    </BookConsultation>
                </div>
            </div>
            <Image
                src={cta3Image}
                alt=""
                className="w-full translate-x-8 translate-y-12 self-end sm:translate-x-12 lg:translate-x-0"
            />
        </div>
    );
};

export default CtaSection3;
