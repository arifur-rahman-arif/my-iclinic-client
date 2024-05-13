import { Button2 } from '@/components/Buttons';
import { TextField } from '@/components/Inputs';
import {
    formatNumberToInternational,
    formatPhoneNumber,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useSWRMutation from 'swr/mutation';
import { RadioButton } from '@/components/Inputs/RadioButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    let defaultReason = 'other';

    if (
        router.pathname === '/relex-smile-london' ||
        router.pathname === '/presbyond-london' ||
        router.pathname === '/lasik-london' ||
        router.pathname === '/lasek-prk' ||
        router.pathname === '/laser-eye-surgery'
    ) {
        defaultReason = 'laser-eye-surgery';
    }

    if (router.pathname === '/icl') {
        defaultReason = 'icl';
    }

    if (
        router.pathname === '/cataract' ||
        router.pathname === '/cataract/premium-lenses' ||
        router.pathname === '/cataract/yag-capsulotomy-for-pco'
    ) {
        defaultReason = 'cataract';
    }

    const [checkedReason, setCheckedReason] = useState(defaultReason); // Set initial checked reason
    const consultationReasons = [
        {
            name: 'Cataract',
            value: 'cataract',
            active: true
        },
        {
            name: 'ICL',
            value: 'icl',
            active: false
        },
        {
            name: 'Laser eye surgery',
            value: 'laser-eye-surgery',
            active: false
        },
        {
            name: 'Other',
            value: 'other',
            active: false
        }
    ];

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

        if (!checkedReason) {
            alert('Please provide consultation reason');
            return;
        }

        const internationalPhoneNumber = await formatNumberToInternational(phone);

        const consultationReason = consultationReasons.find((val) => val.value === checkedReason)?.name;

        const payload = {
            name,
            phone: internationalPhoneNumber,
            email,
            consultationReason
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

    /**
     * Handle checkbox change event by updating the active state of consultation reasons.
     * @param {string} value - The name of the consultation reason that has been changed.
     * @returns {void}
     */
    const handleCheckboxChange = (value: string): void => {
        setCheckedReason(value); // Update the checked reason
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

            <div className="grid gap-6">
                <span className="font-mulishBold text-heading">
                    Reason for consultation <span className="text-[#D90E01]">*</span>
                </span>
                <div className="flex flex-wrap items-center justify-start gap-6">
                    {consultationReasons.map((reason, key) => (
                        <RadioButton
                            key={key}
                            label={reason.name}
                            onChange={(e) => handleCheckboxChange(e.currentTarget.value)}
                            checked={reason.value === checkedReason}
                            value={reason.value}
                            labelClassName="!text-[#60666C] !text-[1.4rem] !leading-8"
                            rounded={false}
                            checkboxClassName="!w-[1.6rem] !h-[1.6rem] !rounded-[0.4rem] [&_svg]:w-4 !border-[#C1C7CD] bg-[#F3F3F3]"
                            className="!gap-3"
                        />
                    ))}
                </div>

                <p className="mt-6 text-[1.4rem] leading-8 text-[#8E9398]">
                    By submitting this form, you agree to the terms of our{' '}
                    <Link
                        href="/privacy-policies"
                        target="_blank"
                        className="text-[1.4rem] leading-8 text-[#0099FF] decoration-[#0099FF] underline-offset-4 hover:underline"
                    >
                        privacy policy.
                    </Link>{' '}
                    Your personal data is secure with us.
                </p>
            </div>

            <span className="-mb-4 mt-6 justify-self-start font-mulishBold text-[1.4rem] leading-8">
                15-minute free consultation
            </span>
            <Button2
                type="button"
                text={buttonText || 'Book my consultation'}
                className={twMerge('next-button group/next-button gap-2 justify-self-start', buttonClassName)}
                mockDisabled={!(name && phone && email)}
                loading={isMutating}
                loadingIconPosition="right"
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
