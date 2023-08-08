import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getSpecialistPost } from '@/lib';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import SpecialistContent from '@/page-sections/SpecialistContent';
import Image from 'next/image';

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
    return (
        <Page
            title="Mr. John Bolger"
            description="Mr. John Bolger is a consultant and Surgeon"
            seo={specialist.yoast_head}
            yoastJson={specialist.yoast_head_json}
        >
            <BreadCrumb className="md:!flex" />

            <Section className="specialist-single-post mt-12 lg:!mt-32">
                <Container className="grid justify-items-center gap-12 md:gap-24 lg:grid-cols-[minmax(40rem,_1fr)_1fr]">
                    <div className="group/card grid w-full content-start self-start overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1 md:max-w-[50rem]">
                        <div className="max-h-[37.5rem] overflow-hidden">
                            {specialist?.image && (
                                <Image
                                    src={specialist?.image}
                                    alt={specialist.name}
                                    width={500}
                                    height={375}
                                    unoptimized
                                    className="w-full rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                />
                            )}
                        </div>

                        <div className="mt-16 grid px-12">
                            {specialist?.name && (
                                <h1 className="w-full font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">
                                    {specialist.name}
                                </h1>
                            )}
                            {specialist?.degree && (
                                <span className="mt-2 font-mulishBold text-[1.4rem] uppercase leading-[2rem] text-[#51585B]">
                                    {specialist.degree}
                                </span>
                            )}
                            {specialist?.title && (
                                <span className="mt-6 font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                    {specialist.title}
                                </span>
                            )}
                        </div>
                        <div className="mt-16 px-12">
                            <BookConsultation buttonClassName="w-full place-content-center" />
                        </div>
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
