import { IconButton } from '@mui/material';
import gsap from 'gsap';
import { ChangeEvent, useEffect, useRef } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

interface TextFieldInterface {
    type: 'text' | 'textarea' | 'password' | 'number';
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
    animateInputField?: number;
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
    animateInputField,
    defaultClassName = 'h-full w-full rounded-primary border border-secondary bg-white p-6 pr-20 outline-none transition-[border] duration-[400ms] focus:border-brand',
    className,
    placeHolderClassName
}: TextFieldInterface): JSX.Element => {
    const inputRef = useRef<any>(null);
    const placeholderRef = useRef<HTMLLabelElement>(null);
    const iconRef = useRef<HTMLSpanElement>(null);
    const errorTextRef = useRef<HTMLSpanElement>(null);
    const randomString = Math.random().toString(36).slice(2, 7);

    useEffect(() => {
        if (!value) return;

        animateInput();
    }, []);

    useEffect(() => {
        animateInput();
    }, [animateInputField]);

    useEffect(() => {
        if (value) return;

        inputRef.current.blur();
        removeAnimation();
    }, [value]);

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

    /**
     * Animate the place holder when input field is focused
     *
     * @param {boolean} focusActive
     */
    const animatePlaceHolder = (focusActive: boolean) => {
        // Animate the placeholder
        focusActive && animateInput();

        !value && !focusActive && removeAnimation();
    };

    /**
     * Add the animation to the input
     */
    const animateInput = () => {
        // Animate the placeholder
        placeholderRef.current &&
            gsap.to(placeholderRef.current, {
                top: 0,
                left: 0,
                duration: 0.3,
                scale: 0.8,
                ease: 'expo.inOut'
            });

        // Animate the input Icon by making the icon invisible
        iconRef.current &&
            gsap.to(iconRef.current, {
                opacity: 0,
                duration: 0.3,
                scale: 0.5,
                ease: 'expo.inOut'
            });
    };

    /**
     * Remove the animation from the input element
     */
    const removeAnimation = () => {
        placeholderRef.current &&
            gsap.to(placeholderRef.current, {
                top: type === 'textarea' ? '3rem' : '50%',
                left: '1.5rem',
                duration: 0.3,
                scale: 1,
                ease: 'expo.inOut'
            });

        iconRef.current &&
            gsap.to(iconRef.current, {
                opacity: 1,
                duration: 0.3,
                scale: 1,
                ease: 'expo.inOut'
            });
    };

    return (
        <div className="relative h-full w-full bg-white">
            {(type === 'text' || type === 'password') && (
                <input
                    value={value}
                    ref={inputRef}
                    type={type}
                    id={randomID ? randomString : id}
                    className={`${defaultClassName} ${errorText ? 'border-red-500' : ''} ${className}`}
                    onFocus={(e) => {
                        animatePlaceHolder(true);
                    }}
                    onBlur={(e) => {
                        animatePlaceHolder(false);
                    }}
                    onChange={onChange}
                    autoComplete="new-password"
                />
            )}

            {type === 'number' && (
                <input
                    value={value}
                    ref={inputRef}
                    type={type}
                    id={randomID ? randomString : id}
                    className={`${defaultClassName} ${className} ${errorText ? 'border-red-500' : ''}`}
                    onFocus={(e) => {
                        animatePlaceHolder(true);
                    }}
                    onBlur={(e) => {
                        animatePlaceHolder(false);
                    }}
                    onChange={onChange}
                    // OnKeyDown={(event) => {
                    //     if (!/((Digit)[0-9]|(Numpad)[0-9])/.test(event.code)) {
                    //         event.preventDefault();
                    //     }
                    // }}
                    autoComplete="new-password"
                />
            )}

            {type === 'textarea' && (
                <textarea
                    value={value}
                    ref={inputRef}
                    id={randomID ? randomString : id}
                    className={`h-full w-full resize-none rounded-primary border border-secondary bg-white p-6 pr-20 outline-none transition-[border] duration-[400ms] focus:border-brand ${
                        errorText ? 'border-red-500' : ''
                    }`}
                    onFocus={(e) => {
                        animatePlaceHolder(true);
                    }}
                    onBlur={(e) => {
                        animatePlaceHolder(false);
                    }}
                    onChange={onChange}
                    rows={rows}
                    autoComplete="off"
                />
            )}
            <label
                ref={placeholderRef}
                htmlFor={randomID ? randomString : id}
                className={`pointer-events-none absolute left-6 flex  items-center justify-center gap-2 bg-white p-4 font-latoMedium text-[1.6rem] leading-[1.6rem] text-secondary ${
                    type === 'textarea' ? 'top-12 -translate-y-2/4' : 'top-2/4 -translate-y-2/4'
                } ${placeHolderClassName}`}
            >
                {placeholder}
                {important ? <span className="scale-110 text-red-600">*</span> : <></>}
            </label>

            {/* Error text */}
            <span
                ref={errorTextRef}
                className="pointer-events-none absolute left-4 bottom-0 -translate-y-[50%] scale-50 text-[1.4rem] text-red-500 opacity-0"
            >
                {errorText || ''}
            </span>

            {Icon ? (
                <span ref={iconRef} className="pointer-events-none absolute top-2/4 right-6 -translate-y-2/4">
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
                            removeAnimation();
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
