import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Logo3 from '@/logos/aviva.png';
import Logo1 from '@/logos/bupa.png';
import Logo5 from '@/logos/cigma.png';
import Logo4 from '@/logos/freedom.png';
import Logo6 from '@/logos/general-medical.png';
import Logo2 from '@/logos/healthcare-practice.png';
import Image from 'next/image';
import Link from 'next/link';

const cardList: Omit<CardProps, 'index'>[] = [
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

/**
 * FundingTreatment is a component that provides information about funding options for medical treatment. It showcases collaboration with health insurance providers and offers details about available financing methods.
 *
 * @returns {JSX.Element} The rendered FundingTreatment component.
 */
const FundingTreatment = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-16 md:grid-cols-2 md:gap-12 xl:gap-16">
                <div className="grid grid-cols-[auto_1fr] content-start gap-y-12 gap-x-6">
                    <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
                    <h2 className="w-full max-w-[22.2rem] normal-case">Funding your treatment</h2>
                    <p className="col-start-2">
                        We collaborate with all leading health insurance providers to ensure our patients receive the
                        best care possible. Rest assured, your vision is in safe hands with us.
                    </p>

                    <div className="col-start-2 grid grid-cols-2 flex-wrap items-center justify-center gap-6 justify-self-start lg:grid-cols-3">
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
                    {cardList.map((card, key) => (
                        <Card key={key} {...card} index={key} />
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
const Card = ({ title, description, bg, link, buttonClass, index }: CardProps) => {
    return (
        <div
            className={`grid content-center justify-items-start gap-6 rounded-radius2 p-12 xl:px-16 ${bg} max-w-[35rem] md:max-w-max`}
        >
            <h3
                className={`font-latoBold text-[3rem] normal-case leading-[3.6rem] ${
                    index === 0 ? 'text-heading' : 'text-white'
                }`}
            >
                {title}
            </h3>
            <p className={`${index === 1 && 'text-white'}`}>{description}</p>
            <Link
                href={link || '#'}
                className={`rounded-[0.5rem] border-2 border-solid border-white bg-white py-2 px-5 font-mulishBold text-heading transition-all duration-500 hover:bg-transparent ${buttonClass}`}
            >
                Find our more
            </Link>
        </div>
    );
};

export default FundingTreatment;
