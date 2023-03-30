import ComponentLoader from '@/components/ComponentLoader';
import { ContactContext, ContactCtx } from '@/page-sections/ContactSection/Context';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { ContactForm } from './ContactForm';

const CallbackForm = dynamic(() => import('@/page-sections/ContactSection/CallbackForm'), {
    loading: () => <ComponentLoader />
});

/**
 * Contact section of contact page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ContactSection = (): JSX.Element => {
    const appCtx: ContactContext = useContext(ContactCtx);

    return (
        <div className="contact-form grid justify-items-center gap-12 md:gap-24">
            <TabHeadings />

            <div className="w-full">
                {appCtx.tabs.map((tab, index) => {
                    if (tab.active && index === 0) return <ContactForm key={index} />;

                    if (tab.active && index === 1) return <CallbackForm key={index} />;
                })}
            </div>
        </div>
    );
};

export default ContactSection;

/**
 * Tab headings
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TabHeadings = (): JSX.Element => {
    const appCtx: ContactContext | null = useContext(ContactCtx);

    return (
        <div className="flex items-center justify-items-center gap-3 sm:gap-12 md:gap-24">
            {appCtx?.tabs ?
                appCtx.tabs.map((tab, index) => (
                      <button
                          key={index}
                          className="grid gap-[0.8rem] rounded-tl-primary rounded-tr-primary py-2 px-4 font-latoBold text-[1.6rem] leading-8 shadow-[0px_-3px_4px_rgba(0,_0,_0,_0.05)] md:py-6 md:px-8 md:text-[2.4rem] md:leading-[3.2rem]"
                          onClick={() => {
                              appCtx?.activateTab({ index });
                          }}
                      >
                          {tab.name}
                          <span
                              className={`h-1 w-full bg-yellow transition-all duration-500 ${
                                  tab.active ? 'scale-x-100' : 'scale-x-0 '
                              }`}
                          ></span>
                      </button>
                )) :
                null}
        </div>
    );
};
