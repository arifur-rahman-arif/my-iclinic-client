import { CtaSection, DrawLine, Masthead, SideImageSection, StackColumnIcl } from '@/components/page-sections';

import { Container } from '@/components/container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import { iclFaqList } from '@/components/page-sections/faq/faqList';
import { iclSliders } from '@/components/page-sections/featured-patient';
import { leftRightListIcl } from '@/components/page-sections/left-right/leftRightList';
import { iclStackList } from '@/components/page-sections/stacked-section';
import { Section } from '@/components/section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconPin from '@/icons/icon-pin-small.svg';
import IclBannerImage from '@/section-images/icl-banner.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PdfDownload = dynamic(() => import('@/components/page-sections/pdf-download/PdfDownload'));
const CompanyLogos = dynamic(() => import('@/components/page-sections/company-logos/CompanyLogos'));
const Faq = dynamic(() => import('@/components/page-sections/faq/Faq'));
const CallbackSection = dynamic(() => import('@/components/page-sections/request-callback/CallbackSection'));
const BottomBanner = dynamic(() => import('@/components/page-sections/bottom-full-banners/BottomBanner'));
const FeaturedPatient = dynamic(() => import('@/components/page-sections/featured-patient/FeaturedPatient'));
const NormalSlideSection = dynamic(() => import('@/components/page-sections/normal-slide/NormalSlideSection'));
const StackedSection = dynamic(() => import('@/components/page-sections/stacked-section/StackedSection'));
const LeftRightSection = dynamic(() => import('@/components/page-sections/left-right/LeftRightSection'));
const SideVideoSection = dynamic(() => import('@/components/page-sections/side-image-section/SideVideoSection'));

/**
 * Presbyond page component for the App
 *
 * * Url: /laser-eye-surgery/presbyond-london/
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Presbyond(): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    useEffect(() => {
        ScrollTrigger.refresh();

        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title="ICL Surgery in London" description="">
            <Masthead
                mastheadImage="/images/masthead/masthead-icl.png"
                altText="Presbyopic woman reading a book with her glasses on."
                h1Title={
                    <h1 className="">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">ICL</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Surgery</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">in</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Implantable
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Contact
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Lenses
                        </span>
                    </h2>
                }
                priceText="£2750 per eye"
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.4rem] text-heading2">
                        With 10 Months Interest
                        <br /> Free Finance available!
                    </span>
                }
            />
            <div className="w-full md:mt-[calc(6rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:mt-[calc(12rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="London’s latest vision correction treatment"
                h3BoldHeading="for glasses and contact lens wearers"
                altText=""
                descriptions={[
                    <>
                        If you are ready to break from compromising with your everyday contact lenses or glasses, take a
                        look at our{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            biocompatible ICL
                        </LinkText>{' '}
                        lenses made by EVO Visian - a groundbreaking Evolution in Visual Freedom!
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/icl-vision-correction.png',
                    width: 370,
                    height: 328
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/icl-vision-correction-large.png',
                    width: 675,
                    height: 642
                }}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListIcl} />
            </LazyComponent>

            <SideImageSection
                h2Heading="Life quality improvment"
                h3LightHeading="Life after Implantable"
                h3BoldHeading="Contact Lenses!"
                sectionImage={{
                    url: '/images/section-images/icl-quality-improvement.png',
                    width: 370,
                    height: 328
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/icl-quality-improvement-large.png',
                    width: 682,
                    height: 686
                }}
                altText=""
                textColumnImage={true}
                customColumn={<StackColumnIcl />}
                textColumnTopElements={
                    <ul className="ml-16 mt-12 grid gap-6">
                        <li className="flex items-start justify-start gap-4">
                            <Image
                                src="/images/icons/icon-blue-and-outline-circle.svg"
                                alt=""
                                width={35}
                                height={23}
                                className="h-[2.4rem] w-[2.4rem]"
                            />
                            <p className="font-mulishBold">99.4% of people would choose to have ICL again</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <Image
                                src="/images/icons/icon-blue-and-outline-circle.svg"
                                alt=""
                                width={35}
                                height={23}
                                className="h-[2.4rem] w-[2.4rem]"
                            />
                            <p className="font-mulishBold">2,000,000+ ICL procedures worldwide</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <Image
                                src="/images/icons/icon-blue-and-outline-circle.svg"
                                alt=""
                                width={35}
                                height={23}
                                className="h-[2.4rem] w-[2.4rem]"
                            />
                            <p className="font-mulishBold">20+ years of premium ICL performance</p>
                        </li>
                    </ul>
                }
            />

            <SideImageSection
                h3LightHeading="Our Implantable <br/>Contact Lenses"
                h3BoldHeading="Are transparent in <br/>price too!"
                sectionImage={{
                    url: '/images/section-images/icl-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/icl-transparent-price-large.png',
                    width: 680,
                    height: 558
                }}
                altText="Happy couple on a hike in the mountains after correcting their long-sighted vision."
                textColumnExtras={
                    <div className="grid gap-6">
                        <h2 className="normal-case">
                            £2750 per Eye
                            <br /> With 10 Months Interest-Free Finance available!
                        </h2>
                        <p>
                            The best ICL surgery price in London, saving an average of £2,000 in your treatment when you
                            come to My-iClinic.
                        </p>

                        <ul className="ml-12 grid gap-6">
                            <li className="flex items-start justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-blue-and-outline-circle.svg"
                                    alt=""
                                    width={35}
                                    height={23}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p className="font-mulishBold capitalize">
                                    One dedicated ICL specialist
                                    <br />
                                    for your treatment
                                </p>
                            </li>
                            <li className="flex items-start justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-blue-and-outline-circle.svg"
                                    alt=""
                                    width={35}
                                    height={23}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p className="font-mulishBold capitalize">Most affordable price in London</p>
                            </li>
                        </ul>
                    </div>
                }
            />

            <LazyComponent>
                <BottomBanner
                    bannerImage={IclBannerImage}
                    bannerBg="/images/section-images/icl-banner-bg-large.png"
                    bannerDescription="Discuss your options and eligibility for implantable contact lens surgery with one of
                our experts. We will give you clear advice on your suitability and best vision
                correction options for your circumstances."
                />
            </LazyComponent>

            <LazyComponent>
                <StackedSection
                    stackList={iclStackList}
                    h3LightHeading="The benefits of Implantable Contact"
                    h3BoldHeading="Lenses for Clear, long-term vision!"
                />
            </LazyComponent>

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="ICL Patient"
                    h3Title="Life after ICL Treatment"
                    bandImageDescription={[
                        `Now I wake up and I don’t have to put in contacts.`,
                        'I open my eyes and I can actually see myself in the mirror without squinting.',
                        `I don’t need contact lenses to do my make up in the mornings anymore.`,
                        `I just feel a lot more confident. I feel as though I have my eyes, not some plastic thing on my face.`
                    ]}
                    bandImageTitle="Elite"
                    bandImageURL="/images/section-images/elite.png"
                    reviewDescription={[`It’s just been amazing and I would do it again…`]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={iclSliders}
                    bandColor="bg-[#7000FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="Is ICL for me?"
                    noPin
                    beforeAttribute
                    textColumnExtras={
                        <div className="mt-20 ml-14 grid gap-6">
                            <div className="grid grid-cols-[auto_1fr] items-center gap-y-4 gap-x-6">
                                <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2">99.4%</span>
                                <Image src={IconPin} alt="" />
                                <p className="col-span-2">
                                    Of peoples surveyed would have the <br /> procedure again
                                </p>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] items-center gap-y-4 gap-x-6">
                                <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2">
                                    2 Million
                                </span>
                                <Image src={IconPin} alt="" />
                                <p className="col-span-2">Lenses distributed</p>
                            </div>
                        </div>
                    }
                />
            </LazyComponent>

            <CtaSection />

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line.svg',
                    width: 232,
                    height: 234
                }}
            />

            <SideImageSection
                sectionClass="!mt-0"
                h2Heading="plastic free life"
                h3LightHeading="Green living with"
                h3BoldHeading="Implantable Contact Lenses"
                descriptions={[
                    `The most sustainable, green living lifestyle is when you have a plastic free eye-style. When you have Implantable Contact Lenses you are saying goodbye to the continuous plastic waste produced by glasses and contact lenses!`
                ]}
                sectionImage={{
                    url: '/images/section-images/plastic-free-life.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/plastic-free-life-desktop.png',
                    width: 685,
                    height: 587
                }}
                positionReversed={true}
                textColumnExtras={
                    <div className="grid gap-6">
                        <span className="max-w-[36.7rem] font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            Hard to swallow facts about wearing Glasses and Contact lenses:
                        </span>
                        <ul className="ml-6 grid gap-6">
                            <li className="flex items-center justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-meh.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p>Almost 800 million plastic contact lenses are used by 4 million people each year.</p>
                            </li>
                            <li className="flex items-center justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-meh.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p>100,000 tons of plastic are wasted from glasses.</p>
                            </li>
                        </ul>
                        <span className="max-w-[36.7rem] font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            Saving more than just expenses, time and compromise, but saving the planet!
                        </span>
                    </div>
                }
            />

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-2.svg',
                    width: 232,
                    height: 234
                }}
            />

            <Section className="!mt-4">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-2.png"
                        alt=""
                        width={638}
                        height={137}
                        quality={70}
                        className="mx-auto md:h-auto md:w-auto"
                    />
                </Container>
            </Section>

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-3-desktop.svg',
                    width: 232,
                    height: 234
                }}
            />

            <SideImageSection
                h2Heading="gift of a tree"
                sectionClass="!mt-0"
                h3LightHeading="Saving the planet"
                h3BoldHeading="One eye at a time!"
                descriptions={[
                    `Here at My-iClinic we give all of our laser patients a very special gift to go with your brand-new eyes, 
                    a tree! When undergoing laser eye surgery, you may not realize but you are already making a positive difference to the environment.`,
                    `For every 10 years of contact lens wear the amount of plastic that ends up in the ocean is roughly the same as your own body weight.`
                ]}
                sectionImage={{
                    url: '/images/section-images/gift-of-a-tree.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/gift-of-a-tree-desktop.png',
                    width: 554,
                    height: 496
                }}
                textColumnExtras={
                    <div className="grid gap-6">
                        <span className="max-w-[44.5rem]  font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            We want to take our impact on the environment a step further and this is where the gift of a
                            tree comes in!
                        </span>
                    </div>
                }
            />

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-4-desktop.svg',
                    width: 232,
                    height: 234
                }}
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload title="Presbyond Patient Information" />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={iclFaqList}
                    titleLight="Implantable Contact Lenses"
                    titleBold="FAQ’s"
                    description="Have a question? We’r here to help."
                />
            </LazyComponent>
        </Page>
    );
}
