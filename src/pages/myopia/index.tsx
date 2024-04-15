import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import H3Variant3 from '@/components/Headings/H3Variant3';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import IconAngleBlue from '@/icons/icon-angle-right-blue.svg';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getLatestPosts, getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-myopia-large.png';
import MastheadImageMedium from '@/masthead/masthead-myopia-medium.png';
import MastheadImageSmall from '@/masthead/masthead-myopia-small.png';
import { myopiaFaqList } from '@/page-sections/Faq/faqList';
import { galleryListMyopia } from '@/page-sections/ImageGallery';
import {
    CoverFlowSliderSection,
    CtaSection2,
    FullWidthImageSection,
    ImageGallery,
    Masthead,
    MyopiaControl,
    OnScreenSliderSection,
    SideImageSection
} from '@/page-sections/index';
import BulletList from '@/page-sections/SectionParts/BulletList';
import { StackedSection2 } from '@/page-sections/StackedSection';
import { MyopiaPageContentProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'src/components/Buttons';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const ClientButton = dynamic(() => import('src/components/Buttons/Button'), { ssr: false });

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
    const heading = data?.masthead_heading || 'Myopia Mitigation Clinic for Children London';
    const subheading =
        data?.masthead_subheading ||
        'Manage your child’s short sightedness with our Myopia treatment & management clinic';

    return (
        <Page
            title="Myopia Treatment In London"
            description="Our specialists can provide you with the appropriate treatment for mitigating your Myopia, no matter how severe. Find out more about our services here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || <></>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                bannerWidth="max-w-[73rem]"
            />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What is'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'Myopia?'}
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
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Myopia'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'Lifestyle?'}
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
            />

            <SideImageSection
                sectionId="research"
                h3LightHeading={data?.section_3?.heading?.light_heading || 'Myopia'}
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'Research?'}
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
                altText={data?.section_3?.large_image?.alt}
            />

            <OnScreenSliderSection sliderList={blogPosts} />

            <SideImageSection
                containerClassName="md:!grid-cols-[auto_1fr]"
                h3LightHeading={data?.section_4?.heading?.light_heading || 'Myopia'}
                h3BoldHeading={data?.section_4?.heading?.bold_heading || 'Treatments?'}
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
            />

            <div className="bg-brandLight pb-12 md:pb-24">
                <SideImageSection
                    containerClassName="md:!grid-cols-[auto_1fr] pt-12 md:pt-24"
                    normalLightHeading={<strong>{data?.section_5?.heading || "Mitigating your child's myopia"}</strong>}
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
                />

                <ImageGallery
                    sectionClassName="lg:!mt-36"
                    galleryList={data?.section_6 || galleryListMyopia}
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
                        {data?.section_7?.heading?.light_heading || 'Treatment options'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_7?.heading?.bold_heading || 'for Myopia Control'}
                descriptions={
                    (data?.section_7?.descriptions.length &&
                        stringArrayToElementArray(data?.section_7.descriptions)) || [
                        <strong className="text-[2rem] leading-[2.8rem]">
                            Myopia treatment we can provide with regular management
                        </strong>
                    ]
                }
                // customColumn={<MyopiaControl cardList={data?.section_7?.card_list} />}
                customColumn={<MyopiaControl cardList={data?.section_7?.card_list} />}
            />

            <SideImageSection
                h2Heading={data?.section_8?.subheading || 'Other Treatments options'}
                h3LightHeading={
                    <>
                        {data?.section_8.heading?.light_heading || 'Other treatments your'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_8.heading?.bold_heading || 'opticians can help with'}
                descriptions={[
                    <>
                        <BulletList
                            className="!ml-0"
                            listClassName="!gap-8"
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
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.7rem]" />
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
                    width: 637,
                    height: 401
                }}
                altText={data?.section_8?.large_image?.alt}
            />

            <SideImageSection
                positionReversed
                normalLightHeading={
                    data?.section_9?.heading ||
                    'Have you noticed that your child has an existing or emerging eye condition?'
                }
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
            />

            <CtaSection2
                title={data?.section_10?.heading?.light_heading + ' ' + data?.section_10?.heading?.bold_heading}
                descriptions={
                    (data?.section_10?.descriptions.length &&
                        stringArrayToElementArray(data?.section_10.descriptions)) || [
                        'We offer a comprehensive consultation with a Myopia specialist who will examine your child’s eyes and  present the best treatment options.'
                    ]
                }
                image={{
                    url: data?.section_10?.image?.url || '/images/section-images/myopia-cta.png',
                    width: 431,
                    height: 360
                }}
            />

            <StackedSection2
                h3LightHeading={
                    <>
                        {data?.section_11?.heading?.light_heading || 'What do children'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_11?.heading?.bold_heading || 'with Myopia experience?'}
                stackList={data?.section_11?.stack_list as unknown as any}
            />

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        {HTMLReactParser(data?.section_12?.heading || 'Booking your child’s Myopia consultation')}{' '}
                    </div>
                }
                description={
                    (data?.section_12.descriptions?.length && [
                        ...stringArrayToElementArray(data?.section_12.descriptions),
                        <div className="mt-12 grid md:mt-12">
                            <ClientButton
                                type="anchor"
                                link="/pdf/myopia.pdf"
                                text="Download"
                                // @ts-ignore
                                download={true}
                                // @ts-ignore
                                iconPosition="left"
                                icon={
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_2401_5839)">
                                            <path
                                                d="M8.10181 17L12.1018 21L16.1018 17"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                            <path
                                                d="M12.1018 12V21"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                            <path
                                                d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2401_5839">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                    transform="translate(0.101807)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                                className="group/download justify-self-center"
                            />
                        </div>
                    ]) || [
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
                                download={true}
                                // @ts-ignore
                                target="_blank"
                                iconPosition="left"
                                icon={
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_2401_5839)">
                                            <path
                                                d="M8.10181 17L12.1018 21L16.1018 17"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                            <path
                                                d="M12.1018 12V21"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                            <path
                                                d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2401_5839">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                    transform="translate(0.101807)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                                className="group/download justify-self-center"
                            />
                        </div>
                    ]
                }
                image={data?.section_12?.image?.url || '/images/section-images/myopia-consultation.png'}
                desktopImage={
                    data?.section_12?.large_image?.url || '/images/section-images/myopia-consultation-large.png'
                }
                altText={data?.section_12?.large_image?.alt}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                positionReversed
                h3LightHeading={
                    <>
                        {data?.section_13?.heading?.light_heading || 'Are you above the age of 21'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_13?.heading?.bold_heading || 'and experiencing Myopia?'}
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
                        className="md:!ml-16"
                        listClassName="!gap-8"
                        listItemClassName="text-blue text-[2rem] leading-[2.8rem]"
                        bold
                        list={
                            (data?.section_13.list.length && stringArrayToElementArray(data.section_13.list)) || [
                                <Link href="/lasek-prk" className="">
                                    <strong className="text-[2rem] leading-[2.8rem] text-blue">
                                        Laser eye surgery
                                    </strong>
                                    <p className="text-blue">(ReLEX SMILE, LASIK, LASEK & PRK)</p>
                                </Link>,
                                <Link href="/cataract/premium-lenses" className="">
                                    <strong className="text-[2rem] leading-[2.8rem] text-blue">
                                        Refractive lens exchange
                                    </strong>
                                </Link>,
                                <Link href="/icl" className="font-mulishBold text-[2rem] leading-[2.8rem] text-blue">
                                    Implantable Contact Lenses
                                </Link>
                            ]
                        }
                        bulletPoint={
                            <Image src={IconAngleBlue} alt="" className="h-[1.5rem] w-[1.3rem] translate-y-[0.8rem]" />
                        }
                    />
                }
            />

            <CtaSection2
                title={data?.section_14?.heading || 'If you are an adult suffering from short sightedness'}
                image={data?.section_14?.image}
            />

            <SideImageSection
                normalLightHeading={
                    <div className="flex items-center justify-start gap-12">
                        <strong>{data?.section_15?.heading || 'Plano 2025'}</strong>
                        <Image
                            src={data?.section_15?.heading_image || '/images/section-images/plano-2025-animation.gif'}
                            alt="Plano 2025"
                            width={78}
                            height={76}
                            quality={100}
                        />
                    </div>
                }
                midExtras={
                    <H3Variant3 className="max-w-[47.8rem]">
                        {data?.section_15?.subheading ||
                            'By 2050, 4.9 billion people will be myopic, most of whom have not yet been born.'}
                    </H3Variant3>
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
                imageYPosition="bottom"
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
                <NormalSlideSection />
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
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions)
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
                    },
                    section_7: {
                        ...data?.acf.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions),
                        card_list: Array.isArray(data?.acf?.section_7?.card_list)
                            ? data?.acf?.section_7?.card_list?.map((list) => {
                                  return {
                                      ...list,
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_9?.descriptions)
                    },
                    section_10: {
                        ...data?.acf.section_10,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_10?.descriptions),
                        image: {
                            ...(data?.acf?.section_10?.image && formatImage(data.acf?.section_10?.image))
                        }
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_12?.descriptions)
                    },
                    section_13: {
                        ...data?.acf.section_13,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_13?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_13?.list)
                    },
                    section_15: {
                        ...data?.acf.section_15,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_15?.descriptions)
                    },
                    section_16: convertArrayOfObjectsToStrings(data?.acf.section_16)
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
