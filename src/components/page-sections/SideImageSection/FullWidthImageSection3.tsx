import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
import { Section } from '@/components/Section';
import LadyOnCycle from '@/section-images/doctor-suggesting-patient.png';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useEffect, ReactNode } from 'react';
import { smallSizes, useDeviceSize, useOnScreen } from '@/hooks';

interface FullWidthImageSection3Interface {
    title1: ReactNode;
    title2: ReactNode;
    descriptions: string[] | ReactNode[];
}

/**
 * Full width image section 2
 *
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection3 = ({ title1, title2, descriptions }: FullWidthImageSection3Interface): JSX.Element => {
    const animationRef = useRef<HTMLDivElement | null>(null);
    const deviceSize = useDeviceSize();
    const { onEnter } = useOnScreen({
        ref: animationRef,
        triggerPosition: '80%'
    });

    useEffect(() => {
        animationRef.current &&
            onEnter &&
            gsap.to(animationRef.current, {
                width: smallSizes.includes(deviceSize) ? '70%' : '40%',
                duration: 4,
                ease: 'back.out(1.7)'
            });
    }, [onEnter]);

    return (
        <Section className="relative py-12 md:py-[5.5rem]">
            <div
                className="absolute right-0 -z-[1] hidden h-2/4 w-0 rounded-tl-primary rounded-bl-primary bg-brandLight md:top-0 md:block md:h-full"
                ref={animationRef}
            ></div>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32">
                <div className="grid gap-6 md:max-w-[55rem]">
                    <H2Variant1 className="w-full normal-case">{title1}</H2Variant1>
                    <h3 className="font-latoBold text-[2rem] normal-case leading-[2.4rem] text-secondary md:max-w-[46.7rem] md:text-[2.4rem]">
                        {title2}
                    </h3>

                    {descriptions.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>
                <div className="relative justify-self-center overflow-hidden md:row-auto">
                    <div className="absolute right-0 top-0 -z-[1] h-full w-full max-w-[75%] bg-brandLight md:hidden"></div>
                    <Image
                        src={LadyOnCycle}
                        quality={100}
                        alt="Happy woman on bike with clear vision"
                        className="relative rounded-primary"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection3;
