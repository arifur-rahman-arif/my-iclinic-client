/* eslint-disable require-jsdoc */
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { pinAnimation } from '@/utils/gsapFunctions';
import { useRef } from 'react';

interface Normalsection4Interface {
    title?: string;
    description?: string;
}

/**
 * Normal Section 4 component
 *
 * @param {Normalsection4Interface} {
 *
 * }
 * @returns {*}  {JSX.Element}
 */

const NormalSection4 = ({
    title = 'PTK Eye Surgery Cost',
    description = ` Our PTK eye surgery cost is best suited to patients with special eye conditions needing vision correction.`
}: Normalsection4Interface): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    // /**
    //  * Normal section component
    //  *
    //  * @returns {*}  {JSX.Element}
    //  */
    // const NormalSection3 = (): JSX.Element => {
    return (
        <Section className="bg-[#F1E5FF] py-24 md:py-32">
            <Container className="flex max-w-[51.8rem] flex-col items-center justify-center gap-6">
                <h2 className="justify-self-end normal-case md:max-w-[56.6rem]">
                    <strong>{title}</strong>
                </h2>
                <div className="grid items-center justify-center gap-6">
                    <p className="text-center">
                        {description}
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default NormalSection4;
