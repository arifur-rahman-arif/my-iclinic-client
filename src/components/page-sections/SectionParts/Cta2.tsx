import { Button } from '@/components/Button';
import { BookConsultation } from '@/components/page-sections';
import Image from 'next/image';
import { ReactNode } from 'react';

interface Cta2Interface {
    button1ClassName?: string;
    button1Text?: string;
    button2ClassName?: string;
    sloganTextColor?: string;
    button2Icon?: JSX.Element;
    excludeSloganText?: boolean;
    hoverIcon?: ReactNode;
    button2HoverIcon?: ReactNode;
    className?: string;
}

/**
 * Cta section part
 *
 * @returns {*}  {JSX.Element}
 */
const Cta2 = ({
    button1ClassName,
    button2ClassName,
    button1Text,
    sloganTextColor,
    button2Icon,
    excludeSloganText,
    hoverIcon,
    button2HoverIcon,
    className
}: Cta2Interface): JSX.Element => {
    return (
        <>
            <div className={`flex flex-wrap items-center justify-start gap-6 ${className}`}>
                <BookConsultation buttonClassName={button1ClassName} buttonText={button1Text} hoverIcon={hoverIcon} />

                <Button
                    type="phone"
                    text="0208 445 8877"
                    iconPosition="left"
                    className={
                        button2ClassName ||
                        '!min-w-[18.6rem] place-content-center border !bg-transparent md:min-w-[23.3rem] hover:!bg-brand'
                    }
                    icon={
                        button2Icon || (
                            <Image
                                src="/images/icons/icon-phone-dark.svg"
                                alt=""
                                width={20}
                                height={20}
                                quality={2}
                                className="h-8 w-8"
                            />
                        )
                    }
                    hoverIcon={button2HoverIcon}
                />
            </div>
            {!excludeSloganText && (
                <span
                    className={`font-latoBold text-[2.8rem] leading-[3.2rem] text-heading2 md:max-w-[38.7rem] ${sloganTextColor}`}
                >
                    A better quality of life is just around the corner!
                </span>
            )}
        </>
    );
};

export default Cta2;
