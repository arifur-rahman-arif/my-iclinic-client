import { Container } from '@/components/Container';
import SectionTextColumn from '@/components/SectionTextColumn';
import { Section } from '@/components/Section';
interface Props {
    id: string;
    heading: string;
    packages: PackageProps[];
}

/**
 * Renders a section displaying various price packages.
 * @function PricePackageSection
 * @param {Props} props - The props for the PricePackageSection component.
 * @returns {JSX.Element} JSX representation of the PricePackageSection component.
 */
const PricePackageSection = ({ id, heading, packages }: Props): JSX.Element => {
    return (
        <Section id={id}>
            <Container className="grid gap-12 md:gap-24">
                <SectionTextColumn heading={heading} />

                <div className="grid gap-2">
                    {packages?.map((item, key) => (
                        <Package key={key} {...item} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

interface PackageProps {
    title: string;
    description: string;
    price: string;
}

/**
 * Renders a single package component.
 * @function Package
 * @param {PackageProps} props - The props for the Package component.
 * @returns {JSX.Element} JSX representation of the Package component.
 */
const Package = ({ title, description, price }: PackageProps): JSX.Element => {
    return (
        <div className="grid rounded-radius2 border border-solid border-[#EAECF0] transition-all duration-500 hover:shadow-shadow1 md:grid-cols-[28rem_1fr] lg:grid-cols-[30rem_1fr]">
            {/*     Blue section */}
            <div
                className="grid place-items-center whitespace-pre-line rounded-tl-radius2 rounded-tr-radius2 bg-[#0099FF] p-20 font-mulishBold text-white md:rounded-bl-radius2 md:rounded-tr-none lg:place-items-start lg:content-center lg:p-24"
                dangerouslySetInnerHTML={{ __html: title }}
            ></div>

            {/*     Description box */}
            <div className="grid content-start items-start gap-12 px-8 py-12 sm:px-12 md:grid-cols-[1fr_auto] md:py-24 lg:gap-20 lg:px-24 xl:gap-40">
                <p dangerouslySetInnerHTML={{ __html: description }} className="whitespace-pre-line text-[#404A4D]"></p>
                <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#404A4D]">{price}</span>
            </div>
        </div>
    );
};

export default PricePackageSection;
