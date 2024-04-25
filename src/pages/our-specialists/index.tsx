import { BreadCrumb } from '@/components/Breadcrumb';
import { ConsultantCard } from '@/components/Card';
import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import Page from '@/components/Page';
import { SideImageSection } from '@/components/page-sections';
import { getPageData, getSpecialistsPost } from '@/lib';
import { OurSpecialistPageContent, PageDataInterface, WpPageResponseInterface } from '@/types';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import { formatImage } from '@/utils/apiHelpers';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';

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
    return (
        <Page
            title="Our specialists"
            description="Our commitment to the highest possible care standards are reflected in the dedicated practice from our care specialists."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[57rem]"
                subTitleClass="max-w-[50rem]"
                smallImageClass="row-start-1 mt-0"
                suitabilityButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6 md:mt-12">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border-transparent bg-transparent text-white hover:text-[#007EF5]"
                            iconPosition="left"
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
                                        className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data.section1?.heading || 'Qualified and experienced consultants'}
                // h3BoldHeading=""
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(37.5rem,_1fr))] md:gap-y-24">
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
                        ...data?.acf?.masthead,
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
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
