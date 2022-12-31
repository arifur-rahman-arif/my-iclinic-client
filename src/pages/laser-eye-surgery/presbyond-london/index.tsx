import { CtaSection, DrawLine, FullWidthImageSection, Masthead, SideImageSection } from '@/components/page-sections';

import { Container } from '@/components/container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import { presbyondFaqList } from '@/components/page-sections/faq/faqList';
import { presbyondSliders } from '@/components/page-sections/featured-patient';
import { LeftRightSectionChildrenInterface } from '@/components/page-sections/left-right';
import { presbyondStackList } from '@/components/page-sections/stacked-section';
import { Section } from '@/components/section';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LaserTreatment from '@/section-images/best-laser-treatment.png';
import LaserTreatmentDesktop from '@/section-images/best-laser-treatment-desktop.png';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import PresbyondBannerImage from '@/section-images/presbyond-banner-bg.png';

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
const StackedSection = dynamic(() => import('@/components/page-sections/stacked-section/StackedSection'), {
    ssr: true
});
const LeftRightSection = dynamic(() => import('@/components/page-sections/left-right/LeftRightSection'), {
    ssr: true
});
const SideVideoSection = dynamic(() => import('@/components/page-sections/side-image-section/SideVideoSection'));

const leftRightList: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-consultation.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="Woman gets her eyes checked with an ophthalmologist for presbyond laser eye"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-consultation-desktop.png"
                width={685}
                height={587}
                quality={70}
                className="hidden md:block"
                alt="Woman gets her eyes checked with an ophthalmologist for presbyond laser eye"
            />
        ),
        title: `Presbyond Consultation`,
        descriptions: [
            `When you arrive for your Presbyond consultation with us, our friendly technicians will carry out some detailed assessments on your eyes.`,
            `These assessments will measure your eyes, your prescription and check the overall health for any other eye conditions you may have.`,
            `Our laser specialist will then be able to assess your suitability for presbyond and they will talk you through the treatment and how Presbyond will best work for you and your lifestyle.`,
            `We understand that laser treatment is a life-changing decision which is why our Presbyond consultation is completely FREE without any obligation to commit to treatment!`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-surgery.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="Presbyond treatment to correct blurry, long-sighted vision."
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-surgery-desktop.png"
                width={677}
                height={558}
                quality={70}
                className="hidden md:block"
                alt="Presbyond treatment to correct blurry, long-sighted vision."
            />
        ),
        title: `Presbyond surgery`,
        descriptions: [
            `Our presbyond laser treatment uses a unique blended vision technique which extends the eyes ability to see from near through to intermediate and distant sight.`,
            `On the day of treatment, our friendly nurse team will greet you and talk you through the preparations for the treatment and will answer any questions you may have before meeting your specialist again.`,
            `They will carefully take care of administering anesthetic eye drops into your eyes so that the laser treatment will be completely painless.`,
            `Your specialist will greet you in the treatment room and they will give clear, easy instruction as the laser reshapes your eye. The procedure itself takes up to 20 minutes per eye without any pain or discomfort. Once the treatment is finished, our nurse will talk you through any questions you may have and will show you the aftercare eye drops you will be required to use at home.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyond-aftercare.png"
                width={390}
                height={390}
                quality={70}
                className="md:hidden"
                alt="Woman recovering after Presbyond laser eye surgery, holding a coffee cup and
                reading her ipad without reading glasses.
                "
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyond-aftercare-desktop.png"
                width={685}
                height={587}
                quality={70}
                className="hidden md:block"
                alt="Woman recovering after Presbyond laser eye surgery, holding a coffee cup and
                reading her ipad without reading glasses.
                "
            />
        ),
        title: `Presbyond aftercare`,
        descriptions: [
            `Presbyond only requires an initial 1 week recovery period with little activity.`,
            `In the initial days of your recovery period there may be a gritty sensation and you may experience some sensitivity to light.`,
            `Any symptoms experienced after your treatment will reside as your eyes fully heal and process your new refraction.`,
            `In your aftercare appointment with your laser specialist, they will check the progress of your vision and keep you informed about how long you should keep using your eye drops.`
        ]
    }
];

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
        <Page
            title="Presbyond Laser eye surgery In London"
            description="Presbyond laser eye surgery is a vision correction treatment to fix presbyopia (long-sightedness). Learn about the treatments available and how we can help."
        >
            <Masthead
                mastheadImage="/images/masthead/masthead-presbyond.png"
                altText="Presbyopic woman reading a book with her glasses on."
                h1Title={
                    <h1 id="masthead-title">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Presbyond</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Laser</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Treatment</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Correct
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            your
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            vision
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            and
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            say
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Goodbye
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            to
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            reading
                        </span>{' '}
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            glasses
                        </span>
                    </h2>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Getting rid of your reading glasses with"
                h3BoldHeading="our Presbyond Laser Treatment"
                altText="Woman with reading glasses has a headache from watching her laptop screen. She is
                long sighted, suffering from presbyopia."
                descriptions={[
                    `Always wanted to know what your vision could be like without the need for reading
                    glasses?`,
                    `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                        hypermetropia and hyperopia), our Presbyond laser surgery can fix your refractive error
                        for an easier, clearer way of life.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-laser-treatment.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-laser-treatment-desktop.png',
                    width: 688,
                    height: 642
                }}
            />

            <FullWidthImageSection
                h3Title="London’s best laser treatment for achieving clear vision at all distances"
                altText="Man suffers from long-sightedness. He squints at his phone, holding his prescription
                glasses to see a text message."
                image={LaserTreatment}
                desktopImage={LaserTreatmentDesktop}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightList} />
            </LazyComponent>

            <SideImageSection
                normalLightHeading="What to expect after your Presbyond Treatment with our London specialists."
                altText="Older man with clear vision looking at his fit bit after running a marathon."
                descriptions={[
                    `Saving vision, time, money and the planet! Having Presbyond is a brilliant achievement for your vision, your time, your long-term savings and the sustainability of our planet. We want all of our patients to be well-informed about their recovery process after Presbyond surgery!`,
                    `Our team takes your aftercare very seriously, which is why our laser specialist will have follow up assessments and appointments with you throughout the year after your treatment date.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-treatment.png',
                    width: 366,
                    height: 361
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-treatment-desktop.png',
                    width: 677,
                    height: 558
                }}
            />

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our Presbyond patients Say After treatment"
                    h3Heading="Hear from a patient"
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.
                     Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best
                      possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                    sectionImage={{
                        url: '/images/section-images/presbyond-treatment.png',
                        width: 366,
                        height: 361
                    }}
                    sectionImageDesktop={{
                        url: '/images/section-images/presbyond-treatment-desktop.png',
                        width: 677,
                        height: 558
                    }}
                />
            </LazyComponent>

            <CtaSection />

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="Presbyond Patient"
                    h3Title="Life after Presbyond laser eye surgery"
                    bandImageDescription={[
                        `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                        'The after care is exceptional and I would highly recommend them.'
                    ]}
                    bandImageTitle="Sharon Needleman"
                    bandImageURL="/images/section-images/mr-lukicov.png"
                    reviewDescription={[
                        `Being able to see again without glasses is the best feeling and the best money I have ever spent!!!`
                    ]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={presbyondSliders}
                />
            </LazyComponent>

            <SideImageSection
                h2Heading="Transparent Price"
                h3LightHeading="Clearer vision with an
                all inclusive,"
                h3BoldHeading="Transparent cost"
                descriptions={[
                    `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                    `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                ]}
                sectionImage={{
                    url: '/images/section-images/transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/transparent-price-desktop.png',
                    width: 689,
                    height: 558
                }}
                altText="Happy couple on a hike in the mountains after correcting their long-sighted vision."
                textColumnExtras={
                    <div className="grid gap-6">
                        <h2 className="normal-case">
                            £2,400 per Eye
                            <br /> With 10 Months Interest-Free Finance available!
                        </h2>
                        <p>
                            The best laser eye surgery price in London, saving an average of £1,000 for your treatment
                            when you come to My-iClinic.
                        </p>
                        <p>
                            Want to know more about our{' '}
                            <LinkText
                                href="#"
                                className="font-mulishBold font-extrabold text-blue"
                                indicatorColor="bg-blue"
                            >
                                Finace Options?
                            </LinkText>
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
                                    One dedicated presbyond specialist
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
                <StackedSection
                    stackList={presbyondStackList}
                    h3LightHeading="Why do our patients choose our"
                    h3BoldHeading="Presbyond laser surgery?"
                    descriptions={[
                        `The answer is simple – they want to escape limitations and take charge of their life.`
                    ]}
                />
            </LazyComponent>

            <SideImageSection
                h3LightHeading="Want to be free from your glasses after"
                h3BoldHeading="having Cataract Treatment?"
                descriptions={[
                    `Saying goodbye to glasses after cataract surgery is now possible with Presbyond laser treatment! 
                    We can book a private presbyond consultation from 3 to 6 months after your cataract surgery.`
                ]}
                sectionImage={{
                    url: '/images/section-images/cataract-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-treatment-desktop.png',
                    width: 633,
                    height: 500
                }}
                positionReversed={true}
                altText="Old man excited about getting rid of his reading glasses with Presbyond laser
                treatment."
            />

            <LazyComponent>
                <BottomBanner
                    bannerImage={PresbyondBannerImage}
                    bannerBg="/images/section-images/presbyond-banner-bg-desktop.webp"
                />
            </LazyComponent>

            {/* <Section>
                <ContainerFluid className="md:h-[51rem]">
                    <Image
                        src="/images/section-images/mountain-image-mobile.png"
                        alt="Beautiful lake and mountains. Climate change awareness from plastic glasses and
                        contact lenses.
                        "
                        width={393}
                        height={137}
                        quality={70}
                        className="mx-auto md:hidden md:h-auto md:w-auto"
                    />
                    <Image
                        src="/images/section-images/mountain-image-desktop.png"
                        alt="Beautiful lake and mountains. Climate change awareness from plastic glasses and
                        contact lenses.
                        "
                        fill
                        quality={70}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </ContainerFluid>
            </Section> */}

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

            {/* <Section className="!mt-0">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-3.png"
                        alt=""
                        width={399}
                        height={162}
                        quality={70}
                        className="mx-auto md:hidden"
                    />
                    <Image
                        src="/images/section-images/mountain-image-3-desktop.png"
                        alt=""
                        width={1157}
                        height={470}
                        quality={70}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </Container>
            </Section> */}

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
                    faqs={presbyondFaqList}
                    titleLight="Presbyond Frequently"
                    titleBold="Asked Questions"
                    description="Have a question? We’r here to help."
                />
            </LazyComponent>
        </Page>
    );
}
