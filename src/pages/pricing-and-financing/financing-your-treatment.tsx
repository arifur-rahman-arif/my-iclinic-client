import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H3Variant2 } from '@/components/Headings';
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
                    <div className="grid place-items-center gap-4">
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
                                    width="22"
                                    height="22"
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
                                        className="transition-all duration-500 group-hover/chat-button:stroke-heading2"
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

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        {data?.section_1.heading || 'Correct your vision from just £150 per month'}
                    </div>
                }
                altText={data?.section_1.large_image?.alt}
                description={
                    (data?.section_1.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1.descriptions)) || [
                        <H3Variant2>How much do you currently spend on your glasses and contact lenses?</H3Variant2>,
                        'Over time the cost of purchasing glasses and everyday contact lenses add up to a massive, inconvenient spend.'
                    ]
                }
                image={data?.section_1.image?.url || '/images/section-images/monthly-spending-finance.png'}
                desktopImage={data?.section_1.large_image?.url || '/images/section-images/monthly-spending-finance.png'}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <Section>
                <Container className="grid place-items-center">
                    {data?.calculator_heading ? (
                        HTMLReactParser(data.calculator_heading)
                    ) : (
                        <H3Variant2 className="max-w-[79.7rem] text-center !font-mulishLight">
                            Our vision correction treatments provide a{' '}
                            <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] md:text-[3rem] md:leading-[3.6rem]">
                                24 month finance option from £150/Per eye, per month for permanently clear vision,
                            </strong>{' '}
                            without the hassle of glasses and contact lenses.
                        </H3Variant2>
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
