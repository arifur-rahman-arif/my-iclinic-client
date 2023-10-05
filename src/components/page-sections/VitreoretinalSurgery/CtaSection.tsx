import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { BookConsultation } from '@/page-sections/index';
import { stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

interface CtaSectionProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section7'>> {}

/**
 * Represents the CtaSection component, used for rendering a call-to-action section with optional content.
 *
 * @param {object} CtaSectionProps - The props for the CtaSection component.
 * @param {boolean} CtaSectionProps.section7 - A boolean flag indicating whether to render section 7 content.
 * @returns {JSX.Element} The JSX element representing the CtaSection component.
 */
const CtaSection = ({ section7 }: CtaSectionProps): JSX.Element => {
    return (
        <Section className="relative">
            <Image
                src="/images/section-images/your-eyes-section-bg.png"
                alt=""
                fill
                className="absolute -z-[1] h-full w-full"
            />
            <Container className="grid content-center items-center justify-items-center gap-24 py-12 md:grid-cols-2 md:py-24 xl:py-40">
                <LeftColumn section7={section7} />
                <RightColumn section7={section7} />
            </Container>
        </Section>
    );
};

const list = ['Vision correction', 'Cataract surgery', 'Treatment for a complex eye condition'];

/**
 * Left column
 *
 * @param {{heading: {heading1: string, heading2: string}, subheading: string, description: string, listTitle: string, list: string[], specialist: {image: string, name: string, title: string, designation: string}, ctaTitle: string} | undefined} section7
 * @returns {JSX.Element}
 * @constructor
 */
const LeftColumn = ({ section7 }: CtaSectionProps): JSX.Element => {
    return (
        <div className="grid content-start gap-12 md:gap-24">
            <h2 className="flex flex-col gap-2">
                <span className="font-latoBold text-[4.8rem] normal-case leading-[4.8rem] text-[#09F] lg:text-[9.6rem] lg:leading-[7.6rem]">
                    {section7?.heading.heading1 || 'Your eyes'}
                </span>
                <span className="font-latoBold text-[4.8rem] normal-case leading-[4.8rem] text-white lg:text-[9.6rem] lg:leading-[7.6rem]">
                    {section7?.heading.heading2 || 'deserve it.'}
                </span>
            </h2>

            <h5 className="max-w-[47rem] text-white">
                {section7?.subheading || 'World-class eye care with Yvonne Luo at My-iClinic in London.'}
            </h5>
            <p
                className="-mt-6 max-w-[43.1rem] text-white"
                dangerouslySetInnerHTML={{
                    __html: stripInitialTags(
                        section7?.description ||
                            'Trust in Yvonne`s exceptional skills and commitment to excellence, and take the first step toward achieving optimal eye health and visual clarity.'
                    )
                }}
            ></p>

            <h5 className="max-w-[47rem] text-white">{section7?.listTitle || "Whether you're seeking..."}</h5>

            <ul className="-mt-5 ml-6 grid gap-6 md:-mt-16">
                {((section7?.list && section7.list) || list).map((item, key) => (
                    <li key={key} className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <Image
                            src="/images/icons/icon-box-check-white.svg"
                            alt=""
                            width={25}
                            height={24}
                            className="mt-[0.1rem]"
                        />
                        <span className="text-white">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/**
 * Right column
 *
 * @param {{heading: {heading1: string, heading2: string}, subheading: string, description: string, listTitle: string, list: string[], specialist: {image: string, name: string, title: string, designation: string}, ctaTitle: string} | undefined} section7
 * @returns {JSX.Element}
 * @constructor
 */
const RightColumn = ({ section7 }: CtaSectionProps): JSX.Element => {
    return (
        <div className="grid content-start justify-items-center gap-6">
            <Image
                src={section7?.specialist.image || '/images/section-images/yvonne-luo-cta.png'}
                alt=""
                width={192}
                height={221}
                className="rounded-primary"
            />
            <strong className="text-[1.8rem] text-white">{section7?.specialist.name || 'Yvonne Luo'}</strong>

            <div className="flex items-center justify-center gap-4">
                <Image src="/images/icons/icon-ranking.svg" alt="" width={32} height={32} />
                <span className="text-white">{section7?.specialist.title || 'PhD Clinical ophthalmology'}</span>
            </div>

            <span className="text-center font-mulishBold uppercase text-[#0099FF]">
                {section7?.specialist.designation || 'Award winner Consultant and Surgeon'}
            </span>

            <h5 className="max-w-[42.1rem] text-center text-white">
                {section7?.ctaTitle || 'Your eyes deserve the best, and Yvonne is here to provide it.'}
            </h5>

            <div className="mt-8 grid place-items-center gap-8">
                <BookConsultation
                    buttonClassName="rounded-[1rem] flex items-center justify-center gap-4 py-5 px-12 transition-all duration-500 hover:bg-transparent bg-[#09F] hover:border-white border-2 border-solid border-[#09F]"
                    modalElement={
                        <>
                            <iframe
                                src="https://connect.pabau.com/bookings.php?compid=11842"
                                width={600}
                                height={700}
                                className="w-full md:min-h-[70rem]"
                            ></iframe>
                        </>
                    }
                    maxWidth="70rem"
                >
                    <button>
                        <Image src="/images/icons/icon-communication.svg" alt="" width={24} height={24} />
                        <span className="font-mulishBold uppercase text-white">Book a consultation</span>
                    </button>
                </BookConsultation>

                <Link
                    href="tel:0208 445 8877"
                    className="flex items-center justify-center gap-4 font-mulishBold text-white transition-all duration-500 hover:opacity-50"
                >
                    <Image src="/images/icons/icon-phone-white-outline.svg" alt="" width={24} height={24} />
                    0208 445 8877
                </Link>
            </div>
        </div>
    );
};

export default CtaSection;
