import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletList,
    CtaSection2,
    FullWidthImageSection,
    Masthead,
    SideImageSection,
    StackColumn2
} from '@/components/page-sections';
import { dryEyeFaqList } from '@/components/page-sections/Faq/faqList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconAngle from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-dry-eyes-large.png';
import MastheadImageMedium from '@/masthead/masthead-dry-eyes-medium.png';
import MastheadImageSmall from '@/masthead/masthead-dry-eyes-small.png';
import { lazyEyesList } from '@/page-sections/SectionParts/stack-column/list';
import { WpPageResponseInterface } from '@/types';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import H2Variant1 from 'src/components/Headings/H2Variant1';

const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface DryEyesProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /eye-treatments/macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DryEyes({ seo, yoastJson }: DryEyesProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Dry Eyes';
    const subheading = 'Monitor your dry eye symptoms with our private ophthalmologist';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Dry Eye Treatment Specialists In London"
            description="Our clinic provides an all-inclusive private consultation for investigating and treating symptoms of dry eyes. Get in touch with us to learn more!."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
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
            />

            <Container className="mt-28">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                h3Title="Dry eye syndrome symptoms and vision testing"
                description={[
                    <H2Variant1 className="normal-case xl:whitespace-nowrap">
                        Private consultation for dry eyes
                    </H2Variant1>,
                    'Our specialists understand that dry syndrome can cause everyday discomfort. If you are concerned about dry eyes, we can provide you with an all-inclusive private consultation to investigate and offer a treatment solution.',
                    'Once we’ve identified the underlying cause of your dry eyes, our ophthalmologist will find you the best suitable treatment.'
                ]}
                image="/images/section-images/placeholder-image.png"
                desktopImage="/images/section-images/placeholder-image.png"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading="Dry eye consultation"
                h3LightHeading={
                    <>
                        What is included in my
                        <br />
                    </>
                }
                h3BoldHeading="private consultation?"
                descriptions={[
                    <>
                        A private consultation with our ophthalmologist is an all-inclusive{' '}
                        <strong>cost of £200</strong>
                    </>,
                    'This includes:'
                ]}
                sectionImage={{
                    url: '/images/section-images/placeholder-image.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/placeholder-image.png',
                    width: 631,
                    height: 582
                }}
                positionReversed={true}
                altText=""
                textColumnExtras={
                    <div className="grid gap-6 ml-12">
                        <BulletList
                            className="!ml-0"
                            list={[
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition with treatment planning.',
                                'A referral for surgical treatment and/or a signed prescription (if required).',
                                'A dedicated eye care team to support you throughout your eye care journey.'
                            ]}
                            bulletPoint={
                                <Image src={IconAngle} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />
                    </div>
                }
            />

            <SideImageSection
                h2Heading="eye syndrome"
                h3LightHeading={
                    <>
                        Managing your
                        <br />
                    </>
                }
                h3BoldHeading="dry eye syndrome"
                descriptions={[
                    <strong>
                        Our consultants will help you manage your dry eye syndrome for a clearer, brighter quality of
                        life.
                    </strong>
                ]}
                sectionImage={{
                    url: '/images/section-images/macular-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/macular-treatment-large.png',
                    width: 658,
                    height: 459
                }}
                customColumn={<StackColumn2 list={lazyEyesList} />}
            />

            <CtaSection2
                title="Friendly vision correction treatment for dry eyes"
                descriptions={[
                    'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
                    'Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we can offer you a FREE suitability check for our implantable contact lenses.'
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
                    faqs={dryEyeFaqList}
                    titleLight="Dry Eye Frequently"
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
                seo: data.yoast_head,
                yoastJson: data.yoast_head_json
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
