import { useEffect, useRef, useState } from 'react';

import { FaqListInterface } from '@/components/page-sections/Faq/faqList';
import Image from 'next/image';
import gsap from 'gsap';
import { getElementTopPosition, trimText } from '@/utils/miscellaneous';
import styles from './styles/FaqItem.module.scss';

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
    const { title, description, shortDescription } = accordion;

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
                className={`${styles.styles} grid grid-cols-[auto_1fr] gap-x-12 transition-all duration-300 ${
                    expanded ? 'gap-y-8' : 'gap-y-10'
                }`}
            >
                <span
                    onClick={() => {
                        setExpanded(!expanded);
                        window.scrollTo(0, getElementTopPosition(descriptionRef.current) - 300);
                    }}
                    className="grid cursor-pointer place-items-start"
                >
                    {expanded ? (
                        <Image src="/images/icons/icon-minus-dark-bg.svg" alt="" width={34} height={34} quality={70} />
                    ) : (
                        <Image src="/images/icons/icon-plus-dark-bg.svg" alt="" width={34} height={34} quality={70} />
                    )}
                </span>
                <div
                    onClick={() => {
                        setExpanded(!expanded);
                        window.scrollTo(0, getElementTopPosition(descriptionRef.current) - 300);
                    }}
                    className="grid cursor-pointer grid-cols-1 gap-8"
                >
                    <h4 className="text-[1.6rem] normal-case leading-8 md:text-[2rem] md:leading-[2.4rem]">
                        {title || ''}
                    </h4>
                    {shortDescription ? (
                        <p
                            ref={shotDescriptionRef}
                            className={`${expanded ? 'max-h-0' : 'max-h-[300rem]'} overflow-hidden`}
                        >
                            {trimText(shortDescription, 50) || ''}
                        </p>
                    ) : (
                        <p
                            ref={shotDescriptionRef}
                            className={`${expanded ? 'max-h-0' : 'max-h-[300rem]'} overflow-hidden`}
                        >
                            {trimText(description, 50) || ''}
                        </p>
                    )}
                </div>
                <div
                    ref={descriptionRef}
                    className={`relative col-start-2 overflow-hidden ${!expanded ? 'max-h-0' : 'max-h-[300rem]'}`}
                >
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>

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
