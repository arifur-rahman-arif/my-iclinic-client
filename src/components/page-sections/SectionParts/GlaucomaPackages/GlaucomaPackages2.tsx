import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { Key, ReactNode } from 'react';

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

interface GlaucomaPackages2Props {
    datapackList: GlaucomaPackageInterface[];
}

/**
 * Glaucoma packages
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaPackages2 = ({ datapackList }: GlaucomaPackages2Props): JSX.Element => {
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

                <div className="grid max-w-[95rem] gap-12 md:ml-14 md:gap-28">
                    {((datapackList?.length && datapackList) || packageList).map(
                        (item: JSX.IntrinsicAttributes & GlaucomaPackageInterface, index: Key | null | undefined) => (
                            <Package {...item} key={index} />
                        )
                    )}
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
                <div className="h-[0.2rem] w-full max-w-[5rem]  bg-yellow md:max-w-[41.7rem]"></div>
                <span className="font-mulishBold text-[2rem] leading-[2.8rem]">{price}</span>
            </div>
            <div className="col-span-full max-w-[51.6rem]">{description}</div>
        </div>
    );
};
