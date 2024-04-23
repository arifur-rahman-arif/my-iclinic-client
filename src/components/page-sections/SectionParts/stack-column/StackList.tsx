import { twMerge } from 'tailwind-merge';

export interface StackListInterface {
    pillText?: string;
    title: string;
    description: string[];
    className?: string;
    titleBgAttribute?: boolean;
}

/**
 * Stack list
 *
 * @param {StackListInterface} { pillText, title, description }
 * @returns {*}  {JSX.Element}
 */
export const StackList = ({
    pillText,
    title,
    description,
    className,
    titleBgAttribute
}: StackListInterface): JSX.Element => {
    return (
        <div className={twMerge('flex flex-col items-start justify-start gap-6 md:max-w-[46.7rem]', className)}>
            {pillText && (
                <span className="rounded-[10rem] bg-[#FF7F00] px-[0.8rem] py-[0.4rem] font-latoExtraBold text-[1.2rem] uppercase leading-[1.2rem] text-white">
                    {pillText}
                </span>
            )}
            <span className="font-latoBold text-[2rem] normal-case leading-[2.8rem] text-heading">{title}</span>
            {titleBgAttribute && <span className="h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>}
            {description?.length > 0 && description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    );
};
