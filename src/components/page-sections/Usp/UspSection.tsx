import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import Image from 'next/image';
import Icon from '@/icons/icon-dotted-arrow-white.svg';
import { ReactNode } from 'react';

const uspList: UspProps[] = [
    {
        title: (
            <>
                Correction of astigmatism with toric lenses{' '}
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#00BFFF]">(Free of charge).</span>
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
                We achieved{' '}
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#00BFFF]">100,000+ successful</span>{' '}
                cataract operations
            </>
        ),
        description: 'Our promises...',
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
                <TextColumn h3LightHeading="What sets us apart" />

                <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(35rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(40rem,_1fr))]">
                    {uspList?.map((list, index) => (
                        <Usp key={index} {...list} />
                    ))}

                    <div className="grid h-full w-full content-start gap-6 transition-all duration-500 xl:hover:-translate-y-8">
                        <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                            We possess a cutting-edge operating theatre.
                        </span>

                        <Image
                            src="/images/section-images/operating-theatre.webp"
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
        <div className="grid w-full content-start gap-12 rounded-primary bg-[#003E79] px-12 py-[4.5rem] transition-all duration-500 hover:shadow-shadow2 xl:hover:-translate-y-8">
            <span className="max-w-[33.6rem] font-mulishBold text-[2rem] leading-[2.8rem] text-white">{title}</span>

            <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-white">{description}</span>

            {list.length ? (
                <ul className="grid gap-6">
                    {list.map((item, index) => (
                        <li key={index} className="grid grid-flow-col justify-start gap-4">
                            <Image src={Icon} alt="Icon" className="translate-y-2" />
                            <p className="max-w-[28.1rem] text-white">{item}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default UspSection;
