import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';
import { ImageType3 } from 'src/types/image';

export default interface RelexSmilePageContentProps extends Sustainibility {
    masthead: {
        title: string;
        subTitle: string;
        image: ImageType3;
        priceText: string;
        financeText: string;
    }
    calculatorHeading: string;
    // Say hello to clear vision
    section_1: {
        heading: string;
        video: {
            src: string;
        }
    };
    // Services
    section_2: Array<{
        mobileImage: ImageApiType; // Mobile
        desktopImage: ImageApiType; // Desktop
        title?: string;
        descriptions: string[];
    }>;
    // What our ReLEx patients say after treatment
    section_3: {
        heading: string;
        subheading: string;
        descriptions: string[];
        video: {
            src: string;
            poster: string;
        }
    };

    bannerSection: {
        subtitle?: string;
        title?: string;
        image?: ImageType3;
        subheading?: string;
        description?: string;
        bestpriceline?: string;
    };
    // Why RELEX SMILE
    section_4: {
        subheading: string;
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        card_list: Array<{
            image: string;
            title: string;
            description: string;
        }>
    };
    // improve your life's quality
    section_5: {
        subheading: string;
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        image: ImageApiType;
        large_image: ImageApiType;
    };
    // 97% of people
    section_8: {
        heading: string;
        subheading: string;
        descriptions: string[];
        image: ImageApiType;
    };
    // Featured Patient section
    section_9: FeaturedPatientProps;
    // Why laser Relex smile
    section_6: {
        subheading: string;
        heading:string
        image: ImageApiType;
        large_image: ImageApiType;
        list: Array<{
            title: string;
            descriptions: string[];
        }>
    };
    // Right treatment for you
    section_7: {
        subheading: string;
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        image: ImageType3;
    };

    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    },
    clearVision: {
        heading: string;
        image1: ImageType3;
        image2: ImageType3;
        image3: ImageType3;
        image4: ImageType3;
    }
}
