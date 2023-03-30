import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { ConsultantCard } from '@/components/Card';
import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import Page from '@/components/Page';
import { Masthead, SideImageSection } from '@/components/page-sections';
import { getPageData, getSpecialistsPost } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-home-large.png';
import MastheadImageSmall from '@/masthead/masthead-home-small.png';
import MastheadImageMedium from '@/masthead/masthead-home.png';
import { WpPageResponseInterface } from '@/types';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

interface OurSpecialistsProps {
    seo: any;
    yoastJson: any;
    specialists: ConsultantCardInterface[];
}

/**
 * Url: /our-specialists
 *
 * @export
 * @returns {JSX.Element}
 */
export default function OurSpecialists({ seo, yoastJson, specialists }: OurSpecialistsProps): JSX.Element {
    const heading = 'Our Consultants';
    const subheading = "North London's Eye Hospital";

    return (
        <Page
            title="Our specialists"
            description="Our commitment to the highest possible care standards are reflected in the dedicated practice from our care specialists."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0 " key={index}>
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
                bannerExtraComponents={
                    <>
                        <Button
                            type="button"
                            text="Chat with us"
                            iconPosition="left"
                            className="justify-self-start normal-case"
                            icon={
                                <Image
                                    src="/images/icons/icon-chat.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                            onClick={openFreshdeskChat}
                        />
                    </>
                }
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        Qualified and experienced
                        <br />
                    </>
                }
                h3BoldHeading="Consultants"
                containerClassName="md:!grid-cols-1 md:!gap-12"
                customColumn={
                    <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-12 sm:grid-cols-[repeat(auto-fit,_minmax(37.5rem,_1fr))] md:gap-y-24">
                        {specialists.map((item, index) => (
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'our-specialists' });
        const specialists: ConsultantCardInterface[] = await getSpecialistsPost();

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                specialists
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
