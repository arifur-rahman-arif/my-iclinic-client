import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { ComplaintPageProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import React from 'react';
import { CompanyLogos, SideImageSection } from '@/components/page-sections';

interface DataInterface extends ComplaintPageProps, PageDataInterface<ComplaintPageProps> {}

interface CookiePolicyProps {
    seo: any;
    yoastJson: any;
    data: DataInterface & {
        content?: string;
    };
}

/**
 * Cookie Policy page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PrivacyPolices = ({ seo, yoastJson, data }: CookiePolicyProps) => {
    return (
        <Page title="How to raise a complaint" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[58rem]"
                smallImageClass="row-start-1 mt-0 max-h-[30rem]"
                contentContainerClassName="pb-12"
                subTitleClass="max-w-[50rem]"
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

            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.contentSection?.heading || 'Treatments we offer for corneal conditions'}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.contentSection?.descriptions?.length && data?.contentSection?.descriptions) || [
                        'KeraNatural corneal ring implantation is an advanced alternative treatment to keraring surgery. Keraring surgery is an implantation of intra-corneal ring segments (ICRS) which improve the corneas shape.',
                        'KeraNatural allograft corneal rings improves unaided and aided visual acuity in most patient cases without the complications associated with plastic intrastromal corneal rings such as: corneal melting, ring extrusion and intrusion, and sight-threatening complications like microbial keratitis.'
                    ]
                }
                sectionImage={{
                    url: data?.contentSection?.image?.url || '',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.contentSection?.image?.url || '',
                    width: 586,
                    height: 693
                }}
                altText={data?.contentSection?.image?.alt}
                largeImageClassName="w-auto h-auto object-cover rounded-radius2 border border-solid border-[#EAECF0]"
                smallImageClassName="object-cover rounded-radius2 border border-solid border-[#EAECF0]"
                textColumnExtras={
                    <div className="-mt-6 grid gap-6">
                        <Button2
                            type="anchor"
                            text="ISCAS Guide"
                            iconPosition="left"
                            loadingIconPosition="right"
                            className="group/download-button justify-self-start normal-case"
                            // @ts-ignore
                            download={true}
                            link={data?.pdf_download || ''}
                            icon={
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2401_5839)">
                                        <path
                                            d="M8.10181 17L12.1018 21L16.1018 17"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/download-button:stroke-heading2"
                                        />
                                        <path
                                            d="M12.1018 12V21"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/download-button:stroke-heading2"
                                        />
                                        <path
                                            d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/download-button:stroke-heading2"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2401_5839">
                                            <rect width="24" height="24" fill="white" transform="translate(0.101807)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                        />

                        <span className="text-balance font-mulishBold">
                            {data?.complientText ||
                                ' If you encounter any issue with the finance product, you might consider filing a complaint to the'}
                        </span>

                        <Button2
                            type="anchor"
                            text="Financial Ombudsman Service"
                            iconPosition="left"
                            loadingIconPosition="right"
                            className="group/download-button justify-self-start !bg-transparent normal-case !text-[#003E79] hover:!bg-[#003E79] hover:!text-white"
                            link={'https://www.financial-ombudsman.org.uk/consumers/how-to-complain'}
                            target="_blank"
                        />
                    </div>
                }
            />

            <CompanyLogos />
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
        const data: WpPageResponseInterface<ComplaintPageProps> = await getPageData({
            fields: 'title,content,acf,yoast_head,yoast_head_json',
            slug: 'complaint'
        });

        return {
            /* eslint-disable */
            props: {
                data: {
                    content: data?.content?.rendered || null,
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
                    contentSection: {
                        ...data?.acf?.contentSection,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.contentSection?.descriptions).map(
                            (item) => stripInitialTags(item)
                        )
                    } // CORNEA CONSULTATION
                },
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

export default PrivacyPolices;
