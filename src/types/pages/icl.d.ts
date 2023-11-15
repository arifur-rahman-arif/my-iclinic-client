import { BeneficialItemsProps } from '@/page-sections/IclComponents/VisionBenefits';
import { ImageType3 } from '@/types';
import { Sustainibility } from './component/sustainibility';

export default interface IclContentInterface extends Sustainibility {
    //	London’s best treatment
    masthead: {
        title: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
        priceText: string;
        financeText: string;
        reviewsText: {
            google: string;
            trustpilot: string;
        };
        cardList: Array<{
            icon: Partial<ImageType3>;
            title: string;
            description: string;
            className?: string;
        }>;
    },
    section1: {
        heading: string;
        subHeading: string;
        descriptions: string[];
        image1: ImageType3;
        image2: ImageType3;
    },
    // ICL consultation
    section2: {
        heading: string;
        descriptions: string[];
        image: ImageType3;
    },
    // ICL treatment
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
