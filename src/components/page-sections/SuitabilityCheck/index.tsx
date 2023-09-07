import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ReactNode } from 'react';
import AnswerPanel from './AnswerPanel';
import { QuestionPicker } from './QuestionPicker';

interface EngineProps {
    questionPickerBg?: string;
    answerPanelBg?: string;
    questionPickerTopElement?: ReactNode;
}

/**
 * Suggestion engine component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Engine = ({ questionPickerBg, answerPanelBg, questionPickerTopElement }: EngineProps) => {
    return (
        <Section className="sm:!mt-24">
            <Container className="grid overflow-hidden !px-0 lg:grid-cols-[auto_1fr] xl:rounded-primary">
                <QuestionPicker {...{ questionPickerBg, questionPickerTopElement }} />

                <AnswerPanel answerPanelBg={answerPanelBg} />
            </Container>
        </Section>
    );
};

export default Engine;
