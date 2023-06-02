import { Context } from '@/page-sections/SuggestionEngine/Context';
import { Fragment, useContext } from 'react';
import CtaScreen from './CtaScreen';
import CtaScreen2 from './CtaScreen2';
import { UnderAgeStep } from './Steps';
import QuestionTemplate from './Steps/QuestionTemplate';
import SuitabilityQuestionnaire from './SuitabilityQuestionnaire';

/**
 * Answer panel component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AnswerPanel = (): JSX.Element => {
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
                return <UnderAgeStep />;
            case 'QuestionTemplate':
                return <QuestionTemplate {...props} {...{ node }} />;
            case 'CtaScreen':
                return <CtaScreen {...props} />;
            case 'CtaScreen2':
                return <CtaScreen2 {...props} />;
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-brand">
            {ctx.routes?.map((route, index) => route.active && <Fragment key={index}>
                {renderScreen(route.screen, route.props, index)}
            </Fragment>)}
        </div>
    );
};

export default AnswerPanel;
