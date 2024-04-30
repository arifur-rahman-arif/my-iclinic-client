import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ImageType3 } from '@/types';
import sectionImage from '@/section-images/private-consultation-cataract-large.webp';
import Image from 'next/image';
import { H2Variant1 } from '@/components/Headings';
import HTMLReactParser from 'html-react-parser';

interface Props {
    image: ImageType3;
    heading: string;
}

/**
 * VisionCorrection component
 *
 * @param {Props} { image, heading }
 * @returns {*}
 */
const VisionCorrection = ({ image, heading }: Props): JSX.Element => {
    return (
        <Section id="vision-correction">
            <Container className="grid place-items-center gap-12">
                <Image
                    src={sectionImage}
                    alt=""
                    {...(image as any)}
                    className="w-full max-w-[60.5rem] rounded-primary"
                />
                <H2Variant1 className="text-center normal-case [&_*]:normal-case">
                    {HTMLReactParser(heading || '')}
                </H2Variant1>
            </Container>
        </Section>
    );
};

export default VisionCorrection;
