import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import VitreoretinalSurgeryContent from 'src/types/pages/vitreoretinal-surgery';

interface EyeCareServiceProps extends Partial<Pick<VitreoretinalSurgeryContent, 'section4'>> {}

/**
 * Represents the EyeCareService component that displays information about eye care services.
 *
 * @param {object} EyeCareServiceProps - The props for the EyeCareService component.
 * @param {boolean} EyeCareServiceProps.section4 - A boolean flag indicating whether to render section 4.
 * @returns {JSX.Element} The JSX element representing the EyeCareService component.
 */
const EyeCareService = ({ section4 }: EyeCareServiceProps) => {
    let icon: string;

    const cardList = section4?.list.map((item, i) => {
        if (i === 0) {
            icon = 'images/icons/icon-skillset.svg';
        }

        if (i === 1) {
            icon = 'images/icons/icon-cutting-edge.svg';
        }

        if (i === 2) {
            icon = 'images/icons/icon-personalized-healthcare.svg';
        }

        if (i === 3) {
            icon = 'images/icons/icon-holistic-approach.svg';
        }

        if (i === 4) {
            icon = 'images/icons/icon-collaborative-network.svg';
        }

        if (i === 5) {
            icon = 'images/icons/icon-educational-insights.svg';
        }

        return {
            ...item,
            icon
        };
    });

    return (
        <Section>
            <Container className="grid justify-items-center gap-12 md:gap-24">
                <h2 className="max-w-[33.8rem] text-center font-latoBold text-[3rem] normal-case leading-[3.6rem] md:text-[3.6rem] md:leading-[4rem]">
                    {section4?.heading}
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cardList?.length
                        ? cardList.map((item, key) => (
                              <div
                                  className={`grid gap-6 rounded-[1rem]  p-12 ${
                                      key % 2 === 0 ? 'bg-[#003E79]' : 'bg-[#FFD400]'
                                  }`}
                                  key={key}
                              >
                                  <span
                                      className={`grid h-[5.6rem] w-[5.6rem] place-items-center rounded-full bg-white`}
                                  >
                                      <Image src={item.icon} alt="" width={57} height={57} />
                                  </span>
                                  {/* <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-white md:text-[2.4rem] md:leading-[3.2rem]"> */}
                                  {/*     {item.title} */}
                                  {/* </span> */}
                                  <h5 className={`normal-case ${key % 2 === 0 ? 'text-white' : 'text-heading'}`}>
                                      {item.title}
                                  </h5>
                                  <p
                                      className={`font-mulishRegular ${
                                          key % 2 === 0 ? 'text-[#E1F1FF]' : 'text-[#404A4D]'
                                      }`}
                                  >
                                      {item.description}
                                  </p>
                              </div>
                          ))
                        : null}
                </div>
            </Container>
        </Section>
    );
};

export default EyeCareService;
