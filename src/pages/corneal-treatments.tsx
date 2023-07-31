/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import MastheadImageLarge from '@/masthead/masthead-corneal-large.png';
import MastheadImageMedium from '@/masthead/masthead-corneal-medium.png';
import MastheadImageSmall from '@/masthead/masthead-corneal-small.png';
import { BulletList, CtaSection, FullWidthImageSection, Masthead, SideImageSection } from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListCornealTreatments } from '@/page-sections/LeftRight/leftRightList';
import { CornealtreatmentContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends CornealtreatmentContentInterface, PageDataInterface<CornealtreatmentContentInterface> {}

interface CornealTreatmentsProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home page component for the App
 *
 * * Url: /eye-treatments/corneal-treatments
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CornealTreatments({ seo, yoastJson, data }: CornealTreatmentsProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Cornea specialists in London';
    const subheading = data?.masthead_subheading || 'Corneal eye treatments at My-iClinic';

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
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || ''}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            {/* SECTION 1 */}
            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[51.6rem]">
                        <strong className="normal-case">
                            {data?.section_1?.heading ||
                                'Private consultation for corneal treatments and corneal disease management'}
                        </strong>
                    </div>
                }
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        'When visiting My-iClinic you will begin your eye care journey with comprehensive eye assessments to investigate the condition of your cornea.',
                        'Corneal eye conditions can be prevented with early surgical  intervention and other corneal surgeries we provide in our private clinic.'
                    ]
                }
                image={data?.section_1?.image || '/images/section-images/private-consultation-corneal-diseases.png'}
                desktopImage={
                    data?.section_1?.large_image || '/images/section-images/private-consultation-corneal-diseases.png'
                }
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />
            {/* CORNEA CONSULTATION */}
            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'Cornea consultation'}
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
                    url: data?.section_2?.image || '/images/section-images/cornea-consultation-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/cornea-consultation-large.png',
                    width: 643,
                    height: 461
                }}
                positionReversed
                textColumnExtras={
                    <BulletList
                        list={
                            (data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition  with treatment planning.',
                                'A referral for surgical treatment and/or a signed prescription (if required).',
                                'A dedicated eye care team to support you throughout your eye care journey.'
                            ]
                        }
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

            <CtaSection subtitle={data?.section_3?.subtitle} title={data?.section_3?.title} />

            <LazyComponent>
                <LeftRightSection
                    childrenList={leftRightListCornealTreatments}
                    positionReversed
                    sectionClassName="!gap-24 md:!gap-40"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
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
        const data: WpPageResponseInterface<CornealtreatmentContentInterface> = await getPageData({
            slug: 'corneal-treatments'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    //Private consultation
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // CORNEA CONSULTATION
                    section_2: {
                        ...data?.acf?.section_2,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // TREATMENTS FOR BLEPHARITIS
                    section_3: {
                        ...data?.acf?.section_3
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
