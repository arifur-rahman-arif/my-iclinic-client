import { useEffect, useRef, useState } from 'react';

import { FaqListInterface } from '@/components/page-sections/faq/faqList';
import Image from 'next/image';
import gsap from 'gsap';
import { trimText } from '@/utils/miscellaneous';

interface AccordionItemInterface {
    index: number;
    accordion: FaqListInterface;
}

/**
 * Faq item for the accordion
 *
 * @param {AccordionItemInterface} { accordion, index }
 * @returns {*} {JSX.Element}
 */
const FaqItem = ({ accordion, index }: AccordionItemInterface): JSX.Element => {
    const { title, description } = accordion;

    const [expanded, setExpanded] = useState<boolean>(index === 0 ? true : false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const shotDescriptionRef = useRef<HTMLDivElement>(null);
    const longPinRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate the accordion items
        if (expanded) {
            const accordionTl = gsap.timeline();

            accordionTl
                .to(shotDescriptionRef.current, {
                    maxHeight: '0',
                    duration: 0.4,
                    ease: 'expo.inOut'
                })
                .to(
                    descriptionRef.current,
                    {
                        maxHeight: '300rem',
                        duration: 0.4,
                        ease: 'expo.inOut'
                    },
                    '-=0.4'
                )
                .to(
                    longPinRef.current,
                    {
                        width: '100%',
                        duration: 0.4,
                        ease: 'expo.inOut'
                    },
                    '-=0.2'
                );
        } else {
            const accordionTl = gsap.timeline();

            accordionTl
                .to(longPinRef.current, {
                    width: '0%',
                    duration: 0.4,
                    ease: 'expo.inOut'
                })
                .to(shotDescriptionRef.current, {
                    maxHeight: '300rem',
                    duration: 0.4,
                    ease: 'expo.inOut'
                })
                .to(
                    descriptionRef.current,
                    {
                        maxHeight: '0',
                        duration: 0.4,
                        ease: 'expo.inOut'
                    },
                    '-=0.4'
                );
        }
    }, [expanded]);

    return (
        <>
            <div
                className={`grid grid-cols-[auto_1fr] gap-x-12 transition-all duration-300 ${
                    expanded ? 'gapy-y-8' : 'gap-y-10'
                }`}
            >
                <span onClick={() => setExpanded(!expanded)} className="grid cursor-pointer place-items-start">
                    {expanded ? (
                        <Image src="/images/icons/icon-minus-dark-bg.svg" alt="" width={34} height={34} quality={70} />
                    ) : (
                        <Image src="/images/icons/icon-plus-dark-bg.svg" alt="" width={34} height={34} quality={70} />
                    )}
                </span>
                <div onClick={() => setExpanded(!expanded)} className="grid cursor-pointer grid-cols-1 gap-8">
                    <h4 className="normal-case">{title || ''}</h4>
                    <p
                        ref={shotDescriptionRef}
                        className={`${expanded ? 'max-h-0' : 'max-h-[300rem]'} overflow-hidden`}
                    >
                        {trimText(description, 50) || ''}
                    </p>
                </div>
                <div
                    ref={descriptionRef}
                    className={`relative col-start-2 overflow-hidden ${!expanded ? 'max-h-0' : 'max-h-[300rem]'}`}
                >
                    <p>{description || ''}</p>

                    <div ref={longPinRef} className={`mt-20 ${expanded ? 'w-full' : 'w-0'}`}>
                        <div className="relative h-4 w-full">
                            <Image
                                src="/images/icons/icon-pin-long.svg"
                                quality={70}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqItem;
