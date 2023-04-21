import ImageApiType from 'src/types/api/image';

export type PriceObject = {
    title: string;
    packageList: Array<{
        title: string
        description: string,
        price: string;
    }>
}

export default interface PricePageContentProps {
    // Our consultation prices
    section_1: Array<PriceObject>,
    // Our consultation prices
    section_2: Array<PriceObject>,
    // Vision Correction treatments
    section_3: Array<PriceObject>,
    // Funding Your
    // Treatment
    section_4: {
        heading: { // Heading
            light_heading: string; // Light Heading
            bold_heading: string; // Bold Heading
        }
        descriptions: string[];
        image: ImageApiType;
        large_image: ImageApiType;
    },
    // Glaucoma surgery
    section_5: Array<PriceObject>;
    // Macular Degeneration Treatment
    section_6: Array<PriceObject>;
    // Keratoconus Treatment
    section_7: Array<PriceObject>;
    // Eyelid Surgery
    section_8: Array<PriceObject>;
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
