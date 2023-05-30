import { createContext, ReactNode, useState } from 'react';
import StepNotFound from 'src/components/page-sections/SuggestionEngine/AnswerPanel/Steps/StepNotFound';

interface QuestionInterface {
    question: string;
    options: string[];
    flow: {
        [key: string]: ReactNode;
    };
}

interface StepInterface {
    step1: QuestionInterface;
}

interface ContextInterface {}

interface ProviderProps {
    children: ReactNode;
}

const Context = createContext<ContextInterface>({} as ContextInterface);

/**
 * Provider of context properties
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
const Provider = ({ children }: ProviderProps) => {
    const [steps, setSteps] = useState<StepInterface>({
        step1: {
            question: 'What is your age?',
            options: ['Under 20', '20-39', '40-50', '50-60', '60+'],
            flow: {
                'Under 20': <StepNotFound />,
                '20-39': 'Have you had laser eye surgery before?',
                '40-50': 'Have you had laser eye surgery before?',
                '50-60': 'Have you had laser eye surgery before?',
                '60+': 'Have you had laser eye surgery before?'
            }
        }
    });

    return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default Provider;
