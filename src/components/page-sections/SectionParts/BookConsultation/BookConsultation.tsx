import dynamic from 'next/dynamic';
import { cloneElement, ReactNode, useState } from 'react';
import { Button } from 'src/components/Buttons';

const ConsultationForm = dynamic(() => import('./ConsultationForm'));

interface BookConsultationInterface {
    buttonClassName?: string;
    children?: JSX.Element;
    buttonText?: string;
    hoverIcon?: ReactNode;
    modalElement?: ReactNode;
    maxWidth?: string;
}

/**
 * Consultation component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookConsultation = ({
    buttonClassName,
    children,
    buttonText,
    hoverIcon,
    modalElement,
    maxWidth
}: BookConsultationInterface): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div>
            {children ? (
                <>
                    {cloneElement(children, {
                        className: `${buttonClassName}`,
                        onClick: () => {
                            setShowForm(true);
                            setModalOpen(true);
                        }
                    })}
                </>
            ) : (
                <Button
                    type="button"
                    text={buttonText || 'Request a callback'}
                    iconPosition="left"
                    className={`${buttonClassName} group/consultation !normal-case`}
                    onClick={() => {
                        setShowForm(true);
                        setModalOpen(true);
                    }}
                    icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M13.334 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M6.66602 1.66699V5.00033"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                            <path
                                d="M2.5 8.33301H17.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                            />
                        </svg>
                    }
                />
            )}

            {showForm && <ConsultationForm {...{ modalOpen, setModalOpen, modalElement, maxWidth }} />}
        </div>
    );
};

export default BookConsultation;
