import { ImageType3 } from '@/types';


export default interface FlashesContentInterface {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3
        smallImage: ImageType3
        priceSection: string;
    }
	//	London’s best treatment
	section_1: {
        heading: string; // Bold Heading
        descriptions: string[];
		image: string;
		image_large: string;
	},
    section_2: {
        heading: string; // Bold Heading
        descriptions: string[];
		image: string;
		image_large: string;
	},
    section_3: {
        heading: string; // Bold Heading
		lists: string[];
        descriptions: string[];
		image: string;
		image_large: string;
    },
    section_4: {
        heading: string;
		lists: string[];
        descriptions: string[];
		image: string;
		image_large: string;
    },
    speak_to_our_team: {
        subtitle: string;
        title: string;
    },
    bookingsec: {
        title:string;
        descriptions:string[];
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
