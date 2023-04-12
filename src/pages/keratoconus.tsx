import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { normalSlideListKeratoconus } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-keratoconus-large.jpg';
import MastheadImageMedium from '@/masthead/masthead-keratoconus-medium.png';
import MastheadImageSmall from '@/masthead/masthead-keratoconus-small.png';
import { keratoconusFaqList } from '@/page-sections/Faq/faqList';
import { CtaSection2, FullWidthImageSection, Masthead, SideImageSection, StackColumn2 } from '@/page-sections/index';

import { keratoconusList } from '@/page-sections/SectionParts/stack-column/list';
import CornealImageLarge from '@/section-images/cross-linking-surgery-large.png';
import CornealImage from '@/section-images/cross-linking-surgery.png';
import FullWidthImageLarge from '@/section-images/keratoconus-large.png';
import FullWidthImage from '@/section-images/keratoconus.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface KeratoconusPageProps {
    seo: any;
    yoastJson: any;
    data: any;
}

/**
 *
 * Url: /keratoconus
 *
 * @export
 * @returns {JSX.Element}
 */
export default function KeratoconusPage({ seo, yoastJson, data }: KeratoconusPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Keratoconus treatment London';
    const subheading = "Keratoconus treatment with London's leading cornea specialists";

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
                    <h1 className="flex flex-wrap gap-2 xs:gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
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
                priceText="From £200"
            />

            <Container className="mt-28">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">London’s best treatment for Keratoconus</strong>
                    </div>
                }
                altText=""
                description={[
                    'Keratoconus is a progressive eye condition that affects the development of your cornea (the outer layer of your eyes). Rather than your eye growing in a normal sphere shape, those with Keratoconus develop a cone-shaped cornea that progressively thins, causing a bulge to form on the eye.',
                    'This can make it very difficult for the eyes to focus. People who have keratoconus may experience blurry vision, headaches, inflammation in their cornea, frequent changes with their prescription glasses, glares or halos around lights and increased sensitivity to light.',
                    'We can provide you with our cross-linking treatment which is the most effective surgical treatment to manage your keratoconus symptoms with our cornea specialist.'
                ]}
                image={FullWidthImage}
                desktopImage={FullWidthImageLarge}
                containerClass="pb-16 md:py-24"
            />

            <SideImageSection
                h2Heading="Corneal Typography Assessment"
                h3LightHeading={
                    <>
                        Understanding your
                        <br />
                    </>
                }
                h3BoldHeading="Keratoconus"
                descriptions={[
                    'When you arrive for a private consultation you will meet our friendly technician team who will guide you through some eye assessments to measure the thickness of your cornea and check the general health of your eyes.',
                    'Our eye assessments take around 1 hour which will inform your specialist of any cornea changes you have experienced and at what progression this may change in the future.',
                    'Our cornea specialist will carry out a chorenal typography which measures the curve of your cornea to work out how much astigmatism (impaired eyesight) you have.',
                    `They will also measure the thickness of your cornea and If you have already been using keratoconus glasses or hard contact lenses to help correct your sight, it is most likely that you will be suitable for our cross-linking treatment to strengthen the corneal tissue.`
                ]}
                sectionImage={{
                    url: '/images/section-images/corneal-typography.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/corneal-typography-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText=""
            />

            <SideImageSection
                h2Heading="treatments for keratoconus"
                h3LightHeading={
                    <span className="block normal-case md:max-w-[44.5rem]">
                        Kerataconus treatment and <strong className="normal-case">cross-linking surgery</strong>
                    </span>
                }
                h3BoldHeading=""
                descriptions={[
                    'The initial treatment for Keratoconus is glasses. However, if the condition worsens, your opticians may suggest hard contact lenses to help correct your sight.',
                    'These lenses tend to be thicker and heavier than the soft kind and can also cause your vision to be distorted when you are looking through the edge of the lens.',
                    'Despite this, they provide a more even shape to your cornea, which helps improve your ability to focus.',
                    'If you are prescribed lenses, you may find that you have to change your glasses frequently. This is because the condition causes your cornea to be thinner and more flexible.'
                ]}
                sectionImage={{
                    url: '/images/section-images/treatments-for-keratoconus.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/treatments-for-keratoconus-large.png',
                    width: 609,
                    height: 585
                }}
                altText=""
            />

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">
                            What is minimally invasive corneal cross-linking surgery?
                        </strong>
                    </div>
                }
                altText=""
                description={[
                    'Our specialists may consider corneal cross-linking as the best treatment to help improve your Keratoconus condition. Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your keratoconus from worsening.',
                    'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
                    'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.'
                ]}
                image={CornealImage}
                desktopImage={CornealImageLarge}
                reverseColumn
                containerClass="pb-16 md:py-24"
            />

            <SideImageSection
                h2Heading="cross-linking"
                containerClassName="md:!grid-cols-1 md:!gap-24"
                h3LightHeading={
                    <span className="block normal-case md:max-w-[44.6rem]">
                        Why you should consider <strong className="normal-case">cross-linking at My-iClinic</strong>
                    </span>
                }
                customColumn={
                    <StackColumn2
                        list={keratoconusList}
                        className="grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] md:!ml-14 xl:grid-cols-3"
                    />
                }
            />

            <CtaSection2
                title={<div className="normal-case">Cornea transplant at My-iClinic</div>}
                descriptions={[
                    'A cornea transplant (often known as Keratoplasty or a corneal graft) is a surgery we offer to protect the eyes from severe cases of progressive Keratoconus.',
                    'If your case of keratoconus worsens, it is likely that you will become intolerant to visual aids such as: glasses and/or contact lenses.',
                    'Our cornea specialist will be able to assess whether a corneal transplant will be a suitable treatment and will remove the damaged area of your cornea, replacing this with donor tissue.',
                    'A corneal transplant can significantly reduce the risk of vision loss and improve the health of your eyes for improving vision.'
                ]}
                image={{
                    url: '/images/section-images/cta-keratoconus.png',
                    width: 640,
                    height: 514
                }}
                imageLarge={{
                    url: '/images/section-images/cta-keratoconus-large.png',
                    width: 640,
                    height: 514
                }}
            />

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListKeratoconus} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || keratoconusFaqList}
                    titleLight="Keratoconus"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'keratoconus' });

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
