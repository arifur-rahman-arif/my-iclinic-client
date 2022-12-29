import { Container } from '@/components/container';
import { H2Variant1 } from '@/components/headings';
import { Section } from '@/components/section';
import LadyOnCycle from '@/section-images/lady-on-cycle.png';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

/**
 * Full width image section 2
 *
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection3 = (): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        imageRef.current &&
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                translateX: 0,
                duration: 2
            });
    }, []);

    return (
        <Section className="relative">
            <div className="absolute right-0 -z-[1] hidden h-2/4 w-full max-w-[70%] bg-brandLight md:top-0 md:block md:h-full md:max-w-[40%]"></div>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32">
                <div className="grid gap-6 md:max-w-[55rem]">
                    <H2Variant1 className="w-full normal-case">
                        The cost of Presbyond surgery couldn’t be easier!
                    </H2Variant1>
                    <h2 className="normal-case text-secondary md:text-[2.4rem]">
                        From our clinic are extremely happy with their vision after laser eye surgery.
                    </h2>

                    <p>
                        Most patients say they wish they’d done it sooner! One of the most mentioned reasons for having
                        laser eye surgery is improved confidence and lifestyle.
                    </p>
                </div>
                <div className="relative justify-self-center overflow-hidden md:row-auto">
                    <div className="absolute right-0 top-0 -z-[1] h-full w-full max-w-[75%] bg-brandLight md:hidden"></div>

                    <Image
                        ref={imageRef}
                        src={LadyOnCycle}
                        quality={70}
                        alt="Happy woman on bike with clear vision"
                        className="relative translate-x-[30rem]"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection3;
