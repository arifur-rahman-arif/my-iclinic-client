import ImageApiType from 'src/types/api/image';

export default interface AstigmatismPageContentInterface {
	section_1: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light heading
			bold_heading: string; // Bold heading
		}
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	section_2: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
		extra_description: string; // Extra Description
	},
	section_3: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
		list: string[];
	},
	section_4: {
		heading: string
		description: string
	},
	//	Children Astigmatism
	section_5: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
	},
}
