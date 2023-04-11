import Image from 'next/image';

interface BulletPointInterface {
    defaultClassName?: string;
    className?: string;
}

/**
 * Bullet point component for the site
 *
 * @returns {*}  {JSX.Element}
 */
const BulletPoint = ({
    defaultClassName = 'h-[1.2rem] w-[1.2rem] translate-y-[0.6rem]',
    className
}: BulletPointInterface): JSX.Element => {
    return (
        <Image
            src="/images/icons/icon-angle-right.svg"
            alt=""
            width={20}
            height={20}
            className={`${defaultClassName} ${className}`}
        />
    );
};

export default BulletPoint;
