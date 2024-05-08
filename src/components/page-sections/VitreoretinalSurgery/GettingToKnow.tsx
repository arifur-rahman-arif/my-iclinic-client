import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import SectionHeading from '@/page-sections/SectionHeading';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';
import SectionTextColumn from '@/components/SectionTextColumn';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

interface GettingToKnowProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section1'>> {}

/**
 * Represents a component for displaying content related to getting to know a subject.
 *
 * @param {object} GettingToKnowProps - The props for the GettingToKnow component.
 * @param {boolean} GettingToKnowProps.section1 - A boolean flag indicating whether to render section 1 of the content.
 * @returns {JSX.Element} The JSX element representing the GettingToKnow component.
 */
const GettingToKnow = ({ section1 }: GettingToKnowProps) => {
    return (
        <Section>
            <Container className="grid gap-12 md:grid-cols-2 lg:gap-24">
                <ImageColumn />
                <TextColumn section1={section1} />
            </Container>
        </Section>
    );
};

/**
 * TextColumn
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TextColumn = ({ section1 }: GettingToKnowProps): JSX.Element => {
    return (
        <div className="grid content-start gap-12 md:col-start-1 md:row-start-1">
            <SectionHeading heading={section1?.heading} />

            <SectionTextColumn
                descriptions={section1?.descriptions}
                className="ml-[2.3rem] grid-cols-1"
                descriptionContainerClassName="col-start-1"
            />

            <div className="ml-[2.3rem] flex flex-wrap items-center justify-center gap-8 sm:justify-start sm:gap-12">
                <Link
                    className="rounded-[0.5rem] border border-solid border-white bg-[#003E79] px-10 py-5 font-mulishBold text-white transition-all duration-500 hover:border-[#003E79] hover:bg-white hover:text-[#003E79]"
                    href="https://connect.pabau.com/bookings.php?compid=11842"
                    title="Book a consultation"
                    target="_blank"
                >
                    Book a consultation
                </Link>

                <BookConsultation
                    modalElement={
                        <div className="py-24">
                            <LazyComponent>
                                <VideoPlayer
                                    videoUrl={section1?.video || ''}
                                    localPoster={section1?.videoPoster}
                                    className="mx-auto lg:pr-0"
                                />
                            </LazyComponent>
                        </div>
                    }
                    maxWidth="70rem"
                    buttonClassName="flex items-center justify-center gap-4 font-mulishBold text-heading transition-all duration-500 hover:opacity-50"
                >
                    <button>
                        <Image src="/images/icons/icon-youtube.svg" alt="" width={24} height={24} />
                        Meet Yvonne
                    </button>
                </BookConsultation>
            </div>
        </div>
    );
};

/**
 * ImageColumn
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ImageColumn = (): JSX.Element => {
    return (
        <div className="grid content-center gap-12 rounded-[1rem] px-12 py-16 shadow-shadow1 sm:px-24 xl:px-40">
            <div className="grid gap-2">
                <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-heading">Member of</span>
                <span className="h-[0.1rem] w-full bg-heading"></span>
            </div>

            <div className="flex items-center justify-start gap-12">
                <Image src="/images/logos/euretina-logo.png" alt="" width={104} height={87} unoptimized />
                <Image src="/images/logos/the-royal-collage.png" alt="" width={115} height={107} unoptimized />
            </div>

            <div className="mt-12 grid gap-2">
                <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-heading">Awards</span>
                <span className="h-[0.1rem] w-full bg-heading"></span>

                <div className="mt-8 flex items-center justify-start gap-6">
                    <span className="grid h-24 w-24 place-items-center rounded-full bg-[#003E79] font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        13
                    </span>
                    <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#293C4E]">
                        International Awards
                    </span>
                </div>
            </div>
        </div>
    );
};

export default GettingToKnow;
