import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import SectionHeading from '@/page-sections/SectionHeading';
import { stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

interface InTheMediaProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section5'>> {}

/**
 * Represents the component for rendering media-related content, such as press releases or news coverage.
 *
 * @param {object} InTheMediaProps - The props for the InTheMedia component.
 * @param {boolean} InTheMediaProps.section5 - A boolean flag indicating whether to include content from section 5 of the VitreoretinalSurgeryContent.
 * @returns {JSX.Element} The JSX element representing the InTheMedia component.
 */
const InTheMedia = ({ section5 }: InTheMediaProps): JSX.Element => {
    return (
        <Section>
            <Container className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-24">
                <TextColumn section5={section5} />

                <MediaColumn section5={section5} />
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
const TextColumn = ({ section5 }: InTheMediaProps): JSX.Element => {
    return (
        <div className="grid content-start gap-8">
            <SectionHeading heading={section5?.heading} />

            <span className="ml-10 font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#0099FF]">
                {section5?.subheading}
            </span>

            <div className="ml-10 grid max-w-[51.5rem] gap-6 md:-mt-4">
                {section5?.descriptions
                    ? section5.descriptions.map((item, key) => (
                          <p key={key} dangerouslySetInnerHTML={{ __html: stripInitialTags(item) }}></p>
                      ))
                    : null}
            </div>

            <span className="mt-2 ml-10 font-latoBold text-[1.8rem] uppercase leading-[2.8rem] text-heading md:mt-8">
                {section5?.listTitle}
            </span>

            <ul className="ml-10 grid gap-6">
                {section5?.list
                    ? section5.list.map((item, key) => (
                          <li key={key} className="grid grid-cols-[auto_1fr] items-center gap-3">
                              <Image
                                  src="/images/icons/icon-dotted-arrow.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="mt-[0.1rem]"
                              />
                              <span className="text-[#293C4E]">{item}</span>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
};

/**
 * Media column
 *
 * @param {{heading: string, subheading: string, descriptions: string[], listTitle: string, list: string[], video: string, videoPoster: string} | undefined} section5
 * @returns {JSX.Element}
 * @constructor
 */
const MediaColumn = ({ section5 }: InTheMediaProps): JSX.Element => {
    return (
        <div>
            <LazyComponent>
                <VideoPlayer
                    videoUrl={section5?.video || ''}
                    localPoster={section5?.videoPoster}
                    className="mx-auto overflow-hidden lg:pr-0"
                />
            </LazyComponent>
        </div>
    );
};

export default InTheMedia;
