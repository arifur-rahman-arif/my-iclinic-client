import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface QuestionInterface {
    [key: string]: {
        question: string;
        answer: string;
    };
}

interface Age {
    active: boolean;
    age: string;
    disabled: boolean;
}

interface Options {
    active: boolean;
    label: string;
    targetNode: number;
}

interface RouteInterface {
    active: boolean;
    node: number;
    screen: string;
    props?: any;
    yesNode?: null | number;
    noNode?: null | number;
    nextNode?: null | number;
    prevNode?: null | number;
}

interface AddQuestionQueueProps {
    question: string;
    answer: string;
    questionIndex?: string;
}

export interface SuggestionEngineContext {
    totalSteps: number;
    questions: QuestionInterface | null;
    setQuestions: Dispatch<SetStateAction<QuestionInterface | null>>;
    ages: Age[];
    setAges: Dispatch<SetStateAction<Age[]>>;
    setActiveAge: (index: number) => void;
    ageSelected: boolean;
    setAgeSelected: Dispatch<SetStateAction<boolean>>;
    addQuestionToQueue: (arg: AddQuestionQueueProps) => void;
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
    options: Options[];
    setOptions: Dispatch<SetStateAction<Options[]>>;
    routes: RouteInterface[];
    setRoutes: Dispatch<SetStateAction<RouteInterface[]>>;
    navigateToStep: (navigationIndex: number) => void;
    setPreviousNode: (currentNode: number, nextNode: number) => void;
    completedStep: number;
    setCompletedStep: Dispatch<SetStateAction<number>>;
    resetAllRouteSteps: () => void;
    eyePrescription: EyePrescription;
    setEyePrescription: Dispatch<SetStateAction<EyePrescription>>;
    whyLaserTreatment: Option[];
    setWhyLaserTreatment: Dispatch<SetStateAction<Option[]>>;
    whyGlassesAndLenses: Option[];
    setWhyGlassesAndLenses: Dispatch<SetStateAction<Option[]>>;
    motiveOfGetRidGlasses: Option[];
    setMotiveOfGetRidGlasses: Dispatch<SetStateAction<Option[]>>;
}

interface ProviderProps {
    children: ReactNode;
}

type LeftRightEye = {
    leftEye: number | null;
    rightEye: number | null;
};

interface EyePrescription {
    sphere: LeftRightEye;
    cyl: LeftRightEye;
    axis: LeftRightEye;
    add: LeftRightEye;
    unsure: boolean;
}

interface Option {
    active: boolean;
    label: string;
    value: string;
}

export const Context = createContext<SuggestionEngineContext>({} as SuggestionEngineContext);

/**
 * Context Provider of the SuggestionEngine
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
const Provider = ({ children }: ProviderProps) => {
    const totalSteps = 5;
    const [completedStep, setCompletedStep] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [questions, setQuestions] = useState<QuestionInterface | null>(null);
    const [ageSelected, setAgeSelected] = useState<boolean>(false);

    const defaultAges: Age[] = [
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
    ];
    const [ages, setAges] = useState<Age[]>(defaultAges);

    const defaultOptions: Options[] = [
        {
            active: false,
            label: 'I am pregnant and/or Breastfeeding',
            targetNode: 20
        },
        {
            active: false,
            label: 'I have had/have a herpes virus in my eye',
            targetNode: 21
        },
        {
            active: false,
            label: 'I suffer from severe dry eyes that requires ongoing treatment',
            targetNode: 21
        },
        {
            active: false,
            label: 'An eye specialist has told me I have keratoconus (A thin cornea)',
            targetNode: 21
        },
        {
            active: false,
            label: 'I have a retinal detachment and haven’t had surgery',
            targetNode: 21
        },
        {
            active: false,
            label: 'I have a retinal detachment and have had surgery',
            targetNode: 21
        },
        {
            active: false,
            label: 'I suffer from Amblyopia (Lazy Eye)',
            targetNode: 21
        },
        {
            active: false,
            label: 'None of the above applies to me',
            targetNode: 21
        }
    ];
    const [options, setOptions] = useState<Options[]>(defaultOptions);

    const defaultPrescription: EyePrescription = {
        sphere: {
            leftEye: null,
            rightEye: null
        },
        cyl: {
            leftEye: null,
            rightEye: null
        },
        axis: {
            leftEye: null,
            rightEye: null
        },
        add: {
            leftEye: null,
            rightEye: null
        },
        unsure: false
    };
    const [eyePrescription, setEyePrescription] = useState<EyePrescription>(defaultPrescription);

    const defaultWhyLaserTreatment: Option[] = [
        {
            active: false,
            label: 'A special occasion',
            value: 'A special occasion'
        },
        {
            active: false,
            label: 'Hobbies require freedom from glasses',
            value: 'Hobbies require freedom from glasses'
        },
        {
            active: false,
            label: 'Driving difficulty',
            value: 'Driving difficulty'
        },
        {
            active: false,
            label: 'Work',
            value: 'Work'
        },
        {
            active: false,
            label: 'Others',
            value: 'Others'
        }
    ];
    const [whyLaserTreatment, setWhyLaserTreatment] = useState<Option[]>(defaultWhyLaserTreatment);

    const defaultWhyGlassesAndLenses: Option[] = [
        {
            label: 'Up close objects',
            value: 'Up close objects',
            active: false
        },
        {
            label: 'Intermediate objects',
            value: 'Intermediate objects',
            active: false
        },
        {
            label: 'Distance objects',
            value: 'Distance objects',
            active: false
        }
    ];
    const [whyGlassesAndLenses, setWhyGlassesAndLenses] = useState<Option[]>(defaultWhyGlassesAndLenses);

    const defaultMotiveOfGetRidGlasses: Option[] = [
        {
            active: false,
            label: 'A special occasion',
            value: 'A special occasion'
        },
        {
            active: false,
            label: 'Hobbies require freedom from glasses',
            value: 'Hobbies require freedom from glasses'
        },
        {
            active: false,
            label: 'Driving difficulty',
            value: 'Driving difficulty'
        },
        {
            active: false,
            label: 'Falling asleep',
            value: 'Falling asleep'
        },
        {
            active: false,
            label: 'Sports',
            value: 'Sports'
        },
        {
            active: false,
            label: 'Cost of glasses and contact lenses',
            value: 'Cost of glasses and contact lenses'
        },
        {
            active: false,
            label: 'Work',
            value: 'Work'
        },
        {
            active: false,
            label: 'Other',
            value: 'Others'
        }
    ];
    const [motiveOfGetRidGlasses, setMotiveOfGetRidGlasses] = useState<Option[]>(defaultMotiveOfGetRidGlasses);

    const defaultRoutes: RouteInterface[] = [
        {
            active: true,
            node: 0,
            screen: 'SuitabilityQuestionnaire',
            yesNode: 1,
            noNode: 4
        },
        {
            active: false,
            node: 1,
            screen: 'UnderAgeStep',
            nextNode: 2
        },
        {
            active: false,
            node: 2,
            screen: 'CtaScreen',
            nextNode: 3
        },
        {
            active: false,
            node: 3,
            screen: 'ThankYou'
        },
        {
            active: false,
            node: 4,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 1,
                questionText: 'Have you had laser eye surgery before'
            },
            yesNode: 5,
            noNode: 13
        },

        // =====================
        // Top Yes level routes
        // =====================
        {
            active: false,
            node: 5,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 2,
                questionText: 'Are you a glasses/contact lenses wearer',
                showBackButton: true
            },
            yesNode: 6,
            noNode: 9
        },
        {
            active: false,
            node: 6,
            screen: 'WhyLaserTreatment',
            props: {
                questionNumber: 3,
                questionText: 'Why are you seeking laser treatment at this point in time'
            },
            nextNode: 7
        },
        {
            active: false,
            node: 7,
            screen: 'EyePrescription',
            yesNode: 8,
            noNode: 10
        },
        {
            active: false,
            node: 8,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 3,
                questionText: 'Do any of the following apply to you',
                includeAnswerButton: false,
                includeRadioBoxes: true
            },
            nextNode: null
        },
        // CTA Screen
        {
            active: false,
            node: 9,
            screen: 'CtaScreen',
            nextNode: 3
        },
        {
            active: false,
            node: 10,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 3,
                questionText: 'What do you need your glasses or contact lenses for',
                includeAnswerButton: false,
                whyGlassesAndContactLenses: true
            },
            nextNode: 11
        },
        {
            active: false,
            node: 11,
            screen: 'MotiveOfGettingRidOfGlasses',
            props: {
                questionNumber: 3,
                questionText: 'What is your motive to get rid of your glasses or contact lenses'
            },
            nextNode: 12
        },
        {
            active: false,
            node: 12,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 3,
                questionText: 'Do any of the following apply to you',
                includeAnswerButton: false,
                includeRadioBoxes: true
            },
            nextNode: null
        },
        // =====================
        // Top No level routes
        // =====================
        {
            active: false,
            node: 13,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 2,
                questionText: 'Are you a glasses/contact lenses wearer',
                showBackButton: true
            },
            yesNode: 15,
            noNode: 14
        },
        {
            active: false,
            node: 14,
            screen: 'CtaScreen',
            props: {
                description:
                    "If you don't currently wear glasses or contact lenses you are unlikely to need laser eye surgery. If you are experiencing any of the following: Dry eyes, glares around lights or sore eyes please chat to one of our specialists and we can support you with our treatment options."
            },
            nextNode: 9
        },
        {
            active: false,
            node: 15,
            screen: 'WhyLaserTreatment',
            props: {
                questionNumber: 3,
                questionText: 'Why are you seeking laser treatment at this point in time'
            },
            nextNode: 16
        },
        {
            active: false,
            node: 16,
            screen: 'EyePrescription',
            yesNode: 8,
            noNode: 17
        },
        {
            active: false,
            node: 17,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 3,
                questionText: 'What do you need your glasses or contact lenses for',
                includeAnswerButton: false,
                whyGlassesAndContactLenses: true
            },
            nextNode: 18
        },
        {
            active: false,
            node: 18,
            screen: 'MotiveOfGettingRidOfGlasses',
            props: {
                questionNumber: 3,
                questionText: 'What is your motive to get rid of your glasses or contact lenses'
            },
            nextNode: 19
        },
        {
            active: false,
            node: 19,
            screen: 'QuestionTemplate',
            props: {
                questionNumber: 3,
                questionText: 'Do any of the following apply to you',
                includeAnswerButton: false,
                includeRadioBoxes: true
            },
            nextNode: null
        },
        {
            active: false,
            node: 20,
            screen: 'CtaScreen2',
            props: {
                includeSuitabilityButtons: false,
                heading:
                    'We are very sorry but you are unlikely to be suitable for our laser treatments. We recommend booking a free suitability check 3-6 months after breastfeeding. A member of our team can contact you <span class="font-mulishBold text-[#FE8083]">3 months from this date</span> to book a suitability check:'
            },
            nextNode: 3
        },
        {
            active: false,
            node: 21,
            screen: 'CtaScreen2',
            props: {
                heading:
                    'You may be suitable for our laser treatments. Have a free chat with our specialist before booking a full eye check and consultation with our doctor.'
            },
            nextNode: 3
        }
    ];
    const [routes, setRoutes] = useState<RouteInterface[]>(defaultRoutes);

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

    /**
     * Adds a question to the queue of questions.
     *
     * @param {Object} props - The properties for adding a question to the queue.
     * @param {string} props.question - The question to be added.
     * @param {string} props.answer - The answer to the question.
     * @param {number} props.questionIndex - The index of the question in the queue. If provided, the question at this index will be updated or replaced.
     *
     * @returns {void}
     */
    const addQuestionToQueue = ({ question, answer, questionIndex }: AddQuestionQueueProps) => {
        setQuestions((prevState) => {
            const updatedQuestions = { ...prevState };

            if (questionIndex !== undefined) {
                // Update or add the question based on the questionIndex
                updatedQuestions[questionIndex] = {
                    question,
                    answer
                };
            }

            return updatedQuestions;
        });
    };

    /**
     * Navigates to a specific step in the navigation and updates the state accordingly.
     *
     * @param {number} navigationIndex - The index of the step to navigate to.
     * @returns {void}
     */
    const navigateToStep = (navigationIndex: number) => {
        setRoutes((prevState) => {
            let tempState = [...prevState];

            // Reset the active property of all routes to false
            tempState = tempState.map((state) => {
                return {
                    ...state,
                    active: false
                };
            });

            tempState[navigationIndex].active = true;

            return tempState;
        });

        setQuestions((prevState) => {
            const tempState = { ...prevState };

            // Remove the question at the specified index from the questions state
            if (tempState.hasOwnProperty(navigationIndex)) {
                delete tempState[navigationIndex];
            }

            return tempState;
        });
    };

    /**
     * Update the previous node of the next node with the current node.
     *
     * @param {number} currentNode - The current node identifier.
     * @param {number} nextNode - The next node identifier.
     * @returns {void}
     */
    const setPreviousNode = (currentNode: number, nextNode: number) => {
        setRoutes((prevState) => {
            prevState[nextNode].prevNode = currentNode;
            return prevState;
        });
    };

    /**
     * Resets all route steps and sets default values for various state variables.
     */
    const resetAllRouteSteps = () => {
        setCompletedStep(0);
        setProgress(0);
        setQuestions(null);
        setAgeSelected(false);
        setAges(defaultAges);
        setOptions(defaultOptions);
        setEyePrescription(defaultPrescription);
        setWhyLaserTreatment(defaultWhyLaserTreatment);
        setWhyGlassesAndLenses(defaultWhyGlassesAndLenses);
        setMotiveOfGetRidGlasses(defaultMotiveOfGetRidGlasses);
        setRoutes(defaultRoutes);
    };

    useEffect(() => {
        setProgress((completedStep / totalSteps) * 100);
    }, [completedStep]);

    return (
        <Context.Provider
            value={{
                totalSteps,
                questions,
                setQuestions,
                ages,
                setAges,
                setActiveAge,
                ageSelected,
                setAgeSelected,
                addQuestionToQueue,
                progress,
                setProgress,
                options,
                setOptions,
                routes,
                setRoutes,
                navigateToStep,
                setPreviousNode,
                completedStep,
                setCompletedStep,
                resetAllRouteSteps,
                eyePrescription,
                setEyePrescription,
                whyLaserTreatment,
                setWhyLaserTreatment,
                whyGlassesAndLenses,
                setWhyGlassesAndLenses,
                motiveOfGetRidGlasses,
                setMotiveOfGetRidGlasses
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;
