import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { iclFaqList } from '@/components/page-sections/Faq/faqList';
import { iclSliders } from '@/components/page-sections/FeaturedPatient';
import MastheadLaserEyeSurgery from '@/components/page-sections/Masthead/MastheadLaserEyeSurgery';
import { iclListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { getPageData, getTreatments } from '@/lib';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import ContactComponent from '@/page-sections/IclComponents/ContactComponent';
import ContactLensComponent from '@/page-sections/IclComponents/ContactLensComponent';
import EyeCareComponent from '@/page-sections/IclComponents/EyeCareComponent';
import EyeConsultation from '@/page-sections/IclComponents/EyeConsultation';
import EyeSurgeryConsultation from '@/page-sections/IclComponents/EyeSurgeryConsultation';
import LensBenefits from '@/page-sections/IclComponents/LensBenefits';
import VisionBenefits from '@/page-sections/IclComponents/VisionBenefits';
import VisionCorrectionPromo from '@/page-sections/IclComponents/VisionCorrectionPromo';
import MastheadICL from '@/page-sections/Masthead/MastheadICL';
import { LaserEyeSurgeryContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import React from 'react';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/components/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

const EnvironmentalImpact = dynamic(() => import('@/page-sections/HomePage/EnvironmentalImpact'), {
    loading: () => <ComponentLoader />
});

const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends LaserEyeSurgeryContentInterface, PageDataInterface<LaserEyeSurgeryContentInterface> {}

interface IclProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /icl
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LaserEyeSurgery({ seo, yoastJson, data }: IclProps): JSX.Element {
    const heading = data?.masthead_heading || 'Laser Eye Surgery';
    const subheading = data?.masthead_subheading || 'Reducing or eliminating the need for glasses or contact lenses';

    const reviewSliderData: any =
        Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0
            ? data.reviewSlider.map((service) => {
                  return {
                      ...service,
                      description: service?.description,
                      name: service?.name,
                      title: service?.title
                  };
              })
            : null;

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <MastheadLaserEyeSurgery />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <VisionCorrectionPromo
                heading={data?.section1?.heading || 'No more glasses & contact lenses hassle'}
                subHeading={
                    data?.section1?.subHeading ||
                    'London’s latest vision correction treatment for glasses and contact lens wearers'
                }
                descriptions={
                    (data?.section1?.descriptions?.length && data?.section1.descriptions) || [
                        'If you are ready to break from compromising with your everyday contact lenses or glasses, take a look at our <a href="" title="biocompatible ICL">biocompatible ICL</a> lenses made by EVO Visian - a groundbreaking Evolution in Visual Freedom!'
                    ]
                }
                image1={{
                    src: '/images/section-images/vision-correction-promo-1.png',
                    width: 364,
                    height: 387,
                    alt: 'No more glasses & contact lenses hassle',
                    ...(data?.section1?.image1 as any)
                }}
                image2={{
                    src: '/images/section-images/vision-correction-promo-2.png',
                    width: 364,
                    height: 387,
                    alt: 'No more glasses & contact lenses hassle',
                    ...(data?.section1?.image2 as any)
                }}
            />

            <EyeConsultation
                sectionId={'icl-consultation'}
                heading={data?.section2?.heading || 'ICL consultation'}
                descriptions={
                    (data?.section2?.descriptions?.length && data?.section2.descriptions) || [
                        `An ICL consultation for Implantable contact lenses couldn’t be easier! Our friendly team will guide you through some eye assessments which will take approximately one hour.`,
                        `Once complete, your specialist will advise you on the best lens size for your eyes.`,
                        `During your eye assessments, we will need to dilate your pupil with drops to take detailed measurements of your retina and your exact prescription.`,
                        `Prior to your ICL appointment, we will advise that you do not wear contact lenses for two weeks to ensure your eye is ready for measurements to be taken.`,
                        `None of these measurements are invasive or uncomfortable and our ophthalmic technician will support you through these assessments.`,
                        `The eye drops will make your vision blurry so we advise that you have a friend or family member to help transport you home.`,
                        `Based on your ICL assessments, our specialist will talk with you about proceeding with the treatment and how this treatment can best suit your lifestyle!`
                    ]
                }
                image={{
                    src: '/images/section-images/icl-consultation.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL consultation',
                    ...(data?.section2?.image as any)
                }}
            />

            <EyeConsultation
                sectionId={'icl-treatment'}
                heading={data?.section3?.heading || 'ICL treatment'}
                descriptions={
                    (data?.section3?.descriptions?.length && data?.section3.descriptions) || [
                        `On the day of your ICL treatment, it’s best not to wear eye makeup or to put drops in your eyes.`,
                        `Once arriving at our ICL clinic, our friendly nurse will explain what to expect during and after the procedure. Once ready you will be escorted into the procedure room.`,
                        `A drop of anesthetic is placed on your cornea which also dilates your eyes.`,
                        `The surgeon will be giving you clear and easy instructions to guide you throughout the procedure while they insert the contact lens implant.`,
                        `Once the procedure is finished our nurse will discuss our aftercare advice and how to use your new eye drops before your aftercare appointment with your specialist.`,
                        `Our Implantable contact Lens procedure lasts for two hours from when you arrive and when you return back home.`
                    ]
                }
                image={{
                    src: '/images/section-images/icl-treatment.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL treatment',
                    ...(data?.section3?.image as any)
                }}
                imageClassName="md:order-2"
            />

            <EyeConsultation
                sectionId={'icl-aftercare'}
                heading={data?.section4?.heading || 'ICL aftercare'}
                descriptions={
                    (data?.section4?.descriptions?.length && data?.section4.descriptions) || [
                        `For Implantable Contact Lens treatment there is a one-week recovery period where minimal activity is required before attending an aftercare appointment with your specialist.`,
                        `During the one week recovery period, our team is always here to answer any other questions you may have so that you can live confidently and comfortably following your ICL surgery.`,
                        `Once you attend an aftercare appointment with the ICL specialist you will be able to begin life without glasses or disposable contact lenses again!`
                    ]
                }
                image={{
                    src: '/images/section-images/icl-aftercare.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL aftercare',
                    ...(data?.section4?.image as any)
                }}
            />

            <EyeCareComponent sectionId="eye-care" cardList={data?.section5?.cardList} />

            <LensBenefits
                sectionId="lens-benefits"
                heading={data?.section6?.heading || 'Life after implantable contact lenses!'}
                cardList={data?.section6?.cardList}
            />

            <ContactLensComponent
                sectionId={'contact-lens'}
                heading={data?.section7?.heading || 'Our implantable contact lenses are transparent in price too!'}
                priceText={data?.section7?.priceText || '£2750 per eye'}
                subHeading={data?.section7?.subHeading || 'With 10 months interest-free finance available!'}
                description={
                    data?.section7?.description ||
                    'The best ICL surgery price in London, saving an average of £2,000 in your treatment when you come to My-iClinic.'
                }
                list={
                    (data?.section7?.list?.length && data.section7.list) || [
                        '0% finance available',
                        'One dedicated ICL specialist for your treatment',
                        'Most affordable price in London'
                    ]
                }
                image={{
                    src: '/images/section-images/underwater-diving.png',
                    width: 665,
                    height: 490,
                    alt: 'Our implantable contact lenses',
                    ...(data?.section7?.image as any)
                }}
            />

            <EyeSurgeryConsultation
                sectionId={'eye-surgery-consultation'}
                heading={
                    data?.section8?.heading || 'Book a consultation today to see if ICL eye surgery is right for you'
                }
                description={
                    data?.section8?.description ||
                    'Discuss your options and eligibility for implantable contact lens surgery with one of our experts. We will give you clear advice on your suitability and best vision correction options for your circumstances.'
                }
                image={{
                    src: '/images/section-images/eye-surgery-consultation.png',
                    width: 728,
                    height: 600,
                    alt: 'My-iClinic Doctors',
                    ...(data?.section8?.image as any)
                }}
            />

            <VisionBenefits
                sectionId="vision-benefits"
                heading={
                    data?.section9?.heading || 'The benefits of implantable contact Lenses for clear, long-term vision!'
                }
                beneficialItems={data?.section9?.beneficialItems}
            />

            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section10?.heading || 'ICL Patient'}
                    h3Title={data?.section10?.title || 'Life after ICL Treatment'}
                    bandImageDescription={
                        (data?.section10?.descriptions?.length && data?.section10.descriptions) || [
                            `Now I wake up and I don’t have to put in contacts.`,
                            'I open my eyes and I can actually see myself in the mirror without squinting.',
                            `I don’t need contact lenses to do my make up in the mornings anymore.`,
                            `I just feel a lot more confident. I feel as though I have my eyes, not some plastic thing on my face.`,
                            `It’s just been amazing and I would do it again…`
                        ]
                    }
                    bandImageTitle={data?.section10?.patientName || 'Eliete'}
                    bandImageURL={data?.section10?.patientFrontImage || '/images/section-images/eliete.png'}
                    reviewTitle={'Thank you My-iClinic'}
                    sliders={data?.section10?.patientImages || iclSliders}
                    bandColor="bg-[#7000FF]"
                />
            </LazyComponent>

            <ContactComponent
                sectionId="icl-contact"
                heading={'Is ICL for me?'}
                backgroundImage={{
                    src: '/images/section-images/icl-contact-bg.png',
                    alt: ''
                }}
            />

            <LazyComponent>
                <EnvironmentalImpact />
            </LazyComponent>

            {/* <CtaSection /> */}

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="ICL Patient Information"
                    pageSlug="icl"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderData ? reviewSliderData : iclListCataract} />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || iclFaqList}
                    titleLight="Implantable contact lenses"
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
        const data: WpPageResponseInterface<LaserEyeSurgeryContentInterface> = await getPageData({
            slug: 'laser-eye-surgery'
        });

        const treatments = await getTreatments();
        let iclTreatments = treatments.filter((treatment) => treatment.group_name === 'ICL Surgery');

        /**
         * Updates the `iclTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} iclTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        iclTreatments = iclTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        /**
         * Sort the image data into specified format
         * @param {any} img
         * @returns {{src: any, width: any, height: any}}
         */
        return {
            props: {
                iclTreatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        image: {
                            ...(data?.acf?.masthead?.image && formatImage(data.acf?.masthead?.image))
                        }
                    },
                    section1: {
                        ...data?.acf?.section1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image1: {
                            ...(data?.acf?.section1?.image1 && formatImage(data.acf.section1.image1))
                        },
                        image2: {
                            ...(data?.acf?.section1?.image2 && formatImage(data.acf.section1.image2))
                        }
                    },
                    section2: {
                        ...data?.acf?.section2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section2?.image && formatImage(data.acf.section2.image))
                        }
                    },
                    section3: {
                        ...data?.acf?.section3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section3?.image && formatImage(data.acf.section3.image))
                        }
                    },
                    section4: {
                        ...data?.acf?.section4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section4?.image && formatImage(data.acf.section4.image))
                        }
                    },
                    section7: {
                        ...data?.acf?.section7,
                        list: convertArrayOfObjectsToStrings(data?.acf?.section7?.list).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section7?.image && formatImage(data.acf.section7.image))
                        }
                    },
                    section8: {
                        ...data?.acf?.section8,
                        image: {
                            ...(data?.acf?.section8?.image && formatImage(data.acf.section8.image))
                        }
                    },
                    section9: {
                        ...data?.acf?.section9,
                        beneficialItems: data?.acf?.section9?.beneficialItems.map((item) => ({
                            ...item,
                            image: {
                                ...(item?.image && formatImage(item.image))
                            },
                            icon: {
                                ...(item?.icon && formatImage(item.icon))
                            },
                            descriptions: convertArrayOfObjectsToStrings(item?.descriptions).map((item) =>
                                stripInitialTags(item)
                            )
                        }))
                    },
                    section10: {
                        ...data?.acf?.section10,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section10?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    reviewSlider: Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData
                              };
                          })
                        : []
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
