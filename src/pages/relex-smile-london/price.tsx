import ComponentLoader from '@/components/ComponentLoader';
import {
    BulletPoint,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';

import { BreadCrumb } from '@/components/Breadcrumb';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection } from '@/page-sections/CtaSection';
import { relexSmilePriceList } from '@/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-relex-smile-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-relex-smile-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-relex-smile-pricing.png';
import InclusiveCostImage from '@/section-images/inclusive-cost-image.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface PresbyondPricingProps {
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * * Url: /relex-smile-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PresbyondPricing({ seo, yoastJson }: PresbyondPricingProps): JSX.Element {
    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={
                    <h1 id="masthead-title" className="flex flex-wrap items-center justify-start gap-2">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">ReLEx</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">SMILE</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">laser</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">eye</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">surgery</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">cost</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Save
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            an
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            average
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            of
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            {' '}
                            £1,000
                        </span>
                    </h2>
                }
            />

            <SideImageSection
                h2Heading="Relex smile consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-relex-smile.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-relex-smile-desktop.png',
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
                                comprehensive assessment of your suitability and how ReLEx SMILE will suit your
                                lifestyle).
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
                                Your ReLEx SMILE treatment performed in our private laser suite with your dedicated
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
                h2Heading="Relex smile finance"
                h3LightHeading="Want to pay for your"
                h3BoldHeading="treatment each month?"
                midExtras={<h4 className="normal-case">Finance available for ReLEx SMILE</h4>}
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={[
                    `We understand having ReLEx SMILE to correct your vision is a great investment
					in your eye health and lifestyle. We offer 12 months interest- free finance to help make
					 that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/relex-smile-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/relex-smile-finance-large.png',
                    width: 574,
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

            <PriceSection priceList={relexSmilePriceList} />

            <FullWidthImageSection2
                title="ReLEx SMILE surgery couldn’t be more cost-effective!"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'relex-smile-london-price' });

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
