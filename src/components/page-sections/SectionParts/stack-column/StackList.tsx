export interface StackListInterface {
    pillText?: string;
    title: string;
    description: string[];
}

/**
 * Stack list
 *
 * @param {StackListInterface} { pillText, title, description }
 * @returns {*}  {JSX.Element}
 */
export const StackList = ({ pillText, title, description }: StackListInterface): JSX.Element => {
    return (
        <div className="flex flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
            {pillText && (
                <span className="rounded-[10rem] bg-[#CCD8DD] px-[0.8rem] py-[0.4rem] font-latoExtraBold text-[1.2rem] uppercase leading-[1.2rem] text-heading2">
                    {pillText}
                </span>
            )}
            <span className="font-latoBold text-[2.4rem] normal-case leading-[2.8rem] md:text-[2.8rem] md:leading-[3.2rem]">
                {title}
            </span>
            {description.length > 0 && description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    );
};
