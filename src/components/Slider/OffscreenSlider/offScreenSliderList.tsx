import { LinkStyle } from '@/components/Link';
import { SlideInterface } from './Slide';

export const offScreenSliderList: SlideInterface[] = [
    {
        title: 'Saving Vision',
        subtitle: 'Safely care for your eyes',
        description: (
            <>
                Your eye health is important. Vision Correction Treatments{' '}
                <strong>provide a no risk of contact lens infections, dry eyes or blindness.</strong>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-1.png'
    },
    {
        title: 'Saving Money',
        subtitle: 'A one-time purchase for clear, natural vision',
        description: (
            <>
                Spend less on vision correction than you currently are with contact lenses and glasses.{' '}
                <strong>
                    One Laser Eye Surgery or Implantable Contact Lens treatment saves the average glasses & contact lens
                    wearer £13,000+ for the future.
                </strong>
            </>
        ),
        extraElements: (
            <div className="mt-12">
                <LinkStyle url="/pricing-and-financing/financing-your-treatment#calculator" excludeAnimation={true}>
                    Calculate your treatment with our 24 months finance calculator
                </LinkStyle>
            </div>
        ),
        image: '/images/section-images/offscreen-slider-image-2.png'
    },
    {
        title: 'Saving Time',
        subtitle: 'Where are my glasses? Where are my contacts?',
        description: (
            <>
                <strong>Wake up in the morning with your eyes ready before you are!</strong>
            </>
        ),
        image: '/images/section-images/offscreen-slider-image-3.png'
    },
    {
        title: 'Saving Your Planet',
        subtitle: 'Getting rid of plastic waste',
        description:
            '16,000 million tonnes of plastic is wasted by wearing glasses and disposable contact lenses. Our vision correction treatments are a great long-term investment for permanently clear vision without any more plastic waste.',
        image: '/images/section-images/offscreen-slider-image-4.png',
        extraElements: (
            <span className="mt-12 font-mulishBold text-[2rem] leading-[2.8rem]">Reducing our carbon footprint</span>
        )
    }
];
