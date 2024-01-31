import Button2 from '@/components/Buttons/Button2';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Tooltip from '@/components/Tooltip/Tooltip';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';
import { LaserEyeSurgeryContentInterface } from '@/types';
import Link from 'next/link';
import styles from '../IclComponents/styles/EyeCare.module.scss';
import { useOnScreen } from '@/hooks';
import { useRef } from 'react';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section2'> {
}

/**
 * Component to display treatment prices.
 *
 * @param {Props} props - The component properties.
 * @param {section2} props.section2 - The data for treatment prices.
 * @returns {JSX.Element} The rendered component.
 */
const TreatmentPrices = ({ section2 }: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    return (
        <Section id="treatment-prices">
            <Container ref={containerRef} className={`flex flex-wrap items-center justify-center gap-8 ${
                onEnter && styles.styles
            }`}>
                {section2?.length && section2.map((card, key) => <Card key={key} {...card} />)}
            </Container>
        </Section>
    );
};

interface CardProps {
    title: string;
    description: string;
    price: string;
}

/**
 * Component to display a card with a title, description, and price.
 *
 * @param {CardProps} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const Card = ({ title, description, price }: CardProps) => {
    return (
        <div
            className="grid translate-y-12 opacity-0 max-w-[29.5rem] content-start gap-12 rounded-radius2 border border-solid border-[#EAECF0] p-10 shadow-md transition-all duration-500 hover:shadow-shadow1">
            <h5 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-heading">{title}</h5>
            <p dangerouslySetInnerHTML={{ __html: description }} className="-mt-10 font-mulishBold text-[#293C4E]"></p>
            <div className="flex items-center justify-between gap-12 rounded-radius2 bg-[#E1F1FF] p-6">
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">From £{price}</span>
                <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-heading">Per-eye</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-8">
                <Tooltip text={
                    <span className="whitespace-nowrap font-mulishBold">Book a free consultation</span>
                } className="p-4">
                    <Link
                        href="https://connect.pabau.com/bookings.php?compid=11842"
                        target="_blank"
                        className="block grid h-full place-items-center rounded-radius2 bg-[#E1F1FF] p-6"
                    >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_14330_197)">
                                <path
                                    d="M3.07171 3.42859C2.61704 3.42859 2.18102 3.60921 1.85952 3.93069C1.53803 4.25218 1.35742 4.68821 1.35742 5.14287V21.4286C1.35742 21.8832 1.53803 22.3193 1.85952 22.6408C2.18102 22.9622 2.61704 23.1429 3.07171 23.1429H21.9288C22.3835 23.1429 22.8196 22.9622 23.141 22.6408C23.4624 22.3193 23.6431 21.8832 23.6431 21.4286V5.14287C23.6431 4.68821 23.4624 4.25218 23.141 3.93069C22.8196 3.60921 22.3835 3.42859 21.9288 3.42859H18.5003"
                                    stroke="#003E79"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M6.5 0.857178V6.00003"
                                    stroke="#003E79"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.5 0.857178V6.00003"
                                    stroke="#003E79"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.5 3.42859H15.0714"
                                    stroke="#003E79"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16.7863 13.7144H8.21484"
                                    stroke="#003E79"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5 9.42859V18"
                                    stroke="#003E79"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_14330_197">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </Tooltip>

                <BookConsultation buttonClassName="sitemap-link text-center !rounded-radius2 w-full">
                    <Button2 type="button" text="Get a quote" />
                </BookConsultation>
            </div>
        </div>
    );
};

export default TreatmentPrices;
