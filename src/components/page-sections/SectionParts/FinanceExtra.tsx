import { BulletPoint } from '@/components/page-sections';
import HTMLReactParser from 'html-react-parser';
import { ReactNode } from 'react';

interface FinanceExtraInterface {
    priceText?: string;
    paragraphs: string | '';
    priceDescription?: string;
    list: ReactNode[];
}

/**
 * Finance component for using it in side image section's extra content
 *
 * @returns {*}  {JSX.Element}
 */
const FinanceExtra = ({ priceText, priceDescription, paragraphs, list }: FinanceExtraInterface): JSX.Element => {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                {priceText && (
                    <span className="font-latoBold text-[2.8rem] normal-case leading-[3.2rem] text-heading2">
                        {priceText}
                    </span>
                )}
                {priceDescription && (
                    <span className="font-mulishBold text-[2rem] lowercase leading-[2.8rem] text-heading2 first-letter:uppercase md:leading-[2.8rem]">
                        {priceDescription}
                    </span>
                )}
            </div>
            <>{HTMLReactParser(paragraphs)}</>
            {/* {paragraphs?.map((paragraph, index) => (
                <p className="mt-6" key={index}>
                    {paragraph}
                </p>
            ))} */}

            <ul className="ml-12 mt-12 grid gap-6">
                {list.map((item, index) => (
                    <li className="flex items-start justify-start gap-4" key={index}>
                        <BulletPoint />
                        <p className="font-mulishBold capitalize">{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FinanceExtra;
