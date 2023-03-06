export default interface LazyEyesPageContentInterface {
	// Correct your vision Lazy eyes (amblyopia)
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
	},
	// Amblyopia Diagnosis
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
		extra_description: string; // Extra Description
	},
	// Amblyopia Consultation
	section_3: {
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
	// Private Consultation Banner
	section_4: {
		heading: string
		description: string
	},
	//	Lazy Eye Treatment
	section_5: {
		subheading: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
	// Lazy Eye Specialist Banner
	section_6: {
		heading: string // Heading
		descriptions: string[];
		phone: string;
		image: string;
		large_image: string;
	},
}
