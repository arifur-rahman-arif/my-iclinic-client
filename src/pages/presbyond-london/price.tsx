/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-presbyond-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-presbyond-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-presbyond-pricing.png';
import {
    BulletPoint,
    CtaSection,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { presbyondPriceList } from '@/page-sections/PriceCard/priceList';
import ShortSightedImageLarge from '@/section-images/short-sighted-vision-large.png';
import { PricepresbeyondlondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import React from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface
    extends PricepresbeyondlondonContentInterface,
        PageDataInterface<PricepresbeyondlondonContentInterface> {}

interface PresbyondPricingProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * * Url: /presbyond-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PresbyondPricing({ seo, yoastJson, data }: PresbyondPricingProps): JSX.Element {
    const heading = data?.masthead_heading || 'Presbyond laser eye surgery cost in London';
    const subheading = data?.masthead_subheading || 'Save an average of £1,000';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const priceSection: any = data?.smile_price ?
        data?.smile_price.map((service) => {
            return {
                ...service,
                price: service?.price,
                priceText: service?.priceText,
                priceDescription: service?.priceDescription
            };
        }) :
        null;


    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                priceText={data?.masthead_price}
            />

            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Presbyond consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-desktop.png',
                    width: 616,
                    height: 549
                }}
                altText={'Woman with presbyond blended vision, without needing reading glasses.'}
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_1?.length && HTMLReactParser(data?.section_1?.bullet_1)) ||
                                    '<a href="/suitability-check">A FREE suitability</a> laser check with our laser specialist (a comprehensive assessment of your suitability and how presbyond will suit your lifestyle).'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconPersonInFrame} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_2?.length && HTMLReactParser(data?.section_1?.bullet_2)) ||
                                    'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_3?.length && HTMLReactParser(data?.section_1?.bullet_3)) ||
                                    'Your Presbyond treatment performed in our private laser suite with your dedicated specialist and our friendly team.'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyePlus} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_4?.length && HTMLReactParser(data?.section_1?.bullet_4)) ||
                                    'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'}
                            </p>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'Presbyond finance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Want to pay for your'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'treatment each month?'}
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having Presbyond to correct your vision is a great investment in your
                     eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/presbyond-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/presbyond-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={
                            (data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                'You are eligible for our 12 months interest-free finance',
                                'Calculate your monthly spend for your laser treatment'
                            ]
                        }
                    />
                }
                midExtras={<h4 className="normal-case">{ data?.section_2?.subheading || 'Finance available for Presbyond'}</h4>}
            />

            <PriceSection priceList={priceSection || presbyondPriceList} />

            <FullWidthImageSection2
                title={data?.section_3?.title || 'PRESBYOND surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
            />

            <CtaSection subtitle={data?.call_section?.heading || 'OUR OPTIONS AVAILABLE'}
            title={data?.call_section?.sub_heading || 'Speak To Our Friendly Team' } />

            <FullWidthImageSection
                sectionClass="lg:!mt-0 bg-brandLight relative"
                h3Title={
                    <>
                        {(data?.section_4?.title?.length && HTMLReactParser(data?.section_4?.title)) ||
                            '<strong className="normal-case">Permanently correct your short-sighted vision</strong> with our all-inclusive cost.'}
                    </>
                }
                boldHeading={true}
                altText="Woman with presbyond blended vision, without needing reading glasses."
                image={data?.section_4?.image || ShortSightedImageLarge}
                desktopImage={data?.section_4?.large_image || ShortSightedImageLarge}
                containerClass="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                smallImageClassName="!w-auto"
                largeImageClassName="!rounded-none"
                overlayAnimation
            />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'presbyond-london-price' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    smile_price: Array.isArray(data?.acf?.smile_price)
                    ? data?.acf.smile_price.map((priceData) => {
                          return {
                              ...priceData,
                          };
                      })
                    : [],
                    call_section: {
                        ...data?.acf?.call_section
                    },
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
