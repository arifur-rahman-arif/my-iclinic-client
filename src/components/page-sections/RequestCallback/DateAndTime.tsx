import { Button2 } from '@/components/Buttons';
import { TextField } from '@/components/Inputs';

import {
    formatNumberToInternational,
    getTheDayName,
    getTheMonthName,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './styles/DateAndTime.module.scss';
import useSWRMutation from 'swr/mutation';

const Calendar = dynamic(() => import('react-calendar'));

interface DateAndTimeInterface {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    optionalMessage: string;
    setOptionalMessage: Dispatch<SetStateAction<string>>;
    setFormSubmitted: Dispatch<SetStateAction<boolean>>;
    activateNextStepper?: () => void;
    stepperIndex?: number;
    checkInputsForNextStepActivation: (arg: number, arg2: { name: string; phone: string; email: string }) => void;
    clonedElement?: boolean;
    indicatorActive?: boolean;
}

/**
 * Date and time step
 *
 * @param {DateAndTimeInterface} { date, setDate, name, phone, email }
 * @returns {*}
 */
const DateAndTime = ({
    date,
    setDate,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    optionalMessage,
    setOptionalMessage,
    setFormSubmitted,
    activateNextStepper,
    stepperIndex,
    checkInputsForNextStepActivation,
    clonedElement,
    indicatorActive
}: DateAndTimeInterface) => {
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

    // Date and time components inputs
    const today = new Date();
    // Set the date one day ahead of the current date
    today.setDate(today.getDate() + 1);

    /**
     * Reset the form to its initial state
     */
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setOptionalMessage('');
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

        const postId = localStorage.getItem('callback-id');

        const payload = {
            name,
            phone: internationalPhoneNumber,
            email,
            date: date.toDateString(),
            dateOriginal: `${date}`,
            optionalMessage,
            postId
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

                localStorage.removeItem('callback-id');

                resetForm();

                setFormSubmitted(true);
            }
        } catch (e) {
            alert((e as any).message || 'Something went wrong');
            console.error(e);
        }
    };

    return (
        <div className={`${styles.calendar} grid h-full w-full grid-rows-[1fr_auto_auto] gap-12`}>
            <div className="w-full overflow-x-auto sm:overflow-x-visible" id="react-calendar">
                {indicatorActive === true ? (
                    <Calendar
                        className="calender max-h-[26.5rem] overflow-x-auto overflow-y-auto"
                        onChange={(dateValue: Date) => {
                            setDate(dateValue);
                        }}
                        value={date}
                        minDate={today}
                        tileDisabled={({ date }: { date: Date }) => {
                            // Disable weekends
                            return date.getDay() === 6 || date.getDay() === 0;
                        }}
                    />
                ) : (
                    <div className="min-h-[26.4rem] w-full"></div>
                )}
            </div>

            <div className="min-h-[12rem] w-full">
                <TextField
                    value={optionalMessage}
                    type="textarea"
                    id="request-callback-form-message"
                    placeholder="Your message"
                    onChange={(e) => {
                        setOptionalMessage(e.target.value);
                    }}
                    onClearValue={() => {
                        setOptionalMessage('');
                    }}
                    randomID={clonedElement != true}
                />
            </div>

            {/* <div className="grid grid-cols-1 gap-4"> */}
            {/*     <h4 className="normal-case">Your Booking:</h4> */}
            {/*     <div className="flex flex-wrap gap-4"> */}
            {/*         <span>{date.getFullYear()}</span> */}
            {/*         <span> */}
            {/*             {getTheDayName(date.getDay())} {getTheMonthName(date.getMonth())} {date.getDate()} */}
            {/*         </span> */}
            {/*     </div> */}
            {/* </div> */}

            <div className="grid grid-cols-1 place-items-center content-start gap-4">
                <Image src="/images/section-images/phone-call.webp" alt="" width={52} height={52} />
                <span className="font-mulishBold text-[1.4rem] leading-8 text-heading">We will call you on</span>
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    {getTheDayName(date.getDay())} / {date.getDate()} {getTheMonthName(date.getMonth())} /{' '}
                    {date.getFullYear()}
                </span>
            </div>

            <Button2
                type="button"
                text="Submit"
                iconPosition="right"
                className="next-button mr-1 gap-2 justify-self-end sm:mr-0"
                loading={isMutating}
                loadingIconPosition="right"
                onClick={formSubmit}
            />
        </div>
    );
};

export default DateAndTime;
