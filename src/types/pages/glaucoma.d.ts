import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from './component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

interface SectionContent {
    subheading: string;
    heading: { // Heading
        light_heading: string; // Light heading
        bold_heading: string; // Bold heading
    };
    descriptions: string[];
    image: ImageApiType;
    large_image: ImageApiType;
}

export default interface GlaucomaPageContentProps extends Sustainibility {
    section_1: SectionContent;
    // Glaucoma Conditions
    section_2: {
        content: string;
        image: ImageApiType;
    };
    // Services
    section_3: Array<{
        mobileImage: ImageApiType; // Mobile
        desktopImage: ImageApiType; // Desktop
        title?: string;
        descriptions: string[];
        excludeNumbers?: boolean
    }>;
    // Treatment, aftercare and monitoring Glaucoma
    section_4: {
        heading: string;
        descriptions: string[];
        image_1: ImageApiType;
        image_2: ImageApiType;
    };
    // Glaucoma Treatments
    section_5: {
        subheading: string;
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
    };
    // Glaucoma Treatments Services
    section_6: Array<{
        mobileImage: ImageApiType; // Mobile
        desktopImage: ImageApiType; // Desktop
        alternativeHeading?: string;
        descriptions: string[];
        lottieComponent?: boolean; //
        dynamicMediaColumn?: any;
        video: {
            source: string;
            poster: string;
        }
    }>;
    // Taking charge of your Glaucoma!
    section_7: {
        heading: string;
        descriptions: string[];
        image: ImageApiType
    };
    // Glaucoma Annual Package
    section_8: {
        image: ImageApiType;
        large_image: ImageApiType;
        package_list: Array<{
            title: string;
            price: string;
            descriptions: string[]
        }>
    };
    // Step into the light
    section_9: {
        heading: string;
        bold_heading: string;
        image: ImageApiType;
    };
    // Slider
    section_10: {
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        slider_list: Array<{
            title: string;
            descriptions: string[]
        }>
    };
    section_11: FeaturedPatientProps;
}
