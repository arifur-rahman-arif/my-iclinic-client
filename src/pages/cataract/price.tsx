import { BreadCrumb } from '@/components/Breadcrumb';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletPoint,
    CompanyLogos2,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { cataractPriceList } from '@/components/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-cataract-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-cataract-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-cataract-pricing.png';
import InclusiveCostImage from '@/section-images/cataract-inclusive-cost-image.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'));

interface CataractPriceProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /cataract/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function CataractPrice({ seo, yoastJson }: CataractPriceProps): JSX.Element {
    const heading = 'Cataract surgery cost in London';
    const subheading = 'Save you an average of £1,000 for your cataract treatment';

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
            title="Cataract surgery cost in London"
            description="Save you an average of £1,000 for your cataract treatment"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
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
            />

            <SideImageSection
                h2Heading="Cataract consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-cataract-large.png',
                    width: 611,
                    height: 584
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                A comprehensive consultation with your dedicated cataract specialist (inclusive of all
                                eye assessment and eye scans).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                Your cataract treatment was performed in our private theater with your dedicated
                                specialist and our friendly team.
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p className="">
                                FREE aftercare appointments with your dedicated cataract specialist (inclusive of eye
                                assessments and eye scans).
                            </p>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <SideImageSection
                sectionClass="relative before:content-[''] before:absolute before:right-0 before:top-0 before:sm:w-2/4 before:h-full before:md:bg-[#FFEFE5] before:-z-[1]"
                h2Heading="Cataract insurance"
                h3LightHeading="Want to pay with"
                h3BoldHeading="your health insurance?"
                midExtras={
                    <h4 className="normal-case">
                        We are partnered with health insurance companies to make the cost of your treatment easier!
                    </h4>
                }
                altText=""
                sectionImage={{
                    url: '/images/section-images/cataract-finance.png',
                    width: 438,
                    height: 545
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-finance-large.png',
                    width: 682,
                    height: 671
                }}
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[43rem]">
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p>
                                It's always best to check with your <strong>healthcare insurance provider</strong> that
                                they will cover your fees and produce a <strong>pre-authorisation code</strong> for you.{' '}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <BulletPoint />
                            <p>
                                We will require your <strong>pre-authorization code</strong> before your consultation
                                and cataract surgery.
                            </p>
                        </li>
                    </ul>
                }
            />

            <PriceSection priceList={cataractPriceList} />

            <FullWidthImageSection2
                title="Cataract laser surgery couldn’t be more cost-effective!"
                description="Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics."
            />

            <CompanyLogos2 />

            <CtaSection />

            <FullWidthImageSection
                h3Title={
                    <>
                        <strong className="normal-case">Permanently correct your vision</strong> with our private
                        Cataract treatment.
                    </>
                }
                boldHeading={true}
                altText=""
                image={InclusiveCostImage}
                desktopImage={InclusiveCostImage}
                containerClass="pb-16 md:!py-0"
                overlayAnimation={true}
                textColumnOverlay={true}
                sectionClass="bg-brandLight relative !mt-0"
                largeImageClassName="!rounded-none"
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
