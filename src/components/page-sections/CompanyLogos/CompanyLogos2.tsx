import Image from 'next/image';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import Logo1 from '@/logos/bupa.png';
import Logo2 from '@/logos/healthcare-practice.png';
import Logo3 from '@/logos/aviva.png';
import Logo4 from '@/logos/freedom.png';
import Logo5 from '@/logos/cigma.png';
import Logo6 from '@/logos/general-medical.png';

/**
 * Company logo component
 *
 * @returns {*}  {JSX.Element}
 */
const CompanyLogos = (): JSX.Element => {
    return (
        <Section className="!mt-24">
            <Container>
                <div className="mx-auto flex flex-wrap items-center justify-center sm:gap-8">
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo1} alt="" />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo2} alt="" />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo3} alt="" />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo4} alt="" />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo5} alt="" />
                    </div>
                    <div className="grid h-[17.8rem] w-[17.8rem] place-items-center overflow-hidden rounded-full p-8">
                        <Image className="h-full w-full object-contain" src={Logo6} alt="" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default CompanyLogos;
