import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';

export interface UspSectionInterface {
    image: StaticImageData;
    title: ReactNode;
}

interface UspSectionPropInterface {
    list: UspSectionInterface[];
}

/**
 * Unique selling point section component
 *
 * @returns {*}  {JSX.Element}
 */
const UspSection = ({ list }: UspSectionPropInterface): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { onEnter } = useOnScreen({ ref: containerRef, triggerPosition: -100 });

    useEffect(() => {
        if (!containerRef.current || !onEnter) return;

        gsap.to('.usp-item', {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.3
        });
    }, [onEnter]);

    return (
        <Section>
            <Container
                ref={containerRef}
                className="flex flex-wrap items-stretch justify-center gap-12 sm:gap-16 md:gap-20 xl:gap-28"
            >
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="usp-item grid w-full translate-y-4 place-items-center gap-8 opacity-0 sm:w-auto"
                    >
                        <Image src={item.image} alt="" className="h-[7.3rem] w-[7.3rem]" />
                        <span className="text-center font-mulishBold text-[1.8rem] leading-[2.2rem]">{item.title}</span>
                    </div>
                ))}
            </Container>
        </Section>
    );
};

// /**
//  * Usp Inner component
//  *
//  * @returns {*}  {JSX.Element}
//  */
// const Usp = ({}:): JSX.Element => {
//     return (
//         <div className="grid place-items-center gap-8 sm:max-w-[29.6rem]">
//             <Image src={IconPercentage} alt="" />
//             <span className="text-center font-mulishBold text-[1.8rem] leading-[2.2rem]">
//                 0% interest-free finance available (up to 24 months)
//             </span>
//         </div>
//     );
// };

export default UspSection;
