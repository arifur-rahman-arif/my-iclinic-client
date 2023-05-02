import { ImageType } from '@/types';
import Image from 'next/image';

export interface AverageSpendInterfaceProps {
    heading: {
        light_heading: string | undefined;
        bold_heading: string | undefined;
    };
    priceList: Array<{
        title: string;
        price: string;
        image: ImageType;
    }>;
    subheadng: string;
    totalCost: string;
}

/**
 * Average spend component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AverageSpend = ({ heading, priceList, subheadng, totalCost }: AverageSpendInterfaceProps): JSX.Element => {
    const averageCostList = [
        {
            title: 'Average price of glasses per year',
            price: '£800',
            image: {
                src: '/images/section-images/eyeglass.png',
                width: 78,
                height: 45
            }
        },
        {
            title: 'Average price of contact lenses per year',
            price: '£360',
            image: {
                src: '/images/section-images/replacable-contact-lense.png',
                width: 79,
                height: 35
            }
        }
    ];

    return (
        <div className="grid lg:grid-cols-2">
            <div className="relative grid content-start gap-12 bg-[#04354E] px-8 py-20 md:gap-44 lg:py-36 lg:pr-32 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <Image
                    src="/images/section-images/average-spend-bg.png"
                    alt=""
                    width={717}
                    height={599}
                    className="absolute inset-0 h-full w-full"
                />
                <h2 className="relative z-[2] max-w-[50rem] font-latoLight text-[4.8rem] normal-case leading-[4.8rem] text-white lg:text-[6.4rem] lg:leading-[6.4rem]">
                    Average spend on glasses & contact lenses
                </h2>

                <div className="relative z-[2] grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
                    <span className="leading-16 ml-10 font-latoBold text-[3.6rem] text-white md:ml-0 md:text-[4.8rem] md:leading-[4.8rem]">
                        {totalCost || '£24,000+'}
                    </span>
                    <Image
                        src="/images/icons/icon-long-arrow.svg"
                        alt=""
                        width={265}
                        height={48}
                        className="hidden md:block"
                    />
                    <Image
                        src="/images/icons/icon-long-arrow-small.svg"
                        alt=""
                        width={10}
                        height={48}
                        className="justify-self-center md:hidden"
                    />
                </div>
            </div>

            <div className="xl: grid gap-20 bg-heading2 px-8 py-20 lg:py-36 lg:pl-32 xl:pr-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:text-[3rem] md:leading-[3.6rem]">
                    {subheadng || 'How much will you spend for glasses and contact lenses over 30 years?'}
                </span>

                <div className="grid gap-12">
                    {((priceList?.length && priceList) || averageCostList).map((item, index) => (
                        <div key={index} className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-6">
                            <Image {...item.image} alt="" className="" />

                            <span className="font-latoBold text-[3rem] leading-[3.6rem] text-white">{item.price}</span>

                            <span className="col-span-full h-[0.1rem] bg-[#0186B0]"></span>

                            <span className="col-span-full max-w-[24.6rem] font-mulishBold text-[2rem] normal-case leading-[2.8rem] text-white">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AverageSpend;
