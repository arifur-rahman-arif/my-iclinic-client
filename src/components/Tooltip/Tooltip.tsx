import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Styles.module.scss';

interface TooltipProps {
    text: ReactNode;
    children: ReactNode;
    className?: string;
    arrowClassName?: string;
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
const Tooltip = ({ text, className, children, arrowClassName }: TooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    
    
    return (
        <div className={`relative ${styles.styles}`} onMouseEnter={() => {
            tooltipRef.current?.classList.remove('hide');
            tooltipRef.current?.classList.add('show');
        }}
             onMouseLeave={() => {
                 tooltipRef.current?.classList.remove('show');
                 tooltipRef.current?.classList.add('hide');
             }}>
            <div>
                {children}
            </div>
            
            <div
                ref={tooltipRef}
                className={`tooltip rounded-primary absolute top-full left-1/2 -translate-x-1/2 translate-y-4 bg-white drop-shadow-xl ${className}`}
            >
                <div className="relative">
                    <div className="absolute bottom-full left-1/2 -z-[1] -translate-x-1/2">
                        <div
                            className={`border-b-brand h-0 w-0 border-[0.8rem] border-l-transparent border-t-transparent border-r-transparent ${arrowClassName}`}></div>
                    </div>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
