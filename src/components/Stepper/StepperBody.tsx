import { StepperInterface } from './Stepper';
import { cloneElement } from 'react';

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
                <div key={index}>
                    <div
                        className={`absolute top-0 left-0 grid h-full w-full grid-cols-1 ${
                            index == 0 ? 'translate-x-0' : 'translate-x-1/4'
                        }  ${stepper.isActive ? 'stepper-active' : 'stepper-inactive pointer-events-none opacity-0'}`}
                    >
                        {cloneElement(children[index], {
                            activateNextStepper: activateNextStepper,
                            shouldActivateNextStep: stepper.activateNextStep,
                            stepperIndex: index,
                            clonedElement: true,
                            indicatorActive: stepper.indicatorActive
                        })}
                    </div>

                    {/* Hidden actual element to take the actual space of the absolute element */}
                    <div
                        className={`h-full w-full ${
                            stepper.isActive ? 'pointer-events-none invisible block' : 'hidden'
                        }`}
                    >
                        {children[index]}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepperBody;
