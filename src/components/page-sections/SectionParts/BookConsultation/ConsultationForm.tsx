import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import styles from './Style.module.scss';

interface ConsultationFormInterface {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Consultation form for pabau integration
 *
 * @param {boolean} modalOpen
 * @param {Function} setModalOpen
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationForm = ({ modalOpen, setModalOpen }: ConsultationFormInterface): JSX.Element => {
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
                    width: '100%'
                }
            }}
            className={styles.styles}
        >
            <div className="w-full sm:min-h-[60rem] relative">
                <IoIosCloseCircleOutline
                    className="absolute top-0 right-0 h-12 w-12 translate-y-3 -translate-x-3 cursor-pointer fill-secondary"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                />
                <iframe
                    src="https://connect.pabau.com/bookings.php?compid=11842"
                    width={600}
                    height={600}
                    className="w-full min-h-[60rem] pt-16"
                ></iframe>
            </div>
        </Dialog>
    );
};

export default ConsultationForm;
