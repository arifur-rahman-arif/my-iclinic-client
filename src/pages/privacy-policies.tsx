import { BreadCrumb } from '@/components/Breadcrumb';
import Button from '@/components/Buttons/Button';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { PageDataInterface, PrivacyPolicyPageContentInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';

interface DataInterface
    extends PrivacyPolicyPageContentInterface,
        PageDataInterface<PrivacyPolicyPageContentInterface> {}

interface CookiePolicyProps {
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
const PrivacyPolices = ({ seo, yoastJson, data }: CookiePolicyProps) => {
    return (
        <Page title="Cookie Polices" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Section>
                <Container>
                    <div className="grid !max-w-[112.1rem] gap-12 md:gap-24 xl:gap-32">
                        <h2>
                            <b>Our policies & complaints procedure</b>
                        </h2>

                        <div className="grid">
                            {HTMLReactParser(data?.content || '')}
                            <div className="grid gap-6">
                                <strong>Download ISCAS guide</strong>
                                <Button
                                    type="anchor"
                                    text="Download"
                                    iconPosition="left"
                                    loadingIconPosition="right"
                                    // @ts-ignore
                                    download={true}
                                    link={data?.guide_file || ''}
                                    className="group/download justify-self-start"
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
                                                    className="transition-all duration-500 group-hover/download:stroke-heading2"
                                                />
                                                <path
                                                    d="M12.1018 12V21"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-all duration-500 group-hover/download:stroke-heading2"
                                                />
                                                <path
                                                    d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-all duration-500 group-hover/download:stroke-heading2"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2401_5839">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                        transform="translate(0.101807)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    }
                                />
                            </div>
                        </div>
                    </div>
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
        const data: WpPageResponseInterface<PrivacyPolicyPageContentInterface> = await getPageData({
            fields: 'title,content,acf,yoast_head,yoast_head_json',
            slug: 'privacy-policies'
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
