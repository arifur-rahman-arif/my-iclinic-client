/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-myopia-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-myopia-pricing-medium.png';
import MastheadImageSmall from '@/masthead/masthead-myopia-pricing-small.png';
import { Cta3, FullWidthImageSection2, Masthead, PriceSection, SideImageSection } from '@/page-sections/index';
import { myopiaPriceList } from '@/page-sections/PriceCard/priceList';
import { PricemyopiaContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';

import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import React from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PricemyopiaContentInterface, PageDataInterface<PricemyopiaContentInterface> {}

interface PriceProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * Url: /myopia/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson, data }: PriceProps): JSX.Element {
    const heading = data?.masthead_heading || 'Myopia control management & treatment cost London';
    const subheading = data?.masthead_subheading || 'Save you an average of £500';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);
    const priceSection: any = data?.myopia_price ?
        data?.myopia_price.map((service) => {
            return {
                ...service,
                price: service?.price,
                priceText: service?.priceText,
                priceDescription: HTMLReactParser(service?.priceDescription)
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
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                priceText={data?.masthead_price || '£400 All-inclusive'}
            />
            {/* sECTION 1 */}
            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Myopia consultation'}
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading || 'Is your child suffering from'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'Myopia (short-sightedness)?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/myopia-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/myopia-consultation-pricing-large.png',
                    width: 616,
                    height: 549
                }}
                descriptions={
                    (data?.section_1?.descriptions?.length &&
                         stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        "We can provide Atropine treatment and management check ups to monitor your child's eye health with our private Myopia specialist in London."
                    ]
                }
                altText=""
                positionReversed
                textColumnExtras={
                    <div className="md:mt-12">
                        <Cta3 />
                    </div>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <PriceSection priceList={priceSection || myopiaPriceList} />
            {/* SECTION 2 */}
            <SideImageSection
                containerClassName="md:!grid-cols-[1fr_auto]"
                h2Heading={data?.section_2?.subheading || 'refunds and cancellation'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'Our refunds and'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'cancellation policy'}
                descriptions={
                    (data?.section_2?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_2?.descriptions)) || [
                        'A new Myopia consultation with our specialists is £350 (non-refundable). However, we understand there can be circumstances where you may not be able to attend after booking.',
                        <>
                            Therefore, If you would like to change your appointment after booking, you will need to
                            inform the clinic
                            <strong className="text-brand">72 hours before your appointment time</strong> to ensure you
                            do not lose your appointment fee.

                        </>,
                        'Any cancellations that are not communicated before after our 72 hour period policy is subject to be held by the clinic and any new appointment will need to be booked again.'
                    ]
                }
                positionReversed
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/myopia-refunds-and-cancellation.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image ||
                        '/images/section-images/myopia-refunds-and-cancellation-large.png',
                    width: 756,
                    height: 550
                }}
            />
            {/* SECTION 3 */}
            <FullWidthImageSection2
                title={data?.section_3?.title || 'A new myopia consultation'}
                description={
                    data?.section_3?.description ||
                    'Our London Myopia specialists save you an average of £500 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                image={data?.section_3?.image || '/images/section-images/new-myopia-consultation-small.png'}
                largeImage={data?.section_3?.large_image || '/images/section-images/new-myopia-consultation.png'}
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'myopia-price' });

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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    myopia_price: Array.isArray(data?.acf?.myopia_price)
                    ? data?.acf.myopia_price.map((priceData) => {
                          return {
                              ...priceData,
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
