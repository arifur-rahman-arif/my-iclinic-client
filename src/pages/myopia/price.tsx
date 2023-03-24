import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Cta3, FullWidthImageSection2, Masthead, PriceSection, SideImageSection } from '@/page-sections/index';
import { myopiaPriceList } from '@/page-sections/PriceCard/priceList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-myopia-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-myopia-pricing-medium.png';
import MastheadImageSmall from '@/masthead/masthead-myopia-pricing-small.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface PriceProps {
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * Url: /myopia/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson }: PriceProps): JSX.Element {
    const heading = 'Myopia control management & treatment cost London';
    const subheading = 'Save you an average of £500';

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
                priceText="£350 All-inclusive"
            />

            <SideImageSection
                h2Heading="Myopia consultation"
                h3LightHeading={
                    <>
                        Is your child suffering from
                        <br />
                    </>
                }
                h3BoldHeading="Myopia (short-sightedness)?"
                sectionImage={{
                    url: '/images/section-images/myopia-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-consultation-pricing-large.png',
                    width: 616,
                    height: 549
                }}
                descriptions={[
                    "We can provide Atropine treatment and management check ups to monitor your child's eye health with our private Myopia specialist in London."
                ]}
                altText=""
                positionReversed
                textColumnExtras={
                    <div className="md:mt-12">
                        <Cta3 />
                    </div>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <PriceSection priceList={myopiaPriceList} />

            <SideImageSection
                containerClassName="md:!grid-cols-[1fr_auto]"
                h2Heading="refunds and cancellation"
                h3LightHeading={
                    <>
                        Our refunds and
                        <br />
                    </>
                }
                h3BoldHeading="cancellation policy"
                descriptions={[
                    'A new Myopia consultation with our specialists is £350 (non-refundable). However, we understand there can be circumstances where you may not be able to attend after booking.',
                    <>
                        Therefore, If you would like to change your appointment after booking, you will need to inform
                        the clinic <strong className="text-brand">72 hours before your appointment time</strong> to
                        ensure you do not lose your appointment fee.
                    </>,
                    'Any cancellations that are not communicated before after our 72 hour period policy is subject to be held by the clinic and any new appointment will need to be booked again.'
                ]}
                positionReversed
                sectionImage={{
                    url: '/images/section-images/myopia-refunds-and-cancellation.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-refunds-and-cancellation-large.png',
                    width: 756,
                    height: 550
                }}
            />

            <FullWidthImageSection2
                title="A new myopia consultation"
                description="Our London Myopia specialists save you an average of £500 for your treatment and aftercare appointments compared to other eye clinics."
                image="/images/section-images/new-myopia-consultation-small.png"
                largeImage="/images/section-images/new-myopia-consultation.png"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'myopia-price' });

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
