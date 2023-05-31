import { Context } from '@/page-sections/SuggestionEngine/Context';
import { useContext } from 'react';
import { QuestionTemplate, UnderAgeStep } from './Steps';
import SuitabilityQuestionnaire from './SuitabilityQuestionnaire';

/**
 * Answer panel component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AnswerPanel = (): JSX.Element => {
    const ctx = useContext(Context);
    
    
    return (
        <div className="bg-brand">
            {!ctx.ageSelected ? <SuitabilityQuestionnaire/> : null}
            
            {ctx.showUnderAgeStep ? <UnderAgeStep/> : null}
            
            {ctx.showSurgeryQuestion ?
                <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> : null}
            
            {/* <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> */}
            {/* <CtaScreen/> */}
            {/* <CtaScreen2/> */}
            
            {/* <QuestionTemplate */}
            {/*     questionNumber={4} */}
            {/*     questionText="What is your prescription?" */}
            {/*     includeAnswerButton={false} */}
            {/*     showBackButton */}
            {/*     includeEyeButton */}
            {/* /> */}
            
            
            {/* <QuestionTemplate */}
            {/*     questionNumber={7} */}
            {/*     questionText="Do any of the following apply to you" */}
            {/*     includeAnswerButton={false} */}
            {/*     showNextButton={true} */}
            {/* /> */}
        </div>
    );
};

export default AnswerPanel;
