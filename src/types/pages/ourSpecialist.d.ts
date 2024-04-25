import { ImageType3 } from '@/types';

type Image = {
    src: string;
    url?: string;
    width: number;
    height: number;
    alt: string;
}

export interface OurSpecialistPageContent {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
    },
    section1: {
        heading: string;
    };
}
