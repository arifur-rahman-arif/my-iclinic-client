import LinkStyle from '@/components/Link/LinkStyle';
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

interface Options {
    active: boolean;
    label: string;
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
    options: Options[];
    setOptions: Dispatch<SetStateAction<Options[]>>;
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
    
    const [options, setOptions] = useState<Options[]>([
        {
            active: false,
            label: 'I am pregnant and/or Breastfeeding'
        },
        {
            active: false,
            label: 'I have had/have a herpes virus in my eye'
        },
        {
            active: false,
            label: 'I suffer from severe dry eyes that requires ongoing treatment'
        },
        {
            active: false,
            label: 'An eye specialist has told me I have keratoconus (A thin cornea)'
        },
        {
            active: false,
            label: 'I have a retinal detachment and haven’t had surgery'
        },
        {
            active: false,
            label: 'I have a retinal detachment and have had surgery'
        },
        {
            active: false,
            label: 'I suffer from Amblyopia (Lazy Eye)'
        }
    ]);
    
    
    const [routes, setRoutes] = useState<any>([
        {
            active: true,
            node: 0,
            screen: <SuitabilityQuestionnaire/>
        },
        {
            active: false,
            node: 1,
            screen: <UnderAgeStep/>
        },
        {
            active: false,
            node: 2,
            screen: <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/>,
            yesNode: 3,
            noNode: 4
        },
        // Yes node
        {
            active: false,
            node: 3,
            screen: <QuestionTemplate questionNumber={2} questionText="Are you a glasses/contact lense wearer?"/>,
            yesNode: 5,
            noNode: 7
        },
        // No node
        {
            active: false,
            node: 4,
            screen: <QuestionTemplate questionNumber={2} questionText="Are you a glasses/contact lense wearer?"/>,
            yesNode: null,
            noNode: 14
        },
        // What is your prescription? Left Eye: Right Eye:
        {
            active: false,
            node: 5,
            screen: <QuestionTemplate
                questionNumber={4}
                questionText="What is your prescription?"
                includeAnswerButton={false}
                showBackButton
                includeEyeButton
            />,
            nextNode: 6
        },
        // Chat to an expert now to see how we can help (Talk to a specialist)- button
        {
            active: false,
            node: 6,
            screen: <CtaScreen/>
        },
        {
            active: false,
            node: 7,
            screen: <QuestionTemplate
                questionNumber={7}
                questionText="Do any of the following apply to you"
                includeAnswerButton={false}
                showNextButton
                includeRadioBoxes
            />,
            nextNode: null
        },
        {
            active: false,
            node: 8,
            screen: <CtaScreen2
                includeSuitabilityButtons={false}
                heading="We are very sorry but you are unlikely to be suitable for our laser treatments. We recommend booking a free suitability check 3-6 months after breastfeeding. A member of our team can contact you 3 months from this date to book a suitability check:"/>
        },
        {
            active: false,
            node: 9,
            screen: <CtaScreen2
                heading="We are very sorry but you are unlikely to be suitable for our laser treatments. But don’t worry, we do offer alternative vision correction treatments depending on your eye health within these conditions, such as implantable contact lenses. Please leave your details and we can book you for a free suitability check with our treatment’s specialist."/>
        },
        {
            active: false,
            node: 10,
            screen: <CtaScreen2
                heading="We are very sorry but you are unlikely to be suitable for our laser treatments. But don’t worry, we do offer alternative vision correction treatments depending on your eye health within these conditions. Please leave your details and we can book you for a free suitability check with our treatment’s specialist"/>
        },
        {
            active: false,
            node: 11,
            screen: <CtaScreen2
                heading={<>We are very sorry but you are unlikely to be suitable for our laser treatments as all retinal
                    detachments need to be treated before laser treatment. We do offer alternative vision correction
                    treatments depending on your eye health within these conditions, such as <LinkStyle url="/icl">implantable
                        contact lenses.</LinkStyle>
                    Please leave your details and we can book you for a free suitability check with our treatment’s
                    specialist.</>}/>
        },
        {
            active: false,
            node: 12,
            screen: <CtaScreen2
                heading="You may be suitable for our laser treatments. Have a free chat with our specialist before booking a full eye check and consultation with our doctor."/>
        },
        {
            active: false,
            node: 13,
            screen: <CtaScreen2
                heading="You may be suitable for our laser treatments. Have a free chat with our specialist before booking a full eye check and consultation with our doctor"/>
        },
        {
            active: false,
            node: 14,
            screen: <CtaScreen
                description="If you don't currently wear glasses or contact lenses you are unlikely to need laser eye surgery. If you are experiencing any of the following: Dry eyes, glares around lights or sore eyes please chat to one of our specialists and we can support you with our treatment options."/>
        },
        {
            active: false,
            node: 15,
            screen: <QuestionTemplate
                questionNumber={4}
                questionText="What is your prescription?"
                includeAnswerButton={false}
                showBackButton
                includeEyeButton
            />,
            nextNode: 6
        },
        {
            active: false,
            node: 13,
            screen: <CtaScreen2
                heading="You may be suitable for our laser treatments. Have a free chat with our specialist before booking a full eye check and consultation with our doctor."/>
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
            setProgress,
            options,
            setOptions
        }}>
        {children}
    </Context.Provider>;
};

export default Provider;
