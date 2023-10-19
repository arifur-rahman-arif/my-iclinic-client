type Image = {
    src: string;
    url?: string;
    width: number;
    height: number;
    alt: string;
}


export default interface RetinaTreatmentsContents {
    masthead: {
        heading: string;
        subheading: string;
        image: Image,
    };
    // My-iClinic ophthalmologists are medical doctors
    section1: {
        heading: string;
        descriptions: string[];
        image: string,
    };
    // Why my-iclinic
    section2: {
        heading: string;
        cards: Array<{
            icon: string;
            title: string;
            description: string;
        }>
        lastCard: {
            image: string;
            title: string;
        }
    };
    // Yvonne Luo
    section3: {
        heading: string;
        designation: string;
        descriptions: string[];
        subheading: string;
        image: string
        largeImage: string;
    };
    // Floaters
    section4: {
        heading: string;
        subheading: string;
        descriptions: string[];
        image: string
    };
    // Retinal Detachment
    section5: {
        heading: string;
        descriptions: string[];
        subheading: string;
        image: Image
        largeImage: Image;
    };
    // Macular Hole
    section6: {
        heading: string;
        descriptions: string[];
        subheading: string;
        image: Image
        largeImage: Image;
    };
    // Epiretinal Membrane
    section7: {
        heading: string;
        descriptions: string[];
        subheading: string;
        image: string
    };
    // Diabetic Retinopathy
    section8: {
        heading: string;
        descriptions: string[];
        subheading: string;
        image: Image
        largeImage: Image;
    };
    // Your eyes deserve it.
    section9: {
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
