import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

interface NormalSection5Interface {
    heading: string;
    description?: string;
}

/**
 * Normal section component
 *
 * @param {string} heading
 * @param {string} description
 * @returns {JSX.Element}
 * @constructor
 */
const NormalSection5 = ({ heading, description }: NormalSection5Interface): JSX.Element => {
    return (
        <Section>
            <Container className="grid justify-items-center gap-12">
                <h2 className="w-full max-w-[64rem] text-center normal-case">{heading}</h2>
                {description && <p className="max-w-[53rem] text-center">{description}</p>}
            </Container>
        </Section>
    );
};

export default NormalSection5;
