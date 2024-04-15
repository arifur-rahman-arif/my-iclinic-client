import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';
import { ImageType3 } from '@/types';

export default interface CataractContentInterface {
	masthead: {
		title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
        priceText: string;
        // financeText: string;
        // suitabilityText: string;
    },
	//	London’s best treatment
	section_1: {
        sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		heading:  string; // Bold Heading\
        subheading: string;
		descriptions: string[];
		videoUrl: string;
        alt_text: string;
		videoPoster: string;
	},
// 	// First Section
	section_3: {
		heading: string; // Bold Heading
		image: string;
		imageLarge: string;
	},

//WE CAN ALWAYS HELP
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
	leftRightsection:{
        [x: string]: any;
		mobileImage: string;
		desktopImage: string;
		title: string;
		descriptions: string[];
	},
	reviewheading: string;
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},

	treatment_fund: {
		heading?: string;
		description?: string;
		list: string[];
		card_list?: Array<any>;
	}
	InfoCards:{
        map: any;
		image: string;
		title: string;
		content: string[] | undefined;
		bulletpoints: string[] | undefined;
	},
	reviewimageSlider:{
		imageURL: string;
	},
	bettervision:{
		sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image:string;
		large_image:string;
	}
}
