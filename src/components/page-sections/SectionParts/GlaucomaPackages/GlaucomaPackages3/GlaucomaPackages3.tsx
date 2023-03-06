import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { defaultList } from './packageList';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { TextColumn } from '@/page-sections/index';
import { ReactNode, useRef } from 'react';
import H3Variant1 from 'src/components/Headings/H3Variant1';

interface ItemInterface {
    title: string;
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
            <Container className="grid gap-12 md:gap-40 !px-0">
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

                <div className={`grid gap-12 md:gap-28 md:ml-14 ${packageContainerClassName}`}>
                    {(packageList || defaultList).map((item, index) => (
                        <Package key={index} {...item} {...other} />
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
            className={`grid gap-12 md:gap-24 lg:gap-32 grid-cols-1 lg:grid-cols-[45.5rem_1fr] items-center ${itemClassName}`}
        >
            <div
                className={`bg-darkBlue rounded-tl-primary rounded-tr-primary md:rounded-tr-none md:rounded-bl-primary grid place-items-center p-12 sm:p-32 min-h-[25.7rem] lg:max-w-[45.5rem] ${cardClassName}`}
            >
                <H3Variant1 className={`text-white !font-latoLight ${titleClassName}`}>{title}</H3Variant1>
            </div>
            <div className="grid gap-12 px-8 xl:px-0 content-center">
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
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-2 md:gap-10 items-center" ref={containerRef}>
            <H3Variant3>{title}</H3Variant3>
            <div className={`bg-yellow transition-all duration-[2.5s] ${onEnter ? 'w-full' : 'w-0'} h-[0.2rem]`}></div>
            <span className="text-[2rem] leading-[2.8rem] font-mulishBold">{price}</span>
            {description && (
                <div className="md:col-span-2">
                    {Array.isArray(description) ? (
                        <div className="grid gap-6">
                            {description.map((item, index) => (
                                <div key={index}>{item}</div>
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
