import ImageApiType from 'src/types/api/image';
import { ImageType3 } from '@/types';

export default interface AstigmatismPageContentInterface {
	masthead: {
		title: string;
		largeImage: ImageType3
		smallImage: ImageType3
	}
	section_1: {
		subheading: string; // Subheading
		heading: string;
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	section_2: {
		heading: string;
		descriptions: string[];
		image: ImageApiType;
		list: string[];
		extra_description: string; // Extra Description
	},
	section_3: {
		subheading: string; // Subheading
		heading: string
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	section6: {
		heading: string;
        descriptions: string[];
        image: ImageType3;
	}
	section_4: {
		heading: string
		description: string
	},
	ctaSection: {
		title: string
		subtitle: string
	}
	//	Children Astigmatism
	section_5: {
		heading: string
		descriptions: string[];
		image: ImageApiType;
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
