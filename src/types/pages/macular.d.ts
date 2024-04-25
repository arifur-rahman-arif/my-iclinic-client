import { ImageType3 } from '@/types';
import { ReactNode } from 'react';

export default interface MacularContentInterface {
    masthead: {
        title: string;
        subTitle: string;
        image: ImageType3;
        priceText: string;
    }
	//	London’s best treatment
    section_3: {
        heading: string;
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    section_4: {
        heading: string;
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    section_5: {
        heading: string
        descriptions: string[];
        image:string;
        imagelarge:string;
    },
    ctaSection: {
        title: string;
        subTitle: string;
        descriptions: string[];
        image: ImageType3;
    },
    patientReviews: {
        heading: string;
        reviews: Array<{
            name: string;
            review: string;
            link: string;
        }>
    },
}
