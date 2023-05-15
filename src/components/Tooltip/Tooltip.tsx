import { memo, ReactNode } from 'react';

interface TooltipProps {
    text: ReactNode;
    children: ReactNode;
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
const Tooltip = memo(({ text, children }: TooltipProps) => {
    return (
        <div className="group/tooltip relative">
            {children}

            <div className="pointer-events-none absolute left-1/2 z-10 mt-5 -translate-x-1/2 -translate-y-8 transform rounded-primary bg-white opacity-0 drop-shadow-xl transition-all duration-500 group-hover/tooltip:pointer-events-auto group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100">
                <div className="relative">
                    <div className="absolute top-0 left-1/2 -z-[1] -translate-x-1/2">
                        <div className="h-6 w-6 -translate-y-2 rotate-45 transform bg-heading2"></div>
                    </div>
                    <div className="z-[1] rounded-primary bg-white py-6 px-8">{text}</div>
                </div>
            </div>
        </div>
    );
});

export default Tooltip;
