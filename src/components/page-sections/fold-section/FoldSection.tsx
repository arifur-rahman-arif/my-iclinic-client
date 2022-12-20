import { Container } from '@/components/container';
import FoldItem from './FoldItem';
import { Section } from '@/components/section';

/**
 * Fold section component
 *
 * @returns {*}  {JSX.Element}
 */
const FoldSection = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-y-12 px-0 md:gap-x-32 lg:grid-cols-[auto_1fr] lg:gap-y-0">
                {/* Item 1 */}
                <FoldItem
                    price="£200"
                    priceText="The price of your Presbyond consultation"
                    priceDescription="After booking your Presbyond laser eye surgery we deduct your £200 consultation fee from your
				treatment price, making your consultation"
                    priceDescBoldText="100% FREE."
                    firstTopLeftRounded
                />

                {/* Item 2 */}
                <FoldItem
                    price="£2,400 per eye"
                    priceText="The price of your Presbyond laser eye surgery"
                    priceDescription="With 12 months interest-free finance available."
                    lastBottomLeftRounded
                />
            </Container>
        </Section>
    );
};

export default FoldSection;
