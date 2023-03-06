import { Container } from '@/components/Container';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { StackSlider } from '@/components/Slider';
import { ReactNode } from 'react';
import { StackListInterface } from './stackedColumnList';

interface StackedSectionInterface {
    stackList: StackListInterface[];
    h3LightHeading: ReactNode;
    h3BoldHeading: ReactNode;
    descriptions?: string[];
    noImages?: boolean;
    defaultContainerClassName?: string;
    containerClassName?: string;
}

/**
 * Stacked section
 *
 * @param {StackedSectionInterface} { stackList, h3LightHeading, h3BoldHeading, descriptions }
 * @returns {*}  {JSX.Element}
 */
const StackedSection = ({
    stackList,
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    noImages,
    defaultContainerClassName = 'grid gap-12 md:gap-20 2xl:gap-24',
    containerClassName
}: StackedSectionInterface): JSX.Element => {
    return (
        <Section>
            <Container className={`${defaultContainerClassName} ${containerClassName}`}>
                <TextColumn h3BoldHeading={h3BoldHeading} descriptions={descriptions} h3LightHeading={h3LightHeading} />
                <StackSlider sliderList={stackList} noImages={noImages} />
            </Container>
        </Section>
    );
};

export default StackedSection;
