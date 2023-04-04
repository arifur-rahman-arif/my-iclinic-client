interface SectionData {
    subheading: string;
    heading: { // Heading
        light_heading: string; // Light heading
        bold_heading: string; // Bold heading
    };
    descriptions: string[];
    image: string;
    large_image: string;
}

export interface Sustainibility {
    sustainability_section: {
        plastic_free_life: SectionData;
        gift_of_a_tree: SectionData;
        clearer_vision: SectionData;
    };
}
