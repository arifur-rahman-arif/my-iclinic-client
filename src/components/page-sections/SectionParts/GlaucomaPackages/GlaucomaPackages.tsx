import HTMLReactParser from 'html-react-parser';
import { ReactNode } from 'react';

interface GlaucomaPackageInterface {
    title: string;
    price: string;
    descriptions: ReactNode[];
}

/**
 * Sub component of package item
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PackageItem = ({ title, price, descriptions }: GlaucomaPackageInterface): JSX.Element => {
    return (
        <div className="grid grid-cols-[28rem_auto] items-center gap-x-8 gap-y-10">
            <span className="font-latoBold text-[2.8rem] leading-[3.2rem]">{title}</span>
            <span className="grid h-[8rem] w-[8rem] place-items-center justify-self-end rounded-full bg-[#004574] font-latoBold text-[2.4rem] leading-[3.2rem] text-white">
                {price}
            </span>
            <div className="col-span-2 grid gap-6">
                {descriptions.map((description, index) => (
                    <div key={index}>
                        {typeof description === 'string' ? HTMLReactParser(description) : description}
                    </div>
                ))}
            </div>
        </div>
    );
};

const glaucomaPackageList: GlaucomaPackageInterface[] = [
    {
        title: 'Glaucoma Annual Screening Package',
        price: '£550',
        descriptions: [
            <>
                This includes <strong>two Glaucoma investigations with our specialist,</strong> plus free unlimited
                pressure checks. This package will begin on your second visit with us (after your initial Glaucoma
                consultation).
            </>
        ]
    },
    {
        title: 'Glaucoma Annual Management Package',
        price: '£750',
        descriptions: [
            <>
                Providing <strong>three full Glaucoma investigations with our specialist,</strong> plus free unlimited
                pressure checks.
            </>,
            'This package will begin on your second visit with us (after your initial Glaucoma consultation).',
            'Your consultations in your annual management package will be carried out every four months for the year for a comprehensive checkup.'
        ]
    }
];

interface GlaucomaPackagesProps {
    packageList?: GlaucomaPackageInterface[];
}

/**
 * GlaucomaPackages component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaPackages = ({ packageList }: GlaucomaPackagesProps): JSX.Element => {
    return (
        <div className="grid gap-12 md:gap-24">
            {((packageList && packageList.length && packageList) || glaucomaPackageList).map(
                (glaucomaPackage, index) => (
                    <PackageItem key={index} {...glaucomaPackage} />
                )
            )}
        </div>
    );
};

export default GlaucomaPackages;
