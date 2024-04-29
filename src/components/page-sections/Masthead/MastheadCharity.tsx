import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import mastheadImage from '@/masthead/masthead-charity.webp';
import Image from 'next/image';
import { ImageType3 } from '@/types';

// import { BookConsultation } from '@/components/page-sections';

interface Props {
    heading: string;
    subheading: string;
    description: string;
    image: ImageType3;
}

/**
 * `MastheadCharity` is a React functional component that represents the masthead
 * section of the London Retina treatments website. It displays information about the clinic,
 * including the clinic name, a brief description, reviews, an image, and information about financing.
 *
 * @returns {JSX.Element} The JSX element representing the masthead section.
 */
const MastheadCharity = ({ heading, subheading, description, image }: Props): JSX.Element => {
    return (
        <div className={`relative grid min-h-[50rem] overflow-hidden xl:min-h-[73.6rem]`}>
            <BreadCrumb
                className="hidden md:mt-12 md:flex xl:mt-16"
                pathClassName="!stroke-white"
                linkClassName="text-white"
                activeLinkClass="text-[#94CAFF]"
            />

            <Container className="grid content-start gap-6 py-20 md:bg-transparent md:py-24">
                <h1 className="max-w-[43rem] font-latoExtraBold text-[3.6rem] uppercase leading-[4rem] text-white md:text-[4.8rem] md:leading-[4.8rem]">
                    {heading || 'Laser Eye Surgery'}
                </h1>

                <p className="-mt-4 max-w-[58.8rem] font-mulishBold text-[2.4rem] uppercase leading-[3.2rem] text-[#00BFFF]">
                    {subheading || 'reducing or eliminating the need for glasses or contact lenses'}
                </p>

                <p dangerouslySetInnerHTML={{ __html: description }} className="mt-6 max-w-[37.6rem] text-white"></p>

                <div className="mt-12 grid justify-items-center gap-10 md:mt-16 md:justify-items-start">
                    <div className="grid justify-items-center gap-4 lg:grid-cols-[auto_auto]">
                        {/* <BookConsultation buttonClassName=""> */}
                        {/* </BookConsultation> */}
                        <Button2
                            type="anchor"
                            link="#our-mission"
                            text="Support our mission"
                            className="border-[#00BFFF] bg-[#00BFFF] text-center hover:!border-[#00BFFF] hover:text-[#00BFFF] focus:!border-[#00BFFF]"
                        />
                        <Button2
                            type="anchor"
                            text="Our impact"
                            link="#impact-beyond-borders"
                            title="Our impact"
                            className="!border !border-white !bg-transparent !px-24 text-center !text-white hover:!border-[#003E79] hover:!bg-[#003E79]"
                        />
                    </div>
                </div>
            </Container>

            <Image
                src={mastheadImage}
                alt="The London Retina treatments"
                {...(image as any)}
                className="absolute inset-0 -z-[1] h-full min-h-[33.7rem] w-full object-cover md:row-start-1 md:h-full md:w-full"
                priority
            />
        </div>
    );
};

export default MastheadCharity;
