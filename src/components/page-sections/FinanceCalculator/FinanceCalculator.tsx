import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import AverageSpend from '@/page-sections/FinanceCalculator/AverageSpend';
import { useState } from 'react';
import H3Variant2 from 'src/components/Headings/H3Variant2';
import { TreatmentInterface } from './Treatment';
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
        <Section id="calculator" className="grid gap-48">
            <Container className="grid grid-cols-1 rounded-primary px-12 xl:border xl:border-[#CACECF]">
                {/* {treatmentList.length */}
                {/*     ? treatmentList.map((treatment, index) => { */}
                {/*           return ( */}
                {/*               <div className={`${treatment.active ? 'block' : 'hidden'}`} key={index}> */}
                {/*                   <Treatment key={index} {...treatment} averageSpend={treatment.averageSpend} /> */}
                {/*               </div> */}
                {/*           ); */}
                {/*       }) */}
                {/*     : null} */}

                <div className="grid md:grid-cols-[1fr_auto]">
                    <div className="grid content-start">
                        <H3Variant2 className="normal-case text-heading">Finance options</H3Variant2>
                        <p className="mt-6 font-mulishBold text-[2rem] leading-[2.8rem] text-[#35444B]">
                            Choose which surgery you are looking to get
                        </p>

                        <div className="col-span-full grid gap-12 justify-self-center">
                            {/* Treatment types */}
                            <TreatmentTypes treatmentList={treatmentList} setTreatmentList={setTreatmentList} />
                        </div>
                    </div>

                    <div className="bg-heading2 py-12 md:py-[7.5rem] md:px-24"></div>
                </div>
            </Container>

            <div id="average-spend-large">
                {treatmentList.length ?
                    treatmentList.map((treatment, index) => {
                        if (!treatment.active) return null;
                        const averageSpend = treatment.averageSpend;

                        return (
                              <div className="hidden lg:col-span-full lg:block" key={index}>
                                  <AverageSpend {...(averageSpend as unknown as any)} />
                              </div>
                        );
                    }) :
                    null}
            </div>
        </Section>
    );
};
export default FinanceCalculator;
