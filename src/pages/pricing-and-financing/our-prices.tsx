import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { InsurancePartners, Masthead, SideImageSection, TextColumn } from '@/components/page-sections';
import { GlaucomaPackages3 } from '@/components/page-sections/SectionParts/GlaucomaPackages';
import {
    cataractPriceList,
    diagnosisPriceList,
    eyelidSurgeryPriceList,
    glaucomaPriceList,
    keratoconusTreatmentPriceList,
    maculerDegenerationPriceList,
    pricePageList1,
    visionCorrectionPriceList
} from '@/components/page-sections/SectionParts/GlaucomaPackages/GlaucomaPackages3';
import MastheadImageLarge from '@/masthead/masthead-price-large.png';
// Import MastheadImageMedium from '@/masthead/masthead-price-medium.png';
// import MastheadImageSmall from '@/masthead/masthead-price-small.png';
import Image from 'next/image';

interface OurPricesProps {
    seo: any;
    yoastJson: any;
}

/**
 * Our prices pages
 * @export
 * @returns {JSX.Element}
 */
export default function OurPrices({ seo, yoastJson }: OurPricesProps): JSX.Element {
    const heading = 'Our private consultation and treatment prices';
    const subheading = 'Our leading specialists';

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageLarge}
                imageMedium={MastheadImageLarge}
                imageLarge={MastheadImageLarge}
                imagePosition="object-[-14rem_0] !object-cover"
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0 blur-sm" key={index}>
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
                bannerExtraComponents={
                    <>
                        <Button
                            type="button"
                            text="Chat with us"
                            iconPosition="left"
                            className="normal-case justify-self-start"
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
                        />
                    </>
                }
            />

            <div className="mt-24 w-full block h-[0.1rem] md:hidden"></div>

            {/* <UspSection list={homeUspList} /> */}

            <GlaucomaPackages3
                dynamicSectionHead={<></>}
                packageList={pricePageList1}
                itemClassName="!items-stretch"
                cardClassName="md:!place-items-start"
                packageContainerClassName="md:!ml-0"
                titleClassName="sticky top-[14rem]"
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        Funding Your
                        <br />
                    </>
                }
                h3BoldHeading="Treatment"
                descriptions={[
                    <>
                        Interested in funding your vision correction treatment with 24 months finance?{' '}
                        <LinkStyle url="/pricing-and-financing/financing-your-treatment#calculator">
                            Calculate your monthly spend
                        </LinkStyle>{' '}
                        for clear, permanent vision. Budget and save yourself from purchasing glasses and contact lenses
                        in the future.
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/funding-your-treatment.jpg',
                    width: 388,
                    height: 469
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/funding-your-treatment.jpg',
                    width: 659,
                    height: 687
                }}
                largeImageClassName="rounded-primary"
                smallImageClassName="rounded-primary"
                textColumnExtras={
                    <div className="grid place-items-start">
                        <Button
                            type="anchor"
                            link="/pricing-and-financing/financing-your-treatment#calculator"
                            text="Calculate your monthly spend"
                            iconPosition="left"
                            className="!bg-orange !border-orange hover:!bg-transparent !text-heading"
                            icon={
                                <Image
                                    src="/images/icons/icon-calculator-dark.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />
                    </div>
                }
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={cataractPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={visionCorrectionPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={glaucomaPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={maculerDegenerationPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={keratoconusTreatmentPriceList}
                itemClassName="!items-stretch"
            />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={<></>}
                packageList={eyelidSurgeryPriceList}
                itemClassName="!items-stretch"
            />

            <InsurancePartners />

            <GlaucomaPackages3
                packageContainerClassName="md:!ml-0"
                dynamicSectionHead={
                    <div className="px-8 xl:px-0">
                        <TextColumn
                            h3LightHeading="All necessary tests are"
                            h3BoldHeading="included in our consultation prices"
                            descriptions={[
                                <strong>If tests are required without a consultation the prices are as follows:</strong>
                            ]}
                        />
                    </div>
                }
                packageList={diagnosisPriceList}
                itemClassName="!items-stretch"
            />
        </Page>
    );
}
