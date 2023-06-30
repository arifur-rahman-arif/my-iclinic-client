import { BreadCrumb } from '@/components/Breadcrumb';
// import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { InsurancePartners, Masthead, SideImageSection, TextColumn } from '@/components/page-sections';
import { GlaucomaPackages3 } from '@/components/page-sections/SectionParts/GlaucomaPackages';
import {
    cataractPriceList,
    diagnosisPriceList,
    eyelidSurgeryPriceList,
    glaucomaPriceList,
    keratoconusTreatmentPriceList,
    maculerDegenerationPriceList,
    pricePageList1,
    visionCorrectionPriceList
} from '@/components/page-sections/SectionParts/GlaucomaPackages/GlaucomaPackages3';
// import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-price-large.png';
import MastheadImageMedium from '@/masthead/masthead-price-medium.png';
import MastheadImageSmall from '@/masthead/masthead-price-small.png';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import { PageDataInterface, PricePageContentProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';

import Image from 'next/image';
// import { BiRightArrowAlt } from 'react-icons/bi';
import { Button } from 'src/components/Buttons';

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
    const heading = data?.masthead_heading || 'Our private consultation and treatment prices';
    const subheading = data?.masthead_subheading || 'Our leading specialists';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                imagePosition="object-[-14rem_0] !object-cover"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={<></>}
                bannerExtraComponents={<ChatWithUs />}
            />

            <div className="mt-24 block h-[0.1rem] w-full md:hidden"></div>

            {/* <UspSection list={homeUspList} /> */}

            <GlaucomaPackages3
                dynamicSectionHead={<></>}
                packageList={data?.section_1 || pricePageList1}
                itemClassName="!items-stretch"
                cardClassName="md:!place-items-start"
                packageContainerClassName="md:!ml-0"
                titleClassName="sticky top-[23rem]"
            />

            {/* <Section>
                <Container className="grid place-items-center gap-12 md:gap-24">
                    <div className="grid gap-6">
                        <h2 className="normal-case">
                            Our health <strong className="normal-case">insurance partners</strong>
                        </h2>
                        <LinkStyle
                            url="/pricing-and-financing/financing-your-treatment#insurance"
                            className="group/link item-center flex justify-center gap-1"
                        >
                            Fund your treatment with our health insurance partners
                            <BiRightArrowAlt className="h-10 w-10 fill-blue" />
                        </LinkStyle>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:flex-wrap md:gap-14">
                        <Image
                            src="/images/logos/healthcare-practice.png"
                            width={185}
                            height={50}
                            alt=""
                            quality={100}
                        />
                        <Image src="/images/logos/freedom.png" width={140} height={65} alt="" quality={100} />
                        <Image src="/images/logos/cigma.png" width={145} height={44} alt="" quality={100} />
                        <Image src="/images/logos/bupa.png" width={110} height={57} alt="" quality={100} />
                        <Image src="/images/logos/aviva.png" width={90} height={49} alt="" quality={100} />
                        <Image src="/images/logos/general-medical.png" width={85} height={83} alt="" quality={100} />
                    </div>
                </Container>
            </Section> */}

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                packageList={data?.section_2 || cataractPriceList}
                itemClassName="!items-stretch"
                dynamicSectionHead={
                    <div className="px-8 xl:px-0">
                        <TextColumn h3LightHeading="Our treatment" h3BoldHeading="prices" />
                    </div>
                }
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={data?.section_3 || visionCorrectionPriceList}
                itemClassName="!items-stretch"
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading || 'Funding Your'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.bold_heading || 'Treatment'}
                descriptions={
                    (data?.section_4.descriptions.length && data?.section_4.descriptions) || [
                        <>
                            Interested in funding your vision correction treatment with 24 months finance?{' '}
                            <LinkStyle url="/pricing-and-financing/financing-your-treatment#calculator">
                                Calculate your monthly spend
                            </LinkStyle>{' '}
                            for clear, permanent vision. Budget and save yourself from purchasing glasses and contact
                            lenses in the future.
                        </>
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image?.url || '/images/section-images/funding-your-treatment.jpg',
                    width: 388,
                    height: 469
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image?.url || '/images/section-images/funding-your-treatment.jpg',
                    width: 659,
                    height: 687
                }}
                altText={data?.section_4?.large_image?.alt}
                largeImageClassName="rounded-primary"
                smallImageClassName="rounded-primary"
                textColumnExtras={
                    <div className="grid place-items-start">
                        <Button
                            type="anchor"
                            link="/pricing-and-financing/financing-your-treatment#calculator"
                            text="Calculate your monthly spend"
                            iconPosition="left"
                            className="!border-orange !bg-orange !text-heading hover:!bg-transparent"
                            icon={
                                <Image
                                    src="/images/icons/icon-calculator-dark.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />
                    </div>
                }
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={data?.section_5 || glaucomaPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={data?.section_6 || maculerDegenerationPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={data?.section_7 || keratoconusTreatmentPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={data?.section_8 || eyelidSurgeryPriceList}
                itemClassName="!items-stretch"
            />

            <InsurancePartners />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={
                    <div className="px-8 xl:px-0">
                        <TextColumn
                            h3LightHeading={data?.section_9?.heading?.light_heading || 'All necessary tests are'}
                            h3BoldHeading={
                                data?.section_9?.heading?.bold_heading || 'included in our consultation prices'
                            }
                            descriptions={
                                (data?.section_9.descriptions.length && data?.section_9.descriptions) || [
                                    <strong>
                                        If tests are required without a consultation the prices are as follows:
                                    </strong>
                                ]
                            }
                        />
                    </div>
                }
                packageList={data?.section_9?.package || diagnosisPriceList}
                itemClassName="!items-stretch"
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
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions)
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
