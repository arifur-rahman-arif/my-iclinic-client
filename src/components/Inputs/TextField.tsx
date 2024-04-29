import { IconButton } from '@mui/material';
import gsap from 'gsap';
import { ChangeEvent, useEffect, useRef } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';
import styles from './styles/TextField.module.scss';

interface TextFieldInterface {
    type: 'text' | 'textarea' | 'password' | 'number' | 'email';
    value: string | number;
    id?: string;
    placeholder: string;
    icon?: JSX.Element;
    important?: boolean;
    errorText?: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClearValue: () => void;
    randomID?: boolean;
    rows?: number;
    defaultClassName?: string;
    className?: string;
    placeHolderClassName?: string;
}

/**
 * Text field of the website
 *
 * @param {TextFieldInterface} {
 *     type,
 *     value,
 *     id,
 *     placeholder,
 *     icon: Icon,
 *     important,
 *     errorText,
 *     onChange,
 *     onClearValue,
 *     randomID
 * }
 * @returns {*}  {JSX.Element}
 */
const TextField = ({
    type,
    value,
    id,
    placeholder,
    icon: Icon,
    important,
    errorText,
    onChange,
    onClearValue,
    randomID,
    rows,
    defaultClassName = 'h-full w-full rounded-radius2 border border-[#C3C9D5] p-6 pr-20 outline-none transition-[border] duration-[400ms] focus:border-brand',
    className,
    placeHolderClassName
}: TextFieldInterface): JSX.Element => {
    const errorTextRef = useRef<HTMLSpanElement>(null);
    const randomString = Math.random().toString(36).slice(2, 7);

    // Animate the error text
    useEffect(() => {
        errorText &&
            errorTextRef.current &&
            gsap.to(errorTextRef.current, {
                transform: 'translateY(100%)',
                duration: 0.3,
                pointerEvents: 'auto',
                autoAlpha: 1,
                scale: 1,
                ease: 'expo.inOut'
            });

        !errorText &&
            errorTextRef.current &&
            gsap.to(errorTextRef.current, {
                transform: 'translateY(-50%)',
                duration: 0.3,
                autoAlpha: 0,
                scale: 0.5,
                ease: 'expo.inOut'
            });
    }, [errorText]);

    return (
        <div className={`relative h-full w-full ${styles.styles}`}>
            {(type === 'text' || type === 'password' || type === 'email') && (
                <input
                    value={value}
                    type={type}
                    name={type}
                    id={randomID ? randomString : id}
                    className={`${twMerge(defaultClassName, `${errorText ? 'border-red-500' : ''} ${className}`)}`}
                    onChange={onChange}
                    autoComplete="new-password"
                    placeholder=""
                />
            )}

            {type === 'number' && (
                <input
                    value={value}
                    type={type}
                    id={randomID ? randomString : id}
                    className={`${twMerge(defaultClassName, `${errorText ? 'border-red-500' : ''} ${className}`)}`}
                    onChange={onChange}
                    autoComplete="new-password"
                />
            )}

            {type === 'textarea' && (
                <textarea
                    value={value}
                    id={randomID ? randomString : id}
                    className={`h-full w-full resize-none rounded-radius2 border border-[#C3C9D5] bg-white p-6 pr-20 outline-none transition-[border] duration-[400ms] focus:border-brand ${
                        errorText ? 'border-red-500' : ''
                    }`}
                    onChange={onChange}
                    rows={rows}
                    autoComplete="off"
                    placeholder=""
                />
            )}
            <label
                htmlFor={randomID ? randomString : id}
                className={`input-placeholder pointer-events-none absolute left-6 flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-mulishExtraBold text-[1.4rem] uppercase leading-[1.4rem] text-heading transition-all duration-300 ${
                    type === 'textarea' ? 'top-12 -translate-y-2/4' : 'top-2/4 -translate-y-2/4'
                } ${placeHolderClassName}`}
            >
                {placeholder}
                {important ? <span className="scale-110 text-red-600">*</span> : <></>}
            </label>

            {/* Error text */}
            <span
                ref={errorTextRef}
                className="pointer-events-none absolute bottom-0 left-4 -translate-y-[50%] scale-50 text-[1.4rem] text-red-500 opacity-0"
            >
                {errorText || ''}
            </span>

            {Icon ? (
                <span className="input-icon pointer-events-none absolute right-6 top-2/4 -translate-y-2/4 divide-red-50 transition-all duration-500">
                    {Icon}
                </span>
            ) : (
                <></>
            )}

            {value ? (
                <span
                    className={`absolute right-4 cursor-pointer ${
                        type === 'textarea' ? 'top-12 -translate-y-2/4' : 'top-2/4 -translate-y-2/4'
                    }`}
                >
                    <IconButton
                        onClick={() => {
                            onClearValue();
                        }}
                    >
                        <AiOutlineClear />
                    </IconButton>
                </span>
            ) : (
                <></>
            )}
        </div>
    );
};

export default TextField;
