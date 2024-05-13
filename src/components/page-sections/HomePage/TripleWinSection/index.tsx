import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import * as animationData from '@/lottie/bell.lottie.json';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ReactNode, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Lottie = dynamic(() => import('@/page-sections/LeftRight/lottie/LottieFile'), {
    loading: () => <ComponentLoader />
});

const cardList: CardProps[] = [
    {
        icon: '/images/icons/icon-saving-money.svg',
        title: 'Saving money',
        subtitle: 'The hidden costs: what could you save?',
        descriptionTitle: 'What could that money have done?',
        description:
            "The £34,000 you'd potentially spend on glasses and contact lenses over 20 years could have given you 69 luxurious holidays in the Mediterranean",
        dropdownText: 'Est- £34,000',
        hiddenInfo: (
            <>
                <div className="grid grid-cols-[1fr_auto] content-start items-center gap-4">
                    <span className="font-mulishBold text-heading">Est- 50 Holidays</span>
                    <Image
                        src="/images/icons/plam-tree.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="justify-self-end"
                    />
                    <div className="col-span-2 grid gap-2">
                        <span className="text-[1.4rem] leading-8">
                            Average holiday cost: <span className="text-[1.4rem] leading-8 text-[#09F]">£700</span>
                        </span>
                        <span className="text-[1.4rem] leading-8">
                            Calculation:{' '}
                            <span className="text-[1.4rem] leading-8 text-[#09F]">34,800 / £700 = 49.71</span>
                        </span>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: '/images/icons/icon-saving-time.svg',
        title: 'Saving time',
        subtitle: 'Glasses & contact lenses a hidden time consumer.',
        descriptionTitle: 'Did you know?',
        description:
            "Over 30 years, the time you'd invest in handling glasses and contact lenses could have whisked you around our planet 37 times!",
        dropdownText: 'Est- 1,539.8 hours',
        hiddenInfo: (
            <>
                <div className="grid grid-cols-[1fr_auto] content-start items-center gap-4">
                    <span className="font-mulishBold text-heading">Est- 526.6 hours</span>
                    <Image
                        src="/images/icons/icon-glasses-dark.svg"
                        alt=""
                        width={50}
                        height={50}
                        className="justify-self-end"
                    />
                    <div className="col-span-2 grid gap-2">
                        <span className="text-[1.4rem] leading-8">
                            Cleaning: <span className="text-[1.4rem] leading-8 text-[#09F]">3 minutes/day</span>
                        </span>
                        <span className="text-[1.4rem] leading-8">
                            Finding misplaced glasses:{' '}
                            <span className="text-[1.4rem] leading-8 text-[#09F]">2 minutes/day</span>
                        </span>
                        <span className="text-[1.4rem] leading-8">
                            Repair, shopping: <span className="text-[1.4rem] leading-8 text-[#09F]">2 hours/year</span>
                        </span>
                        <span className="font-mulishBold text-[1.4rem] leading-8">
                            Total:{' '}
                            <span className="text-[1.4rem] leading-8 text-[#09F]">526.6 hours (over 2 decades)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-[1fr_auto] content-start items-center gap-2">
                    <span className="font-mulishBold text-heading">Est- 526.6 hours</span>
                    <Image
                        src="/images/icons/contact-lense-left-right.svg"
                        alt=""
                        width={50}
                        height={50}
                        className="justify-self-end"
                    />
                    <div className="col-span-2 grid gap-2">
                        <span className="text-[1.4rem] leading-8">
                            Inserting and Removing:
                            <span className="text-[1.4rem] leading-8 text-[#09F]">3 minutes/day</span>
                        </span>
                        <span className="text-[1.4rem] leading-8">
                            Cleaning: <span className="text-[1.4rem] leading-8 text-[#09F]">4 minutes/day</span>
                        </span>
                        <span className="text-[1.4rem] leading-8">
                            Renewing & Check-ups:{' '}
                            <span className="text-[1.4rem] leading-8 text-[#09F]">2 hours/year</span>
                        </span>
                        <span className="font-mulishBold text-[1.4rem] leading-8">
                            Total:{' '}
                            <span className="text-[1.4rem] leading-8 text-[#09F]">1,013.2 hours (over 3 decades)</span>
                        </span>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: '/images/icons/saving-planet.svg',
        title: 'Saving planet',
        subtitle: 'Reducing our carbon footprint',
        descriptionTitle: 'The environmental perspective',
        description:
            'Over 30 years, using glasses and contact lenses contributes to 876lb of CO2 emissions. Opt for vision correction and take a stand for our planet!',
        dropdownText: 'Est- 876lb',
        hiddenInfo: (
            <>
                <div className="grid grid-cols-[1fr_auto] content-start items-center gap-4">
                    <span className="font-mulishBold text-heading">Est- 876.6 CO2 emissions</span>
                    <Image
                        src="/images/icons/icon-water-bottle.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="justify-self-end"
                    />
                    <div className="col-span-2 grid gap-6">
                        <span className="font-mulishBold text-[1.4rem] leading-8">
                            Combined plastic waste:
                            <br />
                            <span className="text-[1.4rem] leading-8">
                                0.525 kg (glasses)+65.7 kg (contact lenses)=66.225 kilograms over three decades.
                            </span>
                        </span>

                        <span className="font-mulishBold text-[1.4rem] leading-8">
                            Total:{'   '}
                            <span className="text-[1.4rem] leading-8">
                                66.225 kilograms of plastic×6=397.35 kilograms = 876Lb of CO2 emissions(over 3 decades)
                            </span>
                        </span>
                    </div>
                </div>
            </>
        )
    }
];

/**
 * TripleWinSection is a component that presents information about the "triple win" benefits of vision correction, including time, financial, and environmental advantages. It also offers access to a cost calculation tool and displays relevant cards.
 *
 * @returns {JSX.Element} The rendered TripleWinSection component.
 */
const TripleWinSection = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    return (
        <Section>
            <Container className="grid gap-12 md:grid-cols-2" ref={containerRef}>
                <div className="grid content-start gap-6">
                    <TextColumn h3LightHeading="The triple win" />

                    <p className="ml-10 max-w-[29.5rem]">
                        How vision correction transforms time, finances, and our world.
                    </p>
                </div>

                <div className="col-span-2 grid gap-6 justify-self-start md:col-span-1 md:-mt-32 md:justify-self-end">
                    <div className="-mt-12 h-[9.6rem] w-[9.6rem] justify-self-center md:h-[15rem] md:w-[15rem]">
                        {onEnter ? (
                            <Lottie animationData={animationData} loop={true} />
                        ) : (
                            <ComponentLoader className="h-full min-h-min md:min-h-min" />
                        )}
                    </div>

                    <span className="-mt-12 font-mulishBold text-[2rem] uppercase leading-[2.8rem] text-[#893277]">
                        0% Finance available
                    </span>

                    <Button2
                        type="anchor"
                        text="Calculate your cost"
                        link="/pricing-and-financing/financing-your-treatment#calculator"
                        className="w-full justify-self-start text-center"
                    />
                </div>

                <div className="col-span-2 grid justify-center gap-6 md:grid-cols-[auto_auto] xl:grid-cols-3">
                    {cardList.map((card, key) => (
                        <Card key={key} {...card} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

interface CardProps {
    icon: string;
    title: string;
    subtitle: string;
    descriptionTitle: string;
    description: string;
    dropdownText: string;
    hiddenInfo: ReactNode;
}

/**
 * Card is a reusable component for displaying information in a card format with a toggleable dropdown feature.
 *
 * @param {string} icon - The icon or image for the card.
 * @param {string} title - The main title or heading for the card.
 * @param {string} subtitle - The subtitle or additional information for the card.
 * @param {string} descriptionTitle - The title for the card's description section.
 * @param {string} description - The main description or content for the card.
 * @param {string} dropdownText - The text for the dropdown toggle button.
 * @param {JSX.Element} props.hiddenInfo - The hidden content that is revealed when the dropdown is toggled.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({
    icon,
    title,
    subtitle,
    descriptionTitle,
    description,
    dropdownText,
    hiddenInfo
}: CardProps): JSX.Element => {
    const [rotate, setRotate] = useState<boolean>(false);

    return (
        <div
            className={`relative grid max-w-[40.3rem] grid-cols-[1fr_auto] items-start gap-x-3 gap-y-12 overflow-hidden rounded-radius2 border border-solid border-[#EAECF0] p-8 shadow-sm transition-all duration-500 hover:shadow-shadow1 xs:p-12`}
        >
            <div className="grid">
                <h3 className="font-latoBold text-[2rem] leading-[2.8rem] text-heading">{title}</h3>
                <span className="md:font-mulishBold">{subtitle}</span>
            </div>

            <Image src={icon} alt={title} width={66} height={66} className="rounded-full" />

            <div className="col-span-2 grid">
                <span className="font-mulishBold text-heading">{descriptionTitle}</span>
                <p>{description}</p>
            </div>

            <button
                className="col-span-2 flex cursor-pointer items-center justify-between gap-12 self-end rounded-radius2 bg-[#E1F1FF] p-4"
                onClick={() => setRotate(true)}
            >
                <span className="font-mulishBold text-heading">{dropdownText}</span>
                <FaAngleDown fill="#0065C4" className="h-8 w-8" />
            </button>

            <div
                onClick={() => setRotate(false)}
                className={`card-back absolute inset-0 z-[2] w-full overflow-hidden bg-[#E1F1FF] transition-all duration-1000 ${
                    rotate ? 'max-h-full' : 'max-h-0'
                }`}
            >
                <div className="grid w-full gap-6 p-8  xs:p-12">{hiddenInfo}</div>
            </div>
        </div>
    );
};

export default TripleWinSection;
