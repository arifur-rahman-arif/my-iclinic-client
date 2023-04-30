import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { AdvanceEyeCare, CtaSection2, Masthead, SideImageSection } from '@/components/page-sections';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-eye-diagnostics-technology-large.jpg';
// import MastheadImageMedium from '@/masthead/masthead-eye-diagnostics-technology-medium.png';
// import MastheadImageSmall from '@/masthead/masthead-eye-diagnostics-technology-small.png';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import { EyeDiagnosticsPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Button } from 'src/components/Buttons';
import NormalSection5 from 'src/components/page-sections/NormalSection/NormalSection5';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface
    extends EyeDiagnosticsPageContentInterface,
        PageDataInterface<EyeDiagnosticsPageContentInterface> {}

interface OurEyeDiagnosticsTechnologyProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /conjuctivitis-treatment-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function OurEyeDiagnosticsTechnology({
    data,
    seo,
    yoastJson
}: OurEyeDiagnosticsTechnologyProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Eye diagnostics & equipment center';
    const subheading = 'My-iClinic diagnostics center for vision testing & optometry practice.';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title={heading} description={subheading} yoastJson={yoastJson} seo={seo}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image.image?.url || MastheadImageLarge}
                imageMedium={data?.masthead_image.image_medium?.url || MastheadImageLarge}
                imageLarge={data?.masthead_image.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image.image_large?.alt}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={<></>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <SideImageSection
                containerClassName="md:!gap-x-32 md:!gap-y-12"
                dynamicTextColumn={
                    <>
                        <h2 className="col-span-2 w-full max-w-[79.3rem] normal-case">
                            <strong className="normal-case">
                                Achieving accurate and comprehensive screening assessments to provide the best treatment
                                plan for our patients.
                            </strong>
                        </h2>
                        <TextColumn
                            textColumnClassName="-mt-12"
                            normalLightHeading={<></>}
                            descriptions={[
                                'Every pair of eyes are unique and different. We understand that every patient needs careful and precise attention to detail in their eye health to find the best treatment plan for them.',
                                'Our ophthalmic technology and equipment facilities are highly advanced in the private eye care industry, achieving accurate and comprehensive screening assessments.',
                                "Our optometrists, orthoptics and ophthalmic consultants use our technology for a wide-range of eye conditions and treatments; laser eye surgery, glaucoma surgery, cataract surgery, diabetes in the eye, macular degeneration, children's pediatric eye care and more."
                            ]}
                        />
                    </>
                }
                sectionImage={{
                    url: '/images/section-images/comprehensive-screening.jpg',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/comprehensive-screening.jpg',
                    width: 677,
                    height: 484
                }}
            />

            <NormalSection5 heading="The best care practice starts without any limitations in our care clinic. We are partnered with many different industry manufacturers who deliver the latest technology in healthcare." />

            <SideImageSection
                containerClassName="md:!grid-cols-1 md:!gap-12"
                h3LightHeading={
                    <>
                        Advanced eye care
                        <br />
                    </>
                }
                h3BoldHeading="assessment & scanning"
                customColumn={<AdvanceEyeCare />}
            />

            <CtaSection2
                title="Interested in working with us?"
                textColumnExtras={
                    <>
                        <div className={`flex flex-wrap items-center justify-start gap-6`}>
                            <Button
                                type="phone"
                                text="0208 445 8877"
                                iconPosition="left"
                                className="group/phone"
                                icon={
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_7348_23262)">
                                            <path
                                                d="M12.5417 4.16671C13.3556 4.32551 14.1036 4.72359 14.69 5.30999C15.2764 5.89639 15.6745 6.64443 15.8333 7.45837M12.5417 0.833374C14.2327 1.02124 15.8096 1.77852 17.0135 2.98088C18.2174 4.18324 18.9767 5.75922 19.1667 7.45004M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4892 17.1118 9.32499 15.7084C7.31151 14.4289 5.60443 12.7219 4.32499 10.7084C2.91663 8.53438 2.04019 6.0592 1.76665 3.48337C1.74583 3.25293 1.77321 3.02067 1.84707 2.80139C1.92092 2.58211 2.03963 2.38061 2.19562 2.20972C2.35162 2.03883 2.54149 1.9023 2.75314 1.80881C2.9648 1.71532 3.1936 1.66693 3.42499 1.66671H5.92499C6.32941 1.66273 6.72148 1.80594 7.02812 2.06965C7.33476 2.33336 7.53505 2.69958 7.59165 3.10004C7.69717 3.9001 7.89286 4.68565 8.17499 5.44171C8.28711 5.73998 8.31137 6.06414 8.24491 6.37577C8.17844 6.68741 8.02404 6.97347 7.79998 7.20004L6.74165 8.25837C7.92795 10.3447 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6243 11.7551C13.9359 11.6887 14.26 11.7129 14.5583 11.825C15.3144 12.1072 16.0999 12.3029 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6914 18.3333 14.1Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/phone:stroke-heading2"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7348_23262">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                    </>
                }
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title={
                        <>
                            Get the guide to
                            <br />
                            Eye diagnostics
                            <br />
                            treatment
                        </>
                    }
                    pageSlug="our-eye-diagnostics-technology"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'our-eye-diagnostics-technology' });

        return {
            /* eslint-disable */
            props: {
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

/// **
// * Fetch the data from WordPress database
// *
// * @returns {Promise<{props: {posts: any}}>}
// */
// export async function getStaticProps() {
//    try {
//        const pageResponse: Response = await getData({
//            url: `${process.env.WP_REST_URL}/pages?slug=eye-treatments-other-eye-conditions-conjunctivitis`
//        });
//
//        if (pageResponse.status !== 200) {
//            throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
//        }
//
//        const pageJsonResponse: Array<any> = await pageResponse.json();
//
//        if (!pageJsonResponse[0]?.id) throw new Error('Page ID is not found');
//
//        const pageID = pageJsonResponse[0].id;
//
//        if (!pageID) throw new Error('Page ID is not found');
//
//        const response = await getData({
//            url: `${process.env.WP_REST_URL}/pages/${pageID}`
//        });
//
//        const data: WpPageResponseInterface<EyeDiagnosticsPageContentInterface> = await response.json();
//
//        return {
//            /* eslint-disable */
//            props: {
//                data: {
//                    ...data?.acf,
//                    full_width_image_section: {
//                        ...data?.acf.full_width_image_section,
//                        descriptions: convertArrayOfObjectsToStrings(data.acf.full_width_image_section?.descriptions)
//                    },
//                    section_1: {
//                        ...data?.acf.section_1,
//                        descriptions: convertArrayOfObjectsToStrings(data.acf.section_1?.descriptions)
//                    },
//                    section_2: {
//                        ...data?.acf.section_2,
//                        descriptions: convertArrayOfObjectsToStrings(data.acf.section_2?.descriptions),
//                        list: convertArrayOfObjectsToStrings(data?.acf.section_2?.list)
//                    },
//                    section_3: {
//                        ...data?.acf.section_3,
//                        descriptions: convertArrayOfObjectsToStrings(data.acf.section_3?.descriptions),
//                        card_list: (data?.acf.section_3?.card_list || [])?.map((item) => {
//                            return {
//                                ...item,
//                                image: { src: item.image as unknown as string, width: 376, height: 271 },
//                                descriptions: convertArrayOfObjectsToStrings(item.descriptions)
//                            };
//                        })
//                    }
//                } as DataInterface
//            },
//            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
//            /* eslint-enable */
//        };
//    } catch (error: any) {
//        console.error(error);
//        return { props: {} };
//    }
// }
