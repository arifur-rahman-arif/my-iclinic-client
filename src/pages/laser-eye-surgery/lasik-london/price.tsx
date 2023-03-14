import {
    BulletPoint,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';

import { BreadCrumb } from '@/components/Breadcrumb';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { lasikPriceList } from '@/components/page-sections/PriceCard/priceList';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasik-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasik-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasik-pricing.png';
import InclusiveCostImage from '@/section-images/lasik-inclusive-cost-image.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useDeviceSize, largeSizes, smallSizes } from '@/hooks';
import { useState, useEffect } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'));

interface LasikPricingProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /laser-eye-surgery/lasik-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasikPricing({ seo, yoastJson }: LasikPricingProps): JSX.Element {
    const heading = 'LASIK laser eye surgery cost London';
    const subheading = 'Save you an average of £1,000';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

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
                altText="Woman reading the cost of Presbyond Treatment in London."
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
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.4rem] text-heading2">
                        With 12 months
                        <br />
                        <span className="font-mulishBold uppercase text-heading2">Interest Free Finance</span>{' '}
                        available!
                    </span>
                }
                bannerWidth="md:max-w-[65.5rem]"
            />

            <SideImageSection
                h2Heading="LASIK consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-lasik.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-lasik-large.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                <strong>A FREE</strong> suitability laser check with our laser specialist (a
                                comprehensive assessment of your suitability and how LASIK laser eye surgery will suit
                                your lifestyle).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconPersonInFrame} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                A comprehensive consultation with your dedicated laser specialist (inclusive of all eye
                                assessment and eye scans).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                Your LASIK surgery was performed in our private laser suite with your dedicated
                                specialist and our friendly team.
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyePlus} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive
                                of eye assessments and eye scans)
                            </p>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading="LASIK finance"
                h3LightHeading="Thinking about splitting"
                h3BoldHeading="your treatment cost?"
                midExtras={<h4 className="normal-case">Finance available for LASIK laser eye surgery</h4>}
                altText=""
                descriptions={[
                    `We understand having LASIK to correct your vision is a great investment in your eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/lasik-finance.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/lasik-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={[
                            'You are eligible for our 12 months interest-free finance',
                            'Calculate your monthly spend for your ICL treatment'
                        ]}
                    />
                }
            />

            <PriceSection priceList={lasikPriceList} />

            <FullWidthImageSection2
                title="LASIK laser eye surgery couldn’t be more cost-effective!"
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
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0"
                overlayAnimation
                textColumnOverlay
                sectionClass="bg-brandLight relative !mt-0"
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
