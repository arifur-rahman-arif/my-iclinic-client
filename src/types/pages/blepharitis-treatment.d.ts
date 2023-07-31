import ImageApiType from 'src/types/api/image';

export default interface BlepharitisContentInterface {
	//	London’s best treatment
	section_1: {
		heading_1: string; //
		heading_2: string;
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
// 	// TREATMENTS FOR BLEPHARITIS
	section_3: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		
	},

//WE CAN ALWAYS HELP
	section_4: {
		sub_heading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		list: Array<{
			pillText: string;
			title: string;
			descriptions: {
				description: string
			}[]
		}>;
	},
//	//	Book with our Blepharitis specialist
	section_5: {
		title: string; // Subheading
		descriptions: string[];
		image: string;
		large_image: string;
	},
}
