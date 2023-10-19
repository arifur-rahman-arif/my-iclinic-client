import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { LinkStyle } from '@/components/Link';
import { Section } from '@/components/Section';
import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import RetinaTreatmentsContents from 'src/types/pages/retinaTreatments';
import { twMerge } from 'tailwind-merge';

interface YvonneLuoProps extends Pick<RetinaTreatmentsContents, 'section3'> {}

/**
 * `YvonneLuo` is a React functional component that represents a section of the website showcasing Yvonne Luo, likely
 * a professional or a figure of importance within the context of the website. This section includes images of Yvonne,
 * some of which may be hidden or displayed on different screen sizes, and possibly information or content related to her.
 *
 * @returns {JSX.Element} The JSX element representing the Yvonne Luo section.
 */
const YvonneLuo = ({ section3 }: Partial<YvonneLuoProps>): JSX.Element => {
    return (
        <Section>
            <Container className="grid overflow-hidden !px-0 md:grid-cols-2 md:!px-8 xl:grid-cols-[1fr_auto]">
                <Image
                    src={section3?.image || '/images/section-images/yvone-leo-small.png'}
                    alt="Yvonne Luo"
                    width={426}
                    height={481}
                    className="w-full scale-[1.01] md:hidden"
                />
                <div className="relative hidden md:col-start-2 md:row-start-1 md:block">
                    <Image
                        src={section3?.largeImage || '/images/section-images/yvone-leo.png'}
                        alt="Yvonne Luo"
                        width={699}
                        height={870}
                        className="h-full object-cover object-[-30rem_center] md:rounded-tr-primary md:rounded-br-primary lg:object-center"
                    />

                    <Awards className="absolute left-0 bottom-0 translate-x-8 -translate-y-8 lg:translate-x-12 lg:-translate-y-12 xl:grid-cols-2 xl:gap-24" />
                </div>
                <TextColumn {...section3} />
            </Container>
        </Section>
    );
};

interface AwardsProps {
    className?: string;
}

/**
 * `Awards` is a React functional component that displays information about awards, affiliations, and memberships. It
 *  includes images and text to showcase professional or entity achievements.
 *
 * @param {string | undefined} className
 * @returns {JSX.Element}
 * @constructor
 */
const Awards = ({ className }: AwardsProps): JSX.Element => {
    return (
        <div className={twMerge('grid gap-12', className)}>
            <div className="grid grid-cols-[auto_auto] justify-start gap-x-10 gap-y-6">
                <span className="col-span-2 font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white">
                    Member of
                </span>
                <span className="col-span-2 h-[0.1rem] bg-white"></span>
                <Image src="/images/logos/logo-euratina.png" alt="" width={128} height={128} />
                <Image src="/images/logos/logo-royal-collage.png" alt="" width={128} height={128} />
            </div>
            <div className="grid content-start gap-6 justify-self-start">
                <span className="col-span-2 font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white">
                    Member of
                </span>
                <span className="col-span-2 h-[0.1rem] bg-white"></span>

                <div className="col-span-2 grid grid-cols-[auto_1fr] items-center gap-4">
                    <span className="grid h-[4.3rem] w-[4.3rem] place-items-center rounded-full bg-[#FFA500] font-latoBold text-[2rem] leading-[2.8rem] text-white">
                        13
                    </span>
                    <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">International Awards</span>
                </div>
            </div>
        </div>
    );
};

const defaultDescriptions = [
    'Yvonne Luo is an accomplished and highly skilled eye surgeon who brings her exceptional expertise to the esteemed team at My-iClinic in London.',
    'With a stellar background in ophthalmology and a commitment to delivering the highest standard of eye care, Yvonne is a valuable asset to the clinic.',
    'Her extensive training and experience encompass a wide range of eye conditions and surgical procedures, including cataract surgery, complex lens surgery, trauma repair , and treatments for various retinal disorders.',
    "Yvonne's dedication to patient well-being, coupled with her innovative approach to eye care, ensures that individuals seeking top-tier ophthalmological services at My-iClinic receive comprehensive and compassionate care, underpinned by the latest advancements in the field."
];

interface TextColumnProps {
    heading: string;
    designation: string;
    descriptions: string[];
    subheading: string;
}

/**
 * `TextColumn` is a React functional component that represents a text column within a section, typically used to
 * display information or content related to a figure or topic. This component is often used in conjunction with other
 * components to create a visually appealing and informative section.
 *
 * @returns {JSX.Element} The JSX element representing the text column.
 */
const TextColumn = ({ heading, designation, descriptions, subheading }: Partial<TextColumnProps>): JSX.Element => {
    return (
        <div className="grid w-full content-start gap-12 bg-[#003E79] py-12 px-8 md:rounded-tl-primary md:rounded-bl-primary md:px-12 lg:px-20 xl:px-24">
            <Awards className="md:hidden" />

            <div className="grid gap-2">
                <h2 className="text-white">{heading || 'Yvonne Luo'}</h2>
                <span className="font-mulishBold text-[#0099FF] md:text-[1.8rem] md:leading-[2.8rem]">
                    {designation || 'Consultant and Surgeon'}
                </span>
            </div>

            <div className="grid content-start gap-6">
                {((descriptions?.length && descriptions) || defaultDescriptions).map((item, key) => (
                    <p key={key} className="text-white [&>*]:text-white" dangerouslySetInnerHTML={{ __html: item }}></p>
                ))}

                <strong className="text-[2rem] leading-[2.8rem] text-white">
                    {subheading ||
                        'Her presence at the clinic reinforces its reputation as a leading center for cutting-edge eye treatments and personalised patient care in the heart of London.'}
                </strong>
            </div>

            <LinkStyle url="/vitreoretinal-surgery" className="justify-self-start text-[1.8rem]">
                Learn more about Yvonne
            </LinkStyle>

            <BookConsultation buttonClassName="justify-self-start border-white focus:border-white">
                <Button2 type="button" text="Book a consultation" />
            </BookConsultation>
        </div>
    );
};
export default YvonneLuo;
