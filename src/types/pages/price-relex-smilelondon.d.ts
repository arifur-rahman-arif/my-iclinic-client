export default interface RelexSmilePriceContentInterface {
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
		sub_heading: string;
		descriptions: string[];
		lists: string[];
		image: string;
		large_image: string;
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
	// 	// VIDEO SECTION
	section_4: {
		// Subheading
		title: string; //
		large_image: string;
		image: string;
	},// PRICE 
	relex_smile_price:Array<{
		priceText: string;
		priceDescription: string;
	    price: string;
	}>,
	call_section:{
		sub_heading: string;
		heading: string;
	},

// //Transparent Price
}
