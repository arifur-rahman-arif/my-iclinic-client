/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { CtaSection } from '@/page-sections/CtaSection';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import {
    BookConsultation,
    BulletPoint,
    FullWidthImageSection,
    FullWidthImageSection2,
    SideImageSection
} from '@/page-sections/index';
import HTMLReactParser from 'html-react-parser';

import React from 'react';
import InclusiveCostImage from '@/section-images/inclusive-cost-image.webp';
import { RelexSmilePriceContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import CostDetails from '@/components/page-sections/RelexSmilePriceSections/CostDetails';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});

interface DataInterface extends RelexSmilePriceContentInterface, PageDataInterface<RelexSmilePriceContentInterface> {}

interface PricePageProps {
    data: DataInterface;
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
export default function Price({ seo, yoastJson, data }: PricePageProps): JSX.Element {
    // const priceSection: any = data?.relex_smile_price
    //     ? data?.relex_smile_price.map((service) => {
    //           return {
    //               ...service,
    //               price: service?.price,
    //               priceText: service?.priceText,
    //               priceDescription: service?.priceDescription
    //           };
    //       })
    //     : null;

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <CataractHero {...data?.masthead} />

            <CostDetails items={data?.costDetails} />

            <SideImageSection
                // h2Heading={data?.section_1?.sub_heading || 'Relex smile consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-relex-smile.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image ||
                        '/images/section-images/private-consultation-relex-smile-desktop.webp',
                    width: 616,
                    height: 549
                }}
                altText=""
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_1?.length && HTMLReactParser(data?.section_1?.bullet_1)) ||
                                    HTMLReactParser(
                                        '<a href="/suitability-check">A FREE suitability</a> laser check with our laser specialist (a comprehensive assessment of your suitability and how ReLEx SMILE will suit your lifestyle).'
                                    )}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconPersonInFrame} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_2?.length && HTMLReactParser(data?.section_1?.bullet_2)) ||
                                    'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).'}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_3?.length && HTMLReactParser(data?.section_1?.bullet_3)) ||
                                    'Your ReLEx SMILE treatment performed in our private laser suite with your dedicated specialist and our friendly team.'}
                            </div>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyePlus} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <div>
                                {(data?.section_1?.bullet_4?.length && HTMLReactParser(data?.section_1?.bullet_4)) ||
                                    'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'}
                            </div>
                        </li>
                    </ul>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Want to pay for your treatment each month?'}
                midExtras={
                    <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#893277]">
                        {data?.section_2?.sub_heading || 'Finance available for ReLEx SMILE'}
                    </span>
                }
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having ReLEx SMILE to correct your vision is a great investment
					in your eye health and lifestyle. We offer 12 months interest- free finance to help make
					 that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/relex-smile-finance.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/relex-smile-finance-large.webp',
                    width: 574,
                    height: 560
                }}
                largeImageClassName="xl:w-full xl:h-full object-cover rounded-[1rem]"
                positionReversed
                textColumnExtras={
                    <div className="md:max-w-[47.4rem]">
                        <div className="grid">
                            <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
                            <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                                {(data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                    'You are eligible for our 12 months interest-free finance'
                                ]}
                            </span>
                        </div>
                        <div className="mt-12 grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
                            {/* <Image src={IconCalculator} alt="" className="self-center" /> */}
                            <BulletPoint />
                            <span className="font-mulishBold text-heading">
                                {data?.section_2?.bullet_points_heading ||
                                    'Calculate your monthly spend for your laser treatment'}
                            </span>
                            <div className="col-span-full">
                                {HTMLReactParser(data?.section_2?.bullet_1) ||
                                    'If you’re eligible for our interest-free finance, you can calculate your monthly spend so you’re always in the know with regard to payments for your laser eye treatment.'}
                            </div>
                            <div className="col-span-full">
                                {HTMLReactParser(data?.section_2?.bullet_2) ||
                                    HTMLReactParser(
                                        'If you have any queries regarding pricing, you can get in touch with our specialists for a consultation today on  <a href="tel:0208 445 8877">  <span className="whitespace-nowrap font-mulishBold text-blue">0208 445 8877.</span> </a>'
                                    )}
                            </div>
                        </div>

                        {/* Cta section part */}
                        <div className="mt-12 grid gap-x-4  gap-y-4 xs:grid-cols-[auto_1fr] sm:gap-x-8">
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
                            <div className="col-span-full mt-2 grid place-items-start">
                                <BookConsultation
                                    buttonClassName={`group/consultation transition-all border-2 border-[#003E79] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-[#003E79] rounded-[0.5rem]`}
                                >
                                    <button className="" aria-label="Book a consultation">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                            />
                                            <path
                                                d="M13.334 1.66699V5.00033"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                            />
                                            <path
                                                d="M6.66602 1.66699V5.00033"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                            />
                                            <path
                                                d="M2.5 8.33301H17.5"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                            />
                                        </svg>

                                        <span
                                            className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-[#003E79]`}
                                        >
                                            Book a consultation
                                        </span>
                                    </button>
                                </BookConsultation>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* <PriceSection priceList={priceSection || relexSmilePriceList} /> */}

            <FullWidthImageSection2
                title={data?.section_3?.title || 'ReLEx SMILE surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
            />

            <FullWidthImageSection
                h3Title={
                    <>
                        {(data?.section_4?.title?.length && HTMLReactParser(data?.section_4?.title)) ||
                            HTMLReactParser(
                                ' <strong className="normal-case">Permanently correct your vision</strong> with our all-inclusive cost.'
                            )}
                    </>
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
                subtitle={data?.call_section?.heading || 'OUR OPTIONS AVAILABLE'}
                title={data?.call_section?.sub_heading || 'Speak To Our Friendly Team'}
                sectionClassName="!mt-0"
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
        const data: WpPageResponseInterface<RelexSmilePriceContentInterface> = await getPageData({
            slug: 'relex-smile-london-price'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1
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
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    relex_smile_price: Array.isArray(data?.acf?.relex_smile_price)
                        ? data?.acf.relex_smile_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    call_section: {
                        ...data?.acf?.call_section
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
