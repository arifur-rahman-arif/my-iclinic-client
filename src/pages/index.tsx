import { Card, cardList } from '@/components/Card';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { SideImageSection } from '@/components/page-sections';
import { journeySliderListHome } from '@/components/Slider/JourneySlider/journeySliderList';
import { getPageData } from '@/lib';
import BlurPrevention from '@/page-sections/HomePage/BlurPrevention';
import FundingTreatment from '@/page-sections/HomePage/FundingTreatment';
import OurMission from '@/page-sections/HomePage/OurMission';
import SurgerySection from '@/page-sections/HomePage/SurgerySection';
import VisionCorrection from '@/page-sections/HomePage/VisionCorrection';
import Masthead3 from '@/page-sections/Masthead/Masthead3';
import UspSection from '@/page-sections/Usp/UspSection';
import { HomeContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import TripleWinSection from 'src/components/page-sections/HomePage/TripleWinSection';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';

const SpeakToSpecialist = dynamic(() => import('@/page-sections/HomePage/SpeakToSpecialist'), {
    loading: () => <ComponentLoader />
});

const EnvironmentalImpact = dynamic(() => import('@/page-sections/HomePage/EnvironmentalImpact'), {
    loading: () => <ComponentLoader />
});

const JourneySlider = dynamic(() => import('@/components/Slider/JourneySlider/JourneySlider'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends HomeContentInterface, PageDataInterface<HomeContentInterface> {}

interface HomeProps {
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
export default function Home({ seo, yoastJson, data }: HomeProps): JSX.Element {
    const cardListData: any = data?.private_eye_card
        ? data?.private_eye_card.map((service) => {
              return {
                  ...service,
                  title: HTMLReactParser(service?.title),
                  pillText: service?.pillText,
                  cardList: stringArrayToElementArray(service?.cardList),
                  image: service?.image,
                  cardLink: service?.cardLink
              };
          })
        : null;

    return (
        <Page title="Home" seo={seo} yoastJson={yoastJson}>
            <Masthead3
                title={'London private eye clinic'}
                subTitle={'Premium eye care for all the family'}
                image={''}
            />

            <SurgerySection />

            {/*  Private Eye */}
            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading || 'Private Eye'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'Care Services'}
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <div className="grid justify-center gap-6 md:mt-12  md:grid-cols-[auto_auto] xl:grid-cols-3">
                        {(cardListData?.length ? cardListData : cardList).map((card: any, key: any) => (
                            <Card key={key} {...card} />
                        ))}
                    </div>
                }
            />

            <UspSection />

            <VisionCorrection />

            <TripleWinSection />

            <LazyComponent>
                <JourneySlider sliderList={journeySliderListHome} />
            </LazyComponent>

            <LazyComponent>
                <SpeakToSpecialist />
            </LazyComponent>

            <OurMission />

            <LazyComponent>
                <EnvironmentalImpact />
            </LazyComponent>

            <FundingTreatment />

            <BlurPrevention />
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
        const data: WpPageResponseInterface<HomeContentInterface> = await getPageData({ slug: 'home' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || null,
                yoastJson: data?.yoast_head_json || null,
                data: {
                    ...data?.acf,
                    private_eye_card: Array.isArray(data?.acf?.private_eye_card)
                        ? data?.acf.private_eye_card.map((sectionData) => {
                              return {
                                  ...sectionData,
                                  cardList: convertArrayOfObjectsToStrings(sectionData?.cardList)
                              };
                          })
                        : []
                }
                // data: {
                //     ...data?.acf,
                //     private_eye_card: Array.isArray(data?.acf?.private_eye_card)
                //         ? data?.acf.private_eye_card.map((sectionData) => {
                //               return {
                //                   ...sectionData,
                //                   cardList: convertArrayOfObjectsToStrings(sectionData?.cardList)
                //               };
                //           })
                //         : []
                // }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
