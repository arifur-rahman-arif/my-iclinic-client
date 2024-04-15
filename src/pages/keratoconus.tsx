import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
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
import { keratoconusContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
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

interface DataInterface extends keratoconusContentInterface, PageDataInterface<keratoconusContentInterface> {}

interface KeratoconusPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
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
    const heading = data?.masthead_heading || 'Keratoconus treatment London';
    const subheading = data?.masthead_subheading || "Keratoconus treatment with London's leading cornea specialists";

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const crossListdata: any = data?.crossList
        ? data?.crossList.map((item) => {
              return {
                  ...item,
                  title: item?.title,
                  description: item?.descriptions?.length && stringArrayToElementArray(item?.descriptions)
              };
          })
        : null;
    // reviewSliderdata
    const reviewSliderdata: any =
        Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0
            ? data.reviewSlider.map((service) => {
                  return {
                      ...service,
                      description: service?.description,
                      name: service?.name,
                      title: service?.title
                  };
              })
            : null;
    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || 'From £200'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">
                            {data?.section_3?.heading || `London’s best treatment for Keratoconus`}
                        </strong>
                    </div>
                }
                altText=""
                description={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3?.descriptions)) || [
                        'Keratoconus is a progressive eye condition that affects the development of your cornea (the outer layer of your eyes). Rather than your eye growing in a normal sphere shape, those with Keratoconus develop a cone-shaped cornea that progressively thins, causing a bulge to form on the eye.',
                        'This can make it very difficult for the eyes to focus. People who have keratoconus may experience blurry vision, headaches, inflammation in their cornea, frequent changes with their prescription glasses, glares or halos around lights and increased sensitivity to light.',
                        'We can provide you with our cross-linking treatment which is the most effective surgical treatment to manage your keratoconus symptoms with our cornea specialist.'
                    ]
                }
                image={data?.section_3?.image || FullWidthImage}
                desktopImage={data?.section_3?.imagelarge || FullWidthImageLarge}
                containerClass="pb-16 md:py-24"
            />

            <SideImageSection
                h2Heading={data?.section_4?.sub_heading || 'Corneal Typography Assessment'}
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading || 'Understanding your'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.dark_heading || 'Keratoconus'}
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        'When you arrive for a private consultation you will meet our friendly technician team who will guide you through some eye assessments to measure the thickness of your cornea and check the general health of your eyes.',
                        'Our eye assessments take around 1 hour which will inform your specialist of any cornea changes you have experienced and at what progression this may change in the future.',
                        'Our cornea specialist will carry out a chorenal typography which measures the curve of your cornea to work out how much astigmatism (impaired eyesight) you have.',
                        `They will also measure the thickness of your cornea and If you have already been using keratoconus glasses or hard contact lenses to help correct your sight, it is most likely that you will be suitable for our cross-linking treatment to strengthen the corneal tissue.`
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/corneal-typography.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.imagelarge || '/images/section-images/corneal-typography-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText=""
            />

            <SideImageSection
                h2Heading={data?.section_5?.sub_heading || 'treatments for keratoconus'}
                h3LightHeading={
                    <span className="block normal-case md:max-w-[44.5rem]">
                        {data?.section_5?.heading?.light_heading || ' Kerataconus treatment and'}
                        <strong className="normal-case">
                            {data?.section_5?.heading?.dark_heading || `cross-linking surgery`}
                        </strong>
                    </span>
                }
                h3BoldHeading=""
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        'The initial treatment for Keratoconus is glasses. However, if the condition worsens, your opticians may suggest hard contact lenses to help correct your sight.',
                        'These lenses tend to be thicker and heavier than the soft kind and can also cause your vision to be distorted when you are looking through the edge of the lens.',
                        'Despite this, they provide a more even shape to your cornea, which helps improve your ability to focus.',
                        'If you are prescribed lenses, you may find that you have to change your glasses frequently. This is because the condition causes your cornea to be thinner and more flexible.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/treatments-for-keratoconus.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.imagelarge || '/images/section-images/treatments-for-keratoconus-large.png',
                    width: 609,
                    height: 585
                }}
                altText=""
            />

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case text-white">
                            {data?.minimally_invasive?.heading ||
                                'What is minimally invasive corneal cross-linking surgery?'}
                        </strong>
                    </div>
                }
                altText=""
                description={
                    (data?.minimally_invasive?.descriptions?.length && data?.minimally_invasive?.descriptions) || [
                        'Our specialists may consider corneal cross-linking as the best treatment to help improve your Keratoconus condition. Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your keratoconus from worsening.',
                        'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
                        'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.'
                    ]
                }
                image={data?.minimally_invasive?.image || CornealImage}
                desktopImage={data?.minimally_invasive?.imagelarge || CornealImageLarge}
                reverseColumn
                containerClass="pb-16 md:py-24"
            />

            <SideImageSection
                h2Heading={data?.crosslinking?.sub_heading || 'cross-linking'}
                containerClassName="md:!grid-cols-1 md:!gap-24"
                h3LightHeading={
                    <span className="block normal-case md:max-w-[44.6rem]">
                        {data?.crosslinking?.heading?.light_heading || 'Why you should consider'}
                        <strong className="normal-case"></strong>
                    </span>
                }
                h3BoldHeading={data?.crosslinking?.heading?.dark_heading || 'cross-linking at My-iClinic'}
                customColumn={
                    <StackColumn2
                        list={crossListdata || keratoconusList}
                        className="grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] md:!ml-14 xl:grid-cols-3"
                    />
                }
            />

            <CtaSection2
                title={data?.section_6?.title || `Cornea transplant at My-iClinic`}
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        'A cornea transplant (often known as Keratoplasty or a corneal graft) is a surgery we offer to protect the eyes from severe cases of progressive Keratoconus.',
                        'If your case of keratoconus worsens, it is likely that you will become intolerant to visual aids such as: glasses and/or contact lenses.',
                        'Our cornea specialist will be able to assess whether a corneal transplant will be a suitable treatment and will remove the damaged area of your cornea, replacing this with donor tissue.',
                        'A corneal transplant can significantly reduce the risk of vision loss and improve the health of your eyes for improving vision.'
                    ]
                }
                image={{
                    url: data?.section_6?.image || '/images/section-images/cta-keratoconus.png',
                    width: 640,
                    height: 514
                }}
            />

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata || normalSlideListKeratoconus} />
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
                    ...data?.acf,
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    crosslinking: {
                        ...data?.acf?.crosslinking,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.crosslinking?.descriptions)
                    },
                    minimally_invasive: {
                        ...data?.acf?.minimally_invasive,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.minimally_invasive?.descriptions)
                    },
                    crossList: Array.isArray(data?.acf?.crossList)
                        ? data?.acf.crossList.map((sliderData) => {
                              return {
                                  ...sliderData,
                                  descriptions: convertArrayOfObjectsToStrings(sliderData?.descriptions)
                              };
                          })
                        : [],
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions),
                        image: {
                            ...(data?.acf?.section_6?.image && formatImage(data.acf?.section_6?.image))
                        }
                    },
                    reviewSlider: Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData
                              };
                          })
                        : []
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
