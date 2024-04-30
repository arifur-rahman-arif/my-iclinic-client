import { Button2 } from '@/components/Buttons';
import { Section } from '@/components/Section';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { BookConsultation } from '@/components/page-sections';

interface EyeSurgeryConsultationProps {
    sectionId: string;
    heading: string;
    description: string;
    image: ImageType3;
}

/**
 * EyeSurgeryConsultation Component
 *
 * This component represents a section providing information about eye surgery consultations. It includes a heading,
 * a description, an image, and options to book a consultation or contact via phone.
 *
 * @interface EyeSurgeryConsultationProps
 * @property {string} sectionId - The unique identifier for the EyeSurgeryConsultation section.
 * @property {string} heading - The main heading for the EyeSurgeryConsultation section.
 * @property {string} description - The general description providing details about eye surgery consultations.
 * @property {ImageType3} image - The image associated with the eye surgery consultation.
 *
 * @component
 * @param {EyeSurgeryConsultationProps} props - The properties passed to the EyeSurgeryConsultation component.
 * @returns {JSX.Element} - The EyeSurgeryConsultation component JSX representation.
 */
const EyeSurgeryConsultation = ({
    sectionId,
    heading,
    description,
    image
}: EyeSurgeryConsultationProps): JSX.Element => {
    return (
        <Section id={sectionId}>
            <div className="grid md:grid-cols-2">
                <Image {...image} className="h-full w-full object-cover" unoptimized={true} />

                <div className="grid content-center gap-12 bg-[#003E79] px-12 py-20 lg:p-20 xl:p-32">
                    <h2 className="max-w-[52.8rem] normal-case text-white">{heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: description }} className="max-w-[45.9rem] text-white"></p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-12 sm:justify-start md:mt-12">
                        {/* <BookConsultation
                            buttonClassName=""
                            modalElement={
                                <>
                                    <iframe
                                        src=""
                                        width={600}
                                        height={700}
                                        className="w-full md:min-h-[70rem]"
                                    ></iframe>
                                </>
                            }
                            maxWidth="70rem"
                        >
                        </BookConsultation> */}
                        <BookConsultation buttonClassName="border-[#0099FF] bg-[#0099FF] hover:bg-transparent hover:text-[#0099FF]">
                            <Button2 type="button" className="" text="Book a consultation" />
                        </BookConsultation>

                        <Link
                            href="tel:0208 445 8877"
                            title="0208 445 8877"
                            className="flex items-center justify-center gap-4 font-latoBold text-white transition-all duration-500 hover:opacity-60"
                        >
                            <Image
                                src="/images/icons/icon-phone-white-outline.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                            />
                            0208 445 8877
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default EyeSurgeryConsultation;
