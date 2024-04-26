import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { paediatricFaqList } from '@/page-sections/Faq/faqList';
import {
    BookConsultation,
    CtaSection,
    CtaSection2,
    FullWidthImageSection,
    SideImageSection
} from '@/page-sections/index';
import { PageDataInterface, PardiatricContentInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import YagHero from '@/page-sections/Masthead/YagHero';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';

const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PardiatricContentInterface, PageDataInterface<PardiatricContentInterface> {}

interface PaediatricEyeCareProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Paediatric eye care page
 *
 * * Url: /paediatric-eye-care
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PaediatricEyeCare({ data, seo, yoastJson }: PaediatricEyeCareProps): JSX.Element {
    return (
        <Page
            title="Paediatric Eye Care Services"
            description="Our trusted paediatric ophthalmologists deliver the best treatment for any eye problems in children. Learn more about our paediatric eye care services."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                titleClass="md:max-w-[68rem]"
                className="xl:grid-cols-[auto_50rem_1fr]"
                ctaButton={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-white hover:text-[#0099FF]"
                            iconPosition="left"
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
                                        className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={data?.section_3?.heading || 'Paediatric services for children'}
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[57rem]"
                descriptionClass="[&_*]:!text-[#404A4D] text-[#404A4D]"
                description={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        'Paediatric eye care is for infants and young children who have problems with their vision.',
                        "If your child is experiencing complications with their vision, or you believe there is a potential problem with their eyes, we can provide a detailed assessment to confirm the health of your child's eyes."
                    ]
                }
                altText=""
                image={data?.section_3?.image || '/images/section-images/paediatric-children-large.png'}
                desktopImage={data?.section_3?.imageLarge || '/images/section-images/paediatric-children-large.png'}
                textColumnExtraBottomElements={
                    <BookConsultation buttonClassName="hover:bg-brandLight mt-12">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section7?.heading}
                descriptions={data?.section7?.descriptions}
                sectionImage={{
                    url: data?.section7?.image?.src || '/images/section-images/about-ophthalmologist.png',
                    width: 390 || data?.section7?.image?.width,
                    height: 390 || data?.section7?.image?.height
                }}
                sectionImageDesktop={{
                    url: data?.section7?.image?.src || '/images/section-images/about-ophthalmologist-large.png',
                    width: 640 || data?.section7?.image?.width,
                    height: 610 || data?.section7?.image?.height
                }}
                positionReversed
            />

            <Section>
                <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[auto_6rem_auto] md:gap-0 lg:grid-cols-[1fr_10rem_auto]">
                    <div className="relative z-[2] grid content-start gap-12 rounded-radius2 bg-white md:col-span-2 md:col-start-1 md:row-start-1 md:py-12 md:pl-12 md:pr-24 lg:py-12">
                        <div className="grid gap-6">
                            <h3 className="max-w-[36.2rem] font-latoBold text-[2rem] leading-[2.8rem]">
                                {data?.section9?.heading}
                            </h3>
                            <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
                        </div>

                        <div className="grid max-w-[45rem] gap-6">
                            {data?.section9?.descriptions
                                ? data.section9.descriptions.map((item, key) => (
                                      <p dangerouslySetInnerHTML={{ __html: item }} key={key}></p>
                                  ))
                                : null}
                        </div>

                        <BookConsultation>
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>
                    </div>
                    <div className="row-start-1 h-full md:col-span-2 md:col-start-2 md:row-start-1">
                        <Image
                            src={data?.section9?.image || '/images/section-images/paediatric-banner.png'}
                            alt=""
                            width={619}
                            height={316}
                            className="h-full w-full rounded-radius2 md:rounded-bl-none md:rounded-tl-none"
                        />
                    </div>
                </Container>
            </Section>

            <SideImageSection
                h3LightHeading={data?.section8?.heading}
                descriptions={data?.section8?.descriptions}
                sectionImage={{
                    url: data?.section8?.image?.src || '/images/section-images/about-ophthalmologist.png',
                    width: 390 || data?.section8?.image?.width,
                    height: 390 || data?.section8?.image?.height
                }}
                sectionImageDesktop={{
                    url: data?.section8?.image?.src || '/images/section-images/about-ophthalmologist-large.png',
                    width: 640 || data?.section8?.image?.width,
                    height: 610 || data?.section8?.image?.height
                }}
                positionReversed
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection
                title={data?.sectionspeakteam?.title}
                subtitle={data?.sectionspeakteam?.sub_heading || 'Speak to our friendly team'}
            />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'What does a Paediatric ophthalmologist do?'}
                descriptions={
                    (data?.section_1?.descriptions?.length && data?.section_1?.descriptions) || [
                        'Our Paediatric ophthalmologist is an expert in assessing, diagnosing, treating and managing children who develop eye conditions from 1 year old to 18 years old.',
                        "Our Paediatric ophthalmologist will be the best eye doctor to help you understand your child's eye condition and, most importantly, help your child understand."
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/about-ophthalmologist.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/about-ophthalmologist-large.png',
                    width: 640,
                    height: 610
                }}
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link   text-center  !border-2">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] md:px-20"
                        />
                    </div>
                }
            />

            <Section>
                <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[auto_3rem_auto] md:gap-0 lg:grid-cols-[auto_10rem_1fr]">
                    <div className="relative z-[2] grid content-start gap-12 rounded-radius2 bg-white md:col-span-2 md:col-start-2 md:row-start-1 md:py-12 md:pl-24 md:pr-12">
                        <div className="grid gap-6">
                            <h3 className="max-w-[36.2rem] font-latoBold text-[2rem] leading-[2.8rem]">
                                {data?.section_2?.heading}
                            </h3>
                            <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
                        </div>

                        <div className="grid max-w-[45rem] gap-6">
                            {data?.section_2?.descriptions
                                ? data.section_2.descriptions.map((item, key) => (
                                      <p dangerouslySetInnerHTML={{ __html: item }} key={key}></p>
                                  ))
                                : null}
                        </div>
                    </div>
                    <div className="row-start-1 h-full md:col-span-2 md:col-start-1 md:row-start-1">
                        <Image
                            className="h-full w-full rounded-radius2 md:rounded-bl-none md:rounded-tl-none "
                            {...data?.section_2?.image}
                        />
                    </div>
                </Container>
            </Section>

            <CtaSection2 {...data?.ctaSection2} subTitleClass="text-[#94CAFF] font-latoMedium" />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || paediatricFaqList}
                    titleLight="Paediatric eye care"
                    titleBold="Frequently asked questions"
                    description="Have a question? We are here to help."
                />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'paediatric-eye-care' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
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
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section_2?.image && formatImage(data.acf?.section_2?.image))
                        }
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    }, //
                    section9: {
                        ...data?.acf?.section9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section9?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions)
                    },
                    section7: {
                        ...data?.acf?.section7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section7?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section7?.image && formatImage(data.acf?.section7?.image))
                        }
                    },
                    section8: {
                        ...data?.acf?.section8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section8?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section8?.image && formatImage(data.acf?.section8?.image))
                        }
                    },
                    sectionspeakteam: {
                        ...data?.acf?.sectionspeakteam
                    },
                    ctaSection2: {
                        ...data?.acf?.ctaSection2,
                        image: {
                            ...(data?.acf?.ctaSection2?.image && formatImage(data.acf?.ctaSection2?.image))
                        }
                    }
                }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
