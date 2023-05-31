import SuggestionEngine from '@/page-sections/SuggestionEngine/index';
import CtaScreen2 from './AnswerPanel/CtaScreen2';
import CtaScreen from './AnswerPanel/CtaScreen';
import { QuestionTemplate } from './AnswerPanel/Steps';
import SuitabilityQuestionnaire from './AnswerPanel/SuitabilityQuestionnaire';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import UnderAgeStep from 'src/components/page-sections/SuggestionEngine/AnswerPanel/Steps/UnderAgeStep';

interface QuestionInterface {
    question: string;
    answer: string;
}

interface Age {
    active: boolean;
    age: string;
    disabled: boolean;
}

export interface SuggestionEngineContext {
    questions: QuestionInterface[] | null;
    setQuestions: Dispatch<SetStateAction<QuestionInterface[] | null>>;
    ages: Age[];
    setAges: Dispatch<SetStateAction<Age[]>>;
    setActiveAge: (index: number) => void;
    ageSelected: boolean;
    setAgeSelected: Dispatch<SetStateAction<boolean>>;
    showUnderAgeStep: boolean;
    setShowUnderAgeStep: Dispatch<SetStateAction<boolean>>;
    showSurgeryQuestion: boolean;
    setShowSurgeryQuestion: Dispatch<SetStateAction<boolean>>;
    addQuestionToQueue: (question: string, answer: string) => void;
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
}

interface ProviderProps {
    children: ReactNode;
}

export const Context = createContext<SuggestionEngineContext>({} as SuggestionEngineContext);

/**
 * Provider of context properties
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
const Provider = ({ children }: ProviderProps) => {
    
    const [progress, setProgress] = useState<number>(0);
    const [questions, setQuestions] = useState<QuestionInterface[] | null>(null);
    const [ageSelected, setAgeSelected] = useState<boolean>(false);
    const [showUnderAgeStep, setShowUnderAgeStep] = useState<boolean>(false);
    const [showSurgeryQuestion, setShowSurgeryQuestion] = useState<boolean>(false);
    const [ages, setAges] = useState<Age[]>([
        {
            active: false,
            disabled: false,
            age: 'Under 20'
        },
        {
            active: false,
            disabled: false,
            age: '20-39'
        },
        {
            active: false,
            disabled: false,
            age: '40-50'
        },
        {
            active: false,
            disabled: false,
            age: '60+'
        }
    ]);
    
    /**
     * Updates the active state of the age selector based on the provided index.
     *
     * @param {number} index - The index of the age selector to update.
     * @returns {void}
     */
    const setActiveAge = (index: number) => {
        setAges((prevState) => {
            return prevState.map((state, i) => {
                return {
                    ...state,
                    active: index === i
                };
            });
        });
    };
    
    const addQuestionToQueue = (question: string, answer: string) => {
        setQuestions((prevState) => {
            if (prevState === null) {
                return [{
                    question,
                    answer
                }];
            }
            
            return [...prevState, {
                question,
                answer
            }];
        });
    };
    
    return <Context.Provider
        value={{
            questions,
            setQuestions,
            ages,
            setAges,
            setActiveAge,
            ageSelected,
            setAgeSelected,
            showUnderAgeStep,
            setShowUnderAgeStep,
            showSurgeryQuestion,
            setShowSurgeryQuestion,
            addQuestionToQueue,
            progress,
            setProgress
        }}>
        {children}
    </Context.Provider>;
};

export default Provider;
