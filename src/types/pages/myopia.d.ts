import { GalleryInterface } from '@/page-sections/ImageGallery/ImageGallery';
import { ImageType3 } from 'src/types/image';

interface SectionContent {
    heading: string;
    descriptions: string[];
    image: ImageApiType;
    large_image: ImageApiType;
}

export default interface MyopiaPageContentProps {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3
        smallImage: ImageType3
        priceSection: string;
    }
    // What is Myopia?
    section_1: SectionContent;
    // Myopia Lifestyle
    section_2: SectionContent;
    // Myopia Research
    section_3: SectionContent;
    // Myopia Treatments
    section_4: SectionContent & {
        extraDescriptions: string[];
        priceText: string
    };
    // Mitigating your child's myopia
    section_5: {
        heading: string;
        descriptions: string[];
        consultationText: string;
        image: ImageApiType;
        large_image: ImageApiType;
    };
    // Changing our indoor lifestyles
    section_6: GalleryInterface[];
    // Treatment options for Myopia Control
    section_7: {
        heading: string;
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
        image: ImageApiType;
        large_image: ImageApiType;
        list: string[];
    };
    // Have you noticed that your child has an existing or emerging eye condition?
    section_9: {
        heading: string;
        descriptions: string[];
        image: ImageApiType;
        large_image: ImageApiType;
    };

    ctaSection: {
        subtitle?: string;
        title?: string;
    }
    // Cta Section
    section_10: SectionContent;
    // Myopia experience?
    section_11: {
        heading: string;
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
        image: ImageApiType;
        large_image: ImageApiType;
    };
    // Are you above the age of 21
    section_13: {
        subheading: string; // Subheading
        heading: string
        descriptions: string[];
        image: ImageApiType;
        large_image: ImageApiType;
        list: string[];
    };
    // CTA Section
    section_14: {
        heading: string; // Heading
        subtitle: string; // Sub
        image: ImageType3;
    };
    // Plano 2025
    section_15: {
        heading: string; // Heading
        heading_image: string; // Image
        subheading: string; // Subheading
        descriptions: string[];
        image: ImageApiType;
        large_image: ImageApiType;
    };
    // Slider Images
    section_16: string[];

    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    }
}
