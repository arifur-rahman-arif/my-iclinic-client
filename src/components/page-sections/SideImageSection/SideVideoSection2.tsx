import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
import Cta2 from '@/components/page-sections/SectionParts/Cta2';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { ImageType2 } from '@/types';
import gsap from 'gsap';
import Image from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';

// Const VideoPlayer = dynamic(() => import('@/components/page-sections/section-parts/VideoPlayer'));

interface SideVideoSection2Interface {
    title: ReactNode;
    descriptions: ReactNode[];
    button1ClassName?: string;
    button2ClassName?: string;
    textColor?: string;
    sloganTextColor?: string;
    bgColor?: string;
    button2Icon?: JSX.Element;
    containerDefaultClassName?: string;
    containerClassName?: string;
    sectionImage?: ImageType2;
    sectionImageLarge?: ImageType2;
}

/**
 * Page section that contains text column and video column
 *
 * @returns {*}  {JSX.Element}
 */
const SideVideoSection2 = ({
    title,
    descriptions,
    button1ClassName,
    button2ClassName,
    textColor,
    sloganTextColor,
    bgColor,
    button2Icon,
    containerDefaultClassName,
    containerClassName,
    sectionImage,
    sectionImageLarge
}: SideVideoSection2Interface): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<HTMLDivElement | null>(null);
    const sectionOnScreen = useOnScreen({ ref: sectionRef, triggerPosition: -200 });
    // Const sectionOnScreenBottom = useOnScreen({ ref: sectionRef, triggerPosition: 300 });

    useEffect(() => {
        if (!animationRef.current || !sectionOnScreen.onEnter) return;

        gsap.to(animationRef.current, {
            width: '100%',
            duration: 3
        });
    }, [sectionOnScreen]);

    return (
        <Section className="relative overflow-hidden py-16 md:pt-28 md:pb-24" ref={sectionRef}>
            <div
                ref={animationRef}
                className={`absolute top-0 left-0 -z-[1] h-full w-0 ${bgColor || 'bg-lightOrange'}`}
            ></div>
            <Container
                className={`${
                    containerDefaultClassName || 'grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-24'
                } ${containerClassName}`}
            >
                <H2Variant1 className={`normal-case md:col-span-2 md:max-w-[79rem] ${textColor}`}>{title}</H2Variant1>
                <div className="grid gap-12 md:max-w-[46.7rem]">
                    {descriptions.map((desc, index) => (
                        <p key={index} className={`${textColor}`}>
                            {desc}
                        </p>
                    ))}

                    <Cta2
                        button1ClassName={`${
                            button1ClassName || '!bg-orange !border-orange hover:!bg-[#FFEFE5] hover:!border-orange'
                        }`}
                        button2ClassName={`!min-w-[18.6rem] md:min-w-[23.3rem] place-content-center ${
                            button2ClassName || 'border-orange !bg-transparent'
                        }`}
                        sloganTextColor={sloganTextColor}
                        button2Icon={button2Icon}
                    />
                </div>
                {/* <div className="">
                    {sectionOnScreenBottom && <VideoPlayer videoUrl="/videos/video-1.mp4" videoPoster="WUkLbxQYWME" />}
                </div> */}
                {sectionImage && (
                    <div className="md:hidden">
                        <Image
                            src={sectionImage.url}
                            alt=""
                            width={sectionImage.width}
                            height={sectionImage.height}
                            className="translate-x-[13rem] object-contain"
                        />
                    </div>
                )}
                {sectionImageLarge && (
                    <div className="hidden md:block">
                        <Image
                            src={sectionImageLarge.url}
                            alt=""
                            width={sectionImageLarge.width}
                            height={sectionImageLarge.height}
                            className="absolute top-2/4 right-0 max-h-[35rem] -translate-y-2/4 translate-x-[7.5rem] object-contain"
                        />
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default SideVideoSection2;
