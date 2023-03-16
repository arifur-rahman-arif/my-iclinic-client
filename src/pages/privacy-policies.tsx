import { BreadCrumb } from '@/components/Breadcrumb';
import Button from '@/components/Button/Button';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { PageDataInterface, PrivacyPolicyPageContentInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';

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
                    <div className="grid gap-12 md:gap-24 xl:gap-32 !max-w-[112.1rem]">
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
                                    download={true}
                                    link={data?.guide_file || ''}
                                    icon={
                                        <Image
                                            src="/images/icons/icon-cloud-download-outline.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="h-[2.4rem] w-[2.4rem]"
                                        />
                                    }
                                    className="justify-self-start"
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
            fields: 'title,content,acf,yoast_head,yoast_head_json'
        });

        return {
            /* eslint-disable */
            props: {
                data: { content: data.content.rendered, ...data.acf } as DataInterface,
                seo: data.yoast_head,
                yoastJson: data.yoast_head_json
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
