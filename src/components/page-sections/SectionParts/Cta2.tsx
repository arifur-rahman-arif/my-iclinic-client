import Cta5 from '@/page-sections/SectionParts/Cta5';
import { ReactNode } from 'react';

interface Cta2Interface {
    button1ClassName?: string;
    button1Text?: string;
    button2ClassName?: string;
    sloganTextColor?: string;
    button2Icon?: JSX.Element;
    excludeSloganText?: boolean;
    hoverIcon?: ReactNode;
    button2HoverIcon?: ReactNode;
    className?: string;
}

/**
 * Cta section part
 *
 * @returns {*}  {JSX.Element}
 */
const Cta2 = ({
    button1ClassName,
    button2ClassName,
    button1Text,
    sloganTextColor,
    button2Icon,
    excludeSloganText,
    hoverIcon,
    button2HoverIcon,
    className
}: Cta2Interface): JSX.Element => {
    return (
        <>
            <Cta5 button1Text="Book a suitability check" />
        </>
    );
};

export default Cta2;
