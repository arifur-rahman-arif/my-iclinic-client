import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection, ImageGallery, Masthead } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-eyelid-large.png';
import MastheadImageMedium from '@/masthead/masthead-eyelid-medium.png';
import MastheadImageSmall from '@/masthead/masthead-eyelid-small.png';
import { eyelidFaqList } from '@/page-sections/Faq/faqList';
import { galleryListEyelid } from '@/page-sections/ImageGallery';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListCosmeticEyelid, leftRightListEyelid } from '@/page-sections/LeftRight/leftRightList';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface EyeLidPageProps {
    seo: any;
    yoastJson: any;
}

/**
 * Home page component for the App
 *
 * * Url: /eye-treatments/eyelid-surgery
 *
 * @export
 * @returns {JSX.Element}
 */
export default function EyeLidPage({ seo, yoastJson }: EyeLidPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Eyelid surgery London';
    const subheading = 'Medical and cosmetic Eyelid surgery for Cysts, Chalazion, Styes, blepharoplasty, and more.';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Specialist Eyelid Surgery in London"
            description="Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
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
                priceText="From £200"
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <Section>
                <Container>
                    <h2 className="mx-auto text-center md:max-w-[79.8rem]">
                        Our UK’s top oculoplastic surgeons treat and correct your eyelid conditions with our easy and
                        stress-free treatment options.
                    </h2>
                </Container>
            </Section>

            <LazyComponent>
                <LeftRightSection
                    childrenList={leftRightListEyelid}
                    positionReversed
                    sectionClassName="bg-brandLight py-12 md:py-24 !gap-24 md:!gap-40"
                />
            </LazyComponent>

            <ImageGallery galleryList={galleryListEyelid} />

            <LazyComponent>
                <LeftRightSection
                    childrenList={leftRightListCosmeticEyelid}
                    positionReversed
                    sectionClassName="bg-[#F1CFE580] py-12 md:py-24 !gap-24 md:!gap-40"
                />
            </LazyComponent>

            <CtaSection />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={eyelidFaqList}
                    titleLight="Eyelid Surgery Frequently"
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
