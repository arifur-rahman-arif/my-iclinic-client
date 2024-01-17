import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import styles from '@/components/GoodbyeModal/Style.module.scss';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionTextColumn';
import { useOnclickOutside } from '@/hooks';
// import { BookConsultation } from '@/page-sections/index';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import { ImageType3 } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

interface ContactComponentProps {
    sectionId: string;
    heading: string;
    backgroundImage: Omit<ImageType3, 'width' | 'height'>;
}

/**
 * ContactComponent Component
 *
 * This component represents a section dedicated to contact information. It includes a heading, a background image,
 * a button to play a video, and options to contact the team through various channels.
 *
 * @interface ContactComponentProps
 * @property {string} sectionId - The unique identifier for the ContactComponent section.
 * @property {string} heading - The main heading for the ContactComponent section.
 * @property {Omit<ImageType3, 'width' | 'height'>} backgroundImage - The background image for the ContactComponent.
 *
 * @component
 * @param {ContactComponentProps} props - The properties passed to the ContactComponent component.
 * @returns {JSX.Element} - The ContactComponent component JSX representation.
 */
const ContactComponent = ({ sectionId, heading, backgroundImage }: ContactComponentProps): JSX.Element => {
    const [playVideo, setPlayVideo] = useState<boolean>(false);
    return (
        <Section id={sectionId}>
            <div className="relative grid min-h-[30rem] grid-rows-[auto_1fr] content-center justify-items-center gap-12 p-12 py-16 md:py-24 md:px-0 xl:min-h-[60rem]">
                <Image {...backgroundImage} className="absolute z-[-1] h-full w-full object-cover" fill={true} />

                <div className="grid justify-items-center gap-12">
                    <SectionHeading heading={heading} headingClassName="text-white w-auto" barClassName="hidden" />

                    <button title="Play video" onClick={() => setPlayVideo(true)}>
                        <Image src="/images/icons/icon-play-white.svg" alt="" width={70} height={60} />
                    </button>
                </div>

                <div className="grid w-full justify-items-center self-end border-t border-white">
                    <div className="grid w-full max-w-[85.6rem]  gap-12 justify-self-center md:grid-cols-2">
                        <div className="mt-12 grid content-center gap-2">
                            <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">
                                Our options available
                            </span>
                            <span className="font-latoBold text-[2.8rem] leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                                Speak to our friendly team
                            </span>
                        </div>

                        <div className="grid gap-12 justify-self-end sm:justify-start md:mt-12">
                            <div className="grid justify-items-start gap-6">
                                <ChatWithUs
                                    className="border-none bg-transparent !p-0 hover:border-none hover:bg-transparent hover:text-white hover:opacity-60"
                                    svgClassName="group-hover/chat-button:stroke-white"
                                />

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

                            {/*
                            <BookConsultation
                                buttonClassName="bg-[#003E79] border-[#003E79] text-white hover:bg-transparent hover:border-white hover:text-white"
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
                            ></BookConsultation> */}

                            <Button2
                                className="border-[#003E79] bg-[#003E79] text-white hover:border-white hover:bg-transparent hover:text-white"
                                type="anchor"
                                link="https://connect.pabau.com/bookings.php?compid=11842"
                                target="_blank"
                                text="Book a consultation"
                            />
                        </div>
                    </div>
                </div>

                <VideoModal {...{ playVideo, setPlayVideo }} />
            </div>
        </Section>
    );
};

interface VideoModalProps {
    playVideo: boolean;
    setPlayVideo: Dispatch<SetStateAction<boolean>>;
}

/**
 * VideoModal Component
 *
 * This component represents a modal for displaying a video. It includes functionality to play or close the video.
 *
 * @interface VideoModalProps
 * @property {boolean} playVideo - A boolean indicating whether the video should be played or not.
 * @property {Dispatch<SetStateAction<boolean>>} setPlayVideo - A function to update the playVideo state.
 *
 * @component
 * @param {VideoModalProps} props - The properties passed to the VideoModal component.
 * @returns {JSX.Element} - The VideoModal component JSX representation.
 */
const VideoModal = ({ playVideo, setPlayVideo }: VideoModalProps): JSX.Element => {
    const outsideRef = useOnclickOutside(() => setPlayVideo(false));

    return (
        <div
            className={`${
                playVideo ? styles.show : ''
            } pointer-events-none fixed top-0 left-0 z-[999] grid h-full w-full place-content-center md:py-12`}
        >
            <div className="overlay absolute top-0 left-0 h-full w-full bg-white opacity-0"></div>

            <div
                ref={outsideRef}
                className={`modal relative grid translate-y-12 place-items-center gap-12 overflow-hidden overflow-y-auto rounded-primary bg-white p-8 pt-28 opacity-0 shadow-shadow2 md:gap-16 md:p-24`}
            >
                <AiOutlineCloseCircle
                    onClick={() => {
                        setPlayVideo(false);
                    }}
                    className="absolute top-0 right-0 h-10 w-10 translate-y-8 -translate-x-8 cursor-pointer fill-heading transition-all duration-300 hover:scale-110"
                />

                {playVideo && <VideoPlayer autoPlay={true} videoUrl="/videos/icl.mp4" videoPoster={'txmJk2sY-yI'} />}
            </div>
        </div>
    );
};

export default ContactComponent;
