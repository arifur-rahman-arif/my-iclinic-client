import { ImageType3 } from 'src/types/image';

export default interface PricepresbeyondlondonContentInterface {
	masthead: {
		title: string;
        subTitle: string;
        largeImage: ImageType3;
        smallImage: ImageType3;
        priceText: string;
    },

	costDetails: Array<{
		title: string;
		price: string;
		description: string;
	}>
	//	SECTION 1
	section_1: {
		heading:string;
		bullet_1: string;
		bullet_2: string;
		bullet_3: string;
		bullet_4: string;
		image: string;
		large_image: string;
	},
	
	section_2: {
		title: string; // Subheading
		heading:string;
		subheading: string;
		descriptions: string[];
		lists: string[];
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
	},// PRICE 
	smile_price:Array<{
		priceText: string;
		priceDescription: string;
	    price: string;
	}>,
	call_section:{
		sub_heading: string;
		heading: string;
	},
	calculatorHeading: string

// //Transparent Price
}
