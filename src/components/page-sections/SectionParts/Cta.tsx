import { BookConsultation } from '@/components/page-sections';
import Image from 'next/image';

interface CtaInterface {
    defaultClassName?: string;
    className?: string;
    buttonClassName?: string;
}

/**
 * Cta section part
 *
 * @returns {*}  {JSX.Element}
 */
const Cta = ({
    defaultClassName = 'grid gap-4 justify-self-center',
    className,
    buttonClassName
}: CtaInterface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className || ''}`}>
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-telephone-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <a href="tel:0208 445 8877">
                    <span className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]">
                        (+44) 0208 445 8877
                    </span>
                </a>
            </div>
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
            <div className="mt-4 grid place-items-start">
                <BookConsultation buttonClassName={buttonClassName} />
            </div>
        </div>
    );
};

export default Cta;
