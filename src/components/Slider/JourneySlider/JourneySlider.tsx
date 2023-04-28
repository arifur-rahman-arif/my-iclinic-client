import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SliderListInterface } from './journeySliderList';
import Slider from './Slider';

interface StackSliderInterface {
    sliderList: SliderListInterface[];
}

/**
 * JourneySlider slider component that will act as vertical slider in mobile devices
 *
 * @param {HorizontalSliderPropsInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const JourneySlider = ({ sliderList }: StackSliderInterface): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const sectionRefPosition = useOnScreen({ ref: sectionRef, triggerPosition: '50%' });
    const [showSlider, setShowSlider] = useState<boolean>(false);

    useEffect(() => {
        if (sectionRefPosition.onEnter) {
            setTimeout(() => {
                setShowSlider(true);
            }, 3100);
        }
    }, [sectionRefPosition]);

    return (
        <Section>
            {showSlider ? (
                <Slider {...{ sliderList }} />
            ) : (
                <ContainerFluid className="!px-0">
                    <div>
                        <Image
                            src="/images/section-images/jourey-image.png"
                            alt=""
                            width={436}
                            height={350}
                            className="h-full max-h-[35rem] w-full md:hidden"
                        />
                        <Image
                            src="/images/section-images/jourey-image-large.png"
                            alt=""
                            fill
                            className="z-[-1] hidden h-full w-full md:block"
                        />
                        <div className="grid place-items-center py-40" ref={sectionRef}>
                            <Image
                                src="/images/section-images/journey-bg.png"
                                alt=""
                                fill
                                className="z-[-1] w-full md:hidden"
                            />
                            <h2 className="text-center font-latoLight text-[7.6rem] leading-[7.4rem] text-white lg:text-[14rem] lg:leading-[14rem]">
                                Your
                            </h2>
                            <p className="mt-6 text-center font-latoLight text-[3.2rem] leading-[3.2rem] text-white lg:text-[4.8rem] lg:leading-[4.8rem]">
                                Journey in our clinic
                            </p>
                            <p className="mt-12 text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-white lg:text-[3rem] lg:leading-[3.8rem]">
                                What to expect when you choose our clinic
                            </p>

                            <div className="mt-36 grid place-items-center gap-6">
                                <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white lg:text-[2.4rem] lg:leading-[3.2rem]">
                                    Starting
                                </span>
                                <div className="relative h-4 w-[15.5rem] rounded-primary bg-[#EAEDEE]">
                                    <div
                                        className={`absolute top-0 left-0 h-full rounded-primary bg-[#0186B0] transition-all duration-[3s] ${
                                            sectionRefPosition.onEnter ? 'w-full' : 'w-0'
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerFluid>
            )}
        </Section>
    );
};

export default JourneySlider;
