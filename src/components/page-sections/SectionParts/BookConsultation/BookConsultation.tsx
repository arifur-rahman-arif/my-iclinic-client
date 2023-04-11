import { Button } from 'src/components/Buttons';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { cloneElement, ReactNode, useState } from 'react';

const ConsultationForm = dynamic(() => import('./ConsultationForm'));

interface BookConsultationInterface {
    buttonClassName?: string;
    children?: JSX.Element;
    buttonText?: string;
    hoverIcon?: ReactNode;
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
    hoverIcon
}: BookConsultationInterface): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <span>
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
                    text={buttonText || 'Book a consultation'}
                    iconPosition="left"
                    className={buttonClassName}
                    onClick={() => {
                        setShowForm(true);
                        setModalOpen(true);
                    }}
                    icon={
                        <Image
                            src="/images/icons/icon-calendar-outline-darker.svg"
                            alt=""
                            width={20}
                            height={20}
                            quality={2}
                            className="h-8 w-8"
                        />
                    }
                    hoverIcon={hoverIcon}
                />
            )}

            {showForm && <ConsultationForm {...{ modalOpen, setModalOpen }} />}
        </span>
    );
};

export default BookConsultation;
