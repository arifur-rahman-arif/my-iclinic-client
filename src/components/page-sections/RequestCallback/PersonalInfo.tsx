import { Button2 } from '@/components/Buttons';
import { TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useAbandonedCallbackMutation } from '@/services/abandoned-cb';
import {
    formatNumberToInternational,
    formatPhoneNumber,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

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
    clonedElement
}: PersonalInfoInterface): JSX.Element => {
    const dispatch = useDispatch();
    const [submitForm, response] = useAbandonedCallbackMutation();

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
     * Submit the request callback form
     */
    const handleSubmit = async () => {
        if (!name) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your name',
                    timeout: 4000
                })
            );
            return;
        }

        if (!phone) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your phone',
                    timeout: 4000
                })
            );
            return;
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide a valid phone number',
                    timeout: 4000
                })
            );
            return;
        }

        if (!email) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your email',
                    timeout: 4000
                })
            );
            return;
        }

        if (!validateEmail(email)) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide a valid email address',
                    timeout: 4000
                })
            );
            return;
        }

        const internationalPhoneNumber = await formatNumberToInternational(phone);

        const payload = {
            name,
            phone: internationalPhoneNumber,
            email
        };

        submitForm(payload);
    };

    useEffect(() => {
        try {
            // If it's a fetch error
            if (response?.isError && (response.error as any).status === 'FETCH_ERROR') {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: (response.error as any)?.data.message || 'Something went wrong. Please try again'
                    })
                );

                return;
            }

            if (response.isError) {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: (response.error as any)?.data.message || 'Something went wrong. Please try again'
                    })
                );
                return;
            }

            if (response.isSuccess) {
                const postId = (response?.data as any)?.data?.data;
                Number.isInteger(postId) && localStorage.setItem(`callback-id`, postId);
            }
        } catch (err: any) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: err.message || 'Something went wrong. Please try again'
                })
            );
        }
    }, [response, dispatch]);

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
                text="Next"
                iconPosition="right"
                icon={
                    <FaAngleRight className="relative top-[0.1rem] h-7 w-7 fill-white transition-all duration-500 group-hover/next-button:fill-brand" />
                }
                className="next-button group/next-button gap-2 justify-self-end"
                mockDisabled={!(name && phone && email)}
                onClick={() => {
                    if (typeof activateNextStepper == 'function') {
                        showInputErrors().then((res) => {
                            if (res) {
                                activateNextStepper();

                                // If id is not already set to local storage then save the data
                                if (!localStorage.getItem('callback-id')) handleSubmit();
                            }
                        });
                    }
                }}
            />
        </div>
    );
};

export default PersonalInfo;
