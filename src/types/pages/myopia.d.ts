import { GalleryInterface } from '@/page-sections/ImageGallery/ImageGallery';
import { ImageType, ImageType2 } from '@/types';

interface SectionContent {
    heading: { // Heading
        light_heading: string; // Light heading
        bold_heading: string; // Bold heading
    };
    descriptions: string[];
    image: string;
    large_image: string;
}

export default interface MyopiaPageContentProps {
    // What is Myopia?
    section_1: SectionContent;
    // Myopia Lifestyle
    section_2: SectionContent;
    // Myopia Research
    section_3: SectionContent;
    // Myopia Treatments
    section_4: SectionContent;
    // Mitigating your child's myopia
    section_5: {
        heading: string;
        descriptions: string[];
        image: string;
        large_image: string;
    };
    // Changing our indoor lifestyles
    section_6: GalleryInterface[];
    // Treatment options for Myopia Control
    section_7: {
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        card_list: Array<{
            title: string;
            descriptions: string[];
        }>
    };
    // Other Treatments options
    section_8: {
        subheading: string; // Subheading
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        image: string;
        large_image: string;
        list: string[];
    };
    // Have you noticed that your child has an existing or emerging eye condition?
    section_9: {
        heading: string;
        descriptions: string[];
        image: string;
        large_image: string;
    };
    // Cta Section
    section_10: SectionContent;
    // Myopia experience?
    section_11: {
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        stack_list: Array<{
            title: string,
            image: any;
            desktopImage: any;
            descriptions: string[];
        }>
    };
    // Booking your child’s Myopia consultation
    section_12: {
        heading: string;
        descriptions?: string[];
        image: string;
        large_image: string;
    };
    // Are you above the age of 21
    section_13: {
        subheading: string; // Subheading
        heading: { // Heading
            light_heading: string; // Light heading
            bold_heading: string; // Bold heading
        };
        descriptions: string[];
        image: string;
        large_image: string;
        list: string[];
    };
    // CTA Section
    section_14: {
        heading: string; // Heading
        image: string;
        large_image: string;
    };
    // Plano 2025
    section_15: {
        heading: string; // Heading
        heading_image: string; // Image
        subheading: string; // Subheading
        descriptions: string[];
        image: string;
        large_image: string;
    };
    // Slider Images
    section_16: string[];
}
