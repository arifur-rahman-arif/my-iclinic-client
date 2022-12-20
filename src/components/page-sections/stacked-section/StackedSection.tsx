import { Container } from '@/components/container';
import { Section } from '@/components/section';
import StackBox from './StackBox';
import { StackListInterface } from './stackedColumnList';

interface StackedSectionInterface {
    stackList: StackListInterface[];
    h3LightHeading: string;
    h3BoldHeading: string;
    descriptions: string[];
}

/**
 * Stacked section
 *
 * @param {StackedSectionInterface} { stackList, h3LightHeading, h3BoldHeading, descriptions }
 * @returns {*}  {JSX.Element}
 */
const StackedSection = ({ stackList }: StackedSectionInterface): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 md:gap-24">
                {stackList.map((stack, index) => (
                    <StackBox
                        key={index}
                        index={index}
                        image={{
                            url: stack.image.url,
                            width: stack.image.width,
                            height: stack.image.height
                        }}
                        desktopImage={{
                            url: stack.desktopImage.url,
                            width: stack.desktopImage.width,
                            height: stack.desktopImage.height
                        }}
                        title={stack.title}
                        descriptions={stack.descriptions}
                        boxWidth={stack.boxWidth}
                        altText={stack.altText}
                    />
                ))}
            </Container>
        </Section>
    );
};

export default StackedSection;
