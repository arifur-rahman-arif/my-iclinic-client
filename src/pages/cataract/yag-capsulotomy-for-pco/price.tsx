import { BreadCrumb } from '@/components/Breadcrumb';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { BulletList, FullWidthImageSection2, SideImageSection } from '@/components/page-sections';
import CostDetails from '@/components/page-sections/CataractPriceSections/CostDetails';
import { CtaSection } from '@/components/page-sections/CtaSection';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import { getPageData } from '@/lib';
import { YagPriceContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';

import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';

interface DataInterface extends YagPriceContentInterface, PageDataInterface<YagPriceContentInterface> {}

interface Props {
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
export default function IclPricing({ seo, yoastJson, data }: Props): JSX.Element {
    const heading = data?.masthead_heading || 'YAG laser Capsulotomy surgery cost London';
    const subheading = data?.masthead_subheading || 'data?.masthead_heading ||Save an average of £1,000';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="!max-w-[64.2rem]"
                smallImageClass="row-start-1 mt-0"
                contentContainerClassName="pb-12 lg:pb-0"
            />

            <CostDetails items={data?.costDetails} itemClass="sm:px-16 md:px-16 grid-cols-1 sm:grid-cols-[auto_1fr]" />

            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading || 'What’s included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                descriptions={data?.section_1?.descriptions?.length ? data?.section_1.descriptions : []}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-yag.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-yag-large.webp',
                    width: 672,
                    height: 599
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="!ml-0"
                        list={
                            (data?.section_1?.lists?.length && stringArrayToElementArray(data?.section_1?.lists)) || [
                                'A comprehensive consultation and YAG laser treatment performed in our private laser suite with your dedicated specialist and our friendly team',
                                'FREE aftercare appointments with your dedicated YAG laser specialist.'
                            ]
                        }
                    />
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            {/*
            <PriceSection
                priceList={priceSection || yagPriceList}
                itemClassName="!rounded-tl-primary !rounded-tr-primary md:!rounded-bl-primary md:!rounded-tl-none "
            /> */}

            <FullWidthImageSection2
                title={data?.section_3?.title || 'The cost of YAG Laser capsulotomy couldn’t be easier!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                largeImage={data?.section_3?.large_image || '/images/section-images/yag-capsulotomy-large.webp'}
                image={data?.section_3?.image || '/images/section-images/yag-capsulotomy.webp'}
                excludeCta
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
                        ...data?.acf?.section_1,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_1?.lists),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3,
                        description: stripInitialTags(data?.acf?.section_3?.description)
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
