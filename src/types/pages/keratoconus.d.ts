import { ImageType3 } from 'src/types/image';

export default interface keratoconusContentInterface {
	//	London’s best treatment
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
        priceSection: string;
    },
    section_3: {
        heading: string;
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    section_4: {
        heading: string
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    section_5: {
        heading: string
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    minimally_invasive: {
        heading:string;
        image:string;
        imageLarge:string;
        descriptions: string[];
    },
    crosslinking: {
        heading: string
    },
    crossList:Array<{
        title: string;
        descriptions: string[];
    }>,
    section_6: {
        title: string;
        descriptions: string[];
        image:ImageType3;
    },
    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    }
}