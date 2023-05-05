import ComponentLoader from '@/components/ComponentLoader';
import { ContactContext, ContactCtx } from '@/page-sections/ContactSection/Context';
import OutOfHours from './OutOfHours';
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

                    if (tab.active && index === 2) return <OutOfHours key={index} />;
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
        <div className="flex flex-col items-center justify-items-center gap-8 sm:flex-row md:gap-24">
            {appCtx?.tabs ?
                appCtx.tabs.map((tab, index) => (
                      <button
                          key={index}
                          className={`grid gap-4 font-latoBold text-[1.8rem] leading-[2.8rem] transition-all duration-500 md:text-[2.4rem] md:leading-[3.2rem] ${
                              tab.active ? 'text-[#0518214D]' : 'text-heading'
                          }`}
                          onClick={() => {
                              appCtx?.activateTab({ index });
                          }}
                      >
                          {tab.name}
                          <span
                              className={`h-1 w-full rounded-full transition-all duration-500 ${
                                  tab.active ? 'scale-x-100 bg-[#0518214D]' : 'scale-x-0 bg-heading'
                              }`}
                          ></span>
                      </button>
                )) :
                null}
        </div>
    );
};
