import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { PercentageRounded } from '@/components/Progressbar';
import { premiumListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-premium-lenses-large.png';
import MastheadImageSmall from '@/masthead/masthead-premium-lenses-small.png';
import MastheadImageMedium from '@/masthead/masthead-premium-lenses.png';
import { premiumLensesFaqList } from '@/page-sections/Faq/faqList';
import { galleryListPremiumLens } from '@/page-sections/ImageGallery';
import {
    BulletPoint,
    CtaSection2,
    ImageGallery,
    Masthead,
    SideImageSection,
    SideVideoSection2
} from '@/page-sections/index';
import { leftRightListPremiumLenses } from '@/page-sections/LeftRight/leftRightList';
import PremiumLense1 from '@/section-images/premium-lense-1.png';
import PremiumLense2 from '@/section-images/premium-lense-2.png';
import PremiumLense3 from '@/section-images/premium-lense-3.png';
import PremiumLense4 from '@/section-images/premium-lense-4.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const LottieSection = dynamic(() => import('@/page-sections/LottieSection/LottieSection'), {
    loading: () => <ComponentLoader />
});
const CompareSlider = dynamic(() => import('@/page-sections/CompareSlider/CompareSlider'), {
    loading: () => <ComponentLoader />
});

interface PremiumLensesProps {
    seo: any;
    yoastJson: any;
}

/**
 *
 * Url: /premium-lenses
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PremiumLenses({ seo, yoastJson }: PremiumLensesProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Independence from glasses after Cataract surgery London';
    const subheading = 'Be independent from wearing glasses after your cataract surgery';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Premium Lenses"
            description="Be independent from wearing glasses after your cataract surgery"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0 blur-sm" key={index}>
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
                priceText="£300 per eye"
                // ExcludePriceComponent
                // list={['EDOF', 'Monofocal', 'Multifocals', 'Presbyond']}
            />

            {/* <FinanceCalculator /> */}

            <Container className="mt-36">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Talk to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <SideImageSection
                h2Heading="Be Glasses free"
                h3LightHeading={
                    <>
                        Presbyond laser
                        <br />
                        Treatment
                        <br />
                    </>
                }
                h3BoldHeading="After cataract surgery"
                descriptions={[
                    `We provide Presbyond laser eye treatment after cataract surgery`,
                    `Presbyond uses a blend zone technology which corrects the near, intermediate and distance sight and helps cataract patients adjust to all points of sight after their surgery.`,
                    `This option is best suited to people with cataracts who have a very active lifestyle and want to continue their work, hobbies and driving without compromising their vision with glasses.`,
                    <span className="flex items-center justify-start gap-4">
                        <LinkText href="#" indicatorColor="bg-blue" className="!font-mulishBold text-blue">
                            See Presbyond treatment
                        </LinkText>
                        <BsArrowRightShort className="h-10 w-10 translate-y-[0.1rem] fill-blue text-blue" />
                    </span>
                ]}
                sectionImage={{
                    url: '/images/section-images/laser-treatment-presbyond.png',
                    width: 388,
                    height: 469
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/laser-treatment-presbyond-large.png',
                    width: 659,
                    height: 687
                }}
                positionReversed={true}
                midExtras={
                    <>
                        <div className="flex items-center justify-start gap-6">
                            <PercentageRounded percentage={98} />

                            <span className="max-w-[13rem] font-mulishExtraBold text-[1.6rem] uppercase leading-[1.6rem] text-heading2">
                                independence from glasses
                            </span>
                        </div>
                        <H4Variant1>Be glasses free after cataract surgery</H4Variant1>
                    </>
                }
            />

            <LazyComponent triggerPosition={500}>
                <LottieSection />
            </LazyComponent>

            <SideVideoSection2
                title="You might be considering laser eye surgery to be completely independent from your glasses after
                    removing your cataracts"
                descriptions={[
                    'We provide the perfect laser treatment for seeing near, intermediate and distance vision altogether without artificial lens implantation.'
                ]}
            />

            <SideImageSection
                h2Heading="improve your VISION"
                h3LightHeading="Premium lenses we provide for"
                h3BoldHeading="Your cataract surgery"
                customColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{ src: '/images/section-images/compare-slider-1.png', width: 617, height: 509 }}
                            image2={{ src: '/images/section-images/compare-slider-2.png', width: 617, height: 509 }}
                        />
                    </LazyComponent>
                }
                descriptions={[
                    <>
                        Our premium lenses <strong>come at an extra cost</strong> added to your cataract surgery price.
                        Depending on the lenses and suitability for your vision, our cataract specialist will be able to
                        disclose the <strong>lens prices that are suitable for you.</strong>
                    </>,
                    <>
                        Depending on the implants a person is suitable for, our cataract patients have achieved much
                        better vision by choosing EDoF, Torric, Multifocal, Monofocal or Trifocal lenses.
                    </>
                ]}
                // VideoPoster="klRodGzUVCU"
                // videoUrl="/videos/premium-lenses.mp4"
                midExtras={
                    <div className="flex flex-wrap items-center justify-start gap-12">
                        <div className="flex items-center justify-start gap-6">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">Edof</span>
                        </div>
                        <div className="flex items-center justify-start gap-6">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">
                                Multifocals
                            </span>
                        </div>
                        <div className="flex items-center justify-start gap-6">
                            <BulletPoint className="!translate-y-[0.1rem]" />
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem]">Monofocal</span>
                        </div>
                    </div>
                }
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                        <Image src={PremiumLense1} alt="" className="rounded-primary" />
                        <Image src={PremiumLense2} alt="" className="rounded-primary" />
                        <Image src={PremiumLense3} alt="" className="rounded-primary" />
                        <Image src={PremiumLense4} alt="" className="rounded-primary" />
                    </div>
                }
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListPremiumLenses} />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={premiumListCataract} />
            </LazyComponent>

            <CtaSection2 title="Do you think Premium lenses could be the right treatment for you?" />

            <ImageGallery galleryList={galleryListPremiumLens} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload title={<>Get the guide to Premium lenses treatment</>} />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={premiumLensesFaqList}
                    titleLight="Premium Lenses Frequently"
                    titleBold="Asked Questions"
                    description="Have a question? We are here to help."
                />
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
        const data: WpPageResponseInterface<any> = await getPageData();

        return {
            /* eslint-disable */
            props: {
                seo: data.yoast_head,
                yoastJson: data.yoast_head_json
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
