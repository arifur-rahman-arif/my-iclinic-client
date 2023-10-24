import Button from '@/components/Buttons/Button';
import { TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useBusinessInfoSubmitMutation } from '@/services/businessInfo';
import {
    formatNumberToInternational,
    formatPhoneNumber,
    getElementTopPosition,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { ContactContext, ContactCtx } from '../Context';

/**
 * Form component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Form = (): JSX.Element => {
    const dispatch = useDispatch();
    const [submitForm, response] = useBusinessInfoSubmitMutation();

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

        submitForm(payload);
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
                scrollStepperIntoView();
                appCtx.setFormSubmitted(true);
                resetForm();
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
        <form className="grid grid-rows-[6rem,_6rem,_6rem,_6rem,_17rem,_auto] gap-14" onSubmit={formSubmit}>
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

            <Button
                type="submit"
                text="Send message"
                className="group/button justify-self-end !border-heading2 !bg-brand !font-mulishBold !text-[1.6rem] !leading-[2.4rem] text-white hover:!bg-transparent hover:text-brand md:mt-12"
                loading={response.isLoading}
                loadingIconPosition="right"
                icon={
                    <BiRightArrowAlt className="h-9 w-9 translate-y-[0.1rem] fill-white transition-all duration-500 group-hover/button:fill-brand" />
                }
                iconPosition="right"
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
                    borderRadius: 'var(--border-radius)',
                    height: '100%'
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: '1px solid var(--color-secondary) !important'
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
            <InputLabel id="finding-options-label" className="!ml-6 !font-latoMedium !text-[1.6rem] !text-secondary">
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
                className={`pointer-events-none absolute left-4 bottom-0 text-[1.4rem] text-red-500 transition-all duration-500 ${
                    optionsError ? 'translate-y-10' : '-translate-y-[50%] scale-50 opacity-0'
                }`}
            >
                {optionsError}
            </span>
        </FormControl>
    );
};

export default Form;
