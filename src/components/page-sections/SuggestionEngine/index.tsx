import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import AnswerPanel from './AnswerPanel';
import { QuestionPicker } from './QuestionPicker';

/**
 * Suggestion engine component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Engine = () => {
    return (
        <Section className="sm:!mt-24">
            <Container className="grid overflow-hidden !px-0 md:grid-cols-[auto_1fr] md:rounded-primary">
                <QuestionPicker />

                <AnswerPanel />
            </Container>
        </Section>
    );
};

export default Engine;
