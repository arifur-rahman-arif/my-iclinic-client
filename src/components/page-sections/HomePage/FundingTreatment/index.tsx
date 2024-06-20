import { Container } from '@/components/Container';
import BulletPoint from '@/components/page-sections/SectionParts/BulletPoint';
import { Section } from '@/components/Section';
import Logo3 from '@/logos/aviva.png';
import Logo1 from '@/logos/bupa.png';
import Logo5 from '@/logos/cigma.png';
import Logo4 from '@/logos/freedom.png';
import Logo6 from '@/logos/general-medical.png';
import Logo2 from '@/logos/healthcare-practice.png';
import { stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const defaultCards: Omit<CardProps, 'index'>[] = [
    {
        title: 'Covered',
        description: 'You are eligible to use your health insurance with our partnered insurance companies.',
        link: '/pricing-and-financing/financing-your-treatment',
        bg: 'bg-[#FFD400]',
        buttonClass: 'hover:border-heading'
    },
    {
        title: 'Affordable',
        description: 'Correct your vision permanently with our 24 month finance option from £50/ per month',
        link: '/pricing-and-financing/financing-your-treatment',
        bg: 'bg-[#004977]',
        buttonClass: 'hover:text-white'
    }
];

interface Props {
    heading?: string;
    description?: string;
    list?: string[];
    cardList?: Omit<CardProps, 'index' | 'bg'>[];
    centerHeading?: boolean;
    middleCta?: ReactNode;
    excludeLinkButton?: boolean;
}

/**
 * FundingTreatment is a component that provides information about funding options for medical treatment. It showcases collaboration with health insurance providers and offers details about available financing methods.
 *
 * @returns {JSX.Element} The rendered FundingTreatment component.
 */
const FundingTreatment = ({
    heading,
    description,
    list,
    cardList,
    centerHeading,
    middleCta,
    excludeLinkButton
}: Props): JSX.Element => {
    const modifiedCardList = [];

    if (cardList && cardList.length > 0) {
        modifiedCardList.push({
            bg: 'bg-[#FFD400]',
            buttonClass: 'hover:border-heading',
            ...cardList[0]
        });

        if (cardList.length > 1) {
            modifiedCardList.push({
                bg: 'bg-[#004977]',
                buttonClass: 'hover:text-white',
                ...cardList[1]
            });
        }
    }

    return (
        <Section id="funding-treatment">
            <Container className="grid gap-16 md:grid-cols-2 md:gap-12 xl:gap-16">
                <div className="grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-12">
                    <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                    <h2 className="w-full max-w-[22.2rem] normal-case">{heading || 'Funding your treatment'}</h2>

                    {list?.length ? (
                        <>
                            <ul className="col-start-2 grid gap-4">
                                {list.map((item, index) => (
                                    <li className="flex items-start justify-start gap-4" key={index}>
                                        <BulletPoint />
                                        <p className="">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <span className="col-start-2 font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                                We are partner with
                            </span>
                        </>
                    ) : null}

                    {!list ? (
                        <p className="col-start-2 max-w-[50rem]">
                            {description ||
                                'We collaborate with all leading health insurance providers to ensure our patients receive the best care possible. Rest assured, your vision is in safe hands with us.'}
                        </p>
                    ) : null}

                    {middleCta && middleCta}

                    <div className="col-start-2 -mt-4 grid grid-cols-2 flex-wrap items-center justify-center gap-6 justify-self-start lg:grid-cols-3">
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo1} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo2} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo3} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)]  xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo4} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] p-8 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full object-contain" src={Logo5} alt="" />
                        </div>
                        <div className="grid h-[8rem] place-items-center rounded-primary border border-[#D9E2E6] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.04),_0px_1px_3px_rgba(0,_0,_0,_0.02)] xl:w-[18rem]">
                            <Image className="max-h-full max-w-full scale-[0.8] object-contain" src={Logo6} alt="" />
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 md:justify-self-end lg:gap-6 xl:grid-cols-2">
                    {(cardList?.length ? modifiedCardList : defaultCards).map((card, key) => (
                        <Card
                            key={key}
                            {...card}
                            index={key}
                            centerHeading={centerHeading}
                            excludeLinkButton={excludeLinkButton}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

interface CardProps {
    title: string;
    description: string;
    bg: string;
    link: string;
    buttonClass?: string;
    index: number;
    centerHeading?: boolean;
    excludeLinkButton?: boolean;
}

/**
 * Card is a reusable component for displaying information in a styled card format.
 *
 * @param {string} title - The title or heading for the card.
 * @param {string} description - The description or content for the card.
 * @param {string} bg - The background color or styling for the card.
 * @param {string} link - The URL to navigate to when clicking the card.
 * @param {string | undefined} buttonClass - Additional CSS classes for the card's button.
 * @param {number} index - The index used to determine styling variations for different cards.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ title, description, bg, link, buttonClass, index, centerHeading, excludeLinkButton }: CardProps) => {
    return (
        <div
            className={`grid content-center justify-items-start gap-6 rounded-radius2 p-12 xl:px-16 ${bg} max-w-[35rem] md:max-w-max`}
        >
            <h3
                className={`font-latoBold text-[3rem] normal-case leading-[3.6rem] ${
                    index === 0 ? 'text-heading' : 'text-white'
                } ${centerHeading && index === 0 && 'grid w-full place-items-center text-center'}`}
                dangerouslySetInnerHTML={{ __html: stripInitialTags(title) }}
            ></h3>
            <p className={`${index === 1 && 'text-white'}`}>{description}</p>
            {!excludeLinkButton && (
                <Link
                    href={link || '#'}
                    className={`rounded-[0.5rem] border-2 border-solid border-white bg-white px-5 py-2 font-mulishBold text-heading transition-all duration-500 hover:bg-transparent ${buttonClass}`}
                >
                    Find out more
                </Link>
            )}
        </div>
    );
};

export default FundingTreatment;
