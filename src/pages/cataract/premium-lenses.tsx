import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { H4Variant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { PercentageRounded } from '@/components/Progressbar';
import { premiumListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
// import { LeftRightSectionChildrenInterface } from './LeftRightSection';
import MastheadImageLarge from '@/masthead/masthead-premium-lenses-large.png';
import MastheadImageSmall from '@/masthead/masthead-premium-lenses-small.png';
import MastheadImageMedium from '@/masthead/masthead-premium-lenses.png';
import { premiumLensesFaqList } from '@/page-sections/Faq/faqList';
import { galleryListPremiumLens } from '@/page-sections/ImageGallery';
// import LeftRightHeading1 from '@/components/page-sections/LeftRight/LeftRightHeading1';
// import * as animationData1 from '@/lottie/EYE_VARIATION1.json';
// import * as animationData2 from '@/lottie/EYE_VARIATION2.json';
// import * as animationData3 from '@/lottie/EYE_VARIATION3.json';
// import * as animationData4 from '@/lottie/EYE_VARIATION4.json';
// import * as animationData5 from '@/lottie/EYE_VARIATION5.json';
import {
    BulletPoint,
    CtaSection2,
    ImageGallery,
    Masthead,
    SideImageSection,
    SideVideoSection2
} from '@/page-sections/index';
import { leftRightListPremiumLenses } from '@/page-sections/LeftRight/leftRightList';
import Cta5 from '@/page-sections/SectionParts/Cta5';
import PremiumLense1 from '@/section-images/premium-lense-1.png';
import PremiumLense2 from '@/section-images/premium-lense-2.png';
import PremiumLense3 from '@/section-images/premium-lense-3.png';
import PremiumLense4 from '@/section-images/premium-lense-4.png';
import { PremiumlensesContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
// eslint-disable-next-line no-unused-vars
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
// import LottieComponent from '@/components/page-sections/LottieSection/LottieComponent';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const LottieSection = dynamic(() => import('@/page-sections/LottieSection/LottieSection'), {
    loading: () => <ComponentLoader />
});
const CompareSlider = dynamic(() => import('@/page-sections/CompareSlider/CompareSlider'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PremiumlensesContentInterface, PageDataInterface<PremiumlensesContentInterface> {}

interface PremiumLensesProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 *
 * Url: /premium-lenses
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PremiumLenses({ seo, yoastJson, data }: PremiumLensesProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading ||'Independence from glasses after Cataract surgery London';
    const subheading = data?.masthead_subheading ||'Be independent from wearing glasses after your cataract surgery';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);


    // reviewSliderdata
    const reviewSliderdata: any = Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0 ?
        data.reviewSlider.map((service) => {
            return {
                ...service,
                title: service?.title,
                name: service?.name,
                description: service?.description
            };
        }) :
        null;

    // const leftrightsection: Array<LeftRightSectionChildrenInterface> = [
    //     {
    //         lottieComponent: <LottieComponent animationData={animationData1} />,
    //         alternativeHeading: (
    //                     <LeftRightHeading1 title={ data?.edoflenses?.title ||
    //                         'EDoF Lenses'} subTitle={ data?.edoflenses?.subtitle ||
    //                              'Independence from glasses'} percentage={ data?.edoflenses?.percentage || 80} />
    //         ),
    //         descriptions: data?.edoflenses?.descriptions?.length &&
    //                 data?.edoflenses?.descriptions || [
    //                     `Our Extended Depth of Focus lenses are used for our presbyopic patients needing a broader range of vision from their intermediate to distance vision.`,
    //                     `The lenses have a continuous change in periphery range by focusing the light in an extended longitudinal plane, instead of discrete points in a patient’s sight.`,
    //                     `Edof is the best lens implant option to achieve a brighter, and larger periphery of vision. Edof lenses have minimal glare, or halo side effects that can be associated with multifocal lenses.`
    //         ]
    //     },
    //     {
    //         lottieComponent: <LottieComponent animationData={animationData2} />,
    //         alternativeHeading: (
    //                     <LeftRightHeading1 title={data?.toriclenses?.title||
    //                         'Toric Lenses'} subTitle={data?.toriclenses?.subtitle||'Independence from glasses'}
    //                          percentage={data?.toriclenses?.percentage || 85} />
    //         ),
    //         descriptions: data?.toriclenses?.descriptions?.length &&
    //                 data?.toriclenses?.descriptions ||[
    //                     `Our Torric lenses are for patients who may require some correction of astigmatism in their cornea.`,
    //                     `We aim to correct any astigmatism for our patients with Torric as part of our standard care after Cataract Surgery.`
    //         ]
    //     },
    //     {
    //         lottieComponent: <LottieComponent animationData={animationData3} />,
    //         alternativeHeading: (
    //                     <LeftRightHeading1 title={data?.monofocallenses?.title||
    //                         'Monofocal Lenses'} subTitle={data?.monofocallenses?.title||
    //                         'Independence from glasses'} percentage={data?.monofocallenses?.percentage || 80} />
    //         ),
    //         descriptions: data?.monofocallenses?.descriptions?.length &&
    //                 data?.monofocallenses?.descriptions || [
    //                     `Our Monofocal lenses are for patients that would like their distance sight to be clear. This means tasks such as: reading signs and sightseeing will be clear.`,
    //                     `However, these lenses will require our patients to use glasses for intermediate and near tasks.`
    //         ]
    //     },
    //     {
    //         lottieComponent: <LottieComponent animationData={animationData4} />,
    //         alternativeHeading: (
    //                     <LeftRightHeading1 title={data?.multifocallenses?.title||
    //                         'Multifocal Lenses'} subTitle={data?.multifocallenses?.title||
    //                         'Independence from glasses'} percentage={data?.multifocallenses?.percentage || 70} />
    //         ),
    //         descriptions: data?.multifocallenses?.descriptions?.length &&
    //                 data?.multifocallenses?.descriptions || [
    //                     `Our Multifocal lenses are for patients needing near, intermediate and distance sight. These lenses are to maximise the range of vision to reduce the possibility of glasses wearing.`,
    //                     `However, glasses may still be needed for intensive near tasks, for example: reading very small print, or in poor light situations.`
    //         ]
    //     },
    //     {
    //         lottieComponent: <LottieComponent animationData={animationData5} />,
    //         alternativeHeading: (
    //                     <LeftRightHeading1 title={data?.monovision?.title||
    //                         'Monovision'} subTitle={data?.monovision?.subtitle||
    //                             'Independence from glasses'} percentage={data?.monovision?.percentage ||60} />
    //         ),
    //         descriptions: data?.monovision?.descriptions?.length &&
    //                 data?.monovision?.descriptions || [
    //                     `Monovision is when we correct the dominant eye for distance vision, and the other eye is corrected for near vision. When both eyes are viewing together, the distances pair.`,
    //                     `However, monovision is an older technique which can create more complications when trying to correct the distances. Our patients prefer newer lenses that work for a better optimal visual outcome.`
    //         ]
    //     }
    // ];

    return (
        <Page
            title="Premium Lenses"
            description="Be independent from wearing glasses after your cataract surgery"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url ||MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url ||MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url ||MastheadImageLarge}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={ data?.masthead_price || 'from £350 extra per eye'}
                bannerWidth="md:max-w-[68rem]"
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                // ExcludePriceComponent
                // list={['EDOF', 'Monofocal', 'Multifocals', 'Presbyond']}
            />

            {/* <FinanceCalculator /> */}

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <SideImageSection
                h2Heading={ data?.section_1?.sub_heading || 'Be Glasses free'}
                h3LightHeading={
                    <>
                       {data?.section_1?.heading?.light_heading ?
                           HTMLReactParser(data?.section_1?.heading?.light_heading) :
                       ` Presbyond laser
                        <br />
                        Treatment
                        <br />`
                       }
                    </>
                }
                h3BoldHeading={ data?.section_1?.heading?.bold_heading || 'After cataract surgery'}
                descriptions={ data?.section_1?.descriptions?.length &&
                    data?.section_1?.descriptions || [
                    `We provide Presbyond laser eye treatment after cataract surgery`,
                    `Presbyond uses a blend zone technology which corrects the near, intermediate and distance sight and helps cataract patients adjust to all points of sight after their surgery.`,
                    `This option is best suited to people with cataracts who have a very active lifestyle and want to continue their work, hobbies and driving without compromising their vision with glasses.`,
                    <span className="flex items-center justify-start gap-4">
                        <LinkText
                            href="/presbyond-london"
                            indicatorColor="bg-blue"
                            className="!font-mulishBold text-blue"
                        >
                            See Presbyond treatment
                        </LinkText>
                        <BsArrowRightShort className="h-10 w-10 translate-y-[0.1rem] fill-blue text-blue" />
                    </span>
                ]}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/laser-treatment-presbyond.png',
                    width: 388,
                    height: 469
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image ||'/images/section-images/laser-treatment-presbyond-large.png',
                    width: 659,
                    height: 687
                }}
                positionReversed={true}
                midExtras={
                    <>
                        <div className="flex items-center justify-start gap-6">
                            <PercentageRounded percentage={ data?.section_1?.percentage || 98} />

                            <span className="max-w-[13rem] font-mulishExtraBold text-[1.6rem] uppercase leading-[1.6rem] text-heading2">
                                { data?.section_1?.percentTitle || 'independence from glasses'}
                            </span>
                        </div>
                        <H4Variant1>{data?.section_1?.ParaghHeading ||'Be glasses free after cataract surgery'}</H4Variant1>
                    </>
                }
            />

            <LazyComponent triggerPosition={500}>
                <LottieSection />
            </LazyComponent>

            <SideVideoSection2
                title={ data?.section_2?.title || `You might be considering laser eye surgery to be completely independent from your glasses after
                    removing your cataracts`}
                descriptions={ data?.section_2?.descriptions?.length &&
                    data?.section_2?.descriptions || [
                    'We provide the perfect laser treatment for seeing near, intermediate and distance vision altogether without artificial lens implantation.'
                ]}
                containerClassName="md:!pl-[15rem]"
                textColor="!text-white"
                sloganTextColor="!text-[#CDCFD0]"
                bgColor="bg-[#00527c]"
                button1ClassName="!bg-white !border-white hover:!bg-[#00527c] hover:!border-white hover:text-white"
                button2ClassName="!border-white !bg-transparent text-white"
                button2Icon={
                    <Image
                        src="/images/icons/icon-phone-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        quality={2}
                        className="h-8 w-8"
                    />
                }
                hoverIcon={<Image src="/images/icons/icon-calendar-outline-white.svg" alt="" width={20} height={20} />}
            />

            <SideImageSection
                h2Heading={ data?.section_3?.subheading || 'improve your VISION'}
                h3LightHeading={ data?.section_3?.heading?.light_heading || 'Premium lenses we provide for'}
                h3BoldHeading={data?.section_3?.heading?.bold_heading ||'Your cataract surgery'}
                customColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{ src: data?.section_3?.image1 || '/images/section-images/compare-slider-1.png', width: 617, height: 509 }}
                            image2={{ src: data?.section_3?.image2 || '/images/section-images/compare-slider-2.png', width: 617, height: 509 }}
                        />
                    </LazyComponent>
                }
                descriptions={ data?.section_3?.contents?.length &&
                    (data?.section_3?.contents) || [
                    <>
                        Our premium lenses <strong>come at an extra cost</strong> added to your cataract surgery price.
                        Depending on the lenses and suitability for your vision, our cataract specialist will be able to
                        disclose the <strong>lens prices that are suitable for you.</strong>
                    </>,
                    <>
                        Depending on the implants a person is suitable for, our cataract patients have achieved much
                        better vision by choosing EDoF, Torric, Multifocal, Monofocal or Trifocal lenses.
                    </>
                ]}
                midExtras={
                    <div className="flex flex-wrap items-center justify-start gap-12">
                        <div className="flex items-center justify-start gap-4">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">{
                            data?.section_3?.point_text_1 || 'Edof'}</span>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">
                                {data?.section_3?.point_text_2 || 'Multifocals'}
                            </span>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">
                                {data?.section_3?.point_text_3 || 'Monofocal'}</span>
                        </div>
                    </div>
                }
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                        <Image width={112} height={83} src={ data?.section_3?.lenses_image?.lense_1 ||PremiumLense1} alt="" className="rounded-primary" />
                        <Image width={112} height={83} src={data?.section_3?.lenses_image?.lense_2 ||PremiumLense2} alt="" className="rounded-primary" />
                        <Image width={112} height={83} src={data?.section_3?.lenses_image?.lense_3 ||PremiumLense3} alt="" className="rounded-primary" />
                        <Image width={112} height={83} src={data?.section_3?.lenses_image?.lense_4 ||PremiumLense4} alt="" className="rounded-primary" />
                    </div>
                }
            />

            <LazyComponent>
                <LeftRightSection childrenList={ leftRightListPremiumLenses} />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={ reviewSliderdata || premiumListCataract} />
            </LazyComponent>

            <CtaSection2
                title={ data?.speaktoteam?.title || 'Do you think Premium lenses could be the right treatment for you?'}
                textColumnExtras={<Cta5 />}
            />

            <ImageGallery galleryList={galleryListPremiumLens} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="Get the guide to Premium lenses treatment"
                    pageSlug="premium-lenses"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || premiumLensesFaqList}
                    titleLight="Premium lenses"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'premium-lenses' });

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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3,
                        contents: convertArrayOfObjectsToStrings(data?.acf?.section_3?.contents)
                    },
                    edoflenses: {
                        ...data?.acf?.edoflenses,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.edoflenses?.descriptions)
                    },
                    toriclenses: {
                        ...data?.acf?.toriclenses,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.toriclenses?.descriptions)
                    },
                    monofocallenses: {
                        ...data?.acf?.monofocallenses,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.monofocallenses?.descriptions)
                    },
                    multifocallenses: {
                        ...data?.acf?.multifocallenses,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.multifocallenses?.descriptions)
                    },
                    monovision: {
                        ...data?.acf?.monovision,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.monovision?.descriptions)
                    },
                    speaktoteam:{
                        ...data?.acf?.speaktoteam
                    },
                    reviewSlider:Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData,
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
