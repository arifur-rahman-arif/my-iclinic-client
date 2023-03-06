import { StackList, StackListInterface } from './StackList';

interface StackColumn2Interface {
    list: StackListInterface[];
    defaultClassName?: string;
    className?: string;
}

/**
 * Stack column for the side image section
 *
 * @returns {*}  {JSX.Element}
 */
const StackColumn2 = ({
    list,
    defaultClassName = 'ml-10 grid gap-12 md:ml-0 md:gap-[4.5rem]',
    className
}: StackColumn2Interface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className}`}>
            {list.map((item, index) => (
                <StackList key={index} pillText={item.pillText} title={item.title} description={item.description} />
            ))}
        </div>
    );
};

export default StackColumn2;
