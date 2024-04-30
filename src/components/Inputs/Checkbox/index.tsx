import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './Style.module.scss';

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
const Checkbox = ({ label, id, value, name, checked, onChange, className, labelClassName }: RadioButtonProps) => {
    return (
        <div className={styles.styles}>
            <label htmlFor={id} className={twMerge('flex items-center justify-start gap-4', className)}>
                <input
                    aria-label={label}
                    type="checkbox"
                    id={id}
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                <span className="checkbox">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-6"
                    >
                        <path
                            d="M12.3334 1L5.00002 8.33333L1.66669 5"
                            stroke="#FAF9F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span className={twMerge('font-mulishBold text-[1.6rem] leading-8', labelClassName)}>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
