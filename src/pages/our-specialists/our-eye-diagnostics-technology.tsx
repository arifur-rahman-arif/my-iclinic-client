import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { AdvanceEyeCare, CtaSection2, Masthead, SideImageSection } from '@/components/page-sections';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import MastheadImageLarge from '@/masthead/masthead-eye-diagnostics-technology-large.png';
import MastheadImageMedium from '@/masthead/masthead-eye-diagnostics-technology-medium.png';
import MastheadImageSmall from '@/masthead/masthead-eye-diagnostics-technology-small.png';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import { EyeDiagnosticsPageContentInterface, PageDataInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
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

/**
 * Url: /eye-treatments/other-eye-conditions/conjunctivitis
 *
 * @export
 * @returns {JSX.Element}
 */
export default function OurEyeDiagnosticsTechnology({ data }: { data: DataInterface }): JSX.Element {
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
        <Page title={heading} description={subheading}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image.image || MastheadImageSmall}
                imageMedium={data?.masthead_image.image_medium || MastheadImageMedium}
                imageLarge={data?.masthead_image.image_large || MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText={<></>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">
                        {data?.request_callback_title ? (
                            HTMLReactParser(data.request_callback_title)
                        ) : (
                            <>Talk to a specialist</>
                        )}
                    </strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <SideImageSection
                containerClassName="md:!gap-x-32 md:!gap-y-12"
                dynamicTextColumn={
                    <>
                        <h2 className="w-full normal-case col-span-2 max-w-[79.3rem]">
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
                    url: '/images/section-images/placeholder-image.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/placeholder-image.png',
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

            <CtaSection2 title="Interested in working with us?" excludeSloganText />

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
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>
        </Page>
    );
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
