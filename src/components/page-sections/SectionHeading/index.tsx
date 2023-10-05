import { twMerge } from 'tailwind-merge';

interface SectionHeadingProps {
    heading?: string;
    className?: string;
}

/**
 * Section heading style
 *
 * @param {string} heading
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
const SectionHeading = ({ heading, className }: SectionHeadingProps): JSX.Element => {
    if (!heading) return <></>;

    return (
        <div className={twMerge('flex items-center justify-start gap-6', className)}>
            <span className="h-full w-[0.8rem] bg-[#005DAF]"></span>
            <h2 className="font-latoBold text-[3rem] normal-case leading-[3.6rem] text-heading">{heading}</h2>
        </div>
    );
};

export default SectionHeading;
