import { Container } from '@/components/Container';
import Page from '@/components/Page';
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
            <div className="grid bg-[#0052A0] md:min-h-[51rem] md:content-center">
                <Container className="py-16">
                    <h1 className="font-latoExtraBold text-[4rem] uppercase leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                        Contact Us
                    </h1>
                    <p className="mt-6 font-mulishBold uppercase text-[#D1E8FE]">
                        We usually reply within couple of hours.
                    </p>
                </Container>
            </div>

            <Container className="rounded-radius2 bg-white p-16 md:-mt-48 md:p-24">
                <Context>
                    <ContactSection />
                </Context>
            </Container>
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
