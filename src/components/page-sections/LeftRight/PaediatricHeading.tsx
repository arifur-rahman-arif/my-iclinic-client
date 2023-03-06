import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { useRef } from 'react';

/**
 * Custom heading component for Paediatric numbered list component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PaediatricHeading = (): JSX.Element => {
    const pinRef = useRef<HTMLImageElement | null>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement | null>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <div className="relative" ref={pinAnimationTrigger}>
            <Image
                src={`/images/icons/icon-number-2-yellow.svg`}
                alt=""
                quality={10}
                width={67}
                height={42}
                className="h-[3.2rem] w-[3.2rem] md:h-[4.2rem] md:w-[6.7rem]"
            />
            <div className="h-2 w-full">
                <Image
                    ref={pinRef}
                    src="/images/icons/icon-pin-yellow.svg"
                    alt=""
                    quality={10}
                    width={150}
                    height={2}
                    className="w-0"
                />
            </div>
        </div>
    );
};

export default PaediatricHeading;
