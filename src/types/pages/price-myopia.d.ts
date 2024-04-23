import ImageApiType from 'src/types/api/image';
import { ImageType3 } from 'src/types/image';

export default interface PricemyopiaContentInterface {

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
		sub_heading: string; 
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
	},
	section_2: {
		title: string; // Subheading
		heading: string
		subheading: string;
		descriptions: string[];
		lists: string[];
		image: ImageType3;
		large_image: ImageType3;
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
	},// PRICE 

	ctaSection: {
		title: string;
		image: ImageType3
		subTitle: string
	}
}
