import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { LaserEyeSurgeryContentInterface } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section11'> {}

/**
 * BenefitsOfLaserEyeSurgery Component
 *
 * A React component displaying the benefits of laser eye surgery.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered JSX element.
 *
 * @example
 * // Example usage of BenefitsOfLaserEyeSurgery component
 * <BenefitsOfLaserEyeSurgery section11={someSection11Data} />
 */
const BenefitsOfLaserEyeSurgery = ({ section11 }: Props): JSX.Element => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    /**
     * Handle Toggle Function
     *
     * A function to toggle the open index based on the provided index value.
     *
     * @function
     * @param {number} index - The index value to toggle.
     * @returns {void}
     *
     * @example
     * // Example usage of handleToggle function
     * const handleClick = (index) => {
     *    handleToggle(index);
     * }
     */
    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <Section id="benefits-of-laser-surgery" className="bg-[#003E79] py-24 md:pt-28 lg:pb-40">
            <Container className="grid gap-12 md:gap-24">
                <div className="grid gap-6">
                    <Image src="/images/icons/icon-laser-eye-surgery.svg" alt="" width={69} height={69} />
                    <h2 className="max-w-[52.5rem] normal-case text-white">
                        {section11?.heading || 'Our 10 most important benefits for laser eye surgery'}
                    </h2>
                </div>

                <div className="grid">
                    {section11?.list?.length
                        ? section11.list.map((item, index) => (
                              <div
                                  key={index}
                                  className={`rounded-[1rem] px-4 pb-6 transition-all duration-500 ${
                                      openIndex === index && 'mb-6 bg-[#94CAFF] !py-10'
                                  }`}
                              >
                                  <div className="cursor-pointer" onClick={() => handleToggle(index)}>
                                      <span
                                          className={`font-mulishBold text-[2rem] leading-[2.8rem]  transition-all duration-500 ${
                                              openIndex === index ? 'text-[#003E79]' : 'text-[#0099FF]'
                                          }`}
                                      >
                                          {index + 1}. {item.title}
                                      </span>
                                  </div>
                                  {openIndex === index && (
                                      <p className="max-w-[98rem] pl-9 text-[#003E79]">{item.description}</p>
                                  )}
                              </div>
                          ))
                        : null}
                </div>
            </Container>
        </Section>
    );
};

export default BenefitsOfLaserEyeSurgery;
