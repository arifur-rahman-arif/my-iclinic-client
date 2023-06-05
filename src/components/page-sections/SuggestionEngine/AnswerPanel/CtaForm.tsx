import { TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { Context, SuggestionEngineContext } from '@/page-sections/SuggestionEngine/Context';
import { useSubmitSuggestionMutation } from '@/services/suggestionRequest';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/utils/miscellaneous';
import Image from 'next/image';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface CtaFormProps {
    node: number;
}

/**
 * A component representing a form for capturing user information.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CtaForm = ({ node }: CtaFormProps): JSX.Element => {
    const ctx: SuggestionEngineContext = useContext(Context);
    const dispatch = useDispatch();
    const [submitForm, response] = useSubmitSuggestionMutation();

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [typingTimer, setTypingTimer] = useState<any>();

    const [nameError, setNameError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    /**
     * Validate the input fields of the form
     *
     * @returns {*}  {Promise<boolean>}
     */
    const showInputErrors = async (): Promise<boolean> => {
        if (!name) {
            setNameError('Please provide your name');
            return true;
        }
        if (!phone) {
            setPhoneError('Please provide your phone');
            return true;
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            setPhoneError('Please provide a valid phone number');
            return true;
        }

        if (!email) {
            setEmailError('Please provide your email');
            return true;
        }
        if (!validateEmail(email)) {
            setEmailError('Please provide a valid email address');
            return true;
        }

        if (!ctx.questions) {
            setEmailError('There are no questions selected to submit');
            return true;
        }

        return false;
    };

    /**
     * Reset the form to its initial state
     */
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
    };

    /**
     * Submit the form
     * @returns {Promise<any>}
     */
    const formSubmit = async (): Promise<any> => {
        // const formError = await showInputErrors();
        //
        //
        // if (formError) return;
        //
        // const payload = {
        //     name,
        //     phone,
        //     email,
        //     questions: ctx.questions
        // };
        //
        // submitForm(payload);

        if (node === 14) {
            ctx.setCompletedStep((ctx.completedStep += 2));
        } else {
            ctx.setCompletedStep((ctx.completedStep += 1));
        }

        const nextNode = ctx.routes[node].nextNode;
        if (!nextNode) return;
        ctx.navigateToStep(nextNode);
    };

    /**
     * Handle the phone input for onchange event
     *
     * @param {ChangeEvent<HTMLInputElement>} e
     */
    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value as string;
        setPhone(value);
        setPhoneError('');
        clearTimeout(typingTimer);

        const timeoutID = setTimeout(() => {
            formatPhoneNumber(value).then((res) => {
                setPhone(res);
            });
        }, 1000);

        setTypingTimer(timeoutID);
    };

    useEffect(() => {
        try {
            // If it's a fetch error
            if (response?.isError && (response.error as any).status === 'FETCH_ERROR') {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: (response.error as any)?.data.message || 'Unable to submit the form'
                    })
                );
                console.log(response.error);
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
                console.log(response.error);
                return;
            }

            if (response.isSuccess) {
                resetForm();

                // Go to the next route
                // if current node is 14 then increase the step by 2 as this route has only 4 routes
                if (node === 14) {
                    ctx.setCompletedStep((ctx.completedStep += 2));
                } else {
                    ctx.setCompletedStep((ctx.completedStep += 1));
                }

                const nextNode = ctx.routes[node].nextNode;
                if (!nextNode) return;
                ctx.navigateToStep(nextNode);
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
        <form
            className="grid w-full max-w-[40rem] grid-rows-[6rem_6rem_6rem_auto] gap-[4.5rem] justify-self-center"
            onSubmit={(e) => {
                e.preventDefault();
                formSubmit();
            }}
        >
            <TextField
                value={name}
                type="text"
                placeholder="Your Name"
                important
                onChange={(e) => {
                    setName(e.target.value);
                    setNameError('');
                }}
                onClearValue={() => setName('')}
                errorText={nameError}
            />

            <TextField
                value={phone}
                type="text"
                placeholder="Phone number"
                important
                onChange={handlePhoneInput}
                onClearValue={() => {}}
                errorText={phoneError}
            />

            <TextField
                value={email}
                type="text"
                placeholder="Email"
                important
                onChange={(e) => {
                    setEmail(e.target.value);
                    setNameError('');
                }}
                onClearValue={() => setEmail('')}
                errorText={emailError}
            />

            <button
                type="submit"
                className="flex items-center justify-center gap-6 rounded-primary border-2 border-heading2 bg-heading2 py-5 px-20 font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 hover:border-white hover:bg-transparent"
            >
                {response.isLoading ? (
                    <>
                        Sending
                        <Image
                            src="/images/icons/icon-loader-white.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="relative top-[0.1rem] h-8 w-8"
                        />
                    </>
                ) : (
                    <>
                        Send
                        <Image src="/images/icons/icon-send-white.svg" alt="" width={20} height={20} />
                    </>
                )}
            </button>
        </form>
    );
};

export default CtaForm;
