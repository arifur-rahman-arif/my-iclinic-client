import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import Image from 'next/image';
import { ReactNode } from 'react';

const uspList: UspProps[] = [
    {
        title: (
            <>
                Correction of astigmatism with toric lenses{' '}
                <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-[#FF7F00]">
                    (free of charge)
                </span>
            </>
        ),
        description: 'You will get...',
        list: [
            'Be seen at your first appointment by the surgeon who will be doing your surgery.',
            "Have your surgeon's mobile number.",
            'Will be involved in decision making.',
            'Both eyes operated together.'
        ]
    },
    {
        title: (
            <>
                we achieved{' '}
                <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-[#FF7F00]">
                    100,000+ successful
                </span>{' '}
                cataract operations
            </>
        ),
        description: 'We promises...',
        list: [
            'The best vision possible with little or no dependence on glasses.',
            'The best implant for your eyes.',
            'See the same surgeon for your follow up visit.',
            'Look after you until you are ready to go back to your optician.'
        ]
    }
];

/**
 * Unique selling point section component
 *
 * @returns {*}  {JSX.Element}
 */
const UspSection = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-24">
                <TextColumn
                    h3LightHeading={
                        <>
                            What Sets <br />
                        </>
                    }
                    h3BoldHeading="US Apart"
                />

                <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(35rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(40rem,_1fr))]">
                    {uspList?.map((list, index) => (
                        <Usp key={index} {...list} />
                    ))}

                    <div className="grid h-full w-full content-start gap-6 transition-all duration-500 xl:hover:-translate-y-8">
                        <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">
                            We have{' '}
                            <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-[#FF7F00]">
                                our own state-of-the-art
                            </span>{' '}
                            operating theatre.
                        </span>

                        <Image
                            src="/images/section-images/operating-theatre.png"
                            alt="Operating theatre"
                            width={429}
                            height={482}
                            className="rounded-primary"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

interface UspProps {
    title: ReactNode;
    description: string;
    list: string[];
}

/**
 * Usp Inner component
 *
 * @returns {*}  {JSX.Element}
 */
const Usp = ({ title, description, list }: UspProps): JSX.Element => {
    return (
        <div className="grid w-full content-start gap-12 rounded-primary bg-[#1A5186] px-12 py-[4.5rem] transition-all duration-500 hover:shadow-shadow2 xl:hover:-translate-y-8">
            <span className="max-w-[33.6rem] font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-white">
                {title}
            </span>

            <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">{description}</span>

            {list.length ? (
                <ul className="grid gap-6">
                    {list.map((item, index) => (
                        <li key={index} className="grid grid-flow-col justify-start gap-6">
                            <Image src="/images/icons/icon-usp.svg" alt="Icon" width={32} height={32} />
                            <p className="text-[1.8rem] leading-[2.8rem] text-white">{item}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default UspSection;
