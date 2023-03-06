import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import { myopiaCoverFlowSliderList } from './sliderList';
import dynamic from 'next/dynamic';

const CoverFlowSlider = dynamic(() => import('@/components/Slider/CoverFlowSlider/CoverFlowSlider'), {
    loading: () => <ComponentLoader />
});

interface CoverFlowSliderSectionInterface {
    sliderList?: string[];
}

/**
 * Coverflow slider section
 *
 * @param {string[] | undefined} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const CoverFlowSliderSection = ({ sliderList }: CoverFlowSliderSectionInterface): JSX.Element => {
    return (
        <Section>
            <Container className="overflow-hidden">
                <LazyComponent>
                    <CoverFlowSlider sliderList={sliderList || myopiaCoverFlowSliderList} />
                </LazyComponent>
            </Container>
        </Section>
    );
};

export default CoverFlowSliderSection;
