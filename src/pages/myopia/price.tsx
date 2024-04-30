/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import CostDetails from '@/components/page-sections/CataractPriceSections/CostDetails';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-myopia-pricing-large.webp';
import MastheadImageMedium from '@/masthead/masthead-myopia-pricing-medium.webp';
import MastheadImageSmall from '@/masthead/masthead-myopia-pricing-small.webp';
import {
    BookConsultation,
    Cta3,
    CtaSection2,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { myopiaPriceList } from '@/page-sections/PriceCard/priceList';
import { PricemyopiaContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';

import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
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
    return (
        <Page title="Myopia control management & treatment cost London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero {...data?.masthead} headingClassName="md:max-w-[80rem]" smallImageClass="row-start-1 mt-0" />

            <CostDetails items={data?.costDetails} itemClass="sm:px-16 md:px-16 grid-cols-1 sm:grid-cols-[auto_1fr]" />

            {/* sECTION 1 */}
            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'Is your child suffering from myopia (short-sightedness)?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/myopia-consultation.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/myopia-consultation-pricing-large.webp',
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
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation>
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>
                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79]"
                            iconPosition="left"
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                        stroke="#003E79"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/button:stroke-[#003E79]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            {/* <PriceSection priceList={priceSection || myopiaPriceList} /> */}

            <SideImageSection
                containerClassName="md:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.section_2?.heading || 'Our refunds and cancellation policy'}
                h2Class="max-w-[53rem]"
                descriptions={data?.section_2?.descriptions}
                positionReversed
                sectionImage={{
                    url: data?.section_2?.image.src || '/images/section-images/myopia-refunds-and-cancellation.webp',
                    width: data?.section_2?.image?.width || 370,
                    height: data?.section_2?.image?.height || 352
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image?.src ||
                        '/images/section-images/myopia-refunds-and-cancellation-large.webp',
                    width: data?.section_2?.large_image?.width || 756,
                    height: data?.section_2?.large_image?.height || 550
                }}
            />

            <CtaSection2 {...data?.ctaSection} />
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
                    masthead: {
                        ...data?.acf?.masthead,
                        subTitle: stripInitialTags(data?.acf?.masthead?.subTitle),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    costDetails: [...data?.acf?.costDetails].map((item) => {
                        return {
                            ...item,
                            description: stripInitialTags(item.description)
                        };
                    }),
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section_2?.image && formatImage(data.acf?.section_2?.image))
                        },
                        large_image: {
                            ...(data?.acf?.section_2?.large_image && formatImage(data.acf?.section_2?.large_image))
                        }
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    ctaSection: {
                        ...data?.acf.ctaSection,
                        image: {
                            ...(data?.acf?.ctaSection?.image && formatImage(data.acf?.ctaSection?.image))
                        }
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
