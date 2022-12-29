import {
    CtaSection,
    DrawLine,
    FullWidthImageSection,
    FullWidthImageSection3,
    GridColumn,
    Masthead,
    SideImageSection,
    StackColumn
} from '@/components/page-sections';

import { Container } from '@/components/container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { relexSmileFaqList } from '@/components/page-sections/faq/faqList';
import { presbyondSliders } from '@/components/page-sections/featured-patient';
import { leftRightListRelexSmileLondon } from '@/components/page-sections/left-right/leftRightList';
import { Section } from '@/components/section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { default as LaserEyeSurgery, default as LaserEyeSurgeryLarge } from '@/section-images/laser-eye-surgery.png';
import BannerImage from '@/section-images/relex-banner-bg.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PdfDownload = dynamic(() => import('@/page-sections/pdf-download/PdfDownload'));
const CompanyLogos = dynamic(() => import('@/page-sections/company-logos/CompanyLogos'));
const Faq = dynamic(() => import('@/page-sections/faq/Faq'));
const CallbackSection = dynamic(() => import('@/page-sections/request-callback/CallbackSection'));
const FeaturedPatient = dynamic(() => import('@/page-sections/featured-patient/FeaturedPatient'));
const NormalSlideSection = dynamic(() => import('@/page-sections/normal-slide/NormalSlideSection'));
const BottomBanner = dynamic(() => import('@/page-sections/bottom-full-banners/BottomBanner'));
const LeftRightSection = dynamic(() => import('@/page-sections/left-right/LeftRightSection'));
const SideVideoSection = dynamic(() => import('@/page-sections/side-image-section/SideVideoSection'));
const BottomBanner2 = dynamic(() => import('@/page-sections/bottom-full-banners/BottomBanner2'));

/**
 * Home/Landing page component for the App
 *
 * * Url: /laser-eye-surgery/relex-smile-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function RelexSmileLondon(): JSX.Element {
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
        <Page
            title="ReLEX SMILE Laser eye surgery In London"
            description="ReLEX SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
        >
            <Masthead
                mastheadImage="/images/masthead/masthead-relex-smile.png"
                altText="Man travelling without glasses for vision correction"
                h1Title={
                    <h1 id="masthead-title" className="flex flex-wrap items-center justify-start gap-2">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">ReLEX</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">SMILE</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Laser</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Eye</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Surgery</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            London’s
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            latest
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            laser
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            vision
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            correction
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            procedure
                        </span>
                    </h2>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:mt-[24rem]"></div>

            <FullWidthImageSection
                h3Title="Say hello to clear vision with ReLEX SMILE Laser Eye Surgery!"
                altText="Man with luggage at airport"
                image={LaserEyeSurgery}
                desktopImage={LaserEyeSurgeryLarge}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListRelexSmileLondon} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our ReLEX patients Say After treatment "
                    h3Heading="Hear from a patient"
                    darkPin
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                         you’ve made the best possible choice for your eyesight. Our specialist
                          optometrists carefully work with you to evaluate your eyes to offer you the best
                           possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner2 />
            </LazyComponent>

            <SideImageSection
                h2Heading="Why RELEX SMILE"
                h3LightHeading="The benefits of ReLEX"
                h3BoldHeading="Smile laser eye surgery!"
                descriptions={[
                    `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                     you’ve made the best possible choice for your eyesight.`,
                    `Our specialists here in London will carefully work with you to evaluate your eyes,
                    offering you the best possible course of treatment. Take the first step and allow yourself
                     to re-discover a life of clear, natural vision.`
                ]}
                customColumn={<GridColumn />}
            />

            <SideImageSection
                h2Heading="improve your life's quality"
                h3LightHeading="Step closer to a life of"
                h3BoldHeading="Clear, natural vision!"
                descriptions={[
                    `Have you or one of your loved ones finally decided to do something about being short-sighted or
                     having astigmatism? To begin the ReLEX SMILE process, give us a call or book a consultation with
                      our friendly team today.`
                ]}
                sectionImage={{
                    url: '/images/section-images/clear-natural-vision.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/clear-natural-vision-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText="Two friends travelling with clear vision"
                textColumnExtras={
                    <p className="font-mulishBold text-[2rem] leading-[2.4rem]">
                        A better quality of life is just around
                        <br />
                        the corner.
                    </p>
                }
            />

            <FullWidthImageSection3 />

            <CtaSection />

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="Relex SMILE Patient"
                    h3Title="Life after ReLEX SMILE Treatment"
                    bandImageDescription={[
                        `It has been two months since my ReLEX SMILE eye surgery at My-iClinic,
                        and my vision is better than 20/20 (~20/10), with only minor and receding eye dryness. `,
                        'In the past, I was a regular contact lens user with a -4.25 prescription in both eyes.',
                        `Dr John Bolger has taken great care in assessing my vision and health, and explaining the surgery.
                         He performed the correcting procedure with great care, and after 15 minutes I walked out
                          of the surgery on my own without any visual aids or help!`
                    ]}
                    bandImageTitle="Mr. Lukicov"
                    bandImageURL="/images/section-images/mr-lukicov.png"
                    reviewDescription={[
                        `The next day I was already back at work (software development),
                         gym the following day (weight lifting) and swimming just a week after - if that is not a miracle,
                          I don't know what is!`
                    ]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={presbyondSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <FullWidthImageSection
                h3Title="Whatever the view,"
                boldHeading={`Remember it with <br/> Clear vision`}
                altText=""
                albumAnimation
                containerClass="grid grid-cols-1 items-center justify-center py-12 sm:py-16 lg:py-0 gap-12 lg:grid-cols-[auto_1fr] xl:grid-cols-2  lg:gap-24"
            />

            <SideImageSection
                h2Heading="Why laser Relex smile"
                h3LightHeading="Why consider our ReLEX SMILE Laser eye surgery"
                h3BoldHeading="When you already have Glasses or contact lenses?"
                sectionImage={{
                    url: '/images/section-images/laser-relex-smile.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/laser-relex-smile-large.png',
                    width: 682,
                    height: 686
                }}
                altText="Male athlete on bike after laser eye surgery"
                textColumnImage={true}
                customColumn={<StackColumn />}
                containerClassName="!items-start"
            />

            <SideImageSection
                h2Heading="Right treatment for you"
                h3LightHeading="Do you think ReLEX SMILE could"
                h3BoldHeading="Be the right treatment for you?"
                descriptions={[
                    `To begin the ReLEx SMILE process, give us a call on
                    <br />
                    <strong>020 8445 8877</strong> or book your free consultation with our friendly team today.`
                ]}
                sectionImage={{
                    url: '/images/section-images/right-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/right-treatment-large.png',
                    width: 657,
                    height: 554
                }}
                altText="Woman smiling without needing glasses for short-sightedness"
                textColumnExtras={
                    <span className="font-latoBold text-[2.8rem] leading-[3.2rem]">
                        A better quality of life is just
                        <br />
                        around the corner!
                    </span>
                }
            />

            <LazyComponent>
                <BottomBanner bannerImage={BannerImage} bannerBg="/images/section-images/relex-banner-bg-large.webp" />
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
                h3LightHeading="Presbyond is the key to living"
                h3BoldHeading="a sustainable, plastic free life!"
                descriptions={[
                    `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                    free of plastic waste from your glasses and contact lenses!`
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
                altText="Beautiful lake and mountains. Climate change awareness from plastic glasses and
                contact lenses."
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
                altText="Beautiful forest. Climate change awareness from plastic glasses and contact lenses."
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
                    `When undergoing laser eye surgery, you may not realize it but you are already making a positive
                     difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                      that ends up in the ocean is roughly the same as your own body weight.`,
                    `<span class='font-latoBold text-[2rem] normal-case leading-[2.4rem]'>
                        Our gift to you…
                    </span>`,
                    `We want to take our impact on the environment a step further and this is where the gift of a tree comes in!`,
                    `<span class='font-latoBold text-[2rem] normal-case leading-[2.4rem]'>
                        Here at My-iClinic we give all of our laser patients a real forest tree!
                    </span>`,
                    `Over your tree’s long life, you can visit it, introduce it to your family and track its growth and
                     value! Over the lifetime of the tree, it will more than offset the carbon you've used with your
                      contacts/glasses. When the tree is harvested, its value will be yours and new trees are planted
                      to replace it.`,
                    `This is our big thank you for choosing a natural, green living eye-style.`
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
                altText="Beautiful forest. Climate change awareness from plastic glasses and contact lenses."
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
                <PdfDownload
                    title="Get the guide to ReLEX laser surgery"
                    description="Robotic laser vision correction"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={relexSmileFaqList}
                    titleLight="ReLEX SMILE Laser"
                    titleBold="Treatment FAQ’s"
                    description="Have a question? We’r here to help."
                />
            </LazyComponent>
        </Page>
    );
}
