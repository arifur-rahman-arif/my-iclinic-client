/* eslint-disable no-unused-vars */
import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { TextColumn } from '@/page-sections/index';
import HTMLReactParser from 'html-react-parser';
import { useRef } from 'react';
import H3Variant1 from 'src/components/Headings/H3Variant1';
import { defaultList } from './packageList';

interface ItemInterface {
    title: string;
    price: any;
    description?: any;
}

export interface GlaucomaPackageInterface {
    titleClassName?: string;
    title: any;
    packageList: ItemInterface[];
    itemClassName?: string;
    cardClassName?: string;
    index: number;
}

interface GlaucomaPackages3Interface {
    packageList?: any;
    dynamicSectionHead?: any;

    itemClassName?: string;

    cardClassName?: string;
    packageContainerClassName?: string;
    titleClassName?: string;
}

/**
 * Glaucoma package
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaPackages3 = ({
    packageList,
    dynamicSectionHead,
    packageContainerClassName,
    ...other
}: GlaucomaPackages3Interface): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 !px-0 md:gap-24 md:!px-8">
                {dynamicSectionHead ? (
                    dynamicSectionHead
                ) : (
                    <div className="px-8 md:px-0">
                        <TextColumn
                            h3LightHeading={
                                <>
                                    The costs of our private
                                    <br />
                                </>
                            }
                            h3BoldHeading="Glaucoma treatments"
                        />
                    </div>
                )}

                <div className={`grid gap-12 md:gap-0 ${packageContainerClassName}`}>
                    {(packageList || defaultList).map((item: any, index: any) => (
                        <Package key={index} {...item} {...other} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default GlaucomaPackages3;

/**
 * Individual package component
 *
 * @param {string} title
 * @param {string} price
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.any> | React.ReactPortal | boolean | null | undefined} description
 * @returns {JSX.Element}
 * @constructor
 */
const Package = ({
    itemClassName,
    cardClassName,
    title,
    packageList,
    titleClassName,
    index
}: GlaucomaPackageInterface): JSX.Element => {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-12 border border-solid border-[#EAECF0] pb-12 md:grid-cols-[30rem_1fr] md:gap-12 md:pb-0 md:pr-24 lg:grid-cols-[40rem_1fr] xl:gap-32 ${itemClassName} ${
                index === 0 && 'md:rounded-tr-radius2'
            } ${index === 1 && 'md:rounded-br-radius2'}`}
        >
            {/* Blue box */}
            <div
                className={`grid min-h-[25.7rem] place-items-center md:h-full md:min-h-max  ${
                    index === 0 && 'md:rounded-tl-radius2'
                } ${
                    index === 1 && 'md:rounded-bl-radius2'
                } bg-[#0099FF] p-12 lg:max-w-[45.5rem] lg:p-0 ${cardClassName}`}
            >
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-white">{title}</span>
            </div>
            {/* Price box */}
            <div className="grid content-center gap-12 px-8 md:px-0 md:py-12">
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
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto] md:gap-10" ref={containerRef}>
            <p className="text-[#404A4D]">{title}</p>
            <span className="font-mulishBold text-[1.8rem] leading-[2.8rem]">
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
