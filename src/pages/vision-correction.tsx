import Page from '@/components/Page';
import TripleWinSection from '@/components/page-sections/HomePage/TripleWinSection';
import BenefitsOfLaserEyeSurgery from '@/components/page-sections/LaserSurgeryComponents/BenefitsOfLaserEyeSurgery';
import ComparisonTable from '@/components/page-sections/LaserSurgeryComponents/ComparisonTable';
import ConsultationSection from '@/components/page-sections/LaserSurgeryComponents/ConsultationSection';
import LaserBenefits from '@/components/page-sections/LaserSurgeryComponents/LaserBenefits';
import LaserSolutions from '@/components/page-sections/LaserSurgeryComponents/LaserSolutions';
import SurgeryDetails from '@/components/page-sections/LaserSurgeryComponents/SurgeryDetails';
import TreatmentPrices from '@/components/page-sections/LaserSurgeryComponents/TreatmentPrices';
import MastheadLaserEyeSurgery from '@/components/page-sections/Masthead/MastheadLaserEyeSurgery';
import { getPageData, getTreatments } from '@/lib';
import { PageDataInterface, VisionCorrectionContentInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import React from 'react';

interface DataInterface extends VisionCorrectionContentInterface, PageDataInterface<VisionCorrectionContentInterface> {}

interface IclProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /icl
 *
 * @export
 * @returns {JSX.Element}
 */
export default function VisionCorrection({ seo, yoastJson, data }: IclProps): JSX.Element {
    const heading = data?.masthead_heading || 'Laser Eye Surgery';
    const subheading = data?.masthead_subheading || 'Reducing or eliminating the need for glasses or contact lenses';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <MastheadLaserEyeSurgery
                masthead={data.masthead}
                formClassName="!w-full max-w-[50rem] !rounded-bl-none rounded-br-none bg-white lg:px-24 lg:pb-0 lg:pt-24 [&_.consultation-reason]:hidden [&_.form-footnote]:hidden"
                className="[&_.finance-text]:hidden [&_.sitemap-link]:md:-translate-y-8"
                button={{
                    text: 'Contact us',
                    link: '/contact-us'
                }}
            />

            <LaserBenefits section1={data.section1} />

            <LaserSolutions section3={data.section3} />

            <SurgeryDetails
                link={data?.section4?.link || '/relex-smile-london'}
                sectionId={'relex-smile-london'}
                heading={data?.section4?.heading}
                descriptions={data?.section4?.descriptions}
                image={{
                    src: '/images/section-images/relex-smile.webp',
                    width: 690,
                    height: 570,
                    alt: 'Relex Smile',
                    ...(data?.section4?.image as any)
                }}
                imageClassName="md:order-2"
            />

            <SurgeryDetails
                link={data?.section5?.link || '/presbyond-london'}
                sectionId={'presbyond'}
                heading={data?.section5?.heading}
                descriptions={data?.section5?.descriptions}
                image={{
                    src: '/images/section-images/presbyond.webp',
                    width: 690,
                    height: 570,
                    alt: 'Presbyond',
                    ...(data?.section5?.image as any)
                }}
            />

            <SurgeryDetails
                link={data?.section6?.link || '/lasik-london'}
                sectionId={'lasik-london'}
                heading={data?.section6?.heading}
                descriptions={data?.section6?.descriptions}
                image={{
                    src: '/images/section-images/lasik-london.webp',
                    width: 690,
                    height: 570,
                    alt: 'lasik-london',
                    ...(data?.section6?.image as any)
                }}
                imageClassName="md:order-2"
            />

            <SurgeryDetails
                link={data?.section7?.link || '/lasek-prk'}
                sectionId={'lasek-prk'}
                heading={data?.section7?.heading}
                descriptions={data?.section7?.descriptions}
                image={{
                    src: '/images/section-images/lasek-prk.webp',
                    width: 690,
                    height: 570,
                    alt: 'lasek-prk',
                    ...(data?.section7?.image as any)
                }}
            />

            <SurgeryDetails
                link={data?.section8?.link || '/lasek-prk'}
                sectionId={'prk'}
                heading={data?.section8?.heading}
                descriptions={data?.section8?.descriptions}
                image={{
                    src: '/images/section-images/prk.webp',
                    width: 690,
                    height: 570,
                    alt: 'prk',
                    ...(data?.section8?.image as any)
                }}
                imageClassName="md:order-2"
            />

            <SurgeryDetails
                link={data?.section9?.link || '/lasek-prk'}
                sectionId={'ptk'}
                heading={data?.section9?.heading}
                descriptions={data?.section9?.descriptions}
                image={{
                    src: '/images/section-images/ptk.webp',
                    width: 690,
                    height: 570,
                    alt: 'ptk',
                    ...(data?.section9?.image as any)
                }}
            />

            {data?.section13?.heading ? (
                <SurgeryDetails
                    link={data?.section13?.link}
                    sectionId={data?.section13?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section13?.heading}
                    descriptions={data?.section13?.descriptions}
                    image={{
                        ...(data?.section13?.image as any)
                    }}
                    imageClassName="md:order-2"
                />
            ) : (
                <></>
            )}

            {data?.section14?.heading ? (
                <SurgeryDetails
                    link={data?.section14?.link}
                    sectionId={data?.section14?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section14?.heading}
                    descriptions={data?.section14?.descriptions}
                    image={{
                        ...(data?.section14?.image as any)
                    }}
                />
            ) : (
                <></>
            )}

            {data?.section15?.heading ? (
                <SurgeryDetails
                    link={data?.section15?.link}
                    sectionId={data?.section15?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section15?.heading}
                    descriptions={data?.section15?.descriptions}
                    image={{
                        ...(data?.section15?.image as any)
                    }}
                    imageClassName="md:order-2"
                />
            ) : (
                <></>
            )}

            {data?.section16?.heading ? (
                <SurgeryDetails
                    link={data?.section16?.link}
                    sectionId={data?.section16?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section16?.heading}
                    descriptions={data?.section16?.descriptions}
                    image={{
                        ...(data?.section16?.image as any)
                    }}
                />
            ) : (
                <></>
            )}

            {data?.section17?.heading ? (
                <SurgeryDetails
                    link={data?.section17?.link}
                    sectionId={data?.section17?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section17?.heading}
                    descriptions={data?.section17?.descriptions}
                    image={{
                        ...(data?.section17?.image as any)
                    }}
                    imageClassName="md:order-2"
                />
            ) : (
                <></>
            )}

            {data?.section18?.heading ? (
                <SurgeryDetails
                    link={data?.section18?.link}
                    sectionId={data?.section18?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section18?.heading}
                    descriptions={data?.section18?.descriptions}
                    image={{
                        ...(data?.section18?.image as any)
                    }}
                />
            ) : (
                <></>
            )}

            {data?.section19?.heading ? (
                <SurgeryDetails
                    link={data?.section19?.link}
                    sectionId={data?.section19?.heading.replace(' ', '-').toLowerCase()}
                    heading={data?.section19?.heading}
                    descriptions={data?.section19?.descriptions}
                    image={{
                        ...(data?.section19?.image as any)
                    }}
                    imageClassName="md:order-2"
                />
            ) : (
                <></>
            )}

            <TreatmentPrices section2={data.section2} />

            <ComparisonTable
                table={data?.section10?.table}
                heading={data?.section10?.heading || 'Let`s compare our service with other clinics'}
            />

            {/* <ComparisonTable
                table={data?.section12?.table}
                heading={data?.section12?.heading || 'How much you save with us'}
            /> */}

            <TripleWinSection />

            <BenefitsOfLaserEyeSurgery section11={data.section11} />

            <ConsultationSection className="max-w-[45rem] [&_.consultation-reason]:hidden [&_.form-footnote]:hidden" />
        </Page>
    );
}

/**
 * Fetch data from WordPress
 *
 * @export
 * @param {*} ctx
 * @returns {*}
 */
export async function getStaticProps(ctx: any) {
    try {
        const data: WpPageResponseInterface<VisionCorrectionContentInterface> = await getPageData({
            slug: 'vision-correction',
            draft: true
        });

        const treatments = await getTreatments();
        let iclTreatments = treatments.filter((treatment) => treatment.group_name === 'ICL Surgery');

        /**
         * Updates the `iclTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} iclTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        iclTreatments = iclTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        /**
         * Sort the image data into specified format
         * @param {any} img
         * @returns {{src: any, width: any, height: any}}
         */
        return {
            props: {
                iclTreatments,
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
                        ...data?.acf?.section1,
                        card1: {
                            ...data.acf.section1?.card1,
                            description: stripInitialTags(data.acf.section1?.card1?.description || '')
                        },
                        card2: {
                            ...data.acf.section1?.card2,
                            description: stripInitialTags(data.acf.section1?.card2?.description || '')
                        }
                    },
                    section3: {
                        ...data?.acf?.section3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section3?.image && formatImage(data.acf.section3.image))
                        }
                    },
                    section4: {
                        ...data?.acf?.section4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section4?.image && formatImage(data.acf.section4.image))
                        }
                    },
                    section5: {
                        ...data?.acf?.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section5?.image && formatImage(data.acf.section5.image))
                        }
                    },
                    section6: {
                        ...data?.acf?.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && formatImage(data.acf.section6.image))
                        }
                    },
                    section7: {
                        ...data?.acf?.section7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section7?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section7?.image && formatImage(data.acf.section7.image))
                        }
                    },
                    section8: {
                        ...data?.acf?.section8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section8?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section8?.image && formatImage(data.acf.section8.image))
                        }
                    },
                    section9: {
                        ...data?.acf?.section9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section9?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section9?.image && formatImage(data.acf.section9.image))
                        }
                    },
                    section13: {
                        ...data?.acf?.section13,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section13?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section13?.image && formatImage(data.acf.section13.image))
                        }
                    },
                    section14: {
                        ...data?.acf?.section14,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section14?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section14?.image && formatImage(data.acf.section14.image))
                        }
                    },
                    section15: {
                        ...data?.acf?.section15,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section15?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section15?.image && formatImage(data.acf.section15.image))
                        }
                    },
                    section16: {
                        ...data?.acf?.section16,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section16?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section16?.image && formatImage(data.acf.section16.image))
                        }
                    },
                    section17: {
                        ...data?.acf?.section17,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section17?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section17?.image && formatImage(data.acf.section17.image))
                        }
                    },
                    section18: {
                        ...data?.acf?.section18,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section18?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section18?.image && formatImage(data.acf.section18.image))
                        }
                    },
                    section19: {
                        ...data?.acf?.section19,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section19?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section19?.image && formatImage(data.acf.section19.image))
                        }
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
