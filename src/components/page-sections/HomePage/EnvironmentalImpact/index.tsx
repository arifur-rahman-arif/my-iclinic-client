import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import EnvironmentalSlider from '@/components/Slider/EnvironmentalSlider';

/**
 * EnvironmentalImpact is a component that displays information about how vision correction can contribute to saving the planet, often emphasizing the environmental benefits.
 *
 * @returns {JSX.Element} The rendered EnvironmentalImpact component.
 */
const EnvironmentalImpact = (): JSX.Element => {
    return (
        <Section id="environmental-impact">
            <Container className="grid gap-12 md:gap-24">
                <div className="grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-12">
                    <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                    <h2 className="w-full normal-case">How vision correction saves our planet</h2>
                </div>

                <EnvironmentalSlider />
            </Container>
        </Section>
    );
};

export default EnvironmentalImpact;
