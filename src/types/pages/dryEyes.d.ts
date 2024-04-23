import ImageApiType from 'src/types/api/image';
import { ImageType3 } from '@/types';

export default interface DryEyesContentInterface {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3
		smallImage: ImageType3
	}
	//	Dry eye syndrome symptoms
	section_1: {
		subheading: string; // Subheading
		heading: string; //
		descriptions: string[];
		image: string;
		large_image: string;
	},
//	Dry eye consultation
	section_2: {
		subheading: string; // Subheading
		heading: string; //
		descriptions: string[];
		image: string;
		large_image: string;
		list: string[];
	},
	//
	section_3: {
		subheading: string; // Subheading
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
		list: Array<{
			pillText: string;
			title: string;
			descriptions: {
				description: string
			}[]
		}>;
	},

//Friendly vision correction section
	section_4: {
		heading: string;
		descriptions: string[];
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
