import gsap from 'gsap';
import { useEffect, useState } from 'react';

import StepIndicator from './StepIndicator';
import StepperBody from './StepperBody';

interface StepperPropInterface {
    stepperList: StepperInterface[];
    defaultClassName?: string;
    className?: string;
    children: JSX.Element[];
}

export interface StepperInterface {
    title: string;
    isActive: boolean;
    indicatorActive: boolean;
    activateNextStep: boolean;
}

/**
 * Stepper component for the website
 *
 * @param {StepperPropInterface} {
 *     stepperList,
 *     defaultClassName = 'relative mx-auto grid grid-cols-1 grid-rows-[auto_1fr] gap-12 rounded-primary shadow-shadow1 p-8 sm:p-12',
 *     className,
 *     children
 * }
 * @returns {*}  {JSX.Element}
 */
const Stepper = ({
    stepperList,
    defaultClassName = 'relative mx-auto grid grid-cols-1 grid-rows-[auto_1fr] gap-12 rounded-primary shadow-shadow1 p-8 sm:p-12',
    className,
    children
}: StepperPropInterface): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [steppers, setSteppers] = useState<StepperInterface[]>(stepperList);

    /**
     * Activate the next stepper box
     */
    const activateNextStepper = () => {
        if (!steppers[activeIndex].activateNextStep) return;

        setSteppers((currentState) => {
            const tempState = [...currentState];

            const nextIndex = activeIndex + 1;

            if (nextIndex > steppers.length - 1) return currentState;

            tempState[activeIndex].isActive = false;
            tempState[nextIndex].isActive = true;
            tempState[nextIndex].indicatorActive = true;

            setActiveIndex(nextIndex);

            return [...tempState];
        });

        // scrollStepperIntoView();
    };

    /**
     * Activate the selected stepper based on it's index
     *
     * @param {number} pointerIndex
     */
    const activateSelectedStepper = (pointerIndex: number) => {
        if (!steppers[pointerIndex].indicatorActive) return;

        setActiveIndex(pointerIndex);

        setSteppers((currentState) => {
            const tempState = [...currentState];

            if (!currentState[pointerIndex].indicatorActive) return currentState;

            // Disable all other stepper except the selected one
            tempState.forEach((stepperState, index) => {
                stepperState.isActive = pointerIndex === index;
            });

            return [...tempState];
        });

        // scrollStepperIntoView();
    };

    /**
     * Change the stepper position to be visible for the user when user changes the stepper state
     */
    // const scrollStepperIntoView = () => {
    //     // const targetedElement = document.querySelector('.stepper-indicator');
    //     // window.scrollTo(0, getElementTopPosition(targetedElement as HTMLElement) - 200);
    // };

    useEffect(() => {
        document.querySelector('.stepper-active') &&
            gsap.to('.stepper-active', {
                translateX: 0,
                duration: 1,
                opacity: 1,
                pointerEvents: 'auto',
                overwrite: true,
                ease: 'elastic.out(0.6, 0.4)',
                transformOrigin: 'center'
            });

        document.querySelectorAll('.stepper-active') &&
            gsap.to('.stepper-inactive', {
                translateX: '25%',
                duration: 0,
                overwrite: true,
                pointerEvents: 'none',
                opacity: 0
            });
    }, [steppers]);

    return (
        <div className={`${defaultClassName} ${className}`}>
            <StepIndicator steppers={steppers} activateSelectedStepper={activateSelectedStepper} />
            <StepperBody steppers={steppers} activateNextStepper={activateNextStepper} children={children} />
        </div>
    );
};

export default Stepper;
