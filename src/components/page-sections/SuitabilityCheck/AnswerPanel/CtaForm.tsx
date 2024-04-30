import { TextField } from '@/components/Inputs';
import { Context, SuggestionEngineContext } from '@/page-sections/SuitabilityCheck/Context';
import { formatPhoneNumber, validateEmail, validatePhoneNumber } from '@/utils/miscellaneous';
import Image from 'next/image';
import { ChangeEvent, useContext, useState } from 'react';
import useSWRMutation from 'swr/mutation';

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
    const { trigger, isMutating } = useSWRMutation(`/api/suggestion-request`, sendData);

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
        const formError = await showInputErrors();

        if (formError) return;

        const payload = {
            name,
            phone,
            email,
            questions: ctx.questions
        };

        try {
            // Trigger the mutation and get the result
            const result = await trigger(payload);

            // Handle the response from the server
            if (!result?.success) {
                alert(result?.data?.message || 'Form submission failed');
            }

            if (result?.success) {
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
        } catch (e) {
            alert((e as any).message || 'Something went wrong');
            console.error(e);
        }

        // if (node === 14) {
        //     ctx.setCompletedStep((ctx.completedStep += 2));
        // } else {
        //     ctx.setCompletedStep((ctx.completedStep += 1));
        // }

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
                className="group/button flex items-center justify-center gap-4 rounded-[0.5rem] border border-[#0099FF] bg-[#0099FF] px-20 py-5 font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 hover:bg-transparent hover:text-[#0099FF]"
            >
                {isMutating ? (
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
                        <svg
                            className="h-8 w-8 translate-y-[0.1rem]"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22 2.5L11 13.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/button:stroke-[#0099FF]"
                            />
                            <path
                                d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/button:stroke-[#0099FF]"
                            />
                        </svg>
                    </>
                )}
            </button>
        </form>
    );
};

export default CtaForm;
