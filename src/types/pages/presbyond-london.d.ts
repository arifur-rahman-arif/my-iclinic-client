import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

export default interface PresbeyondlondonContentInterface extends Sustainibility {
	//	London’s best treatment
	section_1: {
        sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		description: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		heading:  string; // Bold Heading
		description: string[];
		videoUrl: string;
        alt_text: string;
		videoPoster: string;
	},
// 	// TREATMENTS FOR BLEPHARITIS
	section_3: {
		sub_heading: string; // Subheading
		heading: string; // Bold Heading
		brand_image_description: string;
		bandImageTitle: string;
		bandImageURL: string;
		review_Description: string[];
		reviewtitle: string;
	},

//WE CAN ALWAYS HELP
	section_4: {
        sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
		description: string[];
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
		descriptions: string[];
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
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},
	laserSlider:{
        map: any;
		image: string;
		altText: string;
		desktopimage: string;
		title: string;
		descriptions: string[];
	},
	reviewimageSlider:{
		imageURL: string;
	}
}
