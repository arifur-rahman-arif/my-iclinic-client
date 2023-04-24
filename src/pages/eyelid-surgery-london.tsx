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
import { CtaSection, ImageGallery, Masthead } from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListCosmeticEyelid, leftRightListEyelid } from '@/page-sections/LeftRight/leftRightList';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';

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

interface EyeLidPageProps {
    seo: any;
    yoastJson: any;
    data: any;
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
    const heading = 'Eyelid surgery London';
    const subheading = 'Medical and cosmetic Eyelid surgery for Cysts, Chalazion, Styes, blepharoplasty, and more.';

    // useEffect(() => {
    //     if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);
    //
    //     setTimeout(() => {
    //         if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
    //     }, 2500);
    // }, [deviceSize]);

    return (
        <Page
            title="Specialist Eyelid Surgery in London"
            description="Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText="From £200"
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            {/* <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent> */}
            <CallbackSection />

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <Section>
                <Container>
                    <h2 className="mx-auto text-center md:max-w-[79.8rem]">
                        Our UK’s top oculoplastic surgeons treat and correct your eyelid conditions with our easy and
                        stress-free treatment options.
                    </h2>
                </Container>
            </Section>

            <LeftRightSection
                childrenList={leftRightListEyelid}
                positionReversed
                sectionClassName="bg-brandLight py-12 md:py-24 !gap-24 md:!gap-40"
                sectionId="eyelid-surgery-list"
            />

            <ImageGallery galleryList={galleryListEyelid} />

            <LeftRightSection
                childrenList={leftRightListCosmeticEyelid}
                positionReversed
                sectionClassName="bg-[#F1CFE580] py-12 md:py-24 !gap-24 md:!gap-40"
            />

            <CtaSection />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
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
