import { Container, ContainerFluid } from '@/components/container';
import { Section } from '@/components/section';
import { largeSizes, useDeviceSize } from '@/hooks';
import GirlHoldingGlass from '@/section-images/girl-holding-glass.png';
import ImagePiggy from '@/section-images/piggy-image.png';
import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { useRef } from 'react';

/**
 * Bottom banner 2 component
 *
 * @returns {*}  {JSX.Element}
 */
const BottomBanner2 = (): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);
    const deviceSize = useDeviceSize();

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <Section>
            <ContainerFluid className="z-[2] bg-brandLight bg-[auto_100%] bg-[right_center] bg-no-repeat px-0 md:bg-transparent md:bg-[url(/images/section-images/bottom-banner2-bg.png)]">
                <Container className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[auto_1fr_auto] md:gap-24 md:py-0">
                    {/* Grid item 1 */}
                    <div className="row-start-1 grid place-items-end justify-self-center md:row-auto">
                        <Image src={GirlHoldingGlass} quality={70} alt="Woman holding her glass" />
                    </div>
                    {/* Grid item 2 */}
                    <div className="grid md:py-24">
                        <span className="font-latoBold text-[2.4rem] leading-[3.6rem] md:text-[4rem] md:leading-[4rem]">
                            £2,400 Per Eye
                        </span>
                        <p className="mt-6 font-mulishMedium text-[2rem] leading-[3.2rem] md:max-w-[34.5rem]">
                            With 12 Months Interest-Free Finance Available!
                        </p>
                        <div className="relative mt-8 h-2 w-full md:mt-12" ref={pinAnimationTrigger}>
                            <Image
                                src="/images/icons/icon-pin-yellow.svg"
                                quality={10}
                                width={150}
                                height={2}
                                alt=""
                                className="w-0"
                                ref={pinRef}
                            />
                        </div>
                        <p className="mt-6 font-mulishBold text-[2.4rem] leading-[2.8rem] md:max-w-[34.8rem]">
                            Saving an average of £1,000 For Your treatment
                        </p>
                        <p className="mt-6 font-mulishMedium text-[2rem] leading-[3rem]">
                            When you come to My-iClinic.
                        </p>
                        <p className="mt-8 font-mulishBold uppercase leading-[3rem] text-heading2 md:mt-12">
                            The best laser eye surgery price in London{' '}
                        </p>
                    </div>

                    {largeSizes.includes(deviceSize) && (
                        <Image src={ImagePiggy} quality={70} alt="Piggy" className="place-self-end" />
                    )}
                </Container>
            </ContainerFluid>
        </Section>
    );
};

export default BottomBanner2;
