import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer header links component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterHeaderLinks = (): JSX.Element => {
    return (
        <div className="mt-16 grid grid-cols-1 items-start gap-6 sm:max-w-[95%] sm:grid-cols-[auto_1fr] sm:gap-x-12 md:mt-24">
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-calendar-outline-darker.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <BookConsultation buttonClassName="font-mulishBold text-[1.6rem] leading-[2.4rem] relative block cursor-pointer text-heading">
                    <strong>Request a callback</strong>
                </BookConsultation>
            </div>

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-map-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <Link
                    className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading"
                    href="https://www.google.com/maps/place/960+High+Rd,+London+N12+8FA,+UK/@51.6220441,-0.1783466,17z/data=!3m1!4b1!4m5!3m4!1s0x487619c2ce086057:0xb2604f94b7bbeecd!8m2!3d51.6220441!4d-0.1761579"
                    target="_blank"
                >
                    960 High Rd, London N12 9RY
                </Link>
            </div>

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
                    <span className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading">
                        (+44) 0208 445 8877
                    </span>
                </a>
            </div>

            {/* <div className="hidden items-center justify-start gap-4 md:flex"> */}
            {/*     <Image */}
            {/*         src="/images/icons/icon-eye-outlined-blue.svg" */}
            {/*         alt="" */}
            {/*         quality={70} */}
            {/*         width={24} */}
            {/*         height={24} */}
            {/*         className="h-[2.4rem] w-[2.4rem]" */}
            {/*     /> */}
            {/*     <LinkText */}
            {/*         href="https://www.google.com/maps/place/960+High+Rd,+London+N12+8FA,+UK/@51.6220441,-0.1783466,17z/data=!3m1!4b1!4m5!3m4!1s0x487619c2ce086057:0xb2604f94b7bbeecd!8m2!3d51.6220441!4d-0.1761579" */}
            {/*         defaultClassName="font-mulishBold text-[1.6rem] leading-[2.4rem] relative block text-blue " */}
            {/*         indicatorColor="bg-blue" */}
            {/*         target="_blank" */}
            {/*     > */}
            {/*         Map View */}
            {/*     </LinkText> */}
            {/* </div> */}

            <div className="flex items-center justify-start gap-4">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.33366 4.31934H16.667C17.5837 4.31934 18.3337 5.06934 18.3337 5.986V15.986C18.3337 16.9027 17.5837 17.6527 16.667 17.6527H3.33366C2.41699 17.6527 1.66699 16.9027 1.66699 15.986V5.986C1.66699 5.06934 2.41699 4.31934 3.33366 4.31934Z"
                        stroke="#051821"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.3337 5.98633L10.0003 11.8197L1.66699 5.98633"
                        stroke="#051821"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <a
                    href="mailto:reception@my-iclinic.co.uk"
                    className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading"
                >
                    reception@my-iclinic.co.uk
                </a>
            </div>
        </div>
    );
};

export default FooterHeaderLinks;
