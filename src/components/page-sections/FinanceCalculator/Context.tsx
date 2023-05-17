import { navMenuList, NavMenuType } from '@/components/Header/navMenuList';
import { ContactContext } from '@/page-sections/ContactSection/Context';
import { AverageSpendInterfaceProps } from '@/page-sections/FinanceCalculator/AverageSpend';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

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
    eyeCount: 1 | 2;
}

export interface CalculatorContext {
    treatmentList: TreatmentInterface[];
    setTreatmentList: Dispatch<SetStateAction<TreatmentInterface[]>>;
    setEyeCount: (index: number, value: number) => void;
    setUpfrontPercentage: (index: number, value: number) => void;
    setInstallment: (index: number, value: number) => void;
    getMonthlyPaymentValue: (index: number) => number;
}

interface PropInterface {
    children: Array<JSX.Element> | JSX.Element;
    treatments?: TreatmentInterface[];
}

const defaultContext: CalculatorContext = {
    treatmentList: [],
    setTreatmentList: () => {},
    setEyeCount: (index: number, value: number) => {},
    setUpfrontPercentage: (index: number, value: number) => {},
    setInstallment: (index: number, value: number) => {},
    getMonthlyPaymentValue: (index) => 0
};

export const AppCtx = createContext<CalculatorContext>(defaultContext);

/**
 * Finance calculator context component
 *
 * @param {TreatmentInterface[] | undefined} treatments
 * @param {Array<JSX.Element> | JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
const Context = ({ treatments, children }: PropInterface): JSX.Element => {
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
                defaultInstallment: 14,
                eyeCount: 1
            },
            {
                name: 'Implantable Contact Lenses',
                cost: 5500,
                minUpfront: 25,
                maxUpfront: 50,
                defaultUpfront: 40,
                minInstallment: 1,
                maxInstallment: 10,
                defaultInstallment: 5,
                eyeCount: 1
            },
            {
                name: 'Cataract Surgery',
                cost: 4800,
                minUpfront: 25,
                maxUpfront: 50,
                defaultUpfront: 35,
                minInstallment: 1,
                maxInstallment: 10,
                defaultInstallment: 5,
                eyeCount: 1
            }
        ]
    );

    const setEyeCount = (index: number, value: 1 | 2): void => {
        setTreatmentList((prevTreatmentList) => {
            const updatedTreatmentList = [...prevTreatmentList]; // Create a copy of the treatmentList array

            updatedTreatmentList[index] = {
                ...updatedTreatmentList[index],
                eyeCount: value // Update the eyeCount value for the specified index
            };

            return updatedTreatmentList; // Return the updated treatmentList array
        });
    };

    const setUpfrontPercentage = (index: number, newDefaultUpfront: number): void => {
        setTreatmentList((prevTreatmentList) => {
            const updatedTreatmentList = [...prevTreatmentList]; // Create a copy of the treatmentList array
            updatedTreatmentList[index] = {
                ...updatedTreatmentList[index],
                defaultUpfront: newDefaultUpfront // Update the defaultUpfront value for the specified index
            };
            return updatedTreatmentList; // Return the updated treatmentList array
        });
    };

    const setInstallment = (index: number, value: number): void => {
        setTreatmentList((prevTreatmentList) => {
            const updatedTreatmentList = [...prevTreatmentList]; // Create a copy of the treatmentList array
            updatedTreatmentList[index] = {
                ...updatedTreatmentList[index],
                defaultInstallment: value // Update the defaultInstallment value for the specified index
            };
            return updatedTreatmentList; // Return the updated treatmentList array
        });
    };

    /**
     * Get the monthly payment amount based on the upfront percentage value
     * @param {number} index - The index of the treatment in the treatment list
     * @returns {number} - The calculated monthly payment amount
     */
    const getMonthlyPaymentValue = (index: number): number => {
        // Retrieve the total cost of the treatment
        const total = treatmentList[index].cost;

        // Calculate the upfront amount based on the default upfront percentage
        const upfrontAmount = (total * treatmentList[index].defaultUpfront) / 100;

        // Calculate the monthly payment amount
        const monthlyPayment =
            ((total - upfrontAmount) / treatmentList[index].defaultInstallment) * treatmentList[index].eyeCount;

        // Return the monthly payment amount with 2 decimal places
        return parseFloat(monthlyPayment.toFixed(2));
    };

    return (
        <AppCtx.Provider
            value={{
                treatmentList,
                setTreatmentList,
                setEyeCount,
                setUpfrontPercentage,
                getMonthlyPaymentValue,
                setInstallment
            }}
        >
            {children}
        </AppCtx.Provider>
    );
};

export default Context;
