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
            <iframe
                width="100%"
                className="min-h-[35rem]"
                height="100%"
                id="gmap_canvas"
                src="https://snazzymaps.com/embed/476517"
            ></iframe>
        </ContainerFluid>
    );
};

export default FooterHeader;
