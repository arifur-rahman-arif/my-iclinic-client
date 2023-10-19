import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import MastheadOphthalmologyClinic from '@/page-sections/Masthead/MastheadOphthalmologyClinic';
import EpiretinalMembrane from '@/page-sections/OphthalmologyPage/EpiretinalMembrane';
import Floaters from '@/page-sections/OphthalmologyPage/Floaters';
import OphthalmologistDoctors from '@/page-sections/OphthalmologyPage/OphthalmologistDoctors';
import RetinalDetachment from '@/page-sections/OphthalmologyPage/RetinalDetachment';
import WhyMyIClinic from '@/page-sections/OphthalmologyPage/WhyMyIClinic';
import YvonneLuo from '@/page-sections/OphthalmologyPage/YvonneLuo';
import CtaSection from '@/page-sections/VitreoretinalSurgery/CtaSection';
import { PageDataInterface, RetinaTreatmentsContents, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';

interface DataInterface extends RetinaTreatmentsContents, PageDataInterface<RetinaTreatmentsContents> {}

interface PageProps {
    data?: DataInterface;
    seo?: any;
    yoastJson?: any;
}

/**
 * Home page component for the App
 *
 * Url: /
 *
 * @export
 * @returns {JSX.Element}
 */
export default function RetinaTreatments({ data, seo, yoastJson }: PageProps): JSX.Element {
    return (
        <Page
            title="London Retina treatments For Eye Health"
            description="Ophthalmology for eye health solutions including, cataracts, glaucoma, diabetic retinopathy, macular degeneration & corneal diseases."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb className="md:hidden" />

            <MastheadOphthalmologyClinic masthead={data?.masthead} />

            <OphthalmologistDoctors section1={data?.section1} />

            <WhyMyIClinic section2={data?.section2} />

            <YvonneLuo section3={data?.section3} />

            <Floaters section4={data?.section4} />

            <RetinalDetachment
                heading={data?.section5?.heading}
                descriptions={data?.section5?.descriptions}
                bulletPoint={data?.section5?.subheading}
                sectionImage={data?.section5?.image}
                sectionImageLarge={data?.section5?.largeImage}
            />

            <RetinalDetachment
                heading={data?.section6?.heading || 'Macular Hole'}
                descriptions={
                    (data?.section6?.descriptions?.length && data?.section6?.descriptions) || [
                        'A macular hole is a condition that affects the central part of the retina known as the macula, which is responsible for sharp and detailed central vision.',
                        'This disorder occurs when there is a small break or hole in the macular tissue, leading to distorted and blurred central vision.',
                        'Macular holes usually develop due to age-related changes of the vitreous body in eyes with abnormally strong adhesion of the vitreous at the macula.',
                        'As the vitreous body liquefies with age, the strong adhesion causes avulsion of the retinal tissue at macula, resulting in a macular hole.',
                        'Treatment of macular hole involves surgical procedures known as vitrectomy, peeling of internal limiting membrane, and gas tamponade.',
                        'During vitrectomy, the vitreous gel inside the eye is removed with a high speed pneumatic cutter and replaced with fluid. This removes all the traction on the retina.',
                        'A dye is then injected to stain a very thin connective tissue membrane on the surface of the retina, known as the internal limiting membrane.',
                        'By removing the (peeling away) the internal limiting membrane, the tissue around the macular hole becomes more mobile, and migrate to fill in the gap, thereby closing the macular hole. Finally, a gas bubble is injected to encourage migration of the surrounding tissue to fill the hole.',
                        'The visual outcome of the macular hole surgery is directly related to the size of the macular hole, which tends to enlarge with time.'
                    ]
                }
                bulletPoint={
                    data?.section6?.subheading ||
                    'Early diagnosis and prompt intervention are essential for achieving the best possible visual outcomes in macular hole cases.'
                }
                sectionImage={{
                    src: '/images/section-images/macular-hole.png',
                    width: 405,
                    height: 788,
                    ...data?.section6?.image
                }}
                sectionImageLarge={{
                    src: '/images/section-images/macular-hole-large.png',
                    width: 684,
                    height: 852,
                    ...data?.section6?.largeImage
                }}
                textColumnClassName="md:col-start-2"
            />

            <EpiretinalMembrane section7={data?.section7} />

            <RetinalDetachment
                heading={data?.section8?.heading || 'Diabetic Retinopathy'}
                descriptions={
                    (data?.section8?.descriptions?.length && data?.section8?.descriptions) || [
                        'Diabetic retinopathy is a sight-threatening complication of diabetes that affects the blood vessels in the retina, the light-sensitive tissue at the back of the eye.',
                        'Over time, high levels of blood sugar can damage these delicate blood vessels, leading to leakage, swelling, and the development of abnormal blood vessels.',
                        '<strong class="text-[1.6rem] text-heading uppercase">If left untreated, diabetic retinopathy can cause severe vision loss, including blindness.</strong>',
                        'The treatment for diabetic retinopathy varies depending on the stage and severity of the condition.',
                        'In the early stages, managing blood sugar levels, blood pressure, and cholesterol can slow its progression.',
                        'For more advanced cases, laser therapy (photocoagulation) or anti-VEGF injections may be recommended.',
                        'Regular eye examinations are crucial for early detection and management of diabetic retinopathy to preserve vision and prevent complications.',
                        'These treatments aim to reduce abnormal blood vessel growth and prevent further damage. In advanced cases, surgery such as vitrectomy may be necessary to remove blood or scar tissue from the eye.'
                    ]
                }
                bulletPoint={
                    data?.section8?.subheading ||
                    'Regular eye examinations are crucial for early detection and management of diabetic retinopathy to preserve vision and prevent complications.'
                }
                sectionImage={{
                    src: '/images/section-images/diabetic-retinopathy-small.png',
                    width: 385,
                    height: 852,
                    ...data?.section8?.image
                }}
                sectionImageLarge={{
                    src: '/images/section-images/diabetic-retinopathy.png',
                    width: 684,
                    height: 852,
                    ...data?.section8?.largeImage
                }}
                specialistCtaButton
            />

            <CtaSection section7={data?.section9} />
        </Page>
    );
}

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps(): Promise<any> {
    try {
        const data: WpPageResponseInterface<RetinaTreatmentsContents> = await getPageData({
            slug: 'retina-treatments'
        });

        return {
            props: {
                seo: data?.yoast_head,
                yoastJson: data?.yoast_head_json,
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf.masthead,
                        image: {
                            ...(data?.acf?.masthead?.image && {
                                src: data.acf.masthead?.image.url,
                                width: data.acf.masthead?.image.width,
                                height: data.acf.masthead?.image.height
                            })
                        }
                    },
                    section1: {
                        ...data?.acf?.section1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section2: {
                        ...data?.acf?.section2,
                        cards: data?.acf?.section2?.cards.map((item) => ({
                            ...item,
                            description: stripInitialTags(item.description)
                        }))
                    },
                    section3: {
                        ...data?.acf?.section3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section4: {
                        ...data?.acf?.section4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section5: {
                        ...data?.acf?.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section5?.image && {
                                src: data.acf.section5?.image.url,
                                width: data.acf.section5?.image.width,
                                height: data.acf.section5?.image.height
                            })
                        },
                        largeImage: {
                            ...(data?.acf?.section5?.largeImage && {
                                src: data.acf.section5?.largeImage.url,
                                width: data.acf.section5?.largeImage.width,
                                height: data.acf.section5?.largeImage.height
                            })
                        }
                    },
                    section6: {
                        ...data?.acf?.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && {
                                src: data.acf.section6?.image.url,
                                width: data.acf.section6?.image.width,
                                height: data.acf.section6?.image.height
                            })
                        },
                        largeImage: {
                            ...(data?.acf?.section6?.largeImage && {
                                src: data.acf.section6?.largeImage.url,
                                width: data.acf.section6?.largeImage.width,
                                height: data.acf.section6?.largeImage.height
                            })
                        }
                    },
                    section7: {
                        ...data?.acf?.section7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section7?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section8: {
                        ...data?.acf?.section8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section8?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section8?.image && {
                                src: data.acf.section8?.image.url,
                                width: data.acf.section8?.image.width,
                                height: data.acf.section8?.image.height
                            })
                        },
                        largeImage: {
                            ...(data?.acf?.section8?.largeImage && {
                                src: data.acf.section8?.largeImage.url,
                                width: data.acf.section8?.largeImage.width,
                                height: data.acf.section8?.largeImage.height
                            })
                        }
                    },
                    section9: {
                        ...data?.acf?.section9,
                        list: convertArrayOfObjectsToStrings(data?.acf?.section9?.list)
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
