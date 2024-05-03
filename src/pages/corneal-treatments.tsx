import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import { getPageData } from '@/lib';
import CorneaOfferings from '@/page-sections/CorneaPage/CorneaOfferings';
import { BulletList, CtaSection2, SideImageSection } from '@/page-sections/index';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { CornealtreatmentContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});
interface DataInterface extends CornealtreatmentContentInterface, PageDataInterface<CornealtreatmentContentInterface> {}

interface CornealTreatmentsProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home page component for the App
 *
 * * Url: /eye-treatments/corneal-treatments
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CornealTreatments({ seo, yoastJson, data }: CornealTreatmentsProps): JSX.Element {
    return (
        <Page title="Cornea specialists in London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[57rem]"
                subTitleClass="max-w-[50rem]"
                smallImageClass="row-start-1 mt-0"
                suitabilityButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border-transparent bg-transparent text-white hover:text-[#007EF5]"
                            iconPosition="left"
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={
                    data?.section_1?.heading ||
                    'Private consultation for corneal treatments and corneal disease management'
                }
                descriptions={data?.section_1?.descriptions}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/cornea-consultation-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/cornea-consultation-large.webp',
                    width: 643,
                    height: 529
                }}
                positionReversed
            />

            {/* CORNEA CONSULTATION */}
            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.section_2?.heading || 'What is included in my private consultation?'}
                descriptions={data?.section_2?.descriptions}
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/cornea-consultation-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/cornea-consultation-large.webp',
                    width: 643,
                    height: 461
                }}
                textColumnExtras={
                    <div className="grid gap-12">
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
                        />
                        <BookConsultation>
                            <Button2 type="button" text="Book a consultation" />
                        </BookConsultation>
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section4?.heading || 'Treatments we offer for corneal conditions'}
                descriptionWrapperClass="[&_div:first-child]:mb-6"
                positionReversed
                descriptions={
                    (data?.section4?.descriptions?.length && data?.section4?.descriptions) || [
                        'KeraNatural corneal ring implantation is an advanced alternative treatment to keraring surgery. Keraring surgery is an implantation of intra-corneal ring segments (ICRS) which improve the corneas shape.',
                        'KeraNatural allograft corneal rings improves unaided and aided visual acuity in most patient cases without the complications associated with plastic intrastromal corneal rings such as: corneal melting, ring extrusion and intrusion, and sight-threatening complications like microbial keratitis.'
                    ]
                }
                sectionImage={{
                    url: data?.section4?.image?.src || '/images/section-images/keranatural-surgery-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section4?.image?.src || '/images/section-images/keranatural-surgery-large.webp',
                    width: 643,
                    height: 461
                }}
                textColumnExtras={
                    <BookConsultation>
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                reversed
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
                image={{
                    src: '/images/section-images/corneal-cross-linking-large.webp',
                    width: 711,
                    height: 522,
                    ...(data?.section5?.image as any)
                }}
            />

            <CorneaOfferings
                heading={data?.section6?.heading || 'Lamellar Corneal Graft'}
                descriptions={
                    (data?.section6?.descriptions?.length && data?.section6?.descriptions) || [
                        'A Lamellar corneal graft is a minimally invasive surgery which replaces the anterior layer of the cornea with new cornea tissue. This surgery strengthens the corneas structure and can improve vision.'
                    ]
                }
                descriptionContainerClassName="[&_p:first-child]:-mt-6 [&_p:first-child]:mb-6"
                image={{
                    src: '/images/section-images/lamellar-corneal-large.webp',
                    width: 648,
                    height: 714,
                    ...(data?.section6?.image as any)
                }}
                textColumnFooter={
                    <BookConsultation>
                        <Button2 type="button" text="Talk to an expert" />
                    </BookConsultation>
                }
            />
            <CorneaOfferings
                reversed
                heading={data?.section7?.heading || 'CAIRS'}
                descriptionContainerClassName="[&_p:last-child]:mt-6"
                descriptions={
                    (data?.section7?.descriptions?.length && data?.section7?.descriptions) || [
                        'CAIRS intrastromal corneal ring segments are sourced from human donor corneal tissue and implanted in your eye to strengthen your cornea.',
                        'CAIRS can be combined with corneal cross-linking to make this treatment more successful.',
                        'CAIRS avoids possible complications that are associated with implanting synthetic material in the cornea such as: corneal melting, ring extrusion and intrusion, corneal necrosis; and infection.'
                    ]
                }
                image={{
                    src: '/images/section-images/CAIRS.webp',
                    width: 660,
                    height: 547,
                    ...(data?.section7?.image as any)
                }}
                textColumnFooter={
                    <Button2
                        type="button"
                        text="Chat with us"
                        onClick={openFreshdeskChat}
                        className="group/button -mt-6 justify-self-center text-white hover:text-[#003E79]"
                        iconPosition="left"
                        icon={
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/button:stroke-[#003E79]"
                                />
                            </svg>
                        }
                    />
                }
            />

            <CorneaOfferings
                heading={data?.section8?.heading || 'DMEK'}
                descriptionContainerClassName="[&_p:first-child]:-mt-6 [&_p:first-child]:mb-6"
                descriptions={
                    (data?.section8?.descriptions?.length && data?.section8?.descriptions) || [
                        "DMEK is a Keratoplasty procedure which maintains the tensile strength of the cornea to restore clear, natural vision. DMEk helps restore symptoms of corneal endothelial diseases such as: Fuchs' dystrophy.",
                        'This procedure is a minimally invasive surgery where only the posterior layer of the corneal is replaced as opposed to translanting the anterior chamber of your eye.'
                    ]
                }
                image={{
                    src: '/images/section-images/DMEK.webp',
                    width: 711,
                    height: 522,
                    ...(data?.section8?.image as any)
                }}
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection2
                title={data?.section_3?.title}
                subTitle={data?.section_3?.subtitle}
                image={data?.section_3?.image}
            />

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

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
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
                    //Private consultation
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    }, // CORNEA CONSULTATION
                    section_2: {
                        ...data?.acf?.section_2,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists).map((item) =>
                            stripInitialTags(item)
                        ),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    },
                    section_3: {
                        ...data?.acf?.section_3,
                        image: {
                            ...(data?.acf?.section_3?.image && formatImage(data?.acf?.section_3?.image))
                        }
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
