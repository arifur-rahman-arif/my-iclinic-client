import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { OffscreenSlider } from '@/components/Slider';
import { SlideInterface } from '@/components/Slider/OffscreenSlider/Slide';

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
const OffScreenSliderSection = ({ sliderList }: OffScreenSliderSectionInterface): JSX.Element => {
    return (
        <Section>
            <ContainerFluid className="max-w-[calc(100%_-_calc(calc(100%_-_124rem)_/_2))] !px-0 md:ml-[calc(calc(100%_-_var(--container-width))_/_2)]">
                <OffscreenSlider sliderList={sliderList} />
            </ContainerFluid>
        </Section>
    );
};

export default OffScreenSliderSection;
