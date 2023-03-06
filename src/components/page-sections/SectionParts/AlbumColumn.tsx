import { largeSizes, useDeviceSize, useOnScreen } from '@/hooks';
import ClearVision1 from '@/section-images/clear-vision-image-1.png';
import ClearVision2 from '@/section-images/clear-vision-image-2.png';
import ClearVision3 from '@/section-images/clear-vision-image-3.png';
import ClearVision4 from '@/section-images/clear-vision-image-4.png';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * Album component
 *
 * @returns {*}  {JSX.Element}
 */
const AlbumColumn = (): JSX.Element => {
    const imageRef1 = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    const imageRef4 = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const deviceSize = useDeviceSize();
    const { onEnter } = useOnScreen({ ref: containerRef, triggerPosition: '60%' });

    useEffect(() => {
        if (!imageRef1.current || !imageRef2.current || !imageRef3.current || !imageRef4.current) return;

        if (!deviceSize || !onEnter) return;

        const tl = gsap.timeline();

        let imageRef1TranslateValue = -70;
        let imageRef2TranslateValue = 120;

        // Image ref 1 values by condition
        if (deviceSize === 'small') {
            imageRef1TranslateValue = -150;
        }

        if (largeSizes.includes(deviceSize)) {
            imageRef1TranslateValue = -200;
        }

        // Image ref 2 values by condition
        if (deviceSize === 'small') {
            imageRef2TranslateValue = 150;
        }

        if (largeSizes.includes(deviceSize)) {
            imageRef2TranslateValue = 150;
        }

        tl.to(imageRef1.current, {
            translateX: imageRef1TranslateValue,
            rotate: '14.45deg',
            scale: 1.1,
            duration: 2.5,
            ease: 'back.out(1.7)'
        })
            .to(
                imageRef2.current,
                {
                    translateY: imageRef2TranslateValue,
                    rotate: '8.24deg',
                    scale: 1.1,
                    duration: 2.5,
                    ease: 'back.out(1.7)'
                },
                '-=2.5'
            )
            .to(
                imageRef3.current,
                {
                    translateX: imageRef1TranslateValue * -1,
                    rotate: '-10.75deg',
                    scale: 1.1,
                    duration: 2.5,
                    ease: 'back.out(1.7)'
                },
                '-=2.5'
            )
            .to(
                imageRef4.current,
                {
                    translateY: imageRef2TranslateValue * -1,
                    rotate: '-10.02deg',
                    scale: 1.1,
                    duration: 2.5,
                    ease: 'back.out(1.7)'
                },
                '-=2.5'
            );
    }, [deviceSize, onEnter]);

    return (
        <div
            className="relative h-full min-h-[40rem] w-full overflow-hidden sm:min-h-[50rem] md:overflow-visible"
            ref={containerRef}
        >
            <Image
                src={ClearVision1}
                alt="Female athlete watching the view without needing glasses for short sightedness"
                className="absolute top-2/4 left-2/4 z-[4] max-h-[10rem] max-w-[12rem] -translate-y-2/4 -translate-x-2/4 rounded-primary sm:max-h-[15rem] sm:max-w-[18rem] xl:max-h-[21.7rem] xl:max-w-[26.6rem]"
                ref={imageRef1}
            />
            <Image
                src={ClearVision2}
                alt="Couple kayaking through sea caves after vision correction treatment"
                className="absolute top-2/4 left-2/4 z-[3] max-h-[10rem] max-w-[12rem] -translate-y-2/4 -translate-x-2/4 rounded-primary sm:max-h-[15rem] sm:max-w-[18rem] xl:max-h-[21.7rem] xl:max-w-[26.6rem]"
                ref={imageRef2}
            />
            <Image
                src={ClearVision3}
                alt="Skier in the snow"
                className="absolute top-2/4 left-2/4 z-[1] max-h-[10rem] max-w-[12rem] -translate-y-2/4 -translate-x-2/4 rounded-primary sm:max-h-[15rem] sm:max-w-[18rem] xl:max-h-[21.7rem] xl:max-w-[26.6rem]"
                ref={imageRef3}
            />
            <Image
                src={ClearVision4}
                alt="Woman in Italy on holiday watching the view after vision correction"
                className="absolute top-2/4 left-2/4 z-[3] max-h-[10rem] max-w-[12rem] -translate-y-2/4 -translate-x-2/4 rounded-primary sm:max-h-[15rem] sm:max-w-[18rem] xl:max-h-[21.7rem] xl:max-w-[26.6rem]"
                ref={imageRef4}
            />
        </div>
    );
};

export default AlbumColumn;
