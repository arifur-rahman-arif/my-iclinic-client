import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getSpecialistPost } from '@/lib';
import SpecialistContent from '@/page-sections/SpecialistContent';
import ConsultantCard from '../../components/Card/ConsultantCard';
import ShareLinks from '@/page-sections/SingleBlogComponents/BlogBody/ShareLinks';
import { useRouter } from 'next/router';

interface DynamicPageProps {
    specialist: any;
    slug: string;
}

/**
 * Home page component for the App
 *
 * * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DynamicPage({ specialist, slug }: DynamicPageProps): JSX.Element {
    const router = useRouter();

    const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/our-specialists/${
        router.query.slug
    }`;

    return (
        <Page
            title="Mr. John Bolger"
            description="Mr. John Bolger is a consultant and Surgeon"
            seo={specialist.yoast_head}
            yoastJson={specialist.yoast_head_json}
        >
            <BreadCrumb className="md:mt-12 md:!flex" />

            <Section className="specialist-single-post mt-12 lg:!mt-32">
                <Container className="grid justify-items-center gap-12 md:gap-6 lg:grid-cols-[47rem_1fr]">
                    <div className="flex w-full flex-col items-start justify-start gap-1 md:flex-row">
                        <ShareLinks
                            className="self-start rounded-radius2 border border-solid border-[#EAECF0] px-6 py-8 "
                            siteUrl={siteUrl}
                        />
                        <ConsultantCard
                            image={specialist?.image}
                            name={specialist.name}
                            degree={specialist.degree}
                            title={specialist.title}
                            className="max-h-[52rem] max-w-[40rem]"
                            imageClass="object-cover"
                        />
                    </div>

                    <SpecialistContent specialist={specialist} slug={slug} />
                </Container>
            </Section>
        </Page>
    );
}

/**
 * Fetch the data from WordPress database
 *
 * @param {any} ctx
 * @returns {Promise<{props: {}}>}
 */
export async function getServerSideProps(ctx: any) {
    try {
        const slug = ctx.query.slug;
        const specialist: any = await getSpecialistPost(slug);

        return {
            props: {
                specialist,
                slug
            }
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
