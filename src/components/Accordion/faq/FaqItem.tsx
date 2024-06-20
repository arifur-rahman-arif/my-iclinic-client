import { getElementTopPosition, stripInitialTags } from '@/utils/miscellaneous';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/FaqItem.module.scss';

interface AccordionItemInterface {
    accordion: {
        title: string;
        description: string;
        shortDescription?: string;
    };
    index: number;
}

/**
 * Faq item accordion
 *
 * @param {AccordionItemInterface} accordion
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const FaqItem = ({ accordion, index }: AccordionItemInterface): JSX.Element => {
    const { title, description } = accordion;
    const [expanded, setExpanded] = useState<boolean>(index === 0);
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(windowWidth);
    }, []);

    return (
        <div
            className={`${styles.styles} grid grid-cols-[auto_1fr] content-start gap-x-12 gap-y-10 transition-all duration-1000`}
        >
            <span
                onClick={() => {
                    setExpanded(!expanded);
                    if (windowWidth < 600) {
                        window.scrollTo(0, getElementTopPosition(descriptionRef.current) - 300);
                    }
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

                {/* <div className={`${expanded ? 'max-h-0' : 'max-h-fit'} overflow-hidden`}> */}
                {/*     {shortDescription ? ( */}
                {/*         <p */}
                {/*             className={`${ */}
                {/*                 expanded ? 'max-h-[300rem]' : 'max-h-[2rem]' */}
                {/*             } transition-max-height overflow-hidden duration-1000 line-clamp-1`} */}
                {/*         > */}
                {/*             {shortDescription} */}
                {/*         </p> */}
                {/*     ) : ( */}
                {/*         <p */}
                {/*             className={`${ */}
                {/*                 expanded ? 'max-h-[300rem]' : 'max-h-[2rem]' */}
                {/*             } transition-max-height overflow-hidden duration-1000 line-clamp-1`} */}
                {/*         > */}
                {/*             {description} */}
                {/*         </p> */}
                {/*     )} */}
                {/* </div> */}
            </div>
            <div
                ref={descriptionRef}
                className={`relative col-start-2 overflow-hidden ${
                    !expanded ? 'max-h-[2.5rem]' : 'max-h-[300rem]'
                } transition-all duration-1000`}
            >
                <p dangerouslySetInnerHTML={{ __html: stripInitialTags(description) }}></p>
                <div className={`mt-20 ${expanded ? 'w-full' : 'w-0'} transition-all duration-1000`}>
                    <div className="relative h-4 w-full">
                        <Image src="/images/icons/icon-pin-long.svg" quality={70} alt="" fill className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
