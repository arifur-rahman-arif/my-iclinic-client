import { smallSizes, useDeviceSize } from '@/hooks';
import Cta4 from '@/page-sections/SectionParts/Cta4';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';
import AverageSpend, { AverageSpendInterfaceProps } from './AverageSpend';
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
    averageSpend?: AverageSpendInterfaceProps;
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
    defaultInstallment,
    averageSpend
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

    const deviceSize = useDeviceSize();

    const [openCostTable, setOpenCostTable] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-1 content-start gap-12 lg:grid-cols-[1fr_auto]">
            <div className="grid content-start gap-12 justify-self-center">
                <div className="grid w-full max-w-[34.1rem] gap-16  rounded-primary bg-[#063147] py-8 px-8 shadow-shadow1 md:py-16 md:px-12 lg:self-start">
                    <div className="grid content-start gap-14 justify-self-center">
                        <span className="text-center font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-white">
                            Your monthly payment
                        </span>
                        <div className="grid place-items-center gap-4 justify-self-center">
                            <span className="font-latoExtraBold text-[4.8rem] leading-[4.8rem] text-white">
                                £{monthlyPayment}
                            </span>
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem] text-white">
                                Per eye | Per month
                            </span>
                        </div>
                    </div>
                </div>

                {/* Cost breakdown desktop version */}
                <div
                    className={`hidden w-full max-w-[34.1rem] justify-self-center rounded-primary py-8 px-8 shadow-shadow1 transition-all duration-500 md:py-16 md:px-12 lg:grid`}
                >
                    <button
                        className="flex cursor-pointer items-center justify-center gap-4 justify-self-center"
                        onClick={() => {
                            setOpenCostTable(!openCostTable);
                        }}
                    >
                        <span className="text-center font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-heading">
                            Cost break down
                        </span>
                        <FaAngleRight className="h-[1.2rem] w-[1.2rem] fill-[#9B9FA1]" />
                    </button>

                    <div
                        className={`overflow-hidden  transition-all duration-500 ${
                            openCostTable ? 'max-h-full pt-12' : 'max-h-0'
                        }`}
                    >
                        <CostCalender installmentTime={installment} monthlyPayment={monthlyPayment} />
                    </div>
                </div>

                {/* Total cost desktop version */}
                <div className="hidden w-full max-w-[34.1rem] gap-16 justify-self-center rounded-primary py-8 px-8 shadow-shadow1 md:py-16 md:px-12 lg:grid">
                    <div className="grid gap-14 justify-self-center">
                        <span className="text-center font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-heading">
                            Total cost of vision correction treatment
                        </span>
                        <div className="grid place-items-center gap-4 justify-self-center">
                            <span className="font-latoExtraBold text-[4.8rem] leading-[4.8rem] text-heading">
                                {cost.toLocaleString()}
                            </span>
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem] text-heading">
                                Per eye
                            </span>
                        </div>
                    </div>
                </div>

                {/* How much you desktop */}
                <div className="hidden grid-cols-[auto_1fr] gap-6 lg:grid">
                    <Image src="/images/icons/icon-money-bag-dark.svg" alt="" width={30} height={40} />
                    <p className="max-w-[21.5rem] font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                        How much you save over 30 Years{' '}
                        <Link
                            href="/pricing-and-financing/financing-your-treatment"
                            className="font-mulishExtraBold text-[1.4rem] leading-[1.8rem] text-heading2 underline decoration-heading2 decoration-2 underline-offset-4"
                        >
                            Learn More
                        </Link>
                    </p>
                </div>

                {/* Need help desktop */}
                <div className="hidden grid-cols-[auto_1fr] gap-x-6 gap-y-4 lg:grid">
                    <AiOutlineQuestionCircle className="h-10 w-10 fill-heading" />
                    <p className="font-mulishExtraBold text-[1.6rem] leading-[2.8rem] text-heading">Need help?</p>
                    <div className="col-start-2 flex items-center justify-start gap-12">
                        <Link
                            href="tel:0208 445 8877"
                            className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#35444B]"
                        >
                            0208 445 8877
                        </Link>
                        <button
                            className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#35444B]"
                            onClick={() => {
                                openFreshdeskChat();
                            }}
                        >
                            Chat with us
                        </button>
                    </div>
                </div>
            </div>

            {/* Calculator */}
            <div className="rounded-primary px-12 py-16 shadow-shadow1 md:px-16 md:py-24 lg:col-start-1 lg:row-start-1">
                <div className="grid gap-32 md:gap-48">
                    {/*  Deposit controller    */}
                    <SurgeryController
                        title="Upfront payment"
                        minValue={minUpfront}
                        maxValue={maxUpfront}
                        value={upfrontPercentage}
                        defaultValue={defaultUpfront}
                        onValueChange={setUpfrontPercentage}
                        upfrontAmount={upfrontAmount}
                        valueLabelFormat={
                            smallSizes.includes(deviceSize) ? `${upfrontAmount}` : `${upfrontPercentage}%`
                        }
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

            {/* Total cost mobile version */}
            <div className="grid w-full max-w-[34.1rem] gap-16 justify-self-center rounded-primary py-8 px-8 shadow-shadow1 md:py-16 md:px-12 lg:hidden">
                <div className="grid gap-14 justify-self-center">
                    <span className="text-center font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-heading">
                        Total cost of vision correction treatment
                    </span>
                    <div className="grid place-items-center gap-4 justify-self-center">
                        <span className="font-latoExtraBold text-[4.8rem] leading-[4.8rem] text-heading">
                            {cost.toLocaleString()}
                        </span>
                        <span className="font-mulishBold text-[1.6rem] uppercase leading-[2.4rem] text-heading">
                            Per eye
                        </span>
                    </div>
                </div>
            </div>

            {/* Cost breakdown mobile version */}
            <div
                className={`grid w-full max-w-[34.1rem] justify-self-center rounded-primary py-8 px-8 shadow-shadow1 transition-all duration-500 md:py-16 md:px-12 lg:hidden`}
            >
                <button
                    className="flex cursor-pointer items-center justify-center gap-4 justify-self-center"
                    onClick={() => {
                        setOpenCostTable(!openCostTable);
                    }}
                >
                    <span className="text-center font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-heading">
                        Cost break down
                    </span>
                    <FaAngleRight className="h-[1.2rem] w-[1.2rem] fill-[#9B9FA1]" />
                </button>

                <div
                    className={`overflow-hidden  transition-all duration-500 ${
                        openCostTable ? 'max-h-full pt-12' : 'max-h-0'
                    }`}
                >
                    <CostCalender installmentTime={installment} monthlyPayment={monthlyPayment} />
                </div>
            </div>

            {/* How much you mobile */}
            <div className="grid grid-cols-[auto_1fr] gap-6 lg:hidden">
                <Image src="/images/icons/icon-money-bag-dark.svg" alt="" width={30} height={40} />
                <p className="max-w-[21.5rem] font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                    How much you save over 30 Years{' '}
                    <Link
                        href="/pricing-and-financing/financing-your-treatment"
                        className="font-mulishExtraBold text-[1.4rem] leading-[1.8rem] text-heading2 underline decoration-heading2 decoration-2 underline-offset-4"
                    >
                        Learn More
                    </Link>
                </p>
            </div>

            {/* Need help mobile */}
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 lg:hidden">
                <AiOutlineQuestionCircle className="h-10 w-10 fill-heading" />
                <p className="font-mulishExtraBold text-[1.6rem] leading-[2.8rem] text-heading">Need help?</p>
                <div className="col-start-2 flex items-center justify-start gap-12">
                    <Link
                        href="tel:0208 445 8877"
                        className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#35444B]"
                    >
                        0208 445 8877
                    </Link>
                    <button
                        className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#35444B]"
                        onClick={() => {
                            openFreshdeskChat();
                        }}
                    >
                        Chat with us
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] content-start gap-6 lg:col-span-1">
                <Image src="/images/icons/icon-bell-yellow.svg" alt="" width={35} height={43} />
                <div className="grid gap-6">
                    <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">
                        Please Read Carefully Before Applying
                    </span>
                    <span className="leading-[2.4rem font-mulishBold text-[1.6rem] text-heading">
                        Terms & Conditions:
                    </span>
                    <p>
                        Please consider: approval for{' '}
                        <span className="font-mulishExtraBold text-[#FE8083]">0% ARP</span> representative finance is{' '}
                        <span className="font-mulishExtraBold uppercase text-[#FE8083]">subject to status.</span>
                    </p>
                    <p>
                        All finance plans must be approved at least{' '}
                        <span className="font-mulishExtraBold uppercase text-[#FE8083]">
                            14 days prior to the treatment.
                        </span>
                    </p>
                </div>
            </div>

            <div className="-ml-8 w-[calc(100%_+_4rem)] lg:col-span-full lg:mt-[9rem]">
                <AverageSpend {...(averageSpend as unknown as any)} />
            </div>
        </div>
    );
};

export default Treatment;
