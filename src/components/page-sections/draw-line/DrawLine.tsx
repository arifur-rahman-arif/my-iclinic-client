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
}

/**
 * Draw line component for showing the image
 *
 * @param {DrawLineInterface} { image, desktopImage }
 * @returns {*}
 */
const DrawLine = ({ image, desktopImage }: DrawLineInterface) => {
    const coverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            coverRef.current &&
                gsap.to(coverRef.current, {
                    translateY: '100%',
                    duration: 2,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top 90%',
                        scrub: true
                    }
                });
        });

        // Then later...
        return () => ctx.revert();
    }, []);

    return (
        <div className="relative overflow-hidden" ref={triggerRef}>
            <Image
                src={image.url}
                alt=""
                width={image.width}
                height={image.height}
                className="mx-auto object-contain md:hidden"
                quality={30}
            />
            <Image
                src={desktopImage.url}
                alt=""
                width={desktopImage.width}
                height={desktopImage.height}
                className="mx-auto hidden object-contain md:block"
                quality={30}
            />
            <div ref={coverRef} className="absolute top-0 left-0 hidden h-full w-full bg-white md:block"></div>
        </div>
    );
};

export default DrawLine;
