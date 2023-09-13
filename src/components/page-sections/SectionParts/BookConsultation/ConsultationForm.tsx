import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import dynamic from 'next/dynamic';
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styles from './Style.module.scss';

interface ConsultationFormInterface {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    modalElement?: ReactNode;
    maxWidth?: string;
}

const Dialog = dynamic(() => import('@mui/material/Dialog'));

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
                    borderRadius: 'var(--border-radius)',
                    width: '100%',
                    maxWidth: maxWidth || '50rem',
                    maxHeight: '100%',
                    overflowX: 'hidden',
                    margin: 0
                }
            }}
            className={styles.styles}
        >
            <div className="relative h-full w-full px-8 pt-20 sm:pt-16">
                <IoIosCloseCircleOutline
                    className="absolute top-0 right-0 h-12 w-12 translate-y-3 -translate-x-3 cursor-pointer fill-secondary"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                />
                {/* Render the content of the modal */}
                {modalElement || <RequestCallback className="!shadow-none" />}
                {/* < iframe */}
                {/*     src="https://connect.pabau.com/bookings.php?compid=11842" */}
                {/*     width={600} */}
                {/*     height={600} */}
                {/*     className="min-h-[60rem] w-full pt-16" */}
                {/* ></iframe> */}
            </div>
        </Dialog>
    );
};

export default ConsultationForm;
