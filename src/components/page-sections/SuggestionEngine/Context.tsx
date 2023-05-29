import { createContext, ReactNode } from 'react';

interface ContextInterface {}

const Context = createContext<ContextInterface>({} as ContextInterface);

interface ProviderProps {
    children: ReactNode;
}

/**
 * Provider of context properties
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const Provider = ({ children }: ProviderProps) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default Provider;
