import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { TextColumn } from '@/page-sections/index';
import { myopiaStackList } from '@/page-sections/StackedSection/stackedColumnList';
import StackBox, { StackBoxInterface } from './StackBox';
import { ReactNode } from 'react';

interface StackedSection2Interface {
    h3LightHeading: ReactNode;
    h3BoldHeading: ReactNode;
    descriptions?: ReactNode[];
    defaultContainerClassName?: string;
    containerClassName?: string;
    stackList?: Omit<StackBoxInterface, 'index'>[];
}

/**
 * Stacked section 2 component
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} h3LightHeading
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} h3BoldHeading
 * @param {React.ReactNode[] | undefined} descriptions
 * @param {string | undefined} defaultContainerClassName
 * @param {string | undefined} containerClassName
 * @param {Omit<StackBoxInterface, "index">[] | undefined} stackList
 * @returns {JSX.Element}
 * @constructor
 */
const StackedSection2 = ({
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    defaultContainerClassName,
    containerClassName,
    stackList
}: StackedSection2Interface): JSX.Element => {
    return (
        <Section>
            <Container className={`${defaultContainerClassName} ${containerClassName}`}>
                <TextColumn h3BoldHeading={h3BoldHeading} descriptions={descriptions} h3LightHeading={h3LightHeading} />

                <div className="mt-12 grid gap-12 md:mt-24 md:gap-24">
                    {(stackList || myopiaStackList).map((item, index) => (
                        <StackBox key={index} {...item} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default StackedSection2;
