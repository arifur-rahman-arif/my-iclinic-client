/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData, getTreatments } from '@/lib';
import {
    BulletPoint,
    CtaSection,
    FullWidthImageSection,
    FullWidthImageSection2,
    SideImageSection
} from '@/page-sections/index';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import ShortSightedImageLarge from '@/section-images/short-sighted-vision-large.webp';
import { PricepresbeyondlondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';

import React from 'react';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import { getElementTopPosition, stripInitialTags } from '@/utils/miscellaneous';
import CostDetails from '@/components/page-sections/RelexSmilePriceSections/CostDetails';
import { Button2 } from '@/components/Buttons';
import { TreatmentInterface } from '@/components/page-sections/FinanceCalculator/Context';

import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';
import FinanceCalculatorSection from '@/page-sections/icl-components/FinanceCalculatorSection';

interface DataInterface
    extends PricepresbeyondlondonContentInterface,
        PageDataInterface<PricepresbeyondlondonContentInterface> {}

interface PresbyondPricingProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
    filteredTreatments: TreatmentInterface[];
}

/**
 * * Url: /presbyond-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PresbyondPricing({
    seo,
    yoastJson,
    data,
    filteredTreatments
}: PresbyondPricingProps): JSX.Element {
    const priceSection: any = data?.smile_price
        ? data?.smile_price.map((service) => {
              return {
                  ...service,
                  price: service?.price,
                  priceText: service?.priceText,
                  priceDescription: service?.priceDescription
              };
          })
        : null;

    return (
        <Page title="Presbyond laser eye surgery cost in London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                smallImageClass="row-start-1 mt-0"
                contentContainerClassName="pb-12 md:pb-0"
            />

            <CostDetails items={data?.costDetails} />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'What’s included in my private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-desktop.webp',
                    width: 616,
                    height: 549
                }}
                altText={'Woman with presbyond blended vision, without needing reading glasses.'}
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_1?.length && HTMLReactParser(data?.section_1?.bullet_1)) ||
                                    '<a href="/suitability-check">A FREE suitability</a> laser check with our laser specialist (a comprehensive assessment of your suitability and how presbyond will suit your lifestyle).'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_2?.length && HTMLReactParser(data?.section_1?.bullet_2)) ||
                                    'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_3?.length && HTMLReactParser(data?.section_1?.bullet_3)) ||
                                    'Your Presbyond treatment performed in our private laser suite with your dedicated specialist and our friendly team.'}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {(data?.section_1?.bullet_4?.length && HTMLReactParser(data?.section_1?.bullet_4)) ||
                                    'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'}
                            </p>
                        </li>
                    </ul>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Want to pay for your treatment each month?'}
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                positionReversed
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having Presbyond to correct your vision is a great investment in your
                     eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/presbyond-finance.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/presbyond-finance-large.webp',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <div className="grid justify-items-start">
                        <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>
                        <div className="grid gap-4">
                            {data?.section_2?.lists?.length
                                ? data?.section_2?.lists.map((item, key) => (
                                      <strong className="text-heading" key={key}>
                                          {item}
                                      </strong>
                                  ))
                                : null}
                        </div>

                        <Button2
                            text="Calculate your cost"
                            className="mt-12"
                            type="button"
                            onClick={() => {
                                window.scrollTo(
                                    0,
                                    getElementTopPosition(
                                        document.querySelector('#finance-calculator') as HTMLElement
                                    ) - 200
                                );
                            }}
                        />
                    </div>
                }
                midExtras={
                    <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#893277]">
                        {data?.section_2?.subheading || 'Finance available for Presbyond'}
                    </span>
                }
            />

            <FullWidthImageSection
                sectionClass="relative bg-transparent"
                titleClass="text-heading [&_*]:text-heading"
                h3Title={
                    <>
                        {(data?.section_4?.title?.length && HTMLReactParser(data?.section_4?.title)) ||
                            '<strong className="normal-case">Permanently correct your short-sighted vision</strong> with our all-inclusive cost.'}
                    </>
                }
                altText="Woman with presbyond blended vision, without needing reading glasses."
                image={data?.section_4?.image || ShortSightedImageLarge}
                desktopImage={data?.section_4?.large_image || ShortSightedImageLarge}
                containerClass="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32 md:!py-0 !pb-0 mx-0 !w-full"
                smallImageClassName="w-full !rounded-none"
                largeImageClassName="rounded-radius2"
            />

            {/* <PriceSection priceList={priceSection || presbyondPriceList} /> */}

            <FullWidthImageSection2
                title={data?.section_3?.title || 'PRESBYOND surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                excludeCta
                textColumnClass="order-2"
            />

            <CtaSection
                subtitle={data?.call_section?.heading || 'OUR OPTIONS AVAILABLE'}
                title={data?.call_section?.sub_heading || 'Speak To Our Friendly Team'}
            />

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={filteredTreatments} headingText={data?.calculatorHeading} />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'presbyond-london-price' });

        const treatments = await getTreatments();
        let filteredTreatments = treatments.filter((treatment) => treatment.name === 'Presbyond');

        /**
         * Updates the `filteredTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} filteredTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        filteredTreatments = filteredTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        return {
            /* eslint-disable */
            props: {
                filteredTreatments,
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
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        heading: stripInitialTags(data?.acf?.section_2?.heading),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    // smile_price: Array.isArray(data?.acf?.smile_price)
                    //     ? data?.acf.smile_price.map((priceData) => {
                    //           return {
                    //               ...priceData
                    //           };
                    //       })
                    //     : [],
                    call_section: {
                        ...data?.acf?.call_section
                    },
                    calculatorHeading: stripInitialTags(data?.acf?.calculatorHeading)
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
