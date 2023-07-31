import ImageApiType from 'src/types/api/image';

export default interface PricelskprkContentInterface {
	//	SECTION 1
	section_1: {
		sub_heading: string; 
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		},
        lists:string[];
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
		descriptions: string[];
		lists: string[];
		list_heading: string;
		image: string;
		large_image: string;
        interest_free_finance: string;
		bullet_points_heading: string;
		bullet_1: string;
		bullet_2: string;
	},
// 	// VIDEO SECTION
	section_3: {// Subheading
		title: string; // 
		description: string;
		large_image: string;
		image: string;
	},
	speaktoteam:{
		subtitle: string;
		title:  string;
	},
	ptkeyesurgerycost:{
		description: string;
		title:  string;
	},
    // 	// VIDEO SECTION
	section_4: {
		 // Subheading
		title: string; // 
		large_image: string;
		image: string;
	},// PRICE 
	lsk_price:Array<{
		priceText: string;
		priceDescription: string;
	    price: string;
	}>,
    section_5: {
		sub_heading: string; 
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		lists: string[];
		image: string;
		large_image: string;
	},

// //Transparent Price
}
