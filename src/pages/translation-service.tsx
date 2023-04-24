import { BreadCrumb } from '@/components/Breadcrumb';
import { Button, Button2 } from '@/components/Buttons';
import { Container, ContainerFluid } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-translation-large.png';
import MastheadImageSmall from '@/masthead/masthead-translation.png';
import MastheadImageMedium from '@/masthead/masthead-translation-medium.png';
import { Masthead } from '@/page-sections/Masthead';
import TranslationPackages from '@/page-sections/TranslationPackages/TranslationPackages';
import { PageDataInterface, TranslationPageProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

interface DataInterface extends TranslationPageProps, PageDataInterface<TranslationPageProps> {}

interface TranslationServiceProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Cookie Policy page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TranslationService = ({ seo, yoastJson, data }: TranslationServiceProps) => {
    const heading = data?.masthead_heading || 'Translation Service';
    const subheading = data?.masthead_subheading || 'Understand your care journey with us';

    return (
        <Page title={heading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                imagePosition="2xl:object-[0rem_-3rem] 2xl:!object-contain"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                bannerExtraComponents={
                    <Button2
                        type="button"
                        text="Chat with us"
                        iconPosition="left"
                        className="group/chat-button justify-self-start normal-case"
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
                        onClick={openFreshdeskChat}
                    />
                }
            />

            <Section>
                <Container className="grid place-items-center gap-12 md:gap-24">
                    <h2 className="w-full max-w-[67.7rem] text-center font-latoBold normal-case md:!text-[3rem] md:leading-[3.6rem]">
                        {data?.section_1?.heading ||
                            'Understand your care journey with us by our trusted translator partner'}
                    </h2>

                    <div className="grid gap-12 xs:place-items-center">
                        <strong>
                            {data?.section_1?.subheading ||
                                'Members of our team are fluent in the following languages:'}
                        </strong>

                        <div className="ml-12 grid grid-cols-1  justify-items-start gap-y-6 gap-x-12 xs:ml-0 xs:grid-cols-2">
                            {(
                                (data?.section_1?.list?.length && data?.section_1?.list) || [
                                    'Russian',
                                    'Albanian',
                                    'Italian',
                                    'Yoruba',
                                    'Romanian',
                                    'Irish (Gaelic)',
                                    'Polish',
                                    'Bulgarian'
                                ]
                            ).map((item, index) => (
                                <div className="flex items-center justify-center gap-5">
                                    <Image
                                        src="/images/icons/icon-angle-right.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="h-6 w-6 translate-y-[0.1rem]"
                                    />
                                    <span className="font-mulishBold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <ContainerFluid className="grid grid-cols-1 !px-0 md:min-h-[39.6rem] md:grid-cols-2">
                    <div className="grid content-center gap-12 bg-[#006088] px-8 py-12 md:pr-12 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                        <h2 className="w-full font-latoBold normal-case text-white md:!text-[3rem] md:leading-[3.6rem]">
                            {data?.section_2?.heading ||
                                'If you would like to book with our translation service partner please call us and we will arrange this on your behalf.'}
                        </h2>

                        <Button
                            type="anchor"
                            text="0208 445 8877"
                            link="tel:0208 445 8877"
                            className="justify-self-start !border-white !bg-transparent text-white"
                            icon={
                                <Image
                                    alt=""
                                    src="/images/icons/icon-phone-white.svg"
                                    width={20}
                                    height={20}
                                    className="h-8 w-8"
                                />
                            }
                            iconPosition="left"
                        />
                    </div>

                    <div className="relative row-start-1 min-h-[40rem] md:row-start-auto md:min-h-full">
                        <Image
                            src={data?.section_2?.image?.url || '/images/section-images/translation-bg.png'}
                            alt={data?.section_2?.image?.alt || ''}
                            quality={100}
                            fill
                            className="h-full w-full object-cover"
                        />
                    </div>
                </ContainerFluid>
            </Section>

            <TranslationPackages
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={
                    <>
                        <h2 className="w-full max-w-[67.7rem] font-latoBold normal-case md:!text-[3rem] md:leading-[3.6rem]">
                            {data?.section_3?.heading ||
                                'Understand your care journey with us by our trusted translator partner'}
                        </h2>
                    </>
                }
                packageList={data?.section_3?.services}
                itemClassName="!items-stretch"
                cardClassName="!bg-[#006088]"
                titleClassName="text-center gap-3 flex"
            />
        </Page>
    );
};

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<TranslationPageProps> = await getPageData({
            fields: 'title,content,acf,yoast_head,yoast_head_json',
            slug: 'translation-service'
        });

        return {
            /* eslint-disable */
            props: {
                data: {
                    ...data?.acf,
                    // Children Astigmatism
                    section_1: {
                        ...data?.acf.section_1,
                        list: convertArrayOfObjectsToStrings(data?.acf.section_1?.list)
                    }
                } as DataInterface,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}

export default TranslationService;
