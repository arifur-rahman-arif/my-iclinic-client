export default interface MacularContentInterface {
	//	London’s best treatment

    section_3: {
        heading: string;
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    section_4: {
        sub_heading: string;
        heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
        descriptions: string[];
        image:string;
        imagelarge:string;
        list_heading: string;
        lists: string[];
    },
    section_5: {
        sub_heading: string;
        heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    reduce: {
        heading:string;
        description: string;
    },
    section_6: {
        title: string;
        subheading: string;
        image:string;
        imagelarge:string;
    },
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
}