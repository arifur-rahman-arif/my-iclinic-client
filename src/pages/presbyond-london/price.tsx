import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-presbyond-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-presbyond-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-presbyond-pricing.png';
import {
    BulletPoint,
    CtaSection,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { presbyondPriceList } from '@/page-sections/PriceCard/priceList';
import ShortSightedImageLarge from '@/section-images/short-sighted-vision-large.png';
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
 * * Url: /presbyond-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PresbyondPricing({ seo, yoastJson }: PresbyondPricingProps): JSX.Element {
    const heading = 'Presbyond laser eye surgery cost in London';
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
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
            />

            <SideImageSection
                h2Heading="Presbyond consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-desktop.png',
                    width: 616,
                    height: 549
                }}
                altText="Woman with presbyond blended vision, without needing reading glasses."
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                <strong>A FREE</strong> suitability laser check with our laser specialist (a
                                comprehensive assessment of your suitability and how presbyond will suit your
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
                                Your Presbyond treatment performed in our private laser suite with your dedicated
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
                h2Heading="Presbyond finance"
                h3LightHeading="Want to pay for your"
                h3BoldHeading="treatment each month?"
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={[
                    `We understand having Presbyond to correct your vision is a great investment in your
                     eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={[
                            'You are eligible for our 12 months interest-free finance',
                            'Calculate your monthly spend for your laser treatment'
                        ]}
                    />
                }
                midExtras={<h4 className="normal-case">Finance available for Presbyond</h4>}
            />

            <PriceSection priceList={presbyondPriceList} />

            <FullWidthImageSection2
                title="PRESBYOND surgery couldn’t be more cost-effective!"
                description="Our London laser specialists save you an average of £1,000 for your treatment and aftercare
                        appointments compared to other eye clinics."
            />

            <CtaSection />

            <FullWidthImageSection
                sectionClass="lg:!mt-0 bg-brandLight relative"
                h3Title={
                    <>
                        <strong className="normal-case">Permanently correct your short-sighted vision</strong> with our
                        all-inclusive cost.
                    </>
                }
                boldHeading={true}
                altText="Woman with presbyond blended vision, without needing reading glasses."
                image={ShortSightedImageLarge}
                desktopImage={ShortSightedImageLarge}
                containerClass="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                smallImageClassName="!w-auto"
                largeImageClassName="!rounded-none"
                overlayAnimation
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'presbyond-london-price' });

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
