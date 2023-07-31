import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

export default interface PardiatricContentInterface {
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
		sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
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
Imagesection2: {
    image: string;
    descriptions: string;
    imageLarge: string;
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
	leftRightsection:{
        [x: string]: any;
		mobileImage: string;
		desktopImage: string;
		title: string;
		descriptions: string[];
	},
    leftRightsection2:{
        [x: string]: any;
		mobileImage: string;
		desktopImage: string;
		title: string;
		descriptions: string[];
    },
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},
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
