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
                        className="bg-darkBlue rounded-primary px-10 py-10 md:py-12 grid grid-cols-1 xl:grid-cols-[auto_1fr_16.1rem] gap-8 overflow-hidden xl:items-center"
                    >
                        <span
                            className="text-[2rem] leading-[2.8rem] font-mulishBold max-w-[24.6rem] block capitalize text-white">
                            {item.title}
                        </span>

                        <div className="gap-4 md:gap-[1.2rem] flex justify-center items-center w-full xl:justify-start">
                            <div className="bg-yellow h-1 flex-grow"></div>
                            <span className="text-[2rem] leading-[2.8rem] text-white font-mulishBold">
                                {item.price}
                            </span>
                        </div>

                        <Image {...item.image} alt="" className="justify-self-end translate-x-10" />
                    </div>
                ))}
            </div>

            <div className="max-w-[54.7rem] grid gap-12">
                <span className="text-[2rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem] font-latoBold">
                    How much will you spend for glasses and contact lenses over 30 years?
                </span>
                <span className="text-[3rem] leading-[3.6rem] md:text-[4.8rem] md:leading-[4.8rem] font-latoExtraBold">
                    Total cost: £24,000+
                </span>
            </div>
        </div>
    );
};

export default AverageSpend;
