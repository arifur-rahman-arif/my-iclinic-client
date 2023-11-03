type Image = {
    src: string;
    url?: string;
    width: number;
    height: number;
    alt: string;
}

type CorneaOfferings = {
    heading: string;
    descriptiveLabel?: string;
    descriptions: string[];
    image: Image;
}

export default interface CornealtreatmentContentInterface {
    //	Corneal Treatments
    section_1: {
        heading: string; //
        descriptions: string[];
        image: string;
        large_image: string;
    },
    // CORNEA CONSULTATION
    section_2: {
        subheading: string; // Subheading
        heading: { // Heading
            light_heading: string; // Light Heading
            bold_heading: string; // Bold Heading
        },
        lists: string[];
        descriptions: string[];
        image: string;
        large_image: string;
    },
// // 	//
    section_3: {
        subtitle: string;
        title: string;
        description: string;
    }
    // Treatments we offer
    section4: {
        heading: string;
        subheading: string;
        descriptions: string[];
        image: Image
    }
    // Corneal cross-linking surgery
    section5: CorneaOfferings
    // Lamellar Corneal Graft
    section6: CorneaOfferings
    // CAIRS
    section7: CorneaOfferings
    // DMEK
    section8: CorneaOfferings
}
