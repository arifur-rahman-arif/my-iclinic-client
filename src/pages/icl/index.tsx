import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { iclFaqList } from '@/components/page-sections/Faq/faqList';
import { iclSliders } from '@/components/page-sections/FeaturedPatient';
import { iclListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { getPageData } from '@/lib';
import ContactComponent from '@/page-sections/IclComponents/ContactComponent';
import ContactLensComponent from '@/page-sections/IclComponents/ContactLensComponent';
import EyeCareComponent from '@/page-sections/IclComponents/EyeCareComponent';
import EyeConsultation from '@/page-sections/IclComponents/EyeConsultation';
import EyeSurgeryConsultation from '@/page-sections/IclComponents/EyeSurgeryConsultation';
import LensBenefits from '@/page-sections/IclComponents/LensBenefits';
import VisionBenefits from '@/page-sections/IclComponents/VisionBenefits';
import VisionCorrectionPromo from '@/page-sections/IclComponents/VisionCorrectionPromo';
import MastheadICL from '@/page-sections/Masthead/MastheadICL';
import { IclContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
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

interface DataInterface extends IclContentInterface, PageDataInterface<IclContentInterface> {}

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
export default function Icl({ seo, yoastJson, data }: IclProps): JSX.Element {
    const heading = data?.masthead_heading || 'ICL Surgery in London';
    const subheading = data?.masthead_subheading || 'Implantable Contact Lenses';

    const reviewSliderdata: any =
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
            <BreadCrumb />

            <MastheadICL
                title="Implantable contact Lenses <span>(ICL)</span> Surgery in London"
                largeImage={{
                    src: '/images/masthead/masthead-icl.png',
                    width: 541,
                    height: 735,
                    alt: 'Implantable contact Lenses ICL Surgery in London'
                }}
                smallImage={{
                    src: '/images/masthead/masthead-icl-small.png',
                    width: 191,
                    height: 189,
                    alt: ''
                }}
                priceText="£2750/Per eye"
                financeText="24 months 0% finance"
                reviewsText={{
                    google: '4.9 | 71',
                    trustpilot: '4.8 | 315'
                }}
                cardList={[
                    {
                        icon: {
                            src: '/images/icons/icon-timer.svg'
                        },
                        title: 'Saving time',
                        description: 'Wake up in the morning with your sight ready before you are!',
                        className: 'xl:rounded-tl-primary'
                    },
                    {
                        icon: {
                            src: '/images/icons/icon-vision.svg'
                        },
                        title: 'Saving vision',
                        description: 'No risk of infections, dry eyes or blindness',
                        className: 'md:bg-[#005DAF] md:[&>*]:text-white'
                    },
                    {
                        icon: {
                            src: '/images/icons/icon-planet.svg'
                        },
                        title: 'Saving our planet',
                        description: 'Sustainable contact lenses for a sustainable future.',
                        className:
                            'bg-[#005DAF] [&>*]:text-white md:bg-[#94CAFF] md:[&>*]:text-[#003E79] xl:rounded-tr-primary'
                    }
                ]}
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <VisionCorrectionPromo
                heading={'No more glasses & contact lenses hassle'}
                subHeading={'London’s latest vision correction treatment for glasses and contact lens wearers'}
                descriptions={[
                    'If you are ready to break from compromising with your everyday contact lenses or glasses, take a look at our <a href="" title="biocompatible ICL">biocompatible ICL</a> lenses made by EVO Visian - a groundbreaking Evolution in Visual Freedom!'
                ]}
                image1={{
                    src: '/images/section-images/vision-correction-promo-1.png',
                    width: 364,
                    height: 387,
                    alt: 'No more glasses & contact lenses hassle'
                }}
                image2={{
                    src: '/images/section-images/vision-correction-promo-2.png',
                    width: 364,
                    height: 387,
                    alt: 'No more glasses & contact lenses hassle'
                }}
            />

            <EyeConsultation
                sectionId={'icl-consultation'}
                heading={'ICL consultation'}
                descriptions={[
                    `An ICL consultation for Implantable contact lenses couldn’t be easier! Our friendly team will guide you through some eye assessments which will take approximately one hour.`,
                    `Once complete, your specialist will advise you on the best lens size for your eyes.`,
                    `During your eye assessments, we will need to dilate your pupil with drops to take detailed measurements of your retina and your exact prescription.`,
                    `Prior to your ICL appointment, we will advise that you do not wear contact lenses for two weeks to ensure your eye is ready for measurements to be taken.`,
                    `None of these measurements are invasive or uncomfortable and our ophthalmic technician will support you through these assessments.`,
                    `The eye drops will make your vision blurry so we advise that you have a friend or family member to help transport you home.`,
                    `Based on your ICL assessments, our specialist will talk with you about proceeding with the treatment and how this treatment can best suit your lifestyle!`
                ]}
                image={{
                    src: '/images/section-images/icl-consultation.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL consultation'
                }}
            />

            <EyeConsultation
                sectionId={'icl-treatment'}
                heading={'ICL treatment'}
                descriptions={[
                    `On the day of your ICL treatment, it’s best not to wear eye makeup or to put drops in your eyes.`,
                    `Once arriving at our ICL clinic, our friendly nurse will explain what to expect during and after the procedure. Once ready you will be escorted into the procedure room.`,
                    `A drop of anesthetic is placed on your cornea which also dilates your eyes.`,
                    `The surgeon will be giving you clear and easy instructions to guide you throughout the procedure while they insert the contact lens implant.`,
                    `Once the procedure is finished our nurse will discuss our aftercare advice and how to use your new eye drops before your aftercare appointment with your specialist.`,
                    `Our Implantable contact Lens procedure lasts for two hours from when you arrive and when you return back home.`
                ]}
                image={{
                    src: '/images/section-images/icl-treatment.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL treatment'
                }}
                imageClassName="md:order-2"
            />

            <EyeConsultation
                sectionId={'icl-aftercare'}
                heading={'ICL aftercare'}
                descriptions={[
                    `For Implantable Contact Lens treatment there is a one-week recovery period where minimal activity is required before attending an aftercare appointment with your specialist.`,
                    `During the one week recovery period, our team is always here to answer any other questions you may have so that you can live confidently and comfortably following your ICL surgery.`,
                    `Once you attend an aftercare appointment with the ICL specialist you will be able to begin life without glasses or disposable contact lenses again!`
                ]}
                image={{
                    src: '/images/section-images/icl-aftercare.png',
                    width: 692,
                    height: 617,
                    alt: 'ICL aftercare'
                }}
            />

            <EyeCareComponent
                sectionId="eye-care"
                cardList={[
                    {
                        icon: {
                            src: '/images/icons/icons-check-outline-blue.svg',
                            width: 48,
                            height: 48,
                            alt: ''
                        },
                        title: '99.4% of people',
                        description: 'Would choose to have ICL again'
                    },
                    {
                        icon: {
                            src: '/images/icons/icons-check-outline-blue.svg',
                            width: 48,
                            height: 48,
                            alt: ''
                        },
                        title: '2,000,000+ ICL',
                        description: 'Procedures worldwide'
                    },
                    {
                        icon: {
                            src: '/images/icons/icons-check-outline-blue.svg',
                            width: 48,
                            height: 48,
                            alt: ''
                        },
                        title: '20+ years',
                        description: 'Of premium ICL performance'
                    }
                ]}
            />

            <LensBenefits
                sectionId="lens-benefits"
                heading={'Life after implantable contact lenses!'}
                cardList={[
                    {
                        image: {
                            src: '/images/section-images/saving-money.png',
                            width: 294,
                            height: 167,
                            alt: 'Saving Money'
                        },
                        title: 'Saving Money',
                        shortDescription: 'Saves the average contact lens buyer <strong>£13,200!</strong>',
                        descriptions: [
                            'Saves the average contact lens buyer <strong>£13,200!</strong>',
                            'One custom lens means one all- time purchase.',
                            'Never waste money by repeatedly buying plastic contact lenses to throw away. One ICL procedure saves the average contact lens buyer <strong>£13,200!</strong>'
                        ]
                    },
                    {
                        image: {
                            src: '/images/section-images/saving-time.png',
                            width: 294,
                            height: 167,
                            alt: 'Saving Time'
                        },
                        title: 'Saving Time',
                        shortDescription:
                            'Where are my contacts? Wake up in the morning with your sight ready before you are!',
                        descriptions: [
                            'Where are my contacts? Wake up in the morning with your sight ready before you are!',
                            'Skip the daily lens routine for hassle-free clarity.',
                            'Reclaim your time and enjoy immediate, ready-to-go vision.'
                        ]
                    },
                    {
                        image: {
                            src: '/images/section-images/saving-vision.png',
                            width: 294,
                            height: 167,
                            alt: 'Saving Vision'
                        },
                        title: 'Saving Vision',
                        shortDescription: 'No risk of infections, dry eyes or blindness',
                        descriptions: [
                            'No risk of infections, dry eyes or blindness',
                            'Enjoy sharp, stable vision without discomfort.',
                            'Pursue your passions worry-free with constant clear vision.'
                        ]
                    },
                    {
                        image: {
                            src: '/images/section-images/save-planet.png',
                            width: 294,
                            height: 167,
                            alt: 'Saving Our Planet'
                        },
                        title: 'Saving Our Planet',
                        shortDescription: 'Sustainable contact lenses for a sustainable future.',
                        descriptions: [
                            'Sustainable contact lenses for a sustainable future.',
                            'Reduce your environmental footprint by eliminating the need for disposable plastic lenses that end up in landfills.',
                            'Less plastic waste means less harm to our oceans and wildlife. Be part of the solution to plastic pollution.'
                        ]
                    }
                ]}
            />

            <ContactLensComponent
                sectionId={'contact-lens'}
                heading={'Our implantable contact lenses are transparent in price too!'}
                priceText={'£2750 per eye'}
                subHeading={'With 10 months interest-free finance available!'}
                description={
                    'The best ICL surgery price in London, saving an average of £2,000 in your treatment when you come to My-iClinic.'
                }
                list={[
                    '0% finance available',
                    'One dedicated ICL specialist for your treatment',
                    'Most affordable price in London'
                ]}
                image={{
                    src: '/images/section-images/underwater-diving.png',
                    width: 665,
                    height: 490,
                    alt: 'Our implantable contact lenses'
                }}
            />

            <EyeSurgeryConsultation
                sectionId={'eye-surgery-consultation'}
                heading={'Book a consultation today to see if ICL eye surgery is right for you'}
                description={
                    'Discuss your options and eligibility for implantable contact lens surgery with one of our experts. We will give you clear advice on your suitability and best vision correction options for your circumstances.'
                }
                image={{
                    src: '/images/section-images/eye-surgery-consultation.png',
                    width: 728,
                    height: 600,
                    alt: 'My-iClinic Doctors'
                }}
            />

            <VisionBenefits
                sectionId="vision-benefits"
                heading={'The benefits of implantable contact Lenses for clear, long-term vision!'}
                beneficialItems={[
                    {
                        icon: {
                            src: '/images/icons/icon-biocompatibility.svg',
                            width: 80,
                            height: 80,
                            alt: 'Biocompatibility'
                        },
                        title: 'Biocompatibility',
                        descriptions: [
                            'Our Implantable lenses are made of biocompatible Collamer – proprietary material used exclusively by STAAR Surgical.',
                            'Collamer is a unique material that contains collagen which means the lens is made to naturally harmonize with your eye.',
                            'The ICL Collamer technology has unique advantages that make it an ideal material for a vision correction lens, including UV protection and it is easy to implant because it is soft and pliable.'
                        ],
                        image: {
                            src: '/images/section-images/biocompatibility.png',
                            width: 697,
                            height: 519,
                            alt: 'Biocompatibility'
                        }
                    },
                    {
                        icon: {
                            src: '/images/icons/icon-dry-eyes.svg',
                            width: 80,
                            height: 80,
                            alt: 'No more dry eyes'
                        },
                        title: 'No more dry eyes',
                        descriptions: [
                            'ICL can be described as additive vision correction. Unlike other procedures, the ICL procedure does not remove corneal tissue, but works in harmony with your natural eyes to provide exceptional quality of vision.',
                            'Because the cornea is left intact with no reshaping or removal of the corneal tissue it does not induce any dry eye symptoms and can help with any existing dry eye syndrome you may be experiencing from your everyday plastic contact lenses.'
                        ],
                        image: {
                            src: '/images/section-images/dry-eyes.png',
                            width: 697,
                            height: 519,
                            alt: 'No more dry eyes'
                        }
                    },
                    {
                        icon: {
                            src: '/images/icons/icon-icl-procedure.svg',
                            width: 80,
                            height: 80,
                            alt: ''
                        },
                        title: 'A quick ICL procedure and recovery',
                        descriptions: [
                            'Our Implantable lenses are made of biocompatible Collamer – proprietary material used exclusively by STAAR Surgical.',
                            'Collamer is a unique material that contains collagen which means the lens is made to naturally harmonize with your eye.',
                            'The ICL Collamer technology has unique advantages that make it an ideal material for a vision correction lens, including UV protection and it is easy to implant because it is soft and pliable.'
                        ],
                        image: {
                            src: '/images/section-images/icl-procedure.png',
                            width: 697,
                            height: 519,
                            alt: 'A quick ICL procedure and recovery'
                        }
                    },
                    {
                        icon: {
                            src: '/images/icons/icon-removability.svg',
                            width: 80,
                            height: 80,
                            alt: ''
                        },
                        title: 'Removability',
                        descriptions: [
                            'Though the ICL is designed to remain in the eye without maintenance, permanently correcting your vision, the lens can be completely removed providing flexibility for the future.',
                            'In the event of a major prescription change or the availability of new vision correction options, ICL is completely removable. Allowing you to keep pace with advancing technology and your future prescription if needed.'
                        ],
                        image: {
                            src: '/images/section-images/icl-removability.png',
                            width: 697,
                            height: 519,
                            alt: 'Removability'
                        }
                    }
                ]}
            />

            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_3?.sub_heading || 'ICL Patient'}
                    h3Title={data?.section_3?.heading || 'Life after ICL Treatment'}
                    bandImageDescription={
                        (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                            `Now I wake up and I don’t have to put in contacts.`,
                            'I open my eyes and I can actually see myself in the mirror without squinting.',
                            `I don’t need contact lenses to do my make up in the mornings anymore.`,
                            `I just feel a lot more confident. I feel as though I have my eyes, not some plastic thing on my face.`
                        ]
                    }
                    bandImageTitle={data?.section_3?.bandImageTitle || 'Eliete'}
                    bandImageURL={data?.section_3?.bandImageURL || '/images/section-images/eliete.png'}
                    reviewDescription={
                        (data?.section_3?.review_Description?.length && data?.section_3?.review_Description) || [
                            `It’s just been amazing and I would do it again…`
                        ]
                    }
                    reviewTitle={data?.section_3?.reviewtitle || 'Thank you My-iClinic'}
                    sliders={iclSliders}
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
                <NormalSlideSection sliderList={reviewSliderdata ? reviewSliderdata : iclListCataract} />
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
        const data: WpPageResponseInterface<IclContentInterface> = await getPageData({ slug: 'icl' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions),
                        review_Description: convertArrayOfObjectsToStrings(data?.acf?.section_3?.review_Description)
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4
                    }, // 2
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions)
                    },
                    section_7: {
                        ...data?.acf?.section_7,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_7?.lists)
                    },
                    section_8: {
                        ...data?.acf?.section_8
                    },
                    leftRightsection: Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    reviewSlider: Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData
                              };
                          })
                        : [],
                    lensesSlider: Array.isArray(data?.acf?.lensesSlider)
                        ? data?.acf.lensesSlider.map((sectionData: { descriptions: any[] | undefined }) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData?.descriptions)
                              };
                          })
                        : [],
                    sustainability_section: {
                        plastic_free_life: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.plastic_free_life.descriptions
                            )
                        },
                        gift_of_a_tree: {
                            ...data?.acf?.sustainability_section?.gift_of_a_tree,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.gift_of_a_tree.descriptions
                            )
                        },
                        clearer_vision: {
                            ...data?.acf?.sustainability_section?.clearer_vision,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.clearer_vision.descriptions
                            )
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
