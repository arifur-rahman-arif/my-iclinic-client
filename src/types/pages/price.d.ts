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

export default interface PricePageContentProps {
	masthead: {
		title: string;
		subTitle: string;
		largeImage: ImageType3;
		smallImage: ImageType3;
		priceSection: string;
	},
	section1: {
		heading: string;
		packages: {
			title: string;
            description: string;
            price: string;
		}[];
	}
	section2: {
		heading: string;
		packages: {
			heading: string;
			packageColor: string
			items: {
				title: string;
				description: string;
				price: string;
				priceAttribute?: string;
			}[]
		}[];
	}
	// Funding Your
	// Treatment
	section_4: {
		heading: string;
		description: string;
	},
	// Glaucoma surgery
	section5: {
		heading: string;
		packages: {
			heading: string;
			packageColor: string
			items: {
				title: string;
				description: string;
				price: string;
				priceAttribute?: string;
			}[]
		}[];
	}
	// General, emergency and paediatric consultations do not include any tests
	section6: {
		heading: string;
		description: string;
		packages: {
			heading: string;
			packageColor: string
			items: {
				title: string;
				description: string;
				price: string;
				priceAttribute?: string;
			}[]
		}[];
	}
	// Diagnostics Fees
	section_9: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		package: Array<PriceObject>;
	};
}
