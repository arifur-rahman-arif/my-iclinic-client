import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';
import { ImageType3 } from 'src/types/image';

export default interface PresbeyondlondonContentInterface extends Sustainibility {

	masthead: {
		title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
        priceText: string;
    },
	calculatorHeading?: string;
	//	London’s best treatment
	section_1: {
        sub_heading: string;
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		description: string[];
		image: string;
		large_image: string;
	},
	// SYMPTOMS RELIEVE
	section_2: {
		heading:  string; // Bold Heading
		description: string[];
		videoUrl: string;
        alt_text: string;
		videoPoster: string;
	},
// 	// TREATMENTS FOR BLEPHARITIS
	section_3: {
		sub_heading: string; // Subheading
		heading: string; // Bold Heading
		brand_image_description: string;
		bandImageTitle: string;
		bandImageURL: string;
		review_Description: string[];
		reviewtitle: string;
	},

	patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    },

//WE CAN ALWAYS HELP
	section_4: {
		heading: string;
		description: string[];
		price_title: string;
		price_subheading: string;
		price_description: string;
		image: string;
		large_image: string;
		lists: string[];
		button_text: string;
	},
//	//	Book with our Blepharitis specialist
	section_5: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
	},
	ctaSection2: {
		subTitle: string;
		title: string;
	}
	ctaSection: {
		title: string;
		image: ImageType3
	}
	section_6: {
		descriptions: string[];
		title: string;
		imagelarge: ImageType2;
		image: ImageType2;
	},
	leftRightsection:{
        [x: string]: any;
		mobileImage: string;
		desktopImage: string;
		title: string;
		descriptions: string[];
	},
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
	sectionspeakteam: {
		sub_heading: string; // Subheading
		title: string;
	},
	laserSlider:{
        map: any;
		image: string;
		altText: string;
		desktopimage: string;
		title: string;
		descriptions: string[];
	},
	reviewimageSlider:{
		imageURL: string;
	}
}
