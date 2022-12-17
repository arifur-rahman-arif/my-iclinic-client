import Done from './Done';
import PersonalInfo from './PersonalInfo';
import { Stepper } from '@/components/stepper';
import { StepperInterface } from '@/components/stepper/Stepper';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const DateAndTime = dynamic(() => import('./DateAndTime'), {
    ssr: false
});

/**
 * Request callback component
 *
 * @returns {*}  {JSX.Element}
 */
const RequestCallback = (): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>('');

    // Date and time components inputs
    const [date, setDate] = useState<Date>(new Date());
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
     * Check all the inputs are valid and prepare for next step activation
     *
     * @param {number} stepperIndex
     * @param {string} currentEmailValue
     */
    const checkInputsForNextStepActivation = (stepperIndex: number, currentEmailValue: string) => {
        if (name && phone && currentEmailValue) {
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
            title: 'Date & Time',
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
        <Stepper stepperList={stepperList} className="min-h-[50rem] w-full max-w-[41.5rem] bg-white">
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
                errorText={errorText}
                setErrorText={setErrorText}
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
