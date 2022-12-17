import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/utils/miscellaneous';

import { Button } from '@/components/button';
import { FaAngleRight } from 'react-icons/fa';
import { TextField } from '@/components/inputs';

interface PersonalInfoInterface {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    nameError: boolean;
    setNameError: Dispatch<SetStateAction<boolean>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    phoneError: boolean;
    setPhoneError: Dispatch<SetStateAction<boolean>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    emailError: boolean;
    setEmailError: Dispatch<SetStateAction<boolean>>;
    errorText: string;
    setErrorText: Dispatch<SetStateAction<string>>;
    // Coming from the stepper as a extra prop children not from the parent component
    stepperIndex?: number;
    shouldActivateNextStep?: boolean;
    activateNextStepper?: () => void;
    // End of extra props coming from the stepper
    checkInputsForNextStepActivation: (arg: number, arg2: string) => void;
    clonedElement?: boolean;
}

/**
 * Form step of the request call back
 *
 * @param {PersonalInfoInterface} {
 *     name,
 *     setName,
 *     nameError,
 *     setNameError,
 *     phone,
 *     setPhone,
 *     phoneError,
 *     setPhoneError,
 *     email,
 *     setEmail,
 *     emailError,
 *     setEmailError,
 *     errorText,
 *     setErrorText,
 *     stepperIndex,
 *     shouldActivateNextStep,
 *     activateNextStepper,
 *     checkInputsForNextStepActivation
 * }
 * @returns {*}  {JSX.Element}
 */
const PersonalInfo = ({
    name,
    setName,
    nameError,
    setNameError,
    phone,
    setPhone,
    phoneError,
    setPhoneError,
    email,
    setEmail,
    emailError,
    setEmailError,
    errorText,
    setErrorText,
    stepperIndex,
    shouldActivateNextStep,
    activateNextStepper,
    checkInputsForNextStepActivation,
    clonedElement
}: PersonalInfoInterface): JSX.Element => {
    /**
     * Handle the phone input for onchange event
     *
     * @param {ChangeEvent<HTMLInputElement>} e
     */
    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value as string;
        setPhone(value);
        formatPhoneNumber(value).then((res) => setPhone(res));
        setPhoneError(false);
    };

    /**
     * Validate the input fields of the form
     *
     * @returns {*}  {Promise<boolean>}
     */
    const showInputErrors = async (): Promise<boolean> => {
        if (!name) {
            setErrorText('Please provide your name');
            setNameError(true);
            return false;
        }
        if (!phone) {
            setErrorText('Please provide your phone');
            setPhoneError(true);
            return false;
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            setErrorText('Please provide a valid phone number');
            setPhoneError(true);
            return false;
        }

        if (!email) {
            setErrorText('Please provide your email');
            setEmailError(true);
            return false;
        }
        if (!validateEmail(email)) {
            setErrorText('Please provide a valid email address');
            setEmailError(true);
            return false;
        }

        return true;
    };

    return (
        <div className="grid h-full w-full grid-rows-[1fr_auto] gap-8">
            <div className="grid grid-cols-1 grid-rows-[6rem_6rem_6rem] gap-16">
                <TextField
                    value={name}
                    type="text"
                    id="request-callback-form-name"
                    placeholder="Your Name"
                    important
                    error={nameError}
                    errorText={errorText}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError(false);
                    }}
                    onClearValue={() => {
                        setName('');
                    }}
                    randomID={clonedElement == true ? false : true}
                />
                <TextField
                    value={phone}
                    type="text"
                    id="request-callback-form-number"
                    placeholder="Phone Number"
                    important
                    error={phoneError}
                    errorText={errorText}
                    onChange={handlePhoneInput}
                    onClearValue={() => {
                        setPhone('');
                    }}
                    randomID={clonedElement == true ? false : true}
                />
                <TextField
                    type="text"
                    value={email}
                    id="request-callback-form-email"
                    placeholder="Email Address"
                    important
                    error={emailError}
                    errorText={errorText}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                        checkInputsForNextStepActivation(stepperIndex || 0, e.target.value);
                    }}
                    onClearValue={() => {
                        setEmail('');
                    }}
                    randomID={clonedElement == true ? false : true}
                />
            </div>

            <Button
                type="button"
                text="Next"
                iconPosition="right"
                icon={<FaAngleRight className="relative top-[0.1rem] h-7 w-7" />}
                className="gap-2 justify-self-end"
                mockDisabled={!shouldActivateNextStep}
                onClick={() => {
                    if (typeof activateNextStepper == 'function') {
                        showInputErrors().then((res) => res && activateNextStepper());
                    }
                }}
            />
        </div>
    );
};

export default PersonalInfo;
