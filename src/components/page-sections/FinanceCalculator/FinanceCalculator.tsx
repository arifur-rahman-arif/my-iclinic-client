import { Container } from '@/components/Container';
import { H2Variant1, H3Variant2 } from '@/components/Headings';
import { Section } from '@/components/Section';
import Treatment, { TreatmentInterface } from './Treatment';
import { useState } from 'react';
import TreatmentTypes from './TreatmentTypes';

interface FinanceCalculatorInterface {
    treatments?: TreatmentInterface[];
}

/**
 * Finance calculator component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FinanceCalculator = ({ treatments }: FinanceCalculatorInterface): JSX.Element => {
    const [treatmentList, setTreatmentList] = useState<TreatmentInterface[]>(
        (treatments?.length && treatments) || [
            {
                name: 'Laser eye surgery',
                active: true,
                cost: 2400,
                minUpfront: 25,
                maxUpfront: 50,
                defaultUpfront: 30,
                minInstallment: 1,
                maxInstallment: 24,
                defaultInstallment: 14
            },
            {
                name: 'Implantable Contact Lenses',
                cost: 5500,
                minUpfront: 25,
                maxUpfront: 50,
                defaultUpfront: 40,
                minInstallment: 1,
                maxInstallment: 10,
                defaultInstallment: 5
            },
            {
                name: 'Cataract Surgery',
                cost: 4800,
                minUpfront: 25,
                maxUpfront: 50,
                defaultUpfront: 35,
                minInstallment: 1,
                maxInstallment: 10,
                defaultInstallment: 5
            }
        ]
    );

    return (
        <Section id="calculator">
            <Container className="grid grid-cols-1 gap-12 rounded-primary md:gap-28 xl:border xl:border-[#CACECF] xl:py-[7.5rem] xl:px-20">
                <div className="col-span-full grid gap-12 justify-self-center">
                    <H2Variant1 className="text-center normal-case">Finance calculator</H2Variant1>
                    <span className="text-center font-latoBold text-[1.8rem] uppercase leading-[2.8rem] text-heading md:text-[2rem] md:leading-[2.8rem]">
                        Select your treatment
                    </span>
                    {/* Treatment types */}
                    <TreatmentTypes treatmentList={treatmentList} setTreatmentList={setTreatmentList} />
                </div>

                {treatmentList.length ?
                    treatmentList.map((treatment, index) => {
                        if (!treatment.active) return null;

                        return <Treatment key={index} {...treatment} averageSpend={treatment.averageSpend} />;
                    }) :
                    null}
            </Container>
        </Section>
    );
};
export default FinanceCalculator;
