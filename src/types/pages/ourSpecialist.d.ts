type Image = {
    src: string;
    url?: string;
    width: number;
    height: number;
    alt: string;
}

export interface OurSpecialistPageContent {
    masthead: {
        heading: string;
        subheading: string;
        image: Image,
    };
    section1: {
        heading: string;
    };
}
