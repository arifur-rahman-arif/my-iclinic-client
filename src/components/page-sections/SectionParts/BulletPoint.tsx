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
const BulletPoint = ({ defaultClassName = 'translate-y-[0.6rem]', className }: BulletPointInterface): JSX.Element => {
    return (
        <Image
            src="/images/icons/icon-dotted-arrow.svg"
            alt=""
            width={18}
            height={18}
            className={`${defaultClassName} ${className}`}
        />
    );
};

export default BulletPoint;
