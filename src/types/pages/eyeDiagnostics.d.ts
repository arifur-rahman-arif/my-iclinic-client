import { ImageType3 } from '@/types';

export default interface EyeDiagnosticsPageContentInterface {
    masthead: {
        title: string;
        subTitle: string;
        image: ImageType3;
    }
    patientReviews: {
        heading: string;
        reviews: {
            name: string;
            review: string;
            link: string;
        }[];
    }
    section1: {
        heading: string;
        descriptions: string[];
        image: ImageType3;
    }
    section2: {
        heading: string;
        description: string
    }
    section3: {
        heading: string;
        cards: {
            title: string;
            description: string;
            image: ImageType3;
        }[];
    }
    ctaSection: {
        title?: string;
        subTitle?: string;
        descriptions?: string[];
        image?: any;
    }
}
