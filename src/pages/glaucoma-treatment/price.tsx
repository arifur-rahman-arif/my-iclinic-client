import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-glaucoma-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-glaucoma-pricing-medium.png';
import { BulletList, GlaucomaPackages2, Masthead, SideImageSection } from '@/page-sections/index';
import { GlaucomaPackages3 } from '@/page-sections/SectionParts/GlaucomaPackages';
import { PriceGlaucomaContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
interface DataInterface extends PriceGlaucomaContentInterface, PageDataInterface<PriceGlaucomaContentInterface> {}


interface PriceProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * * Url: /glaucoma-treatment/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson, data }: PriceProps): JSX.Element {
    const heading = data?.masthead_heading ||'Glaucoma treatment and management cost London';
    const subheading = data?.masthead_subheading ||'The cost of Glaucoma management';


    const Glaucoma2Section: any = data?.section_2 ?
        data?.section_2.map((item) => {
            return {
                ...item,
                title: item?.title,
                price: item?.price,
                description: HTMLReactParser(item?.description)
            };
        }) :
        null;

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />
            <Masthead
                imageMedium={data?.masthead_image?.image_medium?.url ||MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url ||MastheadImageLarge}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || '£400 per eye'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />
            <SideImageSection
                h2Heading={data?.section_1?.sub_heading ||'Your consultation'}
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading ||'The cost of'}
                        <br />
                    </>
                }
                h3BoldHeading={ data?.section_1?.heading?.bold_heading || 'Glaucoma management'}
                descriptions={ data?.section_1?.descriptions?.length &&
                    stringArrayToElementArray(data?.section_1?.descriptions) || [
                    <strong className="block font-mulishBold text-[2rem] leading-[2.8rem] sm:max-w-[37.1rem]">
                        The price of your private glaucoma consultation
                    </strong>,
                    <div className="grid gap-6">
                        <strong className="text-[2.4rem] leading-[3.2rem]">£400</strong>
                        <p>
                            A comprehensive, private consultation with our dedicated Glaucoma specialist (inclusive of
                            all eye assessments and eye scans).
                        </p>
                    </div>
                ]}
                sectionImage={{
                    url: data?.section_1?.image ||'/images/section-images/private-consultation-glaucoma-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image ||'/images/section-images/private-consultation-glaucoma-large.png',
                    width: 656,
                    height: 518
                }}
                positionReversed
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <GlaucomaPackages2 datapackList={Glaucoma2Section} />

            <GlaucomaPackages3 packageList={data?.privateTreatment} />

            <SideImageSection
                h3LightHeading={
                    <>
                        { data?.section_4?.heading?.light_heading || 'Thinking about paying with'} <br />
                    </>
                }
                h3BoldHeading={ data?.section_4?.heading?.bold_heading ||'health insurance?'}
                descriptions={ data?.section_4?.descriptions?.length &&
                   stringArrayToElementArray(data?.section_4?.descriptions) || [
                    `We are partnered with health insurance companies to make the cost of your treatment easier! We are partnered with:`
                ]}
                sectionImage={{
                    url: data?.section_4?.image ||'/images/section-images/glaucoma-health-insurance-large.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image ||'/images/section-images/glaucoma-health-insurance-large.png',
                    width: 622,
                    height: 568
                }}
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            list={ data?.section_4?.lists?.length &&
                                data?.section_4?.lists || [
                                'Aviva',
                                'WPA',
                                'Freedom',
                                'General Medical',
                                'Cigna UK',
                                'Bupa & Bupa international '
                            ]}
                            bold
                            bulletPoint={
                                <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                        <div className="flex flex-wrap items-center justify-start gap-6">
                            <Image src="/images/logos/aviva.png" width={55} height={29} alt="Aviva" />
                            <Image
                                src="/images/logos/healthcare-practice.png"
                                width={107}
                                height={29}
                                alt="Health Practice"
                            />
                            <Image src="/images/logos/freedom.png" width={86} height={36} alt="Freedom" />
                            <Image
                                src="/images/logos/general-medical.png"
                                width={50}
                                height={49}
                                alt="General Medical"
                            />
                            <Image src="/images/logos/cigma.png" width={92} height={28} alt="Cigma" />
                            <Image src="/images/logos/bupa.png" width={80} height={42} alt="Bupa" />
                        </div>
                        <div>
                            <strong>
                                { HTMLReactParser(data?.section_4?.descriptions2) ||`It's always best to check with your healthcare insurance provider that they will cover
                                your fees and produce a pre-authorisation code for you. We will require your
                                pre-authorization code before your consultation and cataract surgery.`}
                            </strong>
                        </div>
                    </div>
                }
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'glaucoma-treatment-price' });

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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions),
                    }, // 2
                    // // SECTION 2
                    // section_2: {
                    //     ...data?.acf?.section_2,
                    //     descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                    //     lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    // }, // 2
                    
                    section_2: Array.isArray(data?.acf?.section_2)
                    ? data?.acf.section_2.map((priceData) => {
                          return {
                              ...priceData,
                          };
                      })
                    : [],
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions),                        
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists),

                    },
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
