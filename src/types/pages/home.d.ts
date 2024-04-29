import ImageApiType from 'src/types/api/image';
import { FeaturedPatientProps } from 'src/types/pages/component/featuredPatient';
import { Sustainibility } from './component/sustainibility';

export default interface HomeContentInterface extends Sustainibility {
	//	London’s best treatment
	section_1: {
		heading: { // Heading
			light_heading: string; // Light Heading
			bold_heading: string; // Bold Heading
		}
		descriptions: string[];
		image: string;
		large_image: string;
	},
	private_eye_card: Array<{
		image: string;
		title: string;
		pillText: string;
		cardList: string[];
		cardLink: string;
	}>,
}
