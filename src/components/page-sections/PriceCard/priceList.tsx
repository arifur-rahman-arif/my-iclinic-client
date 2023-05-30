import { LinkText } from '@/components/Link';
import { PriceSectionInterface } from './FoldItem';
import { BsArrowRightShort } from 'react-icons/bs';

export const presbyondPriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your Presbyond consultation',
        priceDescription: `After booking your Presbyond laser eye surgery we deduct your £200 consultation fee from your
	treatment price, making your consultation`,
        priceDescBoldText: '100% FREE.'
    },
    {
        price: '£2,400 per eye',
        priceText: 'The price of your Presbyond laser eye surgery',
        priceDescription: `With 12 months interest-free finance available.`
    }
];

export const relexSmilePriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your ReLEx SMILE consultation',
        priceDescription: `After booking your ReLEx SMILE treatment we deduct your £200 consultation fee from your treatment price, making your consultation`,
        priceDescBoldText: '100% FREE.'
    },
    {
        price: '£2,400 per eye',
        priceText: 'The price of your ReLEx SMILE surgery',
        priceDescription: `With 12 months interest-free finance available.`
    }
];

export const icPriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your ICL Consultation',
        priceDescription: `After booking your ICL treatment we deduct your £200 consultation fee from your treatment price, making your consultation`,
        priceDescBoldText: '100% FREE.'
    },
    {
        price: '£2,750 per eye',
        priceText: 'The price of your ICL Surgery',
        priceDescription: `With 10 months interest-free finance available!`
    }
];

export const lasikPriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your LASIK consultation',
        priceDescription: `After booking your LASIK treatment we deduct your £200 consultation fee from your treatment price, making your consultation`,
        priceDescBoldText: '100% FREE.'
    },
    {
        price: '£2,400 per eye',
        priceText: 'The price of your LASIK surgery',
        priceDescription: `With 12 months interest-free finance available.`
    }
];

export const cataractPriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your Cataract consultation',
        priceDescription: `After booking your Cataract treatment we deduct your £200 consultation fee from your treatment price, making your consultation`,
        priceDescBoldText: '100% FREE.'
    },
    {
        price: '£2,400 per eye',
        priceText: 'The price of your Cataract surgery',
        priceDescription: `We are partnered with health insurance companies to make the cost of your treatment easier!`,
        extraElements: (
            <span className="mt-20 flex items-center justify-start gap-4">
                <LinkText
                    href="/pricing-and-financing/financing-your-treatment"
                    indicatorColor="bg-blue"
                    className="ont-mulishBold font-extrabold text-blue"
                >
                    Learn More
                </LinkText>
                <BsArrowRightShort className="h-10 w-10 translate-y-1 fill-blue text-blue" />
            </span>
        )
    }
];

export const lasekPriceList: PriceSectionInterface[] = [
    {
        price: '£200',
        priceText: 'The price of your LASEK & PRK consultation',
        priceDescription: `Lorem ipsum dolor sit amet consectetur. Magna molestie eget venenatis neque non pharetra ligula id. Sed proin aliquam ut nibh cras sit sem. Porttitor consequat lectus.`
    },
    {
        price: '£2,400 per eye',
        priceText: 'The price of your LASEK & PRK Laser eye surgery',
        priceDescription: `With 24 months interest-free finance available.`
    }
];

export const myopiaPriceList: PriceSectionInterface[] = [
    {
        price: '£400',
        priceText: 'All-inclusive of comprehensive eye assessments for your child',
        priceDescription: (
            <>
                <strong className="whitespace-nowrap font-latoBold text-[2.8rem] leading-[3.2rem] md:text-[3.2rem] md:leading-[3.6rem]">
                    All-inclusive
                </strong>{' '}
                of comprehensive eye assessments for your child with a private consultation with your child’s dedicated
                Myopia specialist.
            </>
        )
    },
    {
        price: '£250 per check up consultation',
        priceText: 'A Myopia management consultation',
        priceDescription: (
            <>
                This is all inclusive of comprehensive scans to monitor your child's treatment and payable at the time
                of booking.
                <br />
                Please read our{' '}
                <strong className="font-latoBold text-[2.8rem] leading-[3.2rem] md:text-[3.2rem] md:leading-[3.6rem]">
                    refunds
                </strong>{' '}
                and{' '}
                <strong className="whitespace-nowrap font-latoBold text-[2.8rem] leading-[3.2rem] md:text-[3.2rem] md:leading-[3.6rem]">
                    cancellation policy
                </strong>{' '}
                for all new and aftercare Myopia appointments.
            </>
        )
    }
];

export const yagPriceList: PriceSectionInterface[] = [
    {
        price: '£395 per eye',
        priceText: 'The price of your laser consultation & surgery',
        priceDescription: (
            <div className="max-w-[45rem] font-latoBold text-[2rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                Permanently correct your PCO symptoms
            </div>
        )
    }
];
