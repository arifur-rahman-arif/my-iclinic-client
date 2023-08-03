import { BreadCrumb } from '@/components/Breadcrumb';
import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPosts } from '@/lib';
import SitemapSection from '@/page-sections/SiteMapSection/SitemapSection';

interface SitemapPropsI {
    articles: GeneralBlogInterface[];
}

/**
 * Sitemap page
 *
 * @param {GeneralBlogInterface[]} articles
 * @returns {JSX.Element}
 * @constructor
 */
const Sitemap = ({ articles }: SitemapPropsI): JSX.Element => {
    const pages: Array<{
        name: string;
        url: string;
    }> = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about-us' },
        { name: 'Articles', url: '/articles' },
        { name: 'Astigmatism Treatment', url: '/astigmatism-treatment' },
        { name: 'Blepharitis Treatment', url: '/blepharitis-treatment' },
        { name: 'Cataract', url: '/cataract' },
        { name: 'Premium Lenses', url: '/cataract/premium-lenses' },
        { name: 'Cataract Price', url: '/cataract/price' },
        { name: 'Yag Capsulotomy for PCO', url: '/cataract/yag-capsulotomy-for-pco' },
        { name: 'Yag Capsulotomy Price', url: '/cataract/yag-capsulotomy-for-pco/price' },
        { name: 'Complaint', url: '/complaint' },
        { name: 'Conjunctivitis Treatment London', url: '/conjuctivitis-treatment-london' },
        { name: 'Contact Us', url: '/contact-us' },
        { name: 'Cookie Policy', url: '/cookie-policy' },
        { name: 'Corneal Treatments', url: '/corneal-treatments' },
        { name: 'Double Vision Treatment London', url: '/double-vision-treatment-london' },
        { name: 'Dry Eyes Treatment London', url: '/dry-eyes-treatment-london' },
        { name: 'Eyelid Surgery London', url: '/eyelid-surgery-london' },
        { name: 'Flashes Floaters', url: '/flashes-floaters' },
        { name: 'Glaucoma Treatment', url: '/glaucoma-treatment' },
        { name: 'Glaucoma Price', url: '/glaucoma-treatment/price' },
        { name: 'ICL', url: '/icl' },
        { name: 'ICL Price', url: '/icl/price' },
        { name: 'Keratoconus', url: '/keratoconus' },
        { name: 'LASEK PRK', url: '/lasek-prk' },
        { name: 'LASEK PRK Price', url: '/lasek-prk/price' },
        { name: 'LASIK London', url: '/lasik-london' },
        { name: 'LASIK Price', url: '/lasik-london/price' },
        { name: 'Lazy Eyes Treatment', url: '/lazy-eyes-treatement' },
        { name: 'Macular Degeneration', url: '/macular-degeneration' },
        { name: 'Myopia', url: '/myopia' },
        { name: 'Myopia Price', url: '/myopia/price' },
        { name: 'Our Specialists', url: '/our-specialists' },
        { name: 'Eye Diagnostics Technology', url: '/our-specialists/our-eye-diagnostics-technology' },
        { name: 'Paediatric Eye Care', url: '/paediatric-eye-care' },
        { name: 'Presbyond London', url: '/presbyond-london' },
        { name: 'Presbyond Price', url: '/presbyond-london/price' },
        { name: 'Financing Your Treatment', url: '/pricing-and-financing/financing-your-treatment' },
        { name: 'Our Prices', url: '/pricing-and-financing/our-prices' },
        { name: 'Privacy Policies', url: '/privacy-policies' },
        { name: 'Relex Smile London', url: '/relex-smile-london' },
        { name: 'Relex Smile Price', url: '/relex-smile-london/price' },
        { name: 'Search', url: '/search' },
        { name: 'Sitemap', url: '/sitemap' },
        { name: 'Suitability Check', url: '/suitability-check' },
        { name: 'Terms and Conditions', url: '/terms-and-conditions' },
        { name: 'Translation Service', url: '/translation-service' }
    ];

    return (
        <Page title="Sitemap" description="Sitemap of My-iClinic">
            <BreadCrumb className="md:!flex" />

            <Section>
                <Container>
                    <SitemapSection articles={articles} pages={pages} />
                </Container>
            </Section>
        </Page>
    );
};

export default Sitemap;

/**
 * Fetch the data from WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const articles: Array<GeneralBlogInterface> = await getPosts();

        return {
            /* eslint-disable */
            props: {
                articles
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
