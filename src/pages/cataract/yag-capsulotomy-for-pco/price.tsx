import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletList,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { yagPriceList } from '@/components/page-sections/PriceCard/priceList';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-yag-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-yag-pricing-medium.png';
import MastheadImageSmall from '@/masthead/masthead-yag-pricing-small.png';
import { YagPriceContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends YagPriceContentInterface, PageDataInterface<YagPriceContentInterface> {}

interface IclPricingProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: cataract/yag-capsulotomy-for-pco/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function IclPricing({ seo, yoastJson, data }: IclPricingProps): JSX.Element {
    const heading = data?.masthead_heading ||'YAG laser Capsulotomy surgery cost London';
    const subheading = data?.masthead_subheading ||'data?.masthead_heading ||Save an average of £1,000';


    const priceSection: any = data?.lsk_price ?
        data?.lsk_price.map((service) => {
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
                imageSmall={data?.masthead_image?.image?.url ||MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url ||MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url ||MastheadImageLarge}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                priceText={ data?.masthead_price || '£395 per eye'}
            />

            <SideImageSection
                h2Heading={ data?.section_1?.sub_heading || 'Your consultation'}
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading ||'What’s included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading ||'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image ||'/images/section-images/private-consultation-yag.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image ||'/images/section-images/private-consultation-yag-large.png',
                    width: 577,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="!ml-0"
                        list={ data?.section_1?.lists?.length &&
                           stringArrayToElementArray(data?.section_1?.lists) || [
                            'A comprehensive consultation and YAG laser treatment performed in our private laser suite with your dedicated specialist and our friendly team',
                            'FREE aftercare appointments with your dedicated YAG laser specialist.'
                        ]}
                    />
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <PriceSection
                priceList={priceSection || yagPriceList}
                itemClassName="!rounded-tl-primary !rounded-tr-primary md:!rounded-bl-primary md:!rounded-tl-none "
            />

            <FullWidthImageSection2
                title={ data?.section_3?.title || 'The cost of YAG Laser capsulotomy couldn’t be easier!'}
                description={ data?.section_3?.description || 'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'}
                largeImage={ data?.section_3?.large_image || '/images/section-images/yag-capsulotomy-large.png'}
                image={data?.section_3?.image ||'/images/section-images/yag-capsulotomy.png'}
            />

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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'yag-capsulotomy-for-pco-price' });

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
                    speaktoteam:{
                        ...data?.acf?.speaktoteam
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
