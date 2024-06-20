import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { LinkStyle } from '@/components/Link';
import { BiRightArrowAlt } from 'react-icons/bi';

/**
 * Insurance partners component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const InsurancePartners2 = () => {
    return (
        <Section id="insurance-partners">
            <Container className="grid place-items-center gap-12 md:gap-24">
                <div className="grid gap-6">
                    <h2 className="normal-case">
                        Our health <strong className="normal-case">insurance partners</strong>
                    </h2>
                    <LinkStyle
                        url="/pricing-and-financing/financing-your-treatment#insurance"
                        className="group/link item-center flex justify-center gap-1"
                    >
                        Fund your treatment with our health insurance partners
                        <BiRightArrowAlt className="h-10 w-10 fill-blue" />
                    </LinkStyle>
                </div>
                <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:flex-wrap md:gap-14">
                    <Image src="/images/logos/healthcare-practice.webp" width={185} height={50} alt="" quality={100} />
                    <Image src="/images/logos/freedom.png" width={140} height={65} alt="" quality={100} />
                    <Image src="/images/logos/cigma.png" width={145} height={44} alt="" quality={100} />
                    <Image src="/images/logos/bupa.webp" width={110} height={57} alt="" quality={100} />
                    <Image src="/images/logos/aviva.webp" width={90} height={49} alt="" quality={100} />
                    <Image src="/images/logos/general-medical.webp" width={85} height={83} alt="" quality={100} />
                </div>
            </Container>
        </Section>
    );
};

export default InsurancePartners2;
