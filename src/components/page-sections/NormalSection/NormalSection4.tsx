import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

/**
 *  Normal Section component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NormalSection4 = (): JSX.Element => {
    return (
        <Section className="bg-[#F1E5FF] py-24 md:py-32">
            <Container className="flex max-w-[51.8rem] flex-col items-center justify-center gap-6">
                <h2 className="justify-self-end normal-case md:max-w-[56.6rem]">
                    <strong>PTK eye surgery cost</strong>
                </h2>
                <div className="grid items-center justify-center gap-6">
                    <p className="text-center">
                        Our PTK eye surgery cost is best suited to patients with special eye conditions needing vision
                        correction.
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default NormalSection4;
