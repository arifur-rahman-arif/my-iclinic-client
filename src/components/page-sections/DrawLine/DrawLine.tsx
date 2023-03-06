import { useOnScreen } from '@/hooks';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

interface DrawLineInterface {
    image: ImageType;
    desktopImage: ImageType;
    altText?: string;
}

/**
 * Draw line component for showing the image
 *
 * @param {DrawLineInterface} { image, desktopImage }
 * @returns {*}
 */
const DrawLine = ({ image, desktopImage, altText }: DrawLineInterface) => {
    const coverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const { onEnter } = useOnScreen({ ref: triggerRef, triggerPosition: '85%' });

    useEffect(() => {
        if (!onEnter) return;

        gsap.to(coverRef.current, {
            translateY: '100%',
            duration: 2
        });
    }, [onEnter]);

    return (
        <div className="relative overflow-hidden" ref={triggerRef}>
            <Image
                src={image.url}
                alt={altText || ''}
                width={image.width}
                height={image.height}
                className="mx-auto object-contain md:hidden"
                quality={70}
            />
            <Image
                src={desktopImage.url}
                alt={altText || ''}
                width={desktopImage.width}
                height={desktopImage.height}
                className="mx-auto hidden object-contain md:block"
                quality={70}
            />
            <div ref={coverRef} className="absolute top-0 left-0 hidden h-full w-full bg-white md:block"></div>
        </div>
    );
};

export default DrawLine;
