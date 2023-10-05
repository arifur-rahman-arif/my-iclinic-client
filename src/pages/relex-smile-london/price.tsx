/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-relex-smile-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-relex-smile-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-relex-smile-pricing.png';
import { CtaSection } from '@/page-sections/CtaSection';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import {
    BulletPoint,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import HTMLReactParser from 'html-react-parser';

import React from 'react';
import { relexSmilePriceList } from '@/page-sections/PriceCard/priceList';
import InclusiveCostImage from '@/section-images/inclusive-cost-image.png';
import { RelexSmilePriceContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends RelexSmilePriceContentInterface, PageDataInterface<RelexSmilePriceContentInterface> {}

interface PricePageProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * * Url: /relex-smile-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson, data }: PricePageProps): JSX.Element {
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'ReLEX SMILE laser eye surgery cost London';
    const subheading = data?.masthead_subheading || 'Save an average of £1,000';
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const priceSection: any = data?.relex_smile_price
        ? data?.relex_smile_price.map((service) => {
              return {
                  ...service,
                  price: service?.price,
                  priceText: service?.priceText,
                  priceDescription: service?.priceDescription
              };
          })
        : null;

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
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
                h2Heading={data?.section_1?.sub_heading || 'Relex smile consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-relex-smile.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image ||
                        '/images/section-images/private-consultation-relex-smile-desktop.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_1?.length && HTMLReactParser(data?.section_1?.bullet_1)) ||
                                    HTMLReactParser(
                                        '<a href="/suitability-check">A FREE suitability</a> laser check with our laser specialist (a comprehensive assessment of your suitability and how ReLEx SMILE will suit your lifestyle).'
                                    )}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconPersonInFrame} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_2?.length && HTMLReactParser(data?.section_1?.bullet_2)) ||
                                    'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).'}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_3?.length && HTMLReactParser(data?.section_1?.bullet_3)) ||
                                    'Your ReLEx SMILE treatment performed in our private laser suite with your dedicated specialist and our friendly team.'}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyePlus} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_4?.length && HTMLReactParser(data?.section_1?.bullet_4)) ||
                                    'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'}
                            </div>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading={data?.section_2?.title || 'Relex smile finance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Want to pay for your'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'treatment each month?'}
                midExtras={
                    <h4 className="normal-case">
                        {data?.section_2?.sub_heading || 'Finance available for ReLEx SMILE'}
                    </h4>
                }
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having ReLEx SMILE to correct your vision is a great investment
					in your eye health and lifestyle. We offer 12 months interest- free finance to help make
					 that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/relex-smile-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/relex-smile-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <div className="md:max-w-[43rem]">
                        <span className="font-latoBold text-[2.4rem] uppercase leading-[3.2rem]">
                            {(data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                'You are eligible for our 12 months interest-free finance'
                            ]}
                        </span>
                        <div className="mt-12 grid grid-cols-[auto_1fr] gap-6">
                            {/* <Image src={IconCalculator} alt="" className="self-center" /> */}
                            <BulletPoint />
                            <span className="font-latoBold text-[2rem] leading-[2.4rem]">
                                {data?.section_2?.bullet_points_heading ||
                                    'Calculate your monthly spend for your laser treatment'}
                            </span>
                            <div className="col-start-2">
                                {HTMLReactParser(data?.section_2?.bullet_1) ||
                                    'If you’re eligible for our interest-free finance, you can calculate your monthly spend so you’re always in the know with regard to payments for your laser eye treatment.'}
                            </div>
                            <div className="col-start-2">
                                {HTMLReactParser(data?.section_2?.bullet_2) ||
                                    HTMLReactParser(
                                        'If you have any queries regarding pricing, you can get in touch with our specialists for a consultation today on  <a href="tel:0208 445 8877">  <span className="whitespace-nowrap font-mulishBold text-blue">0208 445 8877.</span> </a>'
                                    )}
                            </div>
                        </div>
                    </div>
                }
            />

            <PriceSection priceList={priceSection || relexSmilePriceList} />

            <FullWidthImageSection2
                title={data?.section_3?.title || 'ReLEx SMILE surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
            />

            <CtaSection
                subtitle={data?.call_section?.heading || 'OUR OPTIONS AVAILABLE'}
                title={data?.call_section?.sub_heading || 'Speak To Our Friendly Team'}
            />

            <FullWidthImageSection
                h3Title={
                    <>
                        {(data?.section_4?.title?.length && HTMLReactParser(data?.section_4?.title)) ||
                            HTMLReactParser(
                                ' <strong className="normal-case">Permanently correct your vision</strong> with our all-inclusive cost.'
                            )}
                    </>
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                overlayAnimation
                textColumnOverlay
                sectionClass="lg:!mt-0 bg-brandLight relative"
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
        const data: WpPageResponseInterface<RelexSmilePriceContentInterface> = await getPageData({
            slug: 'relex-smile-london-price'
        });

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
                    relex_smile_price: Array.isArray(data?.acf?.relex_smile_price)
                        ? data?.acf.relex_smile_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    call_section: {
                        ...data?.acf?.call_section
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
