import { ImageType3 } from 'src/types/image';

type CorneaOfferings = {
    heading: string;
    descriptiveLabel?: string;
    descriptions: string[];
    image: Image;
}

export default interface CornealtreatmentContentInterface {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
        priceSection: string;
    },
    //	Corneal Treatments
    section_1: {
        heading: string; //
        descriptions: string[];
        image: string;
        large_image: string;
    },
    // CORNEA CONSULTATION
    section_2: {
        heading: string
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
        image: ImageType3;
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

    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    }
}
