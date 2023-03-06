import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { InsurancePartners, Masthead, TextColumn, UspSection } from '@/components/page-sections';
import { GlaucomaPackages3 } from '@/components/page-sections/SectionParts/GlaucomaPackages';
import {
    diagnosisPriceList,
    eyelidSurgeryPriceList,
    keratoconusTreatmentPriceList,
    maculerDegenerationPriceList,
    pricePageList1,
    cataractPriceList,
    glaucomaPriceList,
    visionCorrectionPriceList
} from '@/components/page-sections/SectionParts/GlaucomaPackages/GlaucomaPackages3';
import { Section } from '@/components/Section';
import MastheadImageLarge from '@/masthead/masthead-yag-pricing-large.png';
import MastheadImageMedium from '@/masthead/masthead-yag-pricing-medium.png';
import MastheadImageSmall from '@/masthead/masthead-yag-pricing-small.png';
import { homeUspList } from '@/page-sections/Usp/uspList';
import Image from 'next/image';

/**
 * Url: cataract/yag-capsulotomy-for-pco/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function IclPricing(): JSX.Element {
    const heading = 'Our private consultation and treatment prices';
    const subheading = 'Our leading specialists';

    return (
        <Page title={heading} description={subheading}>
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
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

            <UspSection list={homeUspList} />

            <GlaucomaPackages3
                dynamicSectionHead={<></>}
                packageList={pricePageList1}
                itemClassName="!items-stretch"
                cardClassName="md:!place-items-start"
                packageContainerClassName="md:!ml-0"
                titleClassName="sticky top-[14rem]"
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

            <Section>
                <Container>
                    <TextColumn
                        h3LightHeading={
                            <>
                                Our treatment
                                <br />
                            </>
                        }
                        h3BoldHeading="prices"
                        descriptions={[
                            <>
                                Interested in funding your vision correction treatment with 24 months finance?{' '}
                                <LinkStyle url="/">Calculate your monthly spend</LinkStyle> for clear, permanent vision.
                                Budget and save yourself from purchasing glasses and contact lenses in the future.
                            </>
                        ]}
                        textColumnExtras={
                            <div className="grid place-items-start">
                                <Button
                                    type="button"
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
                </Container>
            </Section>

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
