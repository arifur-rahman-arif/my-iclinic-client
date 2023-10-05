import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionHeading from '@/page-sections/SectionHeading';
import { stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

interface AchievementsAndBeyondProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section6'>> {}

/**
 * Represents the AchievementsAndBeyond component, which displays achievements and related content.
 *
 * * @param {object} AchievementsAndBeyondProps - The props for the AchievementsAndBeyond component.
 *  * @param {Partial<VitreoretinalSurgeryContent['section5']>} AchievementsAndBeyondProps.section6 -
 *  *     The data for section 6 of the AchievementsAndBeyond component, taken from the VitreoretinalSurgeryContent.
 *  * @returns {JSX.Element} The JSX element representing the AchievementsAndBeyond component.
 * @constructor
 */
const AchievementsAndBeyond = ({ section6 }: AchievementsAndBeyondProps): JSX.Element => {
    return (
        <Section className="">
            <Container className="">
                <div className="grid items-center gap-16 overflow-hidden rounded-[1rem] px-8 pt-28 pb-24 shadow-[0px_1px_24px_0px_rgba(0,21,41,0.15)] sm:px-12 md:grid-cols-2">
                    <LeftColumn section6={section6} />
                    <AchievementColumn section6={section6} />
                </div>
            </Container>
        </Section>
    );
};

/**
 * Left column
 *
 * @param {{heading: string, subheading: string, descriptions: string[], achievements: Array<{icon: string, year: string, title: string, description: string}>} | undefined} section6
 * @returns {JSX.Element}
 * @constructor
 */
const LeftColumn = ({ section6 }: AchievementsAndBeyondProps): JSX.Element => {
    return (
        <div className="relative grid content-start gap-[20rem] md:gap-[15rem]">
            <div className="grid grid-cols-[1fr_auto]">
                <Image
                    src="/images/section-images/achievements-and-byonds-attribute.png"
                    alt=""
                    width={376}
                    height={382}
                    className="absolute top-0 left-0 -z-[1] h-[36rem] w-[36rem] -translate-x-48 -translate-y-[15rem] -rotate-12 object-cover md:-translate-y-[26rem] md:rotate-0 lg:-translate-y-[24rem] xl:h-[39rem] xl:w-[38rem]"
                />
                <SectionHeading
                    heading={section6?.heading}
                    className="ml-24 max-w-[28.9rem] justify-self-center md:ml-28 md:-translate-y-28"
                />
            </div>

            <div className="grid gap-8">
                <div className="flex items-start justify-start gap-4">
                    <Image src="/images/icons/icon-heart-blue.svg" alt="" width={24} height={24} className="mt-1" />
                    <span className="font-latoBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">
                        Yvonne’s personal intrests
                    </span>
                </div>

                <div className="grid max-w-[38.6rem] gap-6">
                    {section6?.descriptions
                        ? section6.descriptions.map((item, key) => (
                              <p key={key} dangerouslySetInnerHTML={{ __html: stripInitialTags(item) }}></p>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

/**
 * Second column
 *
 * @param {{heading: string, subheading: string, descriptions: string[], achievements: Array<{icon: string, year: string, title: string, description: string}>} | undefined} section6
 * @returns {JSX.Element}
 * @constructor
 */
const AchievementColumn = ({ section6 }: AchievementsAndBeyondProps): JSX.Element => {
    return (
        <div className="grid gap-24 md:pr-24 xl:pr-40">
            {section6?.achievements.length
                ? section6.achievements.map((achievement, key) => (
                      <div key={key} className="grid gap-6">
                          <div className="grid gap-6 md:grid-cols-2">
                              <Image
                                  unoptimized
                                  src={achievement.icon}
                                  alt=""
                                  width={key === 0 ? 56 : 41}
                                  height={key === 0 ? 64 : 68}
                              />
                              <span className="font-latoBold text-[2rem] leading-[2.8rem] text-[#003E79] md:self-end md:justify-self-end">
                                  {achievement.year}
                              </span>
                              <span className="col-span-2 hidden h-[0.1rem] bg-[#003E79] md:block"></span>
                          </div>

                          <div className="grid gap-6 justify-self-start">
                              <span className="h-[0.1rem] bg-[#003E79] md:hidden"></span>
                              <span className="font-mulishBold uppercase text-[#003E79]">{achievement.title}</span>
                          </div>

                          <p
                              className="text-[#293C4E]"
                              dangerouslySetInnerHTML={{ __html: stripInitialTags(achievement.description) }}
                          ></p>
                      </div>
                  ))
                : null}

            <Link
                href="#"
                className="group/link flex items-center justify-start gap-3 justify-self-start font-mulishBold text-[1.4rem] uppercase leading-8 text-[#09F]"
            >
                And 12 more
                <svg
                    className="transition-all duration-500 group-hover/link:translate-x-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    fill="none"
                >
                    <path
                        d="M5.5 12H19.5"
                        stroke="#0099FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5 5L19.5 12L12.5 19"
                        stroke="#0099FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default AchievementsAndBeyond;
