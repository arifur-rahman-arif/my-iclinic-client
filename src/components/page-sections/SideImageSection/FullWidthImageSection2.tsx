import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
// Import IconEyeBall from '@/icons/icon-eye-ball-outline.svg';
import CostImage from '@/section-images/cost-effective-price.jpg';
import Image from 'next/image';

interface FullWidthImageSection2Interface {
    title: string;
    description: string;
    image?: string;
    largeImage?: string;
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
    largeImage
}: FullWidthImageSection2Interface): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
                <div className="grid gap-12">
                    {/* <Image src={IconEyeBall} alt="" /> */}
                    <h2 className="w-full normal-case md:max-w-[55rem]">
                        <strong className="normal-case">{title}</strong>
                    </h2>

                    <p className="font-latoLight text-[2.8rem] leading-[3.2rem] sm:max-w-[51.8rem]">{description}</p>
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
