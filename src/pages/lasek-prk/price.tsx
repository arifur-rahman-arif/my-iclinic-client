import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasek-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasek-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasek-pricing.png';
import { CtaSection } from '@/page-sections/CtaSection';
import {
    BulletList,
    BulletPoint,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { NormalSection4 } from '@/page-sections/NormalSection';
import { lasekPriceList } from '@/page-sections/PriceCard/priceList';
import InclusiveCostImage from '@/section-images/lasek-inclusive-cost-image.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface LasekPricingProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /lasek-prk/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasekPricing({ seo, yoastJson }: LasekPricingProps): JSX.Element {
    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const heading = 'LASEK, PRK & PTK laser surgery cost London';
    const subheading = 'Save an average of £1,000';

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
                altText=""
                imagePosition="!object-cover object-[-35rem_center]"
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
            />

            <SideImageSection
                h2Heading="Your consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-lasek.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-lasek-large.png',
                    width: 616,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={[
                            <>
                                <strong>A FREE</strong> suitability laser check with our laser specialist
                                (acomprehensive assessment of your suitability and how LASEK or PRK laser eye surgery
                                will suit your lifestyle).
                            </>,
                            'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
                            'Your laser surgery performed in our private laser suite with your dedicated specialist and our friendly team.',
                            'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
                        ]}
                    />
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading="cost & finance"
                h3LightHeading="Thinking about splitting"
                h3BoldHeading="your laser treatment cost?"
                midExtras={
                    <h4 className="normal-case sm:max-w-[44.3rem]">
                        Finance available for LASEK, PRK & PTK laser eye surgery
                    </h4>
                }
                altText=""
                descriptions={[
                    `We understand having LASEK, PRK or PTK to correct your vision is a great investment in your eye health and lifestyle. We offer 24 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/lasek-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/lasek-finance-large.png',
                    width: 623,
                    height: 560
                }}
                textColumnExtras={
                    <div className="md:max-w-[43rem]">
                        <span className="font-latoBold text-[2.4rem] uppercase leading-[3.2rem]">
                            You are eligible for our 12 months interest-free finance
                        </span>
                        <div className="mt-12 grid grid-cols-[auto_1fr] gap-6">
                            {/* <Image src={IconCalculator} alt="" className="self-center" /> */}
                            <BulletPoint />
                            <span className="font-latoBold text-[2rem] leading-[2.4rem]">
                                Calculate your monthly spend for your laser treatment
                            </span>

                            <p className="col-start-2">
                                If you’re eligible for our interest-free finance, you can calculate your monthly spend
                                so you’re always in the know with regard to payments for your laser eye treatment.
                            </p>
                            <p className="col-start-2">
                                If you have any queries regarding pricing, you can get in touch with our specialists for
                                a consultation today on{' '}
                                <a href="tel:0208 445 8877">
                                    <span className="whitespace-nowrap font-mulishBold text-blue">0208 445 8877.</span>
                                </a>
                            </p>
                        </div>
                    </div>
                }
            />

            <PriceSection priceList={lasekPriceList} />

            <FullWidthImageSection2
                title="LASEK & PRK Laser eye surgery couldn’t be more cost-effective!"
                description="Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics."
            />

            <CtaSection />

            <FullWidthImageSection
                h3Title={
                    <>
                        <strong className="normal-case">Permanently correct your vision</strong> with our all-inclusive
                        cost.
                    </>
                }
                boldHeading={true}
                altText=""
                image={InclusiveCostImage}
                desktopImage={InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                overlayAnimation
                textColumnOverlay
                sectionClass="relative lg:!mt-0 bg-brandLight"
            />

            <NormalSection4 />

            <SideImageSection
                h2Heading="Your consultation"
                h3LightHeading={
                    <>
                        What’s included in my
                        <br />
                    </>
                }
                h3BoldHeading="PTK private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/ptk-consultation-lasek.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/ptk-consultation-lasek-large.png',
                    width: 616,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={[
                            'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
                            'Your PTK surgery was performed in our private laser suite with your dedicated specialist and our friendly team.',
                            <>
                                <strong>A FREE</strong> suitability laser check with our laser specialist
                                (acomprehensive assessment of your suitability and how LASEK or PRK laser eye surgery
                                will suit your lifestyle).
                            </>
                        ]}
                    />
                }
            />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasek-prk-price' });

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
