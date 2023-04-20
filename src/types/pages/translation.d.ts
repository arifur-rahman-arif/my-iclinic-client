import ImageApiType from 'src/types/api/image';
import { PriceObject } from 'src/types/pages/price';

interface TranslationPageProps {
    // Understand your care journey with us
    section_1: {
        heading: string;
        subheading: string;
        list: string[];
    };
    // If you would like to book with our translation service partner
    section_2: {
        heading: string;
        image: ImageApiType
    };
    // Translation packages
    section_3: {
        heading: string;
        services: Array<PriceObject>;
    },
}

export default TranslationPageProps;
