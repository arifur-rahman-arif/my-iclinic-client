import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletPoint,
    CompanyLogos2,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { cataractPriceList } from '@/components/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-cataract-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-cataract-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-cataract-pricing.png';
import InclusiveCostImage from '@/section-images/cataract-inclusive-cost-image.png';
import { PriceCataractContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PriceCataractContentInterface, PageDataInterface<PriceCataractContentInterface> {}

interface CataractPriceProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /cataract/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CataractPrice({ seo, yoastJson, data }: CataractPriceProps): JSX.Element {
    const heading = data?.masthead_heading || 'Cataract surgery cost in London';
    const subheading = data?.masthead_subheading || 'Save you an average of £1,000 for your cataract treatment';

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
                  priceDescription: service?.priceDescription
              };
          })
        : null;

    return (
        <Page
            title="Cataract surgery cost in London"
            description="Save you an average of £1,000 for your cataract treatment"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Cataract consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image ||
                        '/images/section-images/private-consultation-cataract-large.png',
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
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
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
                    url: data?.section_2?.image || '/images/section-images/cataract-finance.png',
                    width: 438,
                    height: 545
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/cataract-finance-large.png',
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

            <PriceSection priceList={priceSection || cataractPriceList} />

            <FullWidthImageSection2
                title={data?.section_3?.title || 'Cataract laser surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    `Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.`
                }
            />

            <CompanyLogos2 />

            <CtaSection title={data?.speaktoteam?.title} subtitle={data?.speaktoteam?.subtitle} />

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.section_4?.title ? (
                            HTMLReactParser(data?.section_4?.title)
                        ) : (
                            <>
                                <strong className="normal-case">Permanently correct your vision</strong> with our
                                private Cataract treatment.
                            </>
                        )}
                    </>
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="pb-16 md:!py-0"
                overlayAnimation={true}
                textColumnOverlay={true}
                sectionClass="bg-brandLight relative !mt-0"
                largeImageClassName="!rounded-none"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'cataract-price' });

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
