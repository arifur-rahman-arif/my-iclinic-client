import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-corneal-large.png';
import MastheadImageMedium from '@/masthead/masthead-corneal-medium.png';
import MastheadImageSmall from '@/masthead/masthead-corneal-small.png';
import { BulletList, CtaSection, FullWidthImageSection, Masthead, SideImageSection } from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListCornealTreatments } from '@/page-sections/LeftRight/leftRightList';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface CornealTreatmentsProps {
    seo: any;
    yoastJson: any;
}

/**
 * Home page component for the App
 *
 * * Url: /eye-treatments/corneal-treatments
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CornealTreatments({ seo, yoastJson }: CornealTreatmentsProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Cornea specialists in London';
    const subheading = 'Corneal eye treatments at My-iClinic';

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
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
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
                priceText={<></>}
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[51.6rem]">
                        <strong className="normal-case">
                            Private consultation for corneal treatments and corneal disease management
                        </strong>
                    </div>
                }
                description={[
                    'When visiting My-iClinic you will begin your eye care journey with comprehensive eye assessments to investigate the condition of your cornea.',
                    'Corneal eye conditions can be prevented with early surgical intervention and other corneal surgeries we provide in our private clinic.'
                ]}
                image="/images/section-images/private-consultation-corneal-diseases.png"
                desktopImage="/images/section-images/private-consultation-corneal-diseases.png"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading="Cornea consultation"
                h3LightHeading={
                    <>
                        What is included in my
                        <br />
                    </>
                }
                h3BoldHeading="private consultation?"
                descriptions={[
                    <>
                        A private consultation with our ophthalmologist is an all-inclusive{' '}
                        <strong>cost of £200</strong>
                    </>,
                    'This includes:'
                ]}
                sectionImage={{
                    url: '/images/section-images/placeholder-image.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/placeholder-image.png',
                    width: 643,
                    height: 461
                }}
                positionReversed
                textColumnExtras={
                    <BulletList
                        list={[
                            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                            'A medical diagnosis of your eye condition with treatment planning.',
                            'A referral for surgical treatment and/or a signed prescription (if required).',
                            'A dedicated eye care team to support you throughout your eye care journey.'
                        ]}
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

            <CtaSection />

            <LazyComponent>
                <LeftRightSection
                    childrenList={leftRightListCornealTreatments}
                    positionReversed
                    sectionClassName="!gap-24 md:!gap-40"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'corneal-treatments' });

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
