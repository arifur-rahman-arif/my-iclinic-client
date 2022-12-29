import { H4Variant1 } from '@/components/headings';
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
const LeftRightTextColumn = ({ index, title, descriptions }: TextColumnInteraction): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <div className="grid gap-6 md:max-w-[46.7rem]">
            <div className="relative" ref={pinAnimationTrigger}>
                <Image
                    src={`/images/icons/icon-number-${index + 1}-yellow.svg`}
                    alt=""
                    quality={10}
                    width={67}
                    height={42}
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
            <div className="grid gap-6">
                <H4Variant1>{title}</H4Variant1>
                {descriptions.map((description, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: description }}></p>
                ))}
            </div>
        </div>
    );
};

export default LeftRightTextColumn;
