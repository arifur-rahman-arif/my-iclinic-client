import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { BookConsultation, CompanyLogos, SideImageSection } from '@/components/page-sections';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { getPageData } from '@/lib';
import UspSection from '@/page-sections/Usp/UspSection';
import { AboutUsPageContent, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import H2Variant1 from 'src/components/Headings/H2Variant1';
import PatientReviews from '@/components/page-sections/icl-components/PatientReviews';

interface DataInterface extends AboutUsPageContent, PageDataInterface<AboutUsPageContent> {}

interface AboutUsProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Home page component for the App
 *
 * Url: /
 *
 * @export
 * @returns {JSX.Element}
 */
export default function AboutUs({ seo, yoastJson, data }: AboutUsProps): JSX.Element {
    return (
        <Page title="About My-iClinic" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem] mb-12 md:mb-16"
                className="xl:grid-cols-[auto_35rem_1fr]"
                bannerClass="xl:pr-40"
            />

            {/*
            <Section className="relative bg-[#006088F2]">
                <Image src="/images/section-images/about-us-section-eye-bg.webp" alt="" fill={true} />

                <Container className="relative z-[1] grid place-items-center gap-12 py-16 md:py-24">
                    {data?.section_1?.length ? (
                        <>
                            {data.section_1.map((desc, index) => (
                                <p
                                    key={index}
                                    className="max-w-[72.4rem] text-center font-latoLight text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]"
                                >
                                    {desc}
                                </p>
                            ))}
                        </>
                    ) : (
                        <>
                            <p className="max-w-[72.4rem] text-center font-latoLight text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                                We are passionate team of skilled ophthalmologists, optometrists, nurses, and support
                                workers.
                            </p>
                            <p className="max-w-[72.4rem] text-center font-latoLight text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                                We bring modern vision correction treatments to all ages above 21.
                            </p>
                            <p className="max-w-[72.4rem] text-center font-latoLight text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                                Our effective, easy and affordable eye treatments brings tremendous joy and freedom to
                                our patients
                            </p>
                        </>
                    )}
                </Container>
            </Section> */}

            <Section>
                <Container className="grid place-items-center gap-12">
                    <p className="max-w-[84.8rem] text-balance text-center font-latoBold text-[2.4rem] leading-[3.2rem] md:text-[3rem] md:leading-[3.6rem]">
                        {data?.section_2?.heading ||
                            'My-iClinic sources innovative diagnostic equipment, being at the forefront of ophthalmology and eye care treatments.'}
                    </p>
                    {data?.section_2?.description ? (
                        <p
                            className="max-w-[69.8rem] text-balance text-center text-[1.6rem]"
                            dangerouslySetInnerHTML={{ __html: data.section_2.description }}
                        ></p>
                    ) : (
                        <p className="max-w-[69.8rem] text-balance text-center text-[1.6rem]">
                            For the past ten years My-iClinic has been providing excellent private eye care treatments
                            to patients from all over the world. My-iClinic partners with a variety of expert
                            manufacturers to deliver bespoke vision correction treatment for ages 21+ and performs
                            cataract, glaucoma, eyelid and corneal surgeries to improve our patients vision.
                        </p>
                    )}
                </Container>
            </Section>

            <SideImageSection
                h3LightHeading={data?.section_3?.heading || 'Our story'}
                descriptions={data?.section_3.descriptions}
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/how-we-started.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image?.url || '/images/section-images/how-we-started-large.webp',
                    width: 668,
                    height: 477
                }}
                textColumnExtras={
                    <Button2
                        className="justify-self-start"
                        type="button"
                        text="Speak to a specialist"
                        onClick={openFreshdeskChat}
                    />
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_4?.heading || 'Our approach'}
                descriptions={data?.section_4.descriptions}
                sectionImage={{
                    url: data?.section_4?.image?.url || '/images/section-images/our-approach.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image?.url || '/images/section-images/our-approach-large.webp',
                    width: 668,
                    height: 477
                }}
                positionReversed
                textColumnExtras={
                    <BookConsultation>
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_6?.heading1 || 'Our Affordability'}
                descriptions={data?.section_6?.descriptions1}
                sectionImage={{
                    url: data?.section_6?.image?.url || '/images/section-images/no-hidden-cost.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/no-hidden-cost-large.webp',
                    width: 668,
                    height: 477
                }}
                textColumnExtras={
                    <SectionTextColumn
                        className="-ml-10 md:mt-12"
                        heading={data?.section_6?.heading2}
                        descriptions={data?.section_6?.descriptions2}
                    />
                }
            />

            <UspSection />

            <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />

            <SideImageSection
                containerClassName="!px-0 xl:!grid-cols-[1fr_auto] items-center"
                dynamicTextColumn={
                    <div className="grid h-full w-full content-center items-center py-24 pl-8 sm:max-w-[50rem] lg:py-32 xl:pl-0">
                        <H2Variant1 className="text-balance normal-case text-white">
                            {data?.section_5?.heading || 'Our Lifelong medical practices & research'}
                        </H2Variant1>

                        <div className="mt-12 grid gap-6">
                            {data?.section_5?.descriptions?.length ? (
                                <>
                                    {data?.section_5.descriptions.map((item, index) => (
                                        <p
                                            className="text-[#E6E7E8]"
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        ></p>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <p className="text-[#E6E7E8]">
                                        My-iClinics senior surgical team regularly travel to medical conferences and
                                        meetings, both to listen to new ideas and to teach their own.
                                    </p>
                                    <p className="text-[#E6E7E8]">
                                        Our expert team will talk to you with ease about treatments which have evolved
                                        in eye care.
                                    </p>
                                    <p className="text-[#E6E7E8]">
                                        The team at My-iClinic sources innovative diagnostic equipment, being at the
                                        forefront of ophthalmology and eye care treatments.
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-start gap-6 md:mt-24">
                            <BookConsultation buttonClassName="transition-all border-2 border-[#0099FF] duration-500 hover:bg-transparent  cursor-pointer px-8 py-6 gap-5 bg-[#0099FF] rounded-[0.5rem] hover:text-[#0099FF]">
                                <Button2 type="button" text="Request a call  back" />
                            </BookConsultation>
                            <Button2
                                type="button"
                                text="Chat with us"
                                onClick={openFreshdeskChat}
                                className="group/button"
                                icon={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/button:stroke-[#003E79]"
                                        />
                                    </svg>
                                }
                                iconPosition="left"
                            />
                        </div>
                    </div>
                }
                sectionClass="bg-[#003E79] pb-12 md:pb-0 overflow-hidden"
                sectionImage={{
                    url: data?.section_5?.image?.src || '/images/section-images/medical-practices.webp',
                    width: 447,
                    height: 693
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.src || '/images/section-images/medical-practices-large.webp',
                    width: 570,
                    height: 631
                }}
                largeImageClassName="!rounded-none h-full"
                smallImageClassName="!rounded-none"
                altText={data?.section_5?.large_image?.alt}
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>
        </Page>
    );
}

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<AboutUsPageContent> = await getPageData({
            slug: 'about-us'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || null,
                yoastJson: data?.yoast_head_json || null,
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    section_1: Array.isArray(data?.acf.section_1)
                        ? convertArrayOfObjectsToStrings(data?.acf.section_1)
                        : [],
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section_5?.image && formatImage(data.acf?.section_5?.image))
                        },
                        large_image: {
                            ...(data?.acf?.section_5?.large_image && formatImage(data.acf?.section_5?.large_image))
                        }
                    },
                    section_6: {
                        ...data?.acf.section_6,
                        descriptions1: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions1).map((item) =>
                            stripInitialTags(item)
                        ),
                        descriptions2: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions2).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
