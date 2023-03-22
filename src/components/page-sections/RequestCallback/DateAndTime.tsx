import { Button } from '@/components/Button';
import { TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useRequestCallbackSubmitMutation } from '@/services/requestCallback';

import {
    dateDifferenceInDays,
    formatNumberToInternational,
    getTheDayName,
    getTheMonthName,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
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
    checkInputsForNextStepActivation: (arg: number, arg2: string) => void;
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
                checkInputsForNextStepActivation(stepperIndex || 0, email);

                if (typeof activateNextStepper == 'function') activateNextStepper();

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

        if (!dateDifferenceInDays(new Date(), date)) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please select one day ahead of the current date',
                    timeout: 4000
                })
            );
            return;
        }

        if (!optionalMessage) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please leave a comment related to your request',
                    timeout: 4000
                })
            );
            return;
        }

        const payload = {
            name,
            phone: internationalPhoneNumber,
            email,
            date: date.toDateString(),
            dateOriginal: `${date}`,
            optionalMessage
        };

        submitForm(payload);
    };

    return (
        <div className={`${styles.calendar} grid h-full w-full grid-rows-[1fr_auto_auto] gap-12`}>
            <div className="w-full overflow-x-auto sm:overflow-x-visible" id="react-calendar">
                {indicatorActive === true ? (
                    <Calendar
                        className="calender max-h-[26.5rem] overflow-x-auto overflow-y-auto"
                        onChange={(dateValue) => {
                            setDate(dateValue);
                        }}
                        value={date}
                        minDate={today}
                        tileDisabled={({ date, view }) => {
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

            <div className="grid grid-cols-1 gap-4">
                <h4 className="normal-case">Your Booking:</h4>
                <div className="flex flex-wrap gap-4">
                    <span>{date.getFullYear()}</span>
                    <span>
                        {getTheDayName(date.getDay())} {getTheMonthName(date.getMonth())} {date.getDate()}
                    </span>
                </div>
            </div>

            <Button
                type="submit"
                text="Submit"
                iconPosition="right"
                className="mr-1 gap-2 justify-self-end sm:mr-0"
                loading={response.isLoading}
                loadingIconPosition="right"
                onClick={formSubmit}
            />
        </div>
    );
};

export default DateAndTime;
