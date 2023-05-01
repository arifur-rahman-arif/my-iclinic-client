import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H2Variant1, H3Variant2 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { FinanceCalculator, FullWidthImageSection, Masthead } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { getPageData, getTreatments } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-finance-treatment-large.png';
import MastheadImageMedium from '@/masthead/masthead-finance-treatment-medium.png';
import MastheadImageSmall from '@/masthead/masthead-finance-treatment-small.png';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Treatment';
import Cta4 from '@/page-sections/SectionParts/Cta4';
import FullWidthImageSection4 from '@/page-sections/SideImageSection/FullWidthImageSection4';
import { FinanceTreatmentPageContents, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { getElementTopPosition } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import H3Variant1 from 'src/components/Headings/H3Variant1';
import H4Variant1 from 'src/components/Headings/H4Variant1';

const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends FinanceTreatmentPageContents, PageDataInterface<FinanceTreatmentPageContents> {}

interface FinancingYourTreatmentProps {
    data: DataInterface;
    treatments: TreatmentInterface[];
    seo: any;
    yoastJson: any;
}

/**
 * Url: /pricing-and-financing/financing-your-treatment
 *
 * @export
 * @returns {JSX.Element}
 */
export default function FinancingYourTreatment({
    data,
    treatments,
    seo,
    yoastJson
}: FinancingYourTreatmentProps): JSX.Element {
    const heading: string = data?.masthead_subheading || 'Finance & health insurance options';
    const subheading: string = data?.masthead_subheading || 'Let the cost of clear vision make sense';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={<></>}
                bannerExtraComponents={
                    <div className="grid gap-4">
                        <Button2
                            type="button"
                            link="/pricing-and-financing/financing-your-treatment#calculator"
                            text="Finance calculator"
                            iconPosition="left"
                            className="group/chat-button justify-self-start normal-case"
                            onClick={() => {
                                window.scrollTo(
                                    0,
                                    getElementTopPosition(document.querySelector('#calculator') as HTMLElement) - 200
                                );
                            }}
                            icon={
                                <svg
                                    width="17"
                                    height="24"
                                    viewBox="0 0 17 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.69998 13.4C5.69998 13.7714 5.55248 14.1274 5.28993 14.39C5.02737 14.6525 4.67128 14.8 4.29998 14.8C3.92867 14.8 3.57258 14.6525 3.31003 14.39C3.04748 14.1274 2.89998 13.7714 2.89998 13.4C2.89998 13.0287 3.04748 12.6727 3.31003 12.4101C3.57258 12.1475 3.92867 12 4.29998 12C4.67128 12 5.02737 12.1475 5.28993 12.4101C5.55248 12.6727 5.69998 13.0287 5.69998 13.4ZM5.69998 17.6C5.69998 17.9714 5.55248 18.3274 5.28993 18.59C5.02737 18.8526 4.67128 19 4.29998 19C3.92867 19 3.57258 18.8526 3.31003 18.59C3.04748 18.3274 2.89998 17.9714 2.89998 17.6C2.89998 17.2287 3.04748 16.8727 3.31003 16.6101C3.57258 16.3475 3.92867 16.2001 4.29998 16.2001C4.67128 16.2001 5.02737 16.3475 5.28993 16.6101C5.55248 16.8727 5.69998 17.2287 5.69998 17.6ZM12.7 14.8C13.0713 14.8 13.4274 14.6525 13.6899 14.39C13.9525 14.1274 14.1 13.7714 14.1 13.4C14.1 13.0287 13.9525 12.6727 13.6899 12.4101C13.4274 12.1475 13.0713 12 12.7 12C12.3287 12 11.9726 12.1475 11.71 12.4101C11.4475 12.6727 11.3 13.0287 11.3 13.4C11.3 13.7714 11.4475 14.1274 11.71 14.39C11.9726 14.6525 12.3287 14.8 12.7 14.8ZM14.1 17.6C14.1 17.9714 13.9525 18.3274 13.6899 18.59C13.4274 18.8526 13.0713 19 12.7 19C12.3287 19 11.9726 18.8526 11.71 18.59C11.4475 18.3274 11.3 17.9714 11.3 17.6C11.3 17.2287 11.4475 16.8727 11.71 16.6101C11.9726 16.3475 12.3287 16.2001 12.7 16.2001C13.0713 16.2001 13.4274 16.3475 13.6899 16.6101C13.9525 16.8727 14.1 17.2287 14.1 17.6ZM8.49998 14.8C8.87128 14.8 9.22737 14.6525 9.48993 14.39C9.75248 14.1274 9.89998 13.7714 9.89998 13.4C9.89998 13.0287 9.75248 12.6727 9.48993 12.4101C9.22737 12.1475 8.87128 12 8.49998 12C8.12867 12 7.77258 12.1475 7.51003 12.4101C7.24748 12.6727 7.09998 13.0287 7.09998 13.4C7.09998 13.7714 7.24748 14.1274 7.51003 14.39C7.77258 14.6525 8.12867 14.8 8.49998 14.8ZM9.89998 17.6C9.89998 17.9714 9.75248 18.3274 9.48993 18.59C9.22737 18.8526 8.87128 19 8.49998 19C8.12867 19 7.77258 18.8526 7.51003 18.59C7.24748 18.3274 7.09998 17.9714 7.09998 17.6C7.09998 17.2287 7.24748 16.8727 7.51003 16.6101C7.77258 16.3475 8.12867 16.2001 8.49998 16.2001C8.87128 16.2001 9.22737 16.3475 9.48993 16.6101C9.75248 16.8727 9.89998 17.2287 9.89998 17.6ZM4.99998 3.60005C4.44302 3.60005 3.90888 3.8213 3.51505 4.21512C3.12122 4.60895 2.89998 5.14309 2.89998 5.70005V7.10005C2.89998 7.657 3.12122 8.19115 3.51505 8.58497C3.90888 8.9788 4.44302 9.20005 4.99998 9.20005H12C12.5569 9.20005 13.0911 8.9788 13.4849 8.58497C13.8787 8.19115 14.1 7.657 14.1 7.10005V5.70005C14.1 5.14309 13.8787 4.60895 13.4849 4.21512C13.0911 3.8213 12.5569 3.60005 12 3.60005H4.99998ZM4.29998 5.70005C4.29998 5.5144 4.37373 5.33635 4.505 5.20507C4.63628 5.0738 4.81432 5.00005 4.99998 5.00005H12C12.1856 5.00005 12.3637 5.0738 12.495 5.20507C12.6262 5.33635 12.7 5.5144 12.7 5.70005V7.10005C12.7 7.2857 12.6262 7.46375 12.495 7.59502C12.3637 7.7263 12.1856 7.80005 12 7.80005H4.99998C4.81432 7.80005 4.63628 7.7263 4.505 7.59502C4.37373 7.46375 4.29998 7.2857 4.29998 7.10005V5.70005ZM16.9 19.7001C16.9 20.6283 16.5312 21.5185 15.8749 22.1749C15.2185 22.8313 14.3282 23.2001 13.4 23.2001H3.59998C2.67172 23.2001 1.78148 22.8313 1.1251 22.1749C0.468725 21.5185 0.0999756 20.6283 0.0999756 19.7001V4.30005C0.0999756 3.37179 0.468725 2.48155 1.1251 1.82518C1.78148 1.1688 2.67172 0.800049 3.59998 0.800049H13.4C14.3282 0.800049 15.2185 1.1688 15.8749 1.82518C16.5312 2.48155 16.9 3.37179 16.9 4.30005V19.7001ZM15.5 4.30005C15.5 3.74309 15.2787 3.20895 14.8849 2.81512C14.4911 2.4213 13.9569 2.20005 13.4 2.20005H3.59998C3.04302 2.20005 2.50888 2.4213 2.11505 2.81512C1.72122 3.20895 1.49998 3.74309 1.49998 4.30005V19.7001C1.49998 20.257 1.72122 20.7911 2.11505 21.185C2.50888 21.5788 3.04302 21.8001 3.59998 21.8001H13.4C13.9569 21.8001 14.4911 21.5788 14.8849 21.185C15.2787 20.7911 15.5 20.257 15.5 19.7001V4.30005Z"
                                        fill="#fff"
                                        className="transition-all duration-500 group-hover/chat-button:fill-heading2"
                                    />
                                </svg>
                            }
                        />

                        <button
                            className="flex items-center justify-start gap-4"
                            onClick={() => {
                                window.scrollTo(
                                    0,
                                    getElementTopPosition(document.querySelector('#insurance') as HTMLElement) - 150
                                );
                            }}
                        >
                            <Image
                                src="/images/icons/icon-love.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                Our insurance partners
                            </span>
                        </button>
                    </div>
                }
            />

            <FullWidthImageSection4
                boldHeading={
                    <div className="font-latoBold text-white md:max-w-[54.4rem]">
                        {data?.section_1.heading || 'Correct your vision from just £150 per month'}
                    </div>
                }
                altText={data?.section_1.large_image?.alt}
                description={
                    (data?.section_1.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1.descriptions)) || [
                        <H3Variant2 className="text-white">
                            How much do you currently spend on your glasses and contact lenses?
                        </H3Variant2>,
                        'Over time the cost of purchasing glasses and everyday contact lenses add up to a massive, inconvenient spend.'
                    ]
                }
                image={data?.section_1.image?.url || '/images/section-images/monthly-spending-finance.png'}
                desktopImage={data?.section_1.large_image?.url || '/images/section-images/monthly-spending-finance.png'}
                containerClass="pb-16 !bg-heading2"
                sectionClass="md:!bg-heading2"
                largeImageClassName="!rounded-primary"
            />

            {/* <Section> */}
            {/*     <Container className="grid place-items-center gap-12"> */}
            {/*         <div className="grid place-items-center gap-6"> */}
            {/*             <span className="text-[2rem] leading-[2.8rem]">No more</span> */}
            {/*             <Image src="/images/section-images/no-more-glasses.png" alt="" width={165} height={75} /> */}
            {/*         </div> */}

            {/*         <H2Variant1 className="normal-case">Permanent clear vision</H2Variant1> */}

            {/*         <div className="grid max-w-[59.5rem] place-items-center gap-6"> */}
            {/*             <p className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]"> */}
            {/*                 Correct your vison permanently with{' '} */}
            {/*                 <span className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-[#FE8083] md:text-[2.4rem] md:leading-[3.2rem]"> */}
            {/*                     24 month finance */}
            {/*                 </span> */}
            {/*                 &nbsp; option from&nbsp; */}
            {/*                 <span className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-[#FE8083] md:text-[2.4rem] md:leading-[3.2rem]"> */}
            {/*                     £150/Per eye, per month. */}
            {/*                 </span> */}
            {/*             </p> */}
            {/*             <p className="max-w-[39rem] text-center"> */}
            {/*                 Our vision correction treatments provide a without the hassle of glasses and contact lenses. */}
            {/*             </p> */}
            {/*         </div> */}
            {/*     </Container> */}
            {/* </Section> */}

            <Section>
                <Container className="grid place-items-center gap-12">
                    {data?.calculator_heading ? (
                        HTMLReactParser(data.calculator_heading)
                    ) : (
                        <>
                            <div className="grid place-items-center gap-6">
                                <span className="text-[2rem] leading-[2.8rem]">No more</span>
                                <Image
                                    src="/images/section-images/no-more-glasses.png"
                                    alt=""
                                    width={165}
                                    height={75}
                                />
                            </div>

                            <H2Variant1 className="normal-case">Permanent clear vision</H2Variant1>

                            <div className="grid max-w-[59.5rem] place-items-center gap-6">
                                <p className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                                    Correct your vison permanently with{' '}
                                    <span className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-[#FE8083] md:text-[2.4rem] md:leading-[3.2rem]">
                                        24 month finance
                                    </span>
                                    &nbsp; option from&nbsp;
                                    <span className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-[#FE8083] md:text-[2.4rem] md:leading-[3.2rem]">
                                        £150/Per eye, per month.
                                    </span>
                                </p>
                                <p className="max-w-[39rem] text-center">
                                    Our vision correction treatments provide a without the hassle of glasses and contact
                                    lenses.
                                </p>
                            </div>
                        </>
                    )}
                </Container>
            </Section>

            <FinanceCalculator treatments={treatments} />

            <Section id="insurance">
                <Container className="grid place-items-center gap-6">
                    {data?.section_3 ? (
                        HTMLReactParser(data.section_3)
                    ) : (
                        <>
                            <H3Variant2 className="text-center">Our health insurance partners</H3Variant2>
                            <p className="text-center">
                                <strong>Understanding how your health insurance covers your fees:</strong>
                            </p>
                            <p className="max-w-[45.4rem] text-center">
                                You are eligible to use your health insurance with our partnered insurance companies
                            </p>
                        </>
                    )}
                </Container>
            </Section>

            <Container>
                <div className="mt-12 flex flex-col items-center justify-center gap-12 sm:flex-row sm:flex-wrap md:mt-24 md:gap-14">
                    {data?.section_4 ? (
                        HTMLReactParser(data.section_4)
                    ) : (
                        <>
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
                            <Image
                                src="/images/logos/general-medical.png"
                                width={85}
                                height={83}
                                alt=""
                                quality={100}
                            />
                        </>
                    )}
                </div>
            </Container>

            <Section className="!mt-12 bg-brandLight md:!mt-16">
                <Container className="grid place-items-center gap-16 py-12 md:py-24 xl:py-32">
                    {data?.section_5 ? (
                        HTMLReactParser(data.section_5)
                    ) : (
                        <>
                            <H3Variant1 className="block max-w-[89.5rem] text-center">
                                It's always best to check with your healthcare insurance provider that they will cover
                                your fees and provide a pre-authorisation code for you.
                            </H3Variant1>

                            <H4Variant1 className="!w-auto rounded-primary border-2 border-[#F3411A] p-10 text-center">
                                <span className="text-[#F3411A]">Important:</span> We will require your
                                pre-authorization code before your consultation
                            </H4Variant1>
                        </>
                    )}

                    {/* Cta section */}
                    <div className="grid place-items-center md:mt-4">
                        <span>Need help?</span>
                        <strong className="mt-6">Speak to our friendly team</strong>

                        <div className="mt-4">
                            <Cta4 />
                        </div>
                    </div>

                    <span
                        className={`text-center font-latoBold text-[2.8rem] leading-[3.2rem] text-heading2 md:mt-12 xl:mt-24`}
                    >
                        A better quality of life is just around the corner!
                    </span>
                </Container>
            </Section>

            <LazyComponent>
                <CompanyLogos sectionClass="!mt-24" />
            </LazyComponent>
        </Page>
    );
}

/**
 * Fetch the data from WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<FinanceTreatmentPageContents> = await getPageData({
            slug: 'financing-your-treatment'
        });
        const treatments = await getTreatments();

        return {
            /* eslint-disable */
            props: {
                treatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
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
