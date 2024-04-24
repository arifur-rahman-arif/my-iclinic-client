import { ImageType3 } from '@/types';
import ImageApiType from '../api/image';

export default interface EyelidContentInterface {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3,
		smallImage: ImageType3;
		priceSection: string;
	},
	section2: {
		heading: string;
		descriptions: string[];
		image: ImageApiType
	};
	section3: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section4: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section5: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section6: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section7: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section8: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	section9: {
		heading: string;
		descriptions: string[];
		image: ImageType3;
	}
	leftRightsection:{
        [x: string]: any;
        section_title: string;
        section_bold_title: string;
		mobileImage: string;
		desktopImage: string;
		main_title: string;
        main_small_text: string;
		descriptions: string[];
        bullet_list: string[];
	},
    leftRightsection2:{
        [x: string]: any;
        section_title: string;
        headline: string;
        section_bold_title: string;
		mobileImage: string;
		desktopImage: string;
		main_title: string;
        main_small_text: string;
		descriptions: string[];
        bullet_list: string[];
	},
	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},
	patientReviews: {
		heading: string;
		reviews: Array<{
			name: string;
			review: string;
			link: string;
		}>
	}
}
