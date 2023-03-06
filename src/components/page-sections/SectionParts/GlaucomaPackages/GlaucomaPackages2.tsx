import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { ReactNode } from 'react';

interface GlaucomaPackageInterface {
    title: string;
    price: string;
    description: ReactNode;
}

const packageList: GlaucomaPackageInterface[] = [
    {
        title: 'Glaucoma Annual Screening Package',
        price: '£550',
        description: (
            <>
                This includes <strong>two Glaucoma investigations with our specialist,</strong> plus free unlimited
                pressure checks. This package will begin on your second visit with us (after your initial Glaucoma
                consultation).
            </>
        )
    },
    {
        title: 'Glaucoma Annual Management Package',
        price: '£750',
        description: (
            <>
                Providing <strong>three full Glaucoma investigations with our specialist,</strong> plus free unlimited
                pressure checks. This package will begin on your second visit with us (after your initial Glaucoma
                consultation). Your consultations in your annual management package will be carried out every four
                months for the year for a comprehensive checkup.
            </>
        )
    }
];

/**
 * Glaucoma packages
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaPackages2 = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 md:gap-32">
                <TextColumn
                    h2Heading="manage your glaucoma"
                    h3LightHeading={
                        <>
                            Manage your glaucoma symptoms
                            <br />
                        </>
                    }
                    h3BoldHeading="with our all-inclusive packages"
                />

                <div className="grid gap-12 md:gap-28 max-w-[95rem] md:ml-14">
                    {packageList.map((item, index) => (
                        <Package {...item} key={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default GlaucomaPackages2;

/**
 * Individual package component
 *
 * @param {string} title
 * @param {string} price
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} description
 * @returns {JSX.Element}
 * @constructor
 */
const Package = ({ title, price, description }: GlaucomaPackageInterface) => {
    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-start gap-4 md:gap-10">
                <H3Variant3 className="">{title}</H3Variant3>
                <div className="bg-yellow w-full max-w-[5rem]  md:max-w-[41.7rem] h-[0.2rem]"></div>
                <span className="text-[2rem] leading-[2.8rem] font-mulishBold">{price}</span>
            </div>
            <div className="col-span-full max-w-[51.6rem]">{description}</div>
        </div>
    );
};
