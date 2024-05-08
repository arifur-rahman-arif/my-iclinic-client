import Page from '@/components/Page';
import { CompanyLogos2 } from '@/components/page-sections';
import { getPageData } from '@/lib';
import MastheadVitreoretinalSurgery from '@/page-sections/Masthead/MastheadVitreoretinalSurgery';
import AchievementsAndBeyond from '@/page-sections/VitreoretinalSurgery/AchievementsAndBeyond';
import CtaSection from '@/page-sections/VitreoretinalSurgery/CtaSection';
import EducationJourney from '@/page-sections/VitreoretinalSurgery/EducationJourney';
import EyeCareService from '@/page-sections/VitreoretinalSurgery/EyeCareService';
import GettingToKnow from '@/page-sections/VitreoretinalSurgery/GettingToKnow';
import InTheMedia from '@/page-sections/VitreoretinalSurgery/InTheMedia';
import Specialities from '@/page-sections/VitreoretinalSurgery/Specialities';
import { PageDataInterface, VitreoretinalSurgeryContent, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';

interface DataInterface extends VitreoretinalSurgeryContent, PageDataInterface<VitreoretinalSurgeryContent> {}

interface PageProps {
    data?: DataInterface;
    seo?: any;
    yoastJson?: any;
    navMenuData: any;
}

/**
 * Home page component for the App
 *
 * Url: /
 *
 * @export
 * @returns {JSX.Element}
 */
export default function vitreoretinalSurgeryContent({ seo, yoastJson, data }: PageProps): JSX.Element {
    const heading = data?.masthead.heading || 'Dr. Yvonne Luo';

    return (
        <Page
            title={heading}
            description="Specialist in Ophthalmology with a focus on vitreoretinal and medical retinal conditions. Offering a glasses-free life to patients through expert care."
            seo={seo}
            yoastJson={yoastJson}
        >
            <MastheadVitreoretinalSurgery masthead={data?.masthead} />

            <GettingToKnow section1={data?.section1} />

            <Specialities section2={data?.section2} />

            <EducationJourney section3={data?.section3} />

            <EyeCareService section4={data?.section4} />

            <InTheMedia section5={data?.section5} />

            <AchievementsAndBeyond section6={data?.section6} />

            <CtaSection section7={data?.section7} />

            <CompanyLogos2 />
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
        const data: WpPageResponseInterface<VitreoretinalSurgeryContent> = await getPageData({
            slug: 'vitreoretinal-surgery'
        });

        return {
            props: {
                seo: data?.yoast_head,
                yoastJson: data?.yoast_head_json,
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        image: data?.acf?.masthead?.image
                            ? {
                                  width: data.acf?.masthead?.image?.width,
                                  height: data.acf?.masthead?.image?.height,
                                  alt: data?.acf?.masthead?.image?.alt,
                                  url: data?.acf?.masthead?.image?.url
                              }
                            : null
                    },
                    section1: {
                        ...data?.acf?.section1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section1?.descriptions)?.map((v) =>
                            stripInitialTags(v)
                        )
                    },
                    section2: {
                        ...data?.acf?.section2,
                        specialties: data.acf.section2?.specialties.map((item) => {
                            return {
                                ...item,
                                items: convertArrayOfObjectsToStrings(item.items)?.map((v) => stripInitialTags(v))
                            };
                        })
                    },
                    section3: {
                        ...data?.acf?.section3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section3?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf?.section3?.list)
                    },
                    section5: {
                        ...data?.acf?.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section5?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf?.section5?.list)
                    },
                    section6: {
                        ...data?.acf?.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section6?.descriptions)
                    },
                    section7: {
                        ...data?.acf?.section7,
                        list: convertArrayOfObjectsToStrings(data?.acf?.section7?.list)
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
