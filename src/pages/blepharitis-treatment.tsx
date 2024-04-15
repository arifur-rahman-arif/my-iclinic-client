/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { normalSlideListBlepharitis } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import MastheadImageLarge from '@/masthead/masthead-blepharitis-large.png';
import MastheadImageMedium from '@/masthead/masthead-blepharitis-medium.png';
import MastheadImageSmall from '@/masthead/masthead-blepharitis-small.png';
import { blepharitisFaqList } from '@/page-sections/Faq/faqList';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { blepharitisList } from '@/page-sections/SectionParts/stack-column/list';
import FullWidthImage from '@/section-images/blepharitis.png';
import { BlepharitisContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import FullWidthImageSection from '@/components/page-sections/SideImageSection/FullWidthImageSection';
import { SideImageSection } from '@/components/page-sections/SideImageSection';
import StackColumn2 from '@/components/page-sections/SectionParts/stack-column/StackColumn2';
import { Masthead } from '@/components/page-sections/Masthead';
import { CtaSection2 } from '@/components/page-sections';

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

interface DataInterface extends BlepharitisContentInterface, PageDataInterface<BlepharitisContentInterface> {}

interface BlepharitisPageProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Presbyond page component for the App
 *
 * * Url: /blepharitis-treatment
 *
 * @export
 * @returns {JSX.Element}
 */
export default function BlepharitisPage({ seo, yoastJson, data }: BlepharitisPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Blepharitis treatment in London';
    const subheading = data?.masthead_subheading || 'London’s best treatment for Blepharitis symptoms';

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
                imageMedium={data?.masthead_image?.image_medium.url || MastheadImageMedium}
                imagePosition="2xl:object-[-40rem_center]"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || 'From £350'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            {/* SEction_1 */}
            <FullWidthImageSection
                containerClass="pb-16 md:py-24"
                boldHeading={
                    <>
                        {data?.section_1?.heading_1 || 'London’s best treatment for'}
                        <br /> {data?.section_1?.heading_2 || 'Blepharitis symptoms'}
                    </>
                }
                altText=""
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        `At My iClinic, we understand that Blepharitis can be a difficult condition to manage on your own. That's why we offer comprehensive treatment plans designed to help you manage the symptoms and get back to living a life free of discomfort.`,
                        `Our Blepharitis treatment specialists provide straightforward, effective solutions tailored to your individual needs.`
                    ]
                }
                image={data?.section_1?.image || '/images/section-images/blepharitis.png'}
                desktopImage={data?.section_1?.large_image || '/images/section-images/blepharitis.png'}
            />
            {/* SECTION 2 */}
            <SideImageSection
                h2Heading={data?.section_2?.sub_heading || 'symptoms Relieve'}
                h3LightHeading={data?.section_2.heading?.light_heading || 'Relieve your symptoms with'}
                h3BoldHeading={data?.section_2.heading?.bold_heading || 'Treatment for Blepharitis'}
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `Blepharitis is a chronic condition involving the inflammation of your eyelids, leading them to become red and swollen.`,
                        `Although Blepharitis is not painful in the eye or contagious, it can be very uncomfortable and irritating to anybody experiencing their symptoms getting worse.`,
                        `We understand how blepharitis can be very stressful and problematic which is why our treatment options for blepharitis are very straightforward and can help ease the stress of facing these symptoms alone.`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/symptoms-relieve-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/symptoms-relieve-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText=""
            />
            {/* TREATMENTS FOR BLEPHARITIS */}
            <SideImageSection
                h2Heading={data?.section_3?.sub_heading || 'treatments for blepharitis'}
                h3LightHeading={data?.section_3?.heading?.light_heading || 'Managing your Blepharitis'}
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'with treatment'}
                descriptions={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        `Although blepharitis is a chronic condition that needs constant management, we have the most successful treatments to help remission (lessen) your symptoms and relieve you of the stress and worry you might be experiencing with Blepharitis throughout your daily life.`,
                        `When arriving at a private consultation with us, our blepharitis specialist will guide you through some eye checks which are essential in capturing where the blepharitis is growing and how your blepharitis symptoms can be best treated.`
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/treatments-for-blepharitis-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image || '/images/section-images/treatments-for-blepharitis-large.png',
                    width: 675,
                    height: 558
                }}
                altText=""
            />
            {/* Section 4   WE CAN ALWAYS HELP */}
            <SideImageSection
                h2Heading={data?.section_4?.sub_heading || 'we can always help'}
                h3LightHeading={
                    data?.section_4?.heading?.light_heading || 'Don’t suffer with your Blepharitis symptoms'
                }
                h3BoldHeading={data?.section_4?.heading?.bold_heading || 'we can always help!'}
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        `Whether you have mild or growing symptoms of blepharitis our specialist can treat your symptoms.`,
                        `By choosing My iClinic as your preferred blepharitis specialist in London, you can rest assured that you'll receive expert advice and guidance towards managing the condition for lasting results. Your specialist will take the time to discuss your concerns and collaboratively come up with solutions designed around individual lifestyle preferences. Some of our treatments include:`
                    ]
                }
                customColumn={
                    <StackColumn2
                        list={(data?.section_4?.list.length && (data?.section_4?.list as any)) || blepharitisList}
                    />
                }
            />
            {/* Book with our Blepharitis specialist Section 5  */}
            <CtaSection2
                title={data?.section_5?.title || 'Book with our Blepharitis specialist'}
                image={data?.section_5?.image}
            />

            {/* <LazyComponent>
                <FeaturedPatient
                    h2Title="Life style improvement"
                    h3Title="Life after Blepharitis treatment & management"
                    bandImageDescription={[
                        `When you choose My iClinic, one of our dedicated specialists will offer you expert advice on managing blepharitis so that you can live life free of irritation and discomfort.`,
                        'We will be committed to working with you to find the best treatment for blepharitis to solve your unique situation.'
                    ]}
                    bandImageTitle="Patient Name"
                    bandImageURL="/images/section-images/placeholder-image.png"
                    reviewTitle="5 star Blepharitis clinic in London"
                    sliders={blepharitisSliders}
                />
            </LazyComponent> */}

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListBlepharitis} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || blepharitisFaqList}
                    titleLight="Blepharitis"
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
        const data: WpPageResponseInterface<BlepharitisContentInterface> = await getPageData({
            slug: 'blepharitis-treatment'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // Dry eye syndrome symptoms
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // SYMPTOMS RELIEVE
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // TREATMENTS FOR BLEPHARITIS
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions),
                        list: Array.isArray(data?.acf?.section_4?.list)
                            ? data?.acf.section_4?.list.map((item) => {
                                  return {
                                      ...item,
                                      description: convertArrayOfObjectsToStrings(item.descriptions)
                                  };
                              })
                            : []
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    }
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
