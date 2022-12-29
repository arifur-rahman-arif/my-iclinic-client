import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Button.module.scss';

interface ButtonInterface {
    type: 'button' | 'anchor' | 'submit';
    text: string;
    icon?: JSX.Element;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    loadingIconPosition?: 'left' | 'right';
    disabled?: boolean;
    mockDisabled?: boolean;
    className?: string;
    defaultClassName?: string;
    onClick?: () => void;
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
    type,
    text,
    icon: Icon,
    iconPosition,
    loading = false,
    loadingIconPosition = 'left',
    disabled = false,
    mockDisabled = false,
    className,
    defaultClassName = 'grid cursor-pointer grid-flow-col place-items-center gap-4 whitespace-nowrap rounded-primary border-2 border-brand bg-brand py-6 px-6 font-latoBold text-[1.6rem] capitalize outline-0 transition-all duration-300 focus-within:border-2 hover:bg-white focus:border-2 focus:border-brand focus-visible:border-2 sm:px-8',
    onClick,
    ...other
}: ButtonInterface): JSX.Element => {
    const buttonDisabled = loading || disabled;

    return (
        <>
            {type === 'anchor' && (
                <Link href="#" className={`${styles.button} ${defaultClassName} ${className}`}>
                    {iconPosition === 'left' && Icon}
                    {text || ''}
                    {iconPosition === 'right' && Icon}
                </Link>
            )}

            {(type === 'button' || type === 'submit') && (
                <button
                    className={`${styles.button} ${defaultClassName} ${className} ${
                        buttonDisabled || mockDisabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    onClick={onClick}
                    type={type}
                    disabled={buttonDisabled}
                    aria-label={text}
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
                    {iconPosition === 'left' && !loading && Icon}
                    {text || ''}
                    {iconPosition === 'right' && !loading && Icon}
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
