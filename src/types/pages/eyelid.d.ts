
export default interface EyelidContentInterface {
	//	London’s best treatment
	section_1: {
		heading: string;
	},
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
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
}