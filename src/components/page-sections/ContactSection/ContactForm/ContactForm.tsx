import { ContactContext, ContactCtx } from '@/page-sections/ContactSection/Context';
import { useContext } from 'react';
import ContactDetails from './ContactDetails';
import Form from './Form';
import ThankYou from './ThankYou';

/**
 * Contact form
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ContactForm = (): JSX.Element => {
    const appCtx: ContactContext = useContext(ContactCtx);

    return (
        <div
            className={`mx-auto grid w-full max-w-[90rem] grid-cols-1 content-start gap-24 ${
                !appCtx.formSubmitted && 'md:grid-cols-2'
            } md:items-start`}
        >
            {appCtx.formSubmitted ? (
                <ThankYou />
            ) : (
                <>
                    <Form />

                    <ContactDetails />
                </>
            )}
        </div>
    );
};

export default ContactForm;
