import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import styles from '@/page-sections/SingleBlogComponents/BlogBody/styles/BlogBody.module.scss';
import { WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';

interface TermsAndConditionsProps {
    seo: any;
    yoastJson: any;
    title: string;
    content: string;
}

/**
 * Terms and conditions page
 *
 * @param {any} seo
 * @param {any} yoastJson
 * @param {string} title
 * @param {string} content
 * @returns {JSX.Element}
 * @constructor
 */
const TermsAndConditions = ({ seo, yoastJson, title, content }: TermsAndConditionsProps): JSX.Element => {
    return (
        <Page title={title} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb className="md:!flex" />

            <Section>
                <Container className="grid gap-12 md:gap-24">
                    <h2>
                        <b className="normal-case">{title || 'Terms & Conditions'}</b>
                    </h2>

                    <div className={`${styles.styles} grid content-start gap-8`}>{HTMLReactParser(content || '')}</div>
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
        const data: WpPageResponseInterface<any> = await getPageData({
            slug: 'terms-and-conditions',
            fields: 'title,content,acf,yoast_head,yoast_head_json'
        });

        const content = data?.content?.rendered || '';

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                title: data?.title?.rendered || '',
                content: content.replaceAll('a:link { color: #000080; text-decoration: underline', '')
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}

export default TermsAndConditions;
