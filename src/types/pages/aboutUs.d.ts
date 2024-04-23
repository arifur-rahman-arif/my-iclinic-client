import ImageApiType from 'src/types/api/image';
import { ImageType3 } from 'src/types/image';

interface SectionProps {
    subheading: string;
    heading: string;
    descriptions: string[];
    image: ImageApiType
    large_image: ImageApiType
}

interface AboutUsPageContent {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3
        smallImage: ImageType3
        priceSection: string;
    }
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
        image: ImageType3
        large_image: ImageType3
    };
    // No hidden cost
    section_6: {
        heading1: string;
        heading2: string;
        descriptions1: string[];
        descriptions2: string[];
        image: ImageApiType
        large_image: ImageApiType
    };
    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    }
}

export default AboutUsPageContent
