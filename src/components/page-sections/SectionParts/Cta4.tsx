import { Button } from '@/components/Button';
import Image from 'next/image';

/**
 * Cta section part
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Cta4 = (): JSX.Element => {
    return (
        <div className="mt-6 flex flex-wrap items-center justify-start gap-12">
            <Button
                type="phone"
                text="0208 445 8877"
                iconPosition="left"
                icon={
                    <Image
                        src="/images/icons/icon-phone-dark.svg"
                        alt=""
                        width={20}
                        height={20}
                        quality={2}
                        className="h-8 w-8"
                    />
                }
            />

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-chat.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">Chat with us</span>
            </div>
        </div>
    );
};

export default Cta4;
