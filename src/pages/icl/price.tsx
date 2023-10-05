import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import LinkText from '@/components/Link/LinkText';
import Page from '@/components/Page';
import {
    BulletList,
    // BulletPoint,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { icPriceList } from '@/components/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-icl-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-icl-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-icl-pricing.png';
import InclusiveCostImage from '@/section-images/icl-inclusive-cost-image.png';
import { PriceIclContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PriceIclContentInterface, PageDataInterface<PriceIclContentInterface> {}

interface IclPricingProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 *
 * Url: /icl/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function IclPricing({ seo, yoastJson, data }: IclPricingProps): JSX.Element {
    const heading = data?.masthead_heading || 'Implantable Contact Lens cost London';
    const subheading = data?.masthead_subheading || 'Save an average of £1,000';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const priceSection: any = data?.lsk_price
        ? data?.lsk_price.map((service) => {
              return {
                  ...service,
                  price: service?.price,
                  priceText: service?.priceText,
                  priceDescription: HTMLReactParser(service?.priceDescription)
              };
          })
        : null;

    return (
        <Page title="Implantable Contact Lens cost London" description="" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                h1Title={<h1 className="xs:max-w-[40rem]">{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || '£2,750 per eye'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'ICL consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-icl.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-icl-large.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={
                            (data?.section_1?.lists?.length && stringArrayToElementArray(data?.section_1?.lists)) || [
                                <>
                                    <LinkText href="/suitability-check">
                                        <strong>A FREE suitability</strong>
                                    </LinkText>{' '}
                                    check with our ICL specialist (a comprehensive assessment of your suitability and
                                    how implantable contact lenses will suit your lifestyle).
                                </>,
                                'A comprehensive consultation with your dedicated ICL specialist (inclusive of all eye assessment and eye scans)',
                                'Your Implantable Contact Lens treatment performed in our private suite with your dedicated specialist and our friendly team.',
                                'Up to four FREE aftercare appointments with your dedicated ICL specialist (inclusive of eye assessments and eye scans).'
                            ]
                        }
                    />
                }
                // textColumnExtras={
                //     <ul className="grid w-full gap-6 md:max-w-[52rem]">
                //         {data?.section_1?.lists.map((item)=>
                //           <li className="flex items-start justify-start gap-6">
                //           <BulletPoint />
                //           <p className="">
                //               {item}
                //           </p>
                //       </li>

                //         )}
                //         <li className="flex items-start justify-start gap-6">
                //             <BulletPoint />
                //             <p className="">
                //                 <LinkText href="/suitability-check">
                //                     <strong>A FREE suitability</strong>
                //                 </LinkText>{' '}
                //                 check with our ICL specialist (a comprehensive assessment of your suitability and how
                //                 implantable contact lenses will suit your lifestyle).
                //             </p>
                //         </li>
                //         <li className="flex items-start justify-start gap-6">
                //             <BulletPoint />
                //             <p className="">
                //                 A comprehensive consultation with your dedicated ICL specialist (inclusive of all eye
                //                 assessment and eye scans).
                //             </p>
                //         </li>
                //         <li className="flex items-start justify-start gap-6">
                //             <BulletPoint />
                //             <p className="">
                //                 Your Implantable Contact Lens treatment performed in our private suite with your
                //                 dedicated specialist and our friendly team.
                //             </p>
                //         </li>
                //         <li className="flex items-start justify-start gap-6">
                //             <BulletPoint />
                //             <p className="">
                //                 Up to four FREE aftercare appointments with your dedicated ICL specialist (inclusive of
                //                 eye assessments and eye scans).
                //             </p>
                //         </li>
                //     </ul>
                // }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading={data?.section_2?.title || 'ICL finance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Want to pay for your'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'treatment each month?'}
                midExtras={
                    <h4 className="text-[2rem] normal-case leading-[2.4rem] sm:max-w-[49.1rem] md:text-[2.8rem] md:leading-[3.2rem]">
                        {data?.section_2?.subheading || 'Finance available for Implantable Contact Lenses (ICL)'}
                    </h4>
                }
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having ICL to correct your vision is a great investment in your eye health and lifestyle. We offer 10 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/icl-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/icl-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={
                            (data?.section_2?.lists?.length && stringArrayToElementArray(data?.section_2?.lists)) || [
                                'You are eligible for our 24 months interest-free finance',
                                'Calculate your monthly spend for your ICL treatment'
                            ]
                        }
                    />
                }
            />

            <PriceSection priceList={priceSection ? priceSection : icPriceList} />

            <FullWidthImageSection2
                title={data?.section_3?.title || 'ICL eye surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London ICL specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                image={data?.section_3?.image}
                largeImage={data?.section_3?.large_image}
            />

            <CtaSection title={data?.speaktoteam?.title} subtitle={data?.speaktoteam?.subtitle} />

            <FullWidthImageSection
                h3Title={
                    HTMLReactParser(data?.section_4.title) || (
                        <>
                            <strong className="normal-case">Permanently correct your vision</strong> with our
                            all-inclusive cost.
                        </>
                    )
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0 !pt-0"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'icl-price' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_1?.lists)
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
                    lsk_price: Array.isArray(data?.acf?.lsk_price)
                        ? data?.acf.lsk_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    speaktoteam: {
                        ...data?.acf?.speaktoteam
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
