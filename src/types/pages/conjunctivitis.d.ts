import { ImageType, ImageType3 } from '@/types';
import ImageApiType from 'src/types/api/image';
import { ReactNode } from 'react';

type Section3CardListType = {
	image: ImageType;
	title: string;
	descriptions: string[]
}

export default interface ConjunctivitisPageContentInterface {
	masthead: {
		title: string;
		largeImage: ImageType3
		smallImage: ImageType3
		priceSection: string;
	}
	section5: {
		heading: string
		descriptions: string[]
		image: string;
	},
	section_1: {
		heading: string
		descriptions: string[]
		image: ImageApiType;
		large_image: ImageApiType;
	},
	patientReviews: {
		heading: string;
		reviews: Array<{
			name: string;
			review: string;
			link: string;
		}>
	}
	section_2: {
		subheading: string
		heading: string
		descriptions: string[]
		image: string;
		large_image: string;
		list: string[];
	},
	section_3: {
		heading: string
		descriptions: string[]
		card_list: Section3CardListType[]
	},
	section_4: {
		heading: string
		description: string
	},
	ctaSection: {
		subtitle?: string;
		title?: string;
	}
	ctaSection2: {
		title?: string;
		subTitle?: string;
		image?: ImageType3;
	}
}
