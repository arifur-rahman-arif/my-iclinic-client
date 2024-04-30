import { SlideInterface } from '@/components/Slider/OffscreenSlider/Slide2';
import Link from 'next/link';
import Image from 'next/image';

// export const offScreenSliderListOld: SlideInterface[] = [
//     {
//         title: 'Saving Vision',
//         subtitle: 'Safely care for your eyes',
//         description: (
//             <>
//                 Your eye health is important. Vision Correction Treatments{' '}
//                 <strong>provide a no risk of contact lens infections, dry eyes or blindness.</strong>
//             </>
//         ),
//         image: '/images/section-images/offscreen-slider-image-1.webp'
//     },
//     {
//         title: 'Saving Money',
//         subtitle: 'A one-time purchase for clear, natural vision',
//         description: (
//             <>
//                 Spend less on vision correction than you currently are with contact lenses and glasses.{' '}
//                 <strong>
//                     One Laser Eye Surgery or Implantable Contact Lens treatment saves the average glasses & contact lens
//                     wearer £13,000+ for the future.
//                 </strong>
//             </>
//         ),
//         extraElements: (
//             <div className="mt-12">
//                 <LinkStyle url="/pricing-and-financing/financing-your-treatment#calculator" excludeAnimation={true}>
//                     Calculate your treatment with our 24 months finance calculator
//                 </LinkStyle>
//             </div>
//         ),
//         image: '/images/section-images/offscreen-slider-image-2.webp'
//     },
//     {
//         title: 'Saving Time',
//         subtitle: 'Where are my glasses? Where are my contacts?',
//         description: (
//             <>
//                 <strong>Wake up in the morning with your eyes ready before you are!</strong>
//             </>
//         ),
//         image: '/images/section-images/offscreen-slider-image-3.webp'
//     },
//     {
//         title: 'Saving Your Planet',
//         subtitle: 'Getting rid of plastic waste',
//         description:
//             '16,000 million tonnes of plastic is wasted by wearing glasses and disposable contact lenses. Our vision correction treatments are a great long-term investment for permanently clear vision without any more plastic waste.',
//         image: '/images/section-images/offscreen-slider-image-4.webp',
//         extraElements: (
//             <span className="mt-12 font-mulishBold text-[2rem] leading-[2.8rem]">Reducing our carbon footprint</span>
//         )
//     }
// ];

export const offScreenSliderList: SlideInterface[] = [
    {
        title: 'Saving Vision',
        description: (
            <>
                <div className="grid gap-6">
                    <p className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">Safely care for your eyes</p>
                    <p className="text-[#E9EAEB]">
                        Your eye health is important. Vision Correction Treatments provide:
                    </p>
                </div>

                <p className="font-latoLight text-[2.4rem] leading-[3.2rem] text-[#E9EAEBE5] opacity-90">
                    A no risk of contact lens infections, dry eyes or blindness.
                </p>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-1.webp',
        largeImage: '/images/section-images/offscreen-slider-image-large-1.webp'
    },
    {
        title: 'Saving Money',
        description: (
            <>
                <div className="grid gap-6">
                    <p className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        A one-time purchase for clear, natural vision
                    </p>
                    <p className="text-[#E9EAEB]">
                        Spend less on vision correction than you currently are with contact lenses and glasses.
                    </p>
                </div>

                <div className="flex items-start justify-start gap-4">
                    <Image src="/images/icons/icon-arrow-right-2-white.svg" alt="" width={24} height={24} />
                    <p className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        One Laser Eye Surgery or Implantable Contact Lens treatment saves the average glasses & contact
                        lens wearer £13,000+ for the future.
                    </p>
                </div>

                <p className="font-latoLight text-[2.4rem] leading-[3.2rem] text-[#E9EAEBE5] opacity-90">
                    <Link
                        href="/pricing-and-financing/financing-your-treatment#calculator"
                        className="font-latoMedium text-[2.4rem] leading-[3.2rem] text-[#E9EAEBE5] underline underline-offset-2 opacity-90 transition-all duration-500 hover:opacity-40"
                    >
                        Calculate
                    </Link>{' '}
                    your treatment with our 24 months finance calculator
                </p>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-2.webp',
        largeImage: '/images/section-images/offscreen-slider-image-large-2.webp'
    },
    {
        title: 'Saving Time',
        description: (
            <>
                <div className="grid gap-6">
                    <p className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        Where are my glasses? Where are my contacts?
                    </p>
                </div>

                <p className="font-latoLight text-[2.4rem] leading-[3.2rem] text-[#E9EAEBE5] opacity-90">
                    Wake up in the morning with your eyes ready before you are!
                </p>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-3.webp',
        largeImage: '/images/section-images/offscreen-slider-image-large-3.webp'
    },
    {
        title: 'Saving Your Planet',
        description: (
            <>
                <div className="grid gap-6">
                    <p className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        Getting rid of plastic waste
                    </p>
                    <p className="text-[#E9EAEB]">
                        16,000 million tonnes of plastic is wasted by wearing glasses and disposable contact lenses. Our
                        vision correction treatments are a great long-term investment for permanently clear vision
                        without any more plastic waste.
                    </p>
                </div>

                <p className="font-latoLight text-[2.4rem] leading-[3.2rem] text-[#E9EAEBE5] opacity-90">
                    Reducing our carbon footprint
                </p>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-4.webp',
        largeImage: '/images/section-images/offscreen-slider-image-large-4.webp'
    }
];
