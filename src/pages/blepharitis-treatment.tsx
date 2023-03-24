import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { CtaSection2, FullWidthImageSection, Masthead, SideImageSection, StackColumn2 } from '@/page-sections/index';
import { blepharitisFaqList } from '@/page-sections/Faq/faqList';
import { normalSlideListBlepharitis } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-blepharitis-large.png';
import MastheadImageMedium from '@/masthead/masthead-blepharitis-medium.png';
import MastheadImageSmall from '@/masthead/masthead-blepharitis-small.png';
import { blepharitisList } from '@/page-sections/SectionParts/stack-column/list';
import FullWidthImage from '@/section-images/blepharitis.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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

interface BlepharitisPageProps {
    seo: any;
    yoastJson: any;
}

/**
 * Presbyond page component for the App
 *
 * * Url: /blepharitis-treatment
 *
 * @export
 * @returns {JSX.Element}
 */
export default function BlepharitisPage({ seo, yoastJson }: BlepharitisPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Blepharitis treatment in London';
    const subheading = 'London’s best treatment for Blepharitis symptoms';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                imagePosition="2xl:object-[-40rem_center]"
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
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText="From £350"
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                containerClass="pb-16 md:py-24"
                boldHeading={
                    <>
                        London’s best treatment for
                        <br /> Blepharitis symptoms{' '}
                    </>
                }
                altText=""
                description={[
                    `At My iClinic, we understand that Blepharitis can be a difficult condition to manage on your own. That's why we offer comprehensive treatment plans designed to help you manage the symptoms and get back to living a life free of discomfort.`,
                    `Our Blepharitis treatment specialists provide straightforward, effective solutions tailored to your individual needs.`
                ]}
                image={FullWidthImage}
                desktopImage={FullWidthImage}
            />

            <SideImageSection
                h2Heading="symptoms Relieve"
                h3LightHeading={<>Relieve your symptoms with</>}
                h3BoldHeading="Treatment for Blepharitis"
                descriptions={[
                    `Blepharitis is a chronic condition involving the inflammation of your eyelids, leading them to become red and swollen.`,
                    `Although Blepharitis is not painful in the eye or contagious, it can be very uncomfortable and irritating to anybody experiencing their symptoms getting worse.`,
                    `We understand how blepharitis can be very stressful and problematic which is why our treatment options for blepharitis are very straightforward and can help ease the stress of facing these symptoms alone.`
                ]}
                sectionImage={{
                    url: '/images/section-images/symptoms-relieve-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/symptoms-relieve-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText=""
            />

            <SideImageSection
                h2Heading="treatments for blepharitis"
                h3LightHeading={<>Managing your Blepharitis</>}
                h3BoldHeading="with treatment"
                descriptions={[
                    `Although blepharitis is a chronic condition that needs constant management, we have the most successful treatments to help remission (lessen) your symptoms and relieve you of the stress and worry you might be experiencing with Blepharitis throughout your daily life.`,
                    `When arriving at a private consultation with us, our blepharitis specialist will guide you through some eye checks which are essential in capturing where the blepharitis is growing and how your blepharitis symptoms can be best treated.`
                ]}
                sectionImage={{
                    url: '/images/section-images/treatments-for-blepharitis-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/treatments-for-blepharitis-large.png',
                    width: 675,
                    height: 558
                }}
                altText=""
            />

            <SideImageSection
                h2Heading="we can always help"
                h3LightHeading="Don’t suffer with your Blepharitis symptoms"
                h3BoldHeading="we can always help!"
                descriptions={[
                    `Whether you have mild or growing symptoms of blepharitis our specialist can treat your symptoms.`,
                    `By choosing My iClinic as your preferred blepharitis specialist in London, you can rest assured that you'll receive expert advice and guidance towards managing the condition for lasting results. Your specialist will take the time to discuss your concerns and collaboratively come up with solutions designed around individual lifestyle preferences. Some of our treatments include:`
                ]}
                customColumn={<StackColumn2 list={blepharitisList} />}
            />

            <CtaSection2
                title="Book with our Blepharitis specialist"
                descriptions={[
                    <>
                        If you’ve been struggling with severe, repeated bouts of blepharitis, then we can help. Our
                        expert ophthalmologists will advise on the blepharitis causes and treatment that are most
                        aligned with your unique case.
                    </>,
                    <>
                        To alleviate your irritation, either give us a{' '}
                        <LinkText
                            href="tel:0208 445 8877"
                            className="font-mulishBold font-extrabold text-blue"
                            indicatorColor="bg-blue"
                        >
                            call
                        </LinkText>{' '}
                        or with our lovely team today.
                    </>
                ]}
                image={{
                    url: '/images/section-images/cta-blepharitis.png',
                    width: 640,
                    height: 514
                }}
                imageLarge={{
                    url: '/images/section-images/cta-blepharitis.png',
                    width: 640,
                    height: 514
                }}
            />

            {/* <LazyComponent>
                <FeaturedPatient
                    h2Title="Life style improvement"
                    h3Title="Life after Blepharitis treatment & management"
                    bandImageDescription={[
                        `When you choose My iClinic, one of our dedicated specialists will offer you expert advice on managing blepharitis so that you can live life free of irritation and discomfort.`,
                        'We will be committed to working with you to find the best treatment for blepharitis to solve your unique situation.'
                    ]}
                    bandImageTitle="Patient Name"
                    bandImageURL="/images/section-images/placeholder-image.png"
                    reviewTitle="5 star Blepharitis clinic in London"
                    sliders={blepharitisSliders}
                />
            </LazyComponent> */}

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListBlepharitis} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={blepharitisFaqList}
                    titleLight="Blepharitis Frequently"
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
