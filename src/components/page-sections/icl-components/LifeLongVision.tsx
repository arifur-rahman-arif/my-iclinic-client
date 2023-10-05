import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

const defaultList: CardProps[] = [
    {
        title: 'ICL Consultation',
        backgroundImage: '/images/section-images/lifelong-vision-card-bg-1.png',
        backgroundImageLarge: '/images/section-images/lifelong-vision-card-bg-large-1.png',
        list: [
            'Tailored advice for your unique vision needs.',
            'Gain clarity on the potential outcomes, benefits and risks.',
            'Engage directly with vision care professionals.',
            'Understand costs and payment options upfront.',
            'Remove uncertainty by knowing your options.'
        ]
    },
    {
        title: 'ICL Treatment',
        backgroundImage: '/images/section-images/lifelong-vision-card-bg-2.png',
        backgroundImageLarge: '/images/section-images/lifelong-vision-card-bg-large-2.png',
        list: [
            'Experience sharp, natural vision without glasses.',
            'Short procedure with rapid recovery.',
            'Stable vision correction that stands the test of time.',
            'Participate in activities without visual limitations.',
            'Backed by extensive clinical research and patient success stories.'
        ]
    },
    {
        title: 'ICL Aftercare',
        backgroundImage: '/images/section-images/lifelong-vision-card-bg-3.png',
        backgroundImageLarge: '/images/section-images/lifelong-vision-card-bg-large-3.png',
        list: [
            'Access to expert care when you need it.',
            'Regular check-ups ensure a smooth recovery.',
            'Receive advice on maintaining visual health.',
            'Rest easy knowing your vision is in trusted hands.',
            'Enjoy life without glasses and disposable contact lenses.'
        ]
    }
];

/**
 * LIfe long vision section
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LifeLongVision = (): JSX.Element => {
    return (
        <Section id="life-long-vision">
            <Container className="grid content-start gap-12 sm:gap-16 md:gap-24">
                <h2 className="max-w-[36.1rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] md:max-w-[71.3rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    Achieve permanent vision correction in three simple steps
                </h2>

                <div className="grid grid-cols-[34rem] items-start justify-center xl:grid-cols-[45.6rem_45.6rem_34.7rem] xl:items-stretch">
                    {defaultList.map((card, index) => (
                        <Card key={index} {...card} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default LifeLongVision;

interface CardProps {
    title: string;
    list: string[];
    backgroundImage: string;
    backgroundImageLarge: string;
    index?: number;
}

/**
 * Card component
 *
 * @param {string} title
 * @param {string[]} list
 * @param {string} backgroundImage
 * @param {string} backgroundImageLarge
 * @param {number | undefined} index
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ title, list, backgroundImage, backgroundImageLarge, index }: CardProps): JSX.Element => {
    return (
        <div
            className={`relative grid px-12 py-16 ${
                index === 2
                    ? 'min-h-[30rem] content-center'
                    : 'min-h-[63rem] content-start xl:min-h-[48rem]  xl:justify-start xl:pl-12'
            } xl:min-[34rem] xl:content-center xl:p-0`}
        >
            <Image
                src={backgroundImage}
                alt="bg"
                width={340}
                height={260}
                className="absolute top-0 left-0 -z-[1] h-full w-full xl:hidden"
            />

            <Image
                src={backgroundImageLarge}
                alt="bg"
                width={456}
                height={346}
                className="absolute top-0 left-0 -z-[1] hidden h-full w-full xl:block"
            />

            <div className="grid gap-6 justify-self-center">
                <h3 className="text-center font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">{title}</h3>
                <ul className="grid gap-5">
                    {list.map((item, index) => (
                        <li key={index} className="grid max-w-[27rem] grid-cols-[auto_1fr] items-start gap-4">
                            <Image
                                src="/images/icons/icon-double-arrow-bold.svg"
                                alt="icon"
                                width={24}
                                height={24}
                                className="translate-y-[0.3rem]"
                            />
                            <p className="text-[1.8rem] leading-[2.8rem] text-heading">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
