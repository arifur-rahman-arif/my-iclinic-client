import { LinkStyle } from '@/components/Link';
import { Section } from '@/components/Section';
import Image1 from '@/section-images/blurry-city.png';
import Image2 from '@/section-images/blurry-forest.png';
import Image from 'next/image';
import Link from 'next/link';

/**
 * BlurPrevention is a component that displays content related to preventing blurred vision, often used in the context of eye care services.
 *
 * @returns {JSX.Element} The rendered BlurPrevention component.
 */
const BlurPrevention = (): JSX.Element => {
    return (
        <Section>
            <div className="grid grid-cols-2 overflow-hidden lg:max-h-[46rem] lg:grid-cols-[auto_50rem_auto] xl:grid-cols-[1fr_auto_1fr]">
                <div className="max-h-[35rem] overflow-hidden lg:max-h-max">
                    <Image src={Image1} alt="" className="w-full scale-[1.09]" />
                </div>
                <div className="max-h-[35rem] overflow-hidden lg:max-h-max">
                    <Image src={Image2} alt="" className="w-full scale-[1.09]" />
                </div>

                <div className="col-span-2 grid content-center gap-12 bg-[#003E79] px-8 py-16 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:max-h-[46rem] xl:px-44">
                    <h2 className="text-center font-latoBold text-[3rem] normal-case leading-[3.6rem] text-white">
                        Don’t let life pass by in a blur{' '}
                    </h2>
                    <p className="-mt-6 text-center text-[#E1F1FF]">Reach out and see the world more clearly!</p>

                    <div className="grid justify-items-center gap-2">
                        <span className="text-center font-mulishBold text-[2rem] leading-[2.8rem] text-white">
                            See how much you can save!
                        </span>
                        <LinkStyle url="/pricing-and-financing/financing-your-treatment#calculator">
                            Calculate your cost
                        </LinkStyle>
                    </div>

                    <span className="justify-self-center font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white lg:mt-12">
                        Contact Us Now
                    </span>
                    <Link
                        href="tel:0208 445 8877"
                        className="-mt-6 justify-self-center rounded-[0.5rem] border-2 border-solid border-[#09F] bg-[#09F] py-6 px-12 text-center text-white transition-all duration-500 hover:bg-transparent hover:text-[#09F] xs:px-32"
                    >
                        0208 445 8877
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default BlurPrevention;
