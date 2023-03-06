export default interface DoubleVisionPageContentInterface {
	// Symptoms and vision
	section_1: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light heading
			bold_heading: string; // Bold heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		list: string[];
		extra_description: string; // Extra Description
	},
	// Consultation & treatment
	section_2: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// What is included in my private consultation?
	section_3: {
		heading?: string;
		description?: string;
		bannerText?: string;
		list?: string[];
	},
}
