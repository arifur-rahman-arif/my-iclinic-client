import { BreadCrumb } from '@/components/Breadcrumb';
import Page from '@/components/Page';
import { InsurancePartners } from '@/components/page-sections';
import { getPageData } from '@/lib';
import UspSection from '@/page-sections/Usp/UspSection';
import { PageDataInterface, PricePageContentProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';

import Image from 'next/image';
import { Button2 } from 'src/components/Buttons';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import React from 'react';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import PricePackageSection from '@/page-sections/SectionParts/GlaucomaPackages/PricePackageSection';
import PricePackageSection2 from '@/page-sections/SectionParts/GlaucomaPackages/PricePackageSection2';
import FundingTreatment from '@/page-sections/HomePage/FundingTreatment';

interface DataInterface extends PricePageContentProps, PageDataInterface<PricePageContentProps> {}

interface OurPricesProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Our prices pages
 * @export
 * @returns {JSX.Element}
 */
export default function OurPrices({ seo, yoastJson, data }: OurPricesProps): JSX.Element {
    return (
        <Page title="Our private consultation and treatment prices" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[69rem]"
                smallImageClass="row-start-1 mt-0"
                suitabilityButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border-transparent bg-transparent text-white hover:text-[#007EF5]"
                            iconPosition="left"
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <PricePackageSection {...data?.section1} id="our-consultation-prices" />

            <PricePackageSection2 {...data?.section2} id="our-treatment-prices" />

            <FundingTreatment
                excludeLinkButton
                heading={data?.section_4?.heading}
                description={data?.section_4?.description}
                middleCta={
                    <div className="gax-x-6 col-start-2 mb-6 grid grid-cols-[auto_1fr] justify-items-start gap-y-6 sm:gap-x-12">
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
                            <Button2
                                type="anchor"
                                link="/pricing-and-financing/financing-your-treatment"
                                text="Calculator your monthly spend"
                            />
                        </div>
                    </div>
                }
            />

            <PricePackageSection2 {...data?.section5} id="glaucoma-surgery" />

            <PricePackageSection2 {...data?.section6} id="general-emergency" />

            <UspSection />

            <InsurancePartners />
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
        const data: WpPageResponseInterface<PricePageContentProps> = await getPageData({
            slug: 'our-prices'
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
                        subTitle: stripInitialTags(data?.acf?.masthead?.subTitle || ''),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    section1: {
                        ...data?.acf?.section1,
                        packages: data?.acf?.section1?.packages
                            ? data.acf.section1.packages.map((packageItem) => {
                                  return {
                                      ...packageItem,
                                      title: stripInitialTags(packageItem?.title || ''),
                                      description: stripInitialTags(packageItem?.description || '')
                                  };
                              })
                            : null
                    },
                    section2: {
                        ...data?.acf?.section2,
                        packages: data?.acf?.section2?.packages
                            ? data.acf.section2.packages.map((packageItem) => {
                                  return {
                                      ...packageItem,
                                      items: packageItem?.items?.map((item) => {
                                          return {
                                              ...item,
                                              title: stripInitialTags(item?.title || ''),
                                              description: stripInitialTags(item?.description || '')
                                          };
                                      })
                                  };
                              })
                            : null
                    },
                    section5: {
                        ...data?.acf?.section5,
                        packages: data?.acf?.section5?.packages
                            ? data.acf.section5.packages.map((packageItem) => {
                                  return {
                                      ...packageItem,
                                      items: packageItem?.items?.map((item) => {
                                          return {
                                              ...item,
                                              title: stripInitialTags(item?.title || ''),
                                              description: stripInitialTags(item?.description || '')
                                          };
                                      })
                                  };
                              })
                            : null
                    },
                    section6: {
                        ...data?.acf?.section6,
                        description: stripInitialTags(data?.acf?.section6?.description || ''),
                        packages: data?.acf?.section6?.packages
                            ? data.acf.section6.packages.map((packageItem) => {
                                  return {
                                      ...packageItem,
                                      items: packageItem?.items?.map((item) => {
                                          return {
                                              ...item,
                                              title: stripInitialTags(item?.title || ''),
                                              description: stripInitialTags(item?.description || '')
                                          };
                                      })
                                  };
                              })
                            : null
                    },
                    section_9: {
                        ...data?.acf.section_9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_9?.descriptions)
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
