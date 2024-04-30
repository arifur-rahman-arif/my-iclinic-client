import Image from 'next/image';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

interface CompanyLogosProps {
    sectionClass?: string;
}

/**
 * Company logo component
 *
 * @returns {*}  {JSX.Element}
 */
const CompanyLogos = ({ sectionClass }: CompanyLogosProps): JSX.Element => {
    return (
        <Section className={`${sectionClass || '!mt-24'}`}>
            <Container>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                    <div className="grid h-[12rem] w-[12rem] place-items-center overflow-hidden rounded-full p-8 shadow-md transition-all duration-500 hover:shadow-none">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/royal-society-medicine.webp"
                            alt=""
                            quality={70}
                            width={157}
                            height={68}
                        />
                    </div>
                    <div className="grid h-[12rem] w-[12rem] place-items-center overflow-hidden rounded-full p-8 shadow-md transition-all duration-500 hover:shadow-none">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/ukiscrs.webp"
                            alt=""
                            quality={70}
                            width={143}
                            height={52}
                        />
                    </div>
                    <div className="grid h-[12rem] w-[12rem] place-items-center overflow-hidden rounded-full p-8 shadow-md transition-all duration-500 hover:shadow-none">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/royal-collage.webp"
                            alt=""
                            quality={70}
                            width={143}
                            height={143}
                        />
                    </div>
                    <div className="grid h-[12rem] w-[12rem] place-items-center overflow-hidden rounded-full p-8 shadow-md transition-all duration-500 hover:shadow-none">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/escrs.webp"
                            alt=""
                            quality={70}
                            width={153}
                            height={80}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default CompanyLogos;
