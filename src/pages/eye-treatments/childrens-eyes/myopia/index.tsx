import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BookConsultation,
    CoverFlowSliderSection,
    CtaSection2,
    FullWidthImageSection,
    ImageGallery,
    Masthead,
    MyopiaControl,
    OnScreenSliderSection,
    SideImageSection
} from '@/components/page-sections';
import { myopiaFaqList } from '@/components/page-sections/Faq/faqList';
import IconAngleBlue from '@/icons/icon-angle-right-blue.svg';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-myopia-large.png';
import MastheadImageMedium from '@/masthead/masthead-myopia-medium.png';
import MastheadImageSmall from '@/masthead/masthead-myopia-small.png';
import { galleryListMyopia } from '@/page-sections/ImageGallery';
import BulletList from '@/page-sections/SectionParts/BulletList';
import { StackedSection2 } from '@/page-sections/StackedSection';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import H3Variant3 from 'src/components/Headings/H3Variant3';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface PaediatricEyeCareProps {
    seo: any;
    yoastJson: any;
    data: any;
}

/**
 * Myopia page
 *
 * Url: /eye-treatments/childrens-eyes/myopia
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PaediatricEyeCare({ seo, yoastJson, data }: PaediatricEyeCareProps): JSX.Element {
    const heading = 'Myopia Mitigation Clinic for Children London';
    const subheading = 'Manage your child’s short sightedness with our Myopia treatment & management clinic';

    return (
        <Page
            title="Myopia Treatment In London"
            description="Our specialists can provide you with the appropriate treatment for mitigating your Myopia, no matter how severe. Find out more about our services here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText={<></>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <SideImageSection
                h3LightHeading="What is"
                h3BoldHeading="Myopia?"
                descriptions={[
                    'Myopia, also known as ‘shortsightedness’, is a chronic eye condition where the eye continues to grow, causing your distant vision to become very blurry.',
                    'As the eyes continue to abnormally elongate, this retina stretches over a greater length. If your eyes are growing too long, this means the light in which your eyes need to see distant objects clearly, is bending.',
                    "This creates short sightedness because the eye's length and lack of light will make any view in the distance blurry."
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-large.png',
                    width: 675,
                    height: 426
                }}
            />

            <SideImageSection
                h3LightHeading="Myopia"
                h3BoldHeading="Lifestyle"
                descriptions={[
                    "Bringing your child's indoor lifestyle into the outdoor environment. The more we continue our lifestyle inside without natural light, we risk progressing our myopia.",
                    "Your child's lifestyle plays a very important role in their everyday eyesight and for their future sight.",
                    "To prevent and mitigate the risk of myopia, we encourage a change in lifestyle by bringing your child's everyday activities outdoors.",
                    'Our Myopia specialist, Dr. Bolger will provide you and your child with material to recommend these lifestyle adjustments when visiting our Myopia control clinic.'
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-lifestyle.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-lifestyle-large.png',
                    width: 664,
                    height: 428
                }}
                positionReversed
            />

            <SideImageSection
                h3LightHeading="Myopia"
                h3BoldHeading="Research"
                descriptions={[
                    'Our Myopia specialist, Mr. Bolger has been treating children and adults with myopia (nearsightedness) and hyperopia (farsightedness) for the past ten years.',
                    'During these years, he has noticed a rapid progression of myopia in young children, aged as little as 3 years old.',
                    "His research has identified that natural daylight is essential for our eyes to develop naturally, without the eye needing to compensate its natural and normal shape. The longer the axial length of a child's eye, the more difficult their vision becomes.",
                    "The purpose of monitoring and preventing the growth of your child's axial length is to make sure their vision in the future is saved and they will not experience blindness."
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-research.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-research-large.png',
                    width: 630,
                    height: 370
                }}
            />

            <OnScreenSliderSection />

            <SideImageSection
                containerClassName="md:!grid-cols-[auto_1fr]"
                h3LightHeading="Myopia"
                h3BoldHeading="Treatments"
                descriptions={[
                    "Lifestyle changes, atropine eye drops and careful, continuous monitoring of your child's myopia are all effective in treating your child's myopic condition.",
                    "Our 0.01% and 0.05% atropine eye drops can be prescribed by our myopia specialist to prevent your child's eye from elongating and remissen the symptoms of worsening vision.",
                    'However, our atropine treatments are most effective when lifestyle changes are made by changing our day-to-day indoor activities into the natural daylight.',
                    <strong>
                        “It is not a question of finding a ‘cure’ for myopia, it is a question of allowing our future
                        children to live in an environment that is close to nature, natural light. This allows your
                        child's eyes to naturally develop and stop the condition of myopia in the first place. Leave the
                        eye alone and it will be perfect. This concept is not only true for myopia but for many of the
                        climate crises we are currently facing.”
                    </strong>
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-treatments.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-treatments-large.png',
                    width: 702,
                    height: 411
                }}
            />

            <div className="bg-brandLight pb-12 md:pb-24">
                <SideImageSection
                    containerClassName="md:!grid-cols-[auto_1fr] pt-12 md:pt-24"
                    normalLightHeading={<strong>Mitigating your child's myopia</strong>}
                    descriptions={[
                        'Our Myopia mitigation and control clinic is a program of treatment that reduces the rate of growth of the eye and stops it getting too long.',
                        "By 2050 the World Health Organization predicts that 50% of our world's population will be suffering from Myopia.",
                        'We are here to create a positive impact and help reduce this predicted number by providing accessible Atropine treatment and expert medical advice for your child.'
                    ]}
                    sectionImage={{
                        url: '/images/section-images/mitigating-myopia.png',
                        width: 390,
                        height: 390
                    }}
                    sectionImageDesktop={{
                        url: '/images/section-images/mitigating-myopia-large.png',
                        width: 628,
                        height: 343
                    }}
                    positionReversed
                />

                <ImageGallery
                    sectionClassName="lg:!mt-36"
                    galleryList={galleryListMyopia}
                    dynamicHeading={
                        <Container className="mb-12 grid !max-w-[106.2rem] gap-12 md:mb-24">
                            <H3Variant3 className="!uppercase">Changing our indoor lifestyles</H3Variant3>
                            <Image
                                src="/images/icons/icon-pin-dark-horizontal-extra-large.svg"
                                alt=""
                                width={318}
                                height={2}
                            />
                        </Container>
                    }
                />
            </div>

            <SideImageSection
                containerClassName="md:!grid-cols-1 md:!gap-12"
                h3LightHeading={
                    <>
                        Treatment options
                        <br />
                    </>
                }
                h3BoldHeading="for Myopia Control"
                descriptions={[
                    <strong className="text-[2rem] leading-[2.8rem]">
                        Myopia treatment we can provide with regular management
                    </strong>
                ]}
                customColumn={<MyopiaControl />}
            />

            <SideImageSection
                h2Heading="Other Treatments options "
                h3LightHeading={
                    <>
                        Other treatments your
                        <br />
                    </>
                }
                h3BoldHeading="opticians can help with"
                descriptions={[
                    <>
                        <BulletList
                            className="!ml-0"
                            listClassName="!gap-8"
                            list={[
                                <div className="grid gap-6">
                                    <strong className="text-[2rem] leading-[2.8rem]">Miyosmart glasses</strong>
                                    <p>
                                        Miyosmart glasses monitor and reduce the growth of your child’s eye. MiyoSmart
                                        glasses provide clear vision simultaneously at all viewing distances.
                                    </p>
                                </div>,
                                <div className="grid gap-6">
                                    <strong className="text-[2rem] leading-[2.8rem]">Ortho-k contact lenses</strong>
                                    <p>
                                        Ortho-k contact lenses gently reshape the cornea of your child's eyes while they
                                        sleep. Astigmatism can also be corrected by using Ortho-K and can slow the
                                        progression of myopia.
                                    </p>
                                </div>
                            ]}
                            bulletPoint={
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.7rem]" />
                            }
                        />
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-other-treatments.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-other-treatments-large.png',
                    width: 637,
                    height: 401
                }}
            />

            <SideImageSection
                positionReversed
                normalLightHeading="Have you noticed that your child has an existing or emerging eye condition?"
                descriptions={[
                    'It’s worrying, because you know that good vision is essential for them to not fall behind, both developmentally and socially.',
                    <strong>
                        So, you’re looking for a child-friendly and affordable eye doctor who can help give your child
                        the best opportunity to live a visually able life.
                    </strong>
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-emerging-eye-condition.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-emerging-eye-condition-large.png',
                    width: 688,
                    height: 521
                }}
            />

            <CtaSection2
                h3LightHeading={
                    <>
                        Book a consultation to see how <br />
                    </>
                }
                h3BoldHeading="we can help your child"
                descriptions={[
                    'We offer a comprehensive consultation with a Myopia specialist who will examine your child’s eyes and  present the best treatment options.'
                ]}
                image={{
                    url: '/images/section-images/myopia-cta.png',
                    width: 431,
                    height: 360
                }}
                imageLarge={{
                    url: '/images/section-images/myopia-cta-large.png',
                    width: 636,
                    height: 554
                }}
            />

            <StackedSection2
                h3LightHeading={
                    <>
                        What do children
                        <br />
                    </>
                }
                h3BoldHeading="with Myopia experience?"
            />

            <FullWidthImageSection
                boldHeading={<div className="md:max-w-[54.4rem]">Booking your child’s Myopia consultation</div>}
                description={[
                    "If you think your child is ready for Myopia treatment, we can help. With our Atropine eye drops we can slow down the progression of your Myopia and manage your Atropine treatment to check the effectiveness and benefits for your child's future vision.",
                    <span className="block max-w-[40.8rem] font-mulishLight text-[2rem] leading-[2.8rem]">
                        Do you want a friendly information pack for your child to understand Myopia?
                    </span>,
                    <span className="mx-auto block max-w-[34.5rem] text-center font-mulishBold text-[2rem] leading-[2.8rem] md:mt-12">
                        Download our Children friendly Myopia pack.
                    </span>,
                    <div className="mt-12 grid md:mt-12">
                        <Button
                            type="anchor"
                            link="/pdf/myopia.pdf"
                            text="Download"
                            // @ts-ignore
                            download="download"
                            // @ts-ignore
                            target="_blank"
                            iconPosition="left"
                            icon={
                                <Image
                                    src="/images/icons/icon-cloud-download-outline.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                            }
                            className="justify-self-center"
                        />
                    </div>
                ]}
                image="/images/section-images/myopia-consultation.png"
                desktopImage="/images/section-images/myopia-consultation-large.png"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                positionReversed
                h3LightHeading={
                    <>
                        Are you above the age of 21
                        <br />
                    </>
                }
                h3BoldHeading="and experiencing Myopia?"
                descriptions={[
                    'Fortunately, there are many amazing ways we can correct short sightedness in adults.',
                    'Glasses can be a low cost solution. Contact lenses, although not always ideal, can be a practical one. But there are even more effective ways to correct vision now.',
                    'At My-iClinic, our specialists are experts in three types of procedures that can cure your short sight, with or without astigmatism:'
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-experiencing.png',
                    width: 371,
                    height: 234
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-experiencing-large.png',
                    width: 641,
                    height: 534
                }}
                textColumnExtras={
                    <BulletList
                        className="md:!ml-16"
                        listClassName="!gap-8"
                        listItemClassName="text-blue text-[2rem] leading-[2.8rem]"
                        bold
                        list={[
                            <Link href="/laser-eye-surgery/lasek-prk" className="">
                                <strong className="text-[2rem] leading-[2.8rem] text-blue">Laser eye surgery</strong>
                                <p className="text-blue">(ReLEX SMILE, LASIK, LASEK & PRK)</p>
                            </Link>,
                            'Refractive lens exchange',
                            <Link href="/icl" className="font-mulishBold text-[2rem] leading-[2.8rem] text-blue">
                                Implantable Contact Lenses
                            </Link>
                        ]}
                        bulletPoint={
                            <Image src={IconAngleBlue} alt="" className="h-[1.5rem] w-[1.3rem] translate-y-[0.8rem]" />
                        }
                    />
                }
            />

            <CtaSection2
                sectionClass="bg-brandLight py-12 md:py-16"
                title="If you are an adult suffering from short sightedness"
                image={{
                    url: '/images/section-images/myopia-cta-2-large.png',
                    width: 431,
                    height: 360
                }}
                imageLarge={{
                    url: '/images/section-images/myopia-cta-2-large.png',
                    width: 692,
                    height: 413
                }}
                textColumnExtras={
                    <div className="mt-12 grid gap-6 md:mt-16">
                        <span className="font-mulishBold text-[2rem] uppercase leading-[2.8rem] md:text-[2.8rem] md:leading-[3.2rem]">
                            we can offer you a
                        </span>
                        <span className="max-w-[40.8rem] font-mulishBold text-[1.8rem] leading-[2.8rem] md:text-[2rem] md:leading-[2.8rem]">
                            FREE suitability check for our vision correction treatments.
                        </span>
                        <BookConsultation buttonClassName="!normal-case">
                            <Button
                                type="button"
                                text="Book your FREE suitability check"
                                iconPosition="left"
                                icon={
                                    <Image
                                        src="/images/icons/icon-calendar-outline-darker.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        quality={2}
                                        className="h-8 w-8"
                                    />
                                }
                                className="justify-self-center"
                            />
                        </BookConsultation>
                        <span className="mt-10 max-w-[38.6rem] font-mulishMedium text-[1.8rem] leading-[2.8rem] md:text-[2rem] md:leading-[3.2rem]">
                            Enjoy life at all distances again, free from visual aids.
                        </span>
                    </div>
                }
            />

            <SideImageSection
                normalLightHeading={
                    <div className="flex items-center justify-start gap-12">
                        <strong>Plano 2025</strong>
                        <Image
                            src="/images/section-images/plano-2025-animation.gif"
                            alt="Plano 2025"
                            width={78}
                            height={76}
                            quality={100}
                        />
                    </div>
                }
                midExtras={
                    <H3Variant3 className="max-w-[47.8rem]">
                        By 2050, 4.9 billion people will be myopic, most of whom have not yet been born.
                    </H3Variant3>
                }
                descriptions={[
                    'When they arrive in this world their eyes will contain the perfect algorithm for eye growth that evolved for millions of generations and has produced emmetropia (crisp clear vision).',
                    'But as soon as they arrive in the modern urbanized world this algorithm is corrupted by unnatural environmental inputs which causes the eye to continue to elongate, resulting in Myopia.',
                    'Plano 2025 is an organization whose aim is that no child born after 2025 should become myopic. If we are diagnosing 10-year-olds with myopia in 2035 we have failed.',
                    'And it is not a question of finding a “cure” for myopia, it is a question of allowing our future children to live in an environment that is close to nature.',
                    'This will allow natural eye development and stop the development of myopia in the first place.',
                    'Leave the eye alone and it will be perfect. This concept is not only true for myopia but for many of the crises that the human race is currently facing.'
                ]}
                sectionImage={{
                    url: '/images/section-images/myopia-plano-2025.png',
                    width: 416,
                    height: 305
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/myopia-plano-2025-large.png',
                    width: 694,
                    height: 526
                }}
                imageYPosition="bottom"
            />

            <CoverFlowSliderSection />

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
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={myopiaFaqList}
                    titleLight="Myopia Frequently"
                    titleBold="Asked Questions"
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
        const data: WpPageResponseInterface<any> = await getPageData();

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
