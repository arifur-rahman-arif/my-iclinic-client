import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Context, { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import FinanceCalculator from './FinanceCalculator';

interface FinanceCalculatorSectionProps {
    iclTreatments: TreatmentInterface[];
}

/**
 * Finance calculator section
 *
 * @param {TreatmentInterface[]} iclTreatments
 * @returns {JSX.Element}
 * @constructor
 */
const FinanceCalculatorSection = ({ iclTreatments }: FinanceCalculatorSectionProps): JSX.Element => {
    return (
        <Section id="finance-calculator">
            <Container className="grid content-start gap-12 md:gap-24">
                <h2 className="max-w-[55.1rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    <span className="font-latoBold text-[3rem] normal-case leading-[3.6rem] text-[#FF7F00] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        0% interest-Free
                    </span>{' '}
                    finance option for 24 months
                </h2>

                <Context treatments={iclTreatments}>
                    <FinanceCalculator />
                </Context>
            </Container>
        </Section>
    );
};

export default FinanceCalculatorSection;
