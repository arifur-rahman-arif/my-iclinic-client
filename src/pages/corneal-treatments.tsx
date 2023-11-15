/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { H3Variant3 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-corneal-large.png';
import MastheadImageMedium from '@/masthead/masthead-corneal-medium.png';
import MastheadImageSmall from '@/masthead/masthead-corneal-small.png';
import CorneaOfferings from '@/page-sections/CorneaPage/CorneaOfferings';
import { BulletList, CtaSection, FullWidthImageSection, Masthead, SideImageSection } from '@/page-sections/index';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { CornealtreatmentContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends CornealtreatmentContentInterface, PageDataInterface<CornealtreatmentContentInterface> {}

interface CornealTreatmentsProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Consultation button
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationButton = (): JSX.Element => {
    return (
        <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-heading2 rounded-primary">
            <button className="" aria-label="Request a callback">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                    />
                    <path
                        d="M13.334 1.66699V5.00033"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                    />
                    <path
                        d="M6.66602 1.66699V5.00033"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                    />
                    <path
                        d="M2.5 8.33301H17.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                    />
                </svg>

                <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                    Request a callback
                </span>
            </button>
        </BookConsultation>
    );
};

/**
 * Home page component for the App
 *
 * * Url: /eye-treatments/corneal-treatments
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CornealTreatments({ seo, yoastJson, data }: CornealTreatmentsProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Cornea specialists in London';
    const subheading = data?.masthead_subheading || 'Corneal eye treatments at My-iClinic';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    // @ts-ignore
    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || ''}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            {/* SECTION 1 */}
            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[51.6rem]">
                        <strong className="normal-case">
                            {data?.section_1?.heading ||
                                'Private consultation for corneal treatments and corneal disease management'}
                        </strong>
                    </div>
                }
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        'When visiting My-iClinic you will begin your eye care journey with comprehensive eye assessments to investigate the condition of your cornea.',
                        'Corneal eye conditions can be prevented with early surgical  intervention and other corneal surgeries we provide in our private clinic.'
                    ]
                }
                image={data?.section_1?.image || '/images/section-images/private-consultation-corneal-diseases.png'}
                desktopImage={
                    data?.section_1?.large_image || '/images/section-images/private-consultation-corneal-diseases.png'
                }
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />
            {/* CORNEA CONSULTATION */}
            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'Cornea consultation'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'What is included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'private consultation?'}
                descriptions={
                    (data?.section_2?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_2?.descriptions)) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/cornea-consultation-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/cornea-consultation-large.png',
                    width: 643,
                    height: 461
                }}
                positionReversed
                textColumnExtras={
                    <BulletList
                        list={
                            (data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition  with treatment planning.',
                                'A referral for surgical treatment and/or a signed prescription (if required).',
                                'A dedicated eye care team to support you throughout your eye care journey.'
                            ]
                        }
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

            <CtaSection subtitle={data?.section_3?.subtitle} title={data?.section_3?.title} />

            <SideImageSection
                h3LightHeading={
                    <span className="block max-w-[40rem] normal-case">
                        {data?.section4?.heading || 'Treatments we offer for corneal conditions'}
                    </span>
                }
                descriptionWrapperClass="md:max-w-max"
                midExtras={
                    <h3
                        className="w-full font-latoBold text-[2rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]"
                        dangerouslySetInnerHTML={{
                            __html:
                                data?.section4?.subheading ||
                                'Keranatural Surgery for Keratoconus <span class="text-[1.8rem] leading-[2.8rem]">(allograft corneal ring implantation)</span>'
                        }}
                    ></h3>
                }
                descriptions={
                    (data?.section4?.descriptions?.length && data?.section4?.descriptions) || [
                        'KeraNatural corneal ring implantation is an advanced alternative treatment to keraring surgery. Keraring surgery is an implantation of intra-corneal ring segments (ICRS) which improve the corneas shape.',
                        'KeraNatural allograft corneal rings improves unaided and aided visual acuity in most patient cases without the complications associated with plastic intrastromal corneal rings such as: corneal melting, ring extrusion and intrusion, and sight-threatening complications like microbial keratitis.'
                    ]
                }
                sectionImage={{
                    url: data?.section4?.image?.src || '/images/section-images/keranatural-surgery-large.jpg',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section4?.image?.src || '/images/section-images/keranatural-surgery-large.jpg',
                    width: 643,
                    height: 461
                }}
                textColumnExtras={<ConsultationButton />}
            />

            <CorneaOfferings
                heading={data?.section5?.heading || 'Corneal cross-linking surgery'}
                descriptions={
                    (data?.section5?.descriptions?.length && data?.section5?.descriptions) || [
                        'Cross-linking is an early surgical intervention to treat keratoconus which decreases the chance of needing invasive corneal surgeries.',
                        'Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your Keratoconus from worsening.',
                        'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
                        'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.',
                        'Keratoconus Glasses and Contact Lenses are used to help you see once your Keratoconus has affected your vision.',
                        'However, Keratoconus glasses and contact lenses do not prevent the condition of Keratoconus from getting worse.',
                        'This is why cross-linking is used as an early surgical intervention to treat the condition before keratoconus progresses any further.'
                    ]
                }
                ctaButton={<ConsultationButton />}
                image={{
                    src: '/images/section-images/corneal-cross-linking-large.jpg',
                    width: 711,
                    height: 522,
                    ...(data?.section5?.image as any)
                }}
            />

            <CorneaOfferings
                reversed
                heading={data?.section6?.heading || 'Lamellar Corneal Graft'}
                descriptiveLabel={data?.section6?.descriptiveLabel || 'optical keratoplasty/ tectonic keratoplasty'}
                descriptions={
                    (data?.section6?.descriptions?.length && data?.section5?.descriptions) || [
                        'A Lamellar corneal graft is a minimally invasive surgery which replaces the anterior layer of the cornea with new cornea tissue. This surgery strengthens the corneas structure and can improve vision.'
                    ]
                }
                ctaButton={<ConsultationButton />}
                image={{
                    src: '/images/section-images/lamellar-corneal-large.jpg',
                    width: 711,
                    height: 522,
                    ...(data?.section6?.image as any)
                }}
            />

            <CorneaOfferings
                heading={data?.section7?.heading || 'CAIRS'}
                descriptiveLabel={data?.section7?.descriptiveLabel || 'corneal alloplastic intrastromal ring segment'}
                descriptions={
                    (data?.section7?.descriptions?.length && data?.section7?.descriptions) || [
                        'CAIRS intrastromal corneal ring segments are sourced from human donor corneal tissue and implanted in your eye to strengthen your cornea.',
                        'CAIRS can be combined with corneal cross-linking to make this treatment more successful.',
                        'CAIRS avoids possible complications that are associated with implanting synthetic material in the cornea such as: corneal melting, ring extrusion and intrusion, corneal necrosis; and infection.'
                    ]
                }
                ctaButton={<ConsultationButton />}
                image={{
                    src: '/images/section-images/CAIRS.jpg',
                    width: 711,
                    height: 522,
                    ...(data?.section7?.image as any)
                }}
            />

            <CorneaOfferings
                reversed
                heading={data?.section8?.heading || 'DMEK'}
                descriptiveLabel={data?.section8?.descriptiveLabel || "Descemet's Membrane Endothelial Keratoplasty"}
                descriptions={
                    (data?.section8?.descriptions?.length && data?.section8?.descriptions) || [
                        "DMEK is a Keratoplasty procedure which maintains the tensile strength of the cornea to restore clear, natural vision. DMEk helps restore symptoms of corneal endothelial diseases such as: Fuchs' dystrophy.",
                        'This procedure is a minimally invasive surgery where only the posterior layer of the corneal is replaced as opposed to translanting the anterior chamber of your eye.'
                    ]
                }
                ctaButton={<ConsultationButton />}
                image={{
                    src: '/images/section-images/DMEK.jpg',
                    width: 711,
                    height: 522,
                    ...(data?.section8?.image as any)
                }}
            />

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
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
        const data: WpPageResponseInterface<CornealtreatmentContentInterface> = await getPageData({
            slug: 'corneal-treatments'
        });

        /**
         * Sort the image data into specified format
         * @param {any} img
         * @returns {{src: any, width: any, height: any}}
         */
        const formatImage = (img: any) => {
            // Check if all properties exist and are truthy
            if (img?.url && img?.width && img?.height) {
                return {
                    src: img.url,
                    width: img.width,
                    height: img.height
                };
            } else {
                // Handle the case where one or more properties are missing or falsy
                return null; // You can return null, throw an error, or handle it differently as needed
            }
        };

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    //Private consultation
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // CORNEA CONSULTATION
                    section_2: {
                        ...data?.acf?.section_2,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    },
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    section4: {
                        ...data?.acf?.section4,
                        subheading: stripInitialTags(data?.acf?.section4?.subheading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section4?.image && formatImage(data?.acf?.section4?.image))
                        }
                    },
                    section5: {
                        ...data?.acf?.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section5?.image && formatImage(data?.acf?.section5?.image))
                        }
                    },
                    section6: {
                        ...data?.acf?.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && formatImage(data?.acf?.section6?.image))
                        }
                    },
                    section7: {
                        ...data?.acf?.section7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section7?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section7?.image && formatImage(data?.acf?.section7?.image))
                        }
                    },
                    section8: {
                        ...data?.acf?.section8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section8?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section8?.image && formatImage(data?.acf?.section8?.image))
                        }
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
