import { Container } from '@/components/Container';
import { H3Variant2 } from '@/components/Headings';
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
                cost: 4800,
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
            <Container className="grid gap-12 md:gap-28 md:grid-cols-[1fr_auto] grid-cols-1">
                <div className="justify-self-center grid gap-12 col-span-full">
                    <H3Variant2 className="normal-case text-center">Select your treatment</H3Variant2>
                    {/* Treatment types */}
                    <TreatmentTypes treatmentList={treatmentList} setTreatmentList={setTreatmentList} />
                </div>

                {treatmentList.length ?
                    treatmentList.map((treatment, index) => {
                        if (!treatment.active) return null;

                        return <Treatment key={index} {...treatment} />;
                    }) :
                    null}
            </Container>
        </Section>
    );
};
export default FinanceCalculator;
