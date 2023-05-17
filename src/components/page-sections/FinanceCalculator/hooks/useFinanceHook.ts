import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface UserFinanceHookReturnInterface {
    // Upfront controller related states
    upfrontPercentage: number;
    setUpfrontPercentage: Dispatch<SetStateAction<number>>;
    // Installment controller related states
    installment: number;
    setInstallment: Dispatch<SetStateAction<number>>;
    monthlyPayment: number;
    upfrontAmount: number;
    eyeCountState: number;
    setEyeCountState: Dispatch<SetStateAction<number>>;
}

interface UserFinanceHookInterface {
    totalPayment: number;
    defaultUpfrontPercentage: number;
    defaultInstallment: number;
    eyeCount: number;
}

/**
 * Treatment state management hook
 *
 * @param {number} totalPayment
 * @param {number} defaultUpfrontPercentage
 * @param {number} defaultInstallment
 * @returns {UserFinanceHookReturnInterface}
 */
const useFinanceHook = ({
    totalPayment,
    defaultUpfrontPercentage,
    defaultInstallment,
    eyeCount
}: UserFinanceHookInterface): UserFinanceHookReturnInterface => {
    // Upfront controller related states
    const [upfrontPercentage, setUpfrontPercentage] = useState<number>(defaultUpfrontPercentage);

    // Installment controller related states
    const [installment, setInstallment] = useState<number>(defaultInstallment);
    const upfrontAmount = (totalPayment * upfrontPercentage) / 100;

    const [eyeCountState, setEyeCountState] = useState(eyeCount);

    /**
     * Get the monthly payment amount based on upfront percentage value
     * @returns {number}
     */
    const getMonthlyPaymentValue = (): number => {
        return parseFloat(((totalPayment - upfrontAmount) / installment).toFixed(2));
    };

    const [monthlyPayment, setMonthlyPayment] = useState<number>(getMonthlyPaymentValue());

    useEffect(() => {
        setMonthlyPayment(getMonthlyPaymentValue());
    }, [upfrontPercentage, installment]);

    return {
        // Upfront controller related states
        upfrontPercentage,
        setUpfrontPercentage,
        // Installment controller related states
        installment,
        setInstallment,
        monthlyPayment,
        upfrontAmount,
        eyeCountState,
        setEyeCountState
    };
};

export default useFinanceHook;
