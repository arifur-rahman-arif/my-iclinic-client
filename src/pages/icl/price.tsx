import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import LinkText from '@/components/Link/LinkText';
import Page from '@/components/Page';
import {
    BulletPoint,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { icPriceList } from '@/components/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-icl-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-icl-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-icl-pricing.png';
import InclusiveCostImage from '@/section-images/icl-inclusive-cost-image.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface IclPricingProps {
    seo: any;
    yoastJson: any;
}

/**
 *
 * Url: /icl/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function IclPricing({ seo, yoastJson }: IclPricingProps): JSX.Element {
    const heading = 'Implantable Contact Lens cost London';
    const subheading = 'Save an average of £1,000';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title="Implantable Contact Lens cost London" description="" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                h1Title={<h1 className="xs:max-w-[40rem]">{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText="£2,750 per eye"
            />

            <SideImageSection
                h2Heading="ICL consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-icl.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-icl-large.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                <LinkText href="/suitability-check">
                                    <strong>A FREE suitability</strong>
                                </LinkText>{' '}
                                check with our ICL specialist (a comprehensive assessment of your suitability and how
                                implantable contact lenses will suit your lifestyle).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                A comprehensive consultation with your dedicated ICL specialist (inclusive of all eye
                                assessment and eye scans).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                Your Implantable Contact Lens treatment performed in our private suite with your
                                dedicated specialist and our friendly team.
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                Up to four FREE aftercare appointments with your dedicated ICL specialist (inclusive of
                                eye assessments and eye scans).
                            </p>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                h2Heading="ICL finance"
                h3LightHeading="Want to pay for your"
                h3BoldHeading="treatment each month?"
                midExtras={
                    <h4 className="text-[2rem] normal-case leading-[2.4rem] sm:max-w-[49.1rem] md:text-[2.8rem] md:leading-[3.2rem]">
                        Finance available for Implantable Contact Lenses (ICL)
                    </h4>
                }
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={[
                    `We understand having ICL to correct your vision is a great investment in your eye health and lifestyle. We offer 10 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/icl-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/icl-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={[
                            'You are eligible for our 24 months interest-free finance',
                            'Calculate your monthly spend for your ICL treatment'
                        ]}
                    />
                }
            />

            <PriceSection priceList={icPriceList} />

            <FullWidthImageSection2
                title="ICL eye surgery couldn’t be more cost-effective!"
                description="Our London ICL specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics."
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
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0 !pt-0"
                overlayAnimation
                textColumnOverlay
                sectionClass="lg:!mt-0 bg-brandLight relative"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'icl-price' });

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
