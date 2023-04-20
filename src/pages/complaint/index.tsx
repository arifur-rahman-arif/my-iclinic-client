import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-complaint-large.png';
import MastheadImageSmall from '@/masthead/masthead-complaint-medium.png';
import MastheadImageMedium from '@/masthead/masthead-complaint.png';
import { Masthead } from '@/page-sections/Masthead';
import { ComplaintPageProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import styles from './complaint.module.scss';
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
    const heading = data?.masthead_heading || 'How to raise a complaint';
    const subheading = data?.masthead_subheading || 'The Independent Sector Complaints Adjudication Service (ISCAS)';

    return (
        <Page title={heading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                imagePosition="2xl:object-[0rem_-3rem] 2xl:!object-contain"
                h1Title={
                    <h1 className="flex flex-wrap gap-2 sm:max-w-[47.1rem] sm:gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                bannerExtraComponents={
                    <Button2
                        type="anchor"
                        text="Chat with us"
                        iconPosition="left"
                        link={data?.pdf_download || ''}
                        download
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

            <Section className={styles.styles}>
                <Container className="grid">
                    <div className="grid !max-w-[112.1rem] gap-12 md:gap-24 xl:gap-32">
                        <h2 className="w-full max-w-[67.7rem] font-latoBold md:!text-[3rem] md:leading-[3.6rem]">
                            The Independent Sector Complaints Adjudication Service (ISCAS)
                        </h2>

                        <div className="grid">
                            {data?.content ? (
                                HTMLReactParser(data.content)
                            ) : (
                                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[auto_1fr] md:gap-24 lg:gap-[12rem]">
                                    <div className="grid max-w-[70rem] gap-6">
                                        <p>
                                            To address a formal complaint with our clinic please notify the complaints
                                            department by emailing{' '}
                                            <LinkStyle url="mailto:veranika@my-iclinic.co.uk.">
                                                veranika@my-iclinic.co.uk.
                                            </LinkStyle>
                                        </p>
                                        <p>
                                            You will receive written acknowledgment within five working days and a
                                            formal response within twenty-eight working days.
                                        </p>
                                        <p>
                                            Complaints can be made by a patient, a former patient, or someone acting on
                                            a patient's behalf within 12 months of the date of the event that is being
                                            complained about.
                                        </p>
                                        <p>
                                            My-iClinic will offer to meet with the complainant in order to discuss the
                                            manner in which the complaint is to be handled and how the issue/s might be
                                            resolved.
                                        </p>
                                        <p>
                                            Please click the button below to download our official complaints procedure
                                            process. This complaints guide will help you understand the proceedings that
                                            will occur afterwards to ensure we resolve your complaint effectively and
                                            efficiently.
                                        </p>
                                        <strong>Click here to download the ISCAS Guide (Button)</strong>
                                    </div>
                                    <Image
                                        src="/images/logos/iscas-logo.png"
                                        alt=""
                                        width={500}
                                        height={134}
                                        className="md:-mt-40"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <Button2
                        type="anchor"
                        text="Download"
                        iconPosition="left"
                        loadingIconPosition="right"
                        className="group/download-button mt-24 justify-self-start normal-case"
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
                </Container>
            </Section>
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
                data: { content: data?.content?.rendered || null, ...data?.acf } as DataInterface,
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
