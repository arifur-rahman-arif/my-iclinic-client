import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection, FullWidthImageSection, Masthead } from '@/components/page-sections';
import { yagFaqList } from '@/components/page-sections/Faq/faqList';
import { leftRightListYag } from '@/components/page-sections/LeftRight/leftRightList';
import { normalSlideListYag } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-yag-large.png';
import MastheadImageMedium from '@/masthead/masthead-yag-medium.png';
import MastheadImageSmall from '@/masthead/masthead-yag-small.png';
import SimpleProcessImageLarge from '@/section-images/yag-laser-treatment-large.png';
import SimpleProcessImage from '@/section-images/yag-laser-treatment.png';
import { WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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

interface YagCapsulotomyForPcoProps {
    data: any;
    seo: any;
    yoastJson: any;
}

/**
 *
 * Url: /cataract/yag-capsulotomy-for-pco
 *
 * @export
 * @returns {JSX.Element}
 */
export default function YagCapsulotomyForPco({ data, seo, yoastJson }: YagCapsulotomyForPcoProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'YAG Capsulotomy Laser Treatment London';
    const subheading = 'Reducing PCO symptoms after Cataract Surgery.';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="YAG Laser Treatment in London"
            description="YAG Laser Treatment is a procedure to remove any symptoms that occur after having your cataracts removed. Learn more about the procedure here."
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
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText={data?.masthead_price || '£395 per eye'}
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
                                YAG Laser Treatment after
                                <br />
                                Cataract Surgery
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
                <LeftRightSection childrenList={leftRightListYag} />
            </LazyComponent>

            {/* <LazyComponent> */}
            {/*     <SideVideoSection */}
            {/*         h2Heading="What our YAG patients Say After treatment " */}
            {/*         h3Heading="Hear from a patient" */}
            {/*         descriptions={[ */}
            {/*             'When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight. Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.' */}
            {/*         ]} */}
            {/*     /> */}
            {/* </LazyComponent> */}

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListYag} />
            </LazyComponent>

            <CtaSection subtitle="Find out your options" />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title={
                        <>
                            Get the guide to <br />
                            YAG laser treatment
                        </>
                    }
                    pageSlug="yag-capsulotomy-for-pco"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={yagFaqList}
                    titleLight="YAG Laser Treatment Frequently"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'yag-capsulotomy-for-pco' });

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
