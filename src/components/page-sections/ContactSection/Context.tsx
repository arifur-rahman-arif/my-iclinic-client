import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface TabsInterface {
    name: string;
    active: boolean;
}

export interface ContactContext {
    tabs: TabsInterface[];
    setTabs: Dispatch<SetStateAction<TabsInterface[]>>;
    activateTab: ({ index }: { index: number }) => void;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    findingOption: string;
    setFindingOption: Dispatch<SetStateAction<string>>;
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
    formSubmitted: boolean;
    setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

const defaultContactContext: ContactContext = {
    tabs: [],
    setTabs: () => {},
    activateTab: () => {},
    name: '',
    setName: () => {},
    email: '',
    setEmail: () => {},
    phone: '',
    setPhone: () => {},
    findingOption: '',
    setFindingOption: () => {},
    message: '',
    setMessage: () => {},
    formSubmitted: false,
    setFormSubmitted: () => {}
};

export const ContactCtx = createContext<ContactContext>(defaultContactContext);

interface ContextProps {
    children: Array<JSX.Element> | JSX.Element;
}

/**
 * Context of a navigation menu for mobile devices
 *
 * @param {Array<JSX.Element> | JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
const Context = ({ children }: ContextProps): JSX.Element => {
    const [tabs, setTabs] = useState<TabsInterface[]>([
        {
            name: 'Contact information',
            active: true
        },
        {
            name: 'Request a callback',
            active: false
        },
        {
            name: 'Out of hours information',
            active: false
        }
    ]);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [findingOption, setFindingOption] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    /**
     * Toggle the parent submenus
     * @param {number} index
     */
    const activateTab = ({ index }: { index: number }) => {
        setTabs((prevTabs) => {
            return prevTabs.map((tab, i) => {
                if (index === i) {
                    // Open the clicked tab
                    return { ...tab, active: true };
                }
                // Close other tabs
                return { ...tab, active: false };
            });
        });
    };

    return (
        <ContactCtx.Provider
            value={{
                tabs,
                setTabs,
                activateTab,
                name,
                setName,
                email,
                setEmail,
                phone,
                setPhone,
                findingOption,
                setFindingOption,
                message,
                setMessage,
                formSubmitted,
                setFormSubmitted
            }}
        >
            {children}
        </ContactCtx.Provider>
    );
};

export default Context;
