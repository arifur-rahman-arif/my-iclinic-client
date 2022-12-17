import { Container } from '@mui/system';
import Image from 'next/image';
import { Section } from '@/components/section';

/**
 * Company logo component
 *
 * @returns {*}  {JSX.Element}
 */
const CompanyLogos = (): JSX.Element => {
    return (
        <Section>
            <Container>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-12">
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8 transition-all duration-500 hover:shadow-shadow1">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/royal-society-medicine.png"
                            alt=""
                            quality={20}
                            width={157}
                            height={68}
                        />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8 transition-all duration-500 hover:shadow-shadow1">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/ukiscrs.png"
                            alt=""
                            quality={20}
                            width={143}
                            height={52}
                        />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8 transition-all duration-500 hover:shadow-shadow1">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/royal-collage.png"
                            alt=""
                            quality={20}
                            width={143}
                            height={143}
                        />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8 transition-all duration-500 hover:shadow-shadow1">
                        <Image
                            className="h-full w-full object-contain"
                            src="/images/section-images/escrs.png"
                            alt=""
                            quality={20}
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
