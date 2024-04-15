import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
// Import IconDarkBall from '@/icons/icon-dark-ball.svg';
// import IconLetter from '@/icons/icon-letter-a.svg';
// import IconCircle from '@/icons/icon-back-yellow-circle.svg';
// import Image from 'next/image';
const LottieComponent = dynamic(() => import('./LottieComponent'));

interface Props {
    heading?: string;
}

/**
 * Full width lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieSection = ({ heading }: Props): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: sectionRef, triggerPosition: '90%' });

    return (
        <Section className="bg-[#003E79] md:min-h-[38.2rem]">
            <ContainerFluid className="grid grid-cols-1 gap-12 py-12 md:py-24" ref={sectionRef}>
                <h2 className="w-full justify-self-center text-center normal-case md:max-w-[57.9rem]">
                    <strong className="normal-case text-white">
                        {heading || 'Achieve clear vision at all distances'}
                    </strong>
                </h2>
                <LottieComponent startAnimation={onEnter} />
                <>
                    {/* <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr] md:gap-24">
                    <H3Variant2 className="sm:max-w-[24rem]">Possible visual side effects</H3Variant2>
                    <div className="flex flex-wrap items-start justify-start gap-16">
                        <div className="grid place-items-center gap-4">
                            <span className="font-mulishMedium text-[1.6rem] leading-[2.4rem]">Starbursts</span>
                            <Image quality={100} src={IconDarkBall} alt="" />
                        </div>
                        <div className="grid place-items-center gap-4">
                            <span className="font-mulishMedium text-[1.6rem] leading-[2.4rem]">Astigmatism</span>
                            <Image quality={100} src={IconLetter} alt="" />
                        </div>
                        <div className="grid place-items-center gap-4">
                            <span className="font-mulishMedium text-[1.6rem] leading-[2.4rem]">Glares/Halos</span>
                            <Image quality={100} src={IconCircle} alt="" />
                        </div>
                    </div>
                </div> */}
                </>
            </ContainerFluid>
        </Section>
    );
};

export default LottieSection;
