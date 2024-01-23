import { BeneficialItemsProps } from '@/page-sections/IclComponents/VisionBenefits';
import { ImageType3 } from '@/types';

type SurgerySection = {
    heading: string;
    descriptions: string[];
    image: ImageType3;
    link: string;
}

export default interface LaserEyeSurgeryContentInterface {
    //	London’s best treatment
	masthead: {
        heading: string;
        subheading: string;
		priceText: string;	
        image: ImageType3,
    };
    // Laser Benefits
    section1: {
        card1: {
            title: string;
            description: string;
        },
        card2: {
            title: string;
            description: string;
        }
    },
    // Treatment Prices
    section2: Array<{
        title: string;
        description: string;
        price: string
    }>
    // Laser solutions
    section3: {
        heading: string;
        descriptions: string[];
        image: ImageType3;
    },
    // Relex Smile
    section4: SurgerySection,
    // Presbyond
    section5: SurgerySection,
    // LASIK
    section6: SurgerySection,
    // LASEK
    section7: SurgerySection,
    // PRK
    section8: SurgerySection,
    // PTK
    section9: SurgerySection,

    // Comparison table
    section10: {
        heading: string;
        table: Array<{
            column1: string
            column2: string
            column3: string
            column4: string
        }>
    }
}
