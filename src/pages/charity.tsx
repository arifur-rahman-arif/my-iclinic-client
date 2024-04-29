import Page from '@/components/Page';
import { getPageData } from '@/lib';
import AmrAwarenessCampaign from '@/page-sections/CharityComponents/AmrAwarenessCampaign';
import AntibioticResistance from '@/page-sections/CharityComponents/AntibioticResistance';
import Celebration from '@/page-sections/CharityComponents/Celebration';
import ImpactBeyondBorders from '@/page-sections/CharityComponents/impactBeyondBorders';
import JoinTheFight from '@/page-sections/CharityComponents/JoinTheFight';
import ProjectOverview from '@/page-sections/CharityComponents/ProjectOverview';
import SupportOurMission from '@/page-sections/CharityComponents/SupportOurMission';
import MastheadCharity from '@/page-sections/Masthead/MastheadCharity';
import { CharityPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import React from 'react';

interface DataInterface extends CharityPageContentInterface, PageDataInterface<CharityPageContentInterface> {}

interface PageProps {
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
export default function LaserEyeSurgery({ seo, yoastJson, data }: PageProps): JSX.Element {
    const heading = data?.masthead_heading || 'My-iClinic Charity';
    const subheading = data?.masthead_subheading || 'Reducing or eliminating the need for glasses or contact lenses';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <MastheadCharity {...data.masthead} />

            <ProjectOverview {...data.section1} />

            <AntibioticResistance {...data.section2} />

            <AmrAwarenessCampaign {...data?.section3} />

            <ImpactBeyondBorders {...data?.section4} />

            <Celebration {...data?.section5} />

            <JoinTheFight {...data?.section7} />

            <SupportOurMission {...data?.section6} />
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
        const data: WpPageResponseInterface<CharityPageContentInterface> = await getPageData({
            slug: 'charity'
        });

        /**
         * Sort the image data into specified format
         * @param {any} img
         * @returns {{src: any, width: any, height: any}}
         */
        return {
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        description: stripInitialTags(data.acf?.masthead?.description || ''),
                        image: {
                            ...(data?.acf?.masthead?.image && formatImage(data.acf?.masthead?.image))
                        }
                    },
                    section1: {
                        ...data?.acf?.section1,
                        cards: data?.acf?.section1?.cards
                            ? data.acf.section1.cards.map((card) => ({
                                  ...card,
                                  image: card?.image && formatImage(card.image),
                                  description: stripInitialTags(card.description)
                              }))
                            : null
                    },
                    section2: {
                        ...data?.acf?.section2,
                        image: {
                            ...(data?.acf?.section2?.image && formatImage(data.acf.section2.image))
                        }
                    },
                    section3: {
                        ...data?.acf?.section3,
                        image: {
                            ...(data?.acf?.section3?.image && formatImage(data.acf.section3.image))
                        },
                        introduction: stripInitialTags(data?.acf?.section3?.introduction || ''),
                        description: stripInitialTags(data?.acf?.section3?.description || '')
                    },
                    section4: {
                        ...data?.acf?.section4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        list: convertArrayOfObjectsToStrings(data?.acf?.section4?.list).map((item) =>
                            stripInitialTags(item)
                        ),
                        videoPoster: {
                            ...(data?.acf?.section4?.videoPoster && formatImage(data.acf.section4.videoPoster))
                        }
                    },
                    section5: {
                        ...data?.acf?.section5,
                        heading: {
                            ...(data?.acf?.section5?.heading && formatImage(data.acf.section5.heading))
                        },
                        profile1: {
                            ...data?.acf?.section5?.profile1,
                            image: {
                                ...(data?.acf?.section5?.profile1?.image &&
                                    formatImage(data.acf.section5?.profile1.image))
                            }
                        },
                        profile2: {
                            ...data?.acf?.section5?.profile2,
                            image: {
                                ...(data?.acf?.section5?.profile2?.image &&
                                    formatImage(data.acf.section5?.profile2.image))
                            }
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
                        description: stripInitialTags(data?.acf?.section7?.description || '')
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
