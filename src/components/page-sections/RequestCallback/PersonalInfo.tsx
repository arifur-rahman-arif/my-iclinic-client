import { Button2 } from '@/components/Buttons';
import { TextField } from '@/components/Inputs';
import {
    formatNumberToInternational,
    formatPhoneNumber,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import useSWRMutation from 'swr/mutation';

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
    checkInputsForNextStepActivation: (arg: number, arg2: { name: string; phone: string; email: string }) => void;
    clonedElement?: boolean;

    setFormSubmitted: Dispatch<SetStateAction<boolean>>;
    buttonClassName?: string;
    buttonText?: string;
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
    activateNextStepper,
    checkInputsForNextStepActivation,
    clonedElement,
    setFormSubmitted,
    buttonClassName,
    buttonText
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
            formatPhoneNumber(value).then((res) => {
                setPhone(res);
                checkInputsForNextStepActivation(stepperIndex || 0, {
                    name,
                    phone: res,
                    email
                });
            });
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

    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     * @param {object} payload - The payload object containing the data to be sent.
     * @param {any} payload.arg - The argument to be included in the payload.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const sendData = async (url: string, { arg }: { arg: any }): Promise<any> => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(arg)
            });
            return await res.json();
        } catch (err) {
            throw err;
        }
    };

    // SWR mutation hook to handle form data submission
    const { trigger, isMutating } = useSWRMutation(`/api/request-callback`, sendData);

    /**
     * Reset the form to its initial state
     */
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
    };

    /**
     * Submit the request callback form
     * @returns {*}  {*}
     */
    const formSubmit = async (): Promise<any> => {
        if (!name) {
            alert('Please provide your name');
            return;
        }

        if (!phone) {
            alert('Please provide your phone');
            return;
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            alert('Please provide a valid phone number');
            return;
        }

        if (!email) {
            alert('Please provide your email');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please provide a valid email address');
            return;
        }

        const internationalPhoneNumber = await formatNumberToInternational(phone);
        const payload = {
            name,
            phone: internationalPhoneNumber,
            email
        };

        try {
            // Trigger the mutation and get the result
            const result = await trigger(payload);

            // Handle the response from the server
            if (!result?.success) {
                alert(result?.data?.message || 'Form submission failed');
            }

            if (result?.success) {
                checkInputsForNextStepActivation(stepperIndex || 0, {
                    name,
                    phone,
                    email
                });

                if (typeof activateNextStepper == 'function') activateNextStepper();

                resetForm();

                setFormSubmitted(true);
            }
        } catch (e) {
            alert((e as any).message || 'Something went wrong');
            console.error(e);
        }
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
                        const currentValue = e.target.value;
                        setName(currentValue);
                        setNameError('');
                        checkInputsForNextStepActivation(stepperIndex || 0, {
                            name: currentValue,
                            phone,
                            email
                        });
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
                        const currentValue = e.target.value;
                        setEmail(currentValue);
                        setEmailError('');
                        checkInputsForNextStepActivation(stepperIndex || 0, {
                            name,
                            phone,
                            email: currentValue
                        });
                    }}
                    onClearValue={() => {
                        setEmail('');
                    }}
                    randomID={clonedElement != true}
                />
            </div>

            <Button2
                type="button"
                text={buttonText || 'Next'}
                iconPosition="right"
                icon={
                    <FaAngleRight className="relative top-[0.1rem] h-7 w-7 fill-white transition-all duration-500 group-hover/next-button:fill-brand" />
                }
                className={twMerge('next-button group/next-button gap-2 justify-self-end', buttonClassName)}
                mockDisabled={!(name && phone && email)}
                loading={isMutating}
                onClick={() => {
                    if (typeof activateNextStepper == 'function') {
                        showInputErrors().then((res) => {
                            if (res) {
                                formSubmit();
                                // If id is not already set to local storage then save the data
                                // if (!localStorage.getItem('callback-id')) handleSubmit();
                            }
                        });
                    }
                }}
            />
        </div>
    );
};

export default PersonalInfo;
