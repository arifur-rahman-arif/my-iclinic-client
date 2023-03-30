import { BreadCrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getSpecialistPost, getSpecialistsPost } from '@/lib';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { SpecialistPostsInterface } from 'src/lib/page-functions/our-specialists';

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
                                        alt={'Mr. John Bolger'}
                                        width={500}
                                        height={375}
                                        quality={100}
                                        className="rounded-tl-primary rounded-tr-primary transition-all duration-500 group-hover/card:scale-110"
                                    />
                                )}
                            </div>

                            <div className="mt-16 grid px-12">
                                {specialist?.name && <H4Variant1>{specialist.name}</H4Variant1>}
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
 * Fetch all the post slug and defines static page paths
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticPaths() {
    const specialists: SpecialistPostsInterface[] = await getSpecialistsPost();

    // Map the slugs to the format required by `getStaticPaths`
    const paths = specialists.map((post) => ({ params: { slug: post.slug } }));

    return {
        paths,
        fallback: false
    };
}

/**
 * Fetch the data from WordPress database
 *
 * @param {GetStaticPropsContext<SinglePageParamsInterface>}ctx
 * @returns {Promise<{props: {}}>}
 */
export async function getStaticProps(ctx: any) {
    try {
        const specialist: any = await getSpecialistPost(ctx.params.slug);

        return {
            props: {
                specialist
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
