import { Container } from '@/components/Container';
import { SpanVariant1 } from '@/components/Headings';
import Cta from '@/components/page-sections/SectionParts/Cta';
import { Section } from '@/components/Section';
import { useDeviceSize, useOnScreen } from '@/hooks';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';

interface CtaSectionInterface {
    subtitle?: string;
    title?: string;
    buttonClassName?: string;
    description?: ReactNode;
}

/**
 * CTA section
 *
 * @returns {*}  {JSX.Element}
 */
const CtaSection = ({ subtitle, title, buttonClassName, description }: CtaSectionInterface): JSX.Element => {
    const bgOverlayElement = useRef<HTMLDivElement | null>(null);
    const deviceSize = useDeviceSize();
    const containerElement = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerElement, triggerPosition: '80%' });
    useEffect(() => {
        bgOverlayElement.current &&
            onEnter &&
            gsap.to(bgOverlayElement.current, {
                width: '100%',
                duration: 4
            });
    }, [deviceSize, onEnter]);

    return (
        <Section className="relative py-16" ref={containerElement}>
            <div ref={bgOverlayElement} className="absolute top-0 left-0 -z-[1] h-full w-0 bg-teal md:h-full"></div>
            <Container className="grid min-h-[25rem] !max-w-[96.1rem] grid-cols-1 items-center justify-center gap-24 md:grid-cols-[1fr_auto] md:gap-24 lg:gap-32">
                {/* Grid item 1 */}
                <div className="grid grid-cols-[auto_1fr] content-start gap-y-4 gap-x-8 justify-self-center md:gap-x-12 md:justify-self-start">
                    <span className="h-full w-[0.5rem] bg-white"></span>
                    <div className="grid gap-4">
                        <SpanVariant1>{subtitle || 'Our options available'}</SpanVariant1>
                        <h2 className="w-full font-latoBold text-[3rem] capitalize leading-[3.6rem] md:text-[4.8rem] md:leading-[4.8rem]">
                            {title || 'Speak to our friendly team'}
                        </h2>
                        {description && <p className="">{description}</p>}
                    </div>
                </div>
                {/* Grid item 2 */}
                <Cta buttonClassName="border-teal bg-white hover:!border-white hover:bg-teal" />
            </Container>
        </Section>
    );
};

export default CtaSection;
