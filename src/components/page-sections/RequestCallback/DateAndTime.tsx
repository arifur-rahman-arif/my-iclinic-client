import { Button2 } from '@/components/Buttons';
import { TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useRequestCallbackSubmitMutation } from '@/services/requestCallback';

import {
    formatNumberToInternational,
    getTheDayName,
    getTheMonthName,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import styles from './styles/DateAndTime.module.scss';

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
    const dispatch = useDispatch();
    const [submitForm, response] = useRequestCallbackSubmitMutation();

    // Date and time components inputs
    const today = new Date();
    // Set the date one day ahead of the current date
    today.setDate(today.getDate() + 1);

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
        //
        // if (!dateDifferenceInDays(new Date(), date)) {
        //     dispatch(
        //         handleAlert({
        //             showAlert: true,
        //             alertType: 'error',
        //             alertMessage: 'Please select one day ahead of the current date',
        //             timeout: 4000
        //         })
        //     );
        //     return;
        // }

        if (!optionalMessage) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please leave us a message about your request',
                    timeout: 4000
                })
            );
            return;
        }

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

        submitForm(payload);
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
                    important
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
                <Image src="/images/section-images/phone-call.png" alt="" width={52} height={52} />
                <span className="font-mulishBold text-[1.4rem] leading-8 text-heading">We will call you on</span>
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    {getTheDayName(date.getDay())} / {date.getDate()} {getTheMonthName(date.getMonth())} /{' '}
                    {date.getFullYear()}
                </span>
            </div>

            <Button2
                type="submit"
                text="Submit"
                iconPosition="right"
                className="next-button mr-1 gap-2 justify-self-end sm:mr-0"
                loading={response.isLoading}
                loadingIconPosition="right"
                onClick={formSubmit}
            />
        </div>
    );
};

export default DateAndTime;
