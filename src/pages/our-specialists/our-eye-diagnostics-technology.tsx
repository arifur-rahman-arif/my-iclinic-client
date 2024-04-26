import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { AdvanceEyeCare, CtaSection2, FullWidthImageSection, SideImageSection } from '@/components/page-sections';
import { getPageData } from '@/lib';
import { EyeDiagnosticsPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import NormalSection5 from 'src/components/page-sections/NormalSection/NormalSection5';
import RelexHero from '@/page-sections/Masthead/RelexHero';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';

const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
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
    return (
        <Page title="Eye diagnostics & equipment center" yoastJson={yoastJson} seo={seo}>
            <BreadCrumb />

            <RelexHero
                {...data?.masthead}
                imageClass="lg:absolute z-[1]"
                textContainerClass="relative z-[2]"
                suitabilityButton={
                    <div className="mt-6 grid gap-6 md:mt-12">
                        <FinanceCalculatorButton
                            link="/pricing-and-financing/financing-your-treatment#calculator"
                            title1ClassName="!text-white"
                            icon={{
                                src: '/images/icons/icon-percentage-fire-blue.png',
                                width: 40,
                                height: 40,
                                alt: ''
                            }}
                        />
                        <MastheadCtaButtons
                            className="mt-4 flex-row-reverse justify-end"
                            showButton2
                            button2Class="text-white border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white"
                            button1Class="text-white bg-transparent border border-[#fff] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white"
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={data?.section1?.heading}
                description={data?.section1?.descriptions}
                image={data?.section1?.image?.src || '/images/section-images/eye-assessments.png'}
                desktopImage={data?.section1?.image?.src || '/images/section-images/eye-assessments-large.png'}
                altText={data?.section1?.image?.alt}
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[67rem]"
                descriptionClass="text-[#404A4D]"
                textColumnExtraBottomElements={
                    <div className="mt-12 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="hover:bg-brandLight">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] hover:bg-brandLight md:px-20"
                        />
                    </div>
                }
            />

            <NormalSection5 heading={data?.section2?.heading} description={data?.section2?.description} />

            <SideImageSection
                containerClassName="md:!grid-cols-1 md:!gap-12"
                h3LightHeading={data?.section3?.heading || 'Advanced eye care assessment & scanning'}
                customColumn={<AdvanceEyeCare cards={data?.section3?.cards} />}
            />

            <CtaSection2 {...data?.ctaSection} />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
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
        const data: WpPageResponseInterface<EyeDiagnosticsPageContentInterface> = await getPageData({
            slug: 'our-eye-diagnostics-technology'
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
                        image: {
                            ...(data?.acf?.masthead?.image && formatImage(data.acf?.masthead?.image))
                        }
                    },
                    section1: {
                        ...data?.acf.section1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section1?.image && formatImage(data.acf?.section1?.image))
                        }
                    },
                    section3: {
                        ...data?.acf.section3,
                        cards: data?.acf?.section3?.cards?.length
                            ? data.acf.section3.cards.map((card) => {
                                  return {
                                      ...card,
                                      image: {
                                          ...(card?.image && formatImage(card.image))
                                      }
                                  };
                              })
                            : null
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
