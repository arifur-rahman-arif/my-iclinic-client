import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';
import { ImageType2, ImageType3 } from '@/types';

export default interface PardiatricContentInterface {
	masthead: {
		title: string;
		largeImage: ImageType3
		smallImage: ImageType3
		priceSection: string;
	}
	//	London’s best treatment
	section_1: {
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		sub_heading: string;
		heading: string
		descriptions: string[];
		image: ImageType3;
	},
// 	// First Section
	section_3: {
		heading: string; // Bold Heading
        lightheading: string;
		image: string;
        descriptions: string[];
		imageLarge: string;
	},

	//WE CAN ALWAYS HELP
	section9: {
		heading: string;
		image: string;
		descriptions: string[];
	},

	section_4: {
        sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
		descriptions: string[];
		price_title: string;
		price_subheading: string;
		price_description: string;
		image: string;
		large_image: string;
		lists: string[];
		button_text: string;
	},
//	//	Book with our Blepharitis specialist
	section_5: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
	},
	section_6: {
		title: string;
		imagelarge: ImageType2;
		image: ImageType2;
	},
	section7:{
		heading: string;
		descriptions: string[];
		image: ImageType3
	},
	section8:{
		heading: string;
		descriptions: string[];
		image: ImageType3
	},

	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},
	ctaSection2: {
		title: string;
		subTitle: string;
		image: ImageType3
	};
	patientReviews: {
		heading: string;
		reviews: Array<{
			name: string;
			review: string;
			link: string;
		}>
	}
}
