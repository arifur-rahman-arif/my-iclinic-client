import { BlogCardInterface } from '@/components/Card/BlogCard';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import IconAngle from '@/icons/icon-angle-right.svg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { myopiaBlogList } from './sliderList';

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
                <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-12 items-center">
                    <h2 className="normal-case w-full max-w-[51.2rem] col-span-2">
                        Want to know more information about Myopia?
                    </h2>
                    <Image src={IconAngle} alt="" />
                    <span className="text-[2rem] leading-[2.8rem] font-latoBold uppercase">Check out our blogs</span>
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
