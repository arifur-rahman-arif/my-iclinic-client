import { StepperInterface } from './Stepper';
import { cloneElement } from 'react';
import styles from './Stepper.module.scss';

interface StepperBodyInterface {
    steppers: StepperInterface[];
    activateNextStepper: () => void;
    children: JSX.Element[];
}

/**
 * Body of the stepper component
 * This stepper body acts as HOC function for the all stepper content
 *
 * @param {StepperBodyInterface} { steppers, activateNextStepper, children }
 * @returns {*}  {JSX.Element}
 */
const StepperBody = ({ steppers, activateNextStepper, children }: StepperBodyInterface): JSX.Element => {
    return (
        <div className="stepper-body relative overflow-x-clip sm:overflow-x-visible">
            {steppers.map((stepper, index) => (
                <div
                    key={index}
                    className={`grid h-full w-full grid-cols-1 ${
                        stepper.isActive ? `block ${styles.stepperActive}` : 'pointer-events-none hidden opacity-0'
                    }`}
                >
                    {cloneElement(children[index], {
                        activateNextStepper: activateNextStepper,
                        shouldActivateNextStep: stepper.activateNextStep,
                        stepperIndex: index,
                        clonedElement: true,
                        indicatorActive: stepper.indicatorActive
                    })}
                </div>
            ))}
        </div>
    );
};

export default StepperBody;
