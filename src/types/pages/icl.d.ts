import ImageApiType from 'src/types/api/image';
import { Sustainibility } from './component/sustainibility';
import { ImageType2 } from '../image';

export default interface IclContentInterface extends Sustainibility {
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
	//Life after Implantable
	section_4: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
		lists: {
			list_1: string;
			list_2: string;
			list_3: string;
		}
		rightsection:{
			savingMoneytitle: string;
			savingmoneyContent: string;
			savingTimetitle:string;
			savingtimeContent:string;
			savingVisiontitle:string;
			savingvisionContent:string;
			savingPlanettitle:string;
			savingplanetContent:string;
		}
		image: string;
		large_image: string;
	},
// 	ICL PATIENT
	section_3: {
		sub_heading: string; // Subheading
		heading: string; // Bold Heading
		descriptions: string[];
		bandImageTitle: string;
		bandImageURL: string;
		review_Description: string[];
		reviewtitle: string;
	},

//	//	Book with our Blepharitis specialist
	section_5: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
	},
	// VIDEO
	section_2: {
		heading: string; // Bold Heading
		lists: { 
			first_data: {
				// Heading
			percentage: string; // Light Heading
			text: string; // Bold Heading
			},
			second_data: {
				percentage: string; // Light Heading
				text: string; 
			}
		}
		videoUrl: string;
		alt_text: string;
		videoPoster: string;
	},
	section_6: {
		title: string;
		descriptions: string[];
		image: string;
		imageLarge: string;
	},
	// Our Implantable Contact Lenses
	section_7: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		price_title: string;
		price_subheading: string;
		price_description: string;
		lists: string[];
		button_text: string;
		image: string;
		large_image: string;
		alt_text: string;
	},
	section_8: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
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
	lensesSlider:{
        map: any;
		desktopimage: string;
		image: string;
		title: string;
		descriptions: string[];
	}
}
