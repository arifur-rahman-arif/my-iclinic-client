import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface ButtonInterface {
    type: 'button' | 'anchor' | 'submit' | 'phone';
    link?: string;
    text: ReactNode;
    icon?: ReactNode;
    hoverIcon?: ReactNode;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    loadingIconPosition?: 'left' | 'right';
    disabled?: boolean;
    mockDisabled?: boolean;
    className?: string;
    defaultClassName?: string;
    onClick?: () => void;
    title?: string;
}

/**
 * Button component
 *
 * @param {ButtonInterface} {
 *     type,
 *     text,
 *     icon: Icon,
 *     iconPosition,
 *     loading,
 *     className,
 *     defaultClassName = 'grid cursor-pointer grid-flow-col place-items-center gap-4 whitespace-nowrap rounded-primary border-2 border-brand bg-brand py-6 px-6 font-latoBold text-[1.6rem] capitalize shadow-shadow1 outline-0 transition-all duration-300 focus-within:border-2 hover:bg-white focus:border-2 focus:border-brand focus-visible:border-2 sm:px-8',
 *     onClick
 * }
 * @returns {*}  {JSX.Element}
 */
const Button = ({
    title,
    type,
    link = '#',
    text,
    icon: Icon,
    hoverIcon,
    iconPosition,
    loading = false,
    loadingIconPosition = 'left',
    disabled = false,
    mockDisabled = false,
    className,
    defaultClassName = 'grid cursor-pointer text-white grid-flow-col place-items-center gap-4 whitespace-nowrap rounded-primary border-2 border-heading2 bg-heading2 py-6 px-6 font-latoBold text-[1.6rem] capitalize outline-0 transition-all duration-300 focus-within:border-2 hover:bg-white focus:border-2 focus:border-heading2 hover:text-heading2 hover:shadow-shadow1 focus-visible:border-2 sm:px-8',
    onClick,
    ...other
}: ButtonInterface): JSX.Element => {
    const buttonDisabled = loading || disabled;
    const [showHoverIcon, setShowHoverIcon] = useState<boolean>(false);

    return (
        <>
            {type === 'anchor' && (
                <Link href={link || '#'} className={`${defaultClassName} ${className}`} {...other}>
                    {iconPosition === 'left' && Icon}
                    {text || ''}
                    {iconPosition === 'right' && Icon}
                </Link>
            )}

            {type === 'phone' && (
                <a
                    href={`tel:${text}`}
                    className={`${defaultClassName} ${className}`}
                    onMouseEnter={(e) => {
                        hoverIcon && setShowHoverIcon(true);
                    }}
                    onMouseLeave={() => {
                        hoverIcon && setShowHoverIcon(false);
                    }}
                >
                    {iconPosition === 'left' && <>{showHoverIcon ? hoverIcon : Icon}</>}
                    {text || ''}
                    {iconPosition === 'right' && <>{showHoverIcon ? hoverIcon : Icon}</>}
                </a>
            )}

            {(type === 'button' || type === 'submit') && (
                <button
                    className={`${defaultClassName} ${className} ${
                        buttonDisabled || mockDisabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    onClick={onClick}
                    type={type}
                    disabled={buttonDisabled}
                    aria-label={title || (text as string)}
                    title={title || (text as string)}
                    onMouseEnter={(e) => {
                        hoverIcon && setShowHoverIcon(true);
                    }}
                    onMouseLeave={() => {
                        hoverIcon && setShowHoverIcon(false);
                    }}
                    {...other}
                >
                    {loadingIconPosition === 'left' && loading && (
                        <Image
                            src="/images/icons/icon-loader.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="relative top-[0.1rem] h-[2.4rem] w-[2.4rem]"
                        />
                    )}
                    {iconPosition === 'left' && !loading && <>{showHoverIcon ? hoverIcon : Icon}</>}
                    {text || ''}
                    {iconPosition === 'right' && !loading && <>{showHoverIcon ? hoverIcon : Icon}</>}
                    {loadingIconPosition === 'right' && loading && (
                        <Image
                            src="/images/icons/icon-loader.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="relative top-[0.1rem] h-[2.4rem] w-[2.4rem]"
                        />
                    )}
                </button>
            )}
        </>
    );
};

export default Button;
