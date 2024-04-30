import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    // BulletPoint,
    CompanyLogos2,
    // FullWidthImageSection,
    // PriceSection,
    SideImageSection
} from '@/components/page-sections';
import CostDetails from '@/components/page-sections/CataractPriceSections/CostDetails';
import VisionCorrection from '@/components/page-sections/CataractPriceSections/VisionCorrection';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { TreatmentInterface } from '@/components/page-sections/FinanceCalculator/Context';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
// import { cataractPriceList } from '@/components/page-sections/PriceCard/priceList';
import { getPageData, getTreatments } from '@/lib';
// import InclusiveCostImage from '@/section-images/cataract-inclusive-cost-image.webp';
import { PriceCataractContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
// import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';

// const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
//     loading: () => <ComponentLoader />
// });

const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PriceCataractContentInterface, PageDataInterface<PriceCataractContentInterface> {}

interface CataractPriceProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
    iclTreatments: TreatmentInterface[];
}

/**
 * Url: /cataract/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CataractPrice({ seo, yoastJson, data, iclTreatments }: CataractPriceProps): JSX.Element {
    // const priceSection: any = data?.lsk_price
    //     ? data?.lsk_price.map((service) => {
    //           return {
    //               ...service,
    //               price: service?.price,
    //               priceText: service?.priceText,
    //               priceDescription: service?.priceDescription
    //           };
    //       })
    //     : null;

    return (
        <Page
            title="Cataract surgery cost in London"
            description="Save you an average of £1,000 for your cataract treatment"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <CataractHero
                title={data?.masthead?.title}
                subTitle={data?.masthead?.subtitle}
                largeImage={data?.masthead?.large_image}
                smallImage={data?.masthead?.small_image}
                priceText={data?.masthead?.price_text}
                smallImageClass="-mt-[20rem]"
            />

            {/* <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            /> */}

            <CostDetails items={data?.cost_details} />

            <SideImageSection
                h3LightHeading={data?.section_3?.title || 'Cataract laser surgery couldn’t be more cost-effective!'}
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/private-consultation-cataract.webp',
                    width: 390,
                    height: 390
                }}
                descriptions={[
                    data?.section_3?.description ||
                        `Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.`
                ]}
                sectionImageDesktop={{
                    url:
                        data?.section_3?.large_image ||
                        '/images/section-images/private-consultation-cataract-large.webp',
                    width: 611,
                    height: 584
                }}
                altText=""
            />

            <CompanyLogos2 />

            <VisionCorrection heading={data?.section_4?.title} image={data?.section_4?.image} />

            <LazyComponent>
                <FinanceCalculatorSection
                    iclTreatments={iclTreatments}
                    headingText={
                        <>
                            <span className="font-latoBold text-[3rem] normal-case leading-[3.6rem] text-[#FF7F00] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                                0% interest-Free
                            </span>{' '}
                            finance option for 10 months
                        </>
                    }
                />
            </LazyComponent>

            {/* <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Cataract consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-cataract.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image ||
                        '/images/section-images/private-consultation-cataract-large.webp',
                    width: 611,
                    height: 584
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {data?.section_1?.bullet_1
                                    ? HTMLReactParser(data?.section_1?.bullet_1)
                                    : `A comprehensive consultation with your dedicated cataract specialist (inclusive of all
                                eye assessment and eye scans)`}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {data?.section_1?.bullet_2
                                    ? HTMLReactParser(data?.section_1?.bullet_2)
                                    : `Your cataract treatment was performed in our private theater with your dedicated
                                specialist and our friendly team.`}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                {data?.section_1?.bullet_3
                                    ? HTMLReactParser(data?.section_1?.bullet_3)
                                    : `FREE aftercare appointments with your dedicated cataract specialist (inclusive of eye
                                assessments and eye scans).`}
                            </p>
                        </li>
                    </ul>
                }
            /> */}

            {/* <div className="w-full md:h-[0.1rem] lg:mt-24"></div> */}

            {/* <LazyComponent>
                <CallbackSection />
            </LazyComponent> */}

            {/* <SideImageSection
                sectionClass="relative before:content-[''] before:absolute before:right-0 before:top-0 before:sm:w-2/4 before:h-full before:md:bg-[#FFEFE5] before:-z-[1]"
                h2Heading={data?.section_2?.title || 'Cataract insurance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Want to pay with'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'your health insurance?'}
                midExtras={
                    <h4 className="normal-case">
                        {data?.section_2?.subheading ||
                            '   We are partnered with health insurance companies to make the cost of your treatment easier!'}
                    </h4>
                }
                altText=""
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/cataract-finance.webp',
                    width: 438,
                    height: 545
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/cataract-finance-large.webp',
                    width: 682,
                    height: 671
                }}
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[43rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p>
                                {data?.section_2?.bullet_1
                                    ? HTMLReactParser(data?.section_2?.bullet_1)
                                    : `It's always best to check with your <strong>healthcare insurance provider</strong> that
                                they will cover your fees and produce a <strong>pre-authorisation code</strong> for you.`}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p>
                                {data?.section_2?.bullet_2
                                    ? HTMLReactParser(data?.section_2?.bullet_2)
                                    : `We will require your <strong>pre-authorization code</strong> before your consultation
                                and cataract surgery.`}
                            </p>
                        </li>
                    </ul>
                }
            />

            <PriceSection priceList={priceSection || cataractPriceList} /> */}

            <CtaSection title={data?.speaktoteam?.title} subtitle={data?.speaktoteam?.subtitle} />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'cataract-price' });


        const treatments = await getTreatments();
        let iclTreatments = treatments.filter((treatment) => treatment.group_name === 'Cataract');

        /**
         * Updates the `iclTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} iclTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        iclTreatments = iclTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));


        return {
            /* eslint-disable */
            props: {
                iclTreatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        large_image: {
                            ...(data?.acf?.masthead?.large_image && formatImage(data.acf?.masthead?.large_image))
                        },
                        small_image: {
                            ...(data?.acf?.masthead?.small_image && formatImage(data.acf?.masthead?.small_image))
                        }
                    },
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
                        ...data?.acf?.section_4,
                        image: {
                            ...(data?.acf?.section_4?.image && formatImage(data.acf?.section_4?.image))
                        }
                    },
                    smile_price: Array.isArray(data?.acf?.smile_price)
                        ? data?.acf.smile_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
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
