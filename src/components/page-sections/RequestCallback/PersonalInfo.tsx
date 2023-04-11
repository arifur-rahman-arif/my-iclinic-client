import { Button } from 'src/components/Buttons';
import { TextField } from '@/components/Inputs';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/utils/miscellaneous';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface PersonalInfoInterface {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    nameError: string;
    setNameError: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    phoneError: string;
    setPhoneError: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    emailError: string;
    setEmailError: Dispatch<SetStateAction<string>>;
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
    stepperIndex,
    shouldActivateNextStep,
    activateNextStepper,
    checkInputsForNextStepActivation,
    clonedElement
}: PersonalInfoInterface): JSX.Element => {
    const [typingTimer, setTypingTimer] = useState<any>();

    /**
     * Handle the phone input for onchange event
     *
     * @param {ChangeEvent<HTMLInputElement>} e
     */
    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value as string;
        setPhone(value);
        clearTimeout(typingTimer);

        const timeoutID = setTimeout(() => {
            formatPhoneNumber(value).then((res) => setPhone(res));
        }, 1000);

        setTypingTimer(timeoutID);
    };

    /**
     * Validate the input fields of the form
     *
     * @returns {*}  {Promise<boolean>}
     */
    const showInputErrors = async (): Promise<boolean> => {
        if (!name) {
            setNameError('Please provide your name');
            return false;
        }
        if (!phone) {
            setPhoneError('Please provide your phone');
            return false;
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            setPhoneError('Please provide a valid phone number');
            return false;
        }

        if (!email) {
            setEmailError('Please provide your email');
            return false;
        }
        if (!validateEmail(email)) {
            setEmailError('Please provide a valid email address');
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
                    errorText={nameError}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError('');
                    }}
                    onClearValue={() => {
                        setName('');
                    }}
                    randomID={clonedElement != true}
                />
                <TextField
                    value={phone}
                    type="text"
                    id="request-callback-form-number"
                    placeholder="Phone Number"
                    important
                    errorText={phoneError}
                    onChange={handlePhoneInput}
                    onClearValue={() => {
                        setPhone('');
                        setPhoneError('');
                    }}
                    randomID={clonedElement != true}
                />
                <TextField
                    type="text"
                    value={email}
                    id="request-callback-form-email"
                    placeholder="Email Address"
                    important
                    errorText={emailError}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                        checkInputsForNextStepActivation(stepperIndex || 0, e.target.value);
                    }}
                    onClearValue={() => {
                        setEmail('');
                    }}
                    randomID={clonedElement != true}
                />
            </div>

            <Button
                type="button"
                text="Next"
                iconPosition="right"
                icon={<FaAngleRight className="relative top-[0.1rem] h-7 w-7" />}
                className="next-button gap-2 justify-self-end"
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
