import { Question1, QuestionTemplate, StepNotFound } from './Steps';
import SuitabilityQuestionnaire from './SuitabilityQuestionnaire';

/**
 * Answer panel component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AnswerPanel = (): JSX.Element => {
    return (
        <div className="bg-brand">
            {/* <SuitabilityQuestionnaire /> */}
            {/* <StepNotFound /> */}
            {/* <QuestionTemplate questionNumber={1} questionText="Have you had laser eye surgery before?" /> */}

            <QuestionTemplate
                questionNumber={7}
                questionText="Do any of the following apply to you"
                includeAnswerButton={false}
                showNextButton={true}
            />
        </div>
    );
};

export default AnswerPanel;
