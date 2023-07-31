import ImageApiType from 'src/types/api/image';

export default interface CornealtreatmentContentInterface {
	//	Corneal Treatments
	section_1: {
		heading: string; //
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// CORNEA CONSULTATION
	section_2: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		},
		lists: string[];
		descriptions: string[];
		image: string;
		large_image: string;
	},
// // 	//
	section_3: {
		subtitle: string;
		title: string;
		description: string;
	}

// //WE CAN ALWAYS HELP
// 	section_4: {
//         sub_heading: string; // Subheading
// 		heading: { // Heading
// 			light_heading: string; // Light Heading
// 			bold_heading: string; // Bold Heading
// 		}
// 		descriptions: string[];
// list: Array<{
//     pillText: string;
//     title: string;
//     description: string[]
// }>;
// 	},
// //	//	Book with our Blepharitis specialist
// 	section_5: {
// 		title: string; // Subheading
// 		descriptions: string[];
// 		image: string;
// 		large_image: string;
// 	},
}
