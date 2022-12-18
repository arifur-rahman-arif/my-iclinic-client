import { ContainerFluid } from '@/components/container';
import { Section } from '@/components/section';
import { NormalSlide } from '@/components/slider';
import { normalSlideList } from '@/components/slider/card-slider/normal-card-slide/normalSlideList';
import React from 'react';

/**
 * Normal slide section
 *
 * @returns {*}  {JSX.Element}
 */
const NormalSlideSection = (): JSX.Element => {
    return (
        <Section>
            <ContainerFluid className="px-0">
                <NormalSlide sliderList={normalSlideList} />
            </ContainerFluid>
        </Section>
    );
};

export default NormalSlideSection;
