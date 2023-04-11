import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-flashes-floaters-large.png';
import MastheadImageMedium from '@/masthead/masthead-flashes-floaters-medium.png';
import MastheadImageSmall from '@/masthead/masthead-flashes-floaters-small.png';
import { flashesFaqList } from '@/page-sections/Faq/faqList';
import {
    BulletList,
    CtaSection,
    CtaSection2,
    FullWidthImageSection,
    Masthead,
    SideImageSection
} from '@/page-sections/index';
import { WpPageResponseInterface } from '@/types';
import { stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface FlashesFloatersProps {
    data: any;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /conjuctivitis-treatment-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function FlashesFloaters({ data, seo, yoastJson }: FlashesFloatersProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Eye Flashes & Floaters Symptoms & Treatment';
    const subheading = 'Eye flashes & floaters in children and adults';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Eye Flashes & Floaters Treatment in London"
            description="Get help with understanding and managing the symptoms of eye flashes and floaters with our professional team at My-iClinic."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image.image || MastheadImageSmall}
                imageMedium={data?.masthead_image.image_medium || MastheadImageMedium}
                imageLarge={data?.masthead_image.image_large || MastheadImageLarge}
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

            <Container className="mt-32 sm:mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">
                        {data?.request_callback_title ? (
                            HTMLReactParser(data.request_callback_title)
                        ) : (
                            <>Speak to a specialist</>
                        )}
                    </strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <SideImageSection
                h2Heading="children and adults"
                h3LightHeading={
                    <>
                        Eye flashes & floaters
                        <br />
                    </>
                }
                h3BoldHeading="in children and adults"
                descriptions={[
                    'Flashes & floaters are presented in your vision as:',
                    <BulletList
                        list={['Dark and/or clear spots and lines', 'Small spots of flashing lights']}
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />,
                    'Eye flashes & floaters can be monitored with regular eye checks and the appearance of flashes and floaters in your vision is usually nothing to be concerned about.',
                    'Flashes & floaters indicate that there is a change in the vitreous gel in the back of your eye.',
                    'If you have short-sightedness (myopia), you may experience flashes & floaters earlier in life.',
                    <>
                        For people over the age of 50, eye flashes & floaters may indicate early signs of a retinal tear
                        or detachment. Retinal tears and detachments happen when the retina in the back of the eye
                        becomes loose and may suggest a more serious eye condition such as{' '}
                        <LinkStyle url="/macular-degeneration">macular degeneration.</LinkStyle>
                    </>
                ]}
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/eye-flashes-&-floaters-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/eye-flashes-&-floaters-large.png',
                    width: 644,
                    height: 559
                }}
            />

            <SideImageSection
                h2Heading="Diagnosis, treatment"
                h3LightHeading={
                    <>
                        Diagnosis, treatment &
                        <br />
                    </>
                }
                h3BoldHeading="management for eye flashes & floaters"
                descriptions={[
                    'We offer a private consultation with our ophthalmologist to check the health of your eye and provide a diagnosis of any eye conditions you may have, including floater treatment advice and surgery planning if required.',
                    'Although you may experience eye floaters and flashes of light, it is rare to be given a diagnosis for an eye condition as these floaters are generally nothing to worry about in early adulthood.',
                    'For people over the age of 50, flashes & floaters may indicate early signs of more serious eye conditions. If you are over the age of 50 and experiencing eye flashes & floaters, please contact our support team for a private consultation with our ophthalmologist.'
                ]}
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/eye-flashes-diagnosis-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/eye-flashes-diagnosis-large.png',
                    width: 654,
                    height: 559
                }}
                positionReversed
            />

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <SideImageSection
                h2Heading="consultation"
                h3LightHeading={
                    <>
                        What is included in my
                        <br />
                    </>
                }
                h3BoldHeading="private consultation?"
                descriptions={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3?.descriptions)) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £300</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/placeholder-image.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image || '/images/section-images/placeholder-image.png',
                    width: 649,
                    height: 552
                }}
                textColumnExtras={
                    <BulletList
                        list={[
                            'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                            'A medical diagnosis of your eye condition with treatment planning.',
                            'A referral for surgical treatment and/or a signed prescription (if required).',
                            'A dedicated eye care team to support you throughout your eye care journey.'
                        ]}
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
                positionReversed
            />

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.full_width_image_section?.heading ? (
                            HTMLReactParser(data?.full_width_image_section?.heading)
                        ) : (
                            <>Retinal detachments</>
                        )}
                    </>
                }
                description={[
                    <>
                        <H3Variant3>Retinal detachments signs & treatment </H3Variant3>
                    </>,
                    'Flashes & floaters may indicate signs of retinal detachments:'
                ]}
                textColumnExtraBottomElements={
                    <BulletList
                        className="mt-12"
                        list={[
                            'Dark floaters affecting your vision',
                            'Sudden blurry and/or distorted vision',
                            'Flashes of light in one or both eyes ( known as ‘photopsia’)',
                            'Shadows over your field of vision'
                        ]}
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
                altText=""
                image="/images/section-images/retinal-detachments.png"
                desktopImage="/images/section-images/retinal-detachments.png"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <CtaSection2
                title="Friendly vision correction treatment for dry eyes"
                descriptions={[
                    'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
                    <>
                        Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye
                        syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we
                        can offer you a <strong>FREE suitability</strong> check for our implantable contact lenses.
                    </>
                ]}
                button1Text="Book A FREE suitability"
                excludeSloganText
            />

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || flashesFaqList}
                    titleLight="Conjunctivitis"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'flashes-floaters' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf
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
