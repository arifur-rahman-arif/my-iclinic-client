import { DrawLine, FullWidthImageSection, Masthead, SideImageSection } from '@/components/page-sections';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import { lasikFaqList } from '@/components/page-sections/faq/faqList';
import { lasikSliders } from '@/components/page-sections/featured-patient';
import { leftRightListLasik } from '@/components/page-sections/left-right/leftRightList';
import { lasikStackList } from '@/components/page-sections/stacked-section';
import { Section } from '@/components/section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import ClearVisionImage from '@/section-images/clear-vision-lasik.png';
import LasikImageLarge from '@/section-images/lasik-banner-large.png';
import LasikImage from '@/section-images/lasik-banner.png';
import LasikCtaBannerImage from '@/section-images/lasik-cta-banner.png';
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
 * Lasik page component for the App
 *
 * * Url: /laser-eye-surgery/lasik-london/
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Lasik(): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const mastheadH2Heading =
        'The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            ScrollTrigger.refresh();
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title="ICL Surgery in London" description="">
            <Masthead
                mastheadImage="/images/masthead/masthead-lasik.png"
                altText=""
                h1Title={
                    <h1 className="">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">LASIK</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Laser</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Eye</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Surgery</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {mastheadH2Heading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText="£2400 per eye"
            />

            <div className="w-full md:mt-[calc(6rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:mt-[calc(12rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <FullWidthImageSection
                h3Title="LASIK may be the suitable alternative to correct your vision"
                description={[
                    `Do you own multiple pairs of reading glasses or varifocals? While they’re a fact of aging, you most likely feel you shouldn't need them yet. Our lifestyles shouldn't be compromised by the limitations of our vision.`,
                    ` If You’d really like to get rid of your glasses, but you’re not sure where to begin, our LASIK procedure is safe and effective for someone like you.`
                ]}
                altText=""
                image={LasikImage}
                desktopImage={LasikImageLarge}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListLasik} />
            </LazyComponent>

            <FullWidthImageSection
                h3Title="Whatever the view,"
                boldHeading="Remember it with Clear vision"
                altText=""
                image={ClearVisionImage}
                desktopImage={ClearVisionImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0"
                overlayAnimation
                textColumnOverlay
                sectionClass="bg-brandLight relative"
            />

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our Lasik patients Say After treatment"
                    h3Heading="Hear from a patient"
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                        `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                />
            </LazyComponent>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="LASIK Patient"
                    h3Title="Life after LASIK laser eye surgery"
                    bandImageDescription={[
                        `From the first moment I stepped in, the detail and the quality of care was amazing.`
                    ]}
                    bandImageTitle="Helen"
                    bandImageURL="/images/section-images/helen.png"
                    reviewDescription={[`Absolutely phenomenal.`]}
                    reviewTitle="I take every opportunity to recommend this Clinic"
                    sliders={lasikSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <SideImageSection
                h2Heading="Tranparent Price"
                h3LightHeading="LASIK Laser eye surgery"
                h3BoldHeading="cost"
                descriptions={[
                    `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                ]}
                sectionImage={{
                    url: '/images/section-images/lasik-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/lasik-transparent-price-large.png',
                    width: 650,
                    height: 558
                }}
                altText=""
                textColumnExtras={
                    <div className="grid gap-6">
                        <h2 className="normal-case">
                            £2,400 per Eye
                            <br /> With 12 Months Interest-Free Finance available!
                        </h2>
                        <p>
                            The best laser eye surgery price in London, saving an average of £1,000 for your treatment
                            when you come to My-iClinic.
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
                                    One dedicated Lasik specialist for <br /> your treatment
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

            <SideImageSection
                h2Heading="better vision"
                h3LightHeading="Achieve better vision"
                h3BoldHeading="with LASIK today"
                descriptions={[
                    <>
                        If you’ve made the decision to improve your eyesight – whether you currently have{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            Myopia,
                        </LinkText>{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            Hyperopia
                        </LinkText>{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            Astigmatism,
                        </LinkText>{' '}
                        LASIK could change your life.
                    </>,
                    <>
                        To find out if LASIK surgery is right for you, book an in-person assessment with one of our
                        LASIK specialists today to begin a life of normal vision.
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/better-vision-lasik.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/better-vision-lasik-large.png',
                    width: 682,
                    height: 686
                }}
                positionReversed={true}
                textColumnExtras={
                    <div className="flex flex-col items-center justify-start gap-12 sm:flex-row">
                        <Button
                            type="anchor"
                            text="Book a consultation"
                            iconPosition="left"
                            icon={
                                <Image
                                    src="/images/icons/icon-calendar-outline-darker.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />

                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-chat.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                Chat with us
                            </span>
                        </div>
                    </div>
                }
            />

            <LazyComponent>
                <StackedSection
                    stackList={lasikStackList}
                    h3LightHeading="Why do our patients choose our"
                    descriptions={[
                        `The answer is simple – they want to escape limitations and take charge of their life`
                    ]}
                    h3BoldHeading="LASIK?"
                />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner
                    bannerImage={LasikCtaBannerImage}
                    bannerBg="/images/section-images/lasik-banner-bg.png"
                    bannerTitle="Do you think Lasik could be the right treatment for you?"
                />
            </LazyComponent>

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
                    <>
                        When undergoing laser eye surgery, you may not realize it but you are already making a positive
                        difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                        that ends up in the ocean is roughly the same as your own body weight.
                    </>,
                    <strong className="font-latoBold text-[2rem] leading-[2.4rem]">Our gift to you…</strong>,
                    <>
                        We want to take our impact on the environment a step further and this is where the gift of a
                        tree comes in!
                    </>,
                    <strong className="font-latoBold text-[2rem] leading-[2.4rem]">
                        Here at My-iClinic we give all of our laser patients a real forest tree!
                    </strong>,
                    <>
                        Over your tree’s long life, you can visit it, introduce it to your family and track its growth
                        and value! Over the lifetime of the tree, it will more than offset the carbon you've used with
                        your contacts/glasses. When the tree is harvested, its value will be yours and new trees are
                        planted to replace it.
                    </>,
                    <>This is our big thank you for choosing a natural, green living eye-style.</>
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

            <SideImageSection
                h2Heading="Clearer vision makes a clearer climate"
                sectionClass="!mt-0"
                h3LightHeading="How restoring your natural sight with vision correction"
                h3BoldHeading="treatment is helping the climate change crisis"
                sectionImage={{
                    url: '/images/section-images/clearer-climate.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/clearer-climate-desktop.png',
                    width: 675,
                    height: 642
                }}
                imageYPosition="bottom"
                textColumnExtras={
                    <div className="grid gap-6 md:mt-32">
                        <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            Did you know that blurry vision is rapidly rising?
                        </span>
                        <p>We call this ‘Myopia’ but you might already know Myopia as ‘Nearsightedness’.</p>
                        <p>
                            By 2050 the World Health Organization predicts 4.9 million people will suffer from Myopia
                            which not only affects people's natural sight and quality of life, but also contributes to
                            the masses of plastic waste in our climate.
                        </p>
                        <span className="mt-6 font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            All of our My-iClinic
                            <br />
                            specialists are very climate
                        </span>
                        <p>
                            We understand how vision correction treatment is a healthier and natural way to not only
                            restore your clear vision, but as an opportunity to see our climate become clean and bright
                            for future generations to come!
                        </p>
                    </div>
                }
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
                    faqs={lasikFaqList}
                    titleLight="LASIK Frequently"
                    titleBold="asked Questions"
                    description="Have a question? We’r here to help."
                />
            </LazyComponent>
        </Page>
    );
}
