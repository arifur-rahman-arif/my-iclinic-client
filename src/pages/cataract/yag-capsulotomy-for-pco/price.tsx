import { BreadCrumb } from '@/components/Breadcrumb';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletList,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';
import { CtaSection } from '@/components/page-sections/CtaSection';
import { yagPriceList } from '@/components/page-sections/PriceCard/priceList';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-yag-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-yag-pricing-medium.png';
import MastheadImageSmall from '@/masthead/masthead-yag-pricing-small.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'));

interface IclPricingProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: cataract/yag-capsulotomy-for-pco/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function IclPricing({ seo, yoastJson }: IclPricingProps): JSX.Element {
    const heading = 'YAG laser Capsulotomy surgery cost London';
    const subheading = 'Save an average of £1,000';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
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
                priceText="£395 per eye"
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] lowercase leading-[2.4rem] text-heading2 first-letter:uppercase">
                        All-inclusive
                    </span>
                }
            />

            <SideImageSection
                h2Heading="Your consultation"
                h3LightHeading={
                    <>
                        What’s included in my
                        <br />
                    </>
                }
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-yag.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-yag-large.png',
                    width: 577,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="!ml-0"
                        list={[
                            'A comprehensive consultation and YAG laser treatment performed in our private laser suite with your dedicated specialist and our friendly team',
                            <>
                                <strong>FREE aftercare</strong> appointments with your dedicated YAG laser specialist.
                            </>
                        ]}
                    />
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <PriceSection
                priceList={yagPriceList}
                itemClassName="!rounded-tl-primary !rounded-tr-primary md:!rounded-bl-primary md:!rounded-tl-none "
            />

            <FullWidthImageSection2
                title="The cost of YAG Laser capsulotomy couldn’t be easier!"
                description="Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics."
                largeImage="/images/section-images/yag-capsulotomy-large.png"
                image="/images/section-images/yag-capsulotomy.png"
            />

            <CtaSection />
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
