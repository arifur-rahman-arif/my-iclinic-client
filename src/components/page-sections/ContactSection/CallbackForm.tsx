import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import styles from './Callback.module.scss';

/**
 * Callback form
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CallbackForm = (): JSX.Element => {
    // const appCtx: ContactContext | null = useContext(ContactCtx);

    return (
        <div className={`${styles.styles}`}>
            <RequestCallback className="callback-form min-h-[50rem] !w-full max-w-[45rem] bg-white !shadow-none" />
        </div>
    );
};

export default CallbackForm;
