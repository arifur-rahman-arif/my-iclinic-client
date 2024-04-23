import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { getLatestPosts, getPageData } from '@/lib';
import { myopiaFaqList } from '@/page-sections/Faq/faqList';
import { galleryListMyopia } from '@/page-sections/ImageGallery';
import {
    BookConsultation,
    CoverFlowSliderSection,
    CtaSection,
    CtaSection2,
    ImageGallery,
    MyopiaControl,
    OnScreenSliderSection,
    SideImageSection
} from '@/page-sections/index';
import BulletList from '@/page-sections/SectionParts/BulletList';
import { StackedSection2 } from '@/page-sections/StackedSection';
import { MyopiaPageContentProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button2 } from 'src/components/Buttons';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});

const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends MyopiaPageContentProps, PageDataInterface<MyopiaPageContentProps> {}

interface PaediatricEyeCareProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
    blogPosts: any;
}

/**
 * Myopia page
 *
 * Url: /myopia
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Myopia({ seo, yoastJson, data, blogPosts }: PaediatricEyeCareProps): JSX.Element {
    return (
        <Page
            title="Myopia Treatment In London"
            description="Our specialists can provide you with the appropriate treatment for mitigating your Myopia, no matter how severe. Find out more about our services here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                className="xl:grid-cols-[auto_58rem_1fr]"
                subTitleClass="max-w-[49rem]"
                titleClass="md:max-w-[69rem]"
            />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'What is myopia'}
                descriptions={
                    (data?.section_1?.descriptions.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        'Myopia, also known as ‘shortsightedness’, is a chronic eye condition where the eye continues to grow, causing your distant vision to become very blurry.',
                        'As the eyes continue to abnormally elongate, this retina stretches over a greater length. If your eyes are growing too long, this means the light in which your eyes need to see distant objects clearly, is bending.',
                        "This creates short sightedness because the eye's length and lack of light will make any view in the distance blurry."
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/myopia.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image?.url || '/images/section-images/myopia-large.png',
                    width: 675,
                    height: 426
                }}
                altText={data?.section_1?.large_image?.alt}
            />

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Myopia lifestyle'}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.section_2?.descriptions.length &&
                        stringArrayToElementArray(data?.section_2.descriptions)) || [
                        "Bringing your child's indoor lifestyle into the outdoor environment. The more we continue our lifestyle inside without natural light, we risk progressing our myopia.",
                        "Your child's lifestyle plays a very important role in their everyday eyesight and for their future sight.",
                        "To prevent and mitigate the risk of myopia, we encourage a change in lifestyle by bringing your child's everyday activities outdoors.",
                        'Our Myopia specialist, Dr. Bolger will provide you and your child with material to recommend these lifestyle adjustments when visiting our Myopia control clinic.'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image?.url || '/images/section-images/myopia-lifestyle.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image?.url || '/images/section-images/myopia-lifestyle-large.png',
                    width: 664,
                    height: 428
                }}
                altText={data?.section_2?.large_image?.alt}
                positionReversed
                textColumnExtras={
                    <BookConsultation buttonClassName="justify-self-start -mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                sectionId="research"
                h3LightHeading={data?.section_3?.heading || 'Myopia research'}
                descriptions={
                    (data?.section_3?.descriptions.length &&
                        stringArrayToElementArray(data?.section_3.descriptions)) || [
                        'Our Myopia specialist, Mr. Bolger has been treating children and adults with myopia (nearsightedness) and hyperopia (farsightedness) for the past ten years.',
                        'During these years, he has noticed a rapid progression of myopia in young children, aged as little as 3 years old.',
                        "His research has identified that natural daylight is essential for our eyes to develop naturally, without the eye needing to compensate its natural and normal shape. The longer the axial length of a child's eye, the more difficult their vision becomes.",
                        "The purpose of monitoring and preventing the growth of your child's axial length is to make sure their vision in the future is saved and they will not experience blindness."
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/myopia-research.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image?.url || '/images/section-images/myopia-research-large.png',
                    width: 630,
                    height: 370
                }}
                largeImageClassName="border border-solid rounded-radius2 border-[#EAECF0] h-full w-full"
                altText={data?.section_3?.large_image?.alt}
            />

            <OnScreenSliderSection sliderList={blogPosts} />

            <SideImageSection
                containerClassName="md:!grid-cols-[auto_1fr]"
                h3LightHeading={data?.section_4?.heading || 'Myopia treatments?'}
                descriptions={
                    (data?.section_4?.descriptions.length &&
                        stringArrayToElementArray(data?.section_4.descriptions)) || [
                        "Lifestyle changes, atropine eye drops and careful, continuous monitoring of your child's myopia are all effective in treating your child's myopic condition.",
                        "Our 0.01% and 0.05% atropine eye drops can be prescribed by our myopia specialist to prevent your child's eye from elongating and remissen the symptoms of worsening vision.",
                        'However, our atropine treatments are most effective when lifestyle changes are made by changing our day-to-day indoor activities into the natural daylight.',
                        <strong>
                            “It is not a question of finding a ‘cure’ for myopia, it is a question of allowing our
                            future children to live in an environment that is close to nature, natural light. This
                            allows your child's eyes to naturally develop and stop the condition of myopia in the first
                            place. Leave the eye alone and it will be perfect. This concept is not only true for myopia
                            but for many of the climate crises we are currently facing.”
                        </strong>
                    ]
                }
                textColumnExtras={
                    <div className="grid max-w-[45.3rem] content-start gap-6">
                        <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>
                        {data?.section_4?.extraDescriptions?.length
                            ? data?.section_4?.extraDescriptions.map((item, key) => (
                                  <span className="text-balance font-mulishBold text-heading" key={key}>
                                      {item}
                                  </span>
                              ))
                            : null}

                        <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#893277]">
                            {data?.section_4?.priceText}
                        </span>
                        <Button2
                            type="anchor"
                            link="/myopia/price"
                            text="Myopia control price"
                            className="justify-self-start"
                        />
                    </div>
                }
                sectionImage={{
                    url: data?.section_4?.image?.url || '/images/section-images/myopia-treatments.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image?.url || '/images/section-images/myopia-treatments-large.png',
                    width: 702,
                    height: 411
                }}
                altText={data?.section_4?.large_image?.alt}
                largeImageClassName="h-full"
            />

            <SideImageSection
                containerClassName="md:!grid-cols-[auto_1fr]"
                h3LightHeading={data?.section_5?.heading || "Mitigating your child's myopia"}
                descriptions={
                    (data?.section_5?.descriptions.length &&
                        stringArrayToElementArray(data?.section_5.descriptions)) || [
                        'Our Myopia mitigation and control clinic is a program of treatment that reduces the rate of growth of the eye and stops it getting too long.',
                        "By 2050 the World Health Organization predicts that 50% of our world's population will be suffering from Myopia.",
                        'We are here to create a positive impact and help reduce this predicted number by providing accessible Atropine treatment and expert medical advice for your child.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image?.url || '/images/section-images/mitigating-myopia.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/mitigating-myopia-large.png',
                    width: 628,
                    height: 343
                }}
                altText={data?.section_5?.large_image?.alt}
                positionReversed
                textColumnExtras={
                    <div className="grid max-w-[45.3rem] content-start gap-6">
                        <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                            {data?.section_5?.consultationText}
                        </span>
                        <BookConsultation>
                            <Button2 type="button" text="Book a consultation" className="justify-self-start" />
                        </BookConsultation>
                    </div>
                }
            />

            <ImageGallery
                sectionClassName="bg-[#003E79] py-12 md:py-24 xl:py-32"
                galleryList={data?.section_6 || galleryListMyopia}
                dynamicHeading={
                    <Container className="mb-12 grid !max-w-[106.2rem] gap-12 md:mb-24">
                        <h2 className="text-center normal-case text-white">Changing our indoor lifestyles</h2>
                    </Container>
                }
            />

            <SideImageSection
                containerClassName="md:!grid-cols-1 md:!gap-12"
                h3LightHeading={data?.section_7?.heading || 'Treatment options for Myopia Control'}
                descriptions={
                    (data?.section_7?.descriptions.length &&
                        stringArrayToElementArray(data?.section_7.descriptions)) || [
                        <strong className="text-[2rem] leading-[2.8rem]">
                            Myopia treatment we can provide with regular management
                        </strong>
                    ]
                }
                customColumn={<MyopiaControl cardList={data?.section_7?.card_list} />}
            />

            <SideImageSection
                h3LightHeading={
                    data?.section_8.heading?.light_heading || 'Other treatments your opticians can help with'
                }
                containerClassName="xl:!grid-cols-[1fr_auto]"
                descriptions={[
                    <>
                        <BulletList
                            className="!ml-0 content-start"
                            listClassName="!gap-6 content-start"
                            bulletClass="h-9 w-9 -mt-1"
                            list={
                                (data?.section_8.list.length && stringArrayToElementArray(data.section_8.list)) || [
                                    <div className="grid gap-6">
                                        <strong className="text-[2rem] leading-[2.8rem]">Miyosmart glasses</strong>
                                        <p>
                                            Miyosmart glasses monitor and reduce the growth of your child’s eye.
                                            MiyoSmart glasses provide clear vision simultaneously at all viewing
                                            distances.
                                        </p>
                                    </div>,
                                    <div className="grid gap-6">
                                        <strong className="text-[2rem] leading-[2.8rem]">Ortho-k contact lenses</strong>
                                        <p>
                                            Ortho-k contact lenses gently reshape the cornea of your child's eyes while
                                            they sleep. Astigmatism can also be corrected by using Ortho-K and can slow
                                            the progression of myopia.
                                        </p>
                                    </div>
                                ]
                            }
                            bulletPoint={
                                <Image
                                    src="/images/icons/icon-dotted-arrow-blue.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-8 w-9 translate-y-1"
                                />
                            }
                        />
                    </>
                ]}
                sectionImage={{
                    url: data?.section_8?.image?.url || '/images/section-images/myopia-other-treatments.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_8?.large_image?.url || '/images/section-images/myopia-other-treatments-large.png',
                    width: 719,
                    height: 498
                }}
                largeImageClassName="w-full h-full object-cover rounded-radius2"
                altText={data?.section_8?.large_image?.alt}
                textColumnExtras={
                    <Button2
                        type="button"
                        text="Speak to an expert"
                        onClick={openFreshdeskChat}
                        className="-mt-6 justify-self-start"
                    />
                }
            />

            <SideImageSection
                positionReversed
                h3LightHeading={
                    data?.section_9?.heading ||
                    'Have you noticed that your child has an existing or emerging eye condition?'
                }
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.section_9?.descriptions.length &&
                        stringArrayToElementArray(data?.section_9.descriptions)) || [
                        'It’s worrying, because you know that good vision is essential for them to not fall behind, both developmentally and socially.',
                        <strong>
                            So, you’re looking for a child-friendly and affordable eye doctor who can help give your
                            child the best opportunity to live a visually able life.
                        </strong>
                    ]
                }
                sectionImage={{
                    url: data?.section_9?.image?.url || '/images/section-images/myopia-emerging-eye-condition.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_9?.large_image?.url ||
                        '/images/section-images/myopia-emerging-eye-condition-large.png',
                    width: 688,
                    height: 521
                }}
                altText={data?.section_9?.large_image?.alt}
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <CtaSection {...data?.ctaSection} />

            <StackedSection2
                h3LightHeading={data?.section_11?.heading || 'What do children with Myopia experience?'}
                stackList={data?.section_11?.stack_list as unknown as any}
            />

            <SideImageSection
                positionReversed
                h3LightHeading={data?.section_12?.heading || 'Booking your child’s Myopia consultation'}
                descriptions={data?.section_12?.descriptions}
                sectionImage={{
                    url: data?.section_12?.image?.url || '/images/section-images/myopia-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_12?.large_image?.url || '/images/section-images/myopia-consultation-large.png',
                    width: 688,
                    height: 521
                }}
                altText={data?.section_12?.large_image?.alt}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                textColumnExtras={
                    <div className="-mt-6 flex flex-wrap items-center justify-start gap-6">
                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-start"
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

                        <Button2
                            type="anchor"
                            link="/pdf/myopia.pdf"
                            text="Download the pack"
                            // @ts-ignore
                            download={true}
                            // @ts-ignore
                            target="_blank"
                            className="group/download justify-self-center bg-transparent text-[#003E79]"
                        />
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_13?.heading || 'Are you above the age of 21 and experiencing Myopia?'}
                descriptions={
                    (data?.section_13.descriptions?.length && data?.section_13.descriptions) || [
                        'Fortunately, there are many amazing ways we can correct short sightedness in adults.',
                        'Glasses can be a low cost solution. Contact lenses, although not always ideal, can be a practical one. But there are even more effective ways to correct vision now.',
                        'At My-iClinic, our specialists are experts in three types of procedures that can cure your short sight, with or without astigmatism:'
                    ]
                }
                sectionImage={{
                    url: data?.section_13?.image?.url || '/images/section-images/myopia-experiencing.png',
                    width: 371,
                    height: 234
                }}
                sectionImageDesktop={{
                    url: data?.section_13?.large_image?.url || '/images/section-images/myopia-experiencing-large.png',
                    width: 641,
                    height: 534
                }}
                altText={data?.section_13?.large_image?.alt}
                textColumnExtras={
                    <BulletList
                        listClassName="!gap-4"
                        listItemClassName="[&_a]:text-blue [&_a]:font-mulishBold text-[1.6rem] leading-[2.4rem] whitespace-pre-line"
                        list={data.section_13.list}
                        bulletPoint={
                            <Image
                                src="/images/icons/icon-bullet-point-blue.svg"
                                width={20}
                                height={16}
                                alt=""
                                className="h-8 w-9 translate-y-1"
                            />
                        }
                    />
                }
            />

            <CtaSection2
                title={data?.section_14?.heading || 'If you are an adult suffering from short sightedness'}
                image={data?.section_14?.image}
                subTitle={data?.section_14?.subtitle}
            />

            <SideImageSection
                h3LightHeading={data?.section_15?.heading || 'Plano 2025'}
                midExtras={
                    <p className="max-w-[47.8rem] text-balance font-mulishBold uppercase text-[#893277]">
                        {data?.section_15?.subheading ||
                            'By 2050, 4.9 billion people will be myopic, most of whom have not yet been born.'}
                    </p>
                }
                descriptions={
                    (data?.section_15.descriptions?.length &&
                        stringArrayToElementArray(data?.section_15.descriptions)) || [
                        'When they arrive in this world their eyes will contain the perfect algorithm for eye growth that evolved for millions of generations and has produced emmetropia (crisp clear vision).',
                        'But as soon as they arrive in the modern urbanized world this algorithm is corrupted by unnatural environmental inputs which causes the eye to continue to elongate, resulting in Myopia.',
                        'Plano 2025 is an organization whose aim is that no child born after 2025 should become myopic. If we are diagnosing 10-year-olds with myopia in 2035 we have failed.',
                        'And it is not a question of finding a “cure” for myopia, it is a question of allowing our future children to live in an environment that is close to nature.',
                        'This will allow natural eye development and stop the development of myopia in the first place.',
                        'Leave the eye alone and it will be perfect. This concept is not only true for myopia but for many of the crises that the human race is currently facing.'
                    ]
                }
                sectionImage={{
                    url: data?.section_15?.image?.url || '/images/section-images/myopia-plano-2025.png',
                    width: 416,
                    height: 305
                }}
                sectionImageDesktop={{
                    url: data?.section_15?.large_image?.url || '/images/section-images/myopia-plano-2025-large.png',
                    width: 694,
                    height: 526
                }}
                altText={data?.section_15?.large_image?.alt}
                largeImageClassName="h-full object-cover rounded-primary"
            />

            <CoverFlowSliderSection sliderList={data?.section_16} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title={
                        <>
                            Myopia
                            <br />
                            Patient Information
                        </>
                    }
                    pageSlug="myopia"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || myopiaFaqList}
                    titleLight="Myopia"
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
        const data: WpPageResponseInterface<MyopiaPageContentProps> = await getPageData({ slug: 'myopia' });
        const blogPosts = await getLatestPosts();

        return {
            /* eslint-disable */
            props: {
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
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions),
                        extraDescriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.extraDescriptions)
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
                    },
                    section_7: {
                        ...data?.acf.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions),
                        card_list: data?.acf?.section_7?.card_list?.length
                            ? data.acf.section_7.card_list.map((list) => {
                                  return {
                                      ...list,
                                      title: stripInitialTags(list.title),
                                      descriptions: convertArrayOfObjectsToStrings(list.descriptions).map((item) =>
                                          stripInitialTags(item)
                                      )
                                  };
                              })
                            : []
                    },
                    section_8: {
                        ...data?.acf.section_8,
                        list: convertArrayOfObjectsToStrings(data?.acf.section_8?.list)
                    },
                    section_9: {
                        ...data?.acf.section_9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_9?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_11: {
                        ...data?.acf.section_11,
                        stack_list: Array.isArray(data?.acf.section_11?.stack_list)
                            ? data?.acf.section_11?.stack_list.map((list) => {
                                  return {
                                      ...list,
                                      image: {
                                          url: list.image,
                                          width: 343,
                                          height: 194
                                      },
                                      desktopImage: {
                                          url: list.desktopImage,
                                          width: 640,
                                          height: 519
                                      },
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
                                  };
                              })
                            : []
                    },
                    section_12: {
                        ...data?.acf.section_12,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_12?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_13: {
                        ...data?.acf.section_13,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_13?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_13?.list).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_14: {
                        ...data?.acf.section_14,
                        image: {
                            ...(data?.acf?.section_14?.image && formatImage(data.acf?.section_14?.image))
                        }
                    },
                    section_15: {
                        ...data?.acf.section_15,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_15?.descriptions)
                    },
                    section_16: convertArrayOfObjectsToStrings(data?.acf.section_16),
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    }
                } as DataInterface,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                blogPosts: blogPosts
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
