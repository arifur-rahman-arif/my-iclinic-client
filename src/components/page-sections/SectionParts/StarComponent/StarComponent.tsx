import Image from 'next/image';
import { FC } from 'react';

/**
 * Star rating component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const StarComponent: FC = (): JSX.Element => {
    return (
        <div className="flex items-center justify-start">
            {[...Array(5)].map((_, index) => (
                <Image
                    src="/images/icons/icon-star-yellow.svg"
                    alt=""
                    width={22}
                    height={22}
                    className="w-full max-w-[2.2rem]"
                    key={index}
                />
            ))}
        </div>
    );
};

export default StarComponent;
