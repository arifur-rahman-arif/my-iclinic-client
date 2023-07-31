import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { normalSlideListDoubleVision } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-macular-degeneration-large.png';
import MastheadImageMedium from '@/masthead/masthead-macular-degeneration-medium.png';
import MastheadImageSmall from '@/masthead/masthead-macular-degeneration-small.png';
import { maculerDegenerationFaqList } from '@/page-sections/Faq/faqList';
import {
    BulletList,
    CtaSection,
    FullWidthImageSection,
    Masthead,
    NormalSection5,
    SideImageSection
} from '@/page-sections/index';
import { MacularContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';

import dynamic from 'next/dynamic';
import Image from 'next/image';
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


interface DataInterface extends MacularContentInterface, PageDataInterface<MacularContentInterface> {}


interface MacularDegenerationProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 *  Url: /macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function MacularDegeneration({ seo, yoastJson, data }: MacularDegenerationProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading ||'Macular Degeneration Treatment London';
    const subheading = data?.masthead_subheading ||'Monitor your macular degeneration symptoms with our private clinic';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    // reviewSliderdata
    const reviewSliderdata: any = Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0 ?
        data.reviewSlider.map((service) => {
            return {
                ...service,
                description: service?.description,
                name: service?.name,
                title: service?.title
            };
        }) :
        null;

    return (
        <Page
            title="Macular Degeneration Treatment in London"
            description="Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={ data?.masthead_price || 'From £200'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">{ data?.section_3?.heading || 'Macular degeneration (AMD)'}</strong>
                    </div>
                }
                altText=""
                description={data?.section_3?.descriptions?.length &&
                   stringArrayToElementArray(data?.section_3?.descriptions) || [
                    'Macular degeneration (AMD) is a common age-related eye disease which affects the clarity of your central vision. The incidence of macular degeneration increases with age, and about three people per 1000 over the age of 50 will develop macular degeneration.',
                    'Macular degeneration is categorised as an “age-related” eye condition meaning that it occurs mainly in older people.'
                ]}
                image={ data?.section_3?.image || '/images/section-images/macular-degeneration.png'}
                desktopImage={ data?.section_3?.imagelarge || '/images/section-images/macular-degeneration-large.png'}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading={ data?.section_4?.sub_heading || 'diagnosis'}
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading ||'Diagnosis and treatment for'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.dark_heading ||'Macular degeneration'}
                descriptions={ data?.section_4?.descriptions?.length &&
                   stringArrayToElementArray(data?.section_4?.descriptions) || [
                    <strong>Understanding Macular Degeneration</strong>,
                    "The macula is the area of the retina that's responsible for seeing clearly in the centre of your vision.",
                    'If you are experiencing blurriness, distortion or blank spots in your central vision, our ophthalmologists can carry out comprehensive eye assessments to check the condition of your eyes and diagnose the type of macular degeneration you are experiencing.',
                    <strong>There are two types of macular degeneration conditions:</strong>
                ]}
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/macular-degeneration-diagnosis.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.imagelarge ||'/images/section-images/macular-degeneration-diagnosis-large.png',
                    width: 631,
                    height: 582
                }}
                positionReversed={true}
                altText=""
                textColumnExtras={
                    <div className="ml-12 grid gap-6">
                        <span className="font-mulishBold">{data?.section_4?.list_heading ||'Dry age-related macular degeneration:'}</span>
                        <BulletList
                            className="!ml-0"
                            list={data?.section_4?.lists?.length &&
                               stringArrayToElementArray(data?.section_4?.lists) || [
                                <>
                                    Have a transient (or intermittent) diplopia condition
                                    <br />
                                    <span className="font-mulishBold text-[1.4rem] leading-8">
                                        A progression of vision loss over a period of time.
                                    </span>
                                </>,
                                <>
                                    Wet age-related macular degeneration
                                    <br />
                                    <span className="font-mulishBold text-[1.4rem] leading-8">
                                        A sudden and rapid progression of vision loss.
                                    </span>
                                </>
                            ]}
                            bulletPoint={
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                    </div>
                }
            />

            <SideImageSection
                h2Heading={data?.section_5?.sub_heading ||'treatment'}
                h3LightHeading={
                    <>
                       {data?.section_5?.heading?.light_heading || ' Macular degeneration'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_5?.heading?.dark_heading ||'treatment'}
                descriptions={ data?.section_5?.descriptions?.length &&
                    stringArrayToElementArray(data?.section_5?.descriptions) || [
                    'Although there is no definite treatment to reverse any current symptoms of macular degeneration, our ophthalmologist can help prevent or slow the progression of the disease.',
                    'After diagnosing your condition, your specialist will begin the treatment process.',
                    'If you are diagnosed with wet macular degeneration, your specialist will repeat Anti-VEGF and/or other injections to preserve and stabilise your vision. This treatment will require regular checkups and monitoring of your vision.',
                    'Dry macular degeneration requires frequent monitoring and checkups of the eyes. Dry macular degeneration is a less damaging condition for your eyes and does not require injections for treatment.'
                ]}
                sectionImage={{
                    url: data?.section_5?.image ||'/images/section-images/macular-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.imagelarge ||'/images/section-images/macular-treatment-large.png',
                    width: 658,
                    height: 459
                }}
                altText=""
            />

            <NormalSection5
                heading={data?.reduce?.heading ||'Reduce your Macular Degeneration symptoms today'}
                description={data?.reduce?.description ||'Book a private consultation today with our specialist for all-inclusive eye assessments and treatment planning'}
            />

            <CtaSection title={data?.section_6?.title}
             subtitle={ data?.section_6?.subheading || 'Book a private consultation'}
             />

            <LazyComponent>
                <NormalSlideSection sliderList={ reviewSliderdata || normalSlideListDoubleVision} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || maculerDegenerationFaqList}
                    titleLight="Macular Degeneration"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'macular-degeneration' });

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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists)
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    reduce: {
                        ...data?.acf?.reduce,
                    },
                    section_6: {
                        ...data?.acf?.section_6
                    },
                    reviewSlider:Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData,
                              };
                          })
                        : [], 
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
