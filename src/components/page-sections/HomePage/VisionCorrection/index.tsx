import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import { Section } from '@/components/Section';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import Image from 'next/image';
import Link from 'next/link';
import { ImageType3 } from '@/types';

interface Props {
    heading?: string;
    subHeading?: string;
    image?: ImageType3;
    largeImage?: ImageType3;
    descriptions?: string[];
    footerHeading?: string;
}

/**
 * VisionCorrection is a component that provides information about vision correction treatment options and encourages users to book a FREE suitability check for treatments like ReLEX SMILE, Presbyond, Implantable Contact Lenses, and LASIK.
 *
 * @returns {JSX.Element} The rendered VisionCorrection component.
 */
const VisionCorrection = ({
    heading,
    subHeading,
    image,
    largeImage,
    descriptions,
    footerHeading
}: Props): JSX.Element => {
    return (
        <Section className="md:px-12 xl:px-0">
            <Container className="grid gap-12 md:rounded-radius2 md:border md:border-solid md:border-[#EAECF0] md:p-24 md:px-12 md:shadow-sm xl:px-40">
                <div className="grid gap-6">
                    <TextColumn h3LightHeading={heading || 'Are you considering vision correction treatment?'} />
                    <h3 className="ml-10 font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#293C4E]">
                        {subHeading || 'Achieve lifelong clear vision in just three steps.'}
                    </h3>
                </div>

                <div className="grid justify-items-start gap-6 sm:ml-10">
                    <Image
                        src="/images/section-images/vision-treatment-process.webp"
                        alt=""
                        width={275}
                        height={1005}
                        className="justify-self-center md:hidden"
                        {...(image as any)}
                    />

                    <Image
                        src="/images/section-images/vision-treatment-process-large.webp"
                        alt=""
                        width={937}
                        height={335}
                        className="hidden md:block"
                        {...(largeImage as any)}
                    />

                    <div className="grid max-w-[72.7rem] gap-6">
                        {descriptions?.length ? (
                            descriptions.map((item, key) => (
                                <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                            ))
                        ) : (
                            <>
                                <p>
                                    We have the latest vision correction treatments to achieve clear vision at all
                                    distances for all ages.
                                </p>
                                <p>
                                    Book your FREE suitability check today to find out if you are suitable for our{' '}
                                    <LinkStyle url="/relex-smile-london">ReLEX SMILE</LinkStyle>,{' '}
                                    <LinkStyle url="/presbyond-london">Presbyond</LinkStyle>,{' '}
                                    <LinkStyle url="/icl">Implantable Contact Lenses</LinkStyle> or{' '}
                                    <LinkStyle url="/lasik-london">LASIK</LinkStyle> vision correction treatments.
                                </p>
                            </>
                        )}
                    </div>

                    <strong className="mt-6 text-[1.8rem] uppercase leading-[2.8rem] text-heading">
                        {footerHeading || 'A better quality of life is just around the corner!'}
                    </strong>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-12">
                        <Button2
                            type="anchor"
                            text="FREE Suitability check"
                            link="/suitability-check"
                            className="sitemap-link w-full text-center sm:w-auto"
                        />

                        <Link
                            href="tel:0208 445 8877"
                            className="flex items-center justify-center gap-3 font-mulishBold text-heading transition-all duration-500 hover:opacity-50"
                        >
                            <Image src="/images/icons/icon-telephone-outline.svg" alt="" width={20} height={20} />
                            0208 445 8877
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default VisionCorrection;
