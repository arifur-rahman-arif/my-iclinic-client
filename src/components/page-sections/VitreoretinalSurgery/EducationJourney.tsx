import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionHeading from '@/page-sections/SectionHeading';
import { stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

interface EducationJourneyProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section3'>> {}

/**
 * Represents the component for rendering the education journey section.
 *
 * @param {object} EducationJourneyProps - The props for the EducationJourney component.
 * @param {boolean} EducationJourneyProps.section3 - A boolean flag indicating whether to render section 3.
 * @returns {JSX.Element} The JSX element representing the EducationJourney component.
 */
const EducationJourney = ({ section3 }: EducationJourneyProps): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 md:grid-cols-2 md:gap-24 xl:mx-0 xl:max-w-full xl:grid-cols-[80rem_1fr] xl:gap-44">
                <LeftColumn />
                <TextColumn section3={section3} />
            </Container>
        </Section>
    );
};

/**
 * University colum
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LeftColumn = (): JSX.Element => {
    return (
        <div className="grid gap-24 overflow-hidden rounded-[1rem] border border-[#EAECF0] pt-12 lg:gap-24 xl:rounded-bl-none xl:rounded-tl-none">
            <div className="grid gap-6 px-12 xl:px-40">
                <div className="grid gap-6 lg:grid-cols-2">
                    <Image src="/images/logos/university-college-london.png" alt="" width={150} height={140} />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem] text-[#003E79] lg:self-end lg:justify-self-end">
                        2016
                    </span>
                    <span className="h-[0.1rem] bg-heading lg:col-span-2"></span>
                </div>

                <span className="max-w-[37.8rem] font-mulishBold uppercase text-heading">
                    University College London PhD (in bionic eye / retinal prosthesis implant)
                </span>
            </div>

            <div className="grid gap-6 px-12 xl:px-40">
                <div className="grid gap-6 lg:grid-cols-2">
                    <Image src="/images/logos/the-royal-collage.png" alt="" width={150} height={140} />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem] text-[#003E79] lg:self-end lg:justify-self-end">
                        2004 - 2006
                    </span>
                    <span className="h-[0.1rem] bg-heading lg:col-span-2"></span>
                </div>

                <span className="max-w-[20.8rem] font-mulishBold uppercase text-heading">
                    The royal college of ophthalmologists
                </span>

                <div className="grid gap-2">
                    <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">FRCOphth</span>
                    <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">2004 - 2006 MRCophth.</span>
                    <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">2012 FRCOphth</span>
                </div>
            </div>

            <div className="grid gap-6 px-12 pb-12 lg:pb-0 xl:px-40">
                <div className="grid gap-6 lg:grid-cols-2">
                    <Image src="/images/logos/cambrige-university.png" alt="" width={150} height={140} />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem] text-[#003E79] lg:self-end lg:justify-self-end">
                        1999 - 2003
                    </span>
                    <span className="h-[0.1rem] bg-heading lg:col-span-2"></span>
                </div>

                <span className="font-mulishBold uppercase text-heading">university ouf Cambridge</span>

                <div className="grid gap-2">
                    {/* <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">MRCOphth</span> */}
                    <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">
                        MB BChir, Bachelor of Medicine and Surgery
                    </span>

                    <span className="text-[1.8rem] leading-[2.8rem] text-[#003E79]">
                        2016 University College London PhD (In bionic eye / retinal prosthesis implant).
                    </span>
                </div>
            </div>

            <div className="group/link flex w-full items-center justify-center gap-4 bg-[#0099FF] px-8 py-4 lg:py-12 xl:justify-end xl:px-24">
                <Link href="/our-specialists/yvonne-luo" className="font-mulishBold uppercase text-white">
                    educations history
                </Link>
                <FiArrowRight className="h-[2.4rem] w-[2.4rem] stroke-white transition-all duration-500 group-hover/link:translate-x-4" />
            </div>
        </div>
    );
};

/**
 * Text column
 *
 * @param {{heading: string, descriptions: string[], subheading: string, subheadingDescription: string, list: string[]} | undefined} section3
 * @returns {JSX.Element}
 * @constructor
 */
const TextColumn = ({ section3 }: EducationJourneyProps): JSX.Element => {
    return (
        <div className="grid content-start gap-12">
            <SectionHeading heading={section3?.heading} />

            <div className="ml-10 grid max-w-[51.5rem] gap-6">
                {section3?.descriptions
                    ? section3.descriptions.map((item, key) => (
                          <p key={key} dangerouslySetInnerHTML={{ __html: stripInitialTags(item) }}></p>
                      ))
                    : null}
            </div>
            <span className="ml-10 font-latoBold text-[2rem] uppercase leading-[2.8rem] text-heading">
                {section3?.subheading}
            </span>
            <span className="-mt-6 ml-10 max-w-[37rem] font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#0099FF]">
                {section3?.subheadingDescription}
            </span>
            <ul className="-mt-6 ml-10 grid gap-6">
                {section3?.list
                    ? section3.list.map((item, key) => (
                          <li key={key} className="grid grid-cols-[auto_1fr] items-start gap-4">
                              <Image
                                  src="/images/icons/icon-dotted-arrow.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="translate-y-[0.7rem]"
                              />
                              <span className="text-[#293C4E]">{item}</span>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
};

export default EducationJourney;
