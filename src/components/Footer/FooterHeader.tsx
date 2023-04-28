import { Container, ContainerFluid } from '@/components/Container';
import { useEffect, useRef } from 'react';

import FooterHeaderLinks from '@/components/Footer/FooterHeaderLinks';
import { useOnScreen } from '@/hooks';
import gsap from 'gsap';
import Image from 'next/image';

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
            {/* Mobile version Map */}
            <div className="mapouter relative h-[35rem] w-full lg:hidden">
                <div className="gmap_canvas h-full w-full overflow-hidden !bg-none">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://snazzymaps.com/embed/85989"
                    ></iframe>
                </div>
            </div>

            <Container className="grid grid-cols-1 items-center py-12 md:min-h-[53rem] md:py-0 lg:grid-cols-2">
                <div>
                    <h2 className="text-[2.8rem] normal-case leading-[2.8rem] md:text-[4.8rem] md:leading-[4.8rem]">
                        Glasses free life
                        <br />
                        <strong className="font-latoExtraBold text-[2.8rem] normal-case leading-[2.8rem] md:text-[4.8rem] md:leading-[4.8rem]">
                            Starts here
                        </strong>
                    </h2>

                    <div ref={pinRef} className="relative mt-8 block h-8 w-0 max-w-[32.8rem] overflow-hidden md:mt-12">
                        <Image
                            src="/images/icons/icon-pin-bold.svg"
                            alt=""
                            width={328}
                            height={4}
                            quality={70}
                            className="h-6 w-[32.8rem]"
                        />
                    </div>

                    <FooterHeaderLinks />
                </div>

                {/* Desktop version map */}
                <div className="gmap_canvas absolute right-0 hidden h-full w-2/4 max-w-[70rem] justify-self-end overflow-hidden !bg-none md:max-w-[50%] lg:block">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://snazzymaps.com/embed/476517"
                    ></iframe>
                </div>
            </Container>
            {/* <div className="absolute top-0 left-0 -z-[1] h-full w-full bg-[80%_100%] bg-no-repeat md:bg-[url('/images/section-images/footer-header-bg.webp')] lg:bg-[auto_100%] lg:bg-[right_center]"></div> */}
        </ContainerFluid>
    );
};

export default FooterHeader;
