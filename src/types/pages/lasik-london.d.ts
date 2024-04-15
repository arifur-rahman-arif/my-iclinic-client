import { ImageType3 } from 'src/types/image';
import { Sustainibility } from './component/sustainibility';

export default interface LasiklondonContentInterface extends Sustainibility {
	masthead: {
		title: string;
		subTitle: string;
		image: ImageType3;
		priceText: string;
		financeText: string;
	}
	calculatorHeading: string;
	//	SECTION 1
	section_1: {
		heading: string; 
		descriptions: string[];
		image: string;
		large_image: string;
	},
	
	section_2: {
		title: string; // Subheading
		image: string;
		large_image: string;
	},
// 	// VIDEO SECTION
	section_3: {
		sub_heading: string; // Subheading
		heading: string; // 
			
		descriptions: string[];
		videoUrl: string;
		videoPoster: string;
		
	},
    // 	// VIDEO SECTION
	section_4: {
		sub_heading: string; // Subheading
		heading: string; // 
		branddescriptions: string[];
		brandImageTitle: string;
		bandImageURL: string;
        reviewDescription: string[];
		reviewTitle: string;
	},

	patientReviews: {
		heading: string;
		reviews: {
			name: string;
			review: string;
			link: string;
		}[];
	}

// //Transparent Price
	section_5: {
        sub_heading: string; // Subheading
		heading: string;
		descriptions: string[]; 
        image: string;
		large_image: string;
        price: string;
        priceDescription: string;
        paragraphs: string;
        button_text: string;
        list: string[];
	},
//	//	Achieve better vision
	section_6: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}// Subheading
		descriptions: string[];
		image: string;
		large_image: string;
	},
    //	Achieve better vision
	section_7: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}// Subheading
		descriptions: string[];
	},
    section_8: {
		heading: string; // Subheading
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
	lasikSlider:{
        map: any;
		desktopimage: string;
		title: string;
		descriptions: string[];
	},
	reviewimageSlider:{
		imageURL: string;
	}
}
