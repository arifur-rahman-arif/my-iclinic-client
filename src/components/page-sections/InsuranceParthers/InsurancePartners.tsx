import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * Health & insurance partners component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const InsurancePartners = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid place-items-center gap-12 rounded-primary bg-brandLight py-12 !px-0 md:gap-24 md:py-24">
                <h2 className="normal-case">
                    Our health <strong className="normal-case">insurance partners</strong>
                </h2>
                <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:flex-wrap md:gap-14">
                    <Image src="/images/logos/healthcare-practice.png" width={185} height={50} alt="" quality={100} />
                    <Image src="/images/logos/freedom.png" width={140} height={65} alt="" quality={100} />
                    <Image src="/images/logos/cigma.png" width={145} height={44} alt="" quality={100} />
                    <Image src="/images/logos/bupa.png" width={110} height={57} alt="" quality={100} />
                    <Image src="/images/logos/aviva.png" width={90} height={49} alt="" quality={100} />
                    <Image src="/images/logos/general-medical.png" width={85} height={83} alt="" quality={100} />
                </div>
            </Container>
        </Section>
    );
};

export default InsurancePartners;
