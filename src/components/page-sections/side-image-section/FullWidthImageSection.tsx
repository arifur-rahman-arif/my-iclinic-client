import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { useDeviceSize } from '@/hooks';
import Image, { StaticImageData } from 'next/image';

interface FullWidthImageSectionInterface {
    boldHeading?: string;
    h3Title: string;
    image: StaticImageData;
    desktopImage: StaticImageData;
    altText?: string;
}

/**
 * Full width image section
 *
 * @param {FullWidthImageSectionInterface} {
 *     boldHeading,
 *     h3Title,
 *     image,
 *     desktopImage,
 *     altText
 * }
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection = ({
    boldHeading,
    h3Title,
    image,
    desktopImage,
    altText
}: FullWidthImageSectionInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <Section className="bg-brandLight">
            <Container className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-24 md:py-24">
                <div className="grid">
                    {boldHeading ? (
                        <h3 className="w-full normal-case">
                            {h3Title} <br /> <strong className="normal-case">{boldHeading || ''}</strong>
                        </h3>
                    ) : (
                        <h3 className="w-full max-w-[50rem] normal-case">{h3Title}</h3>
                    )}
                </div>
                <div className="row-start-1 justify-self-center md:row-auto md:justify-self-end">
                    {deviceSize === 'small' && (
                        <Image src={image} quality={70} className="md:hidden" alt={altText || ''} />
                    )}

                    {deviceSize === 'large' && (
                        <Image src={desktopImage} quality={70} className="hidden md:block" alt={altText || ''} />
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection;
