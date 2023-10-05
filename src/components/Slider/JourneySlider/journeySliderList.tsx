import { SlideInterface } from './Slide';

export interface SliderListInterface
    extends Omit<SlideInterface, 'index' | 'active' | 'swiperRef' | 'sliderListLength'> {}

export const journeySliderListHome: SliderListInterface[] = [
    {
        title: 'Begin your care journey',
        list: [
            'Easy booking with our patient care liaison',
            'Accessible resources available from our specialists',
            'Detailed understanding & instructions given before your private consultation'
        ],
        image: '/images/section-images/journey-slider-image-1.png'
    },
    {
        title: 'Private Consultation',
        list: [
            'Comprehensive eye assessments and scans',
            'One-to-one with your dedicated ophthalmologist',
            'Understanding your best treatment options'
        ],
        image: '/images/section-images/journey-slider-image-2.png'
    },
    {
        title: 'Quality care & private treatment',
        list: [
            'Guidance from our friendly team & clinic nurses',
            'Comfortable, stress-free treatment in our private suites',
            'Your ophthalmologist as your dedicated surgeon with over 30+ years experience'
        ],
        image: '/images/section-images/journey-slider-image-3.png'
    },
    {
        title: 'Aftercare Appointments',
        list: [
            'Free aftercare check ups with your specialist / surgeon',
            'Comprehensive eye assessments & scans',
            'Patient care advice always available'
        ],
        image: '/images/section-images/journey-slider-image-4.png'
    }
];
