import { ContainerFluid } from '@/components/Container';
import { useOnScreen } from '@/hooks';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

/**
 * Footer header component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterHeader = (): JSX.Element => {
    const pinRef = useRef<any>(null);
    const { onEnter } = useOnScreen({ ref: pinRef, triggerPosition: '80%' });

    useEffect(() => {
        if (!pinRef.current || !onEnter) return;
        // Animate the pin

        gsap.to(pinRef.current, {
            width: '100%',
            duration: 3,
            ease: 'expo.inOut'
        });
    }, [onEnter]);

    return (
        <ContainerFluid className="z-[2] overflow-hidden bg-white !px-0">
            {/* <iframe */}
            {/*     width="100%" */}
            {/*     className="min-h-[35rem]" */}
            {/*     height="100%" */}
            {/*     id="gmap_canvas" */}
            {/*     src="https://snazzymaps.com/embed/476517" */}
            {/* ></iframe> */}
            {/*         <iframe */}
            {/*             width="600" */}
            {/*             height="450" */}
            {/*             style={{ */}
            {/*                 border: '0' */}
            {/*             }} */}
            {/*             loading="lazy" */}
            {/*             allowFullScreen */}
            {/*             referrerPolicy="no-referrer-when-downgrade" */}
            {/*             src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCnDewDf6Go9zDvO5wzWpqLvgQgb5SbZww */}
            {/* &q=Space+Needle,Seattle+WA" */}
            {/*         ></iframe> */}
            <iframe
                height="100%"
                width="100%"
                className="min-h-[40rem]"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=960+High+Rd,+London+N12+8FA,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
        </ContainerFluid>
    );
};

export default FooterHeader;
