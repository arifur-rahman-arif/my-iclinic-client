import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import { Section } from '@/components/Section';

/**
 * Normal section component
 *
 * @returns {*}  {JSX.Element}
 */
const NormalSection3 = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid max-w-[111.3rem] grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 xl:gap-32">
                <h2 className="justify-self-end normal-case md:max-w-[56.6rem]">
                    Don’t let your existing eye conditions limit your freedom. Our PTK surgery can achieve clear vision
                    without needing glasses and contact lenses.
                </h2>
                <div className="grid gap-6 justify-self-start">
                    <p>
                        <strong>PTK (Photo-Therapeutic Keratectomy)</strong> is a surgical treatment best suited to
                        people who need vision correction but already have complicated eye conditions that affect their
                        cornea, such as corneal dystrophy. Our PTK specialist uses this treatment for complex eyes,
                        which will only be medically required in order to achieve clearer vision.
                    </p>
                    <p>
                        If you do not require PTK medically, it is most likely that our other laser eye treatments are
                        suitable for you such as: our{' '}
                        <LinkStyle url="/relex-smile-london">ReLEX SMILE</LinkStyle>,{' '}
                        <LinkStyle url="/presbyond-london">Presbyond</LinkStyle> and{' '}
                        <LinkStyle url="/lasik-london">LASIK treatment</LinkStyle>.
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default NormalSection3;
