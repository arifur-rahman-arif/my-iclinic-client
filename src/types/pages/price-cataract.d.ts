import ImageApiType from 'src/types/api/image';

export default interface PriceCataractContentInterface {
	//	SECTION 1
	section_1: {
		sub_heading: string; 
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		bullet_1: string;
		bullet_2: string;
		bullet_3: string;
		bullet_4: string;
		image: string;
		large_image: string;
	},
	
	section_2: {
		title: string; // Subheading
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		} // Bold Heading
		subheading: string;
		bullet_1: string;
		bullet_2: string;
		image: string;
		large_image: string;
	},
// 	// VIDEO SECTION
	section_3: {// Subheading
		title: string; // 
		description: string;
		large_image: string;
		image: string;
	},
    // 	// VIDEO SECTION
	section_4: {
		 // Subheading
		title: string; // 
		large_image: string;
		image: string;
	},
	lsk_price:Array<{
		priceText: string;
		priceDescription: string;
	    price: string;
	}>,
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
