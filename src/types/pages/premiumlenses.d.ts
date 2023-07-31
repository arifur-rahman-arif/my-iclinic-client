
export default interface PremiumlensesContentInterface {

	//	SECTION 1
	section_1: {
		sub_heading: string; 
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		percentage: number;
		percentTitle: string;
		ParaghHeading: string;
		descriptions: string[];
		image: string;
		large_image: string;
	},
	
	section_2: {
		title: string; // 
		descriptions: string[];
	},
// 	// VIDEO SECTION
	section_3: {// Subheading
		subheading: string; // 
        heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		contents: string[];
        point_text_1: string;
        point_text_2: string;
        point_text_3: string;
		image1: string;
		image2: string;
        lenses_image: {
            lense_1: string;
            lense_2: string;
            lense_3: string;
            lense_4: string;
        }
	},
    edoflenses: {
        title: string;
        subtitle: string;
        percentage: number;
        descriptions: string[];
    }
    toriclenses: {
        title: string;
        subtitle: string;
        percentage: number;
        descriptions: string[];
    }
    monofocallenses: {
        title: string;
        subtitle: string;
        percentage: number;
        descriptions: string[];
    }
    multifocallenses: {
        title: string;
        subtitle: string;
        percentage: number;
        descriptions: string[];
    }
    monovision: {
        title: string;
        subtitle: string;
        percentage: number;
        descriptions: string[];
    }
    // 	// VIDEO SECTION
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
	call_section:{
		sub_heading: string;
		heading: string;
	},
	speaktoteam:{
		subtitle: string;
		title:  string;
	},
}