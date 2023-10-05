export default interface VitreoretinalSurgeryContent {
    masthead: {
        heading: string;
        subheading: string;
        description: string;
        image: {
            url: string;
            width: number;
            height: number;
            alt: string;
        }
    };
    section1: {
        heading: string;
        descriptions: string[];
        video: string;
        videoPoster: string;
    };
    section2: {
        heading: string;
        specialties: Array<{
            title: string;
            items: string[]
        }>;
    };
    section3: {
        heading: string;
        descriptions: string[];
        subheading: string;
        subheadingDescription: string;
        list: string[]
    };
    section4: {
        heading: string;
        list: Array<{
            title: string;
            description: string;
        }>
    };
    section5: {
        heading: string;
        subheading: string;
        descriptions: string[];
        listTitle: string
        list: string[];
        video: string;
        videoPoster: string;
    };
    section6: {
        heading: string;
        subheading: string;
        descriptions: string[];
        achievements: Array<{
            icon: string;
            year: string;
            title: string;
            description: string;
        }>
    };
    section7: {
        heading: {
            heading1: string;
            heading2: string;
        };
        subheading: string;
        description: string;
        listTitle: string
        list: string[];
        specialist: {
            image: string;
            name: string
            title: string;
            designation: string;
        }
        ctaTitle: string;
    };
}
