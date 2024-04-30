import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import { getPageData } from '@/lib';
import { keratoconusFaqList } from '@/page-sections/Faq/faqList';
import { BookConsultation, FullWidthImageSection, SideImageSection, StackColumn2 } from '@/page-sections/index';
import Image from 'next/image';

import { keratoconusList } from '@/page-sections/SectionParts/stack-column/list';
import FullWidthImageLarge from '@/section-images/keratoconus-large.webp';
import FullWidthImage from '@/section-images/keratoconus.webp';
import { keratoconusContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';

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

interface DataInterface extends keratoconusContentInterface, PageDataInterface<keratoconusContentInterface> {}

interface KeratoconusPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 *
 * Url: /keratoconus
 *
 * @export
 * @returns {JSX.Element}
 */
export default function KeratoconusPage({ seo, yoastJson, data }: KeratoconusPageProps): JSX.Element {
    const crossListdata: any = data?.crossList
        ? data?.crossList.map((item) => {
              return {
                  ...item,
                  title: item?.title,
                  description: item?.descriptions?.length && stringArrayToElementArray(item?.descriptions)
              };
          })
        : null;

    return (
        <Page title="Keratoconus treatment London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[57rem]"
                subTitleClass="max-w-[50rem]"
                smallImageClass="row-start-1 mt-0"
                suitabilityButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border-transparent bg-transparent text-white hover:text-[#007EF5]"
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
                h3Title={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">
                            {data?.section_3?.heading || `London’s best treatment for Keratoconus`}
                        </strong>
                    </div>
                }
                altText=""
                description={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3?.descriptions)) || [
                        'Keratoconus is a progressive eye condition that affects the development of your cornea (the outer layer of your eyes). Rather than your eye growing in a normal sphere shape, those with Keratoconus develop a cone-shaped cornea that progressively thins, causing a bulge to form on the eye.',
                        'This can make it very difficult for the eyes to focus. People who have keratoconus may experience blurry vision, headaches, inflammation in their cornea, frequent changes with their prescription glasses, glares or halos around lights and increased sensitivity to light.',
                        'We can provide you with our cross-linking treatment which is the most effective surgical treatment to manage your keratoconus symptoms with our cornea specialist.'
                    ]
                }
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[57rem]"
                descriptionClass="[&_*]:!text-[#404A4D] text-[#404A4D]"
                image={data?.section_3?.image || FullWidthImage}
                desktopImage={data?.section_3?.imagelarge || FullWidthImageLarge}
                containerClass="pb-16 md:py-24"
                largeImageClassName="!h-full !w-full"
                textColumnExtraBottomElements={
                    <div className="mt-12 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="hover:bg-brandLight">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] hover:bg-brandLight md:px-20"
                        />
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_4?.heading || 'Understanding your Keratoconus'}
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        'When you arrive for a private consultation you will meet our friendly technician team who will guide you through some eye assessments to measure the thickness of your cornea and check the general health of your eyes.',
                        'Our eye assessments take around 1 hour which will inform your specialist of any cornea changes you have experienced and at what progression this may change in the future.',
                        'Our cornea specialist will carry out a chorenal typography which measures the curve of your cornea to work out how much astigmatism (impaired eyesight) you have.',
                        `They will also measure the thickness of your cornea and If you have already been using keratoconus glasses or hard contact lenses to help correct your sight, it is most likely that you will be suitable for our cross-linking treatment to strengthen the corneal tissue.`
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/corneal-typography.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.imagelarge || '/images/section-images/corneal-typography-large.webp',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                largeImageClassName="h-full"
                altText=""
            />

            <SideImageSection
                h3LightHeading={data?.section_5?.heading || 'Kerataconus treatment and cross-linking surgery'}
                h3BoldHeading=""
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        'The initial treatment for Keratoconus is glasses. However, if the condition worsens, your opticians may suggest hard contact lenses to help correct your sight.',
                        'These lenses tend to be thicker and heavier than the soft kind and can also cause your vision to be distorted when you are looking through the edge of the lens.',
                        'Despite this, they provide a more even shape to your cornea, which helps improve your ability to focus.',
                        'If you are prescribed lenses, you may find that you have to change your glasses frequently. This is because the condition causes your cornea to be thinner and more flexible.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/treatments-for-keratoconus.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.imagelarge || '/images/section-images/treatments-for-keratoconus-large.webp',
                    width: 609,
                    height: 585
                }}
                altText=""
                largeImageClassName="h-full"
            />

            <SideImageSection
                h3LightHeading={
                    data?.minimally_invasive?.heading || 'What is minimally invasive corneal cross-linking surgery?'
                }
                descriptions={
                    (data?.minimally_invasive?.descriptions?.length && data?.minimally_invasive?.descriptions) || [
                        'Our specialists may consider corneal cross-linking as the best treatment to help improve your Keratoconus condition. Cross-linking surgery strengthens the collagen fibers in your cornea to prevent your keratoconus from worsening.',
                        'Our cornea surgeon uses special eye drops and ultraviolet A(UVA) light to help the damaged tissue in your cornea grow stronger.',
                        'This procedure stops the bulge of your eye from getting any worse as it adds special bonds that work like support beams to help the cornea strengthen.'
                    ]
                }
                sectionImage={{
                    url: data?.minimally_invasive?.image || '/images/section-images/corneal-typography.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.minimally_invasive?.imageLarge || '/images/section-images/corneal-typography-large.webp',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                largeImageClassName="h-full"
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                altText=""
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                containerClassName="md:!grid-cols-1 md:!gap-24 xl:!grid-cols-1"
                h3LightHeading={data?.crosslinking?.heading || 'Why you should consider cross-linking at My-iClinic'}
                customColumn={
                    <StackColumn2
                        list={crossListdata || keratoconusList}
                        className="!ml-0 grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-6 xl:grid-cols-3"
                        boxClass="rounded-radius2 border border-solid border-[#EAECF0] p-8 sm:p-12 md:p-16"
                        titleBgAttribute
                    />
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_6?.title || `Cornea transplant at My-iClinic`}
                h2Class="max-w-[48rem]"
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        'A cornea transplant (often known as Keratoplasty or a corneal graft) is a surgery we offer to protect the eyes from severe cases of progressive Keratoconus.',
                        'If your case of keratoconus worsens, it is likely that you will become intolerant to visual aids such as: glasses and/or contact lenses.',
                        'Our cornea specialist will be able to assess whether a corneal transplant will be a suitable treatment and will remove the damaged area of your cornea, replacing this with donor tissue.',
                        'A corneal transplant can significantly reduce the risk of vision loss and improve the health of your eyes for improving vision.'
                    ]
                }
                sectionImage={{
                    url: data?.section_6?.image?.src || '/images/section-images/cta-keratoconus.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.image?.src || '/images/section-images/cta-keratoconus.webp',
                    width: 675,
                    height: 682
                }}
                textColumnExtras={
                    <div className="grid gap-6">
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-phone-dark.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <a href="tel:0208 445 8877">
                                <span className="relative block cursor-pointer font-latoBold text-[2rem] leading-[2.4rem] text-heading">
                                    (+44) 0208 445 8877
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <Image src="/images/icons/icon-chat-dark.svg" alt="" width={24} height={24} />
                            <button
                                className="relative block -translate-y-1 cursor-pointer font-latoBold text-[2rem] leading-[2.4rem] text-heading"
                                onClick={openFreshdeskChat}
                            >
                                Chat with us
                            </button>
                        </div>
                        <div className="mt-2 grid place-items-start">
                            <BookConsultation
                                buttonClassName={`group/consultation transition-all border-2 border-[#003E79] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center grid-flow-col gap-5 bg-[#003E79] rounded-[0.5rem]`}
                            >
                                <button className="" aria-label="Book a consultation">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                        />
                                        <path
                                            d="M13.334 1.66699V5.00033"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                        />
                                        <path
                                            d="M6.66602 1.66699V5.00033"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                        />
                                        <path
                                            d="M2.5 8.33301H17.5"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-[#003E79]"
                                        />
                                    </svg>

                                    <span
                                        className={`font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-[#003E79]`}
                                    >
                                        Book a consultation
                                    </span>
                                </button>
                            </BookConsultation>
                        </div>
                    </div>
                }
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || keratoconusFaqList}
                    titleLight="Keratoconus"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'keratoconus' });

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
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    crosslinking: {
                        ...data?.acf?.crosslinking,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.crosslinking?.descriptions)
                    },
                    minimally_invasive: {
                        ...data?.acf?.minimally_invasive,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.minimally_invasive?.descriptions).map(
                            (item) => stripInitialTags(item)
                        )
                    },
                    crossList: Array.isArray(data?.acf?.crossList)
                        ? data?.acf.crossList.map((sliderData) => {
                              return {
                                  ...sliderData,
                                  descriptions: convertArrayOfObjectsToStrings(sliderData?.descriptions)
                              };
                          })
                        : [],
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section_6?.image && formatImage(data.acf?.section_6?.image))
                        }
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
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
