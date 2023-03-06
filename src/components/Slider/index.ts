import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardSlide, { CardSlideInterface } from './CardSlider/CardSlide';
import CardSlider from './CardSlider/CardSlider';

import NormalSlide from './CardSlider/normal-card-slide/NormalSlide';
import FeatureSlider from './FeaturePatientSlider/FeatureSlider';
import GridSlider from './GridSlider/GridSlider';
import HorizontalSlider from './HorizontalSlider/HorizontalSlider';
import ImageSlider from './ImageSlider/ImageSlider';
import JourneySlider from './JourneySlider/JourneySlider';
import OffscreenSlider from './OffscreenSlider/OffscreenSlider';
import StackSlider from './StackSlider/StackSlider';

export {
    HorizontalSlider,
    CardSlider,
    CardSlide,
    NormalSlide,
    StackSlider,
    FeatureSlider,
    GridSlider,
    ImageSlider,
    JourneySlider,
    OffscreenSlider
};

export type { CardSlideInterface };
