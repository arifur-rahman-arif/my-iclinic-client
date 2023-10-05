import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
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

    const sectionRefPosition = useOnScreen({ ref: sectionRef, triggerPosition: '80%' });
    const [showSlider, setShowSlider] = useState<boolean>(false);

    useEffect(() => {
        if (sectionRefPosition.onEnter) {
            setTimeout(() => {
                setShowSlider(true);
            }, 3100);
        }
    }, [sectionRefPosition]);

    return (
        <Section id="journey">
            {showSlider ? (
                <Slider {...{ sliderList }} />
            ) : (
                <ContainerFluid ref={sectionRef} className="grid place-items-center gap-12 bg-[#003E79] !px-0 py-40">
                    <h2 className="font-latoBold normal-case text-white">Your journey in our clinic</h2>

                    <p className="text-white">What to expect when you choose our clinic</p>

                    <div className="mt-12 grid place-items-center gap-6">
                        <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white lg:text-[2.4rem] lg:leading-[3.2rem]">
                            Starting
                        </span>
                        <div className="relative h-4 w-[15.5rem] rounded-primary bg-white">
                            <div
                                className={`absolute top-0 left-0 h-full rounded-primary bg-[#00BFFF] transition-all duration-[3s] ${
                                    sectionRefPosition.onEnter ? 'w-full' : 'w-0'
                                }`}
                            ></div>
                        </div>
                    </div>
                </ContainerFluid>
            )}
        </Section>
    );
};

export default JourneySlider;
