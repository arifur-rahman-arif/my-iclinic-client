import { H3Variant2 } from '@/components/Headings';
import { PercentageRounded } from '@/components/Progressbar';

interface LeftRightHeading1Interface {
    title: string;
    subTitle: string;
    percentage: number;
}

/**
 * Left right section heading component
 *
 * @param {LeftRightHeading1Interface} {}
 * @returns {*}  {JSX.Element}
 */
const LeftRightHeading1 = ({ title, subTitle, percentage }: LeftRightHeading1Interface): JSX.Element => {
    return (
        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
            <H3Variant2 className="col-span-2">{title}</H3Variant2>
            <PercentageRounded percentage={percentage} />
            <span className="max-w-[13rem] font-mulishExtraBold text-[1.6rem] uppercase leading-[1.6rem] text-heading2">
                {subTitle}
            </span>
        </div>
    );
};

export default LeftRightHeading1;
