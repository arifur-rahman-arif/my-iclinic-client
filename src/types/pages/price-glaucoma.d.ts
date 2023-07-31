import ImageApiType from 'src/types/api/image';

export type PriceObject = {
    title: string;
    packageList: Array<{
        title: string
        description: string,
        price: string;
    }>
}

export default interface PriceGlaucomaContentInterface {
	//	SECTION 1
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
	
	section_2: Array<{
		title: string; 
		description: string;
		price: string;
	}>,
// 	// VIDEO SECTION
	section_3: {// Subheading
		title: string; // 
		description: string;
		large_image: string;
		image: string;
	},
    // 	// VIDEO SECTION
	section_4: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
		lists: string[];
		descriptions2: string;
	},
	privateTreatment:Array<PriceObject>,
	call_section:{
		sub_heading: string;
		heading: string;
	},
	speaktoteam:{
		subtitle: string;
		title:  string;
	},

// //Transparent Price
}
