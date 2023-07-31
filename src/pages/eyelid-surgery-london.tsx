import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-eyelid-large.png';
import MastheadImageMedium from '@/masthead/masthead-eyelid-medium.png';
import MastheadImageSmall from '@/masthead/masthead-eyelid-small.png';
import { eyelidFaqList } from '@/page-sections/Faq/faqList';
import { galleryListEyelid } from '@/page-sections/ImageGallery';
import { BulletList, CtaSection, ImageGallery, Masthead, TextColumn } from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListCosmeticEyelid, leftRightListEyelid } from '@/page-sections/LeftRight/leftRightList';
import { EyelidContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { H3Variant3 } from '@/components/Headings';
import { ReactElement, JSXElementConstructor, ReactFragment } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
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

interface DataInterface extends EyelidContentInterface, PageDataInterface<EyelidContentInterface> {}

interface EyeLidPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Home page component for the App
 *
 * * Url: /eyelid-surgery-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function EyeLidPage({ seo, yoastJson, data }: EyeLidPageProps): JSX.Element {
    // const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    // const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading ||'Eyelid surgery London';
    const subheading = data?.masthead_subheading ||'Medical and cosmetic Eyelid surgery for Cysts, Chalazion, Styes, blepharoplasty, and more.';

    // useEffect(() => {
    //     if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);
    //
    //     setTimeout(() => {
    //         if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
    //     }, 2500);
    // }, [deviceSize]);

    // LEFT RIGHT SECTIONconst
    const leftRightsectiondata = data?.leftRightsection ?
        data.leftRightsection.map(
            (
                item: {
        mobileImage: any;
        desktopImage: any;
        section_title: any;
        section_bold_title: any;
        main_title: any;
        main_small_text: string | number | boolean |
        any[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;
        descriptions: string[];
        bullet_list: string[]; // Add bullet_list property here if it is expected in the item object
      },
                index: any
            ) => {
                return {
                    ...item,
                    mobileImage: (
          <Image
            src={item?.mobileImage || '/images/section-images/cataract-consultation.png'}
            width={390}
            height={390}
            quality={70}
            className="rounded-primary md:hidden"
            alt=""
          />
                    ),
                    desktopImage: (
          <Image
            src={item?.desktopImage || '/images/section-images/cataract-consultation-large.png'}
            width={695}
            height={580}
            quality={70}
            className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
            alt=""
          />
                    ),
                    alternativeHeading: index === 0 ? (
          <TextColumn
            h3LightHeading={item?.section_title || 'Medical'}
            h3BoldHeading={item?.section_bold_title || 'Eyelid Surgery'}
          />
                    ) : (
          <></>
                    ),
                    descriptionClassName: 'md:ml-9 md:mt-6',
                    descriptions: [
          <>
            <H3Variant3>
              {item?.main_title || 'Eyelid malposition'}{' '}
              <span className="text-[1.8rem] leading-[2.8rem]">
                {item?.main_small_text}
              </span>
            </H3Variant3>
          </>,
          // Check if item.description exists before parsing HTML
          item?.descriptions?.length ? (
              stringArrayToElementArray(item?.descriptions)
          ) : (
            <>
              <strong>Entropion treatment (Correction of the inward eyelid)</strong>
              <p>
                We offer Entropion surgery to correct the upper or lower eyelids turning inwards into the eye.
                Entropion can cause your eyelashes to rub against your eye's surface, including sensitivity to light,
                watery eyes, and discharge.
              </p>
              <p>Our oculoplastic surgeon will correct the eyelid malposition, preventing irritation and future vision
                 loss.</p>
              <p>If you have been diagnosed with Entropion, we can book you a private
                consultation to see our oculoplastic specialist.</p>
              <p>This consultation is an all-inclusive assessment to understand the
                 condition of your eyes, and your specialist will be your surgeon on your day of treatment.</p>
              <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our Entropion treatment today
              </strong>
            </>
          ),
          <>
            <BulletList
              className="!ml-0 mt-6"
              bulletPoint={
                <Image
                  src="/images/icons/icon-arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[1.4rem] w-[1.4rem] translate-y-3"
                />
              }
              list={
                item?.bullet_list?.length ?
                    stringArrayToElementArray(item?.bullet_list) :
                    stringArrayToElementArray( [
                      `<strong className="text-[1.8rem] leading-[2.8rem]">
                        Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                      </strong>`,
                      `<strong className="text-[1.8rem] leading-[2.8rem]">
                        Chalazion Removal Treatment Cost From <strong className="text-[2rem]">£350 per eye</strong>
                      </strong>`
                    ] )
              }
            />
          </>
                    ]
                };
            }
        ) :
        null;

    // LEFT RIGHT SECTION

    // LEFT RIGHT SECTIONconst 2
    const leftRightsection2data = data?.leftRightsection2 ?
        data.leftRightsection2.map(
            (
                item: {
        mobileImage: any;
        desktopImage: any;
        headline: any;
        section_title: any;
        section_bold_title: any;
        main_title: any;
        main_small_text: string | number | boolean |
        any[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;
        descriptions: string[];
        bullet_list: string[]; // Add bullet_list property here if it is expected in the item object
      },
                index: any
            ) => {
                return {
                    ...item,
                    mobileImage: (
          <Image
            src={item?.mobileImage || '/images/section-images/cosmetic-eyelid-surgery-large.png'}
            width={390}
            height={390}
            quality={70}
            className="rounded-primary md:hidden"
            alt=""
          />
                    ),
                    desktopImage: (
          <Image
            src={item?.desktopImage || '/images/section-images/cosmetic-eyelid-surgery-large.png'}
            width={695}
            height={580}
            quality={70}
            className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
            alt=""
          />
                    ),
                    alternativeHeading: index === 0 ? (
          <TextColumn
            h3LightHeading={item?.section_title || 'Medical'}
            h3BoldHeading={item?.section_bold_title || 'Eyelid Surgery'}
          />
                    ) : (
          <></>
                    ),
                    descriptionClassName: 'md:ml-9 md:mt-6',
                    descriptions: [
          <>
            <H3Variant3>
                {item?.headline}
            {item?.main_title?.length ?
           <> <br/><strong>{item?.main_title}</strong></> : null }
           <span>{item?.main_small_text}</span>
             </H3Variant3>
          </>,
          // Check if item.description exists before parsing HTML
          item?.descriptions?.length ? (
              stringArrayToElementArray(item?.descriptions)
          ) : (
            <>
              <strong>Entropion treatment (Correction of the inward eyelid)</strong>
              <p>
                We offer Entropion surgery to correct the upper or lower eyelids turning inwards into the eye.
                Entropion can cause your eyelashes to rub against your eye's surface, including sensitivity to light,
                watery eyes, and discharge.
              </p>
              <p>Our oculoplastic surgeon will correct the eyelid malposition, preventing irritation and future vision
                 loss.</p>
              <p>If you have been diagnosed with Entropion, we can book you a private
                consultation to see our oculoplastic specialist.</p>
              <p>This consultation is an all-inclusive assessment to understand the
                 condition of your eyes, and your specialist will be your surgeon on your day of treatment.</p>
              <strong className="text-[1.8rem] leading-[2.8rem]">
                Find out more about our Entropion treatment today
              </strong>
            </>
          ),
          <>
            <BulletList
              className="!ml-0 mt-6"
              bulletPoint={
                <Image
                  src="/images/icons/icon-arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[1.4rem] w-[1.4rem] translate-y-3"
                />
              }
              list={
                item?.bullet_list?.length ?
                    stringArrayToElementArray(item?.bullet_list) :
                    stringArrayToElementArray( [
                      `<strong className="text-[1.8rem] leading-[2.8rem]">
                        Private Consultation Cost <strong className="text-[2rem]">£200</strong>
                      </strong>`,
                      `<strong className="text-[1.8rem] leading-[2.8rem]">
                        Chalazion Removal Treatment Cost From <strong className="text-[2rem]">£350 per eye</strong>
                      </strong>`
                    ] )
              }
            />
          </>
                    ]
                };
            }
        ) :
        null;

    //  reviewSliderdata
    const reviewSliderdata: any = Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0 ?
        data.reviewSlider.map((service) => {
            return {
                ...service,
                title: service?.title,
                name: service?.name,
                description: service?.description
            };
        }) :
        null;

    return (
        <Page
            title="Specialist Eyelid Surgery in London"
            description="Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url ||MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url ||MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url ||MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={ data?.masthead_price || 'From £200'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <Section>
                <Container>
                    <h2 className="mx-auto text-center md:max-w-[79.8rem]">
                        { data?.section_1?.heading ||`Our UK’s top oculoplastic surgeons treat and correct your eyelid conditions with our easy and
                        stress-free treatment options.`}
                    </h2>
                </Container>
            </Section>

            <LeftRightSection
                childrenList={ leftRightsectiondata || leftRightListEyelid}
                positionReversed
                sectionClassName="bg-brandLight py-12 md:py-24 !gap-24 md:!gap-40"
                sectionId="eyelid-surgery-list"
            />

            <ImageGallery galleryList={galleryListEyelid} />

            <LeftRightSection
                childrenList={ leftRightsection2data || leftRightListCosmeticEyelid}
                positionReversed
                sectionClassName="bg-[#F1CFE580] py-12 md:py-24 !gap-24 md:!gap-40"
            />

            <CtaSection title={data?.sectionspeakteam?.title}
            subtitle={data?.sectionspeakteam?.sub_heading} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata} />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || eyelidFaqList}
                    titleLight="Eyelid surgery"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'eyelid-surgery-london' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                    }, // 2
                    
                    leftRightsection:Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  bullet_list: convertArrayOfObjectsToStrings(ListData?.bullet_list),
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                        leftRightsection2:Array.isArray(data?.acf?.leftRightsection2)
                        ? data?.acf.leftRightsection2.map((ListData) => {
                              return {
                                  ...ListData,
                                  bullet_list: convertArrayOfObjectsToStrings(ListData?.bullet_list),
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    reviewSlider:Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData,
                              };
                          })
                        : [],
                       sectionspeakteam: {
                            ...data?.acf?.sectionspeakteam
                        },
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
