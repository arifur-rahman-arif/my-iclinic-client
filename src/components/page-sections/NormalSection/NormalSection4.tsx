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
            <Container className="flex flex-col items-center justify-center gap-6 max-w-[51.8rem]">
                <h2 className="normal-case md:max-w-[56.6rem] justify-self-end">
                    <strong>PTK eye surgery cost</strong>
                </h2>
                <div className="grid gap-6 items-center justify-center">
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
