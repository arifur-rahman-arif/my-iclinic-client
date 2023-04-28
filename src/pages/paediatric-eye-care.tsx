import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-paediatric-large.png';
import MastheadImageMedium from '@/masthead/masthead-paediatric-medium.png';
import MastheadImageSmall from '@/masthead/masthead-paediatric-small.png';
import { paediatricFaqList } from '@/page-sections/Faq/faqList';
import { CtaSection, FullWidthImageSection, Masthead, SideImageSection } from '@/page-sections/index';
import { leftRightListPaediatric, leftRightListPaediatricAftercare } from '@/page-sections/LeftRight/leftRightList';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});

interface PaediatricEyeCareProps {
    data: any;
    seo: any;
    yoastJson: any;
}

/**
 * Paediatric eye care page
 *
 * * Url: /paediatric-eye-care
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PaediatricEyeCare({ data, seo, yoastJson }: PaediatricEyeCareProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = "Children's Eye Care London";

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Paediatric Eye Care Services"
            description="Our trusted paediatric ophthalmologists deliver the best treatment for any eye problems in children. Learn more about our paediatric eye care services."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                priceText={data?.masthead_price || 'From £200'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <FullWidthImageSection
                h3Title={
                    <>
                        <strong>Paediatric</strong> services for children
                    </>
                }
                description={[
                    'Paediatric eye care is for infants and young children who have problems with their vision.',
                    "If your child is experiencing complications with their vision, or you believe there is a potential problem with their eyes, we can provide a detailed assessment to confirm the health of your child's eyes."
                ]}
                altText=""
                image="/images/section-images/paediatric-children-large.png"
                desktopImage="/images/section-images/paediatric-children-large.png"
                includeScrollDownButton
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListPaediatric} />
            </LazyComponent>

            <Section>
                <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[auto_6rem_auto] md:gap-0 lg:grid-cols-[1fr_10rem_auto]">
                    <div className="relative z-[2] rounded-primary bg-white md:col-span-2 md:col-start-1 md:row-start-1 md:py-12 md:pl-12 md:pr-24 lg:py-24">
                        <H3Variant3>
                            <strong>
                                We specialise in treating children with a wide range of eye care conditions. Our team
                                has years of experience working with children who have autism, dyslexia, and other
                                learning difficulties.
                            </strong>
                        </H3Variant3>
                    </div>
                    <div className="row-start-1 h-full md:col-span-2 md:col-start-2 md:row-start-1">
                        <Image
                            src="/images/section-images/paediatric-banner.png"
                            alt=""
                            width={619}
                            height={316}
                            className="h-full w-full"
                        />
                    </div>
                </Container>
            </Section>

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListPaediatricAftercare} positionReversed />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <CtaSection subtitle="Speak to our friendly team" />

            <SideImageSection
                h2Heading="About ophthalmologist"
                h3LightHeading="What does a Paediatric"
                h3BoldHeading="ophthalmologist do?"
                descriptions={[
                    'Our Paediatric ophthalmologist is an expert in assessing, diagnosing, treating and managing children who develop eye conditions from 1 year old to 18 years old.',
                    "Our Paediatric ophthalmologist will be the best eye doctor to help you understand your child's eye condition and, most importantly, help your child understand."
                ]}
                sectionImage={{
                    url: '/images/section-images/about-ophthalmologist.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/about-ophthalmologist-large.png',
                    width: 640,
                    height: 610
                }}
                positionReversed={true}
            />

            <SideImageSection
                h2Heading="ophthalmologist consultations"
                h3LightHeading="Do you offer consultations and"
                h3BoldHeading="treatment for young infants?"
                descriptions={[
                    <>
                        Our clinic provides private Paediatric eye care to infants from the{' '}
                        <strong>age of 1 years old.</strong>
                    </>,
                    <>
                        If you would like to find out the health of your child's eyes, or notice a change in your
                        children's eyes please call <LinkStyle url="tel:0208 445 8877">0208 445 8877</LinkStyle> for our
                        specialist team to book you an appointment with a Paediatric ophthalmologist at our Paediatric
                        clinic.
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/ophthalmologist-consultations.png',
                    width: 635,
                    height: 503
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/ophthalmologist-consultations-large.png',
                    width: 635,
                    height: 503
                }}
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || paediatricFaqList}
                    titleLight="Paediatric eye care"
                    titleBold="Frequently asked questions"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'paediatric-eye-care' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf
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
