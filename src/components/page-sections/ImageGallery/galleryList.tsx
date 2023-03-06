import { GalleryInterface } from './ImageGallery';
import Icon1 from '@/icons/icon-1-grey.svg';
import Icon2 from '@/icons/icon-2-grey.svg';
import Icon3 from '@/icons/icon-3-grey.svg';
import Icon4 from '@/icons/icon-4-grey.svg';
import GalleryImage1 from '@/section-images/gallery-image-premium-lense-1.png';
import GalleryImage2 from '@/section-images/gallery-image-premium-lense-2.png';
import GalleryImage3 from '@/section-images/gallery-image-premium-lense-3.png';
import GalleryImage4 from '@/section-images/gallery-image-premium-lense-4.png';

import HomeGalleryImage1 from '@/section-images/gallery-image-home-1.png';
import HomeGalleryImage2 from '@/section-images/gallery-image-home-2.png';
import HomeGalleryImage3 from '@/section-images/gallery-image-home-3.png';
import HomeGalleryImage4 from '@/section-images/gallery-image-home-4.png';

import EyelidGalleryImage1 from '@/section-images/gallery-image-eyelid-1.png';
import EyelidGalleryImage2 from '@/section-images/gallery-image-eyelid-2.png';
import EyelidGalleryImage3 from '@/section-images/gallery-image-eyelid-3.png';
import EyelidGalleryImage4 from '@/section-images/gallery-image-eyelid-4.png';

export const galleryListPremiumLens: GalleryInterface[] = [
    {
        numberIcon: Icon1,
        title: 'Consultation',
        image: GalleryImage1
    },
    {
        numberIcon: Icon2,
        title: 'Surgery',
        image: GalleryImage2
    },
    {
        numberIcon: Icon3,
        title: 'aftercare',
        image: GalleryImage3
    },
    {
        numberIcon: Icon4,
        title: 'quality of life',
        image: GalleryImage4
    }
];

export const galleryListHome: GalleryInterface[] = [
    {
        numberIcon: Icon1,
        title: 'Consultation',
        image: HomeGalleryImage2
    },
    {
        numberIcon: Icon2,
        title: 'Surgery',
        image: HomeGalleryImage1
    },
    {
        numberIcon: Icon3,
        title: 'aftercare',
        image: HomeGalleryImage3
    },
    {
        numberIcon: Icon4,
        title: 'quality of life',
        image: HomeGalleryImage4
    }
];

export const galleryListEyelid: GalleryInterface[] = [
    {
        numberIcon: Icon1,
        title: 'Consultation',
        image: EyelidGalleryImage1
    },
    {
        numberIcon: Icon2,
        title: 'Surgery',
        image: EyelidGalleryImage2
    },
    {
        numberIcon: Icon3,
        title: 'aftercare',
        image: EyelidGalleryImage3
    },
    {
        numberIcon: Icon4,
        title: 'quality of life',
        image: EyelidGalleryImage4
    }
];

export const galleryListMyopia: GalleryInterface[] = [
    {
        image: '/images/section-images/gallery-image-myopia-1.png'
    },
    {
        image: '/images/section-images/gallery-image-myopia-2.png'
    },
    {
        image: '/images/section-images/gallery-image-myopia-3.png'
    },
    {
        image: '/images/section-images/gallery-image-myopia-4.png'
    }
];
