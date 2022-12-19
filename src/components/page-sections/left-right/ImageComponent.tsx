import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface ImageComponentInterface {
    mobileImage: JSX.Element;
    desktopImage: JSX.Element;
}

/**
 * Left right section image component
 *
 * @param {ImageComponentInterface} { mobileImage, desktopImage }
 * @returns {*}  {JSX.Element}
 */
const ImageComponent = ({ mobileImage, desktopImage }: ImageComponentInterface): JSX.Element => {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 1.8,
            opacity: 1,
            marginTop: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <div
            className="row-start-1 -mt-12 scale-[1.4] justify-self-center md:row-auto md:justify-self-auto"
            ref={imageRef}
        >
            {mobileImage}
            {desktopImage}
        </div>
    );
};

export default ImageComponent;
