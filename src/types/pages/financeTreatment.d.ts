import ImageApiType from 'src/types/api/image';

export default interface FinanceTreatmentPageContents {
	section_1: {
		heading: string;
		descriptions: string[];
		image: ImageApiType;
		large_image: ImageApiType;
	};
	section_2: {
		heading: string;
		subheading: string;
		description: string;
	};
	// Our health insurance partners
	section_3: string;
	// Insurance partners logo
	section_4: string;
	// Healthcare insurance provider
	section_5: string;
}
