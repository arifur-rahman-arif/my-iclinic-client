import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

/**
 * Normal section component
 *
 * @returns {*}  {JSX.Element}
 */
const NormalSection2 = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid justify-items-center gap-12">
                <h2 className="w-full max-w-[44.5rem] text-center normal-case">
                    Choosing the best laser
                    <br />
                    <strong className="normal-case">treatment for you</strong>
                </h2>
                <p className="max-w-[59.1rem] text-center">
                    When you choose My iClinic, our team and expert ophthalmologists will be committed to working with
                    you to find the best procedure for your needs – transforming your eyesight for the better.
                </p>
            </Container>
        </Section>
    );
};

export default NormalSection2;
