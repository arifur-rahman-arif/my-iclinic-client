import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import Page from '@/components/Page';
import { Masthead, SideImageSection } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-about-us-large.png';
import MastheadImageSmall from '@/masthead/masthead-about-us-medium.png';
import MastheadImageMedium from '@/masthead/masthead-about-us.png';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import { AboutUsPageContent, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import H2Variant1 from 'src/components/Headings/H2Variant1';

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
    const heading = data?.masthead_heading || 'About My-iClinic';
    const subheading = data?.masthead_subheading || 'North London’s Eye Hospital';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] 2xl:!object-contain"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                bannerExtraComponents={<ChatWithUs />}
            />

            <Section className="relative bg-[#006088F2]">
                <Image src="/images/section-images/about-us-section-eye-bg.png" alt="" fill={true} />

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
            </Section>

            <Section>
                <Container className="grid place-items-center gap-12">
                    <p className="max-w-[84.8rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem] md:text-[3rem] md:leading-[3.6rem]">
                        {data?.section_2?.heading ||
                            'My-iClinic sources innovative diagnostic equipment, being at the forefront of ophthalmology and eye care treatments.'}
                    </p>
                    {data?.section_2?.description ? (
                        <p className="max-w-[69.8rem] text-center text-[1.6rem]">
                            {HTMLReactParser(data.section_2.description)}
                        </p>
                    ) : (
                        <p className="max-w-[69.8rem] text-center text-[1.6rem]">
                            For the past ten years My-iClinic has been providing excellent private eye care treatments
                            to patients from all over the world. My-iClinic partners with a variety of expert
                            manufacturers to deliver bespoke vision correction treatment for ages 21+ and performs
                            cataract, glaucoma, eyelid and corneal surgeries to improve our patients vision.
                        </p>
                    )}
                </Container>
            </Section>

            <SideImageSection
                h2Heading={data?.section_3?.subheading || 'How we started'}
                h3LightHeading={data?.section_3?.heading?.light_heading || 'Our'}
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'story'}
                descriptions={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3.descriptions)) || [
                        'Our clinic directors, Mr. John Bolger and Ms. Bola Odufuwa-Bolger, started their care practices over thirty years ago by treating patients in Harley Street, Royal Free Hospital, Moorfields Eye Hospital and more.',
                        'As qualified ophthalmic surgeons, they opened their own independent eye care practice, My-iClinic, to make modern vision correction treatments and eye surgeries accessible and affordable for the new generations of vision.'
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/how-we-started.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image?.url || '/images/section-images/how-we-started-large.png',
                    width: 668,
                    height: 477
                }}
            />

            <SideImageSection
                h2Heading={data?.section_4?.subheading || 'How we do'}
                h3LightHeading={data?.section_4?.heading?.light_heading || 'Our'}
                h3BoldHeading={data?.section_4?.heading?.bold_heading || 'approach'}
                descriptions={
                    (data?.section_4?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_4.descriptions)) || [
                        'Our approach is very comprehensive with meticulous attention to the best proven surgical interventions. This is so you can be sure that you are receiving the best current treatment in a caring and patient focused setting.'
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image?.url || '/images/section-images/our-approach.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image?.url || '/images/section-images/our-approach-large.png',
                    width: 668,
                    height: 477
                }}
                positionReversed
            />

            <SideImageSection
                h2Heading={data?.section_6?.subheading || 'no hidden cost'}
                h3LightHeading={data?.section_6?.heading?.light_heading || 'Our'}
                h3BoldHeading={data?.section_6?.heading?.bold_heading || 'Affordability'}
                descriptions={
                    (data?.section_6?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_6.descriptions)) || [
                        'We offer everything at a fixed price so that you know in advance what the procedure will cost and what is included. Even if the post-operative care takes longer than planned, there are no extra charges.'
                    ]
                }
                sectionImage={{
                    url: data?.section_6?.image?.url || '/images/section-images/no-hidden-cost.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/no-hidden-cost-large.png',
                    width: 668,
                    height: 477
                }}
            />

            <SideImageSection
                dynamicTextColumn={
                    <div className="grid h-full w-full content-start items-center py-24 pl-8 sm:max-w-[47.1rem] lg:py-32 xl:pl-0">
                        <H2Variant1 className="normal-case text-white">
                            {data?.section_5?.heading || 'Our Lifelong medical practices & research'}
                        </H2Variant1>

                        <div className="mt-12 grid gap-6">
                            {data?.section_5?.descriptions?.length ? (
                                <>
                                    {data?.section_5.descriptions.map((item, index) => (
                                        <p className="text-[#E6E7E8]" key={index}>
                                            {item}
                                        </p>
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

                        <span className="mt-12 font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                            What to find out more about us?
                        </span>
                        <span className="mt-6 font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                            Get in touch
                        </span>

                        <Button2
                            type="anchor"
                            link="tel:0208 445 8877"
                            text="0208 445 8877"
                            iconPosition="left"
                            className="group/phone mt-12 justify-self-start border-white normal-case"
                            icon={
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                                        stroke="#fff"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/phone:stroke-heading2"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
                sectionClass="bg-heading2 pb-12 md:pb-0 overflow-hidden"
                containerClassName="!px-0"
                sectionImage={{
                    url: data?.section_5?.image?.url || '/images/section-images/medical-practices.jpg',
                    width: 447,
                    height: 693
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/medical-practices-large.jpg',
                    width: 613,
                    height: 693
                }}
                largeImageClassName="!rounded-none h-full"
                smallImageClassName="!rounded-none"
            />
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
                    section_1: Array.isArray(data?.acf.section_1)
                        ? convertArrayOfObjectsToStrings(data?.acf.section_1)
                        : [],
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions)
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
