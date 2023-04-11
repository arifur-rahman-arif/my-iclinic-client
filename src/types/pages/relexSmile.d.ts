import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

export default interface RelexSmilePageContentProps extends Sustainibility {
    // Say hello to clear vision
    section_1: {
        heading: string;
        video: {
            src: string;
        }
    };
    // Services
    section_2: Array<{
        mobileImage: string; // Mobile
        desktopImage: string; // Desktop
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
        image: string;
        large_image: string;
    };
    // 97% of people
    section_8: {
        heading: string;
        subheading: string;
        descriptions: string[];
        image: string;
    };
    // 97% of people
    section_9: FeaturedPatientProps;
    // Why laser Relex smile
    section_6: {
        subheading: string;
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        image: string;
        large_image: string;
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
        image: string;
        large_image: string;
    };
}
