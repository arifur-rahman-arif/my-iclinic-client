import { BlogCardInterface } from '@/components/Card/BlogCard';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';
import { myopiaBlogList } from './sliderList';
import BulletList from '@/components/page-sections/SectionParts/BulletList';
import SectionTextColumn from '@/components/SectionTextColumn';
import BulletPoint from '@/components/page-sections/SectionParts/BulletPoint';

const OnScreenSlider = dynamic(() => import('@/components/Slider/OnScreenSlider/OnScreenSlider'), {
    loading: () => <ComponentLoader />
});

interface OnScreenSliderSectionInterface {
    sliderList?: BlogCardInterface[];
}

/**
 * On screen slider section component
 *
 * @param {BlogCardInterface[] | undefined} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const OnScreenSliderSection = ({ sliderList }: OnScreenSliderSectionInterface) => {
    return (
        <Section>
            <Container className="grid gap-12">
                <div className="grid items-center gap-x-10 gap-y-12">
                    <SectionTextColumn heading="Want to know more information about myopia?" />
                    <BulletList
                        list={['Check out our blogs']}
                        className="ml-10"
                        bold
                        bulletPoint={<BulletPoint className="-mt-1 h-6 w-8" />}
                    />
                </div>
                <div className="relative overflow-hidden">
                    <LazyComponent>
                        <OnScreenSlider sliderList={sliderList || myopiaBlogList} />
                    </LazyComponent>
                </div>
            </Container>
        </Section>
    );
};

export default OnScreenSliderSection;
