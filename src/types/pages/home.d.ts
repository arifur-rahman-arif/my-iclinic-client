import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

export default interface HomeContentInterface extends Sustainibility {
	//	London’s best treatment
	section_1: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
	private_eye_card: Array<{
		image: string;
		title: string;
		pillText: string;
		cardList: string[];
		cardLink: string;
	}>,
	// SAVING SLIDER
	savingsliderSection: Array<{
		title: string;
		description: string;
		image: string;
		large: string;
	}>,
// VISION SLIDER
journeySlider: Array<{
		title: string;
		list: string[];
		image: string;
	}>,
	section_2: {
		heading: string;
		descriptions: string[];
		image: string;
		large_image: string;
	},
// // 	//
	section_3: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		
	},
	//MISSION SLIDER
	imageSlider: Array<{
		image: Array<{
			url: string
		 }>;
		largeImage: Array<{
			url: string
		 }>;
	}>,
// //plastic free life
	section_4: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
	},
}
