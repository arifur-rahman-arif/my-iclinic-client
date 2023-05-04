import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
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
            <BreadCrumb className="md:!flex" />

            <Section>
                <Container className="grid grid-cols-1 gap-12 md:gap-24 xl:gap-32">
                    <div className="grid gap-6">
                        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
                            <span className="h-full w-[0.5rem] rounded-full bg-yellow"></span>
                            <h1 className="">
                                <strong className="font-latoExtraBold text-[3.6rem] leading-[4rem] md:text-[4.8rem] md:leading-[4.8rem]">
                                    Contact
                                </strong>{' '}
                                <span className="font-latoLight text-[3.6rem] normal-case leading-[4rem] md:text-[4.8rem] md:leading-[4.8rem]">
                                    Us
                                </span>
                            </h1>
                        </div>

                        <p className="ml-9">Our specialist team will reply as soon as possible</p>
                    </div>

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
