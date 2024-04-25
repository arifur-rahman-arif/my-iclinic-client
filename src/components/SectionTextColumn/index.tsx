import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTextColumnProps {
    heading?: string;
    descriptions?: string[];
    barClassName?: string;
    headingClassName?: string;
    descriptionContainerClassName?: string;
    descriptionClassName?: string;
    textColumnFooter?: ReactNode;
    textColumnFooterClass?: string;
    className?: string;
}

/**
 * Represents a component for rendering a section with a heading and multiple descriptions
 *
 * @interface SectionTextColumnProps
 * @param {string} heading - The heading for the section.
 * @param {string[]} descriptions - An array of descriptions to be displayed in the section.
 * @param {string} barClassName - An optional CSS class name for styling the vertical bar.
 * @param {string} headingClassName - An optional CSS class name for styling the heading.
 * @param {string} descriptionContainerClassName - An optional CSS class name for styling the description container.
 * @param {string} descriptionClassName - An optional CSS class name for styling individual descriptions.
 * @returns {JSX.Element} - The rendered SectionTextColumn component.
 */
const SectionTextColumn = ({
    heading,
    descriptions,
    barClassName,
    headingClassName,
    descriptionContainerClassName,
    descriptionClassName,
    textColumnFooter,
    textColumnFooterClass,
    className
}: SectionTextColumnProps): JSX.Element => {
    return (
        <div className={twMerge('grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-12', className)}>
            {heading ? <SectionHeading {...{ heading, headingClassName, barClassName }} /> : null}

            {descriptions?.length ? (
                <div
                    className={twMerge(
                        'description-box col-start-2 grid w-full max-w-[47.5rem] gap-6',
                        descriptionContainerClassName
                    )}
                >
                    {descriptions.map((item, key) => (
                        <p className={descriptionClassName} key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                    ))}
                </div>
            ) : null}

            {textColumnFooter && (
                <div className={twMerge('col-start-2', textColumnFooterClass)}>{textColumnFooter}</div>
            )}
        </div>
    );
};

interface SectionHeadingProps {
    heading: string;
    barClassName?: string;
    headingClassName?: string;
}

/**
 * Section heading component
 *
 * @param {string} heading
 * @param {string | undefined} barClassName
 * @param {string | undefined} headingClassName
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionHeading = ({ heading, barClassName, headingClassName }: SectionHeadingProps) => {
    return (
        <>
            <span className={twMerge('h-full w-[0.8rem] bg-[#005DAF]', barClassName)}></span>
            <h2
                className={twMerge(
                    'w-full max-w-[55rem] whitespace-pre-line !text-balance normal-case',
                    headingClassName
                )}
                dangerouslySetInnerHTML={{ __html: heading }}
            ></h2>
        </>
    );
};

export default SectionTextColumn;
