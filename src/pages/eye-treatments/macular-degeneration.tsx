import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletList,
    CtaSection,
    FullWidthImageSection,
    Masthead,
    NormalSection5,
    SideImageSection
} from '@/components/page-sections';
import { maculerDegenerationFaqList } from '@/components/page-sections/Faq/faqList';
import { normalSlideListDoubleVision } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-macular-degeneration-large.png';
import MastheadImageMedium from '@/masthead/masthead-macular-degeneration-medium.png';
import MastheadImageSmall from '@/masthead/masthead-macular-degeneration-small.png';
import { WpPageResponseInterface } from '@/types';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

interface MacularDegenerationProps {
    seo: any;
    yoastJson: any;
}

/**
 *  Url: /eye-treatments/macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function MacularDegeneration({ seo, yoastJson }: MacularDegenerationProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Macular Degeneration Treatment London';
    const subheading = 'Monitor your macular degeneration symptoms with our private clinic';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Macular Degeneration Treatment in London"
            description="Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment."
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

            <Container className="mt-28">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">Macular degeneration (AMD)</strong>
                    </div>
                }
                altText=""
                description={[
                    'Macular degeneration (AMD) is a common age-related eye disease which affects the clarity of your central vision. The incidence of macular degeneration increases with age, and about three people per 1000 over the age of 50 will develop macular degeneration.',
                    'Macular degeneration is categorised as an “age-related” eye condition meaning that it occurs mainly in older people.'
                ]}
                image="/images/section-images/macular-degeneration.png"
                desktopImage="/images/section-images/macular-degeneration-large.png"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading="diagnosis"
                h3LightHeading={
                    <>
                        Diagnosis and treatment for
                        <br />
                    </>
                }
                h3BoldHeading="Macular degeneration"
                descriptions={[
                    <strong>Understanding Macular Degeneration</strong>,
                    "The macula is the area of the retina that's responsible for seeing clearly in the centre of your vision.",
                    'If you are experiencing blurriness, distortion or blank spots in your central vision, our ophthalmologists can carry out comprehensive eye assessments to check the condition of your eyes and diagnose the type of macular degeneration you are experiencing.',
                    <strong>There are two types of macular degeneration conditions:</strong>
                ]}
                sectionImage={{
                    url: '/images/section-images/macular-degeneration-diagnosis.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/macular-degeneration-diagnosis-large.png',
                    width: 631,
                    height: 582
                }}
                positionReversed={true}
                altText=""
                textColumnExtras={
                    <div className="grid gap-6 ml-12">
                        <span className="font-mulishBold">Dry age-related macular degeneration:</span>
                        <BulletList
                            className="!ml-0"
                            list={[
                                <>
                                    Have a transient (or intermittent) diplopia condition
                                    <br />
                                    <span className="text-[1.4rem] leading-8 font-mulishBold">
                                        A progression of vision loss over a period of time.
                                    </span>
                                </>,
                                <>
                                    Wet age-related macular degeneration
                                    <br />
                                    <span className="text-[1.4rem] leading-8 font-mulishBold">
                                        A sudden and rapid progression of vision loss.
                                    </span>
                                </>
                            ]}
                            bulletPoint={
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                    </div>
                }
            />

            <SideImageSection
                h2Heading="treatment"
                h3LightHeading={
                    <>
                        Macular degeneration
                        <br />
                    </>
                }
                h3BoldHeading="treatment"
                descriptions={[
                    'Although there is no definite treatment to reverse any current symptoms of macular degeneration, our ophthalmologist can help prevent or slow the progression of the disease.',
                    'After diagnosing your condition, your specialist will begin the treatment process.',
                    'If you are diagnosed with wet macular degeneration, your specialist will repeat Anti-VEGF and/or other injections to preserve and stabilise your vision. This treatment will require regular checkups and monitoring of your vision.',
                    'Dry macular degeneration requires frequent monitoring and checkups of the eyes. Dry macular degeneration is a less damaging condition for your eyes and does not require injections for treatment.'
                ]}
                sectionImage={{
                    url: '/images/section-images/macular-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/macular-treatment-large.png',
                    width: 658,
                    height: 459
                }}
                altText=""
            />

            <NormalSection5
                heading="Reduce your Macular Degeneration symptoms today"
                description="Book a private consultation today with our specialist for all-inclusive eye assessments and treatment planning"
            />

            <CtaSection subtitle="Book a private consultation" />

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListDoubleVision} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={maculerDegenerationFaqList}
                    titleLight="Macular Degeneration Frequently"
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
