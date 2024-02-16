import { ImageType3 } from '@/types';

type SurgerySection = {
    heading: string;
    descriptions: string[];
    image: ImageType3;
    link: string;
}

export interface ComparisonTable {
    name: string;
    tableRows: any;
}

export default interface CharityPageContentInterface {
    //	London’s best treatment
    masthead: {
        heading: string;
        subheading: string;
        description: string;
        image: ImageType3,
    };
    // Project overviews
    section1: {
        heading: string;
        cards: Array<{
            image: ImageType3,
            title: string
            description: string
        }>
    }
    // How antibiotic resistance spreads
    section2: {
        heading: string;
        image: ImageType3;
    }
    // The clock is ticking
    section3: {
        heading: string;
        introduction: string;
        image: ImageType3;
        description: string
        summary: string;
    },
    // Impact beyond borders
    section4: {
        heading: string;
        introduction: string;
        descriptions: string[];
        list: string[];
        video: string;
        videoPoster: ImageType3;
    },
    // Celebration
    section5: {
        heading: ImageType3;
        introduction: string;
        profile1: {
            image: ImageType3;
            title: string;
            description: string
        },
        profile2: {
            image: ImageType3;
            title: string;
            description: string
        }
    },
    // Support our mission on GoFundMe
    section6: {
        heading: string;
        descriptions: string[];
        image: ImageType3;
    },
    // Join our mission
    section7: {
        heading: string;
        introduction: string;
        description: string;
    },
}
