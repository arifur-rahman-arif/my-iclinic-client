import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from 'src/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletPoint,
    CtaSection,
    CtaSection2,
    FinanceExtra,
    Masthead,
    PlasticFree,
    SideImageSection,
    StackColumnIcl
} from '@/components/page-sections';
import { iclFaqList } from '@/components/page-sections/Faq/faqList';
import { iclSliders } from '@/components/page-sections/FeaturedPatient';
import { leftRightListIcl } from '@/components/page-sections/LeftRight/leftRightList';
import { iclStackList } from '@/components/page-sections/StackedSection';
import { iclListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconPin from '@/icons/icon-pin-small.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-icl-large.png';
import MastheadImageSmall from '@/masthead/masthead-icl-small.png';
import MastheadImageMedium from '@/masthead/masthead-icl.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { FaPoundSign } from 'react-icons/fa';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/components/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const StackedSection = dynamic(() => import('@/components/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/components/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/components/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});

interface IclProps {
    seo: any;
    yoastJson: any;
    data: any;
}

/**
 * Url: /icl
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Icl({ seo, yoastJson, data }: IclProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    const heading = 'ICL Surgery in London';
    const subheading = 'Implantable Contact Lenses';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex max-w-[43.7rem] flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0 blur-sm" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText="£2,750 per eye"
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] lowercase leading-[2.4rem] text-heading2 first-letter:uppercase">
                        With 24 Months Interest
                        <br /> Free Finance available!
                    </span>
                }
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="London’s latest vision correction treatment"
                h3BoldHeading="for glasses and contact lens wearers"
                altText=""
                descriptions={[
                    <>
                        If you are ready to break from compromising with your everyday contact lenses or glasses, take a
                        look at our <span className="font-mulishBold font-extrabold ">biocompatible ICL</span> lenses
                        made by EVO Visian - a groundbreaking Evolution in Visual Freedom!
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
                h2Heading="Life quality improvement"
                h3LightHeading={
                    <>
                        Life after Implantable
                        <br />
                    </>
                }
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
                            <BulletPoint />
                            <p className="font-mulishBold">99.4% of people would choose to have ICL again</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />

                            <p className="font-mulishBold">2,000,000+ ICL procedures worldwide</p>
                        </li>
                        <li className="flex items-start justify-start gap-4">
                            <BulletPoint />
                            <p className="font-mulishBold">20+ years of premium ICL performance</p>
                        </li>
                    </ul>
                }
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        Our Implantable Contact Lenses
                        <br />
                    </>
                }
                h3BoldHeading={<>Are transparent in price too!</>}
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
                    <>
                        <FinanceExtra
                            priceText="£2750 per eye"
                            priceDescription="With 10 Months Interest-Free Finance available!"
                            paragraphs={[
                                `The best ICL surgery price in London, saving an average of £2,000 in your treatment when you
                            come to My-iClinic.`
                            ]}
                            list={[
                                '0% finance available',
                                <>
                                    One dedicated ICL specialist
                                    <br />
                                    for your treatment
                                </>,
                                'Most affordable price in London'
                            ]}
                        />
                        <Button
                            type="anchor"
                            link="/icl/price"
                            icon={<FaPoundSign className="h-[1.7rem] w-[1.7rem]" />}
                            text="Pricing & Financing"
                            iconPosition="left"
                            className="mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />

            <CtaSection2
                title="Book a consultation today to see if ICL eye surgery is right for you"
                descriptions={[
                    <>
                        Discuss your options and eligibility for implantable contact lens surgery with one of our
                        experts. We will give you clear advice on your suitability and best vision correction options
                        for your circumstances.
                    </>
                ]}
            />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={IclBannerImage}
                    bannerTitle="Book a consultation today to see if ICL eye surgery is right for you"
                    bannerBg="/images/section-images/icl-banner-bg-large.png"
                    bannerDescription="Discuss your options and eligibility for implantable contact lens surgery with one of our experts. We will give you clear advice on your suitability and best vision correction options for your circumstances."
                />
            </LazyComponent> */}

            <LazyComponent>
                <StackedSection
                    stackList={iclStackList}
                    h3LightHeading={
                        <>
                            The benefits of
                            <br /> Implantable Contact
                            <br />
                        </>
                    }
                    h3BoldHeading={
                        <>
                            Lenses for Clear, long-
                            <br />
                            term vision!
                        </>
                    }
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
                    bandImageURL="/images/section-images/eliete.png"
                    reviewDescription={[`It’s just been amazing and I would do it again…`]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={iclSliders}
                    bandColor="bg-[#7000FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={iclListCataract} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="Is ICL for me?"
                    noPin
                    beforeAttribute
                    videoUrl="/videos/icl.mp4"
                    videoPoster="txmJk2sY-yI"
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
            {/*
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
            /> */}

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading="Green living with"
                        h3BoldHeading="Implantable Contact Lenses"
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
                                    We want to take our impact on the environment a step further and this is where the
                                    gift of a tree comes in!
                                </span>
                            </div>
                        }
                    />
                </SustainableSlider>
            </LazyComponent>

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

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="ICL Patient Information"
                    pageSlug="icl"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || iclFaqList}
                    titleLight="Implantable contact lenses"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'icl' });

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
