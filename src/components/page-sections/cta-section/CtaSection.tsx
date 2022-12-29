import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { smallSizes, useDeviceSize } from '@/hooks';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * CTA section
 *
 * @returns {*}  {JSX.Element}
 */
const CtaSection = (): JSX.Element => {
    const bgOverlayElement = useRef<HTMLDivElement | null>(null);
    const deviceSize = useDeviceSize();
    const containerElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bgOverlayElement.current &&
            gsap.to(bgOverlayElement.current, {
                width: smallSizes.includes(deviceSize) ? '50%' : '45%',
                duration: 3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerElement.current,
                    start: 'top 80%'
                }
            });
    }, [deviceSize]);

    return (
        <Section className="relative pt-16" ref={containerElement}>
            <div ref={bgOverlayElement} className="absolute top-0 left-0 -z-[1] h-2/4 w-0 bg-[#30CAD3] md:h-full"></div>
            <Container className="grid min-h-[25rem] !max-w-[96.1rem] grid-cols-1 items-center justify-center gap-12 md:grid-cols-[1fr_auto] md:gap-24 lg:gap-32">
                {/* Grid item 1 */}
                <div className="grid grid-cols-[auto_1fr] content-start gap-y-4 gap-x-8 justify-self-center md:gap-x-12 md:justify-self-end">
                    <span className="col-start-2 font-latoBold text-[2rem] uppercase leading-[2.8rem] text-heading">
                        Our options available
                    </span>
                    <span className="row-span-2 row-start-1 h-full w-[0.5rem] bg-white"></span>
                    <h3 className="w-full normal-case md:max-w-[55rem]">Speak to our friendly team</h3>
                </div>
                {/* Grid item 2 */}
                <div className="grid gap-4 justify-self-center">
                    <div className="flex items-center justify-start gap-4">
                        <Image
                            src="/images/icons/icon-telephone-outline.svg"
                            alt=""
                            quality={70}
                            width={20}
                            height={20}
                            className="h-8 w-8"
                        />
                        <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                            (+44) 0208 445 8877
                        </span>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Image
                            src="/images/icons/icon-chat.svg"
                            alt=""
                            quality={70}
                            width={20}
                            height={20}
                            className="h-8 w-8"
                        />
                        <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                            Chat with us
                        </span>
                    </div>
                    <div className="mt-4 grid place-items-start">
                        <Button
                            type="anchor"
                            text="Book a consultation"
                            iconPosition="left"
                            icon={
                                <Image
                                    src="/images/icons/icon-calendar-outline-darker.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default CtaSection;
