import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Logo1 from '@/logos/bupa.png';
import Logo2 from '@/logos/healthcare-practice.png';
import Logo3 from '@/logos/aviva.png';
import Logo4 from '@/logos/freedom.png';
import Logo5 from '@/logos/cigma.png';
import Logo6 from '@/logos/general-medical.png';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import { Button2 } from '@/components/Buttons';
import React from 'react';
import { BookConsultation } from '@/page-sections/index';

/**
 * Health & insurance partners component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const InsurancePartners = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid place-items-center gap-12">
                <h2 className="normal-case">Our health insurance partners</h2>

                {/* Logos */}
                <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-6 justify-self-center lg:grid-cols-3">
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo1} alt="" />
                    </div>
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo2} alt="" />
                    </div>
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo3} alt="" />
                    </div>
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]  xl:w-[18rem]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo4} alt="" />
                    </div>
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo5} alt="" />
                    </div>
                    <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                        <Image className="max-h-full max-w-full scale-[0.8] object-contain" src={Logo6} alt="" />
                    </div>
                </div>

                {/*     Cta */}
                <span className="text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-[#893277]">
                    Speak to our friendly team
                </span>

                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center justify-start gap-4">
                        <Image
                            src="/images/icons/icon-phone-dark.svg"
                            alt=""
                            quality={70}
                            width={20}
                            height={20}
                            className="h-8 w-8"
                        />
                        <a href="tel:0208 445 8877">
                            <span className="relative block cursor-pointer font-latoBold text-heading">
                                (+44) 0208 445 8877
                            </span>
                        </a>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <Image src="/images/icons/icon-chat-dark.svg" alt="" width={24} height={24} />
                        <button
                            className="relative block cursor-pointer font-latoBold text-heading"
                            onClick={openFreshdeskChat}
                        >
                            Chat with us
                        </button>
                    </div>
                    <BookConsultation buttonClassName="mt-4">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                </div>
            </Container>
        </Section>
    );
};

export default InsurancePartners;
