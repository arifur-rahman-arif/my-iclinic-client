import { Container, ContainerFluid } from '@/components/container';
import { useEffect, useRef } from 'react';

import FooterHeaderLinks from '@/components/footer/FooterHeaderLinks';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

/**
 * Footer header component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterHeader = (): JSX.Element => {
    const pinRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Animate the pin
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinRef.current,
                start: 'top 80%'
            }
        });

        timeline.to(pinRef.current, {
            width: '100%',
            duration: 2,
            ease: 'expo.inOut'
        });
    }, []);

    return (
        <ContainerFluid className="z-[2] bg-[#ccf6ff] px-0">
            {/* Map */}
            <div className="mapouter relative h-[25rem] w-full md:hidden">
                <div className="gmap_canvas h-full w-full overflow-hidden !bg-none">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=960%20High%20Rd,%20London%20N12%209RY&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                    <br />
                    <a href="https://www.embedgooglemap.net">inserting google maps</a>
                </div>
            </div>
            <Container className="relative grid grid-cols-1 items-center py-12 md:min-h-[53rem] md:grid-cols-2 md:py-0">
                <div>
                    <h3 className="normal-case">
                        Glasses free life
                        <br />
                        <strong>Starts here</strong>
                    </h3>

                    <div ref={pinRef} className="relative mt-8 block h-6 w-0 max-w-[32.8rem] md:mt-12">
                        <Image
                            src="/images/icons/icon-pin-bold.svg"
                            alt=""
                            quality={20}
                            fill
                            className="w-full"
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <FooterHeaderLinks />
                </div>
            </Container>
            <div className="absolute top-0 left-0 -z-[1] h-full w-full bg-[80%_100%] bg-no-repeat md:bg-[url('/images/section-images/footer-header-bg.webp')] lg:bg-[auto_100%] lg:bg-[right_center]"></div>
        </ContainerFluid>
    );
};

export default FooterHeader;
