import ImageApiType from 'src/types/api/image';

interface SectionProps {
    subheading: string;
    heading: { // Heading
        light_heading: string; // Light heading
        bold_heading: string; // Bold heading
    };
    descriptions: string[];
    image: ImageApiType
    large_image: ImageApiType
}

interface AboutUsPageContent {
    section_1: string[];
    // My-iClinic sources
    section_2: {
        heading: string;
        description: string;
    };
    // How we started
    section_3: SectionProps;
    // Our approach
    section_4: SectionProps;
    // Our Lifelong medical practices & research
    section_5: {
        heading: string;
        descriptions: string[];
        image: ImageApiType
        large_image: ImageApiType
    };
    // No hidden cost
    section_6: SectionProps;
}

export default AboutUsPageContent
