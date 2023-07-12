import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getSpecialistPost } from '@/lib';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';

interface DynamicPageProps {
    specialist: any;
}

/**
 * Home page component for the App
 *
 * * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DynamicPage({ specialist }: DynamicPageProps): JSX.Element {
    return (
        <Page
            title="Mr. John Bolger"
            description="Mr. John Bolger is a consultant and Surgeon"
            seo={specialist.yoast_head}
            yoastJson={specialist.yoast_head_json}
        >
            <BreadCrumb />

            <Section className="specialist-single-post py-4 lg:!mt-32">
                <Container className="grid grid-rows-1 gap-12 md:grid-cols-[auto_1fr] md:gap-24">
                    <div>
                        <div className="group/card grid overflow-hidden rounded-primary bg-white pb-12 shadow-md transition-all duration-500 hover:shadow-shadow1">
                            <div className="max-h-[37.5rem] overflow-hidden">
                                {specialist?.image && (
                                    <Image
                                        src={specialist?.image}
                                        alt={specialist.name}
                                        width={500}
                                        height={375}
                                        unoptimized
                                        className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
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
                    </div>

                    <div className="grid gap-12 rounded-primary p-12 shadow-md transition-all duration-500 hover:shadow-shadow1 md:gap-24">
                        {specialist?.content && HTMLReactParser(specialist.content)}
                    </div>
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
                specialist
            }
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
