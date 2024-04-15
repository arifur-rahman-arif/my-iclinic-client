import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import H2Variant1 from '@/components/Headings/H2Variant1';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageMedium from '@/masthead/masthead-dry-eyes-medium.png';
import { dryEyeFaqList } from '@/page-sections/Faq/faqList';
import {
    BulletList,
    CtaSection2,
    FullWidthImageSection,
    Masthead,
    SideImageSection,
    StackColumn2
} from '@/page-sections/index';
import { lazyEyesList } from '@/page-sections/SectionParts/stack-column/list';
import { DryEyesContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
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

interface DataInterface extends DryEyesContentInterface, PageDataInterface<DryEyesContentInterface> {}

interface DryEyesProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DryEyesTreatmentLondon({ seo, yoastJson, data }: DryEyesProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Dry Eyes';
    const subheading = data?.masthead_subheading || 'Monitor your dry eye symptoms with our private ophthalmologist';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const section1Descriptions = data?.section_1?.descriptions?.length
        ? data?.section_1?.descriptions
        : [
              'Our specialists understand that dry syndrome can cause everyday discomfort. If you are concerned about dry eyes, we can provide you with an all-inclusive private consultation to investigate and offer a treatment solution.',
              'Once we’ve identified the underlying cause of your dry eyes, our ophthalmologist will find you the best suitable treatment.'
          ];

    return (
        <Page
            title="Dry Eye Treatment Specialists In London"
            description="Our clinic provides an all-inclusive private consultation for investigating and treating symptoms of dry eyes. Get in touch with us to learn more!."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={<>{data?.masthead_price}</>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <FullWidthImageSection
                h3Title={data?.section_1?.subheading || 'Dry eye syndrome symptoms and vision testing'}
                description={[
                    <H2Variant1 className="normal-case xl:whitespace-nowrap">
                        {data?.section_1?.heading || 'Private consultation for dry eyes'}
                    </H2Variant1>,
                    ...section1Descriptions
                ]}
                image={data?.section_1?.image || '/images/section-images/dry-eye-private-consultation-large.jpg'}
                desktopImage={
                    data?.section_1?.large_image || '/images/section-images/dry-eye-private-consultation-large.jpg'
                }
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'Dry eye consultation'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'What is included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'private consultation?'}
                descriptions={
                    (data?.section_2?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_2?.descriptions)) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/dry-eye-consultation-large.jpg',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/dry-eye-consultation-large.jpg',
                    width: 631,
                    height: 582
                }}
                positionReversed={true}
                altText=""
                textColumnExtras={
                    <div className="ml-12 grid gap-6">
                        <BulletList
                            className="!ml-0"
                            list={
                                (data?.section_2?.list?.length && stringArrayToElementArray(data?.section_2?.list)) || [
                                    'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                    'A medical diagnosis of your eye condition with treatment planning.',
                                    'A referral for surgical treatment and/or a signed prescription (if required).',
                                    'A dedicated eye care team to support you throughout your eye care journey.'
                                ]
                            }
                            bulletPoint={
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                    </div>
                }
            />

            {/*  Section 3  */}
            <SideImageSection
                h2Heading={data?.section_3?.subheading || 'eye syndrome'}
                h3LightHeading={
                    <>
                        {data?.section_3?.heading?.light_heading || 'Managing your'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'dry eye syndrome'}
                descriptions={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3?.descriptions)) || [
                        <strong>
                            Our consultants will help you manage your dry eye syndrome for a clearer, brighter quality
                            of life.
                        </strong>
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/macular-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image || '/images/section-images/macular-treatment-large.png',
                    width: 658,
                    height: 459
                }}
                customColumn={<StackColumn2 list={(data?.section_3?.list as any) || lazyEyesList} />}
            />

            {/* Section_4   Friendly vision correction  */}
            <CtaSection2
                title={data?.section_4?.heading || 'Friendly vision correction treatment for dry eyes'}
                descriptions={
                    (data?.section_4?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_4?.descriptions)) || [
                        'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
                        'Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we can offer you a <a href="/suitability-check">FREE suitability check</a> for our implantable contact lenses.'
                    ]
                }
            />

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || dryEyeFaqList}
                    titleLight="Dry eye"
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
        const data: WpPageResponseInterface<DryEyesContentInterface> = await getPageData({
            slug: 'dry-eyes-treatment-london'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    //                    	Dry eye syndrome symptoms
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    },
                    // Dry eye consultation
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf?.section_2?.list)
                    },
                    //  Managing your EYE SYNDROME TEST
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions),
                        list: Array.isArray(data?.acf?.section_3?.list)
                            ? data?.acf.section_3?.list.map((item) => {
                                  return {
                                      ...item,
                                      description: convertArrayOfObjectsToStrings(item.descriptions)
                                  };
                              })
                            : []
                    },
                    // section 4 Friendly vision correction
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
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
