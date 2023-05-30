import gsap from 'gsap';
import { ChangeEvent, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './RadioButton2.module.scss';

interface RadioButton2Props {
    label: string;
    id: string;
    value: string | number;
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    labelClassName?: string;
}

const RadioButton2 = ({
    label,
    id,
    value,
    name,
    checked,
    onChange,
    labelClassName
}: RadioButton2Props): JSX.Element => {
    const { to, fromTo } = gsap;

    const elementRef = useRef<HTMLLabelElement | null>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        /**
         * Get the CSS variable from the element
         *
         * @param {string} key
         * @param {HTMLElement} elem
         * @returns {string}
         */
        const getVar = (key: string, elem: HTMLElement = document.documentElement) =>
            getComputedStyle(elem).getPropertyValue(key);

        const elem = elementRef.current;

        const svg = elem.querySelector('svg');
        const input = elem.querySelector('input');

        input?.addEventListener('change', (e) => {
            fromTo(
                input,
                {
                    '--border-width': '3px'
                },
                {
                    '--border-color': getVar('--c-active'),
                    '--border-width': '12px',
                    duration: 0.2
                }
            );
            to(svg, {
                keyframes: [
                    {
                        '--top-y': '6px',
                        '--top-s-x': 1,
                        '--top-s-y': 1.25,
                        duration: 0.2,
                        delay: 0.2
                    },
                    {
                        '--top-y': '0px',
                        '--top-s-x': 1.75,
                        '--top-s-y': 1,
                        duration: 0.6
                    }
                ]
            });
            to(svg, {
                keyframes: [
                    {
                        '--dot-y': '2px',
                        duration: 0.3,
                        delay: 0.2
                    },
                    {
                        '--dot-y': '0px',
                        duration: 0.3
                    }
                ]
            });
            to(svg, {
                '--drop-y': '0px',
                duration: 0.6,
                delay: 0.4,
                clearProps: true,
                onComplete: () => {
                    input.removeAttribute('style');
                }
            });
        });
    }, []);

    return (
        <div className={styles.styles}>
            <label className="radio flex items-center justify-start gap-4" ref={elementRef}>
                <div className="relative">
                    <input
                        type="radio"
                        aria-label={label}
                        id={id}
                        value={value}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                    />
                    <svg viewBox="0 0 24 24">
                        <circle className="top" cx="12" cy="-12" r="8" />
                        <circle className="dot" cx="12" cy="12" r="5" />
                        <circle className="drop" cx="12" cy="12" r="2" />
                    </svg>

                    <span className="selected-dot absolute top-1/2 left-1/2 block h-[1.2rem] w-[1.2rem] -translate-y-1/2 -translate-x-1/2 rounded-full bg-white"></span>
                </div>

                <span
                    className={twMerge(
                        'cursor-pointer font-mulishBold text-[1.8rem] leading-[2.8rem] text-white',
                        labelClassName
                    )}
                >
                    {label}
                </span>
            </label>
        </div>
    );
};

export default RadioButton2;
