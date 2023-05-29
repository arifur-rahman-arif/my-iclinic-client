import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { QuestionPicker } from './QuestionPicker';
import AnswerPanel from './AnswerPanel';

/**
 * Suggestion engine component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Engine = () => {
    return (
        <Section>
            <Container className="grid overflow-hidden rounded-primary md:grid-cols-[auto_1fr]">
                <QuestionPicker />

                <AnswerPanel />
            </Container>
        </Section>
    );
};

export default Engine;
