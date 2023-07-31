import { Container, ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
// eslint-disable-next-line no-unused-vars
import GirlHoldingGlass from '@/section-images/girl-holding-glass.png';
import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { useRef } from 'react';

interface BottomBanner2Interface {
    subtitle?: string;
    title?: string;
    image?: string;
    subheading?: string;
    description?: string;
    bestpriceline?: string;
}

/**
 * Bottom banner 2 component
 *
 * @param {BottomBanner2Interface} {
 *     subtitle = 'With 12 Months Interest-Free Finance Available!'
 * }
 * @returns {*}  {JSX.Element}
 */
const BottomBanner2 = ({
    title = '£2,400 Per Eye',
    subtitle = 'With 24 Months Interest-Free Finance Available!',
    // image = '@/section-images/girl-holding-glass.png',
    subheading = 'Saving an average of £1,000 For Your treatment',
    description = 'When you come to My-iClinic.',
    bestpriceline = 'The best laser eye surgery price in London'
}: BottomBanner2Interface): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <Section>
            <ContainerFluid className="z-[2] bg-brandLight bg-[auto_100%] bg-[right_center] bg-no-repeat !px-0 md:bg-transparent md:bg-[url(/images/section-images/bottom-banner2-bg.png)]">
                <Container className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[auto_1fr_auto] md:gap-24 md:py-0">
                    {/* Grid item 1 */}
                    <div className="row-start-1 grid place-items-end justify-self-center md:row-auto">
                        <Image src={GirlHoldingGlass} quality={70} alt="Woman holding her glass" />
                    </div>
                    {/* Grid item 2 */}
                    <div className="grid md:py-24">
                        <span className="font-latoBold text-[2.4rem] leading-[3.6rem] md:text-[4rem] md:leading-[4rem]">
                        {title}
                        </span>
                        <p className="mt-6 font-mulishMedium text-[2rem] lowercase leading-[3.2rem] first-letter:uppercase md:max-w-[34.5rem]">
                            {subtitle}
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
                        <p className="mt-6 font-mulishBold text-[2.4rem] lowercase leading-[2.8rem] first-letter:uppercase md:max-w-[34.8rem]">
                            {subheading}
                        </p>
                        <p className="mt-6 font-mulishMedium text-[2rem] leading-[3rem]">
                            {description}
                        </p>
                        <p className="mt-8 font-mulishBold uppercase leading-[3rem] text-heading2 md:mt-12">
                            {bestpriceline}
                        </p>
                    </div>

                    {/* {largeSizes.includes(deviceSize) && (
                        <Image src={ImagePiggy} quality={70} alt="Piggy" className="place-self-end" />
                    )} */}
                </Container>
            </ContainerFluid>
        </Section>
    );
};

export default BottomBanner2;
