import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { BulletList, GlaucomaPackages2, Masthead, SideImageSection } from '@/components/page-sections';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-glaucoma-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-glaucoma-pricing-medium.png';
import { GlaucomaPackages3 } from '@/page-sections/SectionParts/GlaucomaPackages';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
 * * Url: /eye-treatments/glaucoma/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson }: PriceProps): JSX.Element {
    const heading = 'Glaucoma treatment and management cost London';
    const subheading = 'Reducing PCO after Cataract Surgery';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />
            <Masthead
                imageSmall={MastheadImageMedium}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
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
                priceText="£395 per eye"
            />
            <SideImageSection
                h2Heading="Your consultation"
                h3LightHeading={
                    <>
                        The cost of
                        <br />
                    </>
                }
                h3BoldHeading="Glaucoma management"
                descriptions={[
                    <strong className="text-[2rem] leading-[2.8rem] font-mulishBold sm:max-w-[37.1rem] block">
                        The price of your private glaucoma consultation
                    </strong>,
                    <div className="grid gap-6">
                        <strong className="text-[2.4rem] leading-[3.2rem]">£400</strong>
                        <p>
                            A comprehensive, private consultation with our dedicated Glaucoma specialist (inclusive of
                            all eye assessments and eye scans).
                        </p>
                    </div>
                ]}
                sectionImage={{
                    url: '/images/section-images/private-consultation-glaucoma-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-glaucoma-large.png',
                    width: 656,
                    height: 518
                }}
                positionReversed
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <GlaucomaPackages2 />

            <GlaucomaPackages3 />

            <SideImageSection
                h3LightHeading={
                    <>
                        Thinking about paying with <br />
                    </>
                }
                h3BoldHeading="health insurance?"
                descriptions={[
                    `We are partnered with health insurance companies to make the cost of your treatment easier! We are partnered with:`
                ]}
                sectionImage={{
                    url: '/images/section-images/glaucoma-health-insurance-large.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/glaucoma-health-insurance-large.png',
                    width: 622,
                    height: 568
                }}
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            list={[
                                'Aviva',
                                'WPA',
                                'Freedom',
                                'General Medical',
                                'Cigna UK',
                                'Bupa & Bupa international '
                            ]}
                            bold
                            bulletPoint={
                                <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                        <div className="flex gap-6 items-center justify-start flex-wrap">
                            <Image src="/images/logos/aviva.png" width={55} height={29} alt="Aviva" />
                            <Image
                                src="/images/logos/healthcare-practice.png"
                                width={107}
                                height={29}
                                alt="Health Practice"
                            />
                            <Image src="/images/logos/freedom.png" width={86} height={36} alt="Freedom" />
                            <Image
                                src="/images/logos/general-medical.png"
                                width={50}
                                height={49}
                                alt="General Medical"
                            />
                            <Image src="/images/logos/cigma.png" width={92} height={28} alt="Cigma" />
                            <Image src="/images/logos/bupa.png" width={80} height={42} alt="Bupa" />
                        </div>
                        <div>
                            <strong>
                                It's always best to check with your healthcare insurance provider that they will cover
                                your fees and produce a pre-authorisation code for you. We will require your
                                pre-authorization code before your consultation and cataract surgery.
                            </strong>
                        </div>
                    </div>
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
