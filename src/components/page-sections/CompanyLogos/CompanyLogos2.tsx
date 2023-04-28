import Image from 'next/image';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import Logo1 from '@/logos/bupa.png';
import Logo2 from '@/logos/healthcare-practice.png';
import Logo3 from '@/logos/aviva.png';
import Logo4 from '@/logos/freedom.png';
import Logo5 from '@/logos/cigma.png';
import Logo6 from '@/logos/general-medical.png';
import H3Variant1 from 'src/components/Headings/H3Variant1';

/**
 * Company logo component
 *
 * @returns {*}  {JSX.Element}
 */
const CompanyLogos = (): JSX.Element => {
    return (
        <Section className="!mt-24">
            <Container className="grid place-items-center gap-16">
                <H3Variant1 className="!font-latoLight">
                    Funding your{' '}
                    <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] md:text-[3.6rem] md:leading-[4rem]">
                        treatment
                    </strong>
                </H3Variant1>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-6">
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo1} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo2} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo3} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6]  shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo4} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full object-contain" src={Logo5} alt="" />
                    </div>
                    <div className="grid h-[8rem] w-[18rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">
                        <Image className="max-h-full max-w-full scale-[0.8] object-contain" src={Logo6} alt="" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default CompanyLogos;
