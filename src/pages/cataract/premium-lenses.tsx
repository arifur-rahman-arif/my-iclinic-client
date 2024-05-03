import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { H4Variant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { PercentageRounded } from '@/components/Progressbar';
import { getPageData } from '@/lib';
import { premiumLensesFaqList } from '@/page-sections/Faq/faqList';
import { galleryListPremiumLens } from '@/page-sections/ImageGallery';
import { BulletPoint, CtaSection2, ImageGallery, SideImageSection, SideVideoSection2 } from '@/page-sections/index';
import { leftRightListPremiumLenses } from '@/page-sections/LeftRight/leftRightList';
import PremiumLense1 from '@/section-images/premium-lense-1.webp';
import PremiumLense2 from '@/section-images/premium-lense-2.webp';
import PremiumLense3 from '@/section-images/premium-lense-3.webp';
import PremiumLense4 from '@/section-images/premium-lense-4.webp';
import { PremiumlensesContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

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
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
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
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
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
    return (
        <Page
            title="Premium Lenses"
            description="Be independent from wearing glasses after your cataract surgery"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                className="xl:grid-cols-[auto_40rem_1fr]"
                titleClass="md:max-w-[68.6rem]"
                bannerClass="xl:max-h-[calc(100%_-_15rem)]"
                ctaButton={
                    <>
                        <Button2
                            type="anchor"
                            link="/pricing-and-financing/financing-your-treatment"
                            text="Explore treatment options"
                            className="justify-self-start !border-2 border-[#0099FF] bg-[#0099FF] text-center hover:!border-[#0099FF] hover:!text-[#0099FF]"
                        />
                    </>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                // h2Heading={data?.section_1?.sub_heading || 'Be Glasses free'}
                h3LightHeading={data?.section_1?.heading?.light_heading}
                descriptions={
                    (data?.section_1?.descriptions?.length && data?.section_1?.descriptions) || [
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
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/laser-treatment-presbyond.webp',
                    width: 388,
                    height: 469
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/laser-treatment-presbyond-large.webp',
                    width: 675,
                    height: 617
                }}
                positionReversed={true}
                midExtras={
                    <>
                        <div className="flex items-center justify-start gap-6">
                            <PercentageRounded percentage={data?.section_1?.percentage || 98} />

                            <span className="max-w-[13rem] font-mulishBold text-[1.6rem] uppercase leading-[1.6rem] text-heading">
                                {data?.section_1?.percentTitle || 'independence from glasses'}
                            </span>
                        </div>
                        <H4Variant1>
                            {data?.section_1?.ParaghHeading || 'Be glasses free after cataract surgery'}
                        </H4Variant1>
                    </>
                }
            />

            <LazyComponent triggerPosition={500}>
                <LottieSection heading={data?.animationSection?.heading} />
            </LazyComponent>

            <SideVideoSection2
                title={
                    data?.section_2?.title ||
                    `You might be considering laser eye surgery to be completely independent from your glasses after
                    removing your cataracts`
                }
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        'We provide the perfect laser treatment for seeing near, intermediate and distance vision altogether without artificial lens implantation.'
                    ]
                }
                containerClassName="md:!pl-[15rem]"
                textColor="!text-white"
                bgColor="bg-[#00527c]"
                button1ClassName="!bg-white !border-white hover:!bg-[#003E79] hover:!border-white hover:text-white"
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
                h3LightHeading={data?.section_3?.heading || 'Premium lenses we provide for your cataract surgery'}
                customColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{
                                src: data?.section_3?.image1 || '/images/section-images/compare-slider-1.webp',
                                width: 617,
                                height: 509
                            }}
                            image2={{
                                src: data?.section_3?.image2 || '/images/section-images/compare-slider-2.webp',
                                width: 617,
                                height: 509
                            }}
                        />
                    </LazyComponent>
                }
                descriptions={
                    (data?.section_3?.contents?.length && data?.section_3?.contents) || [
                        <>
                            Our premium lenses <strong>come at an extra cost</strong> added to your cataract surgery
                            price. Depending on the lenses and suitability for your vision, our cataract specialist will
                            be able to disclose the <strong>lens prices that are suitable for you.</strong>
                        </>,
                        <>
                            Depending on the implants a person is suitable for, our cataract patients have achieved much
                            better vision by choosing EDoF, Torric, Multifocal, Monofocal or Trifocal lenses.
                        </>
                    ]
                }
                midExtras={
                    <div className="flex flex-wrap items-center justify-start gap-12">
                        <div className="flex items-center justify-start gap-4">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">
                                {data?.section_3?.point_text_1 || 'Edof'}
                            </span>
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
                                {data?.section_3?.point_text_3 || 'Monofocal'}
                            </span>
                        </div>
                    </div>
                }
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                        <Image
                            width={112}
                            height={83}
                            src={data?.section_3?.lenses_image?.lense_1 || PremiumLense1}
                            alt=""
                            className="rounded-radius2"
                        />
                        <Image
                            width={112}
                            height={83}
                            src={data?.section_3?.lenses_image?.lense_2 || PremiumLense2}
                            alt=""
                            className="rounded-radius2"
                        />
                        <Image
                            width={112}
                            height={83}
                            src={data?.section_3?.lenses_image?.lense_3 || PremiumLense3}
                            alt=""
                            className="rounded-radius2"
                        />
                        <Image
                            width={112}
                            height={83}
                            src={data?.section_3?.lenses_image?.lense_4 || PremiumLense4}
                            alt=""
                            className="rounded-radius2"
                        />
                    </div>
                }
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListPremiumLenses} />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection2
                title={data?.speaktoteam?.title || 'Do you think Premium lenses could be the right treatment for you?'}
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
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
                    speaktoteam: {
                        ...data?.acf?.speaktoteam
                    },
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
