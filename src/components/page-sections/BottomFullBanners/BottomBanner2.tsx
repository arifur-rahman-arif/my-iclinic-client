import { Button2 } from '@/components/Buttons';
import { Container, ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
// eslint-disable-next-line no-unused-vars
import GirlHoldingGlass from '@/section-images/girl-holding-glass.webp';
import { ImageType3 } from '@/types';
import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { useRef } from 'react';

interface BottomBanner2Interface {
    subtitle?: string;
    titleAttribute?: string;
    title?: string;
    image?: ImageType3;
    subheading?: string;
    description?: string;
    bestpriceline?: string;
    link?: string;
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
    titleAttribute,
    subtitle = 'With 24 Months Interest-Free Finance Available!',
    subheading = 'Saving an average of £1,000 For Your treatment',
    description = 'When you come to My-iClinic.',
    bestpriceline = 'The best laser eye surgery price in London',
    image,
    link
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
            <ContainerFluid className="z-[2] bg-brandLight bg-[auto_100%] bg-[right_center] bg-no-repeat !px-0 md:bg-transparent md:bg-[url(/images/section-images/bottom-banner2-bg.webp)]">
                <Container className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[auto_1fr_auto] md:gap-24 md:py-0">
                    {/* Grid item 1 */}
                    <div className="row-start-1 grid place-items-end justify-self-center md:row-auto">
                        <Image src={GirlHoldingGlass} alt="Woman holding her glass" {...(image as any)} />
                    </div>
                    {/* Grid item 2 */}
                    <div className="grid md:py-24">
                        <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">
                            {title} <span className="text-heading">{titleAttribute || '/ Per eye'}</span>
                        </span>
                        <p className="font-latoBold text-[2.4rem] lowercase leading-[3.2rem] text-[#893277] first-letter:uppercase">
                            {subtitle}
                        </p>

                        <div className="mt-12 grid md:mt-24">
                            <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>
                            <p className="font-mulishBold text-[2rem] lowercase leading-[2.8rem] text-heading first-letter:uppercase ">
                                {subheading}
                            </p>
                        </div>
                        <p className="">{description}</p>
                        <p className="mt-10 font-mulishBold uppercase  text-heading">{bestpriceline}</p>
                        <Button2 type="anchor" link={link} text="Check our price" className="mt-4 justify-self-start" />
                    </div>
                </Container>
            </ContainerFluid>
        </Section>
    );
};

export default BottomBanner2;
