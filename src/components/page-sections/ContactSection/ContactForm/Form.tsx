import { TextField } from '@/components/Inputs';
import {
    formatNumberToInternational,
    formatPhoneNumber,
    getElementTopPosition,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ContactContext, ContactCtx } from '../Context';
import { Button2 } from '@/components/Buttons';
import useSWRMutation from 'swr/mutation';

/**
 * Form component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Form = (): JSX.Element => {
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
    const { trigger, isMutating } = useSWRMutation(`/api/business-form`, sendData);

    const appCtx: ContactContext | null = useContext(ContactCtx);

    const [nameError, setNameError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [optionsError, setOptionsError] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

    const [typingTimer, setTypingTimer] = useState<any>();

    /**
     * Show the error messages while input is empty
     *
     * @returns {Promise<boolean>}
     */
    const showInputErrors = async (): Promise<boolean> => {
        if (!appCtx.name) {
            setNameError('Please provide your name');
            return true;
        }

        if (!appCtx.email) {
            setEmailError('Please provide your email');
            return true;
        }

        if (!validateEmail(appCtx.email)) {
            setEmailError('Please provide a valid email address');
            return true;
        }

        if (!appCtx.phone) {
            setPhoneError('Please provide your phone');
            return true;
        }

        const numberValid = await validatePhoneNumber(appCtx.phone);

        if (!numberValid) {
            setPhoneError('Please provide a valid phone number');
            return true;
        }

        if (!appCtx.findingOption) {
            setOptionsError('Please select an option');
            return true;
        }

        if (!appCtx.message) {
            setMessageError('Please leave us a message about your request');
            return true;
        }

        return false;
    };

    /**
     * Submit the form
     * @param {any} e
     * @returns {Promise<void>}
     */
    const formSubmit = async (e: any) => {
        e.preventDefault();

        const isError = await showInputErrors();

        if (isError) return;

        const internationalPhoneNumber = await formatNumberToInternational(appCtx.phone);

        const payload = {
            email: appCtx.email,
            name: appCtx?.name,
            phone: internationalPhoneNumber,
            findingOption: appCtx.findingOption,
            message: appCtx?.message
        };

        try {
            // Trigger the mutation and get the result
            const result = await trigger(payload);

            // Handle the response from the server
            if (!result?.success) {
                alert(result?.data?.message || 'Form submission failed');
            }

            if (result?.success) {
                scrollStepperIntoView();
                appCtx.setFormSubmitted(true);
                resetForm();
            }
        } catch (e) {
            alert((e as any).message || 'Something went wrong');
            console.error(e);
        }
    };

    /**
     * Reset the form to its initial state
     */
    const resetForm = () => {
        appCtx.setName('');
        appCtx.setEmail('');
        appCtx.setPhone('');
        appCtx.setMessage('');
    };

    /**
     * Set the position of the thank you page to user screen view
     */
    const scrollStepperIntoView = () => {
        const targetedElement = document.querySelector('.contact-form');
        window.scrollTo(0, getElementTopPosition(targetedElement as HTMLElement) - 200);
    };

    return (
        <form className="grid grid-rows-[6rem,_6rem,_6rem,_6rem,_27rem,_auto] gap-14" onSubmit={formSubmit}>
            <TextField
                value={appCtx.name}
                type="text"
                id="contact-form-name"
                placeholder="Your Name"
                important
                errorText={nameError}
                onChange={(e) => {
                    appCtx?.setName(e.target.value);
                    setNameError('');
                }}
                onClearValue={() => {
                    appCtx?.setName('');
                }}
            />

            <TextField
                type="text"
                value={appCtx.email}
                id="contact-form-email"
                important
                placeholder="Email Address"
                errorText={emailError}
                onChange={(e) => {
                    appCtx?.setEmail(e.target.value);
                    setEmailError('');
                }}
                onClearValue={() => {
                    appCtx?.setEmail('');
                }}
            />

            <TextField
                value={appCtx.phone}
                type="text"
                id="contact-form-form-number"
                important
                placeholder="Your mobile"
                errorText={phoneError}
                onChange={(e) => {
                    const value = e.target.value as string;
                    appCtx?.setPhone(value);

                    clearTimeout(typingTimer);

                    const timeoutID = setTimeout(() => {
                        formatPhoneNumber(value).then((res) => appCtx?.setPhone(res));
                    }, 1000);

                    setTypingTimer(timeoutID);
                    setPhoneError('');
                }}
                onClearValue={() => {
                    appCtx?.setPhone('');
                }}
            />

            <SelectBox setOptionsError={setOptionsError} optionsError={optionsError} />

            <TextField
                value={appCtx.message}
                type="textarea"
                id="contact-form-form-message"
                placeholder="Your message"
                important
                errorText={messageError}
                onChange={(e) => {
                    appCtx?.setMessage(e.target.value);
                    setMessageError('');
                }}
                onClearValue={() => {
                    appCtx?.setMessage('');
                }}
            />

            <Button2
                type="submit"
                text="Send my message"
                className="group/button justify-self-end font-mulishBold"
                loading={isMutating}
                loadingIconPosition="right"
            />
        </form>
    );
};

interface SelectBoxProps {
    optionsError: string;
    setOptionsError: Dispatch<SetStateAction<string>>;
}

/**
 * Select box component
 *
 * @param {string} optionsError
 * @param {Dispatch<SetStateAction<string>>} setOptionsError
 * @returns {JSX.Element}
 * @constructor
 */
const SelectBox = ({ optionsError, setOptionsError }: SelectBoxProps): JSX.Element => {
    const appCtx: ContactContext | null = useContext(ContactCtx);

    /**
     * Handle the input change event
     * @param {SelectChangeEvent} event
     */
    const handleChange = (event: SelectChangeEvent) => {
        setOptionsError('');
        appCtx?.setFindingOption(event.target.value);
    };
    return (
        <FormControl
            sx={{
                minWidth: 120,
                '.MuiInputBase-root': {
                    borderRadius: 'var(--border-radius2)',
                    height: '100%'
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #C3C9D5 !important'
                },
                '.MuiOutlinedInput-notchedOutline legend span': {
                    paddingLeft: '0',
                    paddingRight: '0'
                },
                '.MuiSelect-select': {
                    fontSize: '1.6rem',
                    padding: '2.5rem 1.5rem 1rem 1.5rem'
                }
            }}
        >
            <InputLabel
                id="finding-options-label"
                className="!ml-6 !font-mulishExtraBold !text-[1.4rem] !uppercase !text-heading"
            >
                How did you find us
                <span className="ml-2 scale-110 text-red-600">*</span>
            </InputLabel>
            <Select
                labelId="finding-options-label"
                id="finding-options"
                value={appCtx.findingOption}
                label="How did you find us"
                onChange={handleChange}
            >
                {['Friend', 'Google Ads', 'Search', 'Other'].map((option, key) => (
                    <MenuItem value={option} className="!py-4 !text-[1.6rem] leading-[2.4rem]" key={key}>
                        {option}
                    </MenuItem>
                ))}
            </Select>

            <span
                className={`pointer-events-none absolute bottom-0 left-4 text-[1.4rem] text-red-500 transition-all duration-500 ${
                    optionsError ? 'translate-y-10' : '-translate-y-[50%] scale-50 opacity-0'
                }`}
            >
                {optionsError}
            </span>
        </FormControl>
    );
};

export default Form;
