import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H2Variant1, H3Variant2 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { FinanceCalculator, Masthead } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { getPageData, getTreatments } from '@/lib';
import Logo3 from '@/logos/aviva.png';

import Logo1 from '@/logos/bupa.png';
import Logo5 from '@/logos/cigma.png';
import Logo4 from '@/logos/freedom.png';
import Logo6 from '@/logos/general-medical.png';
import Logo2 from '@/logos/healthcare-practice.png';
import MastheadImageLarge from '@/masthead/masthead-finance-treatment-large.png';
import MastheadImageMedium from '@/masthead/masthead-finance-treatment-medium.png';
import MastheadImageSmall from '@/masthead/masthead-finance-treatment-small.png';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Treatment';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import FullWidthImageSection4 from '@/page-sections/SideImageSection/FullWidthImageSection4';
import { FinanceTreatmentPageContents, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { getElementTopPosition } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FiHelpCircle } from 'react-icons/fi';

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
                            text="Finance calculator"
                            iconPosition="left"
                            className="group/chat-button !bg-[#032B46] normal-case hover:!bg-transparent"
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

                        <Button2
                            type="button"
                            text="Our insurance partners"
                            iconPosition="left"
                            className="group/chat-button justify-self-start normal-case"
                            onClick={() => {
                                window.scrollTo(
                                    0,
                                    getElementTopPosition(document.querySelector('#insurance') as HTMLElement) - 150
                                );
                            }}
                            icon={
                                <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.8401 3.60987C20.3294 3.09888 19.7229 2.69352 19.0555 2.41696C18.388 2.14039 17.6726 1.99805 16.9501 1.99805C16.2276 1.99805 15.5122 2.14039 14.8448 2.41696C14.1773 2.69352 13.5709 3.09888 13.0601 3.60987L12.0001 4.66987L10.9401 3.60987C9.90843 2.57818 8.50915 1.99858 7.05012 1.99858C5.59109 1.99858 4.19181 2.57818 3.16012 3.60987C2.12843 4.64156 1.54883 6.04084 1.54883 7.49987C1.54883 8.95891 2.12843 10.3582 3.16012 11.3899L4.22012 12.4499L12.0001 20.2299L19.7801 12.4499L20.8401 11.3899C21.3511 10.8791 21.7565 10.2727 22.033 9.60523C22.3096 8.93777 22.4519 8.22236 22.4519 7.49987C22.4519 6.77738 22.3096 6.06198 22.033 5.39452C21.7565 4.72706 21.3511 4.12063 20.8401 3.60987Z"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/chat-button:stroke-heading2"
                                    />
                                </svg>
                            }
                        />
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

            <Section className="grid gap-12 px-8 md:gap-16">
                <div className="mx-auto flex flex-wrap items-center justify-center gap-6">
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo1} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo2} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo3} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6]  shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo4} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo5} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full scale-[0.8] object-contain" src={Logo6} alt="" />
                    </div>
                </div>

                <Container className="grid place-items-center gap-12 rounded-primary pb-24 shadow-shadow1">
                    <div className="h-14 w-[calc(100%_+_4rem)] rounded-tl-primary rounded-tr-primary bg-[#FF393E] xl:w-full"></div>
                    <Image
                        src="/images/section-images/image-lock.png"
                        alt=""
                        width={94}
                        height={94}
                        className="h-[9.4rem] w-[9.4rem]"
                    />

                    <H3Variant2 className="block max-w-[73.9rem] text-center normal-case text-heading">
                        We will require your{' '}
                        <span className="w-full font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-[#FF393E] md:text-[3rem] md:leading-[3.6rem]">
                            pre-authorization code
                        </span>{' '}
                        before your consultation
                    </H3Variant2>

                    <p className="max-w-[50.9rem] text-center">
                        It's always best to check with your healthcare insurance provider that they will cover your fees
                        and provide a pre-authorisation code for you.
                    </p>

                    {/* Cta section */}
                    <div className="grid place-items-center gap-6">
                        <div className="flex items-center justify-center gap-4">
                            <FiHelpCircle className="h-[2.4rem] w-[2.4rem] stroke-heading" />

                            <span className="font-mulishExtraBold text-[1.8rem] leading-[2.8rem] text-heading">
                                Need help?
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-6">
                            <Button2
                                type="phone"
                                text="0208 445 8877"
                                iconPosition="left"
                                className="group/chat-button !bg-[#032B46] hover:!bg-transparent"
                                icon={
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_7348_23262)">
                                            <path
                                                d="M12.5417 4.16671C13.3556 4.32551 14.1036 4.72359 14.69 5.30999C15.2764 5.89639 15.6745 6.64443 15.8333 7.45837M12.5417 0.833374C14.2327 1.02124 15.8096 1.77852 17.0135 2.98088C18.2174 4.18324 18.9767 5.75922 19.1667 7.45004M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4892 17.1118 9.32499 15.7084C7.31151 14.4289 5.60443 12.7219 4.32499 10.7084C2.91663 8.53438 2.04019 6.0592 1.76665 3.48337C1.74583 3.25293 1.77321 3.02067 1.84707 2.80139C1.92092 2.58211 2.03963 2.38061 2.19562 2.20972C2.35162 2.03883 2.54149 1.9023 2.75314 1.80881C2.9648 1.71532 3.1936 1.66693 3.42499 1.66671H5.92499C6.32941 1.66273 6.72148 1.80594 7.02812 2.06965C7.33476 2.33336 7.53505 2.69958 7.59165 3.10004C7.69717 3.9001 7.89286 4.68565 8.17499 5.44171C8.28711 5.73998 8.31137 6.06414 8.24491 6.37577C8.17844 6.68741 8.02404 6.97347 7.79998 7.20004L6.74165 8.25837C7.92795 10.3447 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6243 11.7551C13.9359 11.6887 14.26 11.7129 14.5583 11.825C15.3144 12.1072 16.0999 12.3029 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6914 18.3333 14.1Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/chat-button:stroke-heading2"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7348_23262">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                            <ChatWithUs />
                        </div>
                    </div>
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
