import { Container } from '@/components/container';
import FoldItem, { PriceSectionInterface } from './FoldItem';
import { Section } from '@/components/section';

export interface SectionPropInterface {
    priceList: PriceSectionInterface[];
}

/**
 * Fold section component
 *
 * @returns {*}  {JSX.Element}
 */
const PriceSection = ({ priceList }: SectionPropInterface): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-y-12 px-0 md:gap-x-32 lg:grid-cols-[auto_1fr] lg:gap-y-0">
                {priceList.map((list, index) => (
                    <FoldItem
                        key={index}
                        price={list.price}
                        priceText={list.priceText}
                        priceDescription={list.priceDescription}
                        priceDescBoldText={list.priceDescBoldText}
                        firstTopLeftRounded={index === 0 ? true : false}
                        lastBottomLeftRounded={index ? true : false}
                    />
                ))}
            </Container>
        </Section>
    );
};

export default PriceSection;
