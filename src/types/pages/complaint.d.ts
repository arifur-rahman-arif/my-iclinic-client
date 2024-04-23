import { ImageType3 } from '@/types';

interface ComplaintPageProps {
    masthead: {
        title: string;
        subTitle: string;
        largeImage: ImageType3
        smallImage: ImageType3
    }
    contentSection: {
        heading: string;
        descriptions: string[]
        image: ImageType3;
    }
    pdf_download: string;
}

export default ComplaintPageProps;
