import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { TextField } from '@/components/Inputs';
import { Section } from '@/components/Section';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import dynamic from 'next/dynamic';

const LottieComponent = dynamic(() => import('@/page-sections/ContactSection/ContactForm/LottieComponent'));

interface Props {
    heading: string;
    introduction: string;
    description: string;
}

/**
 * Component for rendering the section inviting users to join the fight against AMR (Antimicrobial Resistance).
 *
 * @param {Object} Props - Props object containing the following properties:
 *   @param {string} heading - The heading for the section.
 *   @param {string} introduction - The introduction text for the section.
 *   @param {string} description - The description text for the section.
 *
 * @returns {JSX.Element} - JSX element representing the section inviting users to join the fight against AMR.
 */
const JoinTheFight = ({ heading, introduction, description }: Props): JSX.Element => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <Section id="join-fight-against-amr">
            <Container className="grid justify-items-center gap-12">
                <div className="grid content-start gap-2">
                    <h2 className="text-center normal-case">{heading}</h2>
                    <strong className="text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">
                        {introduction}
                    </strong>
                    <p className="max-w-[62rem] text-center" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>

                {formSubmitted ? <ThankYou /> : <Form setFormSubmitted={setFormSubmitted} />}
            </Container>
        </Section>
    );
};

interface Payload {
    name: string;
    email: string;
}

interface FormProps {
    setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

/**
 * Component for rendering a form to collect user data and submit it to a specified URL.
 *
 * @param {Object} FormProps - Props object containing the following properties:
 *   @param {Function} setFormSubmitted - Function to set the form submission status.
 *
 * @returns {JSX.Element} - JSX element representing the form.
 */
const Form = ({ setFormSubmitted }: FormProps): JSX.Element => {
    // const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     * @param {object} payload - The payload object containing the data to be sent.
     * @param {any} payload.arg - The argument to be included in the payload.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const sendData = async (url: string, { arg }: { arg: Payload }): Promise<any> => {
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
    const { trigger, isMutating } = useSWRMutation(`/api/charity-form`, sendData);

    /**
     * Validate the input fields of the form
     *
     * @returns {*}  {Promise<boolean>}
     */
    const showInputErrors = (): boolean => {
        let formValid = true;
        if (!name) {
            setNameError('Please provide your name');
            formValid = false;
        }

        if (!email) {
            setEmailError('Please provide your email');
            formValid = false;
        }

        return formValid;
    };

    /**
     * Handles form submission event.
     *
     * @param {FormEvent} e - The form submission event.
     *
     * @returns {void}
     */
    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!showInputErrors()) return;

        try {
            const payload = {
                name,
                email
            };
            // Trigger the mutation and get the result
            const result = await trigger(payload);

            // Handle the response from the server
            if (!result?.success) {
                alert(result?.data?.message || 'Form submission failed');
            }

            if (result?.success) {
                setFormSubmitted(true);
            }
        } catch (e) {
            alert((e as any).message || 'Something went wrong');
            console.error(e);
        }
    };

    return (
        <form className="grid w-full justify-items-center gap-12 sm:max-w-[38.3rem]" onSubmit={handleFormSubmit}>
            <TextField
                value={name}
                type="text"
                id="name"
                placeholder="Your name"
                important
                errorText={nameError}
                className="!rounded-[0.5rem]"
                onChange={(e) => {
                    const currentValue = e.target.value;
                    setName(currentValue);
                    setNameError('');
                }}
                onClearValue={() => {
                    setName('');
                }}
            />

            <TextField
                value={email}
                type="email"
                id="email"
                placeholder="Your email"
                important
                errorText={emailError}
                className="!rounded-[0.5rem]"
                onChange={(e) => {
                    const currentValue = e.target.value;
                    setEmail(currentValue);
                    setEmailError('');
                }}
                onClearValue={() => {
                    setEmail('');
                }}
            />

            <Button2
                type="submit"
                text="Submit"
                loading={isMutating}
                loadingIconPosition="right"
                className="next-button group/next-button gap-2"
                mockDisabled={!(name && email)}
            />
        </form>
    );
};

/**
 * Component for rendering a thank you message after form submission.
 *
 * @returns {JSX.Element} - JSX element representing the thank you message.
 */
const ThankYou = (): JSX.Element => {
    const [componentRendered, setComponentRendered] = useState<boolean>(false);

    useEffect(() => {
        setComponentRendered(true);
    }, []);

    return (
        <div className="mt-12 grid grid-cols-1 place-items-center content-start gap-8" id="charity-form-submitted">
            {componentRendered && <LottieComponent />}

            <div className="-mt-16 flex w-full flex-col items-center justify-start gap-2">
                <span
                    className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading"
                    id="request-callback-thank-you"
                >
                    Thank You
                </span>
                <p className="max-w-[45rem] text-center font-mulishMedium text-[1.6rem] leading-[2.4rem] text-[#35444B]">
                    Thank you for joining our charity family! Your support means the world to us, and we're excited to
                    keep you updated on how your contributions are making a difference.
                </p>
            </div>
        </div>
    );
};

export default JoinTheFight;
