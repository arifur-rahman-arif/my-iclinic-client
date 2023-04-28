import { Button2 } from '@/components/Buttons';
import { RadioField, TextField } from '@/components/Inputs';
import { handleAlert } from '@/features/alert/alertSlice';
import { useDownloadFormSubmissionMutation } from '@/services/downloadForm';
import { useAppDispatch } from '@/store';
import { validateEmail } from '@/utils/miscellaneous';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';

interface DownloadFormInterface {
    setShowDownloadOnTheWayTemplate: Dispatch<SetStateAction<boolean>>;
    setShowForm: Dispatch<SetStateAction<boolean>>;
    pageSlug?: string;
}

/**
 * Download form for the pdf
 *
 * @returns {*}  {JSX.Element}
 */
const DownloadForm = ({
    setShowDownloadOnTheWayTemplate,
    setShowForm,
    pageSlug
}: DownloadFormInterface): JSX.Element => {
    const dispatch = useAppDispatch();
    const [submitForm, response] = useDownloadFormSubmissionMutation();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('male');
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

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

            if (response.status === 'rejected') {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: 'Unable to submit form'
                    })
                );
                return;
            }

            if (response.isError) {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: ((response as any).error as any)?.data.data.message
                    })
                );
                return;
            }

            if (response.isSuccess) {
                // Dispatch(
                //     handleAlert({
                //         showAlert: true,
                //         alertType: 'success',
                //         alertMessage: (response.error as any).data.data.message
                //     })
                // );
                // window.open('/pdf/cataract-surgery.pdf', '_blank');

                setShowForm(false);
                setShowDownloadOnTheWayTemplate(true);
                resetForm();
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
     * Submit the form and if submit is successful than show a thank you page
     *
     * @param {FormEvent<HTMLFormElement>} e
     * @returns {*}
     */
    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name) {
            setNameError('Please provide your name');
            return;
        }

        if (!email) {
            setEmailError('Please provide your email');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError('Please provide a valid email address');
            return;
        }

        if (!gender) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'No gender selected',
                    timeout: 4000
                })
            );
        }

        if (!pageSlug) {
            return dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Page slug parameter is not found',
                    timeout: 4000
                })
            );
        }

        const payload = {
            name,
            email,
            gender,
            pageSlug
        };

        submitForm(payload);
    };

    /**
     * Reset the form to its initial state
     */
    const resetForm = () => {
        setName('');
        setEmail('');
        setGender('male');
    };

    return (
        <form
            className="mx-auto grid w-full max-w-[45rem] grid-cols-1 content-start gap-16 px-8 py-12 md:py-28"
            onSubmit={formSubmit}
        >
            <div className="grid grid-cols-1 grid-rows-[6rem_6rem] gap-14">
                <TextField
                    value={name}
                    type="text"
                    id="download-form-name"
                    placeholder="Your Name"
                    important
                    errorText={nameError}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError('');
                    }}
                    onClearValue={() => {
                        setName('');
                    }}
                />
                <TextField
                    type="text"
                    value={email}
                    id="download-form-email"
                    placeholder="Email Address"
                    important
                    errorText={emailError}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                    }}
                    onClearValue={() => {
                        setEmail('');
                    }}
                />
            </div>
            <div className="grid grid-cols-1 content-start gap-8">
                <h3 className="w-full text-left font-latoBold text-[2rem] uppercase">
                    Gender <span className="text-[1.8rem] normal-case">(Optional)</span>
                </h3>

                <div className="grid w-full grid-flow-row items-start justify-start">
                    <div className="grid grid-cols-[auto_1fr] items-center gap-1">
                        <RadioField
                            areaLabel="Male"
                            id="input-male"
                            checked={gender === 'male'}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            value="male"
                            name="gender"
                        />
                        <label className="relative -top-[0.15rem] cursor-pointer" htmlFor="input-male">
                            Male
                        </label>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-1">
                        <RadioField
                            areaLabel="Female"
                            id="input-female"
                            checked={gender === 'female'}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            value="female"
                            name="gender"
                        />
                        <label className="relative -top-[0.15rem] cursor-pointer" htmlFor="input-female">
                            Female
                        </label>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-1">
                        <RadioField
                            areaLabel="Prefer not to say"
                            id="input-unknown"
                            checked={gender === 'unknown'}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            value="unknown"
                            name="gender"
                        />
                        <label className="relative -top-[0.15rem] cursor-pointer" htmlFor="input-unknown">
                            Prefer not to say
                        </label>
                    </div>
                </div>
            </div>

            <Button2
                type="submit"
                text={response.isLoading ? 'Downloading' : 'Download'}
                iconPosition="left"
                loading={response.isLoading}
                loadingIconPosition="right"
                className="group/download justify-self-center md:justify-self-end"
                icon={
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2401_5839)">
                            <path
                                d="M8.10181 17L12.1018 21L16.1018 17"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                            />
                            <path
                                d="M12.1018 12V21"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                            />
                            <path
                                d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/download:stroke-heading2"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_2401_5839">
                                <rect width="24" height="24" fill="white" transform="translate(0.101807)" />
                            </clipPath>
                        </defs>
                    </svg>
                }
            />
        </form>
    );
};

export default DownloadForm;
