import { ChangeEvent } from 'react';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
    label: string;
    id: string;
    value: string | number;
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultClassName?: string;
    className?: string;
    labelClassName?: string;
    rounded?: boolean;
}

// @ts-ignore

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
export const RadioButton = ({
    label,
    id,
    value,
    name,
    checked,
    onChange,
    defaultClassName = 'flex items-center justify-center gap-4',
    className,
    labelClassName,
    rounded = true
}: RadioButtonProps) => {
    return (
        <div className={styles.styles}>
            <label htmlFor={id} className={`${defaultClassName} ${className}`}>
                <input
                    aria-label={label}
                    type="radio"
                    id={id}
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                <span className={`checkbox ${rounded ? 'checkbox--rounded' : 'checkbox--flat'}`}>
                    <svg width="16" height="16" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.3334 1L5.00002 8.33333L1.66669 5"
                            stroke="#FAF9F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span
                    className={`font-mulishBold text-[1.6rem] leading-8 md:text-[2rem] md:leading-[2.8rem] ${labelClassName}`}
                >
                    {label}
                </span>
            </label>
        </div>
    );
};
