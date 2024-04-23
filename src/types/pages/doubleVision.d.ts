import { ImageType3 } from '@/types';

export default interface DoubleVisionPageContentInterface {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3
		smallImage: ImageType3
	}
	section5: {
		heading: string;
		descriptions: string[];
		image: string;
	}
	// Symptoms and vision
	section_1: {
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
		list: string[];
		extra_description: string; // Extra Description
	},
	// Consultation & treatment
	section_2: {
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// What is included in my private consultation?
	section_3: {
		heading: string
		descriptions: string[];
		image: string;
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
