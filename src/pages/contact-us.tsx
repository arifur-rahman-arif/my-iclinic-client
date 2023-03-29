import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { ContactSection, Context } from '@/page-sections/ContactSection';
import { WpPageResponseInterface } from '@/types';

interface CookiePolicyProps {
    seo: any;
    yoastJson: any;
}

/**
 * Cookie Policy page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUs = ({ seo, yoastJson }: CookiePolicyProps) => {
    return (
        <Page title="Contact Us" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Section>
                <Container className="grid grid-cols-1 gap-12 md:gap-24 xl:gap-32">
                    <TextColumn
                        h3LightHeading={
                            <>
                                <strong>Contact</strong> Us
                            </>
                        }
                        textColumnExtras={<p className="-mt-6">We usually reply within couple of hours.</p>}
                    />
                    <Context>
                        <ContactSection />
                    </Context>
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'contact-us' });

        return {
            /* eslint-disable */
            props: {
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

export default ContactUs;
