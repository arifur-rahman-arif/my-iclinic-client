import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';

import LazyComponent from '@/components/LazyComponent';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasek-smile-large.png';
import MastheadImageMedium from '@/masthead/masthead-lasek-smile-medium.png';
import { lasekFaqList } from '@/page-sections/Faq/faqList';
import { lasekSliders } from '@/page-sections/FeaturedPatient';
import {
    ClimateChange,
    Cta2,
    CtaSection,
    FullWidthImageSection,
    FullWidthImageSection3,
    Masthead,
    NormalSection2,
    NormalSection3,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListLasek } from '@/page-sections/LeftRight/leftRightList';
import { lasekStackList } from '@/page-sections/StackedSection';
import FullWidthImageLarge from '@/section-images/lasek-doctor-large.png';
import FullWidthImage from '@/section-images/lasek-doctor.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
// Const BottomBanner = dynamic(() => import('@/page-sections/bottom-full-banners/BottomBanner'));
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});

const BottomBanner2 = dynamic(() => import('@/page-sections/BottomFullBanners/BottomBanner2'), {
    loading: () => <ComponentLoader />
});

const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});

interface LasekPageProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /lasek-prk
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasekPage({ seo, yoastJson }: LasekPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'LASEK, PRK & PTK laser eye surgery London';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Laser Eye Surgery Specialists in London"
            description="At My-iClinic, we offer a range of laser eye surgery procedures to correct common vision problems. Contact us today for a consultation with a specialist."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageMedium}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                bannerWidth="md:max-w-[65.1rem]"
                imagePosition="object-[-20rem_center]"
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[55.4rem]">
                        <strong className="normal-case">
                            Well-known for being the first generation of laser eye procedures
                        </strong>
                    </div>
                }
                altText=""
                description={[
                    `LASEK & PRK surgery is chosen very occasionally and in very special scenarios to correct conditions such as short-sightedness (Myopia) , long-sightedness (Hyperopia) and astigmatism.`,
                    `Our PTK laser eye surgery is an alternative vision correction treatment for people who want independence from glasses but also suffer from an injury on their cornea. If you have any corneal injuries, or corneal eye diseases you might be suitable for our PTK laser surgery to correct your vision.`,
                    `As laser eye surgery must be tailored to each patient’s prescription with complete accuracy, our laser specialists use precise algorithms to program a laser to help you see clearly without glasses or contacts.`
                ]}
                image={FullWidthImage}
                desktopImage={FullWidthImageLarge}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <NormalSection2 />

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading={
                    <>
                        LASEK, PRK & PTK Laser <br />
                    </>
                }
                h3BoldHeading="Eye Surgery at My-iClinic"
                descriptions={[
                    `LASEK (Laser Assisted Epithelial Keratomileusis) and PRK (Photorefractive keratectomy) are almost identical vision correction procedures.`,
                    `LASEK & PRK eye surgery only differ in how our laser specialists remove different layers of the cornea. In LASEK eye surgery, the top layer of cells is simply moved to one side and replaced after surgery, whereas the PRK surgery removes them completely.`,
                    `Both LASEK and PRK surgery procedures use a laser to reshape the tissue on the surface of the eye to achieve clear vision.`
                ]}
                sectionImage={{
                    url: '/images/section-images/lasek-vision-correction-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/lasek-vision-correction-treatment-large.png',
                    width: 675,
                    height: 539
                }}
                altText=""
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListLasek} />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner2 subtitle="With 24 Months Interest-Free Finance Available!" />
            </LazyComponent>

            <CtaSection
                subtitle="talk to a specialist"
                description={
                    <>
                        Need to talk to a specialist before booking a laser consultation? If you are unsure whether you
                        are suitable for our laser treatments, you can attend a{' '}
                        <LinkStyle>FREE suitability check</LinkStyle> with our laser specialist. They will talk you
                        through your prescription history and the best treatment options we offer for vision correction.
                    </>
                }
            />

            <NormalSection3 />

            <LazyComponent>
                <StackedSection
                    stackList={lasekStackList}
                    h3LightHeading={
                        <>
                            Why consider My-iClinic
                            <br />
                        </>
                    }
                    h3BoldHeading="to correct your vision?"
                    descriptions={[
                        `The answer is simple – they want to escape limitations and take charge of their life.`
                    ]}
                />
            </LazyComponent>

            <SideImageSection
                h2Heading="suitability check"
                h3LightHeading={<>Book a FREE laser suitability check to see</>}
                h3BoldHeading="if you can be free of glasses and contact lenses "
                descriptions={[
                    `The best way to find out if laser eye treatment is right for you is to have an in-person assessment. You’ll get a clear answer from our experts on your suitability and vision correction options.`
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
                    <>
                        <Cta2 button1Text="Book A suitability check" />
                    </>
                }
            />

            <FullWidthImageSection3
                title1="97% of people"
                title2="From our clinic are extremely happy with their with their vision after laser vision correction!"
                descriptions={[
                    `Most patients say they wish they’d done it sooner! One of the most mentioned reasons for having laser eye surgery is improved confidence and lifestyle.`
                ]}
            />

            <LazyComponent>
                <FeaturedPatient
                    h2Title="vision correction Patient"
                    h3Title="Life after laser vision correction!"
                    bandImageDescription={[
                        `“Brilliant experience with My-iClinic for laser eye surgery. The team are clearly experts in the area, and I felt well looked after through the entire process.`,
                        `Honest, friendly and professional, I thoroughly recommend My-iClinic for anyone considering laser corrective surgery.”`
                    ]}
                    bandImageTitle="Ms. Priti Patel"
                    bandImageURL="/images/section-images/placeholder-image.png"
                    reviewTitle="Thank you My-iClinic"
                    sliders={lasekSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading="LASEK, PRK & PTK laser eye surgery is"
                        h3BoldHeading="the key to living a sustainable, plastic free life!"
                        descriptions={[
                            `The most sustainable, green lifestyle to have is when you have a plastic free eye-style, free of plastic waste from your glasses and contact lenses!`
                        ]}
                    />

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
                            `When undergoing laser eye surgery, you may not realize it but you are already making a positive
                     difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                      that ends up in the ocean is roughly the same as your own body weight.`,
                            <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                Our gift to you…
                            </span>,
                            `We want to take our impact on the environment a step further and this is where the gift of a tree comes in!`,
                            <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                Here at My-iClinic we give all of our laser patients a real forest tree!
                            </span>,
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

                    <ClimateChange />
                </SustainableSlider>
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="Get the guide to LASEK, PRK & PTK laser surgery"
                    description="Robotic laser vision correction"
                    pageSlug="lasek-prk"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={lasekFaqList}
                    titleLight="LASEK, PRK & PTK Frequently"
                    titleBold="Asked Questions"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasek-prk' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
