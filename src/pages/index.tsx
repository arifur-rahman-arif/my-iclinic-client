import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Card, cardList } from '@/components/Card';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    ClimateChange,
    CompanyLogos2,
    ImageGallery,
    ImageSliderSectionPart,
    Masthead,
    PlasticFree,
    SideImageSection,
    SideVideoSection2
} from '@/components/page-sections';
import { journeySliderListHome } from '@/components/Slider/JourneySlider/journeySliderList';
import { offScreenSliderList } from '@/components/Slider/OffscreenSlider/offScreenSliderList';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-home-large.png';
import MastheadImageSmall from '@/masthead/masthead-home-small.png';
import MastheadImageMedium from '@/masthead/masthead-home.png';
import { galleryListHome } from '@/page-sections/ImageGallery';
import { sliderListHome } from '@/page-sections/SectionParts/image-slider/sliderList';
import { WpPageResponseInterface } from '@/types';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
    loading: () => <ComponentLoader />
});
const JourneySlider = dynamic(() => import('@/components/Slider/JourneySlider/JourneySlider'), {
    loading: () => <ComponentLoader />
});
const OffScreenSliderSection = dynamic(() => import('@/page-sections/OffScreenSlider/OffScreenSliderSection'), {
    loading: () => <ComponentLoader />
});

// export const config = {
//     unstable_JsPreload: false
// };

interface HomeProps {
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
export default function Home({ seo, yoastJson }: HomeProps): JSX.Element {
    const heading = "North London's Eye Hospital";
    const subheading = 'Premium eye care for all the family';

    return (
        <Page
            title="Top Rated Eye Surgery Specialists London"
            description="Our specialist consultants offer a selection of laser eye surgery and lens surgery treatments that allow you to discover crystal clear vision."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] 2xl:!object-contain"
                h1Title={
                    <h1 className="flex flex-wrap gap-4 sm:max-w-[35rem]">
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
                bannerExtraComponents={
                    <>
                        <Button
                            type="button"
                            text="Chat with us"
                            iconPosition="left"
                            className="justify-self-start normal-case"
                            icon={
                                <Image
                                    src="/images/icons/icon-chat.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                            onClick={openFreshdeskChat}
                        />
                    </>
                }
            />

            {/* <UspSection list={homeUspList} /> */}

            <SideImageSection
                h3LightHeading={
                    <>
                        Private Eye
                        <br />
                    </>
                }
                h3BoldHeading="Care Services"
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] justify-items-center gap-x-12 gap-y-6 lg:grid-cols-[repeat(auto-fit,_minmax(37rem,_1fr))]">
                        {cardList.map((list, index) => (
                            <Card key={index} {...list} />
                        ))}
                    </div>
                }
            />

            <SideVideoSection2
                title={
                    <strong className="block text-white sm:max-w-[58.2rem]">
                        Are you considering Vision Correction Treatment?
                    </strong>
                }
                descriptions={[
                    'We have the latest vision correction treatments to achieve clear vision at all distances for all ages.',
                    'Book your FREE suitability check today to find out if you are suitable for our ReLEx SMILE, Presbyond, Implantable Contact Lenses or LASIK vision correction treatments.'
                ]}
                containerClassName="md:!pl-[15rem]"
                textColor="!text-white"
                sloganTextColor="!text-[#83DFE5]"
                bgColor="bg-[#004574]"
                button1ClassName="!bg-white !border-white hover:!bg-[#004574] hover:!border-white hover:text-white"
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
                    url: '/images/section-images/image-eye-outline.png',
                    width: 364,
                    height: 258
                }}
                sectionImageLarge={{
                    url: '/images/section-images/image-eye-outline-large.png',
                    width: 496,
                    height: 350
                }}
            />

            <ImageGallery galleryList={galleryListHome} />

            {/* <LazyComponent> */}
            {/*     <OffScreenSliderSection sliderList={offScreenSliderList} /> */}
            {/* </LazyComponent> */}

            <LazyComponent>
                <OffScreenSliderSection sliderList={offScreenSliderList} />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={
                    <>
                        Your journey
                        <br />
                    </>
                }
                h3BoldHeading="in our clinic"
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <LazyComponent>
                        <JourneySlider sliderList={journeySliderListHome} />
                    </LazyComponent>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-16"></div>

            <LazyComponent>
                <CallbackSection />
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
                        Our
                        <br />
                    </>
                }
                h3BoldHeading="Mission"
                descriptions={[
                    'For the past ten years My-iClinic has provided excellent patient care for anybody wanting clear, natural vision.',
                    'With leading opthalmologists Mr. Bolger and Ms. Odufuwa-Bolger, our North London team is here to make sure every patient receives the best treatment suitable for their eye health.',
                    'We understand how delicate and important our eyes are, which is why we with you through every step of your patient journey.'
                ]}
                sectionClass="bg-brandLight pb-12 md:pb-0 overflow-hidden"
                containerClassName="!px-0"
                textColumnClassName="px-8 md:px-0"
                customColumn={<ImageSliderSectionPart sliderList={sliderListHome} />}
            />

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading="Vision correction is the key to living"
                        h3BoldHeading="a sustainable, plastic free life!"
                        descriptions={[
                            `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                    free of plastic waste from your glasses and contact lenses!`
                        ]}
                    />

                    <SideImageSection
                        h2Heading="gift of a tree"
                        h3LightHeading={
                            <>
                                Saving the planet
                                <br />
                            </>
                        }
                        h3BoldHeading="One eye at a time!"
                        descriptions={[
                            `Here at My-iClinic we give all of our laser patients a very special gift to go with your brand-new eyes,
                    a tree! When undergoing laser eye surgery, you may not realize but you are already making a positive difference to the environment.`,
                            `For every 10 years of contact lens wear the amount of plastic that ends up in the ocean is roughly the same as your own body weight.`
                        ]}
                        sectionImage={{
                            url: '/images/section-images/gift-of-a-tree.png',
                            width: 390,
                            height: 390
                        }}
                        sectionImageDesktop={{
                            url: '/images/section-images/gift-of-a-tree-desktop.png',
                            width: 554,
                            height: 496
                        }}
                        textColumnExtras={
                            <div className="grid gap-6">
                                <span className="max-w-[44.5rem]  font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    We want to take our impact on the environment a step further and this is where the
                                    gift of a tree comes in!
                                </span>
                            </div>
                        }
                    />
                    <ClimateChange />
                </SustainableSlider>

                {/* <Section> */}
                {/*     <Container className="grid gap-12 justify-center"> */}
                {/*         <h2 className="normal-case text-center"> */}
                {/*             Funding your <strong>treatment</strong> */}
                {/*         </h2> */}
                {/*         <Button */}
                {/*             type="button" */}
                {/*             text="Select a treatment" */}
                {/*             className="normal-case !bg-transparent justify-self-center" */}
                {/*             iconPosition="right" */}
                {/*             icon={ */}
                {/*                 <Image src="/images/icons/icon-arrow-circle-down.svg" alt="" width={24} height={24} /> */}
                {/*             } */}
                {/*         /> */}
                {/*     </Container> */}
                {/* </Section> */}
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'home' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || null,
                yoastJson: data?.yoast_head_json || null
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
