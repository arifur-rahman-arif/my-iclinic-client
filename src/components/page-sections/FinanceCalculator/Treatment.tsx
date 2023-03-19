import Cta4 from '@/page-sections/SectionParts/Cta4';
import AverageSpend from './AverageSpend';
import CostCalender from './CostCalender';
import useFinanceHook from './hooks/useFinanceHook';
import SurgeryController from './SurgeryController';

export interface TreatmentInterface {
    name: string;
    active?: boolean;
    cost: number;
    minUpfront: number;
    maxUpfront: number;
    defaultUpfront: number;
    minInstallment: number;
    maxInstallment: number;
    defaultInstallment: number;
}

/**
 * The individual treatment cost calculator component
 *
 * @param {string} name
 * @param {boolean | undefined} active
 * @param {number} cost
 * @param {number} minUpfront
 * @param {number} maxUpfront
 * @param {number} defaultUpfront
 * @param {number} minInstallment
 * @param {number} maxInstallment
 * @param {number} defaultInstallment
 * @returns {JSX.Element}
 * @constructor
 */
const Treatment = ({
    name,
    active,
    cost,
    minUpfront,
    maxUpfront,
    defaultUpfront,
    minInstallment,
    maxInstallment,
    defaultInstallment
}: TreatmentInterface): JSX.Element => {
    const {
        // Upfront controller related states
        upfrontPercentage,
        setUpfrontPercentage,
        // Installment controller related states
        installment,
        setInstallment,
        monthlyPayment,
        upfrontAmount
    } = useFinanceHook({
        totalPayment: cost,
        defaultUpfrontPercentage: defaultUpfront,
        defaultInstallment: defaultInstallment
    });

    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:gap-28">
            {/* Left column */}
            <div className="grid content-start gap-12 md:gap-24">
                <div>
                    <strong>
                        Total cost of <strong className="capitalize">{name}</strong> is: {(cost / 2).toLocaleString()}{' '}
                        <span>/ per eye</span>
                    </strong>

                    <div className="mt-16 grid gap-12 md:gap-40">
                        {/*  Deposit controller    */}
                        <SurgeryController
                            title="Upfront payment"
                            minValue={minUpfront}
                            maxValue={maxUpfront}
                            value={upfrontPercentage}
                            defaultValue={defaultUpfront}
                            onValueChange={setUpfrontPercentage}
                            upfrontAmount={upfrontAmount}
                            valueLabelFormat={`${upfrontPercentage}%`}
                            appendValueText="%"
                            id="upfront-payment"
                            inputLabel="How much you want pay"
                            totalPayment={cost}
                        />

                        {/*  Number of instalment */}
                        <SurgeryController
                            title="Number of instalment"
                            minValue={minInstallment}
                            maxValue={maxInstallment}
                            value={installment}
                            defaultValue={defaultInstallment}
                            onValueChange={setInstallment}
                            valueLabelFormat={`${installment} month`}
                            appendValueText=" month"
                            id="installment-month"
                            inputLabel="How many installment"
                        />
                    </div>
                </div>

                {/* Average spend on glasses & contact lenses */}
                <div className="hidden md:block">
                    <AverageSpend />
                </div>
            </div>

            {/* Right column */}
            <div className="grid gap-12 md:max-w-[40.1rem]">
                {/* Calculation result */}
                <div className="grid gap-16 rounded-primary bg-brandLight py-8 px-8 md:py-16 md:px-12">
                    <div className="grid gap-12 justify-self-center">
                        <span className="font-mulishBold text-[2.4rem] leading-[3.2rem]">Your monthly payment</span>
                        <div className="grid place-items-center gap-4 justify-self-center">
                            <span className="font-latoExtraBold text-[3.6rem] leading-[4.8rem] text-heading md:text-[4.8rem] md:leading-[4.8rem]">
                                £{monthlyPayment}
                            </span>
                            <span>Per eye</span>
                        </div>
                    </div>

                    <CostCalender installmentTime={installment} monthlyPayment={monthlyPayment} />

                    <span className="text-center font-latoBold text-[2rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                        Total cost of vision correction treatment
                    </span>

                    <div className="grid grid-flow-col place-items-center gap-4 justify-self-center">
                        <span className="font-latoBold text-[3rem] leading-[3.6rem] md:text-[6.4rem] md:leading-[6.4rem]">
                            {(cost / 2).toLocaleString()}
                        </span>
                        <span className="font-mulishMedium">/Per eye</span>
                    </div>
                </div>

                {/* Cta section */}
                <div className="grid">
                    <span>Need help?</span>
                    <strong className="mt-6">Speak to our friendly team </strong>

                    <Cta4 />
                </div>

                <p>
                    <strong>Please consider: approval for 0% ARP representative finance is subject to status.</strong>
                </p>

                <div className="grid gap-6">
                    <strong>Terms & Conditions:</strong>
                    <p>
                        Please call{' '}
                        <strong>
                            <a href="tel:0208 445 8877">0208 445 8877</a>
                        </strong>{' '}
                        to discuss your finance plan with our finance department.{' '}
                        <strong>All finance plans must be approved at least 14 days prior to the treatment</strong>
                    </p>
                </div>
            </div>

            {/* This component is visible in mobile version at the end of this grid container  */}
            <div className="md:hidden">
                <AverageSpend />
            </div>
        </div>
    );
};

export default Treatment;
