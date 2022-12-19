import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { RadioField, TextField } from '@/components/inputs';

import { Button } from '@/components/button';
import Image from 'next/image';
import { handleAlert } from '@/features/alert/alertSlice';
import { useDispatch } from 'react-redux';
import { useDownloadFormSubmissionMutation } from '@/services/downloadForm';
import { validateEmail } from '@/utils/miscellaneous';

interface DownloadFormInterface {
    setShowDownloadOnTheWayTemplate: Dispatch<SetStateAction<boolean>>;
    setShowForm: Dispatch<SetStateAction<boolean>>;
}

/**
 * Download form for the pdf
 *
 * @returns {*}  {JSX.Element}
 */
const DownloadForm = ({ setShowDownloadOnTheWayTemplate, setShowForm }: DownloadFormInterface): JSX.Element => {
    const dispatch = useDispatch();
    const [submitForm, response] = useDownloadFormSubmissionMutation();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('male');
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>('');

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
            setNameError(true);
            setErrorText('Please provide your name');
            return;
        }

        if (!email) {
            setEmailError(true);
            setErrorText('Please provide your email');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError(true);
            setErrorText('Please provide a valid email address');
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

        const payload = {
            name,
            email,
            gender
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
                    error={nameError}
                    errorText={errorText}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError(false);
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
                    error={emailError}
                    errorText={errorText}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                    }}
                    onClearValue={() => {
                        setEmail('');
                    }}
                />
            </div>

            <div className="grid grid-cols-1 content-start gap-8">
                <h3 className="w-full text-left font-latoBold text-[2rem] uppercase">
                    Gender <span className="text-[1.8rem]">(Optional)</span>
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
                            areaLabel="Others"
                            id="input-other"
                            checked={gender === 'others'}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            value="others"
                            name="gender"
                        />
                        <label className="relative -top-[0.15rem] cursor-pointer" htmlFor="input-other">
                            Others
                        </label>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                text={response.isLoading ? 'Downloading' : 'Download'}
                iconPosition="left"
                loading={response.isLoading}
                loadingIconPosition="right"
                icon={
                    <Image
                        src="/images/icons/icon-cloud-download-outline.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-[2.4rem] w-[2.4rem]"
                    />
                }
                className="justify-self-center md:justify-self-end"
            />
        </form>
    );
};

export default DownloadForm;
