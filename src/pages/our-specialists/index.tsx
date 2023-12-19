import { BreadCrumb } from '@/components/Breadcrumb';
import { ConsultantCard } from '@/components/Card';
import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import Page from '@/components/Page';
import { Masthead, SideImageSection } from '@/components/page-sections';
import { getPageData, getSpecialistsPost } from '@/lib';
import MastheadImageMedium from '@/masthead/masthead-home.png';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import { OurSpecialistPageContent, PageDataInterface, WpPageResponseInterface } from '@/types';

interface DataInterface extends OurSpecialistPageContent, PageDataInterface<OurSpecialistPageContent> {}

interface OurSpecialistsProps {
    seo: any;
    yoastJson: any;
    specialists: ConsultantCardInterface[];
    data: DataInterface;
}

/**
 * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function OurSpecialists({ seo, yoastJson, specialists, data }: OurSpecialistsProps): JSX.Element {
    const heading = data?.masthead?.heading || 'Our Consultants';
    const subheading = data?.masthead?.subheading || "North London's Eye Hospital";

    return (
        <Page
            title="Our specialists"
            description="Our commitment to the highest possible care standards are reflected in the dedicated practice from our care specialists."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                // imageSmall={MastheadImageSmall}
                imageMedium={data.masthead?.image?.src || MastheadImageMedium}
                // imageLarge={MastheadImageLarge}
                altText=""
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                bannerExtraComponents={<ChatWithUs />}
            />

            <SideImageSection
                h3LightHeading={data.section1?.heading || 'Qualified and experienced consultants'}
                // h3BoldHeading=""
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-12 sm:grid-cols-[repeat(auto-fit,_minmax(37.5rem,_1fr))] md:gap-y-24">
                        {specialists?.map((item, index) => (
                            <ConsultantCard key={index} {...item} />
                        ))}
                    </div>
                }
            />
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
        const data: WpPageResponseInterface<OurSpecialistPageContent> = await getPageData({ slug: 'our-specialists' });
        const specialists: ConsultantCardInterface[] = await getSpecialistsPost();

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                specialists,
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf.masthead,
                        image: {
                            ...(data?.acf?.masthead?.image && {
                                src: data.acf.masthead?.image.url,
                                width: data.acf.masthead?.image.width,
                                height: data.acf.masthead?.image.height
                            })
                        }
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
