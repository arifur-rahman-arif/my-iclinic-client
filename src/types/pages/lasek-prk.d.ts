import ImageApiType from 'src/types/api/image';
import { Sustainibility } from './component/sustainibility';

export default interface LasekprkContentInterface extends Sustainibility {
	//	London’s best treatment
	section_1: {
        heading: string;
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
        
        sub_heading: string;
        heading: { // Heading
        light_heading: string; // Light Heading
        dark_heading: string; // Bold Heading
    },
		descriptions: string[];
		image: string;
		large_image: string;
	},
    price_finance: {
        interest_free_finance: string;
    title?: string;
    image?: string;
    subheading?: string;
    description?: string;
    bestpriceline?: string;
    },
// 	// EyE PRICE
	section_3: {
		sub_heading: string; // Subheading
        description: string;
		title: string;
	},
	ptkSection: {
		description: string;
		title: string;
	},
//WE 
	section_4: {
		heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
		descriptions: string[];
	},
	clinicSlider:{
        map: any;
		desktopimage: string;
		title: string;
		descriptions: string[];
	}
//	//	Book
	section_5: {
        sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
        alttext: string;
        bookbuttontext: string;
	},
	section_6: {
        heading: string;
        subheading: string;
		descriptions: string[];
		image: string;
	},
	section_7: {
        heading: string;
        subheading: string;
		descriptions: string[];
        bandImageTitle: string;
        image: string;
        review_title: string;
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
	choosebest:{
		lightheading?: string;
		boldheading?: string;
		description?: string;
	}
}
