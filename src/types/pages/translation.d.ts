import ImageApiType from 'src/types/api/image';
import { PriceObject } from 'src/types/pages/price';
import { ImageType3 } from '@/types';

interface TranslationPageProps {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3,
        smallImage: ImageType3;
    },
    // Understand your care journey with us
    section_1: {
        heading: string;
        descriptions: string[];
        image: string;
    };
    section2: {
        heading: string;
        packages: {
            heading: string;
            packageColor: string
            items: {
                title: string;
                description: string;
                price: string;
                priceAttribute?: string;
            }[]
        }[];
    }
   ctaSection: {
       subtitle?: string;
       title?: string;
   }
}

export default TranslationPageProps;
