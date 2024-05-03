import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { BookConsultation, CtaSection, SideImageSection } from '@/page-sections/index';
import { GlaucomaPackages3 } from '@/page-sections/SectionParts/GlaucomaPackages';
import { PageDataInterface, PriceGlaucomaContentInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import React from 'react';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import CostDetails from '@/page-sections/CataractPriceSections/CostDetails';
import { Button2 } from '@/components/Buttons';
import Logo1 from '@/logos/bupa.png';
import Logo2 from '@/logos/healthcare-practice.png';
import Logo3 from '@/logos/aviva.png';
import Logo4 from '@/logos/freedom.png';
import Logo5 from '@/logos/cigma.png';
import Logo6 from '@/logos/general-medical.png';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});
interface DataInterface extends PriceGlaucomaContentInterface, PageDataInterface<PriceGlaucomaContentInterface> {}

interface PriceProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Home/Landing page component for the App
 *
 * * Url: /glaucoma-treatment/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Price({ seo, yoastJson, data }: PriceProps): JSX.Element {
    const heading = data?.masthead_heading || 'Glaucoma treatment and management cost London';
    const subheading = data?.masthead_subheading || 'The cost of Glaucoma management';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[80rem]"
                smallImageClass="row-start-1 mt-0"
                contentContainerClassName="pb-12 lg:pb-0"
            />

            <CostDetails items={data?.costDetails} itemClass="sm:px-16 md:px-16 grid-cols-1 sm:grid-cols-[auto_1fr]" />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'The cost of Glaucoma management'}
                descriptions={data?.section_1?.descriptions}
                descriptionWrapperClass="[&_div:first-child]:mb-6"
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-glaucoma-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image ||
                        '/images/section-images/private-consultation-glaucoma-large.webp',
                    width: 656,
                    height: 518
                }}
                positionReversed
                textColumnExtras={
                    <div className="gax-x-6 grid grid-cols-[auto_1fr] justify-items-start gap-y-6 sm:gap-x-12">
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-phone-dark.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <a href="tel:0208 445 8877">
                                <span className="relative block cursor-pointer font-latoBold text-heading">
                                    (+44) 0208 445 8877
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <Image src="/images/icons/icon-chat-dark.svg" alt="" width={24} height={24} />
                            <button
                                className="relative block cursor-pointer font-latoBold text-heading"
                                onClick={openFreshdeskChat}
                            >
                                Chat with us
                            </button>
                        </div>
                        <div className="col-span-full grid place-items-start">
                            <BookConsultation
                                buttonClassName={`group/consultation transition-all border-2 border-[#003E79] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-[#003E79] rounded-[0.5rem]`}
                            >
                                <Button2 type="button" text="Book a consultation" />
                            </BookConsultation>
                        </div>
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <GlaucomaPackages3 packageList={data?.privateTreatment} />

            <SideImageSection
                h3LightHeading={data?.section_4?.heading || 'Thinking about paying with health inwsurance?'}
                descriptions={data?.section_4?.descriptions}
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/glaucoma-health-insurance-large.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image || '/images/section-images/glaucoma-health-insurance-large.webp',
                    width: 622,
                    height: 568
                }}
                largeImageClassName="h-full object-cover rounded-radius2"
                textColumnExtras={
                    <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-6 justify-self-start lg:grid-cols-3">
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo1} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo2} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo3} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]  xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo4} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo5} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full scale-[0.8] object-contain" src={Logo6} alt="" />
                        </div>
                    </div>
                }
            />

            <CtaSection title={data?.ctaSection?.title} subtitle={data?.ctaSection?.subTitle} />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'glaucoma-treatment-price' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        subTitle: stripInitialTags(data?.acf?.masthead.subTitle || ''),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    costDetails: [...data?.acf?.costDetails].map((item) => {
                        return {
                            ...item,
                            description: stripInitialTags(item.description)
                        };
                    }),
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        heading: stripInitialTags(data?.acf?.section_1?.heading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_2: Array.isArray(data?.acf?.section_2)
                        ? data?.acf.section_2.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    }
                }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
