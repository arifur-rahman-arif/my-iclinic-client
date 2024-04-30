import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

/**
 * The `ImageType` interface defines the shape of an image object.
 *
 * @interface
 * @property {string} src - The source URL of the image.
 * @property {number} width - The width of the image in pixels.
 * @property {number} height - The height of the image in pixels.
 */

interface ImageType {
    src: string;
    width: number;
    height: number;
}

/**
 * The `RetinalDetachmentProps` interface defines the props expected by the `RetinalDetachment` component.
 *
 * @interface
 * @property {string} heading - The heading text for the section.
 * @property {string[]} descriptions - An array of descriptions providing information about retinal detachment.
 * @property {ImageType} sectionImage - The image to be displayed on smaller screens.
 * @property {ImageType} sectionImageLarge - The image to be displayed on larger screens.
 * @property {string} bulletPoint - An additional bullet point or key information about retinal detachment.
 * @property {string} [textColumnClassName] - Additional CSS class for the text column of the section.
 * @property {boolean} [specialistCtaButton] - Boolean indicating whether to display a "Speak to a specialist" button.
 */

interface RetinalDetachmentProps {
    heading: string;
    descriptions: string[];
    sectionImage: ImageType;
    sectionImageLarge: ImageType;
    bulletPoint: string;
    textColumnClassName?: string;
    specialistCtaButton?: boolean;
}

/**
 * `RetinalDetachment` is a React functional component that represents a section of the website providing information
 * about the eye condition known as Retinal Detachment. It includes descriptive content, images for different screen
 * sizes, and an optional specialist consultation button.
 *
 * @param {Partial<RetinalDetachmentProps>} props - The props for configuring the component.
 * @returns {JSX.Element} The JSX element representing the Retinal Detachment section.
 */
const RetinalDetachment = ({
    heading,
    descriptions,
    sectionImage,
    sectionImageLarge,
    bulletPoint,
    textColumnClassName,
    specialistCtaButton
}: Partial<RetinalDetachmentProps>): JSX.Element => {
    return (
        <Section>
            <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-24 xl:gap-28">
                <Image
                    src="/images/section-images/opthamology-retinal-detachment.webp"
                    alt=""
                    width={395}
                    height={806}
                    className="justify-self-center md:hidden"
                    {...sectionImage}
                />

                <Image
                    src="/images/section-images/opthamology-retinal-detachment-large.webp"
                    alt=""
                    width={621}
                    height={919}
                    className="hidden md:block"
                    {...sectionImageLarge}
                />

                <div className={twMerge('grid gap-12 md:col-start-1 md:row-start-1', textColumnClassName)}>
                    <SectionTextColumn
                        heading={heading || 'Retinal Detachment'}
                        descriptionContainerClassName="max-w-[50rem]"
                        descriptions={
                            (descriptions?.length && descriptions) || [
                                'Retinal detachment is a serious eye condition in which the retina, a thin layer of light-sensitive tissueat the back of the eye responsible for capturing light and sending visual signals to the brain, pulls away from its normal position.',
                                'This occurs when one develops a retinal tear during the posterior vitreous detachment. Once the retina is torn, fluid within the eye can seep through the break to accumulate underneath the retina, effectively separating it from the wall of the eye ball.',
                                'This separation can lead to a sudden and irreversible loss of vision if left untreated.',
                                'The primary procedure used to repair retinal detachment is called retinal re-attachment surgery.',
                                'There are several surgical techniques employed, including: vitrectomy, cryoretinopexy (localised freezing of retina tissue to allow adhesion of retina to the wall of the eyeball), laser retinopexy (localised laser of the retina to achieve adhesion to eyeball as above) with gas tamponade, scleral bucklingor a combination of these procedures.',
                                'Vitrectomy is a procedure in which the vitreous gel inside the eye is removed to get rid off the traction on the retina, and the retina is reattached by injecting a gas or oil bubble to push the retina back to its original positionand hold together with laser or cryotherapy.',
                                'Scleral buckling involves placing a silicone band around the eye to relieve the traction, allowing re-attachment of the retina to the wall of the eye ball with the help of cryoretinopexy.',
                                'The choice of procedure depends on the severity and location of the detachment.',
                                'Symptoms and signs of retinal detachment include new and sudden onset of flashing lights in either eye, new floaters in the eye, or a “shadow or curtain” effect from the periphery of your vision.'
                            ]
                        }
                    />

                    <div className="ml-10 grid grid-cols-[auto_1fr] items-start gap-4">
                        <span className="h-6 w-6 translate-y-2 rounded-full bg-[#893277]"></span>
                        <p className="max-w-[50.6rem] font-mulishBold text-heading">
                            {bulletPoint || (
                                <>
                                    It is crucial to seek immediate medical attention if you suspect retinal detachment,
                                    as timely intervention can greatly improve the chances of preserving vision.
                                </>
                            )}
                        </p>
                    </div>

                    {specialistCtaButton && (
                        // <BookConsultation
                        //     buttonClassName=""
                        //     modalElement={
                        //         <>
                        //             <iframe
                        //                 src=""
                        //                 width={600}
                        //                 height={700}
                        //                 className="w-full md:min-h-[70rem]"
                        //             ></iframe>
                        //         </>
                        //     }
                        //     maxWidth="70rem"
                        // >
                        // </BookConsultation>
                        <Button2
                            target="_blank"
                            className="ml-[4.5rem] justify-self-start text-center"
                            type="anchor"
                            link="https://connect.pabau.com/bookings.php?compid=11842"
                            text="Speak to a specialist"
                            title="Speak to a specialist"
                        />
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default RetinalDetachment;
