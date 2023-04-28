import { BsCheckLg } from 'react-icons/bs';
import { StepperInterface } from './Stepper';

interface StepIndicatorInterface {
    steppers: StepperInterface[];
    activateSelectedStepper: (arg: number) => void;
}

/**
 * Stepper indicator as header of the stepper component
 *
 * @param {StepIndicatorInterface} { steppers, activateSelectedStepper }
 * @returns {*}  {JSX.Element}
 */
const StepIndicator = ({ steppers, activateSelectedStepper }: StepIndicatorInterface): JSX.Element => {
    return (
        <div className="w-full overflow-scroll lg:overflow-hidden" id="stepper-indicator">
            <div className="stepper-indicator relative z-[1] grid w-full min-w-[28rem] grid-cols-3 gap-4 sm:min-w-[35.5rem]">
                {steppers.map((stepper, index) => (
                    <div
                        className={`relative grid place-items-center gap-4 ${
                            stepper.indicatorActive ? 'cursor-pointer' : 'cursor-not-allowed'
                        }`}
                        key={index}
                        onClick={() => {
                            activateSelectedStepper(index);
                        }}
                    >
                        <span
                            className={`grid h-10 w-10 place-items-center rounded-full  pt-1 transition-all delay-200 duration-200 ${
                                stepper.indicatorActive ? 'bg-heading2' : 'bg-gray-400'
                            }`}
                        >
                            <BsCheckLg className="fill-white text-[1.5rem]" />
                        </span>
                        <span
                            className={`whitespace-nowrap font-mulishBold text-[1.4rem] uppercase transition-all duration-200 ${
                                stepper.indicatorActive ? 'text-heading2' : ''
                            }`}
                        >
                            {stepper.title}
                        </span>

                        {/* Indicator track */}
                        <span
                            className={`absolute left-2/4 top-5 -z-[1] h-1 w-full -translate-x-full bg-gray-400 ${
                                index == 0 ? 'hidden' : 'block'
                            }`}
                        >
                            <span
                                className={`absolute h-full bg-heading2 transition-all duration-200 ${
                                    stepper.indicatorActive ? 'w-full' : 'w-0'
                                }`}
                            ></span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepIndicator;
