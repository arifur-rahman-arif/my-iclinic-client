

export default interface FlashesContentInterface {
	//	London’s best treatment
	section_1: {
		subheading: string;
		// Heading
        lightheading: string; // Light Heading
        boldheading: string; // Bold Heading
		first_line_text: string;
		lists: string[];
        descriptions: string[];
		image: string;
		image_large: string;
	},
    section_2: {
		subheading: string;
		// Heading
        lightheading: string; // Light Heading
        boldheading: string; // 
        descriptions: string[];
		image: string;
		image_large: string;
	},
    section_3: {
        subheading: string;
		// Heading
        lightheading: string; // Light Heading
        boldheading: string; // Bold Heading
		lists: string[];
        descriptions: string[];
		image: string;
		image_large: string;
    },
    section_4: {
        heading: string;
		lists: string[];
        descriptions: string[];
		image: string;
		image_large: string;
    },
    speak_to_our_team: {
        subtitle: string;
        title: string;
    },
    bookingsec: {
        title:string;
        descriptions:string[];
        image:string;
        imageLarge:string;
    },
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},




}