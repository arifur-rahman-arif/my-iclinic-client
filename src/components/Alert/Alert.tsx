import { AlertInterface, closeAlert } from '@/features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { AppState } from '@/store';
import { FiCheckCircle } from 'react-icons/fi';
import { TiWarningOutline } from 'react-icons/ti';
import { alertAnimation } from '@/utils/gsapFunctions';

/**
 * Alert component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const Alert = (): JSX.Element => {
    const dispatch = useDispatch();
    const { showAlert, alertType, alertMessage, timeout } = useSelector(
        (state: AppState) => state.alert as AlertInterface
    );
    const alertRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        alertAnimation(showAlert, alertRef);

        if (!showAlert) return;

        setTimeout(() => {
            dispatch(closeAlert());
        }, timeout);
    }, [showAlert]);

    return (
        <div
            ref={alertRef}
            className={`fixed bottom-0 left-2/4 z-[999] grid w-[95%] max-w-max translate-y-full -translate-x-2/4 grid-cols-[auto_1fr] items-center justify-start gap-6 rounded-primary sm:w-auto ${
                alertType === 'error' ? 'bg-red-300' : 'bg-green-300'
            } py-6 px-8 shadow-shadow1`}
        >
            <span className="">
                {alertType === 'error' ? (
                    <TiWarningOutline className="text-[2.5rem]" />
                ) : (
                    <FiCheckCircle className="text-[2.4rem]" />
                )}
            </span>
            <span className="font-latoBold">{alertMessage}</span>
        </div>
    );
};

export default Alert;
