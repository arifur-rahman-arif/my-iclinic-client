import ImageApiType from 'src/types/api/image';
import { ImageType3 } from '@/types';

export default interface LazyEyesPageContentInterface {
	masthead: {
		title: string;
		largeImage: ImageType3
		smallImage: ImageType3
	}
	// Correct your vision Lazy eyes (amblyopia)
	section_1: {
		heading: string
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	// Amblyopia Diagnosis
	section_2: {
		heading: string
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
		extra_description: string; // Extra Description
	},
	// Amblyopia Consultation
	section_3: {
		heading: string
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	// Private Consultation Banner
	section_4: {
		heading: string
		description: string
	},
	ctaSection: {
		subtitle?: string;
		title?: string;
	}
	//	Lazy Eye Treatment
	section_5: {
		heading: string
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
	},
	// Lazy Eye Specialist Banner
	section_6: {
		heading: string // Heading
		descriptions: string[];
		phone: string;
		image: ImageApiType;
		large_image: ImageApiType;
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
