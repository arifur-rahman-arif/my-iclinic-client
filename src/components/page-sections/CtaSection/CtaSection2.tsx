import { BookConsultation } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionTextColumn';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import ctaImage from '@/section-images/cta-image.webp';
import HTMLReactParser from 'html-react-parser';
import { ReactNode } from 'react';
import { Container } from '@/components/Container';

interface CtaSection2Interface {
    title?: string;
    subTitle?: string;
    descriptions?: ReactNode[];
    image?: any;
    subTitleClass?: string;
}

/**
 * Cta section component
 *
 * @param {CtaSection2Interface} {title, descriptions}
 * @returns {*}  {JSX.Element}
 */
const CtaSection2 = ({ title, subTitle, descriptions, image, subTitleClass }: CtaSection2Interface): JSX.Element => {
    return (
        <Section id="cta-section2" className="bg-[#003E79]">
            <Container className="grid gap-12 md:grid-cols-2 md:gap-24 xl:grid-cols-[1fr_auto] xl:gap-32">
                {/* Grid item 1 */}
                <div className="grid content-center gap-12 pt-16 md:gap-24 md:py-24 xl:py-32  ">
                    <div className="grid gap-6">
                        <SectionHeading
                            barClassName="hidden"
                            headingClassName="text-white normal-case"
                            heading={title || ''}
                        />
                        {descriptions?.length
                            ? descriptions.map((item, key) => (
                                  <div
                                      className="max-w-[60rem] text-white opacity-90 [&_*]:!text-white [&_a]:!font-mulishBold [&_a]:!text-[#0099FF] [&_a]:underline [&_a]:underline-offset-4 [&_strong]:!font-mulishBold"
                                      key={key}
                                  >
                                      {typeof item === 'string' ? HTMLReactParser(stripInitialTags(item)) : item}
                                  </div>
                              ))
                            : null}
                        <span className="text-balance font-latoMedium text-[2rem] uppercase uppercase leading-[2.8rem] text-[#94CAFF]">
                            {subTitle || 'A better quality of life is just around the corner!'}
                        </span>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex items-center justify-start gap-4">
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
                                buttonClassName={`group/consultation transition-all border-2 border-[#0099FF] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-[#0099FF] rounded-[0.5rem]`}
                            >
                                <button className="" aria-label="Book a consultation">
                                    {/* <svg */}
                                    {/*     width="20" */}
                                    {/*     height="20" */}
                                    {/*     viewBox="0 0 20 20" */}
                                    {/*     fill="none" */}
                                    {/*     xmlns="http://www.w3.org/2000/svg" */}
                                    {/* > */}
                                    {/*     <path */}
                                    {/*         d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z" */}
                                    {/*         stroke="white" */}
                                    {/*         strokeWidth="2" */}
                                    {/*         strokeLinecap="round" */}
                                    {/*         strokeLinejoin="round" */}
                                    {/*         className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]" */}
                                    {/*     /> */}
                                    {/*     <path */}
                                    {/*         d="M13.334 1.66699V5.00033" */}
                                    {/*         stroke="white" */}
                                    {/*         strokeWidth="2" */}
                                    {/*         strokeLinecap="round" */}
                                    {/*         strokeLinejoin="round" */}
                                    {/*         className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]" */}
                                    {/*     /> */}
                                    {/*     <path */}
                                    {/*         d="M6.66602 1.66699V5.00033" */}
                                    {/*         stroke="white" */}
                                    {/*         strokeWidth="2" */}
                                    {/*         strokeLinecap="round" */}
                                    {/*         strokeLinejoin="round" */}
                                    {/*         className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]" */}
                                    {/*     /> */}
                                    {/*     <path */}
                                    {/*         d="M2.5 8.33301H17.5" */}
                                    {/*         stroke="white" */}
                                    {/*         strokeWidth="2" */}
                                    {/*         strokeLinecap="round" */}
                                    {/*         strokeLinejoin="round" */}
                                    {/*         className="transition-all duration-500 group-hover/consultation:stroke-[#0099FF]" */}
                                    {/*     /> */}
                                    {/* </svg> */}

                                    <span
                                        className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-[#0099FF]`}
                                    >
                                        Book a consultation
                                    </span>
                                </button>
                            </BookConsultation>
                        </div>
                    </div>
                </div>

                {/* Grid item 2 */}
                <Image
                    alt=""
                    className="w-full self-end justify-self-center md:justify-self-end"
                    src={ctaImage}
                    {...(image as any)}
                />
            </Container>
        </Section>
    );
};

export default CtaSection2;
