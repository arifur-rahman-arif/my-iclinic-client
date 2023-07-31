export default interface keratoconusContentInterface {
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
    minimally_invasive: {
        heading:string;
        image:string;
        imagelarge:string;
        descriptions: string[];
    },
    crosslinking: {
        sub_heading: string;
        heading: { // Heading
			light_heading: string; // Light Heading
			dark_heading: string; // Bold Heading
		}
    },
    crossList:Array<{
        title: string;
        descriptions: string[];
    }>,
    section_6: {
        title: string;
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
	reviewSlider:{
		title: string;
		name: string;
		description: string;
	},
}