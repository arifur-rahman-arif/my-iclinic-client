import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';

const RequestCallback = dynamic(() => import('@/components/page-sections/RequestCallback/RequestCallback'));


interface Props {
    className?: string;
}

/**
 * ConsultationSection Component
 *
 * A React component representing the consultation section with an option to book a consultation.
 *
 * @component
 * @returns {JSX.Element} The rendered JSX element.
 *
 * @example
 * // Example usage of ConsultationSection component
 * <ConsultationSection />
 */
const ConsultationSection = ({ className }: Props): JSX.Element => {
    return (
        <Section id="consultation">
            <Container className="grid gap-12">
                <div className="grid content-start justify-items-center gap-1">
                    <h2 className="uppercase">BOOK A Consultation</h2>

                    <p className="text-center">Take the first step towards better eyesight</p>
                </div>

                <LazyComponent>
                    <RequestCallback className={className} />
                </LazyComponent>
            </Container>
        </Section>
    );
};

export default ConsultationSection;
