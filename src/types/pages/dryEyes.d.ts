import ImageApiType from 'src/types/api/image';

export default interface DryEyesContentInterface {
	//	Dry eye syndrome symptoms
	section_1: {
		subheading: string; // Subheading
		heading: string; //
		descriptions: string[];
		image: string;
		large_image: string;
	},
//	Dry eye consultation
	section_2: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		list: string[];
	},
	//
	section_3: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		list: Array<{
			pillText: string;
			title: string;
			descriptions: {
				description: string
			}[]
		}>;
	},

//Friendly vision correction section
	section_4: {
		heading: string;
		descriptions: string[];
	},
//	//	Children Astigmatism
//	section_5: {
//		subheading: string; // Subheading
//		heading: { // Heading
//			light_heading: string; // Light Heading
//			bold_heading: string; // Bold Heading
//		}
//		descriptions: string[];
//		image: ImageApiType;
//		large_image: ImageApiType;
//	},
}
