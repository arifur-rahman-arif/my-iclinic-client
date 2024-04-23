import { Container } from '@/components/Container';
import SectionTextColumn from '@/components/SectionTextColumn';
import { Section } from '@/components/Section';
interface Props {
    id: string;
    heading: string;
    description?: string;
    packages: {
        heading: string;
        packageColor: string;
        items: Omit<PackageProps, 'packageColor'>[];
    }[];
}

/**
 * Renders a section displaying various price packages.
 * @function PricePackageSection2
 * @param {Props} props - The props for the PricePackageSection2 component.
 * @returns {JSX.Element} JSX representation of the PricePackageSection2 component.
 */
const PricePackageSection2 = ({ id, heading, description, packages }: Props): JSX.Element => {
    return (
        <Section id={id}>
            <Container className="grid gap-12 md:gap-24">
                {heading && (
                    <SectionTextColumn
                        heading={heading}
                        descriptions={[description || '']}
                        descriptionClassName="[&_strong]:text-[1.6rem] [&_strong_*]:text-[1.6rem]"
                    />
                )}

                <div className="grid gap-12 md:gap-24">
                    {packages?.map((item, key) => (
                        <div className="grid gap-12" key={key}>
                            <div className="flex items-center justify-start gap-6">
                                <span
                                    className="block h-[1.4rem] w-[6.5rem] rounded-[1.6rem]"
                                    style={{ background: item.packageColor }}
                                ></span>
                                <h3 className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                                    {item.heading}
                                </h3>
                            </div>

                            <div className="grid gap-4 md:gap-[0.1rem]">
                                {item?.items?.length
                                    ? item.items.map((pkg, key) => (
                                          <Package key={key} {...pkg} packageColor={item.packageColor} />
                                      ))
                                    : null}
                            </div>
                        </div>
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
    priceAttribute?: string;
    packageColor: string;
}

/**
 * Renders a single package component.
 * @function Package
 * @param {PackageProps} props - The props for the Package component.
 * @returns {JSX.Element} JSX representation of the Package component.
 */
const Package = ({ title, description, price, priceAttribute, packageColor }: PackageProps): JSX.Element => {
    return (
        <div className="grid rounded-radius2 border border-solid border-[#EAECF0] transition-all duration-500 hover:shadow-shadow1 md:grid-cols-[28rem_1fr] lg:grid-cols-[30rem_1fr]">
            {/*     Blue section */}
            <div
                className="block whitespace-pre-line rounded-tl-radius2 rounded-tr-radius2 p-20 text-center font-mulishBold text-white md:rounded-bl-radius2 md:rounded-tr-none md:text-left lg:p-24 [&_*]:font-mulishBold"
                dangerouslySetInnerHTML={{ __html: title }}
                style={{ background: packageColor }}
            ></div>

            {/*     Description box */}
            <div className="grid content-start items-start gap-12 px-8 py-12 sm:px-12 md:grid-cols-[1fr_auto] md:py-24 lg:gap-20 lg:px-24 xl:gap-40">
                <p dangerouslySetInnerHTML={{ __html: description }} className="whitespace-pre-line text-[#404A4D]"></p>
                <div className="grid">
                    <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#404A4D]">{price}</span>
                    {priceAttribute && (
                        <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-[#404A4D]">
                            {priceAttribute}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PricePackageSection2;
