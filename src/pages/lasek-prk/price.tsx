/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { CtaSection } from '@/page-sections/CtaSection';
import {
    BookConsultation,
    BulletList,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    SideImageSection
} from '@/page-sections/index';
import { NormalSection4 } from '@/page-sections/NormalSection';
import InclusiveCostImage from '@/section-images/lasek-inclusive-cost-image.webp';
import { PricelskprkContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import React from 'react';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import CostDetails from '@/components/page-sections/RelexSmilePriceSections/CostDetails';
import Image from 'next/image';
import { Button2 } from '@/components/Buttons';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});

interface DataInterface extends PricelskprkContentInterface, PageDataInterface<PricelskprkContentInterface> {}

interface LasekPricingProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /lasek-prk/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasekPricing({ seo, yoastJson, data }: LasekPricingProps): JSX.Element {
    // const priceSection: any = data?.lsk_price
    //     ? data?.lsk_price.map((service) => {
    //           return {
    //               ...service,
    //               price: service?.price,
    //               priceText: service?.priceText,
    //               priceDescription: HTMLReactParser(service?.priceDescription)
    //           };
    //       })
    //     : null;

    return (
        <Page title="LASEK, PRK & PTK laser surgery cost London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                smallImageClass="row-start-1 mt-0"
                contentContainerClassName="pb-12 md:pb-0"
            />

            <CostDetails items={data?.costDetails} />

            {/* SECTION 1 */}
            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.section_1?.heading || 'What’s included in my private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-lasek.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-lasek-large.webp',
                    width: 616,
                    height: 534
                }}
                altText=""
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={
                            (data?.section_1?.lists?.length && stringArrayToElementArray(data?.section_1?.lists)) || [
                                <>
                                    <LinkText href="/suitability-check">
                                        <strong>A FREE suitability</strong>
                                    </LinkText>{' '}
                                    laser check with our laser specialist (acomprehensive assessment of your suitability
                                    and how LASEK or PRK laser eye surgery will suit your lifestyle).
                                </>,
                                'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
                                'Your laser surgery performed in our private laser suite with your dedicated specialist and our friendly team.',
                                'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
                            ]
                        }
                    />
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            {/* SECTION 2 */}
            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Thinking about splitting your laser treatment cost?'}
                midExtras={
                    <span className="text-balance font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#893277]">
                        {data?.section_2?.subheading || 'Finance available for LASEK, PRK & PTK laser eye surgery'}
                    </span>
                }
                altText=""
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having LASEK, PRK or PTK to correct your vision is a great investment in your eye health and lifestyle. We offer 24 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/lasek-finance.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/lasek-finance-large.webp',
                    width: 623,
                    height: 560
                }}
                positionReversed
                textColumnExtras={
                    <div className="grid justify-items-start">
                        <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>
                        <div className="grid gap-4">
                            {data?.section_2?.lists?.length
                                ? data?.section_2?.lists.map((item, key) => (
                                      <strong className="text-heading" key={key}>
                                          {item}
                                      </strong>
                                  ))
                                : null}
                        </div>

                        <FinanceList list={['Calculate your monthly spend for your ICL treatment']} className="mt-6" />

                        <p>
                            If you’re eligible for our interest-free finance, you can calculate your monthly spend so
                            you’re always in the know with regard to payments for your laser eye treatment.
                        </p>

                        <p>
                            If you have any queries regarding pricing, you can get in touch with our specialists for a
                            consultation today.
                        </p>

                        {/* Cta section part */}
                        <div className="mt-12 grid content-start gap-x-4 gap-y-4 xs:grid-cols-[auto_1fr] sm:gap-x-8">
                            <div className="flex items-center justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-telephone-outline.svg"
                                    alt=""
                                    quality={70}
                                    width={20}
                                    height={20}
                                    className="h-8 w-8"
                                />
                                <a href="tel:0208 445 8877">
                                    <span className="font-mub relative block cursor-pointer font-mulishBold text-heading">
                                        (+44) 0208 445 8877
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <Image src="/images/icons/icon-chat-dark.svg" alt="" width={24} height={24} />
                                <button
                                    className="font-mub relative block -translate-y-1 cursor-pointer font-mulishBold text-heading"
                                    onClick={openFreshdeskChat}
                                >
                                    Chat with us
                                </button>
                            </div>
                            <div className="col-span-full grid place-items-start">
                                <BookConsultation>
                                    <Button2 text="Book a consultation" className="" type="button" />
                                </BookConsultation>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* <PriceSection priceList={priceSection || lasekPriceList} /> */}
            {/* SECTIOn 3 */}
            <FullWidthImageSection2
                title={data?.section_3?.title || 'LASEK & PRK Laser eye surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                image={data?.section_3?.image || '/images/section-images/private-consultation-lasek.webp'}
                largeImage={data?.section_3?.large_image || '/images/section-images/private-consultation-lasek.webp'}
            />

            <FullWidthImageSection
                titleClass="[&_*]:normal-case"
                h3Title={
                    HTMLReactParser(data?.section_4.title) || (
                        <>
                            <strong className="normal-case">Permanently correct your vision</strong> with our
                            all-inclusive cost.
                        </>
                    )
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                overlayAnimation
                textColumnOverlay
                sectionClass="relative"
            />
            <CtaSection
                sectionClassName="!mt-0"
                title={data?.speaktoteam?.title}
                subtitle={data?.speaktoteam?.subtitle}
            />

            {/* <NormalSection4 title={data?.ptkeyesurgerycost?.title} description={data?.ptkeyesurgerycost?.description} /> */}
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
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        subTitle: stripInitialTags(data?.acf?.masthead?.subTitle),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_1?.lists)
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    lsk_price: Array.isArray(data?.acf?.lsk_price)
                        ? data?.acf.lsk_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    section_4: {
                        ...data?.acf?.section_4,
                        title: stripInitialTags(data?.acf?.section_4?.title)
                    },
                    speaktoteam: {
                        ...data?.acf?.speaktoteam
                    },
                    ptkeyesurgerycost: {
                        ...data?.acf?.ptkeyesurgerycost
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_5?.lists)
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
