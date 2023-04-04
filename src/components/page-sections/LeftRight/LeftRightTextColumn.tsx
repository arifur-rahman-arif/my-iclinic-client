import { FadeIn } from '@/components/Animations';
import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { useRef } from 'react';
import { LeftRightSectionChildrenInterface } from './LeftRightSection';

interface TextColumnInteraction extends Omit<LeftRightSectionChildrenInterface, 'mobileImage' | 'desktopImage'> {
    index: number;
}

/**
 * Text component of left-right section
 *
 * @param {TextColumnInteraction} { index, title, descriptions }
 * @returns {*}  {JSX.Element}
 */
const LeftRightTextColumn = ({
    index,
    title,
    descriptions,
    alternativeHeading,
    excludeNumbers,
    descriptionClassName
}: TextColumnInteraction): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <div className="grid gap-6">
            {alternativeHeading ? (
                alternativeHeading
            ) : (
                <div className="relative" ref={pinAnimationTrigger}>
                    {!excludeNumbers && (
                        <Image
                            src={`/images/icons/icon-number-${index + 1}-yellow.svg`}
                            alt=""
                            quality={10}
                            width={67}
                            height={42}
                            className="h-[3.2rem] w-[3.2rem] md:h-[4.2rem] md:w-[6.7rem]"
                        />
                    )}
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
            )}

            <div className={`grid gap-6 ${descriptionClassName}`}>
                {title && (
                    <h3 className="w-full font-latoBold text-[2.4rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        {title}
                    </h3>
                )}
                {descriptions?.map((description, index) => (
                    <FadeIn key={index}>
                        <div>{description}</div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default LeftRightTextColumn;
