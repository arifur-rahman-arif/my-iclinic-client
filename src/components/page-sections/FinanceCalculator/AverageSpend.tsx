import { TextColumn } from '@/components/page-sections';
import Image from 'next/image';

/**
 * Average spend component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AverageSpend = (): JSX.Element => {
    const averageCostList = [
        {
            title: 'Average price of glasses per year',
            price: '£800',
            image: {
                src: '/images/section-images/eyeglass.png',
                width: 165,
                height: 71
            }
        },
        {
            title: 'Average price of contact lenses per year',
            price: '£360',
            image: {
                src: '/images/section-images/replacable-contact-lense.png',
                width: 123,
                height: 101
            }
        }
    ];

    return (
        <div className="grid gap-12">
            <TextColumn
                h3LightHeading={
                    <>
                        Average spend on glasses <br />
                    </>
                }
                h3BoldHeading="& contact lenses"
            />

            <div className="grid gap-6">
                {averageCostList.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 gap-8 overflow-hidden rounded-primary bg-darkBlue px-10 py-10 md:py-12 xl:grid-cols-[auto_1fr_16.1rem] xl:items-center"
                    >
                        <span className="block max-w-[24.6rem] font-mulishBold text-[2rem] capitalize leading-[2.8rem] text-white">
                            {item.title}
                        </span>

                        <div className="flex w-full items-center justify-center gap-4 md:gap-[1.2rem] xl:justify-start">
                            <div className="h-1 flex-grow bg-yellow"></div>
                            <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-white">
                                {item.price}
                            </span>
                        </div>

                        <Image {...item.image} alt="" className="translate-x-10 justify-self-end" />
                    </div>
                ))}
            </div>

            <div className="grid max-w-[54.7rem] gap-12">
                <span className="font-latoBold text-[2rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                    How much will you spend for glasses and contact lenses over 30 years?
                </span>
                <span className="font-latoExtraBold text-[3rem] leading-[3.6rem] md:text-[4.8rem] md:leading-[4.8rem]">
                    Total cost: £24,000+
                </span>
            </div>
        </div>
    );
};

export default AverageSpend;
