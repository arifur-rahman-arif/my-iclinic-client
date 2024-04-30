import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection, FullWidthImageSection } from '@/components/page-sections';
import { yagFaqList } from '@/components/page-sections/Faq/faqList';
import { leftRightListYag } from '@/components/page-sections/LeftRight/leftRightList';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import SimpleProcessImageLarge from '@/section-images/yag-laser-treatment-large.webp';
import SimpleProcessImage from '@/section-images/yag-laser-treatment.webp';
import { YagCataractContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/components/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends YagCataractContentInterface, PageDataInterface<YagCataractContentInterface> {}

interface YagCapsulotomyForPcoProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 *
 * Url: /cataract/yag-capsulotomy-for-pco
 *
 * @export
 * @returns {JSX.Element}
 */
export default function YagCapsulotomyForPco({ data, seo, yoastJson }: YagCapsulotomyForPcoProps): JSX.Element {
    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection
        ? data.leftRightsection.map(
              (item: { mobileImage: any; desktopImage: any; title: any; descriptions: string[] | undefined }) => ({
                  ...item,
                  mobileImage: (
                      <Image
                          src={item?.mobileImage || '/images/section-images/cataract-consultation.webp'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-radius2 md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/cataract-consultation-large.webp'}
                          width={675}
                          height={617}
                          quality={70}
                          className="hidden w-full max-w-[61.7rem] rounded-radius2 md:block"
                          alt=""
                      />
                  ),
                  title: item?.title,
                  descriptions: stringArrayToElementArray(item?.descriptions)
              })
          )
        : null;

    return (
        <Page
            title="YAG Laser Treatment in London"
            description="YAG Laser Treatment is a procedure to remove any symptoms that occur after having your cataracts removed. Learn more about the procedure here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero {...data?.masthead} bannerClass="xl:max-h-[calc(100%_-_14rem)]" />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.section_3?.heading?.length ? (
                            HTMLReactParser(data?.section_3?.heading)
                        ) : (
                            <>
                                YAG Laser Treatment after
                                <br />
                                Cataract Surgery
                            </>
                        )}
                    </>
                }
                altText=""
                image={data?.section_3?.image || SimpleProcessImage}
                smallImageClassName="!rounded-none"
                desktopImage={data?.section_3?.imageLarge || SimpleProcessImageLarge}
                includeScrollDownButton
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightsectiondata || leftRightListYag} />
            </LazyComponent>

            {/* <LazyComponent> */}
            {/*     <SideVideoSection */}
            {/*         h2Heading="What our YAG patients Say After treatment " */}
            {/*         h3Heading="Hear from a patient" */}
            {/*         descriptions={[ */}
            {/*             'When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight. Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.' */}
            {/*         ]} */}
            {/*     /> */}
            {/* </LazyComponent> */}

            {/* <LazyComponent> */}
            {/*     <NormalSlideSection sliderList={normalSlideListYag} /> */}
            {/* </LazyComponent> */}

            <Section>
                <Container className="grid place-items-center gap-12">
                    <H2Variant1 className="max-w-[56.5rem] text-center !normal-case">
                        {data?.section_6?.title || 'Find out more about YAG laser treatment price'}
                    </H2Variant1>
                    <Button2 type="anchor" text="YAG treatment price" link="/cataract/yag-capsulotomy-for-pco/price" />
                </Container>
            </Section>

            <CtaSection
                title={data?.sectionspeakteam?.title}
                subtitle={data?.sectionspeakteam?.sub_heading || 'Find out your options'}
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title={
                        <>
                            Get the guide to <br />
                            YAG laser treatment
                        </>
                    }
                    pageSlug="yag-capsulotomy-for-pco"
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || yagFaqList}
                    titleLight="YAG laser treatment "
                    titleBold="Frequently asked questions"
                    description="Have a question? We are here to help."
                />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'yag-capsulotomy-for-pco' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        subTitle: stripInitialTags(data?.acf?.masthead?.sub_title),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    }, // 2
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6
                    },
                    leftRightsection: Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
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
