import { Card, cardList } from '@/components/Card';
import { CardInterface } from '@/components/Card/Card';
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
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { Key } from 'react';
import TripleWinSection from 'src/components/page-sections/HomePage/TripleWinSection';

// const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
//     loading: () => <ComponentLoader />
// });

const SpeakToSpecialist = dynamic(() => import('@/page-sections/HomePage/SpeakToSpecialist'), {
    loading: () => <ComponentLoader />
});

const EnvironmentalImpact = dynamic(() => import('@/page-sections/HomePage/EnvironmentalImpact'), {
    loading: () => <ComponentLoader />
});
//
// const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
//     loading: () => <ComponentLoader />
// });
const JourneySlider = dynamic(() => import('@/components/Slider/JourneySlider/JourneySlider'), {
    loading: () => <ComponentLoader />
});
// const OffScreenSliderSection = dynamic(() => import('@/page-sections/OffScreenSlider/OffScreenSliderSection2'), {
//     loading: () => <ComponentLoader />
// });
// const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
//     loading: () => <ComponentLoader />
// });

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
    // JOURNEY SLIDER
    const journeySliderData: any = data?.journeySlider
        ? data?.journeySlider.map((service) => {
              return {
                  ...service,
                  title: service?.title,
                  description: stringArrayToElementArray(service?.list),
                  image: service?.image
              };
          })
        : null;

    // MISSION SLIDER
    // const missionimageSlider: any = data?.imageSlider ?
    //     data?.imageSlider.map((service) => {
    //         return {
    //             //   ...service,
    //             image: {
    //                 url: service?.image,
    //                 width: 390,
    //                 height: 390
    //             },
    //             largeImage: {
    //                 url: service?.largeImage,
    //                 width: 660,
    //                 height: 485
    //             }
    //         };
    //     }) :
    //     null;

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
        <Page
            title="London's No1 Eye Clinic For Laser Eye Surgery & Vision Correction"
            description="Trusted private eye clinic in London. We offer Laser Eye Surgery & corrective eye surgery for adults & children - 0% Finance options."
            seo={seo}
            yoastJson={yoastJson}
        >
            <Masthead3
                title="London private eye clinic"
                subTitle="Premium eye care for all the family"
                image="/images/masthead/masthead-home-large.png"
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
                        {((cardListData?.length && cardListData) || cardList).map(
                            (list: JSX.IntrinsicAttributes & CardInterface, index: Key | null | undefined) => (
                                <Card key={index} {...list} />
                            )
                        )}
                    </div>
                }
            />

            <UspSection />

            <VisionCorrection />

            <TripleWinSection />

            {/* /!* SAVING SLIDER SECTION -- *!/ */}
            {/* <LazyComponent> */}
            {/*     <OffScreenSliderSection sliderList={offScreenSliderList} /> */}
            {/* </LazyComponent> */}

            <LazyComponent>
                <JourneySlider sliderList={(journeySliderData?.length && journeySliderData) || journeySliderListHome} />
            </LazyComponent>

            {/* <LazyComponent> */}
            {/*     <CallbackSection /> */}
            {/* </LazyComponent>  */}
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
                    // section_1: {
                    //     ...data?.acf?.section_1,
                    //     descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    // }, // CORNEA CONSULTATION
                    // section_2: {
                    //     ...data?.acf?.section_2,
                    //     // lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                    //     descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    // }, // EYES CARD
                    private_eye_card: Array.isArray(data?.acf?.private_eye_card)
                        ? data?.acf.private_eye_card.map((sectionData) => {
                              return {
                                  ...sectionData,
                                  cardList: convertArrayOfObjectsToStrings(sectionData?.cardList)
                              };
                          })
                        : [],
                    // savingsliderSection: Array.isArray(data?.acf?.savingsliderSection)
                    //     ? data?.acf.savingsliderSection.map((sliderData) => {
                    //           return {
                    //               ...sliderData
                    //               //   description: convertArrayOfObjectsToStrings(sliderData?.description)
                    //           };
                    //       })
                    //     : [],
                    journeySlider: Array.isArray(data?.acf?.journeySlider)
                        ? data?.acf.journeySlider.map((sliderData) => {
                              return {
                                  ...sliderData,
                                  list: convertArrayOfObjectsToStrings(sliderData?.list)
                              };
                          })
                        : []
                    // section_3: {
                    //     ...data?.acf?.section_3,
                    //     descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    // },
                    // imageSlider: Array.isArray(data?.acf?.imageSlider)
                    //     ? data?.acf.imageSlider.map((sliderData) => {
                    //           return {
                    //               ...sliderData
                    //               //   description: convertArrayOfObjectsToStrings(sliderData?.description)
                    //           };
                    //       })
                    //     : [],
                    // sustainability_section: {
                    //     plastic_free_life: {
                    //         ...data?.acf?.sustainability_section?.plastic_free_life,
                    //         descriptions: convertArrayOfObjectsToStrings(
                    //             data?.acf?.sustainability_section?.plastic_free_life.descriptions
                    //         )
                    //     },
                    //     gift_of_a_tree: {
                    //         ...data?.acf?.sustainability_section?.gift_of_a_tree,
                    //         descriptions: convertArrayOfObjectsToStrings(
                    //             data?.acf?.sustainability_section?.gift_of_a_tree.descriptions
                    //         )
                    //     },
                    //     clearer_vision: {
                    //         ...data?.acf?.sustainability_section?.clearer_vision,
                    //         descriptions: convertArrayOfObjectsToStrings(
                    //             data?.acf?.sustainability_section?.clearer_vision.descriptions
                    //         )
                    //     }
                    // }
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
