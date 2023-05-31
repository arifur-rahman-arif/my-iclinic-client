import { LinkStyle } from '@/components/Link';
import CtaScreen from '@/page-sections/SuggestionEngine/AnswerPanel/CtaScreen';
import CtaScreen2 from '@/page-sections/SuggestionEngine/AnswerPanel/CtaScreen2';
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
            {/* {!ctx.ageSelected ? <SuitabilityQuestionnaire/> : null} */}
            
            {/* {ctx.showUnderAgeStep ? <UnderAgeStep/> : null} */}
            
            {/* {ctx.showSurgeryQuestion ? */}
            {/*     <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> : null} */}
            
            {/* <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> */}
            
            {/* <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> */}
            
            {/* <UnderAgeStep/> */}
            
            
            {/* <CtaScreen */}
            {/*     description="If you don't currently wear glasses or contact lenses you are unlikely to need laser eye surgery. If you are experiencing any of the following: Dry eyes, glares around lights or sore eyes please chat to one of our specialists and we can support you with our treatment options."/> */}
            
            
            {/* <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?"/> */}
            {/* <CtaScreen/> */}
            
            
            <CtaScreen2
                heading={<>We are very sorry but you are unlikely to be suitable for our laser treatments as all retinal
                    detachments need to be treated before laser treatment. We do offer alternative vision correction
                    treatments depending on your eye health within these conditions, such as <LinkStyle url="/icl">implantable
                        contact lenses.</LinkStyle>
                    Please leave your details and we can book you for a free suitability check with our treatment’s
                    specialist.</>}/>
            
            
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
            {/*     showNextButton */}
            {/*     includeRadioBoxes */}
            {/* /> */}
        </div>
    );
};

export default AnswerPanel;
