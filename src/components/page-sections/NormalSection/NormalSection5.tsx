import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

interface NormalSection5Interface {
    heading: string;
    description: string;
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
            <Container className="grid gap-12 justify-items-center">
                <h2 className="w-full normal-case text-center max-w-[64rem]">
                    {heading}
                </h2>
                <p className="text-center max-w-[53rem]">
                    {description}
                </p>
            </Container>
        </Section>
    );
};

export default NormalSection5;
