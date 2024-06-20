import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { OffscreenSlider2 } from '@/components/Slider';
import { SlideInterface } from '@/components/Slider/OffscreenSlider/Slide2';
import Image from 'next/image';

interface OffScreenSliderSectionInterface {
    sliderList: SlideInterface[];
}

/**
 * Off screen slider component
 *
 * @param {SlideInterface[] | undefined} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const OffScreenSliderSection2 = ({ sliderList }: OffScreenSliderSectionInterface): JSX.Element => {
    return (
        <Section id="off-screen-slider-2">
            <ContainerFluid className="relative !px-0">
                <Image src="/images/section-images/homepage-slider-bg.webp" alt="" fill className="absolute inset-0" />
                <OffscreenSlider2 sliderList={sliderList} />
            </ContainerFluid>
        </Section>
    );
};

export default OffScreenSliderSection2;
