import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useRef } from 'react';
import { pinAnimation } from '@/utils/gsapFunctions';

interface NormalSection2Interface {
    title1?: string;
    title2?: string;
    description?: string;
}

/**
 * Normal section component
 *
 * @param {NormalSection2Interface} {
 *
 * }
 * @returns {*}  {JSX.Element}
 */
const NormalSection2 = ({ title1, title2, description }: NormalSection2Interface): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <Section>
            <Container className="grid justify-items-center gap-12">
                <h2 className="w-full max-w-[44.5rem] text-center normal-case">
                    {title1 || 'Choosing the best laser'}
                    <br />
                    <strong className="normal-case">{title2 || 'treatment for you'}</strong>
                </h2>
                <p className="max-w-[59.1rem] text-center">
                    {description ||
                        'When you choose My iClinic, our team and expert ophthalmologists will be committed to working with you to find the best procedure for your needs – transforming your eyesight for the better.'}
                </p>
            </Container>
        </Section>
    );
};

export default NormalSection2;
