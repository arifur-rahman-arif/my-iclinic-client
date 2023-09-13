import { Card, cardList } from '@/components/Card';
import { CardInterface } from '@/components/Card/Card';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    ClimateChange,
    CompanyLogos2,
    ImageGallery,
    ImageSliderSectionPart,
    PlasticFree,
    SideImageSection,
    SideVideoSection2
} from '@/components/page-sections';
import { journeySliderListHome } from '@/components/Slider/JourneySlider/journeySliderList';
import { offScreenSliderList } from '@/components/Slider/OffscreenSlider/offScreenSliderList';
import { getPageData } from '@/lib';
import SurgerySection from '@/page-sections/HomePage/SurgerySection';
import { galleryListHome } from '@/page-sections/ImageGallery';
import { sliderListHome } from '@/page-sections/SectionParts/image-slider/sliderList';
import UspSection from '@/page-sections/Usp/UspSection';
import { HomeContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Key } from 'react';
import Masthead2 from 'src/components/page-sections/Masthead/Masthead2';

const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
    loading: () => <ComponentLoader />
});
const JourneySlider = dynamic(() => import('@/components/Slider/JourneySlider/JourneySlider'), {
    loading: () => <ComponentLoader />
});
const OffScreenSliderSection = dynamic(() => import('@/page-sections/OffScreenSlider/OffScreenSliderSection2'), {
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
    const heading = data?.masthead_heading || 'North Londons Private Eye Clinic';
    const subheading = data?.masthead_subheading || 'Premium eye care for all the family';

    // JOURNEY SLIDER
    const journeySliderData: any = data?.journeySlider ?
        data?.journeySlider.map((service) => {
            return {
                ...service,
                title: service?.title,
                description: stringArrayToElementArray(service?.list),
                image: service?.image
            };
        }) :
        null;

    // MISSION SLIDER
    const missionimageSlider: any = data?.imageSlider ?
        data?.imageSlider.map((service) => {
            return {
                //   ...service,
                image: {
                    url: service?.image,
                    width: 390,
                    height: 390
                },
                largeImage: {
                    url: service?.largeImage,
                    width: 660,
                    height: 485
                }
            };
        }) :
        null;

    const cardListData: any = data?.private_eye_card ?
        data?.private_eye_card.map((service) => {
            return {
                ...service,
                title: HTMLReactParser(service?.title),
                pillText: service?.pillText,
                cardList: stringArrayToElementArray(service?.cardList),
                image: service?.image,
                cardLink: service?.cardLink
            };
        }) :
        null;

    return (
        <Page
            title="London's No1 Eye Clinic For Laser Eye Surgery & Vision Correction"
            description="Trusted private eye clinic in London. We offer Laser Eye Surgery & corrective eye surgery for adults & children - 0% Finance options."
            seo={seo}
            yoastJson={yoastJson}
        >
            <Masthead2
                title={heading}
                subTitle={subheading}
                image={data?.masthead_image?.image_medium?.url}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
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
                    <>
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] justify-items-center gap-x-12 gap-y-6 md:mt-12 lg:grid-cols-[repeat(auto-fit,_minmax(37rem,_1fr))]">
                            {((cardListData?.length && cardListData) || cardList).map(
                                (list: JSX.IntrinsicAttributes & CardInterface, index: Key | null | undefined) => (
                                    <Card key={index} {...list} />
                                )
                            )}
                        </div>
                        {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] justify-items-center gap-x-12 gap-y-6 md:mt-12 lg:grid-cols-[repeat(auto-fit,_minmax(37rem,_1fr))]">
                            {cardList.map((list, index) => (
                                <Card key={index} {...list} />
                            ))}
                        </div>
                         */}
                    </>
                }
            />
            <UspSection />
            <SideVideoSection2
                title={
                    <strong className="block text-white sm:max-w-[58.2rem]">
                        {data?.section_2?.heading || 'Are you considering Vision Correction Treatment?'}
                    </strong>
                }
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We have the latest vision correction treatments to achieve clear vision at all distances for all ages.`,
                        `Book your <a href='/suitability-check' class='!text-white'>FREE suitability</a> check today to find out if you are suitable for our ReLEx SMILE, Presbyond, Implantable Contact Lenses or LASIK vision correction treatments.`
                    ]
                }
                containerClassName="md:!pl-[15rem]"
                textColor="!text-white"
                sloganTextColor="!text-[#CDCFD0]"
                bgColor="bg-[#00527c]"
                button1ClassName="!bg-white !border-white hover:!bg-[#00527c] hover:!border-white hover:text-white"
                button2ClassName="!border-white !bg-transparent text-white"
                button2Icon={
                    <Image
                        src="/images/icons/icon-phone-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        quality={2}
                        className="h-8 w-8"
                    />
                }
                hoverIcon={<Image src="/images/icons/icon-calendar-outline-white.svg" alt="" width={20} height={20} />}
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/image-eye-outline.png',
                    width: 364,
                    height: 258
                }}
                sectionImageLarge={{
                    url: data?.section_2?.large_image || '/images/section-images/image-eye-outline-large.png',
                    width: 496,
                    height: 350
                }}
            />
            <ImageGallery galleryList={galleryListHome} />
            {/* SAVING SLIDER SECTION -- */}
            <LazyComponent>
                <OffScreenSliderSection sliderList={offScreenSliderList} />
            </LazyComponent>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <LazyComponent>
                <JourneySlider sliderList={(journeySliderData?.length && journeySliderData) || journeySliderListHome} />
            </LazyComponent>
            <div className="w-full md:h-[0.1rem] lg:mt-12"></div>
            {/* <Section> */}
            {/*     <Container className=""> */}
            {/*         <LazyComponent> */}
            {/*             <GridSlider> */}
            {/*                 {card2List.map((list, index) => ( */}
            {/*                     <Card2 key={index} {...list} /> */}
            {/*                 ))} */}
            {/*             </GridSlider> */}
            {/*         </LazyComponent> */}
            {/*     </Container> */}
            {/* </Section> */}
            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_3?.heading?.light_heading || 'Our'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'Mission'}
                descriptions={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        'For the past ten years My-iClinic has provided excellent patient care for anybody wanting clear, natural vision.',
                        'With leading opthalmologists Mr. Bolger and Ms. Odufuwa-Bolger, our North London team is here to make sure every patient receives the best treatment suitable for their eye health.',
                        'We understand how delicate and important our eyes are, which is why we with you through every step of your patient journey.'
                    ]
                }
                sectionClass="pb-12 md:pb-0 overflow-hidden"
                containerClassName="!px-0"
                textColumnClassName="px-8"
                customColumn={
                    <ImageSliderSectionPart
                        sliderList={(missionimageSlider?.length && missionimageSlider) || sliderListHome}
                    />
                }
            />
            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.light_heading ||
                            'Vision correction is the key to living'
                        }
                        h3BoldHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.bold_heading ||
                            'a sustainable, plastic free life!'
                        }
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section?.plastic_free_life?.descriptions
                                )) || [
                                `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                    free of plastic waste from your glasses and contact lenses!`
                            ]
                        }
                    />

                    <SideImageSection
                        h2Heading={data?.sustainability_section?.gift_of_a_tree?.subheading || 'gift of a tree'}
                        h3LightHeading={
                            (data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading?.length &&
                                HTMLReactParser(
                                    data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading
                                )) ||
                            HTMLReactParser('Saving the planet <br />')
                        }
                        h3BoldHeading={
                            (data?.sustainability_section?.gift_of_a_tree?.heading?.bold_heading?.length &&
                                HTMLReactParser(data?.sustainability_section?.gift_of_a_tree?.heading?.bold_heading)) ||
                            HTMLReactParser('One eye at a time!')
                        }
                        descriptions={
                            (data?.sustainability_section?.gift_of_a_tree?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section?.gift_of_a_tree?.descriptions
                                )) || [
                                `When undergoing laser eye surgery, you may not realize it but you are already making a positive
                     difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                      that ends up in the ocean is roughly the same as your own body weight.`,
                                <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    Our gift to you…
                                </span>,
                                `We want to take our impact on the environment a step further and this is where the gift of a tree comes in!`,
                                <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    Here at My-iClinic we give all of our laser patients a real forest tree!
                                </span>,
                                `Over your tree’s long life, you can visit it, introduce it to your family and track its growth and
                     value! Over the lifetime of the tree, it will more than offset the carbon you've used with your
                      contacts/glasses. When the tree is harvested, its value will be yours and new trees are planted
                      to replace it.`,
                                `This is our big thank you for choosing a natural, green living eye-style.`
                            ]
                        }
                        sectionImage={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.image?.url ||
                                '/images/section-images/gift-of-a-tree.png',
                            width: 390,
                            height: 390
                        }}
                        sectionImageDesktop={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.large_image?.url ||
                                '/images/section-images/gift-of-a-tree-desktop.png',
                            width: 554,
                            height: 496
                        }}
                        altText={
                            data?.sustainability_section?.gift_of_a_tree?.large_image?.alt ||
                            'Beautiful forest. Climate change awareness from plastic glasses and contact lenses.'
                        }
                    />
                    <ClimateChange
                        h2Heading={data?.sustainability_section?.clearer_vision?.subheading}
                        h3LightHeading={data?.sustainability_section?.clearer_vision?.heading?.light_heading}
                        h3BoldHeading={data?.sustainability_section?.clearer_vision?.heading?.bold_heading}
                        image={data?.sustainability_section?.clearer_vision?.image?.url}
                        largeImage={data?.sustainability_section?.clearer_vision?.large_image?.url}
                        descriptions={data?.sustainability_section?.clearer_vision?.descriptions}
                    />
                </SustainableSlider>

                <CompanyLogos2 />
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
        const data: WpPageResponseInterface<HomeContentInterface> = await getPageData({ slug: 'home' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || null,
                yoastJson: data?.yoast_head_json || null,
                //Private consultation
                data: {
                    ...data?.acf,
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // CORNEA CONSULTATION
                    section_2: {
                        ...data?.acf?.section_2,
                        // lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // EYES CARD
                    private_eye_card: Array.isArray(data?.acf?.private_eye_card)
                        ? data?.acf.private_eye_card.map((sectionData) => {
                              return {
                                  ...sectionData,
                                  cardList: convertArrayOfObjectsToStrings(sectionData?.cardList)
                              };
                          })
                        : [],
                    savingsliderSection: Array.isArray(data?.acf?.savingsliderSection)
                        ? data?.acf.savingsliderSection.map((sliderData) => {
                              return {
                                  ...sliderData
                                  //   description: convertArrayOfObjectsToStrings(sliderData?.description)
                              };
                          })
                        : [],
                    journeySlider: Array.isArray(data?.acf?.journeySlider)
                        ? data?.acf.journeySlider.map((sliderData) => {
                              return {
                                  ...sliderData,
                                  list: convertArrayOfObjectsToStrings(sliderData?.list)
                              };
                          })
                        : [],
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    },
                    imageSlider: Array.isArray(data?.acf?.imageSlider)
                        ? data?.acf.imageSlider.map((sliderData) => {
                              return {
                                  ...sliderData
                                  //   description: convertArrayOfObjectsToStrings(sliderData?.description)
                              };
                          })
                        : [],
                    sustainability_section: {
                        plastic_free_life: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.plastic_free_life.descriptions
                            )
                        },
                        gift_of_a_tree: {
                            ...data?.acf?.sustainability_section?.gift_of_a_tree,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.gift_of_a_tree.descriptions
                            )
                        },
                        clearer_vision: {
                            ...data?.acf?.sustainability_section?.clearer_vision,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.clearer_vision.descriptions
                            )
                        }
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
