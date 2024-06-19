import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import mastheadImage from '@/masthead/masthead-laser-eye-surgery.webp';
import RequestCallback from '@/page-sections/RequestCallback/RequestCallback';
import Image from 'next/image';
import { Reviews } from '@/components/page-sections/Masthead/MastheadOphthalmologyClinic';
import { LaserEyeSurgeryContentInterface } from '@/types';

// import { BookConsultation } from '@/components/page-sections';

interface MastheadOphthalmologyClinicProps extends Pick<LaserEyeSurgeryContentInterface, 'masthead'> {
    formClassName?: string;
    className?: string;
}

/**
 * `MastheadLaserEyeSurgery` is a React functional component that represents the masthead
 * section of the London Retina treatments website. It displays information about the clinic,
 * including the clinic name, a brief description, reviews, an image, and information about financing.
 *
 * @returns {JSX.Element} The JSX element representing the masthead section.
 */
const MastheadLaserEyeSurgery = ({
    masthead,
    formClassName,
    className
}: MastheadOphthalmologyClinicProps): JSX.Element => {
    return (
        <div className={`relative grid overflow-hidden ${className}`}>
            <BreadCrumb
                linkClassName="text-white"
                activeLinkClass="text-[#94CAFF]"
                className="mb-12 !hidden !px-0 md:!flex xl:mt-12"
                pathClassName="stroke-white"
            />

            <Container className="grid content-start gap-12 pb-12 pt-12 md:grid-cols-2 md:pb-0">
                <div className="grid content-start gap-10 md:justify-self-start md:bg-transparent">
                    <Reviews className="!mt-0" />

                    <h1 className="max-w-[43rem] font-latoExtraBold text-[3.6rem] uppercase leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                        {masthead?.heading || 'Laser Eye Surgery'}
                    </h1>

                    <p className="-mt-4 max-w-[58.8rem] font-mulishBold text-[2.4rem] uppercase leading-[3.2rem] text-[#00BFFF]">
                        {masthead?.subheading || 'reducing or eliminating the need for glasses or contact lenses'}
                    </p>

                    <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                        From as low as{' '}
                        <span className="font-latoBold text-[2.4rem] leading-[3.2rem] text-[#FFA500]">
                            {masthead.priceText || '£50/pcm'}
                        </span>
                        <br />
                        <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">
                            <b className="font-latoBold text-[2.4rem] leading-[3.2rem] text-[#FFA500]">0%</b> Finance
                            available
                        </span>
                    </span>

                    <div className="mt-12 grid justify-items-center gap-10 md:justify-items-start">
                        <div className="grid justify-items-center gap-4 lg:grid-cols-[auto_auto]">
                            {/* <BookConsultation buttonClassName="sitemap-link text-center hover:!border-white"> */}
                            {/*     <Button2 type="button" text="FREE consultation" /> */}
                            {/* </BookConsultation> */}
                            <Button2
                                type="anchor"
                                text="Affordable options"
                                link="/pricing-and-financing/financing-your-treatment#calculator"
                                title="Affordable options"
                                className="sitemap-link text-center hover:!border-white"
                            />
                        </div>
                    </div>
                </div>

                <RequestCallback className={formClassName} buttonText="Request a call back" />
            </Container>

            <Image
                src={mastheadImage}
                alt="The London Retina treatments"
                {...(masthead?.image as any)}
                className="absolute inset-0 -z-[1] h-full min-h-[33.7rem] w-full object-cover md:row-start-1 md:h-full md:w-full"
                priority
            />
        </div>
    );
};

export default MastheadLaserEyeSurgery;
