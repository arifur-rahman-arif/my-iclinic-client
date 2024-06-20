import { ContainerFluid } from '@/components/Container';
import { Section } from '@/components/Section';
import { NormalSlide } from '@/components/Slider';
import { NormalSlideInterface } from '@/components/Slider/CardSlider/normal-card-slide/NormalSlide';
import { normalSlideList } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import React from 'react';

interface NormalSlideSectionInterface {
    sliderList?: NormalSlideInterface[];
}

/**
 * Normal slide section
 *
 * @returns {*}  {JSX.Element}
 */
const NormalSlideSection = ({ sliderList }: NormalSlideSectionInterface): JSX.Element => {
    return (
        <Section id="normal-slide">
            <ContainerFluid className="overflow-hidden !px-0">
                <NormalSlide sliderList={sliderList || normalSlideList} />
            </ContainerFluid>
        </Section>
    );
};

export default NormalSlideSection;
