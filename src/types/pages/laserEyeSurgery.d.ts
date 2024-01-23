import { BeneficialItemsProps } from '@/page-sections/IclComponents/VisionBenefits';
import { ImageType3 } from '@/types';

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
    // ICL aftercare
    section4: {
        heading: string;
        descriptions: string[];
        image: ImageType3;
    },
    // USP List
    section5: {
        cardList: Array<{
            icon: ImageType3;
            title: string;
            description: string;
        }>
    },
    // Life after implantable contact lenses!
    section6: {
        heading: string;
        cardList: Array<{
            image: ImageType3;
            title: string;
            shortDescription: string;
            descriptions: string[];
        }>
    },
    // Our implantable contact lenses are transparent in price too!
    section7: {
        heading: string;
        priceText: string;
        subHeading: string;
        description: string;
        list: string[];
        image: ImageType3;
    },
    // ICL Consultation
    section8: {
        heading: string;
        description: string;
        image: ImageType3;
    },
    // Vision Benefits
    section9: {
        heading: string;
        beneficialItems: BeneficialItemsProps[]
    },
    // Patient Reviews
    section10: {
        patientName: string;
        patientFrontImage: string;
        heading: string;
        title: string;
        descriptions: string[]
        patientImages: Array<{
            imageURL: string
        }>
    },
    reviewSlider: {
        title: string;
        name: string;
        description: string;
    }
}
