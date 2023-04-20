import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { TextColumn } from '@/page-sections/index';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { ReactNode, useRef } from 'react';
import H3Variant1 from 'src/components/Headings/H3Variant1';

interface ItemInterface {
    title: ReactNode;
    price: ReactNode;
    description?: ReactNode;
}

export interface GlaucomaPackageInterface {
    titleClassName?: string;
    title: ReactNode;
    packageList: ItemInterface[];
    itemClassName?: string;
    cardClassName?: string;
}

interface GlaucomaPackages3Interface {
    packageList?: GlaucomaPackageInterface[];
    dynamicSectionHead?: ReactNode;
    itemClassName?: string;
    cardClassName?: string;
    packageContainerClassName?: string;
    titleClassName?: string;
}

export const defaultList: GlaucomaPackageInterface[] = [
    {
        title: (
            <>
                Translation
                <strong className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem] text-white md:text-[3.6rem] md:leading-[4rem]">
                    Services
                </strong>
            </>
        ),
        packageList: [
            {
                title: 'Telephone translation call',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £0.99p{' '}
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]"> per minute</span>
                    </>
                ),
                description: 'Minimum 15 minutes'
            },
            {
                title: 'Video translation call',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £3.50{' '}
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]"> per minute</span>
                    </>
                ),
                description: 'Minimum 20 minutes'
            },
            {
                title: (
                    <>
                        BSL (British Sign Language)
                        <br /> translation video call
                    </>
                ),
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £1.25{' '}
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">per minute</span>
                    </>
                ),
                description: 'Minimum 20 minutes'
            },
            {
                title: 'Face to Face translation',
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £35{' '}
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]"> per hour</span>
                    </>
                ),
                description: 'Minimum 1 hour'
            },
            {
                title: (
                    <>
                        BSL (British Sign Language)
                        <br />
                        face to face translation
                    </>
                ),
                price: (
                    <>
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">From</span> £60{' '}
                        <span className="font-mulishBold text-[1.6rem] leading-[2.4rem]">per hour</span>
                    </>
                ),
                description: 'Minimum 3 hour'
            }
        ]
    }
];

/**
 * Glaucoma package
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TranslationPackages = ({
    packageList,
    dynamicSectionHead,
    packageContainerClassName,
    ...other
}: GlaucomaPackages3Interface): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 !px-0 md:gap-40">
                {dynamicSectionHead ? (
                    dynamicSectionHead
                ) : (
                    <TextColumn
                        h2Heading="Private Treatment"
                        h3LightHeading={
                            <>
                                The costs of our private
                                <br />
                            </>
                        }
                        h3BoldHeading="Glaucoma treatments"
                    />
                )}

                <div className={`grid gap-12 md:ml-14 md:gap-28 ${packageContainerClassName}`}>
                    {((packageList?.length && packageList) || defaultList).map((item, index) => (
                        <Package key={index} {...item} {...other} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TranslationPackages;

/**
 * Individual package component
 *
 * @param {string} title
 * @param {string} price
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} description
 * @returns {JSX.Element}
 * @constructor
 */
const Package = ({
    itemClassName,
    cardClassName,
    title,
    packageList,
    titleClassName
}: GlaucomaPackageInterface): JSX.Element => {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-12 md:gap-24 lg:grid-cols-[45.5rem_1fr] lg:gap-32 ${itemClassName}`}
        >
            <div
                className={`grid min-h-[25.7rem] grid-rows-2 place-items-center overflow-hidden rounded-tl-primary rounded-tr-primary bg-darkBlue md:rounded-tr-none md:rounded-bl-primary lg:max-w-[45.5rem] ${cardClassName}`}
            >
                <Image
                    src="/images/section-images/translation-package.png"
                    alt=""
                    width={511}
                    height={270}
                    quality={100}
                    className="h-full w-full object-cover"
                />

                {typeof title == 'string' ? (
                    HTMLReactParser(title)
                ) : (
                    <H3Variant1 className={`p-12 !font-latoLight text-white sm:p-32  ${titleClassName}`}>
                        {title}
                    </H3Variant1>
                )}
            </div>
            <div className="grid content-center gap-12 px-8 xl:px-0">
                {packageList.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

/**
 * Price item component
 *
 * @param {ItemInterface} { title, price, description }
 * @returns {*}  {JSX.Element}
 */
const Item = ({ title, price, description }: ItemInterface): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef, triggerPosition: '90%' });

    return (
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[auto_1fr_auto] md:gap-10" ref={containerRef}>
            <H3Variant3>{typeof title === 'string' ? HTMLReactParser(title) : title}</H3Variant3>
            <div className={`bg-yellow transition-all duration-[2.5s] ${onEnter ? 'w-full' : 'w-0'} h-[0.2rem]`}></div>
            <span className="font-mulishBold text-[2rem] leading-[2.8rem]">
                {typeof price === 'string' ? HTMLReactParser(price) : price}
            </span>
            {description && (
                <div className="md:col-span-2">
                    {Array.isArray(description) ? (
                        <div className="grid gap-6">
                            {description.map((item, index) => (
                                <div key={index}>{typeof item === 'string' ? HTMLReactParser(item) : item}</div>
                            ))}
                        </div>
                    ) : (
                        description
                    )}
                </div>
            )}
        </div>
    );
};
