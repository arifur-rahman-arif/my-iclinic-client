import ImageApiType from 'src/types/api/image';
import { ImageType3 } from 'src/types/image';

export default interface BlepharitisContentInterface {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3
		smallImage: ImageType3
		priceSection: string;
	}
	//	London’s best treatment
	section_1: {
		heading_1: string; //
		heading_2: string;
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		sub_heading: string; // Subheading
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
	},
// 	// TREATMENTS FOR BLEPHARITIS
	section_3: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		
	},

//WE CAN ALWAYS HELP
	section_4: {
		sub_heading: string; // Subheading
		heading: string
		descriptions: string[];
		list: Array<{
			pillText: string;
			title: string;
			descriptions: {
				description: string
			}[]
		}>;
	},
//	//	Book with our Blepharitis specialist
	section_5: {
		title: string;
		subTitle: string;
		descriptions: string[];
		image: ImageType3
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
