import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import CostImage from '@/section-images/cost-effective-price.webp';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface FullWidthImageSection2Interface {
    title: string;
    description: string;
    image?: string;
    largeImage?: string;
    excludeCta?: boolean;
    textColumnClass?: string;
}

/**
 * Full width image section 2
 *
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection2 = ({
    title,
    description,
    image,
    largeImage,
    excludeCta,
    textColumnClass
}: FullWidthImageSection2Interface): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
                <div className={twMerge('grid gap-12', textColumnClass)}>
                    <SectionTextColumn
                        className="gap-y-6"
                        heading={title}
                        headingClassName="max-w-[53rem]"
                        descriptions={[description]}
                    />

                    {!excludeCta && (
                        <BookConsultation buttonClassName="sitemap-link ml-9 border-[#003E79] bg-[#003E79] hover:!text-[#003E79] text-center hover:!border-[#003E79] !border-2">
                            <Button2 type="button" text="FREE consultation" />
                        </BookConsultation>
                    )}
                </div>
                <div className="row-start-1 justify-self-center md:row-auto">
                    <Image
                        src={image || CostImage}
                        quality={100}
                        width={590}
                        height={394}
                        alt=""
                        className="rounded-primary md:hidden"
                    />
                    <Image
                        src={largeImage || CostImage}
                        quality={100}
                        width={590}
                        height={394}
                        alt=""
                        className="hidden rounded-primary md:block"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection2;
