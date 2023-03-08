import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface GlaucomaPackageInterface {
    title: string;
    priceImage: string;
    descriptions: ReactNode[];
}

/**
 * Sub component of package item
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PackageItem = ({ title, priceImage, descriptions }: GlaucomaPackageInterface): JSX.Element => {
    return (
        <div className="grid gap-x-8 gap-y-10 grid-cols-[28rem_auto] items-center">
            <span className="text-[2.8rem] leading-[3.2rem] font-latoBold">{title}</span>
            <Image src={priceImage} alt="" width={80} height={80} className="justify-self-end" />
            <div className="grid gap-6 col-span-2">
                {descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                ))}
            </div>
        </div>
    );
};

const glaucomaPackageList: GlaucomaPackageInterface[] = [
    {
        title: 'Glaucoma Annual Screening Package',
        priceImage: '/images/section-images/price-550.png',
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
        priceImage: '/images/section-images/price-750.png',
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

/**
 * GlaucomaPackages component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaPackages: FC = (): JSX.Element => {
    return (
        <div className="grid gap-12 md:gap-24">
            {glaucomaPackageList.map((glaucomaPackage, index) => (
                <PackageItem key={index} {...glaucomaPackage} />
            ))}
        </div>
    );
};

export default GlaucomaPackages;
