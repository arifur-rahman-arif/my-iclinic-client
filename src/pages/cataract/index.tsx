import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import {
    CtaSection,
    CtaSection2,
    FinanceExtra,
    FullWidthImageSection,
    HalfRoundedCard,
    Masthead,
    SideImageSection
} from '@/components/page-sections';
import { cataractFaqList } from '@/components/page-sections/Faq/faqList';
import { leftRightListCataract } from '@/components/page-sections/LeftRight/leftRightList';
import { normalSlideListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-cataract-large.png';
import MastheadImageSmall from '@/masthead/masthead-cataract-small.png';
import MastheadImageMedium from '@/masthead/masthead-cataract.png';
import SimpleProcessImageLarge from '@/section-images/simple-process-cataract-large.png';
import SimpleProcessImage from '@/section-images/simple-process-cataract.png';
import { WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/components/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/components/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});

interface CataractProps {
    data: any;
    seo: any;
    yoastJson: any;
}

/**
 * Lasik page component for the App
 *
 * * Url: /cataract
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Cataract({ data, seo, yoastJson }: CataractProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Private Cataract Surgery London';
    const subheading = data?.masthead_subheading || 'We’re here to make cataract surgery easy';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title="Cataract" description="We’re here to make cataract surgery easy" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word: string, index: number) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word: string, index: number) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText={data?.masthead_price || '£2,400 per eye'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Talk to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.section_1_title ? (
                            HTMLReactParser(data.section_1_title)
                        ) : (
                            <>
                                A simple process to
                                <br /> living cataract-free
                            </>
                        )}
                    </>
                }
                altText=""
                image={SimpleProcessImage}
                desktopImage={SimpleProcessImageLarge}
                includeScrollDownButton
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListCataract} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our Cataract patients say after treatment"
                    h3Heading="Hear from a patient"
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                        `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListCataract} />
            </LazyComponent>

            <CtaSection subtitle="Find out your options" />

            <SideImageSection
                h2Heading="Transparent Price"
                h3LightHeading={
                    <>
                        Cataract
                        <br />
                    </>
                }
                h3BoldHeading="Surgery prices"
                descriptions={[
                    `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                ]}
                sectionImage={{
                    url: '/images/section-images/cataract-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-transparent-price-large.png',
                    width: 671,
                    height: 572
                }}
                altText=""
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText="£2,400 per eye"
                            list={[
                                <>
                                    One dedicated Cataract specialist
                                    <br />
                                    for your treatment
                                </>,
                                'Most affordable price in London'
                            ]}
                        />
                        <span className="mt-12 font-latoBold text-[2.8rem] leading-[3.2rem]">
                            Looking for insurance options?
                        </span>
                        <p className="">We are here to make your treatment easy.</p>

                        <Button
                            type="anchor"
                            link="/cataract/price"
                            text="Find out more"
                            iconPosition="right"
                            icon={<FaAngleRight className="h-6 w-6 translate-y-[0.1rem]" />}
                            className="mt-6 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Living life again"
                h3BoldHeading="with cataract-free vision!"
                descriptions={[
                    `Most patients are not aware of how bad their vision has become until after the cataract surgery and treatment.`,
                    `Once they see the difference in brightness, colour, imagery and detail; they are delighted to experience their lifestyle activities again with the clear vision they should have always had.`
                ]}
                sectionImage={{
                    url: '/images/section-images/vision-correction-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/vision-correction-cataract-large.png',
                    width: 640,
                    height: 610
                }}
                positionReversed={true}
            />

            <HalfRoundedCard />

            <SideImageSection
                h2Heading="better vision"
                h3LightHeading="Enjoy clear"
                h3BoldHeading="vision without glasses"
                descriptions={[
                    `Following cataract surgery, the most satisfied patients are those who do not require glasses to see clearly.`,
                    `Since your eye is refocused during the operation, our experts take the opportunity to focus it for no distance glasses, even if you have worn glasses all your life.`,
                    <>
                        Implants, like glasses, come in different strengths and we will measure your eye to find the
                        strength of the{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            implant most suitable for you.
                        </LinkText>
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/better-vision-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/better-vision-cataract-large.png',
                    width: 659,
                    height: 687
                }}
                positionReversed={true}
            />

            <CtaSection2 title="Book Your Private Cataract Surgery Today" />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={CataractCtaBannerImage}
                    bannerBg="/images/section-images/cataract-banner-bg.png"
                    bannerTitle="Do you think Cataract could be the right treatment for you?"
                />
            </LazyComponent> */}

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="Get the guide to Cataract treatment"
                    description="Robotic laser vision correction"
                    pageSlug="cataract"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={cataractFaqList}
                    titleLight="Cataract Surgery Frequently"
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
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
