import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { BulletList } from '@/components/page-sections';
import { Section } from '@/components/Section';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import { WpPageResponseInterface } from '@/types';
import Image from 'next/image';
import H3Variant3 from 'src/components/Headings/H3Variant3';

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
const CookiePolicy = ({ seo, yoastJson }: CookiePolicyProps) => {
    return (
        <Page title="Cookie Polices" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb className="md:!flex" />

            <Section>
                <Container className="grid gap-12 md:gap-24 xl:gap-32">
                    <h2>
                        <b>Cookie Policy</b>
                    </h2>

                    <div className="grid gap-8">
                        <H3Variant3>What's a cookie?</H3Variant3>

                        <p>
                            A “cookie” is a piece of information that is stored on your computer’s hard drive and which
                            records how you move your way around a website so that, when you revisit that website, it
                            can present tailored options based on the information stored about your last visit. Cookies
                            can also be used to analyse traffic and for advertising and marketing purposes.
                        </p>
                        <BulletList
                            list={[
                                'A “cookie” is a piece of information that is stored on your computer’s hard drive and which records how you move your way around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyse traffic and for advertising and marketing purposes.'
                            ]}
                            bulletPoint={
                                <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                        <p>
                            If you want to check or change what types of cookies you accept, this can usually be altered
                            within your browser settings. You can block cookies at any time by activating the setting on
                            your browser that allows you to refuse the setting of all or some cookies. By not blocking
                            cookies and continuing to browse you are authorising the use of cookies. If you use your
                            browser settings to block all cookies (including essential cookies) you may not be able to
                            access all or parts of our site.
                        </p>
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'cookie-policy' });

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

export default CookiePolicy;
