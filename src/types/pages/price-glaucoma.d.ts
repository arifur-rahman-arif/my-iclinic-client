import ImageApiType from 'src/types/api/image';
import { ImageType3 } from '@/types';

export type PriceObject = {
    title: string;
    packageList: Array<{
        title: string
        description: string,
        price: string;
    }>
}

export default interface PriceGlaucomaContentInterface {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3;
		smallImage: ImageType3;
		priceSection: string;
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
		heading: string
		descriptions: string[];
		image: string;
		large_image: string;
	},
	privateTreatment:Array<PriceObject>,
	call_section:{
		sub_heading: string;
		heading: string;
	},
	ctaSection: {
		title: string;
		subTitle: string
		image: ImageType3
	}
}
