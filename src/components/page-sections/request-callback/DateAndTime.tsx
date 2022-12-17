import 'react-calendar/dist/Calendar.css';
import styles from './styles/DateAndTime.module.scss';

import {
    formatNumberToInternational,
    getTheDayName,
    getTheMonthName,
    validateEmail,
    validatePhoneNumber
} from '@/utils/miscellaneous';
import { Dispatch, SetStateAction, useEffect } from 'react';

import { Button } from '@/components/button';
import { TextField } from '@/components/inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useRequestCallbackSubmitMutation } from '@/services/requestCallback';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';

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
    clonedElement
}: DateAndTimeInterface) => {
    const dispatch = useDispatch();
    const [submitForm, response] = useRequestCallbackSubmitMutation();

    useEffect(() => {
        try {
            // If it's a fetch error
            if (response?.isError && (response.error as any).status === 'FETCH_ERROR') {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: (response.error as any).error
                    })
                );

                return;
            }

            if (response.isError) {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: (response.error as any)?.data.data.message
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
                    alertMessage: err.message
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
        setDate(new Date());
    };

    /**
     * Submit the request callback form
     * @returns {*}  {*}
     */
    const formSubmit = async (): Promise<any> => {
        if (!name) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your name',
                    timeout: 4000
                })
            );
        }

        if (!email) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your email',
                    timeout: 4000
                })
            );
        }

        if (!phone) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide your phone',
                    timeout: 4000
                })
            );
        }

        const numberValid = await validatePhoneNumber(phone);

        if (!numberValid) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide a valid phone number',
                    timeout: 4000
                })
            );
        }

        if (!validateEmail(email)) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Please provide a valid email address',
                    timeout: 4000
                })
            );
        }

        const internationalPhoneNumber = await formatNumberToInternational(phone);

        const payload = {
            name,
            phone: internationalPhoneNumber,
            email,
            date: date.toDateString(),
            optionalMessage
        };

        submitForm(payload);
    };

    return (
        <div className={`${styles.calendar} grid h-full w-full grid-rows-[1fr_auto_auto] gap-12`}>
            <div className="w-full overflow-x-auto sm:overflow-x-visible" id="react-calendar">
                <Calendar
                    className="calender max-h-[26.5rem] min-w-[35.5rem] overflow-x-auto overflow-y-auto"
                    onChange={setDate}
                    value={date}
                />
            </div>

            <div className="min-h-[12rem] w-full">
                <TextField
                    value={optionalMessage}
                    type="textarea"
                    id="request-callback-form-message"
                    placeholder="Your message (Optional)"
                    onChange={(e) => {
                        setOptionalMessage(e.target.value);
                    }}
                    onClearValue={() => {
                        setOptionalMessage('');
                    }}
                    randomID={clonedElement == true ? false : true}
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
