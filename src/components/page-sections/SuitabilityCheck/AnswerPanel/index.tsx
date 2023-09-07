import { Fragment, useContext } from 'react';
import { Context } from '../Context';
import CtaScreen from './CtaScreen';
import CtaScreen2 from './CtaScreen2';
import { UnderAgeStep } from './Steps';
import EyePrescription from './Steps/EyePrescription';
import WhyLaserTreatment from './Steps/MultipleChoiceQuestion/WhyLaserTreatment';
import QuestionTemplate from './Steps/QuestionTemplate';
import SuitabilityQuestionnaire from './SuitabilityQuestionnaire';
import ThankYou from './ThankYou';

interface AnswerPanelProps {
    answerPanelBg?: string;
}

/**
 * Answer panel component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AnswerPanel = ({ answerPanelBg }: AnswerPanelProps): JSX.Element => {
    const ctx = useContext(Context);

    /**
     * Renders a screen based on the provided screen name and props.
     *
     * @param {string} screen - The name of the screen to render.
     * @param {Object} props - The props to pass to the rendered screen component.
     * @param {any} node - Additional node parameter, if required.
     * @returns {React.Element|null} - The rendered screen component or null if the screen name is not recognized.
     */
    const renderScreen = (screen: string, props: any, node: number) => {
        switch (screen) {
            case 'SuitabilityQuestionnaire':
                return <SuitabilityQuestionnaire />;
            case 'UnderAgeStep':
                return <UnderAgeStep {...{ node }} />;
            case 'QuestionTemplate':
                return <QuestionTemplate {...props} {...{ node }} />;
            case 'EyePrescription':
                return <EyePrescription {...{ node }} />;
            case 'WhyLaserTreatment':
                return <WhyLaserTreatment {...props} {...{ node }} />;
            case 'CtaScreen':
                return <CtaScreen {...props} {...{ node }} />;
            case 'CtaScreen2':
                return <CtaScreen2 {...props} {...{ node }} />;
            case 'ThankYou':
                return <ThankYou />;
            default:
                return null;
        }
    };

    return (
        <div className={`${answerPanelBg || 'bg-brand'} py-12`} id="answer-panel">
            {ctx.routes?.map(
                (route, index) =>
                    route.active && <Fragment key={index}>{renderScreen(route.screen, route.props, index)}</Fragment>
            )}
        </div>
    );
};

export default AnswerPanel;
