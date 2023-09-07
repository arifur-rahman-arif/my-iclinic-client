import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ImageType } from '@/types';
import Image from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface StepListProps {
    topIcon: ReactNode;
    heading: string;
    headingMaxWidth?: string;
    image1: ImageType;
    image2?: ImageType;
    subHeading: string;
    description: string;
}

/**
 * Step list component
 *
 * @param {string} topIcon
 * @param {string} heading
 * @param {string | undefined} headingMaxWidth
 * @param {ImageType} image1
 * @param {ImageType | undefined} image2
 * @param {string} subHeading
 * @param {string} description
 * @returns {JSX.Element}
 * @constructor
 */
const StepList = ({
    topIcon,
    heading,
    headingMaxWidth,
    image1,
    image2,
    subHeading,
    description
}: StepListProps): JSX.Element => {
    return (
        <Section>
            <Container className="grid justify-items-center gap-12 md:gap-24">
                {/* <span className="grid place-items-center rounded-full bg-[#94CAFF] px-10 py-[2.7rem] font-latoExtraBold text-[3.6rem] leading-[3.6rem] text-white md:text-[4.8rem] md:leading-[4.8rem]"> */}
                {/*    {topIcon} */}
                {/* </span> */}
                <div className="grid place-items-center gap-12">
                    {topIcon}

                    <h2
                        className={twMerge(
                            'max-w-[80.7rem] font-latoBold text-[2.8rem] normal-case leading-[3.2rem] text-heading md:text-center md:text-[3.6rem] md:leading-[4rem]',
                            headingMaxWidth
                        )}
                    >
                        {heading}
                    </h2>
                </div>

                <div className="grid justify-items-center gap-12 md:grid-cols-[auto_1fr]">
                    <Image {...image1} alt="" />
                    {image2 ? <Image {...image2} alt="" /> : null}
                </div>

                <div className="grid justify-items-center gap-12">
                    <h3 className="text-center font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#FF5C00] md:text-[2.4rem] md:leading-[3.2rem]">
                        {subHeading}
                    </h3>
                    <p className="max-w-[78.5rem] text-center font-latoBold text-[1.8rem] leading-[2.8rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        {description}
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default StepList;
