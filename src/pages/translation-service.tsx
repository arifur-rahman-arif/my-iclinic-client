import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { PageDataInterface, TranslationPageProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import { CtaSection, SideImageSection } from '@/components/page-sections';
import React from 'react';
import PricePackageSection2 from '@/page-sections/SectionParts/GlaucomaPackages/PricePackageSection2';

interface DataInterface extends TranslationPageProps, PageDataInterface<TranslationPageProps> {}

interface TranslationServiceProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Cookie Policy page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TranslationService = ({ seo, yoastJson, data }: TranslationServiceProps) => {
    return (
        <Page title="Translation Service" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero {...data?.masthead} subTitleClass="mb-12" />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'Diagnosis and treatment for Macular degeneration'}
                descriptions={data?.section_1?.descriptions}
                descriptionWrapperClass="sm:[&_ul]:grid-cols-2 [&_ul]:!gap-x-24"
                sectionImage={{
                    url: data?.section_1?.image,
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.image,
                    width: 566,
                    height: 575
                }}
                altText=""
            />

            <PricePackageSection2
                {...data?.section2}
                id="translation-services"
                packageContainerClass="md:gap-1"
                packageItemDescriptionBoxClass="md:grid-cols-[1fr_11rem]"
            />

            <CtaSection />
        </Page>
    );
};

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<TranslationPageProps> = await getPageData({
            fields: 'title,content,acf,yoast_head,yoast_head_json',
            slug: 'translation-service'
        });

        return {
            /* eslint-disable */
            props: {
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    // Children Astigmatism
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section2: {
                        ...data?.acf?.section2,
                        packages: data?.acf?.section2?.packages
                            ? data.acf.section2.packages.map((packageItem) => {
                                  return {
                                      ...packageItem,
                                      items: packageItem?.items?.map((item) => {
                                          return {
                                              ...item,
                                              title: stripInitialTags(item?.title || ''),
                                              description: stripInitialTags(item?.description || '')
                                          };
                                      })
                                  };
                              })
                            : null
                    }
                } as DataInterface,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}

export default TranslationService;
