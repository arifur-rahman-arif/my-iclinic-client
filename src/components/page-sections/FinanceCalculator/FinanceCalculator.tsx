import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import AverageSpend from '@/page-sections/FinanceCalculator/AverageSpend';
import { ResultColumn } from '@/page-sections/FinanceCalculator/ResultColumn';
import { useContext } from 'react';
import CalculatorComponent from './CalculatorComponent/CalculatorComponent';
import { AppCtx, CalculatorContext, TreatmentInterface } from './Context';

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
    const ctx: CalculatorContext = useContext(AppCtx);

    return (
        <Section id="calculator" className="grid gap-48">
            <Container className="">
                {ctx.treatmentList.length ?
                    ctx.treatmentList.map((treatment, index) => {
                        return (
                              <div
                                  className={`gap-12 md:gap-8 lg:grid-cols-[auto_1fr] xl:grid-cols-[auto_55.5rem] ${
                                      treatment.active ? 'grid' : 'hidden'
                                  }`}
                                  key={index}
                              >
                                  {/* <Treatment key={index} {...treatment} averageSpend={treatment.averageSpend} /> */}
                                  {/* Grid item 1 */}
                                  <CalculatorComponent index={index} />
                                  {/* Grid item 2 */}
                                  <ResultColumn index={index} />
                              </div>
                        );
                    }) :
                    null}

                {/* <div className="grid md:grid-cols-[auto_1fr]"> */}
                {/*     <div className="grid content-start"> */}
                {/*         <H3Variant2 className="normal-case text-heading">Finance options</H3Variant2> */}
                {/*         <p className="mt-6 font-mulishBold text-[2rem] leading-[2.8rem] text-[#35444B]"> */}
                {/*             Choose which surgery you are looking to get */}
                {/*         </p> */}

                {/*         <div className="col-span-full grid gap-12 justify-self-center"> */}
                {/*             /!* Treatment types *!/ */}
                {/*             <TreatmentTypes treatmentList={ctx.treatmentList} setTreatmentList={ctx.setTreatmentList} /> */}
                {/*         </div> */}

                {/*         {treatmentList.length */}
                {/*             ? treatmentList.map((treatment, index) => { */}
                {/*                   return ( */}
                {/*                       <div className={`${treatment.active ? 'block' : 'hidden'}`} key={index}> */}
                {/*                           <Treatment key={index} {...treatment} averageSpend={treatment.averageSpend} /> */}
                {/*                       </div> */}
                {/*                   ); */}
                {/*               }) */}
                {/*             : null} */}
                {/*     </div> */}
                {/* </div> */}

                {/* {treatmentList.length */}
                {/*     ? treatmentList.map((treatment, index) => { */}
                {/*           return ( */}
                {/*               <div className={`${treatment.active ? 'block' : 'hidden'}`} key={index}> */}
                {/*                   <ResultColumn key={index} {...treatment} /> */}
                {/*               </div> */}
                {/*           ); */}
                {/*       }) */}
                {/*     : null} */}
            </Container>

            <div id="average-spend-large">
                {ctx.treatmentList.length ?
                    ctx.treatmentList.map((treatment, index) => {
                        if (!treatment.active) return null;
                        const averageSpend = treatment.averageSpend;

                        return (
                              <div className="col-span-full" key={index}>
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
