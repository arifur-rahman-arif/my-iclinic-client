import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styles from './Style.module.scss';
import dynamic from 'next/dynamic';

const Dialog = dynamic(() => import('@mui/material/Dialog'));

interface ConsultationFormInterface {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    modalElement?: ReactNode;
    maxWidth?: string;
}

/**
 * Consultation form for pabau integration
 *
 * @param {boolean} modalOpen
 * @param {Function} setModalOpen
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationForm = ({
    modalOpen,
    setModalOpen,
    modalElement,
    maxWidth
}: ConsultationFormInterface): JSX.Element => {
    useEffect(() => {
        setModalOpen(true);
    }, []);

    return (
        <Dialog
            onClose={() => {
                setModalOpen(false);
            }}
            open={modalOpen}
            sx={{
                '.MuiPaper-root': {
                    borderRadius: 'var(--border-radius2)',
                    width: '100%',
                    maxWidth: maxWidth || '50rem',
                    maxHeight: '100%',
                    overflowX: 'hidden',
                    margin: 0
                }
            }}
            className={styles.styles}
        >
            <div className="relative h-full w-full pt-20 sm:pt-16">
                <IoIosCloseCircleOutline
                    className="absolute right-0 top-0 h-12 w-12 -translate-x-3 translate-y-3 cursor-pointer fill-secondary"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                />
                {/* Render the content of the modal */}
                {modalElement || <RequestCallback className="!border-none !shadow-none" />}
            </div>
        </Dialog>
    );
};

export default ConsultationForm;
