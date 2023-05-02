import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { liskListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasik-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasik-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasik.png';
import { lasikFaqList } from '@/page-sections/Faq/faqList';
import { lasikSliders } from '@/page-sections/FeaturedPatient';
import {
    ClimateChange,
    CtaSection2,
    FinanceExtra,
    FullWidthImageSection,
    Masthead,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListLasik } from '@/page-sections/LeftRight/leftRightList';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { lasikStackList } from '@/page-sections/StackedSection';
import ClearVisionImage from '@/section-images/clear-vision-lasik.png';
import LasikImageLarge from '@/section-images/lasik-banner-large.png';
import LasikImage from '@/section-images/lasik-banner.png';
import { WpPageResponseInterface } from '@/types';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPoundSign } from 'react-icons/fa';
import { Button } from 'src/components/Buttons';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});

interface LasikProps {
    seo: any;
    yoastJson: any;
    data: any;
}

/**
 * LASIK page component for the App
 *
 * Url: /lasik-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Lasik({ seo, yoastJson, data }: LasikProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'LASIK Laser Eye Surgery London';
    const subheading =
        'The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="LASIK Laser Eye Surgery London"
            description="The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText="£2,400 per eye"
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <FullWidthImageSection
                h3Title="LASIK may be the suitable alternative to correct your vision"
                description={[
                    `Do you own multiple pairs of reading glasses or varifocals? While they’re a fact of aging, you most likely feel you shouldn't need them yet. Our lifestyles shouldn't be compromised by the limitations of our vision.`,
                    ` If you’d really like to get rid of your glasses, but you’re not sure where to begin, our LASIK procedure is safe and effective for someone like you.`
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
                boldHeading={
                    <>
                        Remember it with
                        <br />
                        Clear vision
                    </>
                }
                altText=""
                image={ClearVisionImage}
                desktopImage={ClearVisionImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0 md:!py-0"
                overlayAnimation={true}
                textColumnOverlay
                sectionClass="bg-brandLight relative"
            />

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our Lasik patients say after treatment"
                    h3Heading="Hear from a patient"
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                        `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                    videoUrl="/videos/lasik.mp4"
                    videoPoster="oO_Sh8m3fIE"
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
                    reviewTitle={
                        <>
                            I take every opportunity to
                            <br /> recommend this Clinic
                        </>
                    }
                    sliders={lasikSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={liskListCataract} />
            </LazyComponent>

            <SideImageSection
                h2Heading="Transparent Price"
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
                    <>
                        <FinanceExtra
                            priceText="£2,400 per eye"
                            priceDescription="With 12 Months Interest-Free Finance available!"
                            paragraphs={[
                                `The best laser eye surgery price in London, saving an average of £1,000 for your treatment
                        when you come to My-iClinic.`
                            ]}
                            list={[
                                <>
                                    One dedicated Lasik specialist for <br /> your treatment
                                </>,
                                'Most affordable price in London'
                            ]}
                        />
                        <Button
                            type="anchor"
                            link="/lasik-london/price"
                            icon={
                                <FaPoundSign className="h-[1.7rem] w-[1.7rem] fill-white transition-all duration-500 group-hover/finance:fill-heading2" />
                            }
                            text="Pricing & Financing"
                            iconPosition="left"
                            className="group/finance mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
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
                            href="/myopia"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            Myopia,
                        </LinkText>{' '}
                        <span className="font-mulishBold font-extrabold">Hyperopia</span>{' '}
                        <LinkText
                            href="/astigmatism-treatment"
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
                        <div className="place-items-end xl:grid">
                            <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center gap-5 bg-heading2 grid-flow-col rounded-primary">
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

                                    <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                                        Request a callback
                                    </span>
                                </button>
                            </BookConsultation>
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

            <CtaSection2 title="Do you think LASIK could be the right treatment for you?" />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={LasikCtaBannerImage}
                    bannerBg="/images/section-images/lasik-banner-bg.png"
                    bannerTitle="Do you think LASIK could be the right treatment for you?"
                />
            </LazyComponent> */}

            {/* <DrawLine
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
            /> */}

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading="LASIK is the biggest step in living"
                        h3BoldHeading="a sustainable, plastic free life!"
                        descriptions={[
                            `The most sustainable, green living lifestyle is when you have a plastic free eye-style. When you have Implantable Contact Lenses you are saying goodbye to the continuous plastic waste produced by glasses and contact lenses!`
                        ]}
                    />

                    {/* <DrawLine
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
            /> */}

                    {/* <Section className="!mt-4">
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
            /> */}

                    <SideImageSection
                        h2Heading="gift of a tree"
                        h3LightHeading={
                            <>
                                Saving the planet
                                <br />
                            </>
                        }
                        h3BoldHeading="One eye at a time!"
                        descriptions={[
                            <>
                                When undergoing laser eye surgery, you may not realize it but you are already making a
                                positive difference to the environment. For every 10 years of contact lens wearing the
                                amount of plastic that ends up in the ocean is roughly the same as your own body weight.
                            </>,
                            <strong className="font-latoBold text-[2rem] leading-[2.4rem]">Our gift to you…</strong>,
                            <>
                                We want to take our impact on the environment a step further and this is where the gift
                                of a tree comes in!
                            </>,
                            <strong className="font-latoBold text-[2rem] leading-[2.4rem]">
                                Here at My-iClinic we give all of our laser patients a real forest tree!
                            </strong>,
                            <>
                                Over your tree’s long life, you can visit it, introduce it to your family and track its
                                growth and value! Over the lifetime of the tree, it will more than offset the carbon
                                you've used with your contacts/glasses. When the tree is harvested, its value will be
                                yours and new trees are planted to replace it.
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

                    {/* <DrawLine
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
            /> */}

                    <ClimateChange />
                </SustainableSlider>
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title={
                        <>
                            Get the guide to
                            <br />
                            LASIK treatment
                        </>
                    }
                    description="Robotic laser vision correction"
                    pageSlug="lasik-london"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || lasikFaqList}
                    titleLight="LASIK"
                    titleBold="Frequently asked questions"
                    description="Have a question? We are here to help."
                />
            </LazyComponent>
        </Page>
    );
}

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasik-london' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf
                }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
