import { ImageType } from '@/types';
import ImageApiType from 'src/types/api/image';

type Section3CardListType = {
	image: ImageType;
	title: string;
	descriptions: string[]
}

export default interface ConjunctivitisPageContentInterface {
	section_1: {
		heading: string
		descriptions: string[]
		image: ImageApiType;
		large_image: ImageApiType;
	},
	section_2: {
		subheading: string
		heading: {
			light_heading: string;
			bold_heading: string;
		}
		descriptions: string[]
		image: ImageApiType;
		large_image: ImageApiType;
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
}
