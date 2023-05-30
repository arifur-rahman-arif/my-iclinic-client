import Done from './Done';
import PersonalInfo from './PersonalInfo';
import { Stepper } from '@/components/Stepper';
import { StepperInterface } from '@/components/Stepper/Stepper';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const DateAndTime = dynamic(() => import('./DateAndTime'), {
    ssr: false
});

interface RequestCallbackProps {
    className?: string;
}

/**
 * Request callback component
 *
 * @param {string | undefined} className
 * @returns {JSX.Element}
 * @constructor
 */
const RequestCallback = ({ className }: RequestCallbackProps): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    // Date and time components inputs
    const today = new Date();
    // Set the date one day ahead of the current date
    today.setDate(today.getDate() + 1);
    const [date, setDate] = useState<Date>(today);
    const [optionalMessage, setOptionalMessage] = useState<string>('');

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    /**
     * Prepare the next step to be activated
     * It will set the next step active for proceeding but will not go to next step immediately
     *
     * @param {number} stepIndex
     * @param {boolean} active
     */
    const setNextStepActive = (stepIndex: number, active: boolean) => {
        setStepperList((currentState) => {
            const tempState = [...currentState];

            tempState[stepIndex].activateNextStep = active;

            return tempState;
        });
    };

    /**
     * Activate the next step if all inputs have values
     *
     * @param {number} stepperIndex
     * @param {{name: string, phone: string, email: string}} data
     */
    const checkInputsForNextStepActivation = (
        stepperIndex: number,
        data: {
            name: string;
            phone: string;
            email: string;
        }
    ) => {
        const { name, phone, email } = data;

        if (name && phone && email) {
            setNextStepActive(stepperIndex, true);
        } else {
            setNextStepActive(stepperIndex, false);
        }
    };

    const [stepperList, setStepperList] = useState<StepperInterface[]>([
        {
            title: 'Info',
            isActive: true,
            indicatorActive: true,
            activateNextStep: false
        },
        {
            title: 'Date',
            isActive: false,
            indicatorActive: false,
            activateNextStep: false
        },
        {
            title: 'Done',
            isActive: false,
            indicatorActive: false,
            activateNextStep: false
        }
    ]);

    return (
        <Stepper stepperList={stepperList} className={`${className || 'min-h-[50rem] !w-full max-w-[45rem] bg-white'}`}>
            <PersonalInfo
                name={name}
                setName={setName}
                nameError={nameError}
                setNameError={setNameError}
                phone={phone}
                setPhone={setPhone}
                phoneError={phoneError}
                setPhoneError={setPhoneError}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                setEmailError={setEmailError}
                checkInputsForNextStepActivation={checkInputsForNextStepActivation}
            />
            <DateAndTime
                optionalMessage={optionalMessage}
                setOptionalMessage={setOptionalMessage}
                date={date}
                setDate={setDate}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                checkInputsForNextStepActivation={checkInputsForNextStepActivation}
                setFormSubmitted={setFormSubmitted}
            />
            <Done date={date} formSubmitted={formSubmitted} />
        </Stepper>
    );
};

export default RequestCallback;
