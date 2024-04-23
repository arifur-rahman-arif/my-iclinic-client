import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from './component/featuredPatient';
import { ImageType, ImageType3 } from '@/types';
import { ReactNode } from 'react';

interface SectionContent {
    subheading: string;
    heading: string;
    descriptions: string[];
    image: ImageApiType;
    large_image: ImageApiType;
}

export default interface GlaucomaPageContentProps {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3
        smallImage: ImageType3
        priceSection: string;
    },

    section_1: SectionContent;
    // Glaucoma Conditions
    section_2: {
        heading: string;
        descriptions: string[];
        content: string;
        image: ImageType3;
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
        heading: string;
        descriptions: string[];
        image: string;
    };
    // Glaucoma Treatments Services
   section6: {
       heading: string;
       descriptions: string[];
       image: ImageType;
   }
    section12: {
        heading: string;
        descriptions: string[];
        image: ImageType;
    }
    section13: {
        heading: string;
        descriptions: string[];
        image: ImageType;
    }
    section14: {
        heading: string;
        descriptions: string[];
        image: ImageType;
    }
    section15: {
        heading: string;
        descriptions: string[];
        image: ImageType;
    }
    ctaSection: {
        subtitle?: string;
        title?: string;
    }
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
    ctaSection2: {
        title: string;
        subTitle: string;
        image: ImageType3
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
    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    }
    section17: {
        heading: string;
        card1: {
            title: string;
            price: string;
            descriptions: string[];
        },
        card2: {
            title: string;
            price: string;
            descriptions: string[];
        }
    }
}
