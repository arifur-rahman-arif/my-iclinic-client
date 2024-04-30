import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionHeading from '@/page-sections/SectionHeading';
import Image from 'next/image';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';
import { twMerge } from 'tailwind-merge';

interface SpecialitiesProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section2'>> {}

/**
 * Specialities component
 *
 * @param {{heading: string, specialties: Array<{title: string, items: string[]}>} | undefined} section2
 * @returns {JSX.Element}
 * @constructor
 */
const Specialities = ({ section2 }: SpecialitiesProps): JSX.Element => {
    let icon: string;
    let className: string;

    const specialities = section2?.specialties.map((speciality, i) => {
        if (i === 0) {
            icon = 'images/icons/icon-ophthalmology.svg';
            className = 'xl:pb-16';
        }

        if (i === 1) {
            icon = 'images/icons/icon-eye-with-tears.svg';
            className =
                'xl:pb-32 bg-[#FFD400] [&_.title-class]:text-heading [&_ul_li_span]:text-[#404A4D] [&_.bullet]:!bg-[#404A4D]';
        }

        if (i === 2) {
            icon = 'images/icons/icon-eye-hardening.svg';
            className = 'xl:pb-16';
        }

        if (i === 3) {
            icon = 'images/icons/icon-eye-drop.svg';
            className =
                'xl:pb-24 bg-[#FFD400] [&_.title-class]:text-heading [&_ul_li_span]:text-[#404A4D] [&_.bullet]:!bg-[#404A4D]';
        }

        return {
            ...speciality,
            icon,
            className
        };
    });

    return (
        <Section>
            <Container className="grid gap-12">
                <SectionHeading heading={section2?.heading} />

                <div className="grid items-stretch justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-start">
                    {specialities ? specialities.map((item, key) => <SpecialityItem key={key} {...item} />) : null}
                </div>
            </Container>
        </Section>
    );
};

interface SpecialityItemProps {
    title: string;
    items: string[];
    icon: string;
    className: string;
}

/**
 * Speciality component
 *
 * @param {string} title
 * @param {string[]} items
 * @param {string} icon
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
const SpecialityItem = ({ title, items, icon, className }: SpecialityItemProps): JSX.Element => {
    return (
        <div className={twMerge('grid w-full content-start gap-6 rounded-[1rem] bg-[#003E79] p-12', className)}>
            <span className="grid h-[5.4rem] w-[5.4rem] place-items-center rounded-full bg-white">
                <Image src={icon} alt="" width={42} height={24} />
            </span>
            <span className="title-class font-mulishBold text-[2rem] lowercase leading-[2.8rem] text-white first-letter:uppercase">
                {title}
            </span>

            <ul className="grid max-w-[20.6rem] gap-4">
                {items.length
                    ? items.map((item, key) => (
                          <li key={key} className="grid grid-cols-[auto_1fr] content-start items-start gap-4">
                              <span className="bullet mt-4 h-[0.7rem] w-[0.7rem] rounded-full bg-[#E1F1FF]"></span>
                              <span className="font-mulishRegular text-[#E1F1FF]">{item}</span>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
};

export default Specialities;
