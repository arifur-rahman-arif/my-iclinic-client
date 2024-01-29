import { ReactNode, useEffect, useRef } from 'react';
import styles from './Styles.module.scss';

interface TooltipProps {
    text: ReactNode;
    children: ReactNode;
    className?: string;
    arrowClassName?: string;
    showTooltip?: boolean;
    type?: 'hover' | 'clickable';
}

/**
 * Tooltip Component
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.text - The content of the tooltip.
 * @param {React.ReactNode} props.children - The wrapped elements that trigger the tooltip on hover.
 * @returns {React.ReactNode} The Tooltip component.
 */
const Tooltip = ({ text, className, children, arrowClassName, showTooltip, type = 'hover' }: TooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (showTooltip) {
            tooltipRef.current?.classList.remove('hide');
            tooltipRef.current?.classList.add('show');
        } else {
            tooltipRef.current?.classList.remove('show');
            tooltipRef.current?.classList.add('hide');
        }
    }, [showTooltip]);

    return (
        <div
            className={`relative ${styles.styles}`}
            onMouseEnter={() => {
                if (type === 'hover') {
                    tooltipRef.current?.classList.remove('hide');
                    tooltipRef.current?.classList.add('show');
                }
            }}
            onMouseLeave={() => {
                if (type === 'hover') {
                    tooltipRef.current?.classList.remove('show');
                    tooltipRef.current?.classList.add('hide');
                }
            }}
        >
            <div>{children}</div>

            <div
                ref={tooltipRef}
                className={`tooltip absolute top-full left-1/2 -translate-x-1/2 translate-y-4 rounded-primary bg-white opacity-0 drop-shadow-xl ${className} ${
                    showTooltip && 'show'
                }`}
            >
                <div className="relative">
                    <div className="absolute bottom-full left-1/2 -z-[1] -translate-x-1/2">
                        <div
                            className={`h-0 w-0 border-[0.8rem] border-b-brand border-l-transparent border-t-transparent border-r-transparent ${arrowClassName}`}
                        ></div>
                    </div>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
