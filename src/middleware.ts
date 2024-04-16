import { isPagePublished } from '@/utils/miscellaneous';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line require-jsdoc
export async function middleware(request: NextRequest) {
    const currentPath = new URL(request.url).pathname;

    const pages: Array<{
        name: string;
        url: string;
        slug: string;
    }> = [
        { name: 'Home', url: '/', slug: 'home' },
        { name: 'About Us', url: '/about-us', slug: 'about-us' },
        { name: 'Articles', url: '/articles', slug: 'articles' },
        { name: 'Astigmatism Treatment', url: '/astigmatism-treatment', slug: 'astigmatism-treatment' },
        { name: 'Blepharitis Treatment', url: '/blepharitis-treatment', slug: 'blepharitis-treatment' },
        { name: 'Cataract', url: '/cataract', slug: 'cataract' },
        { name: 'Premium Lenses', url: '/cataract/premium-lenses', slug: 'premium-lenses' },
        { name: 'Cataract Price', url: '/cataract/price', slug: 'cataract-price' },
        { name: 'Yag Capsulotomy for PCO', url: '/cataract/yag-capsulotomy-for-pco', slug: 'yag-capsulotomy-for-pco' },
        {
            name: 'Yag Capsulotomy Price',
            url: '/cataract/yag-capsulotomy-for-pco/price',
            slug: 'yag-capsulotomy-for-pco-price'
        },
        { name: 'Complaint', url: '/complaint', slug: 'complaint' },
        {
            name: 'Conjunctivitis Treatment London',
            url: '/conjuctivitis-treatment-london',
            slug: 'conjuctivitis-treatment-london'
        },
        { name: 'Contact Us', url: '/contact-us', slug: 'contact-us' },
        { name: 'Cookie Policy', url: '/cookie-policy', slug: 'cookie-policy' },
        { name: 'Corneal Treatments', url: '/corneal-treatments', slug: 'corneal-treatments' },
        {
            name: 'Double Vision Treatment London',
            url: '/double-vision-treatment-london',
            slug: 'double-vision-treatment-london'
        },
        { name: 'Dry Eyes Treatment London', url: '/dry-eyes-treatment-london', slug: 'dry-eyes-treatment-london' },
        { name: 'Eyelid Surgery London', url: '/eyelid-surgery-london', slug: 'eyelid-surgery-london' },
        { name: 'Flashes Floaters', url: '/flashes-floaters', slug: 'flashes-floaters' },
        { name: 'Glaucoma Treatment', url: '/glaucoma-treatment', slug: 'glaucoma-treatment' },
        { name: 'Glaucoma Price', url: '/glaucoma-treatment/price', slug: 'glaucoma-treatment-price' },
        { name: 'ICL', url: '/icl', slug: 'icl' },
        { name: 'ICL Price', url: '/icl/price', slug: 'icl-price' },
        { name: 'Keratoconus', url: '/keratoconus', slug: 'keratoconus' },
        { name: 'LASEK PRK', url: '/lasek-prk', slug: 'lasek-prk' },
        { name: 'LASEK PRK Price', url: '/lasek-prk/price', slug: 'lasek-prk-price' },
        { name: 'LASIK London', url: '/lasik-london', slug: 'lasik-london' },
        { name: 'LASIK Price', url: '/lasik-london/price', slug: 'lasik-london-price' },
        { name: 'Lazy Eyes Treatment', url: '/lazy-eyes-treatement', slug: 'lazy-eyes-treatement' },
        { name: 'Macular Degeneration', url: '/macular-degeneration', slug: 'macular-degeneration' },
        { name: 'Myopia', url: '/myopia', slug: 'myopia' },
        { name: 'Myopia Price', url: '/myopia/price', slug: 'myopia-price' },
        { name: 'Our Specialists', url: '/our-specialists', slug: 'our-specialists' },
        {
            name: 'Eye Diagnostics Technology',
            url: '/our-specialists/our-eye-diagnostics-technology',
            slug: 'eye-diagnostics-technology'
        },
        { name: 'Paediatric Eye Care', url: '/paediatric-eye-care', slug: 'paediatric-eye-care' },
        { name: 'Presbyond London', url: '/presbyond-london', slug: 'presbyond-london' },
        { name: 'Presbyond Price', url: '/presbyond-london/price', slug: 'presbyond-london-price' },
        {
            name: 'Financing Your Treatment',
            url: '/pricing-and-financing/financing-your-treatment',
            slug: 'financing-your-treatment'
        },
        { name: 'Our Prices', url: '/pricing-and-financing/our-prices', slug: 'our-prices' },
        { name: 'Privacy Policies', url: '/privacy-policies', slug: 'privacy-policies' },
        { name: 'Relex Smile London', url: '/relex-smile-london', slug: 'relex-smile-london' },
        { name: 'Relex Smile Price', url: '/relex-smile-london/price', slug: 'relex-smile-london-price' },
        { name: 'Terms and Conditions', url: '/terms-and-conditions', slug: 'terms-and-conditions' },
        { name: 'Translation Service', url: '/translation-service', slug: 'translation-service' }
    ];

    // Check if the request is for a page (not an asset) and not starting with /api/
    if (
        !currentPath.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|ttf|eot|mp4)$/) &&
        !currentPath.startsWith('/api/')
    ) {
        if (!currentPath.includes('/404')) {
            const matchingPage = pages.find((page) => page.url === currentPath);

            if (matchingPage) {
                const isPublished = await isPagePublished({ slug: matchingPage.slug });
                if (!isPublished) {
                    return NextResponse.redirect(new URL('/404', request.url));
                }
            }
        }
    }
}
